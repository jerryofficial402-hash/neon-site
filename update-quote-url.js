const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it contains /quote/
    if (content.includes('/quote/')) {
        // Replace /quote/ with /cost-calculator/
        content = content.replace(/\/quote\//g, '/cost-calculator/');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'og-images' && file !== 'images' && file !== '.vercel') {
                processDirectory(fullPath);
            }
        } else if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.xml') || file.endsWith('.json')) {
            // Exclude package-lock.json and this script itself
            if (file !== 'package-lock.json' && file !== 'update-quote-url.js') {
                replaceInFile(fullPath);
            }
        }
    }
}

processDirectory(__dirname);
console.log('Done bulk replacement!');
