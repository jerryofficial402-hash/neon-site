// Tells Bing (and other IndexNow engines: Yandex, Seznam, Naver) that pages changed, so they recrawl quickly.
// ChatGPT search and Copilot use Bing's index, so this is how new content reaches them fastest.
// The key file /<KEY>.txt must be live on the site first.
//   node tools/indexnow.mjs                 -> every URL in sitemap.xml
//   node tools/indexnow.mjs --since <ref>   -> only pages changed since a git commit (e.g. HEAD~1)
//   node tools/indexnow.mjs /path/ /path2/  -> just these paths
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const HOST = 'neonautotransport.com';
const KEY = 'f3ff4fdc2bd4464c1c4e95da30d93bab';
const args = process.argv.slice(2);
const inSitemap = new Set([...fs.readFileSync('sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));

let urls;
if (args[0] === '--since') {
  const changed = execSync(`git diff --name-only ${args[1]} HEAD`, { encoding: 'utf8' }).split('\n').filter(f => f.endsWith('.html'));
  urls = changed.map(f => `https://${HOST}/${f.replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '/')}`).filter(u => inSitemap.has(u));
} else if (args.length) {
  urls = args.map(p => `https://${HOST}${p.startsWith('/') ? p : '/' + p}`);
} else {
  urls = [...inSitemap];
}
if (!urls.length) { console.log('nothing to submit'); process.exit(0); }

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(0, 10000) }),
});
console.log(`IndexNow: ${urls.length} URLs -> HTTP ${res.status} ${res.statusText}`, (await res.text()).slice(0, 200));
