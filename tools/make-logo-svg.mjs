// Traces images/logo.jpg (1992x1864 raster) into crisp SVG logos:
//   images/neon-logo.svg             stacked (mark above wordmark)
//   images/neon-logo-horizontal.svg  mark left, wordmark right (header/footer)
// Needs: npm install --no-save potrace
import fs from 'node:fs';
import sharp from 'sharp';
import potrace from 'potrace';

const SRC = 'images/logo.jpg';
const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;
const at = (x, y) => { const i = (y * W + x) * C; return [data[i], data[i + 1], data[i + 2]]; };

// Bands of the stacked logo (rows): mark, NEON letters, AUTO TRANSPORT
const BANDS = { mark: [0, 1090], word: [1090, 1640], text: [1640, H] };
const isInk = ([r, g, b]) => Math.min(r, g, b) < 170;
const isSky = ([r, g, b]) => b > 170 && g > 110 && r < 60;            // light-blue bar in the E
const isNavy = ([r, g, b]) => b > 90 && b > r + 50 && !isSky([r, g, b]);
const isDark = ([r, g, b]) => Math.max(r, g, b) < 110 && Math.abs(r - b) < 30;

async function mask(test, [y0, y1]) {
  const out = Buffer.alloc(W * H, 255);
  for (let y = y0; y < y1; y++) for (let x = 0; x < W; x++) if (test(at(x, y))) out[y * W + x] = 0;
  return sharp(out, { raw: { width: W, height: H, channels: 1 } }).png().toBuffer();
}
const trace = buf => new Promise((res, rej) => {
  const t = new potrace.Potrace({ threshold: 128, turdSize: 20, optTolerance: 0.25, alphaMax: 1 });
  t.loadImage(buf, err => (err ? rej(err) : res(t.getPathTag().match(/ d="([^"]+)"/)[1])));
});
function bbox(test, [y0, y1]) {
  let x0 = W, x1 = 0, ya = H, yb = 0;
  for (let y = y0; y < y1; y++) for (let x = 0; x < W; x++) if (test(at(x, y))) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); ya = Math.min(ya, y); yb = Math.max(yb, y); }
  return { x0, x1, y0: ya, y1: yb };
}

const markD = await trace(await mask(isInk, BANDS.mark));
const navyD = await trace(await mask(isNavy, BANDS.word));
const skyD = await trace(await mask(isSky, BANDS.word));
const textD = await trace(await mask(isDark, BANDS.text));
const mb = bbox(isInk, BANDS.mark);
const wb = bbox(p => isNavy(p) || isSky(p) || isDark(p), [BANDS.word[0], H]);

// Gradient colours sampled from the mark, top and bottom
const sample = y => { const row = []; for (let x = mb.x0; x < mb.x1; x++) { const p = at(x, y); if (Math.min(...p) < 140) row.push(p); } return row[Math.floor(row.length / 2)] || [0, 0, 0]; };
const hex = p => '#' + p.map(v => v.toString(16).padStart(2, '0')).join('');
const top = hex(sample(mb.y0 + 60)), bottom = hex(sample(mb.y1 - 60));
const NAVY = '#053c87', SKY = '#0096dc', TEXT = '#111111';

const defs = `<defs><linearGradient id="nx-g" x1="0" y1="${mb.y0}" x2="0" y2="${mb.y1}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient></defs>`;
const mark = `<path fill-rule="evenodd" fill="url(#nx-g)" d="${markD}"/>`;
const word = `<path fill-rule="evenodd" fill="${NAVY}" d="${navyD}"/><path fill-rule="evenodd" fill="${SKY}" d="${skyD}"/><path fill-rule="evenodd" fill="${TEXT}" d="${textD}"/>`;
const title = '<title>Neon Auto Transport</title>';

// Stacked
const pad = 20;
fs.writeFileSync('images/neon-logo.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${Math.min(mb.x0, wb.x0) - pad} ${mb.y0 - pad} ${Math.max(mb.x1, wb.x1) - Math.min(mb.x0, wb.x0) + 2 * pad} ${wb.y1 - mb.y0 + 2 * pad}" role="img" aria-label="Neon Auto Transport">${title}${defs}${mark}${word}</svg>\n`);

// Horizontal: mark height = 100 units, wordmark 90 units tall, centred, gap 22
const mh = mb.y1 - mb.y0, wh = wb.y1 - wb.y0;
const sm = 100 / mh, sw = 90 / wh, gap = 22;
const markW = (mb.x1 - mb.x0) * sm, wordW = (wb.x1 - wb.x0) * sw;
const tm = `translate(${-mb.x0 * sm} ${-mb.y0 * sm}) scale(${sm})`;
const tw = `translate(${markW + gap - wb.x0 * sw} ${5 - wb.y0 * sw}) scale(${sw})`;
fs.writeFileSync('images/neon-logo-horizontal.svg',
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${(markW + gap + wordW).toFixed(1)} 100" role="img" aria-label="Neon Auto Transport">${title}${defs.replace('gradientUnits="userSpaceOnUse"', `gradientUnits="userSpaceOnUse" gradientTransform="${tm}"`)}<g transform="${tm}">${mark.replace('url(#nx-g)', 'url(#nx-g2)')}</g><g transform="${tw}">${word}</g></svg>\n`
    .replace('id="nx-g"', 'id="nx-g2"').replace(` gradientTransform="${tm}"`, ''));
for (const f of ['images/neon-logo.svg', 'images/neon-logo-horizontal.svg']) console.log(f, (fs.statSync(f).size / 1024).toFixed(1) + ' KB');
console.log({ mb, wb, top, bottom });
