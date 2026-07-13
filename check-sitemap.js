const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const sitemapPath = path.join(rootDir, 'sitemap.xml');

if (!fs.existsSync(sitemapPath)) {
    console.log("No sitemap found.");
    process.exit(0);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const locs = (sitemapContent.match(/<loc>(.*?)<\/loc>/g) || []).map(l => l.replace(/<\/?loc>/g, ''));

let brokenInSitemap = [];

locs.forEach(url => {
    let relPath = url.replace('https://neonautotransport.com/', '').replace('https://www.neonautotransport.com/', '');
    if (relPath === '') relPath = 'index.html';
    else if (relPath.endsWith('/')) relPath = relPath + 'index.html';
    else if (!relPath.endsWith('.html')) relPath = relPath + '/index.html';
    
    if (!fs.existsSync(path.join(rootDir, relPath)) && !fs.existsSync(path.join(rootDir, relPath.replace('/index.html', '.html')))) {
        brokenInSitemap.push(url);
    }
});

console.log(`Sitemap contains ${locs.length} URLs.`);
console.log(`Found ${brokenInSitemap.length} broken URLs in sitemap.`);
if (brokenInSitemap.length > 0) {
    console.log("Sample of broken sitemap URLs:");
    brokenInSitemap.slice(0, 10).forEach(u => console.log(u));
}
