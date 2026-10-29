// Heading outline of a page (h1/h2 and section-level h3) in reading order, with total words.
import puppeteer from 'puppeteer';
const b = await puppeteer.launch({ headless: true });
for (const url of process.argv.slice(2)) {
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 900 });
  await p.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36');
  try {
    await p.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 1500));
    const r = await p.evaluate(() => {
      if (!document.body) return null;
      const hs = [...document.querySelectorAll('h1,h2')].filter(h => h.offsetParent && !h.closest('header,footer,nav')).map(h => `${h.tagName} ${h.innerText.replace(/\s+/g, ' ').trim().slice(0, 95)}`);
      return { title: document.title, words: (document.body.innerText || '').split(/\s+/).length, forms: document.querySelectorAll('form').length, hs };
    });
    if (!r) { console.log(url, 'no body'); continue; }
    console.log(`\n=== ${url}  | ${r.words} words | forms ${r.forms} | ${r.title.slice(0, 80)}`);
    r.hs.slice(0, 40).forEach(h => console.log('  ' + h));
  } catch (e) { console.log(url, 'ERR', e.message.split('\n')[0]); }
  await p.close();
}
await b.close();
