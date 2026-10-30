// Removes dead and duplicate code from every page, without changing what renders:
//   1. inline copies of Tailwind (the page already loads /css/tailwind.css)
//   2. inline <style> rules whose selector matches nothing on the page (checked in a browser with JS off);
//      state selectors (:hover, :focus...) and JS-created elements (chat widget, map labels, motion) are kept
//   3. HTML comments
//   4. inline scripts that only look up element ids that are not on the page
//   5. duplicate <meta name|property> tags in <head> (first one kept) and the leftover #mobile-menu
// Edits are applied by source offset (parse5), so everything else stays byte-for-byte. Safe to re-run.
// node tools/clean-html.mjs [baseUrl] [--dry]
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';
import postcss from 'postcss';
import puppeteer from 'puppeteer';

const base = process.argv.find(a => a.startsWith('http')) || 'http://localhost:4173';
const DRY = process.argv.includes('--dry');
const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && !p.includes('route-template') && files.push(p); } })('.');
const urlFor = f => { const r = f.split(path.sep).join('/'); return r === 'index.html' ? '/' : '/' + r.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '/'); };

const TAILWIND_COPY = /--tw-border-spacing|tailwindcss v3/;
const norm = s => s.replace(/\s+/g, ' ').replace(/\s*([>+~,])\s*/g, '$1').replace(/'/g, '"').trim();
const textOf = el => (el.childNodes || []).map(c => c.value || '').join('');
const attr = (el, n) => ((el.attrs || []).find(a => a.name === n) || {}).value;

// Browser pass (JS disabled = the static page): per <style> element in document order, the dead selectors
async function deadSelectors(page, url) {
  await page.goto(base + url, { waitUntil: 'domcontentloaded', timeout: 45000 });
  return page.evaluate(() => {
    const KEEP = /:(hover|focus|active|visited|checked|focus-within|focus-visible|target|disabled|placeholder-shown|-webkit-|-moz-)|::|\.(active|open|show|hidden|visible|is-|js-|scrolled|header-scrolled|expanded|selected|current|nx-will|nx-in|state-label)|neon-chat|chat-|map-tooltip|lenis|@/;
    return [...document.querySelectorAll('style')].filter(st => !st.closest('noscript')).map(st => {
      const dead = [];
      let rules; try { rules = st.sheet.cssRules; } catch { return dead; }
      const walk = list => { for (const r of list) {
        if (r.cssRules && !r.selectorText) { walk(r.cssRules); continue; }
        if (!r.selectorText) continue;
        const alive = r.selectorText.split(',').some(s => { s = s.trim(); if (KEEP.test(s)) return true; try { return !!document.querySelector(s.replace(/::?[a-z-]+(\([^)]*\))?/g, '') || '*'); } catch { return true; } });
        if (!alive) dead.push(r.selectorText);
      } };
      walk(rules);
      return dead;
    });
  });
}

const b = await puppeteer.launch({ headless: true });
const page = await b.newPage();
await page.setJavaScriptEnabled(false);
await page.setRequestInterception(true);
page.on('request', r => (/\.(png|jpe?g|webp|gif|svg|mp4|woff2?)(\?|$)|google|youtube|ytimg|unsplash|wikimedia/.test(r.url()) ? r.abort() : r.continue()));

const stats = { files: 0, changed: 0, tailwindCopies: 0, deadRules: 0, emptiedStyles: 0, comments: 0, deadScripts: 0, dupMeta: 0, mobileMenu: 0, bytesBefore: 0, bytesAfter: 0 };
for (const f of files) {
  stats.files++;
  const src = fs.readFileSync(f, 'utf8');
  stats.bytesBefore += src.length;
  const doc = parse(src, { sourceCodeLocationInfo: true });
  const edits = []; // [start, end, replacement]
  const styles = [], scripts = [], comments = [], metas = [];
  let mobileMenu = null, hasTailwindLink = src.includes('/css/tailwind.css');
  (function walk(n, inHead) {
    for (const c of n.childNodes || []) {
      if (c.nodeName === '#comment') { comments.push(c); continue; }
      if (c.tagName === 'style') styles.push(c);
      if (c.tagName === 'script' && !attr(c, 'src') && attr(c, 'type') !== 'application/ld+json') scripts.push(c);
      if (c.tagName === 'meta' && inHead && (attr(c, 'name') || attr(c, 'property'))) metas.push(c);
      if (attr(c, 'id') === 'mobile-menu') mobileMenu = c;
      walk(c.content || c, inHead || c.tagName === 'head');
    }
  })(doc, false);
  const ids = new Set(); (function walk(n) { for (const c of n.childNodes || []) { const id = attr(c, 'id'); if (id) ids.add(id); walk(c.content || c); } })(doc);
  // Remove a node; take its line with it only when it sits alone on that line (never glue words together)
  const cut = node => {
    const l = node.sourceCodeLocation; if (!l) return;
    let s = l.startOffset, e = l.endOffset;
    let a = s; while (a > 0 && /[ \t]/.test(src[a - 1])) a--;
    let z = e; while (/[ \t]/.test(src[z])) z++;
    const lineStart = a === 0 || src[a - 1] === '\n';
    const lineEnd = z >= src.length || src[z] === '\n' || src[z] === '\r';
    if (lineStart && lineEnd) { s = a; e = z; if (src[e] === '\r') e++; if (src[e] === '\n') e++; }
    edits.push([s, e, '']);
  };

  // 1 + 2: inline styles
  const dead = await deadSelectors(page, urlFor(f)).catch(() => null);
  styles.forEach((st, i) => {
    const css = textOf(st);
    if (hasTailwindLink && TAILWIND_COPY.test(css)) { cut(st); stats.tailwindCopies++; return; }
    if (!dead || !dead[i] || !dead[i].length) return;
    const kill = new Set(dead[i].map(norm));
    let root; try { root = postcss.parse(css); } catch { return; }
    let removed = 0;
    root.walkRules(r => { if (r.parent.type === 'rule') return; if (kill.has(norm(r.selector))) { r.remove(); removed++; } });
    root.walkAtRules(a => { if (/media|supports/.test(a.name) && !a.nodes.some(n => n.type !== 'comment')) a.remove(); });
    if (!removed) return;
    stats.deadRules += removed;
    const next = root.toString();
    if (!next.trim() || !root.nodes.some(n => n.type !== 'comment')) { cut(st); stats.emptiedStyles++; return; }
    const loc = st.sourceCodeLocation;
    edits.push([loc.startTag.endOffset, loc.endTag.startOffset, next]);
  });
  // 3: comments
  for (const c of comments) { cut(c); stats.comments++; }
  // 4: inline scripts that only reference missing ids
  for (const s of scripts) {
    const js = textOf(s);
    const refs = [...js.matchAll(/getElementById\(\s*['"]([^'"]+)['"]\s*\)/g)].map(m => m[1]);
    if (refs.length && refs.every(id => !ids.has(id)) && !/fetch\(|dataLayer|gtag|api\/leads/.test(js)) { cut(s); stats.deadScripts++; }
  }
  // 5: duplicate head meta + leftover mobile menu
  const seenMeta = new Set();
  for (const m of metas) { const k = (attr(m, 'name') || '') + '|' + (attr(m, 'property') || ''); if (seenMeta.has(k)) { cut(m); stats.dupMeta++; } else seenMeta.add(k); }
  if (mobileMenu) { cut(mobileMenu); stats.mobileMenu++; }

  if (!edits.length) { stats.bytesAfter += src.length; continue; }
  edits.sort((a, b) => b[0] - a[0]);
  let out = src, floor = Infinity;
  for (const [s, e, t] of edits) { if (e > floor) continue; out = out.slice(0, s) + t + out.slice(e); floor = s; }
  stats.bytesAfter += out.length;
  if (out !== src) { stats.changed++; if (!DRY) fs.writeFileSync(f, out); }
}
await b.close();
console.log({ ...stats, savedKB: Math.round((stats.bytesBefore - stats.bytesAfter) / 1024), dry: DRY });
