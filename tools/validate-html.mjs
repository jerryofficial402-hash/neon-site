// Structural HTML check for every page (unclosed / mis-nested tags, duplicate ids and attributes, parser errors).
// Needs: npm install --no-save html-validate@9      node tools/validate-html.mjs
import fs from 'node:fs';
import path from 'node:path';
import { HtmlValidate } from 'html-validate';

const SKIP = new Set(['node_modules', '.git', 'tools', '.agents', '.vercel', 'api']);
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { if (SKIP.has(e.name)) continue; const p = path.join(d, e.name); e.isDirectory() ? walk(p) : e.name.endsWith('.html') && files.push(p); } })('.');
const hv = new HtmlValidate({ rules: { 'close-order': 'error', 'close-attr': 'error', 'no-dup-id': 'error', 'no-dup-attr': 'error', 'missing-doctype': 'error' } });
const tally = {}, examples = {}, bad = new Set();
for (const f of files) {
  const report = await hv.validateString(fs.readFileSync(f, 'utf8'), f);
  for (const r of report.results) for (const m of r.messages) {
    tally[m.ruleId] = (tally[m.ruleId] || 0) + 1; bad.add(f);
    (examples[m.ruleId] = examples[m.ruleId] || []).length < 4 && examples[m.ruleId].push(`${f}:${m.line} ${m.message.slice(0, 100)}`);
  }
}
fs.writeFileSync('tools/out/validate.json', JSON.stringify({ tally, examples, bad: [...bad] }, null, 1));
console.log(`${files.length} pages, ${bad.size} with errors`, tally);
for (const [k, v] of Object.entries(examples)) console.log(k, '\n  ' + v.join('\n  '));
