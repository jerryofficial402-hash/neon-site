// Frames of the homepage 3D journey for visual checks.
//   node tools/shot-j3.mjs <url> <out-prefix> <ms,ms,...> [mobile]
import puppeteer from 'puppeteer';
const [url, out, times, mobile] = process.argv.slice(2);
const b = await puppeteer.launch({ headless: true });
const p = await b.newPage();
await p.setViewport(mobile ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true } : { width: 1440, height: 900 });
await p.setRequestInterception(true);
p.on('request', r => /googletagmanager|google-analytics/.test(r.url()) ? r.abort() : r.continue());
const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto(url, { waitUntil: 'networkidle2' });
const el = await p.$('.nx-j3');
await el.evaluate(e => window.scrollTo({ top: e.getBoundingClientRect().top + scrollY - 100, behavior: 'instant' }));
let last = 0;
for (const t of times.split(',').map(Number)) {
  await new Promise(r => setTimeout(r, t - last)); last = t;
  await el.screenshot({ path: `${out}-${t}.jpg`, type: 'jpeg', quality: 72 });
}
console.log(errs.length ? 'JS errors: ' + errs.join(' | ') : 'no errors');
await b.close();
