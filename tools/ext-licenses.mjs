// Looks up license/author for every Wikimedia image used on the site (Commons API extmetadata).
// node tools/ext-licenses.mjs -> tools/out/ext-licenses.json
import fs from 'node:fs';
const urls = Object.keys(JSON.parse(fs.readFileSync('tools/out/ext-images.json', 'utf8')));
const fileOf = u => { const m = u.match(/upload\.wikimedia\.org\/wikipedia\/(commons|en)\/(?:thumb\/)?[0-9a-f]\/[0-9a-f]{2}\/([^/?#]+)/); return m && { wiki: m[1], file: decodeURIComponent(m[2]) }; };
const out = {};
const strip = s => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
for (const u of urls) {
  if (/unsplash/.test(u)) { out[u] = { source: 'unsplash', license: 'Unsplash License', page: u.split('?')[0] }; continue; }
  const f = fileOf(u);
  if (!f) { out[u] = { source: 'wikimedia', error: 'no file name' }; continue; }
  const api = 'https://en.wikipedia.org/w/api.php'; // also serves Commons files (commons.wikimedia.org doesn't resolve on this network)
  const q = `${api}?action=query&format=json&prop=imageinfo&iiprop=extmetadata|url|size&titles=${encodeURIComponent('File:' + f.file)}`;
  const r = await fetch(q, { headers: { 'User-Agent': 'NeonAutoTransport-site-maintenance/1.0 (info@neonautotransport.com)' } }).then(r => r.json()).catch(e => ({ error: e.message }));
  const page = r.query && Object.values(r.query.pages)[0];
  const ii = page && page.imageinfo && page.imageinfo[0];
  const md = (ii && ii.extmetadata) || {};
  out[u] = { source: 'wikimedia', wiki: f.wiki, file: f.file, page: ii && ii.descriptionurl, license: strip(md.LicenseShortName && md.LicenseShortName.value), licenseUrl: md.LicenseUrl && md.LicenseUrl.value, author: strip(md.Artist && md.Artist.value).slice(0, 120), credit: strip(md.Credit && md.Credit.value).slice(0, 120), nonfree: md.NonFree && md.NonFree.value, attributionRequired: md.AttributionRequired && md.AttributionRequired.value, width: ii && ii.width };
  await new Promise(r => setTimeout(r, 120));
}
fs.writeFileSync('tools/out/ext-licenses.json', JSON.stringify(out, null, 1));
const t = {}; for (const v of Object.values(out)) { const k = v.license || v.error || '?'; t[k] = (t[k] || 0) + 1; }
console.log(t);
console.log('non-free / en-wiki:', Object.entries(out).filter(([, v]) => v.nonfree === 'true' || v.wiki === 'en').map(([u, v]) => v.file));
