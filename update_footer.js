const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');

let html = fs.readFileSync(indexPath, 'utf8');

// I will just use string replacement to add the link to the "Popular Cities" list.
const miamiLinkStr = `<li><a href="/routes/city/miami-fl/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Miami Car Shipping</a></li>`;
const nyLinkStr = `<li><a href="/new-york-car-shipping/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> New York Car Shipping</a></li>\n      `;

if (html.includes(miamiLinkStr)) {
  html = html.replace(miamiLinkStr, nyLinkStr + miamiLinkStr);
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('Successfully updated index.html footer');
} else {
  console.log('Could not find miami link string in index.html');
}
