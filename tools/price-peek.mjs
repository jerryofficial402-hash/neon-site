// Print the price ranges and day ranges mentioned on pages (quick consistency check).
//   node tools/price-peek.mjs <page path or file> [...]
import fs from 'node:fs';
for (const p of process.argv.slice(2)) {
  const f = [p, `${p}/index.html`, `${p}.html`].find(x => fs.existsSync(x) && fs.statSync(x).isFile());
  if (!f) { console.log('== ' + p + ' (missing)'); continue; }
  const t = fs.readFileSync(f, 'utf8').replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/&ndash;/g, '–').replace(/\s+/g, ' ');
  const prices = t.match(/[^.$]{0,70}\$[0-9,]+\s*[–-]\s*\$?[0-9,]+[^.]{0,40}/g) || [];
  const days = t.match(/[^.]{0,50}\b\d+\s*(?:–|-|to)\s*\d+\s*(?:days|weeks)[^.]{0,30}/gi) || [];
  console.log('== ' + f);
  prices.slice(0, 5).forEach(x => console.log('  $ ' + x.trim().slice(0, 170)));
  days.slice(0, 3).forEach(x => console.log('  T ' + x.trim().slice(0, 170)));
}
