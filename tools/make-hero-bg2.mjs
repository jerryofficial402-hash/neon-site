// Homepage hero background from the Unsplash photo by Cooper White (q36Yp9RpHa0, Unsplash License).
// Removes the other company's name / USDOT / MC on the truck door, the unit number and the trailer
// lettering by painting them in the surrounding paint colour with soft edges, then writes a wide HD
// strip (desktop) and a smaller one (mobile).
//   node tools/make-hero-bg2.mjs <path to cooper-white-car-carrier.jpg>
import sharp from 'sharp';
import fs from 'node:fs';

const src = process.argv[2];
const out = 'images/hero-car-carrier-hd';
const { width: W } = await sharp(src).metadata();

// each box: area to cover, and a clean sample area nearby for the colour (original pixels, 3912x5348 photo)
const jobs = [
  { box: { left: 1225, top: 2600, width: 460, height: 320 }, sample: { left: 1190, top: 2650, width: 30, height: 220 } }, // door lettering (paint just left of the text)
  { box: { left: 1065, top: 2780, width: 140, height: 105 }, sample: { left: 1080, top: 2680, width: 110, height: 70 } },  // unit number
  { box: { left: 3700, top: 2885, width: 212, height: 110 }, sample: { left: 3700, top: 2830, width: 200, height: 40 } },  // trailer lettering
];

async function patch({ box, sample }) {
  // stats() reads the input image, so cut the sample out first
  const { channels } = await sharp(await sharp(src).extract(sample).toBuffer()).stats();
  const [r, g, b] = channels.map(c => Math.round(c.mean));
  const pad = 40, w = box.width + pad * 2, h = box.height + pad * 2;
  // soft-edged alpha mask: white rectangle on black, blurred
  const m0 = Buffer.alloc(w * h);
  for (let y = pad; y < pad + box.height; y++) m0.fill(255, y * w + pad, y * w + pad + box.width);
  const mask = await sharp(m0, { raw: { width: w, height: h, channels: 1 } }).blur(16).extractChannel(0).raw().toBuffer();
  if (mask.length !== w * h) throw new Error('mask size ' + mask.length);
  // colour layer with a little texture taken from the sample so it isn't flat
  const tex = await sharp(src).extract(sample).resize(w, h, { fit: 'fill' }).blur(6).removeAlpha().raw().toBuffer();
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = Math.round(tex[i * 3] * 0.5 + r * 0.5);
    rgba[i * 4 + 1] = Math.round(tex[i * 3 + 1] * 0.5 + g * 0.5);
    rgba[i * 4 + 2] = Math.round(tex[i * 3 + 2] * 0.5 + b * 0.5);
    rgba[i * 4 + 3] = mask[i];
  }
  const input = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer();
  return { input, left: box.left - pad, top: box.top - pad };
}

const layers = [];
for (const j of jobs) layers.push(await patch(j));
const cleaned = await sharp(src).composite(layers).toBuffer();

// wide strip around the truck and cars
const strip = sharp(cleaned).extract({ left: 0, top: 1050, width: W, height: 2750 });
await strip.clone().resize({ width: 1920 }).webp({ quality: 76 }).toFile(`${out}.webp`);
await strip.clone().resize({ width: 1920 }).jpeg({ quality: 78, mozjpeg: true }).toFile(`${out}.jpg`);
await strip.clone().resize({ width: 900 }).webp({ quality: 72 }).toFile(`${out}-m.webp`);
await strip.clone().resize({ width: 800 }).jpeg({ quality: 70 }).toFile('tools/out/hero-new-preview.jpg');
await sharp(`${out}.webp`).extract({ left: 560, top: 700, width: 420, height: 260 }).toFile('tools/out/hero-door-check.png');

for (const f of [`${out}.webp`, `${out}.jpg`, `${out}-m.webp`]) {
  const m = await sharp(f).metadata();
  console.log(f, `${m.width}x${m.height}`, Math.round(fs.statSync(f).size / 1024) + 'KB');
}
