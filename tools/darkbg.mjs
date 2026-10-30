// Lists large dark-background blocks (sections/divs wider than 600px, taller than 120px) on each page.
import fs from 'node:fs';
import puppeteer from 'puppeteer';
const base = process.argv[2] || 'http://localhost:4173';
const conc = +(process.argv[3] || 4);
const urls = JSON.parse(fs.readFileSync('tools/out/urls.json', 'utf8'));
const b = await puppeteer.launch({ headless: true });
const found = [];
let done = 0;
async function run(url) {
  let p;
  try {
    p = await b.newPage(); await p.setViewport({ width: 1366, height: 900 });
    await p.setRequestInterception(true); p.on('request', r => (/google|youtube|ytimg|unsplash|wikimedia/.test(r.url()) ? r.abort() : r.continue()));
    await p.goto(base + url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await new Promise(r => setTimeout(r, 300));
    const r = await p.evaluate(() => [...document.querySelectorAll('body *')].filter(e => {
      if (e.closest('.nx-header,.nx-footer,#neon-chat-window,#neon-chat-bubble')) return false;
      const rc = e.getBoundingClientRect(); if (rc.width < 600 || rc.height < 120) return false;
      const m = getComputedStyle(e).backgroundColor.match(/rgba?\(([^)]+)\)/); if (!m) return false;
      const [R, G, B, A = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); if (A < 0.5) return false;
      return (0.2126 * R + 0.7152 * G + 0.0722 * B) < 110 && !['BUTTON', 'A'].includes(e.tagName);
    }).slice(0, 3).map(e => `${e.tagName}.${String(e.className).slice(0, 80)} id=${e.id} style=${(e.getAttribute('style') || '').slice(0, 60)} bg=${getComputedStyle(e).backgroundColor}`));
    if (r.length) found.push({ url, r });
  } catch (e) { found.push({ url, error: e.message.split('\n')[0] }); }
  if (p) await p.close().catch(() => {});
  if (++done % 25 === 0) console.log(done);
}
const q = [...urls];
await Promise.all(Array.from({ length: conc }, async () => { while (q.length) await run(q.shift()); }));
await b.close();
fs.writeFileSync('tools/out/darkbg.json', JSON.stringify(found, null, 1));
const tally = {}; for (const f of found) for (const x of f.r || []) { const k = x.replace(/id=\S*/, '').replace(/bg=.*/, '') + x.match(/bg=.*/); tally[k] = (tally[k] || 0) + 1; }
console.log(found.length, 'pages with dark blocks'); Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 15).forEach(([k, v]) => console.log(v, k));
