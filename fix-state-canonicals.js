const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'routes');
const stateFiles = fs.readdirSync(routesDir);

for (const file of stateFiles) {
    const fullPath = path.join(routesDir, file);
    if (fs.statSync(fullPath).isFile() && fullPath.endsWith('.html')) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let updated = false;

        const canonicalRegex = /<link rel="canonical" href="(https:\/\/neonautotransport\.com\/[^"]+?)\.html"([^>]*)>/g;
        if (canonicalRegex.test(content)) {
            content = content.replace(canonicalRegex, '<link rel="canonical" href="$1/"$2>');
            updated = true;
        }

        if (updated) {
            fs.writeFileSync(fullPath, content);
            console.log(`Fixed canonical in ${file}`);
        }
    }
}
console.log('State page canonicals fixed!');
