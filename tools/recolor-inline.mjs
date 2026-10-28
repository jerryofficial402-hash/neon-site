// Maps the old neon/purple palette inside inline style="" attributes and <style> rules onto the brand blue.
// A block that gets a blue background also gets white text so dark-navy labels stay readable. Safe to re-run.
import fs from 'node:fs';
import path from 'node:path';

const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');

const BLUE = '#0a5fb4', BLUE_HOVER = '#084c91', SKY = '#0096dc', GREEN = '#22c55e';
const BG = /(background(?:-color)?\s*:\s*)#(39ff14|32e612|32e011|635bff|468de6|00d4ff)(?![0-9a-f])/gi;
const BG_HOVER = /(background(?:-color)?\s*:\s*)#(534be8|4b45cc)(?![0-9a-f])/gi;

function recolor(block) {
  let b = block;
  const blueBg = BG.test(b); BG.lastIndex = 0;
  b = b.replace(BG, `$1${BLUE}`).replace(BG_HOVER, `$1${BLUE_HOVER}`);
  if (blueBg) b = b.replace(/((?:^|[;{\s"'])color\s*:\s*)#0a2540(?![0-9a-f])/gi, '$1#ffffff');
  b = b.replace(/(border(?:-[a-z]+)?(?:-color)?\s*:[^;"}]*?)#(39ff14|635bff|00d1ff|00d4ff|468de6)(?![0-9a-f])/gi, `$1${BLUE}`);
  b = b.replace(/((?:^|[;{\s"'])color\s*:\s*)#39ff14(?![0-9a-f])/gi, `$1${GREEN}`);
  b = b.replace(/((?:^|[;{\s"'])color\s*:\s*)#(00d1ff|00d4ff)(?![0-9a-f])/gi, `$1${SKY}`);
  b = b.replace(/((?:^|[;{\s"'])color\s*:\s*)#635bff(?![0-9a-f])/gi, `$1${BLUE}`);
  b = b.replace(/rgba\(\s*(99,\s*91,\s*255|57,\s*255,\s*20|0,\s*212,\s*255|0,\s*209,\s*255)\s*,/g, 'rgba(10, 95, 180,');
  return b;
}

let changed = 0;
for (const f of files) {
  let s = fs.readFileSync(f, 'utf8');
  const before = s;
  s = s.replace(/style="([^"]*)"/g, (m, css) => `style="${recolor(css)}"`);
  s = s.replace(/<style([^>]*)>([\s\S]*?)<\/style>/g, (m, attrs, css) => `<style${attrs}>${css.replace(/\{[^{}]*\}/g, recolor)}</style>`);
  if (s !== before) { fs.writeFileSync(f, s); changed++; }
}
console.log('files recolored', changed);
