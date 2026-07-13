const fs = require('fs');
const path = require('path');

function checkFile(file) {
    const content = fs.readFileSync(file, 'utf8');
    const startIdx = content.indexOf('<body');
    const endIdx = content.indexOf('</body>');
    if (startIdx === -1 || endIdx === -1) {
        return;
    }
    const section = content.substring(startIdx, endIdx);
    const openDivs = (section.match(/<div/g) || []).length;
    const closeDivs = (section.match(/<\/div>/g) || []).length;
    
    if (openDivs !== closeDivs) {
        console.log(`ERROR: ${file} has ${openDivs} open and ${closeDivs} close divs. Diff = ${openDivs - closeDivs}`);
    }
}

function walkSync(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === '.vercel') continue;
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkSync(filepath);
        } else if (file.endsWith('.html')) {
            checkFile(filepath);
        }
    }
}

const dir = 'c:\\Users\\DYNABOOK\\.gemini\\antigravity\\scratch\\neon-site';
walkSync(dir);
console.log('Done checking ALL HTML files!');
