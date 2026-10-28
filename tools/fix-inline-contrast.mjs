// Inline styles written for the old dark sections (white/near-white text, white hairline borders, neon links)
// now sit on white. Rewrites them to the light theme. Elements that carry their own background in the same
// style attribute or a bg-* class (buttons, badges) are left alone. Safe to re-run.
// Converted colours drop !important so theme rules can still turn them white inside navy panels.
import fs from 'node:fs';
import path from 'node:path';

const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');

const INK = '#0a0a0a', TEXT = 'rgba(0, 0, 0, 0.64)', BLUE = '#0a5fb4', LINE = '#e3e7ed';
const WHITE = /(^|;)(\s*color\s*:\s*)(#fff(?:fff)?|white|#f1f5f9|#f8fafc)(\s*!important)?/gi;
const LIGHT = /(^|;)(\s*color\s*:\s*)(#cbd5e1|#cdd5df|#e2e8f0|#94a3b8|rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0?\.\d+\s*\))(\s*!important)?/gi;
const NEON_LINK = /(^|;)(\s*color\s*:\s*)(#22c55e)(\s*!important)?/gi;
const WHITE_BORDER = /(border(?:-[a-z]+)?\s*:\s*[^;]*?)rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0?\.\d+\s*\)/gi;

let files_ = 0, edits = 0;
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const out = s.replace(/<([a-z0-9]+)(\s[^>]*?)?\sstyle="([^"]*)"/gi, (m, tag, attrs = '', css) => {
    const cls = (attrs.match(/class="([^"]*)"/) || [])[1] || '';
    // A light inline background (e.g. lightened by fix-inline-dark-bg.mjs) doesn't protect white text
    const lightBg = /background(?:-color)?\s*:\s*(#fafafa|#fff(?:fff)?|white|#f8fafc|#f6f9fc)\b/i.test(css);
    const ownBg = (/background/i.test(css) && !lightBg) || /(^|\s)(bg-(?!white\/|transparent)[^\s]+|btn-)/.test(cls);
    if (ownBg || /^(button|option)$/i.test(tag)) return m;
    let c = css;
    c = c.replace(WHITE, (x, a, b, col, imp = '') => `${a}${b}${INK}`);
    c = c.replace(LIGHT, (x, a, b, col, imp = '') => `${a}${b}${TEXT}`);
    if (tag.toLowerCase() === 'a' || /<a/i.test(tag)) c = c.replace(NEON_LINK, (x, a, b, col, imp = '') => `${a}${b}${BLUE}`);
    c = c.replace(WHITE_BORDER, `$1${LINE}`);
    if (c === css) return m;
    edits++;
    return m.replace(`style="${css}"`, `style="${c}"`);
  });
  if (out !== s) { fs.writeFileSync(f, out); files_++; }
}
console.log({ filesChanged: files_, styleEdits: edits });
