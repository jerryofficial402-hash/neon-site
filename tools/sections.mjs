// Prints a page's top-level sections: heading, word count, links/CTAs, forms, images, approximate height.
import puppeteer from 'puppeteer';
const url = process.argv[2];
const b = await puppeteer.launch({ headless: true });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36');
await p.goto(url, { waitUntil: 'networkidle2', timeout: 60000 }).catch(() => {});
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 800) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); } });
const r = await p.evaluate(() => {
  // pick blocks: direct children chain until we find a list of >=4 tall siblings
  let root = document.querySelector('main') || document.body;
  for (let i = 0; i < 4; i++) { const big = [...root.children].filter(e => e.getBoundingClientRect().height > 150); if (big.length >= 4) break; if (big.length === 1) root = big[0]; else break; }
  return [...root.children].filter(e => e.getBoundingClientRect().height > 80 && !/HEADER|FOOTER|NAV|SCRIPT/.test(e.tagName)).map(e => {
    const h = e.querySelector('h1,h2,h3'); const txt = e.innerText || '';
    return { h: ((h && h.innerText) || txt.slice(0, 60)).replace(/\s+/g, ' ').trim().slice(0, 90), words: txt.split(/\s+/).filter(Boolean).length, ctas: [...e.querySelectorAll('a,button')].map(a => (a.innerText || '').trim()).filter(t => t && t.length < 40).slice(0, 4).join(' | '), form: !!e.querySelector('form,input'), imgs: e.querySelectorAll('img,video,iframe').length, hpx: Math.round(e.getBoundingClientRect().height) };
  });
});
console.log(url, r.length, 'sections, page height', await p.evaluate(() => document.body.scrollHeight));
r.forEach((s, i) => console.log(String(i + 1).padStart(2), `[${s.hpx}px ${s.words}w${s.form ? ' FORM' : ''}${s.imgs ? ' img' + s.imgs : ''}]`, s.h, s.ctas ? ' -> ' + s.ctas : ''));
await b.close();
