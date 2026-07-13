const fs = require('fs');

const content = fs.readFileSync('cost-calculator/index.html', 'utf8');
const startIdx = content.indexOf('<body');
const endIdx = content.indexOf('</body>');

const section = content.substring(startIdx, endIdx);

let lines = section.split('\n');
let stack = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Simple regex matching for <div ...> and </div>
    // This isn't perfect for HTML but usually good enough
    let idx = 0;
    while(idx < line.length) {
        const openIdx = line.indexOf('<div', idx);
        const closeIdx = line.indexOf('</div', idx);
        
        if (openIdx !== -1 && (closeIdx === -1 || openIdx < closeIdx)) {
            stack.push({line: i+1, content: line.substring(openIdx, Math.min(openIdx + 50, line.length)).trim()});
            idx = openIdx + 4;
        } else if (closeIdx !== -1) {
            stack.pop();
            idx = closeIdx + 5;
        } else {
            break;
        }
    }
}

console.log("Unclosed divs:");
stack.forEach(item => {
    console.log(`Line ${item.line}: ${item.content}`);
});
