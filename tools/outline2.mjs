// Outline by visual size: text blocks with font-size >= 26px, in page order.
import puppeteer from 'puppeteer';
const b = await puppeteer.launch({ headless: true });
for (const url of process.argv.slice(2)) {
  const p = await b.newPage(); await p.setViewport({ width: 1440, height: 900 });
  await p.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36');
  try {
    await p.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { scrollTo(0, y); await new Promise(r => setTimeout(r, 80)); } });
    const r = await p.evaluate(() => { const out = []; const seen = new Set(); for (const e of document.querySelectorAll('body *')) { if (e.closest('header,footer,nav')) continue; const t = [...e.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join(' ').replace(/\s+/g, ' ').trim(); if (t.length < 4) continue; const fs = parseFloat(getComputedStyle(e).fontSize); if (fs < 26 || !e.offsetParent) continue; if (seen.has(t)) continue; seen.add(t); out.push(`${Math.round(fs)}px ${t.slice(0, 90)}`); } return out; });
    console.log(`\n=== ${url}`); r.slice(0, 40).forEach(x => console.log('  ' + x));
  } catch (e) { console.log(url, 'ERR', e.message.split('\n')[0]); }
  await p.close();
}
await b.close();
