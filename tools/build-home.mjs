// Rebuilds the homepage <main> in the planned section order from the existing sections (by id) plus the
// new blocks in tools/partials/home-sections.html. Run once against the pre-rebuild index.html.
import fs from 'node:fs';

const SRC = process.argv[2] || 'index.html';
const html = fs.readFileSync(SRC, 'utf8');
const parts = fs.readFileSync('tools/partials/home-sections.html', 'utf8');
const part = name => {
  const m = parts.match(new RegExp(`<!-- @${name} -->([\\s\\S]*?)<!-- /${name} -->`));
  if (!m) throw new Error('missing partial ' + name);
  return m[1].trim();
};

// Top-level <section> blocks inside <main>, keyed by id (or by aria-label/first class when there is no id)
const mainOpen = html.indexOf('<main>');
const mainClose = html.indexOf('</main>');
const body = html.slice(mainOpen + 6, mainClose);
const blocks = [];
const re = /<section[\s>][^>]*|<\/section>/g;
let depth = 0, start = -1, m;
while ((m = re.exec(body))) {
  if (m[0].startsWith('</')) { depth--; if (depth === 0) blocks.push(body.slice(start, m.index + 10)); }
  else { if (depth === 0) start = m.index; depth++; }
}
const byKey = {};
for (const b of blocks) {
  const tag = b.match(/^<section[^>]*>/)[0];
  const key = (tag.match(/id="([^"]+)"/) || [])[1] || (tag.match(/aria-label="([^"]+)"/) || [])[1] || tag.slice(0, 60);
  byKey[key] = b;
}
const need = k => { if (!byKey[k]) throw new Error('missing section ' + k + '\nhave: ' + Object.keys(byKey).join(', ')); return byKey[k]; };

const order = [
  need('hero-section'),
  part('trust'),
  need('how-it-works'),
  need('reviews'),
  need('video-reviews'),
  part('services'),
  part('cost'),
  part('why'),
  need('popular-routes'),
  need('nationwide-coverage'),
  part('who'),
  need('faqs'),
  need('blog'),
  part('cta'),
];
const dropped = Object.keys(byKey).filter(k => !['hero-section', 'how-it-works', 'reviews', 'video-reviews', 'popular-routes', 'nationwide-coverage', 'faqs', 'blog'].includes(k));

const out = html.slice(0, mainOpen + 6) + '\n\n  ' + order.join('\n\n  ') + '\n\n' + html.slice(mainClose);
fs.writeFileSync('index.html', out);
console.log('sections in:', blocks.length, '| written:', order.length, '| dropped:', dropped);
