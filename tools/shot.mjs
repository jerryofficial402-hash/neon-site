// Full-size screenshots of a page (top of page) for visual checks.
//   node tools/shot.mjs <url> <out-prefix>   -> <out>-desktop.jpg (1440x860), <out>-mobile.jpg (390x844 @2x)
import puppeteer from 'puppeteer';
const [url, out] = process.argv.slice(2);
const b = await puppeteer.launch({ headless: true });
for (const [name, vp] of [['desktop', { width: 1440, height: 860, deviceScaleFactor: 1 }], ['mobile', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }]]) {
  const p = await b.newPage();
  await p.setViewport(vp);
  await p.setRequestInterception(true);
  p.on('request', r => /googletagmanager|google-analytics/.test(r.url()) ? r.abort() : r.continue());
  await p.goto(url, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await p.screenshot({ path: `${out}-${name}.jpg`, type: 'jpeg', quality: 80 });
  await p.close();
}
await b.close();
console.log('saved', out);
