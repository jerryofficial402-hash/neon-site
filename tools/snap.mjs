// node tools/snap.mjs save|compare dir /page1/ /page2/ ...  - full-page screenshots, then pixel compare against a saved set
import fs from 'node:fs';
import puppeteer from 'puppeteer';
import sharp from 'sharp';
const [mode, dir, ...pages] = process.argv.slice(2);
fs.mkdirSync(dir, { recursive: true });
const b = await puppeteer.launch({ headless: true });
let worst = 0;
for (const url of pages) {
  const p = await b.newPage(); await p.setViewport({ width: 1366, height: 900 });
  await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await p.setRequestInterception(true); p.on('request', r => (/google|youtube|ytimg|chatbot\.js/.test(r.url()) ? r.abort() : r.continue()));
  await p.goto((process.env.SNAP_BASE || 'http://localhost:4173') + url, { waitUntil: 'networkidle2' });
  // stable comparison: render every section and always use the web font (the site uses font-display: optional)
  await p.addStyleTag({ content: "@font-face{font-family:SnapSans;src:url(/fonts/geist-latin.woff2);font-weight:100 900;font-display:block}@font-face{font-family:SnapMono;src:url(/fonts/geist-mono-latin.woff2);font-weight:100 900;font-display:block}:root{--nx-sans:SnapSans,sans-serif!important;--nx-mono:SnapMono,monospace!important} main > section, body > section { content-visibility: visible !important; }" });
  await p.evaluate(() => document.fonts.ready);
  await new Promise(r => setTimeout(r, 700));
  const file = dir + '/' + (url.replace(/\W+/g, '_') || 'home') + '.png';
  const buf = await p.screenshot({ fullPage: true }); await p.close();
  if (mode === 'save') { fs.writeFileSync(file, buf); continue; }
  const A = await sharp(file).raw().toBuffer({ resolveWithObject: true }), C = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  if (A.info.height !== C.info.height) { console.log(url, 'HEIGHT', A.info.height, '->', C.info.height); worst = 100; fs.writeFileSync(file.replace('.png', '.new.png'), buf); continue; }
  let d = 0; for (let i = 0; i < A.data.length; i += A.info.channels) if (Math.abs(A.data[i] - C.data[i]) + Math.abs(A.data[i + 1] - C.data[i + 1]) + Math.abs(A.data[i + 2] - C.data[i + 2]) > 30) d++;
  const pct = d / (A.data.length / A.info.channels) * 100; worst = Math.max(worst, pct);
  console.log(url.padEnd(46), pct.toFixed(3) + '%'); if (pct > 0.01) fs.writeFileSync(file.replace('.png', '.new.png'), buf);
}
if (mode !== 'save') console.log('worst', worst.toFixed(3) + '%');
await b.close();
