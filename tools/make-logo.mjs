// Builds header/footer logo assets from images/logo.jpg (white background -> transparent)
import sharp from 'sharp';
const SRC = 'images/logo.jpg';
async function cutout(left, top, width, height) {
  const { data, info } = await sharp(SRC).extract({ left, top, width, height }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const m = Math.min(data[i], data[i + 1], data[i + 2]);
    // fade near-white to transparent, keep anti-aliased edges
    const a = m > 245 ? 0 : m > 200 ? Math.round(255 * (245 - m) / 45) : 255;
    data[i + 3] = Math.min(data[i + 3], a);
  }
  return sharp(data, { raw: info }).png().trim().toBuffer();
}
const mark = await cutout(140, 100, 1710, 940);
const word = await cutout(280, 1140, 1440, 640);
const H = 160; // output height in px (displayed at ~40px -> 4x)
const m = await sharp(mark).resize({ height: H }).toBuffer();
const w = await sharp(word).resize({ height: Math.round(H * 0.9) }).toBuffer();
const mm = await sharp(m).metadata(), wm = await sharp(w).metadata();
const gap = Math.round(H * 0.22);
await sharp({ create: { width: mm.width + gap + wm.width, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: m, left: 0, top: 0 }, { input: w, left: mm.width + gap, top: Math.round((H - wm.height) / 2) }])
  .png({ compressionLevel: 9 }).toFile('images/neon-logo-horizontal.png');
await sharp(m).png({ compressionLevel: 9 }).toFile('images/neon-logo-mark.png');
const meta = await sharp('images/neon-logo-horizontal.png').metadata();
console.log('horizontal', meta.width, 'x', meta.height);
