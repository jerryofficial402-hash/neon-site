// node tools/crop.mjs in.png chunkHeight outWidth -> in-0.png, in-1.png ...
import sharp from 'sharp';
const [inp, ch = '2400', ow = '700'] = process.argv.slice(2);
const { width, height } = await sharp(inp).metadata();
let i = 0;
for (let y = 0; y < height; y += +ch, i++) {
  await sharp(inp).extract({ left: 0, top: y, width, height: Math.min(+ch, height - y) }).resize({ width: +ow }).toFile(inp.replace('.png', `-${i}.png`));
}
console.log(i, 'chunks');
