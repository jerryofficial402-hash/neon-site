// Renders the device screen textures for the homepage 3D journey (WebGL version).
//   node tools/j3-screens.mjs [baseUrl]
// screen-1: the real homepage (hero + quote calculator) at desktop size.
// screen-2..5: the Neon UI mockups from the old CSS journey (markup removed from index.html after
// commit 7aea3e5; check that commit out to re-render them).
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import fs from 'node:fs';
const base = process.argv[2] || 'http://localhost:4173';
const OUT = 'images/3d';
fs.mkdirSync(OUT, { recursive: true });
const b = await puppeteer.launch({ headless: true });
const p = await b.newPage();
await p.setRequestInterception(true);
p.on('request', r => /googletagmanager|google-analytics|clarity/.test(r.url()) ? r.abort() : r.continue());

// 1. real homepage, laptop screen (16:10)
await p.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
await p.goto(base + '/', { waitUntil: 'networkidle2' });
await p.evaluate(() => { document.querySelectorAll('[class*="cookie"],[id*="cookie"],.nx-chat,#chatbot').forEach(e => e.style.display = 'none'); });
await new Promise(r => setTimeout(r, 800));
const s1 = await p.screenshot({ type: 'png' });
await sharp(s1).resize(1600, 1000).webp({ quality: 86 }).toFile(`${OUT}/screen-1.webp`);

// 2..5: flatten each mock screen
const sizes = { 1: [1600, 1000], 2: [1200, 900], 3: [600, 1300], 4: [600, 1300] };
await p.setViewport({ width: 1700, height: 1400, deviceScaleFactor: 1 });
for (const i of [1, 2, 3, 4]) {
  const [w, h] = sizes[i];
  const png = await p.evaluate(async (i, w, h) => {
    const src = document.querySelector(`.nx-j3-dev[data-i="${i}"] .nx-j3-screen`);
    let host = document.getElementById('shot-host');
    if (!host) {
      host = document.createElement('div'); host.id = 'shot-host';
      host.style.cssText = 'position:fixed;left:0;top:0;z-index:99999;background:#fff';
      const st = document.createElement('style');
      st.textContent = '#shot-host *{animation-delay:-60s!important;animation-duration:.001s!important;animation-iteration-count:1!important;animation-fill-mode:both!important;transition:none!important}#shot-host .nx-j3-screen{position:static!important;transform:none!important;inset:auto!important;margin:0!important;width:100%!important;height:100%!important;border-radius:0!important;box-shadow:none!important}';
      document.head.appendChild(st);
      document.body.appendChild(host);
    }
    host.innerHTML = '';
    const dev = src.closest('.nx-j3-dev').cloneNode(false);
    dev.classList.add('is-active');
    dev.style.cssText = 'position:static;transform:none;width:auto;height:auto';
    const sc = src.cloneNode(true);
    const z = i === 3 || i === 4 ? 3.1 : i === 1 ? 2.9 : 2;
    const box = document.createElement('div');
    box.style.cssText = `width:${w / z}px;height:${h / z}px;zoom:${z};overflow:hidden;background:#fff`;
    box.appendChild(sc); dev.appendChild(box); host.appendChild(dev);
    await new Promise(r => setTimeout(r, 300));
    const r = box.getBoundingClientRect();
    return { x: r.left, y: r.top, width: r.width, height: r.height };
  }, i, w, h);
  const buf = await p.screenshot({ type: 'png', clip: png });
  await sharp(buf).resize(w, h, { fit: 'fill' }).webp({ quality: 88 }).toFile(`${OUT}/screen-${i + 1}.webp`);
}
await b.close();
console.log(fs.readdirSync(OUT).map(f => f + ' ' + fs.statSync(`${OUT}/${f}`).size).join('\n'));
