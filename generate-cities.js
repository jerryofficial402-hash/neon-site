const fs = require('fs');
const path = require('path');
const { getTemplate } = require('./city-template.js');

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

let missingCityLinks = new Set();

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
                    // It's a broken link. Let's see if it's a city link
                    if (cleanLink.includes('-car-shipping/') || cleanLink.includes('/routes/city/')) {
                         missingCityLinks.add(cleanLink);
                    }
                }
            }
        }
    });
});

console.log(`Found ${missingCityLinks.size} missing city links to generate.`);

function formatName(slug) {
    if (!slug) return '';
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

let generatedCount = 0;

missingCityLinks.forEach(link => {
    // Determine state and city from link
    // Example 1: /florida-car-shipping/miami/
    // Example 2: /routes/city/el-paso-tx/
    
    let parts = link.split('/').filter(p => p);
    if (parts.length < 2) return;
    
    let stateSlug, citySlug, stateName, cityName;
    
    if (parts[0] === 'routes' && parts[1] === 'city' && parts.length === 3) {
        stateSlug = 'routes/city';
        citySlug = parts[2]; // e.g. el-paso-tx
        let cityParts = citySlug.split('-');
        stateName = cityParts.pop().toUpperCase(); // TX
        cityName = formatName(cityParts.join('-')); // El Paso
    } else if (parts[0].endsWith('-car-shipping') && parts.length === 2) {
        stateSlug = parts[0];
        citySlug = parts[1];
        stateName = formatName(stateSlug.replace('-car-shipping', ''));
        cityName = formatName(citySlug);
    } else {
        return; // Unknown format
    }
    
    const html = getTemplate(cityName, stateName, stateSlug);
    
    // Ensure dir exists
    const targetDir = path.join(rootDir, stateSlug, citySlug);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
    generatedCount++;
});

console.log(`Successfully generated ${generatedCount} city pages!`);
