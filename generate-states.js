const fs = require('fs');
const path = require('path');
const { getTemplate } = require('./state-to-state-template.js');

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

let missingStateLinks = new Set();

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const hrefs = (content.match(/href=["'](\/[^"']*)["']/g) || []);
    
    hrefs.forEach(hrefMatch => {
        const link = hrefMatch.replace(/href=["']/i, '').replace(/["']$/, '');
        if (link.startsWith('/') && !link.startsWith('//') && !link.includes('.') || link.endsWith('.html')) {
            let cleanLink = link.split('#')[0].split('?')[0];
            if (cleanLink === '') return;
            
            if (!allValidPaths.has(cleanLink) && cleanLink !== '/cost-calculator/') {
                const dirPath = path.join(rootDir, cleanLink);
                if (!fs.existsSync(dirPath) && !fs.existsSync(dirPath + '.html')) {
                    if (cleanLink.includes('-to-') && cleanLink.includes('-car-shipping/')) {
                         missingStateLinks.add(cleanLink);
                    }
                }
            }
        }
    });
});

function formatName(slug) {
    if (!slug) return '';
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let generatedCount = 0;

missingStateLinks.forEach(link => {
    let clean = link.replace(/^\//, '').replace(/\/$/, ''); // Remove leading/trailing slash
    // e.g. maine-to-california-car-shipping
    let base = clean.replace('-car-shipping', ''); // maine-to-california
    let parts = base.split('-to-');
    if (parts.length !== 2) return;
    
    let state1 = formatName(parts[0]);
    let state2 = formatName(parts[1]);
    
    const html = getTemplate(state1, state2, clean);
    
    const targetDir = path.join(rootDir, clean);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
    generatedCount++;
});

console.log(`Successfully generated ${generatedCount} state-to-state pages!`);
