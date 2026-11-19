// Homepage service-card photos from Unsplash originals (Unsplash License). Crops to 3:2, blurs
// third-party lettering and shop signs, writes images/svc-<name>.webp (1200x800) and -sm (720x480).
//   node tools/make-service-images.mjs <folder with the downloaded originals>
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const dir = process.argv[2];
// crop: fractions of the original (x, y, w); height follows from 3:2. blur: fraction boxes in the original.
const jobs = {
  open:       { file: 'open-TzST6fTdjxY.jpg',       crop: { x: 0, y: 0, w: 1 } },
  enclosed:   { file: 'enclosed-ZUC0RGbVfME.jpg',   crop: { x: 0, y: 0.05, w: 1 } },
  door:       { file: 'door-4Dofvf-eUMs.jpg',       crop: { x: 0, y: 0, w: 1 } },
  expedited:  { file: 'expedited-vvnZdwe80EE.jpg',  crop: { x: 0.02, y: 0, w: 0.845 },
                blur: [{ x: 0.03, y: 0.82, w: 0.16, h: 0.06 }, { x: 0.88, y: 0.52, w: 0.08, h: 0.08 }] },
  classic:    { file: 'classic-6CTVeLpODvQ.jpg',    crop: { x: 0, y: 0, w: 1 },
                blur: [{ x: 0.77, y: 0.0, w: 0.23, h: 0.50 }, { x: 0.61, y: 0.27, w: 0.05, h: 0.05 }] },
  motorcycle: { file: 'motorcycle-eK_6CGxTss4.jpg', crop: { x: 0, y: 0, w: 1 } },
};

for (const [name, j] of Object.entries(jobs)) {
  const src = path.join(dir, j.file);
  const { width: W, height: H } = await sharp(src).metadata();
  let buf = await sharp(src).toBuffer();
  if (j.blur) {
    const layers = [];
    for (const b of j.blur) {
      const r = { left: Math.round(b.x * W), top: Math.round(b.y * H), width: Math.round(b.w * W), height: Math.round(b.h * H) };
      layers.push({ input: await sharp(src).extract(r).blur(Math.max(12, Math.round(W / 160))).toBuffer(), left: r.left, top: r.top });
    }
    buf = await sharp(buf).composite(layers).toBuffer();
  }
  const cw = Math.round(j.crop.w * W), ch = Math.min(H - Math.round(j.crop.y * H), Math.round(cw / 1.5));
  const strip = sharp(buf).extract({ left: Math.round(j.crop.x * W), top: Math.round(j.crop.y * H), width: cw, height: ch });
  await strip.clone().resize(1200, 800, { fit: 'cover' }).webp({ quality: 72 }).toFile(`images/svc-${name}.webp`);
  await strip.clone().resize(720, 480, { fit: 'cover' }).webp({ quality: 70 }).toFile(`images/svc-${name}-sm.webp`);
  await strip.clone().resize(700, 467, { fit: 'cover' }).jpeg({ quality: 70 }).toFile(`tools/out/svc-check-${name}.jpg`);
  const s1 = fs.statSync(`images/svc-${name}.webp`).size, s2 = fs.statSync(`images/svc-${name}-sm.webp`).size;
  console.log(name.padEnd(11), `${W}x${H} ->`, Math.round(s1 / 1024) + 'KB /', Math.round(s2 / 1024) + 'KB');
}
