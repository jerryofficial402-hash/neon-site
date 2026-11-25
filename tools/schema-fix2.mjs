// Structured-data accuracy pass:
//  - "Product" removed from service pages' @type (car shipping is a service, not a product for sale)
//  - Service "offers" with a flat placeholder price (500.00 / 900.00) removed (the page shows a range)
//  - aggregateRating removed from Service nodes (self-serving and the review count isn't on those pages;
//    it stays on the Organization / MovingCompany markup)
//  - streetAddress "2700 Neabsco..." corrected to the confirmed "2709 Neabsco Common Pl, Suite 101"
//   node tools/schema-fix2.mjs [--write]
import fs from 'node:fs';
import path from 'node:path';
const WRITE = process.argv.includes('--write');
const SKIP = /^(node_modules|tools|seo|\.git|\.claude|api|css|js|images|fonts|models)$/;
const files = [];
(function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) {
  if (e.isDirectory()) { if (!SKIP.test(e.name)) walk(path.join(d, e.name)); }
  else if (e.name.endsWith('.html')) files.push(path.join(d, e.name)); } })('.');
const st = { files: 0, product: 0, offers: 0, rating: 0, address: 0 };
const types = (o) => [].concat(o['@type'] || []);
for (const f of files) {
  let h = fs.readFileSync(f, 'utf8'); const orig = h;
  for (const b of [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]) {
    let j; try { j = JSON.parse(b[1]); } catch { continue; }
    let ch = false;
    const fix = (o) => {
      if (!o || typeof o !== 'object') return;
      if (Array.isArray(o)) return o.forEach(fix);
      const t = types(o);
      if (t.includes('Product') && t.includes('Service')) { o['@type'] = 'Service'; st.product++; ch = true; }
      if (types(o).includes('Service')) {
        if (o.offers && !Array.isArray(o.offers) && /^(500|900)(\.00)?$/.test(String(o.offers.price || ''))) { delete o.offers; st.offers++; ch = true; }
        if (o.aggregateRating) { delete o.aggregateRating; st.rating++; ch = true; }
      }
      if (typeof o.streetAddress === 'string' && /^2700 Neabsco/.test(o.streetAddress)) { o.streetAddress = '2709 Neabsco Common Pl, Suite 101'; st.address++; ch = true; }
      Object.values(o).forEach(fix);
    };
    fix(j);
    if (!ch) continue;
    const pretty = /\n\s+"/.test(b[1]);
    h = h.replace(b[0], () => `<script type="application/ld+json">${pretty ? '\n' + JSON.stringify(j, null, 2) + '\n' : JSON.stringify(j)}</script>`);
  }
  // visible text with the wrong street number, if any
  if (/2700 Neabsco/.test(h)) { h = h.replace(/2700 Neabsco/g, '2709 Neabsco'); st.address++; }
  if (h !== orig) { st.files++; if (WRITE) fs.writeFileSync(f, h); }
}
console.log(JSON.stringify({ ...st, write: WRITE }));
