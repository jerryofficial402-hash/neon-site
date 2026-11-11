// Structural layout fixes (safe to re-run):
//  - a sidebar (.lg:col-span-1) that fell outside its .lg:grid-cols-3 grid is moved back inside it
//  - <main> on every page except the homepages gets class "nx-inner" (scopes the inner-page layout rules in theme.css)
// node tools/fix-layout-html.mjs [--dry]
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
const DRY = process.argv.includes('--dry');
const files = [];
(function w(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (/^(node_modules|\.git|tools|\.claude|\.agents|api|\.vercel)$/.test(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? w(p) : p.endsWith('.html') && !p.includes('route-template') && files.push(p); } })('.');
const stats = { sidebar: [], inner: 0 };
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  let html = src;
  if (!src.includes('nx-trust') && !/<main[^>]*\bnx-inner\b/.test(src)) {
    html = html.replace(/<main(\s[^>]*)?>/, (m, a = '') => /class="/.test(a) ? m.replace(/class="/, 'class="nx-inner ') : `<main class="nx-inner"${a}>`);
    if (html !== src) stats.inner++;
  }
  if (/lg:col-span-1/.test(html)) {
    const $ = cheerio.load(html, { decodeEntities: false });
    let moved = 0;
    $('div').filter((i, e) => /(^|\s)lg:grid-cols-3(\s|$)/.test($(e).attr('class') || '')).each((i, g) => {
      const nx = $(g).next();
      if (nx.length && /(^|\s)lg:col-span-1(\s|$)/.test(nx.attr('class') || '')) { $(g).append(nx); moved++; }
    });
    if (moved) { html = $.html(); stats.sidebar.push(f); }
  }
  if (html !== src && !DRY) fs.writeFileSync(f, html);
}
console.log({ inner: stats.inner, sidebarFixed: stats.sidebar, dry: DRY });
