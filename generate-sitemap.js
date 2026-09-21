import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = __dirname;
let htmlFiles = [];

// Load vercel.json redirects to ensure zero redirected URLs in sitemap
const vercel = JSON.parse(fs.readFileSync(path.join(rootDir, 'vercel.json'), 'utf8'));
const redirectSources = new Set(vercel.redirects.map(r => r.source));

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

const excludedFiles = [
    'routes/route-template.html',
    'route-template.html'
];

htmlFiles.forEach(file => {
    let rel = path.relative(rootDir, file).replace(/\\/g, '/');
    
    // Skip template files, dev folders, or disallows
    if (rel.startsWith('node_modules') || rel.startsWith('.vercel') || rel.startsWith('scratch') || rel.startsWith('dashboard')) return;
    if (excludedFiles.includes(rel) || rel.includes('template')) return;

    // Convert relative path to URL path
    let urlPath = '';
    if (rel === 'index.html') {
        urlPath = '/';
    } else if (rel.endsWith('/index.html')) {
        urlPath = '/' + rel.replace('/index.html', '/');
    } else {
        urlPath = '/' + rel.replace('.html', '/');
    }

    // Check if URL matches a redirect
    if (redirectSources.has(urlPath) || redirectSources.has(urlPath.slice(0, -1))) {
        return; // Skip redirected URLs
    }

    urls.add(domain + urlPath);
});

const sortedUrls = Array.from(urls).sort();

const today = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

sortedUrls.forEach(url => {
    const priority = url === domain + '/' ? '1.0' : (url.includes('/services/') || url.includes('/car-shipping-cost/') || url.includes('/how-it-works/')) ? '0.9' : '0.8';
    xml += `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
});

xml += `</urlset>`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Successfully generated clean sitemap.xml with ${sortedUrls.length} URLs.`);
