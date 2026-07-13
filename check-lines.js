const fs = require('fs');

const file = process.argv[2];
const content = fs.readFileSync(file, 'utf8');

const startIdx = content.indexOf('<body');
const endIdx = content.indexOf('</body>');

const section = content.substring(startIdx, endIdx);

let openDivs = 0;
let lines = section.split('\n');

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const openMatches = (line.match(/<div/g) || []).length;
    const closeMatches = (line.match(/<\/div>/g) || []).length;
    
    openDivs += openMatches;
    openDivs -= closeMatches;
}
console.log(`Final open divs before </body> in ${file}: ${openDivs}`);
