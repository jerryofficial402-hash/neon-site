// Containers (not buttons/links) with an inline dark background -> light card. Safe to re-run.
import fs from 'node:fs';
import path from 'node:path';
const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');
const lum = h => { const n = h.length === 4 ? h.slice(1).split('').map(c => parseInt(c + c, 16)) : [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)); const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(n[0]) + 0.7152 * f(n[1]) + 0.0722 * f(n[2]); };
let fc = 0, edits = 0;
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const out = s.replace(/<(div|section|article|aside|li|td|tr|table)(\s[^>]*?)?\sstyle="([^"]*)"/gi, (m, tag, attrs = '', css) => {
    const c = css.replace(/(background(?:-color)?\s*:\s*)(#[0-9a-f]{6}|#[0-9a-f]{3})\b(\s*!important)?/gi, (x, a, hex) => (lum(hex) < 0.08 ? (edits++, `${a}#fafafa`) : x))
      .replace(/(border(?:-[a-z]+)?\s*:\s*[^;]*?)rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0?\.\d+\s*\)/gi, '$1#e3e7ed');
    return c === css ? m : m.replace(`style="${css}"`, `style="${c}"`);
  });
  if (out !== s) { fs.writeFileSync(f, out); fc++; }
}
console.log({ filesChanged: fc, darkBackgrounds: edits });
