const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let htmlFiles = [];

function findHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.vercel' && file !== 'og-images') {
                findHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

findHtmlFiles(rootDir);

let allValidPaths = new Set();
htmlFiles.forEach(file => {
    let rel = path.relative(rootDir, file).replace(/\\/g, '/');
    if (rel === 'index.html') {
        allValidPaths.add('/');
    } else if (rel.endsWith('/index.html')) {
        allValidPaths.add('/' + rel.replace('/index.html', '/'));
        allValidPaths.add('/' + rel.replace('/index.html', ''));
    } else {
        allValidPaths.add('/' + rel.replace('.html', '/'));
        allValidPaths.add('/' + rel.replace('.html', ''));
        allValidPaths.add('/' + rel); // direct html access
    }
});
allValidPaths.add('/sitemap.xml');
allValidPaths.add('/robots.txt');
allValidPaths.add('/');

let brokenLinks = new Set();
let checkedLinks = 0;

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = (content.match(/href=["'](\/[^"']*)["']/g) || []);
    
    hrefs.forEach(hrefMatch => {
        const link = hrefMatch.replace(/href=["']/i, '').replace(/["']$/, '');
        if (link.startsWith('/') && !link.startsWith('//') && !link.includes('.') || link.endsWith('.html') || link.endsWith('.xml')) {
            checkedLinks++;
            // Strip hash/query
            let cleanLink = link.split('#')[0].split('?')[0];
            if (cleanLink === '') return;
            
            if (!allValidPaths.has(cleanLink) && cleanLink !== '/cost-calculator/') {
                // Check if directory exists
                const dirPath = path.join(rootDir, cleanLink);
                if (!fs.existsSync(dirPath) && !fs.existsSync(dirPath + '.html')) {
                     brokenLinks.add(`${cleanLink} (found in ${path.relative(rootDir, file)})`);
                }
            }
        }
    });
});

console.log(`Checked ${checkedLinks} internal links.`);
console.log(`Found ${brokenLinks.size} potentially broken internal links:`);
brokenLinks.forEach(b => console.log(b));
