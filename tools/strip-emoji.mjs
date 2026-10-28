// Removes decorative emoji from visible page text (an "AI template" tell). Checkmarks become plain glyphs.
// Leaves <head>, <script>, <style> and attribute values alone. Safe to re-run.
import fs from 'node:fs';
import path from 'node:path';

const SKIP = new Set(['node_modules', '.git', 'scratch', 'scripts', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');

// Keep typographic symbols that read as text: © ® ™ arrows ★ ☆ ▶ ✓
const KEEP = new Set(['©', '®', '™', '↔', '↗', '↘', '→', '←', '★', '☆', '▶', '✓', '✕']);
const REPLACE = { '✅': '✓', '✔': '✓', '☑': '✓', '❌': '✕', '✖': '✕' };
const EMOJI = /\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}️?)*/gu;

function cleanText(t) {
  return t.replace(new RegExp(EMOJI.source + '[ \\t]?', 'gu'), m => {
    const ch = m.trim().replace(/️/g, '');
    if (KEEP.has(ch)) return m;
    if (REPLACE[ch]) return REPLACE[ch] + (m.endsWith(' ') ? ' ' : '');
    return '';
  });
}

let changed = 0, removed = 0;
for (const f of files) {
  const s = fs.readFileSync(f, 'utf8');
  const bodyAt = s.search(/<body[\s>]/i);
  if (bodyAt < 0) continue;
  const head = s.slice(0, bodyAt);
  // split body into protected blocks (script/style) and markup; only touch text between tags
  const body = s.slice(bodyAt).replace(/(<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)|>([^<]+)</g, (m, prot, text) => {
    if (prot) return prot;
    const c = cleanText(text);
    if (c !== text) removed++;
    return '>' + c + '<';
  });
  if (head + body !== s) { fs.writeFileSync(f, head + body); changed++; }
}
console.log({ filesChanged: changed, textNodesCleaned: removed });
