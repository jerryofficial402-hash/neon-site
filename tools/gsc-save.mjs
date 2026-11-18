// Turns a Search Console "Pages" table dump (from the browser tool) into a clean TSV in seo/data/.
//   node tools/gsc-save.mjs <tool-result.txt> <out.tsv>
import fs from 'node:fs';

let raw = fs.readFileSync(process.argv[2], 'utf8');
let text;
try {
  const j = JSON.parse(raw);
  text = Array.isArray(j) ? j.map(x => x.text).join('') : String(j);
} catch { text = raw; }
// The tool wraps the JS return value as a JSON string
for (let i = 0; i < 2 && /^"/.test(text.trim()); i++) { try { text = JSON.parse(text.trim()); } catch { break; } }
// If it is still an escaped string (e.g. cut short), unescape by hand
if (/\\t/.test(text) && !/\t/.test(text)) text = text.replace(/^"|"$/g, '').replace(/\\t/g, '\t').replace(/\\n/g, '\n');
const rows = text.split('\n').map(l => l.replace(/\s*Copy URL to clipboard.*?Inspect URL/, '').split('\t')).filter(c => c.length === 4 && c[0].startsWith('/'));
fs.writeFileSync(process.argv[3], 'page\tclicks\timpressions\tposition\n' + rows.map(c => c.join('\t')).join('\n') + '\n');
console.log(`${rows.length} pages -> ${process.argv[3]}`);
