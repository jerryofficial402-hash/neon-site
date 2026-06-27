const fs = require('fs');
const path = require('path');

function processHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const fixCss = `\n<style>\n@media (max-width: 1024px) { #sticky-widget { display: none !important; } body { padding-bottom: 80px !important; } }\n</style>\n</head>`;
    
    if (content.includes('</head>') && !content.includes('padding-bottom: 80px !important;')) {
        content = content.replace('</head>', fixCss);
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    let changed = 0;
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                changed += traverseDirectory(fullPath);
            }
        } else if (file.endsWith('.html')) {
            if (processHtmlFile(fullPath)) {
                changed++;
            }
        }
    }
    return changed;
}

const count = traverseDirectory('.');
console.log('Fixed ' + count + ' HTML files.');
