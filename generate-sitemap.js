const fs = require('fs');
const path = require('path');

const baseUrl = 'https://neonautotransport.com';
const urls = [];

// Base manual URLs
const coreUrls = [
    '/',
    '/about/',
    '/services/',
    '/reviews/',
    '/blog/',
    '/faqs/',
    '/locations/',
    '/cost-calculator/',
    '/terms/'
];

urls.push(...coreUrls);

// Scan a directory and return all HTML files
function getHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(getHtmlFiles(file));
        } else { 
            if (file.endsWith('.html') && !file.includes('template')) {
                results.push(file);
            }
        }
    });
    return results;
}

const baseDir = __dirname;

// Directories to scan
const dirsToScan = [
    { dir: 'services', pathPrefix: '/services/' },
    { dir: 'blog', pathPrefix: '/blog/' },
    { dir: 'compare', pathPrefix: '/compare/' }
];

dirsToScan.forEach(({dir, pathPrefix}) => {
    const fullDir = path.join(baseDir, dir);
    if (fs.existsSync(fullDir)) {
        const files = getHtmlFiles(fullDir);
        files.forEach(file => {
            let relativePath = file.replace(fullDir, '').replace(/\\/g, '/');
            if (relativePath.startsWith('/')) relativePath = relativePath.substring(1);
            
            // Skip index.html as it's added in core
            if (relativePath === 'index.html') return;
            
            const slug = relativePath.replace('.html', '');
            urls.push(`${pathPrefix}${slug}/`);
        });
    }
});

// Scan Routes directory (this includes state pages, city pages, and city-routes)
const routesDir = path.join(baseDir, 'routes');
if (fs.existsSync(routesDir)) {
    const routeFiles = getHtmlFiles(routesDir);
    routeFiles.forEach(file => {
        let relativePath = file.replace(routesDir, '').replace(/\\/g, '/');
        if (relativePath.startsWith('/')) relativePath = relativePath.substring(1);
        
        // Vercel rewrites:
        // /routes/alabama-car-shipping.html -> /alabama-car-shipping/
        // /routes/city/los-angeles-ca.html -> /routes/city/los-angeles-ca/
        // /routes/city-routes/los-angeles-ca-to-dallas-tx.html -> /routes/city-routes/los-angeles-ca-to-dallas-tx/
        
        if (!relativePath.includes('/')) {
            // It's a state page in the root of /routes/
            const slug = relativePath.replace('.html', '');
            urls.push(`/${slug}/`);
        } else {
            // It's a city or city-route page
            const slug = relativePath.replace('.html', '');
            urls.push(`/routes/${slug}/`);
        }
    });
}

// Generate Sitemap XML
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// De-duplicate URLs
const uniqueUrls = [...new Set(urls)];

uniqueUrls.forEach(url => {
    // Only map valid URLs
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    sitemapXml += `  <url>\n    <loc>${fullUrl}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
});

sitemapXml += `</urlset>`;

fs.writeFileSync(path.join(baseDir, 'sitemap.xml'), sitemapXml);
console.log(`Generated sitemap.xml with ${uniqueUrls.length} URLs!`);
