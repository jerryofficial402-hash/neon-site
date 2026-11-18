// Builds the homepage hero background from a source photo: wide (1920) and mobile (900) WebP + JPEG fallback.
//   node tools/make-hero-bg.mjs images/car-shipping-transit-times.jpg
import sharp from 'sharp';
const src = process.argv[2] || 'images/car-shipping-transit-times.jpg';
const out = 'images/hero-car-carrier';
const img = sharp(src);
const meta = await img.metadata();
console.log('source', meta.width + 'x' + meta.height);
// wide: keep full frame, light sharpen after resize
await sharp(src).resize({ width: 1920, kernel: 'lanczos3' }).sharpen({ sigma: 0.6 }).webp({ quality: 72 }).toFile(`${out}.webp`);
await sharp(src).resize({ width: 1920, kernel: 'lanczos3' }).sharpen({ sigma: 0.6 }).jpeg({ quality: 74, mozjpeg: true }).toFile(`${out}.jpg`);
// mobile: crop on the truck (right part of the frame)
const cropW = Math.round(meta.height * 1.1), left = Math.max(0, meta.width - cropW - Math.round(meta.width * 0.08));
await sharp(src).extract({ left, top: 0, width: cropW, height: meta.height }).resize({ width: 900 }).webp({ quality: 70 }).toFile(`${out}-m.webp`);
for (const f of [`${out}.webp`, `${out}.jpg`, `${out}-m.webp`]) {
  const m = await sharp(f).metadata();
  const { size } = await import('node:fs').then(fs => fs.statSync(f));
  console.log(f, m.width + 'x' + m.height, Math.round(size / 1024) + 'KB');
}
