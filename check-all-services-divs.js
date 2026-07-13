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
        console.log(`ERROR: ${file} has ${openDivs} open and ${closeDivs} close divs.`);
    }
}

const dir = 'c:\\Users\\DYNABOOK\\.gemini\\antigravity\\scratch\\neon-site\\services';
const files = fs.readdirSync(dir);

files.forEach(f => {
    if (f.endsWith('.html')) {
        checkFile(path.join(dir, f));
    }
});
console.log('Done checking services pages divs!');
