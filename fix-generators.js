const fs = require('fs');
const path = require('path');

function updateGenerator(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    // Fix canonical in template generation string
    const oldCanonical = /<link rel="canonical" href="([^"]+)\.html">/g;
    if (oldCanonical.test(content)) {
        content = content.replace(oldCanonical, '<link rel="canonical" href="$1/">');
        updated = true;
    }

    if (updated) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated generator: ${path.basename(filePath)}`);
    }
}

updateGenerator(path.join(__dirname, 'routes', 'generate-routes-v2.js'));
updateGenerator(path.join(__dirname, 'routes', 'generate-city-pages.js'));
updateGenerator(path.join(__dirname, 'routes', 'generate-city-routes.js'));
