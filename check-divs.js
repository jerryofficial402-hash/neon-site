const fs = require('fs');

const file = 'c:\\Users\\DYNABOOK\\.gemini\\antigravity\\scratch\\neon-site\\texas-car-shipping\\index.html';
const content = fs.readFileSync(file, 'utf8');

// Find the section for Factors:
const startIdx = content.indexOf('<!-- Factors Impacting Costs -->');
const endIdx = content.indexOf('<!-- Right Sidebar Sticky -->');

if (startIdx === -1 || endIdx === -1) {
    console.log("Could not find sections");
    process.exit(1);
}

const section = content.substring(startIdx, endIdx);

let openDivs = 0;
let lines = section.split('\n');
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const openMatches = (line.match(/<div/g) || []).length;
    const closeMatches = (line.match(/<\/div>/g) || []).length;
    
    openDivs += openMatches;
    openDivs -= closeMatches;
    
    // Print the line if it has any div changes, or to show context around 0
    if (openMatches > 0 || closeMatches > 0 || line.includes('<!--')) {
        console.log(`${i}: [${openDivs}] ${line.trim()}`);
    }
}
