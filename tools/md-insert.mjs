// Inserts an HTML snippet (converted to markdown) into a page's .md copies, right before a given heading.
// node tools/md-insert.mjs <snippet.html> "<heading text>" <copy.md> [<copy2.md> ...]
import fs from 'node:fs';
import { htmlToMd } from './html-to-md.mjs';

const [snip, heading, ...targets] = process.argv.slice(2);
const md = htmlToMd(`<main>${fs.readFileSync(snip, 'utf8')}</main>`).trim();
for (const t of targets) {
  const raw = fs.readFileSync(t, 'utf8');
  const nl = raw.includes('\r\n') ? '\r\n' : '\n';
  const lines = raw.replace(/\r\n/g, '\n').split('\n');
  if (lines.includes(md.split('\n')[0])) { console.log('already', t); continue; }
  const i = lines.findIndex(l => l.startsWith('#') && l.includes(heading));
  if (i < 0) { console.log('heading not found', t); continue; }
  lines.splice(i, 0, md, '');
  fs.writeFileSync(t, lines.join('\n').replace(/\n/g, nl));
  console.log('ok', t);
}
