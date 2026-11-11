// Desktop layout audit (1366px). For every page in tools/out/urls.json reports:
//  - edges:  content blocks whose left edge differs from the site wrap (sections not lined up)
//  - gaps:   empty vertical stretches inside <main> taller than 140px
//  - orphan: a grid with an empty column (a card at half width with nothing beside it)
//  - narrow: a whole section's content noticeably narrower than the wrap
// node tools/layout-audit.mjs [concurrency]   -> tools/out/layout-audit.json
import fs from 'node:fs';
import puppeteer from 'puppeteer';
const urls = JSON.parse(fs.readFileSync(process.env.URLS || 'tools/out/urls.json', 'utf8'));
const OUT = process.env.OUT || 'tools/out/layout-audit.json';
const conc = +(process.argv[2] || 5);
const b = await puppeteer.launch({ headless: true, protocolTimeout: 240000 });
const results = [];
let done = 0;

async function visit(url) {
  const p = await b.newPage();
  await p.setViewport({ width: 1366, height: 900 });
  await p.setRequestInterception(true);
  p.on('request', r => (/googletagmanager|google-analytics|youtube|ytimg|chatbot\.js|web3forms/.test(r.url()) ? r.abort() : r.continue()));
  try {
    await p.goto('http://localhost:4173' + url, { waitUntil: 'load', timeout: 60000 });
    await p.addStyleTag({ content: '*{content-visibility:visible!important;animation:none!important;transition:none!important}' });
    await new Promise(r => setTimeout(r, 300));
    const res = await p.evaluate(() => {
      const wrap = document.querySelector('.nx-header .nx-wrap').getBoundingClientRect();
      const L = wrap.left + parseFloat(getComputedStyle(document.querySelector('.nx-header .nx-wrap')).paddingLeft);
      const R = wrap.right - parseFloat(getComputedStyle(document.querySelector('.nx-header .nx-wrap')).paddingRight);
      const W = R - L;
      const main = document.querySelector('main');
      const vis = e => { const s = getComputedStyle(e); return s.display !== 'none' && s.visibility !== 'hidden' && +s.opacity > 0.05; };
      const label = e => (e.querySelector('h2,h3,h1')?.textContent || e.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 50);
      const out = { edges: [], gaps: [], orphan: [], narrow: [] };
      // sections = direct children of main (and their first-level section children)
      const secs = [...main.children].filter(vis);
      for (const s of secs) {
        if (s.matches('.nx-ihero, .nx-cta-band')) continue;
        // content box = union of descendants that carry text or are cards/images, ignoring full-bleed backgrounds
        let l = Infinity, r = -Infinity;
        s.querySelectorAll('h1,h2,h3,h4,p,li,td,th,img,iframe,a.nx-btn,button,table,[class*="rounded"],[class*="border"]').forEach(e => {
          if (!vis(e)) return; const b = e.getBoundingClientRect(); if (b.width < 2 || b.height < 2 || b.width > 1300) return;
          l = Math.min(l, b.left); r = Math.max(r, b.right);
        });
        if (!isFinite(l)) continue;
        const name = label(s);
        if (Math.abs(l - L) > 12 && l > L - 60) out.edges.push(`${name} (left ${Math.round(l - L)}px)`);
        if (r - l < W * 0.8 && Math.abs((l + r) / 2 - (L + R) / 2) > 40) out.narrow.push(`${name} (${Math.round((r - l) / W * 100)}% wide, off-centre)`);
      }
      // vertical gaps between content inside main
      const spans = [];
      main.querySelectorAll('h1,h2,h3,h4,p,li,td,img,iframe,a,button,input,select,label,[class*="border"],[class*="shadow"],[class*="bg-"]').forEach(e => {
        if (!vis(e)) return; const b = e.getBoundingClientRect(); if (b.width < 2 || b.height < 2) return;
        const bg = getComputedStyle(e).backgroundColor; const plain = /^(h|p|li|td|img|iframe|a|button|input|select|label)$/i.test(e.tagName);
        if (!plain && b.width > 1300 && b.height > 200) return; // full-bleed section backgrounds are not content
        spans.push([b.top + scrollY, b.bottom + scrollY]);
      });
      spans.sort((a, b) => a[0] - b[0]);
      let end = spans.length ? spans[0][1] : 0;
      const mainBottom = main.getBoundingClientRect().bottom + scrollY;
      for (const [t, bt] of spans) { if (t - end > 140) out.gaps.push(`${Math.round(t - end)}px empty at y=${Math.round(end)}`); end = Math.max(end, bt); }
      if (mainBottom - end > 160) out.gaps.push(`${Math.round(mainBottom - end)}px empty at end of main`);
      // grids with an empty column
      main.querySelectorAll('*').forEach(g => {
        const cs = getComputedStyle(g);
        if (cs.display !== 'grid' || !vis(g)) return;
        const cols = cs.gridTemplateColumns.split(' ').filter(Boolean).length;
        const kids = [...g.children].filter(vis);
        if (cols >= 2 && kids.length === 1 && g.getBoundingClientRect().width > 600) out.orphan.push(`${label(g)} (${cols} cols, 1 child)`);
      });
      return out;
    });
    const n = res.edges.length + res.gaps.length + res.orphan.length + res.narrow.length;
    if (n) results.push({ url, ...res });
  } catch (e) { results.push({ url, error: e.message.split('\n')[0] }); }
  await p.close();
  if (++done % 50 === 0) console.log(done + '/' + urls.length);
}
const q = [...urls];
await Promise.all(Array.from({ length: conc }, async () => { while (q.length) await visit(q.shift()); }));
await b.close();
fs.writeFileSync(OUT, JSON.stringify(results, null, 1));
const t = { edges: 0, gaps: 0, orphan: 0, narrow: 0, error: 0 };
for (const r of results) for (const k of Object.keys(t)) if (r[k] && (r[k].length || k === 'error')) t[k]++;
console.log(`${urls.length} pages, ${results.length} with findings`, t);
