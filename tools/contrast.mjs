// Finds text that is hard or impossible to read: computes each visible text element's colour against the
// first opaque background behind it (walking up the DOM) and flags WCAG contrast below the threshold.
// node tools/contrast.mjs [baseUrl] [concurrency] [width]   (URLs from tools/out/urls.json)
import fs from 'node:fs';
import puppeteer from 'puppeteer';

const base = process.argv[2] || 'http://localhost:4173';
const conc = +(process.argv[3] || 4);
const width = +(process.argv[4] || 1366);
const urls = JSON.parse(fs.readFileSync('tools/out/urls.json', 'utf8'));
const b = await puppeteer.launch({ headless: true });
const results = [];
let done = 0;

async function audit(url) {
  let p;
  try {
    p = await b.newPage();
    await p.setViewport({ width, height: 900 });
    await p.setRequestInterception(true);
  } catch (e) { results.push({ url, error: e.message.split('\n')[0] }); if (p) await p.close().catch(() => {}); done++; return; }
  p.on('request', r => (/googletagmanager|google-analytics|doubleclick|youtube|ytimg|unsplash|wikimedia|maps\.google|google\.com\/maps/.test(r.url()) ? r.abort() : r.continue()));
  try {
    await p.goto(base + url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    // scroll through once so scroll-in animations (js/nx-motion.js) have revealed everything
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } scrollTo(0, 0); });
    await new Promise(r => setTimeout(r, 900));
    const found = await p.evaluate(() => {
      const parse = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r, g, b, a }; };
      const lum = ({ r, g, b }) => { const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
      const mix = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
      function bgOf(el) {
        const layers = [];
        for (let e = el; e; e = e.parentElement) {
          const s = getComputedStyle(e);
          if (s.backgroundImage && s.backgroundImage !== 'none' && !s.backgroundImage.startsWith('radial-gradient(rgb(217')) return { img: true };
          const c = parse(s.backgroundColor);
          if (c && c.a > 0) { layers.push(c); if (c.a >= 0.99) break; }
        }
        let bg = { r: 255, g: 255, b: 255, a: 1 };
        for (const l of layers.reverse()) bg = mix(l, bg);
        return bg;
      }
      const out = [];
      const seen = new Set();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        const t = n.textContent.trim();
        if (t.length < 2 || /^[★☆\s]+$/.test(t)) continue;
        const el = n.parentElement;
        if (!el || seen.has(el) || el.closest('script,style,noscript,svg,[aria-hidden="true"],.nx-header,.nx-mobile,option')) continue;
        seen.add(el);
        const s = getComputedStyle(el);
        if (s.visibility === 'hidden' || s.display === 'none' || +s.opacity === 0) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2) continue;
        let hidden = false;
        for (let e = el; e; e = e.parentElement) { const cs = getComputedStyle(e); if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) { hidden = true; break; } }
        if (hidden) continue;
        const fg = parse(s.color); if (!fg) continue;
        const bg = bgOf(el); if (bg.img) continue;
        const cr = ratio(mix(fg, bg), bg);
        const big = parseFloat(s.fontSize) >= 24 || (parseFloat(s.fontSize) >= 18.6 && +s.fontWeight >= 600);
        if (cr < (big ? 2.6 : 3.2)) out.push({ cr: +cr.toFixed(2), text: t.slice(0, 50), tag: el.tagName.toLowerCase(), cls: String(el.className).slice(0, 90), style: (el.getAttribute('style') || '').slice(0, 80), color: s.color, bg: `rgb(${Math.round(bg.r)}, ${Math.round(bg.g)}, ${Math.round(bg.b)})`, y: Math.round(r.top + scrollY) });
      }
      // layout: hero h1 sizes / empty big gaps
      const h1 = document.querySelector('main h1, h1'); const h1r = h1 && h1.getBoundingClientRect();
      return { low: out.slice(0, 40), h1: h1 ? { lines: Math.round(h1r.height / parseFloat(getComputedStyle(h1).lineHeight)), w: Math.round(h1r.width), fs: getComputedStyle(h1).fontSize } : null, sw: document.documentElement.scrollWidth };
    });
    results.push({ url, ...found });
  } catch (e) { results.push({ url, error: e.message.split('\n')[0] }); }
  await p.close().catch(() => {});
  if (++done % 50 === 0) console.log(done + '/' + urls.length);
}

const q = [...urls];
// a single hung page must not stall the run
const guarded = url => Promise.race([audit(url), new Promise(r => setTimeout(r, 90000))]);
await Promise.all(Array.from({ length: conc }, async () => { while (q.length) await guarded(q.shift()); }));
await b.close();
fs.writeFileSync(`tools/out/contrast-${width}.json`, JSON.stringify(results, null, 1));
const bad = results.filter(r => r.low && r.low.length);
console.log(`${results.length} pages, ${bad.length} with low-contrast text, ${results.reduce((a, r) => a + (r.low ? r.low.length : 0), 0)} elements, errors ${results.filter(r => r.error).length}`);
const tally = {};
for (const r of bad) for (const l of r.low) { const k = `${l.color} on ${l.bg} | ${l.cls.split(' ').filter(c => /text-|bg-|color/.test(c)).slice(0, 3).join(' ')}`; tally[k] = (tally[k] || 0) + 1; }
Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 40).forEach(([k, v]) => console.log(String(v).padStart(5), k));
