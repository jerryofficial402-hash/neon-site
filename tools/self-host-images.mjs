// Downloads every Wikimedia / Unsplash image the pages hot-link, stores an optimized WebP copy in images/ext/,
// and writes tools/out/ext-map.json (remote URL -> local path + license info). Already-downloaded files are skipped.
// node tools/self-host-images.mjs
import fs from 'node:fs';
import sharp from 'sharp';

const lic = JSON.parse(fs.readFileSync('tools/out/ext-licenses.json', 'utf8'));
fs.mkdirSync('images/ext', { recursive: true });
const UA = 'NeonAutoTransport-site-maintenance/1.0 (https://neonautotransport.com; info@neonautotransport.com)';
const slug = s => s.toLowerCase().replace(/\.(svg|png|jpe?g|gif|webp|tiff?)$/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
const map = {};
let ok = 0, failed = [];
for (const [url, info] of Object.entries(lic)) {
  if (info.error) continue; // bare host link (dns-prefetch)
  const name = info.source === 'unsplash' ? 'unsplash-' + (url.match(/photo-([\w-]+)/) || [, 'img'])[1] : slug(info.file);
  const out = `images/ext/${name}.webp`;
  if (!fs.existsSync(out)) {
    const src = info.source === 'unsplash' ? url.split('?')[0] + '?auto=format&fit=crop&w=1600&q=80' : url;
    let buf = null;
    for (let t = 0; t < 3 && !buf; t++) {
      try {
        const r = await fetch(src, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) });
        const ct = r.headers.get('content-type') || '';
        if (r.ok && ct.startsWith('image/')) buf = Buffer.from(await r.arrayBuffer()); else if (t === 2) failed.push([url, r.status + ' ' + ct]);
      } catch (e) { if (t === 2) failed.push([url, e.message]); }
      if (!buf) await new Promise(r => setTimeout(r, 4000));
    }
    if (!buf) continue;
    await sharp(buf).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
    await new Promise(r => setTimeout(r, 300)); // be gentle with the image servers
  }
  const meta = await sharp(out).metadata();
  map[url] = { local: '/' + out, width: meta.width, height: meta.height, ...info };
  ok++;
}
fs.writeFileSync('tools/out/ext-map.json', JSON.stringify(map, null, 1));
console.log({ saved: ok, failed: failed.length, failedList: failed.slice(0, 5) });
