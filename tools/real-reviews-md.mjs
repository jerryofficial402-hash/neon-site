// Markdown copies (*.md, served to AI agents): replace made-up reviews with the three verified Google reviews.
//   - one-line link cards  "[ Name ★★★★★ "text" ... ](url) [ ... ](url)"  -> the real cards line
//   - three-line blocks    '"quote"' / '— Name' / 'Verified Customer · X' for made-up names -> removed,
//                          real reviews inserted once where the first one was
// reviews.md is handled separately. Safe to re-run.
import fs from 'node:fs';
import path from 'node:path';

const FAKE = ['David Miller', 'Carlos Rodriguez', 'Sarah Jenkins', 'Marcus T.', 'Jennifer R.', 'David K.', 'Capt. Daniel K.', 'Elena R.', 'Lisa W.', 'Ryan P.'];
const FAKE_TEXT = ['Prompt and professional door-to-door auto shipping'];
const REAL_LINE = '[ Semih Akay ★★★★★ "Thank you for responding always on time. Friendly service and will be working in future again." Google review ](https://maps.app.goo.gl/8sytHbRV3BsnPBUD6) [ Mike Hainsworth ★★★★★ "They were all over it. Great price. On time. Wouldn\'t want to use anybody else. Mike." Google review ](https://maps.app.goo.gl/Pvcguq4mwYxWEsqs7) [ Viola Willoughby ★★★★★ "The pickup driver and the transport driver were both respectful. Vehicle was delivered as promised. Definitely recommend this company." Google review ](https://maps.app.goo.gl/CNxD6E86hxsjz1Pz9)';
const REAL_BLOCK = ['"Thank you for responding always on time. Friendly service and will be working in future again."', '', '— Semih Akay, Google review', '', '"They were all over it. Great price. On time. Wouldn\'t want to use anybody else. Mike."', '', '— Mike Hainsworth, Google review', '', '"The pickup driver and the transport driver were both respectful. Vehicle was delivered as promised. Definitely recommend this company."', '', '— Viola Willoughby, Google review'];
const ORPHAN = /^"Thank you for responding always on time\. Friendly service and will be working in future again\.?"\s*$/;

const SKIP = new Set(['node_modules', '.git', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.md') && !/^reviews(\.md|[\\/]index\.md)$/.test(p) && files.push(p); } })('.');
const isFakeLine = l => FAKE.some(n => l.includes(n)) || FAKE_TEXT.some(t => l.includes(t));
let changed = 0;
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  if (!FAKE.some(n => src.includes(n)) && !FAKE_TEXT.some(t => src.includes(t))) continue;
  const nl = src.includes('\r\n') ? '\r\n' : '\n';
  const L = src.split(/\r?\n/);
  const drop = new Set();
  let insertAt = -1, insertLines = null;
  for (let i = 0; i < L.length; i++) {
    const l = L[i];
    if (/^\[ .*★★★★★.*\]\(https:\/\/maps\.app\.goo\.gl/.test(l) && isFakeLine(l)) {      // link-card line
      if (insertAt < 0) { insertAt = i; insertLines = [REAL_LINE]; }
      drop.add(i);
      for (let k = i + 1; k < Math.min(i + 5, L.length); k++) if (ORPHAN.test(L[k])) drop.add(k);
      continue;
    }
    const m = l.match(/^[—–-]\s*(.+?)\s*(?:\(.*\))?\s*$/);
    if (m && FAKE.includes(m[1].trim())) {                                                // three-line block
      let q = i - 1; while (q >= 0 && !L[q].trim()) q--;
      let v = i + 1; while (v < L.length && !L[v].trim()) v++;
      const from = q >= 0 && /^"/.test(L[q].trim()) ? q : i;
      const to = v < L.length && /^Verified Customer/.test(L[v].trim()) ? v : i;
      for (let k = from; k <= to; k++) drop.add(k);
      if (insertAt < 0) { insertAt = from; insertLines = REAL_BLOCK; }
    }
  }
  if (!drop.size) continue;
  const out = [];
  for (let i = 0; i < L.length; i++) {
    if (i === insertAt) out.push(...insertLines);
    if (!drop.has(i)) out.push(L[i]);
  }
  // collapse 3+ blank lines left behind
  const text = out.join(nl).replace(/(\r?\n){4,}/g, nl + nl + nl);
  if (text !== src) { fs.writeFileSync(f, text); changed++; }
}
console.log({ mdFilesChanged: changed });
