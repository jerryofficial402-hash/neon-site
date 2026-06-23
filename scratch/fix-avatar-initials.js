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

            // Target the specific avatar divs
            const regex = />MR<\/div>/g;
            if (regex.test(content)) {
                content = content.replace(regex, '>SA</div>');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                replacedCount++;
            }
        }
    }
    return replacedCount;
}

const count = processDirectory(path.join(__dirname, '..'));
console.log(`Successfully replaced 'MR' with 'SA' in ${count} files.`);
