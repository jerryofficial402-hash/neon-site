const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let replacedCount = 0;

    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === 'css' || file === 'js' || file === 'images') continue;
        
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            replacedCount += processDirectory(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Stats to replace
            const targets = [
                { regex: /half a million clients/gi, replacement: "over 150,000 clients" },
                { regex: /half a million customers/gi, replacement: "over 150,000 customers" },
                { regex: /500,000 clients/gi, replacement: "over 150,000 clients" },
                { regex: /500,000 customers/gi, replacement: "over 150,000 customers" }
            ];

            targets.forEach(t => {
                if (t.regex.test(content)) {
                    content = content.replace(t.regex, t.replacement);
                    modified = true;
                }
            });

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                replacedCount++;
            }
        }
    }
    return replacedCount;
}

const count = processDirectory(path.join(__dirname, '..'));
console.log(`Reconciled stats in ${count} files.`);
