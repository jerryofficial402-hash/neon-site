// Adds the Google Tag Manager snippet (same as contact.html) to pages that don't load it yet,
// so their visits and leads show up in Google Analytics. Safe to re-run.
//   node tools/add-gtm.mjs <file list>
import fs from 'node:fs';

const ID = 'GTM-P5K57THT';
const SNIPPET = `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${ID}');</script>`;

const files = fs.readFileSync(process.argv[2], 'utf8').split(/\r?\n/).filter(Boolean);
let added = 0;
for (const f of files) {
  const html = fs.readFileSync(f, 'utf8');
  if (html.includes(ID)) continue;
  const m = html.match(/<head[^>]*>/i);
  if (!m) { console.log('no <head>:', f); continue; }
  const i = m.index + m[0].length;
  fs.writeFileSync(f, html.slice(0, i) + '\n' + SNIPPET + html.slice(i));
  added++;
}
console.log(`GTM added to ${added} of ${files.length} pages`);
