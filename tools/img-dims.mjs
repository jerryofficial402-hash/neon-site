// Adds width/height (intrinsic size) to every <img> in the site's HTML that is missing either.
//   node tools/img-dims.mjs        (dry run: counts)
//   node tools/img-dims.mjs --write
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const WRITE = process.argv.includes('--write');
const SKIP = /^(node_modules|tools|seo|\.git|\.claude|api|css|js|images|fonts|models)$/;
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (e.isDirectory()) { if (!SKIP.test(e.name)) walk(path.join(d, e.name)); }
  else if (e.name.endsWith('.html')) files.push(path.join(d, e.name)); } })('.');

const cache = new Map();
async function dims(src) {
  if (cache.has(src)) return cache.get(src);
  let r = null;
  try {
    const p = decodeURIComponent(src.replace(/^https:\/\/neonautotransport\.com/, '').split('?')[0]);
    if (p.startsWith('/') && fs.existsSync('.' + p)) { const m = await sharp('.' + p).metadata(); if (m.width && m.height) r = [m.width, m.height]; }
  } catch { r = null; }
  cache.set(src, r); return r;
}

let tags = 0, fixed = 0, unknown = new Set(), changedFiles = 0;
for (const f of files) {
  let h = fs.readFileSync(f, 'utf8');
  const imgs = [...h.matchAll(/<img\b[^>]*>/gi)];
  let out = h, delta = 0;
  for (const m of imgs) {
    const tag = m[0];
    const hasW = /\swidth\s*=/.test(tag), hasH = /\sheight\s*=/.test(tag);
    if (hasW && hasH) continue;
    tags++;
    const src = (tag.match(/\ssrc\s*=\s*"([^"]+)"/) || [])[1];
    const d = src ? await dims(src) : null;
    if (!d) { unknown.add(src || '(no src)'); continue; }
    let nt = tag;
    if (!hasW) nt = nt.replace(/^<img\b/i, `<img width="${d[0]}"`);
    if (!hasH) nt = nt.replace(/^<img\b/i, `<img height="${d[1]}"`);
    const at = m.index + delta;
    out = out.slice(0, at) + nt + out.slice(at + tag.length);
    delta += nt.length - tag.length; fixed++;
  }
  if (out !== h) { changedFiles++; if (WRITE) fs.writeFileSync(f, out); }
}
console.log(JSON.stringify({ missingTags: tags, fixed, changedFiles, unknown: [...unknown].slice(0, 20), write: WRITE }));
