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

const replacements = {
    '/services/luxury-exotic-car-shipping-services/': '/services/luxury-car-shipping/',
    '/services/door-to-door-car-transport/': '/services/door-to-door-car-shipping/',
    '/services/enclosed-transport/': '/services/enclosed-auto-transport/',
    '/services/open-transport/': '/services/open-auto-transport/',
    '/about/': '/why-neon/'
};

let replacedCount = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    for (const [oldLink, newLink] of Object.entries(replacements)) {
        if (content.includes(`href="${oldLink}"`)) {
            content = content.replace(new RegExp(`href="${oldLink}"`, 'g'), `href="${newLink}"`);
            changed = true;
        }
        if (content.includes(`href='${oldLink}'`)) {
            content = content.replace(new RegExp(`href='${oldLink}'`, 'g'), `href='${newLink}'`);
            changed = true;
        }
    }
    
    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        replacedCount++;
    }
});

console.log(`Replaced broken service links in ${replacedCount} files.`);
