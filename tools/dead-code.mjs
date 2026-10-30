// Finds dead and duplicate code per page in a real browser:
//   inline <style> rules whose selector matches nothing (ignoring state/JS-added selectors),
//   duplicate <link>/<script src>/meta tags, repeated JSON-LD @types, inline scripts that look up ids not on the page.
// node tools/dead-code.mjs [baseUrl] [concurrency]   (URLs from tools/out/urls.json) -> tools/out/dead-code.json
import fs from 'node:fs';
import puppeteer from 'puppeteer';

const base = process.argv[2] || 'http://localhost:4173';
const conc = +(process.argv[3] || 4);
const urls = JSON.parse(fs.readFileSync('tools/out/urls.json', 'utf8'));
const b = await puppeteer.launch({ headless: true });
const out = [];
async function run(url) {
  let p;
  try {
    p = await b.newPage(); await p.setViewport({ width: 1366, height: 900 });
    await p.setRequestInterception(true); p.on('request', r => (/google|youtube|ytimg|unsplash|wikimedia/.test(r.url()) ? r.abort() : r.continue()));
    await p.goto(base + url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    const r = await p.evaluate(() => {
      // selectors that only match after interaction or JS (keep them)
      const DYNAMIC = /:(hover|focus|active|visited|checked|focus-within|focus-visible|target|disabled|placeholder|-webkit-|-moz-)|::|\.(active|open|show|hidden|visible|is-|js-|scrolled|header-scrolled|expanded|selected|current)/;
      const res = { deadRules: 0, liveRules: 0, deadBytes: 0, deadSamples: [], dupTags: [], ldTypes: {}, deadScriptIds: [] };
      for (const st of document.querySelectorAll('style')) {
        if (st.id === 'neon-chat-styles') continue;
        let rules; try { rules = st.sheet.cssRules; } catch { continue; }
        const walk = list => { for (const rule of list) {
          if (rule.cssRules && !rule.selectorText) { walk(rule.cssRules); continue; } // @media
          if (!rule.selectorText) continue;
          const sels = rule.selectorText.split(',').map(s => s.trim());
          const alive = sels.some(s => { if (DYNAMIC.test(s)) return true; try { return !!document.querySelector(s.replace(/::?[a-z-]+(\([^)]*\))?/g, '') || '*'); } catch { return true; } });
          if (alive) res.liveRules++; else { res.deadRules++; res.deadBytes += rule.cssText.length; if (res.deadSamples.length < 6) res.deadSamples.push(rule.selectorText.slice(0, 70)); }
        } };
        walk(rules);
      }
      const seen = {};
      for (const el of document.querySelectorAll('head link[rel="stylesheet"], script[src], head meta[name], head meta[property], link[rel="canonical"]')) {
        const k = el.tagName + ' ' + (el.getAttribute('href') || el.getAttribute('src') || el.getAttribute('name') || el.getAttribute('property') || el.getAttribute('rel')).replace(/\?v=.*/, '');
        seen[k] = (seen[k] || 0) + 1;
      }
      res.dupTags = Object.entries(seen).filter(([, n]) => n > 1).map(([k, n]) => k + ' x' + n);
      for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
        try { const j = JSON.parse(s.textContent); const items = j['@graph'] || (Array.isArray(j) ? j : [j]); for (const it of items) { const t = [].concat(it['@type'] || 'none').join('/'); res.ldTypes[t] = (res.ldTypes[t] || 0) + 1; } } catch { res.ldTypes.INVALID = (res.ldTypes.INVALID || 0) + 1; }
      }
      for (const s of document.querySelectorAll('script:not([src]):not([type="application/ld+json"])')) {
        const ids = [...s.textContent.matchAll(/getElementById\(\s*['"]([^'"]+)['"]\s*\)/g)].map(m => m[1]);
        if (ids.length && ids.every(id => !document.getElementById(id))) res.deadScriptIds.push(ids.slice(0, 3).join(',') + ' (' + s.textContent.length + 'b)');
      }
      res.comments = (() => { let n = 0; const w = document.createTreeWalker(document, NodeFilter.SHOW_COMMENT); while (w.nextNode()) n++; return n; })();
      return res;
    });
    out.push({ url, ...r });
  } catch (e) { out.push({ url, error: e.message.split('\n')[0] }); }
  if (p) await p.close().catch(() => {});
}
const q = [...urls];
await Promise.all(Array.from({ length: conc }, async () => { while (q.length) await run(q.shift()); }));
await b.close();
fs.writeFileSync('tools/out/dead-code.json', JSON.stringify(out, null, 1));
const sum = (k) => out.reduce((a, r) => a + (r[k] || 0), 0);
console.log(`${out.length} pages | inline CSS rules dead ${sum('deadRules')} / live ${sum('liveRules')} (${(sum('deadBytes') / 1024).toFixed(0)}KB dead) | comments ${sum('comments')}`);
const dt = {}; out.forEach(r => (r.dupTags || []).forEach(t => dt[t] = (dt[t] || 0) + 1)); console.log('duplicate tags:', JSON.stringify(Object.entries(dt).sort((a, b) => b[1] - a[1]).slice(0, 8)));
const ld = {}; out.forEach(r => Object.entries(r.ldTypes || {}).forEach(([t, n]) => { if (n > 1 || t === 'INVALID') ld[t + ' x' + n] = (ld[t + ' x' + n] || 0) + 1; })); console.log('repeated JSON-LD types per page:', JSON.stringify(Object.entries(ld).sort((a, b) => b[1] - a[1]).slice(0, 10)));
const ds = {}; out.forEach(r => (r.deadScriptIds || []).forEach(t => { const k = t.replace(/\(\d+b\)/, ''); ds[k] = (ds[k] || 0) + 1; })); console.log('dead inline scripts:', JSON.stringify(Object.entries(ds).sort((a, b) => b[1] - a[1]).slice(0, 10)));
const smp = {}; out.forEach(r => (r.deadSamples || []).forEach(t => smp[t] = (smp[t] || 0) + 1)); console.log('dead rule samples:', JSON.stringify(Object.entries(smp).sort((a, b) => b[1] - a[1]).slice(0, 14)));
