// Screenshot specific sections of a page (desktop 1440 and mobile 390) for visual checks.
//   node tools/shot-sections.mjs <url> <out-prefix> <selector> [selector...]
import puppeteer from 'puppeteer';
const [url, out, ...sels] = process.argv.slice(2);
const b = await puppeteer.launch({ headless: true });
for (const [name, vp] of [['d', { width: 1440, height: 900 }], ['m', { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true }]]) {
  const p = await b.newPage();
  await p.setViewport(vp);
  await p.setRequestInterception(true);
  p.on('request', r => /googletagmanager|google-analytics/.test(r.url()) ? r.abort() : r.continue());
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(url, { waitUntil: 'networkidle2' });
  for (const [i, s] of sels.entries()) {
    const el = await p.$(s);
    if (!el) { console.log('missing', s); continue; }
    await el.evaluate(e => e.scrollIntoView({ block: 'start' }));
    await new Promise(r => setTimeout(r, s.includes('nx-jr') ? 3200 : 1200));
    await el.screenshot({ path: `${out}-${name}-${i}.jpg`, type: 'jpeg', quality: 72 });
  }
  if (errs.length) console.log(name, 'JS errors:', errs.join(' | '));
  await p.close();
}
await b.close();
console.log('ok');
