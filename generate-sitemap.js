const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let htmlFiles = [];

function findHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!['node_modules', '.git', '.vercel', 'og-images', 'dashboard'].includes(file)) {
                findHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

findHtmlFiles(rootDir);

const domain = 'https://neonautotransport.com';
const urls = [];

htmlFiles.forEach(file => {
    let rel = path.relative(rootDir, file).replace(/\\/g, '/');
    
    // Convert relative path to URL path
    if (rel === 'index.html') {
        urls.push(domain + '/');
    } else if (rel.endsWith('/index.html')) {
        urls.push(domain + '/' + rel.replace('/index.html', '/'));
    } else {
        urls.push(domain + '/' + rel.replace('.html', '/'));
    }
});

// Sort for clean XML
urls.sort();

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(url => {
    xml += `  <url>\n    <loc>${url}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${url === domain + '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Successfully generated sitemap with ${urls.length} URLs.`);
