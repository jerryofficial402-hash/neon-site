// Count distinct header/footer variants across live pages (X.html wins over X/index.html)
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
import * as cheerio from 'cheerio';
const r = JSON.parse(fs.readFileSync('tools/out/audit.json','utf8'));
const dead = new Set(r.duplicateFilesForSameUrl.map(d => d[1]));
const SKIP = new Set(['node_modules','.git','scratch','scripts','tools','.agents','.vercel','api']);
const files=[]; (function w(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){if(SKIP.has(e.name))continue;const p=path.join(d,e.name);if(e.isDirectory())w(p);else if(e.name.endsWith('.html')&&!dead.has(p))files.push(p);}})('.');
const sel = process.argv[2] || 'header';
const m = new Map();
for (const f of files) { const $=cheerio.load(fs.readFileSync(f,'utf8')); const n=$(sel).first(); const h = n.length ? crypto.createHash('md5').update($.html(n).replace(/\s+/g,' ')).digest('hex').slice(0,8) : 'NONE'; if(!m.has(h)) m.set(h,[]); m.get(h).push(f); }
console.log(files.length, 'live pages;', sel, 'variants:', m.size);
[...m].sort((a,b)=>b[1].length-a[1].length).slice(0,12).forEach(([h,fs])=>console.log(h, fs.length, fs.slice(0,3).join(' ')));
