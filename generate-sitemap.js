import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname;
let htmlFiles = [];

function findHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!['node_modules', '.git', '.vercel', 'og-images', 'dashboard', 'scratch'].includes(file)) {
                findHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

findHtmlFiles(rootDir);

const domain = 'https://neonautotransport.com';
const urls = new Set();

htmlFiles.forEach(file => {
    let rel = path.relative(rootDir, file).replace(/\\/g, '/');
    
    // Skip template files or temp files
    if (rel.startsWith('node_modules') || rel.startsWith('.vercel')) return;

    // Convert relative path to URL path
    if (rel === 'index.html') {
        urls.add(domain + '/');
    } else if (rel.endsWith('/index.html')) {
        urls.add(domain + '/' + rel.replace('/index.html', '/'));
    } else {
        urls.add(domain + '/' + rel.replace('.html', '/'));
    }
});

const sortedUrls = Array.from(urls).sort();

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

sortedUrls.forEach(url => {
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>2026-09-01</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${url === domain + '/' ? '1.0' : '0.8'}</priority>\n  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Successfully generated sitemap with ${sortedUrls.length} URLs.`);
