// Loads every page in the local preview at phone width; reports JS errors, local 4xx/5xx, horizontal overflow.
// node tools/crawl.mjs [baseUrl] [concurrency]
import fs from 'node:fs';
import puppeteer from 'puppeteer';

const base = process.argv[2] || 'http://localhost:4173';
const conc = +(process.argv[3] || 6);
const urls = JSON.parse(fs.readFileSync('tools/out/urls.json', 'utf8'));
const b = await puppeteer.launch({ headless: true });
const issues = [];
let done = 0;

async function visit(url) {
  const p = await b.newPage();
  await p.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await p.setRequestInterception(true);
  const errs = [];
  p.on('request', r => (/googletagmanager|google-analytics|doubleclick|web3forms|youtube|ytimg|wikimedia|unsplash/.test(r.url()) ? r.abort() : r.continue()));
  p.on('pageerror', e => errs.push('js: ' + e.message.split('\n')[0]));
  p.on('dialog', d => { errs.push('dialog: ' + d.message()); d.dismiss(); });
  p.on('response', r => { if (r.url().startsWith(base) && r.status() >= 400) errs.push(r.status() + ' ' + r.url().slice(base.length)); });
  try {
    await p.goto(base + url, { waitUntil: 'load', timeout: 45000 });
    await new Promise(r => setTimeout(r, 600));
    const m = await p.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const wide = [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.right > vw + 2 && getComputedStyle(e).position !== 'fixed'; })
        .slice(0, 2).map(e => e.tagName + '.' + String(e.className).slice(0, 40));
      return { sw: document.documentElement.scrollWidth, vw, wide, header: !!document.querySelector('.nx-header'), footer: !!document.querySelector('.nx-footer') };
    });
    if (m.sw > m.vw + 2) errs.push(`overflow ${m.sw}>${m.vw} ${m.wide.join(' ')}`);
    if (!m.header || !m.footer) errs.push('missing shared header/footer');
  } catch (e) { errs.push('load: ' + e.message.split('\n')[0]); }
  if (errs.length) issues.push({ url, errs: [...new Set(errs)] });
  await p.close();
  if (++done % 50 === 0) console.log(done + '/' + urls.length);
}

const queue = [...urls];
await Promise.all(Array.from({ length: conc }, async () => { while (queue.length) await visit(queue.shift()); }));
await b.close();
fs.writeFileSync('tools/out/crawl.json', JSON.stringify(issues, null, 1));
const tally = {};
for (const i of issues) for (const e of i.errs) { const k = e.replace(/\d+>\d+/, 'N').replace(/\/[^\s]*/, '/…').slice(0, 90); tally[k] = (tally[k] || 0) + 1; }
console.log(`${urls.length} pages, ${issues.length} with issues`);
Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, 25).forEach(([k, v]) => console.log(String(v).padStart(4), k));
