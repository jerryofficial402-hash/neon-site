const fs = require('fs');
const path = require('path');

const domain = 'https://neonautotransport.com';
const sitemapPath = path.join(__dirname, 'sitemap.xml');

// Priorities based on path
function getPriority(route) {
    if (route === '/') return '1.0';
    if (route.startsWith('/services/')) return '0.9';
    if (route.startsWith('/routes/city/')) return '0.7'; // New city and city-to-city pages
    if (route.startsWith('/routes/')) return '0.8'; // State pages
    if (route.startsWith('/compare/')) return '0.8';
    return '0.6';
}

function processDirectory(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'css' && file !== 'images' && file !== 'js' && file !== 'blog') {
                processDirectory(fullPath, fileList);
            }
        } else {
            if (fullPath.endsWith('.html')) {
                fileList.push(fullPath);
            }
        }
    }
    return fileList;
}

const allHtmlFiles = processDirectory(__dirname);

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

allHtmlFiles.forEach(file => {
    // Convert absolute path to relative URL path
    let relativePath = file.replace(__dirname, '').replace(/\\/g, '/');
    
    // Remove index.html from root
    if (relativePath === '/index.html') {
        relativePath = '/';
    }

    const loc = `${domain}${relativePath}`;
    const priority = getPriority(relativePath);
    const lastmod = new Date().toISOString().split('T')[0];

    sitemapContent += `  <url>\n`;
    sitemapContent += `    <loc>${loc}</loc>\n`;
    sitemapContent += `    <lastmod>${lastmod}</lastmod>\n`;
    sitemapContent += `    <changefreq>weekly</changefreq>\n`;
    sitemapContent += `    <priority>${priority}</priority>\n`;
    sitemapContent += `  </url>\n`;
});

sitemapContent += `</urlset>`;

fs.writeFileSync(sitemapPath, sitemapContent);
console.log(`Generated sitemap.xml with ${allHtmlFiles.length} URLs successfully!`);
