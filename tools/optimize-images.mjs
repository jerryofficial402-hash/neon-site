// Recompress large images in place (same filename/format): max 1600px wide, JPEG q80 mozjpeg, PNG palette.
// node tools/optimize-images.mjs [minBytes=200000]
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
const MIN = +(process.argv[2] || 200000);
let before = 0, after = 0, n = 0;
for (const f of fs.readdirSync('images')) {
  const p = path.join('images', f);
  const ext = path.extname(f).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext) || f.startsWith('neon-logo') || f === 'logo.png') continue;
  const size = fs.statSync(p).size;
  if (size < MIN) continue;
  const img = sharp(fs.readFileSync(p)).rotate().resize({ width: 1600, withoutEnlargement: true });
  const buf = ext === '.png' ? await img.png({ palette: true, quality: 80, compressionLevel: 9 }).toBuffer() : await img.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  if (buf.length < size * 0.9) { fs.writeFileSync(p, buf); before += size; after += buf.length; n++; }
}
console.log(`${n} images: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);
