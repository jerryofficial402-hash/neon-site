// Screenshots pages twice (normal vs. with a resource blocked) and reports the share of pixels that differ.
// node tools/pixel-diff.mjs <regex-of-url-to-block> [width] /page1/ /page2/ ...
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const [blockSrc, w = '1366', ...pages] = process.argv.slice(2);
const block = new RegExp(blockSrc);
const b = await puppeteer.launch({ headless: true });
async function shot(url, blockIt) {
  const p = await b.newPage(); await p.setViewport({ width: +w, height: 900 });
  await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]); // no scroll-in animation
  await p.setRequestInterception(true);
  p.on('request', r => (/google|youtube|ytimg|chatbot\.js/.test(r.url()) || (blockIt && block.test(r.url())) ? r.abort() : r.continue()));
  await p.goto('http://localhost:4173' + url, { waitUntil: 'networkidle2' });
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 30)); } scrollTo(0, 0); });
  await new Promise(r => setTimeout(r, 600));
  const buf = await p.screenshot({ fullPage: true });
  await p.close();
  return buf;
}
let worst = 0;
for (const url of pages) {
  const [a, c] = [await shot(url, false), await shot(url, true)];
  const A = await sharp(a).raw().toBuffer({ resolveWithObject: true });
  const C = await sharp(c).raw().toBuffer({ resolveWithObject: true });
  if (A.info.height !== C.info.height || A.info.width !== C.info.width) { console.log(url, 'SIZE DIFFERS', A.info.height, C.info.height); worst = 1; continue; }
  let diff = 0; const n = A.data.length / A.info.channels;
  for (let i = 0; i < A.data.length; i += A.info.channels) if (Math.abs(A.data[i] - C.data[i]) + Math.abs(A.data[i + 1] - C.data[i + 1]) + Math.abs(A.data[i + 2] - C.data[i + 2]) > 30) diff++;
  const pct = diff / n * 100; worst = Math.max(worst, pct);
  console.log(url.padEnd(48), (pct).toFixed(3) + '% pixels differ', A.info.height + 'px tall');
}
console.log('worst', worst.toFixed(3) + '%');
await b.close();
