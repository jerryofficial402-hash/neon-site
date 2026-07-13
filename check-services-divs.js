const fs = require('fs');

const file = 'c:\\Users\\DYNABOOK\\.gemini\\antigravity\\scratch\\neon-site\\services\\index.html';
const content = fs.readFileSync(file, 'utf8');

// Find body bounds
const startIdx = content.indexOf('<body');
const endIdx = content.indexOf('</body>');

if (startIdx === -1 || endIdx === -1) {
    console.log("Could not find body tags");
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
    
    // Print the line if we go negative, or just print every 100 lines to track, or when we encounter major sections.
    if (openDivs < 0) {
        console.log(`${i}: [${openDivs}] ERROR NEGATIVE DIVS: ${line.trim()}`);
    }
}
console.log(`Final open divs before </body>: ${openDivs}`);
