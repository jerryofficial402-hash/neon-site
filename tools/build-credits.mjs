// Builds /image-credits/ (image-credits.html) from tools/out/ext-map.json, using thank-you.html for head/header/footer.
// Lists every third-party image with author, license and source, as CC BY / BY-SA / FAL require.
import fs from 'node:fs';

const map = JSON.parse(fs.readFileSync('tools/out/ext-map.json', 'utf8'));
const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const title = f => f.replace(/\.[a-z]+$/i, '').replace(/_/g, ' ').replace(/\s*\(cropped\)\s*/i, ' ').trim();
const LICENSE_URL = { 'Public domain': 'https://creativecommons.org/publicdomain/mark/1.0/', CC0: 'https://creativecommons.org/publicdomain/zero/1.0/', 'Unsplash License': 'https://unsplash.com/license' };

// one row per local file
const rows = new Map();
for (const v of Object.values(map)) if (!rows.has(v.local)) rows.set(v.local, v);
const items = [...rows.values()].map(v => ({
  img: v.local, w: v.width, h: v.height,
  name: v.source === 'unsplash' ? 'Photo from Unsplash' : title(v.file),
  author: v.source === 'unsplash' ? 'Unsplash contributor' : (v.author || 'Unknown author'),
  license: v.license, licenseUrl: v.licenseUrl || LICENSE_URL[v.license] || '',
  source: v.page, sourceLabel: v.source === 'unsplash' ? 'Unsplash' : 'Wikimedia Commons',
  needs: !/^(Public domain|CC0|Unsplash License)$/.test(v.license),
})).sort((a, b) => (b.needs - a.needs) || a.name.localeCompare(b.name));

const row = i => `      <li class="nx-credit">
        <img src="${i.img}" alt="" width="96" height="${Math.round(96 * i.h / i.w)}" loading="lazy" decoding="async">
        <div>
          <p class="nx-credit-name">${esc(i.name)}</p>
          <p class="nx-credit-meta">By ${esc(i.author)} · ${i.licenseUrl ? `<a href="${esc(i.licenseUrl)}" rel="license noopener" target="_blank">${esc(i.license)}</a>` : esc(i.license)} · <a href="${esc(i.source)}" rel="noopener" target="_blank">${i.sourceLabel}</a></p>
        </div>
      </li>`;

const main = `<main class="nx-credits">
  <div class="nx-wrap">
    <p class="nx-eyebrow">Image credits</p>
    <h1>Image credits</h1>
    <p class="nx-lead">Some photos and state flags on this site come from Wikimedia Commons and Unsplash. They are used under the licenses listed below, served from our own site and resized for the web. Images not listed here are our own.</p>
    <h2>Attribution required (${items.filter(i => i.needs).length})</h2>
    <ul class="nx-credit-list">
${items.filter(i => i.needs).map(row).join('\n')}
    </ul>
    <h2>Public domain, CC0 and Unsplash (${items.filter(i => !i.needs).length})</h2>
    <ul class="nx-credit-list">
${items.filter(i => !i.needs).map(row).join('\n')}
    </ul>
  </div>
</main>`;

let page = fs.readFileSync('thank-you.html', 'utf8');
page = page.replace(/<title>[^<]*<\/title>/, '<title>Image Credits | Neon Auto Transport</title>')
  .replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="Credits and licenses for third-party images used on neonautotransport.com.">')
  .replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="https://neonautotransport.com/image-credits/">')
  .replace(/<main class="nx-thanks">[\s\S]*?<\/main>/, main)
  .replace(/<script>window\.dataLayer[^<]*contact_form_thank_you[^<]*<\/script>\s*/, '');
fs.writeFileSync('image-credits.html', page);
console.log('credits:', items.length, 'images,', items.filter(i => i.needs).length, 'need attribution');
