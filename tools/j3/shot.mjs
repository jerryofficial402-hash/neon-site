// node tools/j3/shot.mjs "<query>" out-prefix ms,ms [mobile]
import puppeteer from 'puppeteer';
const [qs, out, times, mobile] = process.argv.slice(2);
const b = await puppeteer.launch({ headless: true, args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage();
await p.setViewport(mobile ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true } : { width: 1280, height: 640 });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto('http://localhost:4173/tools/j3/test.html?' + qs, { waitUntil: 'networkidle2' });
let last = 0;
for (const t of times.split(',').map(Number)) { await new Promise(r => setTimeout(r, t - last)); last = t; await p.screenshot({ path: `${out}-${t}.jpg`, type: 'jpeg', quality: 75 }); }
console.log(errs.length ? 'ERR: ' + errs.join(' | ') : 'no errors');
await b.close();
