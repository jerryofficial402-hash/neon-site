// Full-page screenshot cut into strips for review: node tools/strips.mjs <path> <outPrefix> [width] [stripHeight]
import puppeteer from 'puppeteer';
import sharp from 'sharp';
const [path, out, w = '1366', sh = '1800'] = process.argv.slice(2);
const b = await puppeteer.launch({ headless: true });
const p = await b.newPage();
await p.setViewport({ width: +w, height: 900 });
await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
await p.setRequestInterception(true);
p.on('request', r => (/googletagmanager|google-analytics|youtube\.com\/embed|chatbot\.js/.test(r.url()) ? r.abort() : r.continue()));
await p.goto('http://localhost:4173' + path, { waitUntil: 'networkidle2', timeout: 60000 });
await p.addStyleTag({ content: '*{content-visibility:visible!important;animation:none!important;transition:none!important} .nx-header{position:absolute!important}' });
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } window.scrollTo(0, 0); });
await new Promise(r => setTimeout(r, 500));
const buf = await p.screenshot({ fullPage: true });
await b.close();
const img = sharp(buf); const { width, height } = await img.metadata();
const n = Math.ceil(height / +sh);
for (let i = 0; i < n; i++) {
  const top = i * +sh, h = Math.min(+sh, height - top);
  await sharp(buf).extract({ left: 0, top, width, height: h }).resize({ width: 820 }).jpeg({ quality: 70 }).toFile(`${out}-${i}.jpg`);
}
console.log(`${path}: ${height}px -> ${n} strips`);
