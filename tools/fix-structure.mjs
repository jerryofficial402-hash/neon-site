// Fixes the structural HTML errors html-validate reports, in ways that leave the browser's DOM unchanged:
//   - stray end tag: deleted (browsers ignore it)
//   - duplicate attribute: later copy deleted (browsers keep the first)
//   - "End tag </x> seen but there were open elements": the open elements are closed right before </x>,
//     which is exactly where the browser closes them
// node tools/fix-structure.mjs [--dry]      (repeat until it reports 0)
import fs from 'node:fs';
import path from 'node:path';
import { HtmlValidate } from 'html-validate';
import { parse } from 'parse5';

const DRY = process.argv.includes('--dry');
const SKIP = new Set(['node_modules', '.git', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');
const hv = new HtmlValidate({ rules: { 'close-order': 'error', 'no-dup-attr': 'error' } });
const stats = { files: 0, stray: 0, dupAttr: 0, closed: 0 };

for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  const report = await hv.validateString(src, f);
  const msgs = report.results.flatMap(r => r.messages);
  if (!msgs.length) continue;
  const lineStart = [0]; for (let i = 0; i < src.length; i++) if (src[i] === '\n') lineStart.push(i + 1);
  // html-validate columns are 1-based and point just past the '<' of a tag; step back to the '<'
  const off = m => { let o = lineStart[m.line - 1] + m.column - 1; while (o > 0 && src[o] !== '<' && o > lineStart[m.line - 1] - 1) o--; return o; };
  const edits = [];
  for (const m of msgs) {
    const at = off(m);
    if (/^Stray end tag/.test(m.message)) {
      const end = src.indexOf('>', at) + 1;
      if (src[at] === '<' && src[at + 1] === '/') { edits.push([at, end, '']); stats.stray++; }
    } else if (m.ruleId === 'no-dup-attr') {
      const a0 = lineStart[m.line - 1] + m.column - 1; // attribute name starts at the reported column
      const r = src.slice(a0).match(/^[\w:-]+(\s*=\s*("[^"]*"|'[^']*'|[^\s>]+))?/);
      if (r) { let s = at; while (/\s/.test(src[s - 1])) s--; edits.push([s, at + r[0].length, '']); stats.dupAttr++; }
    }
  }
  // "seen but there were open elements": ask the HTML parser which elements are still open at that end tag
  const openAt = msgs.filter(m => /seen but there were open elements/.test(m.message));
  if (openAt.length) {
    const doc = parse(src, { sourceCodeLocationInfo: true });
    const unclosed = [];
    const VOID = /^(html|head|body|br|hr|img|input|meta|link|source|area|base|col|embed|param|track|wbr)$/;
    const isOpenHtml = c => {
      const l = c.sourceCodeLocation;
      if (!c.tagName || c.namespaceURI !== 'http://www.w3.org/1999/xhtml' || !l || !l.startTag || l.endTag || VOID.test(c.tagName)) return false;
      return !/\/\s*>$/.test(src.slice(l.startTag.startOffset, l.startTag.endOffset)); // self-closing
    };
    (function walk(n) { for (const c of n.childNodes || []) { if (isOpenHtml(c)) unclosed.push(c); walk(c.content || c); } })(doc);
    const first = openAt.map(off).sort((a, b) => a - b)[0];
    // close innermost first, right before the first end tag that the parser had to force them shut at
    const toClose = unclosed.filter(c => c.sourceCodeLocation.startOffset < first && !['main'].includes(c.tagName) || (c.tagName === 'main' && /<\/body>/i.test(src.slice(first, first + 8))));
    const closing = toClose.sort((a, b) => b.sourceCodeLocation.startOffset - a.sourceCodeLocation.startOffset).map(c => `</${c.tagName}>`).join('');
    if (closing) { edits.push([first, first, closing + '\n']); stats.closed += toClose.length; }
  }
  edits.sort((a, b) => b[0] - a[0]);
  let out = src; for (const [s, e, t] of edits) out = out.slice(0, s) + t + out.slice(e);
  if (out !== src) { stats.files++; if (!DRY) fs.writeFileSync(f, out); }
}
console.log({ ...stats, dry: DRY });
