const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    let location = null;

    // Check state format: <h1>... Virginia Car Shipping</h1>
    const stateMatch = content.match(/<h1[^>]*>([^<]+) Car Shipping<\/h1>/i);
    if (stateMatch && stateMatch[1]) {
        location = stateMatch[1].trim();
    }

    // Check city format: To or From Miami, FL</h1>
    const cityMatch = content.match(/To or From\s+([^<]+)<\/h1>/i);
    if (cityMatch && cityMatch[1]) {
        location = cityMatch[1].trim();
    }
    
    if (location) {
        const oldCta = 'Calculate Your Rate Instantly';
        const newCta = `Get a Quote for ${location}`;
        
        const oldMini = 'Talk to an auto transport expert now or get an instant quote online.';
        const newMini = `Talk to an auto transport expert now or get an instant quote for shipping to/from ${location}.`;

        let updated = false;
        
        if (content.includes(oldCta)) {
            content = content.replace(new RegExp(oldCta, 'g'), newCta);
            updated = true;
        }
        
        if (content.includes(oldMini)) {
            content = content.replace(new RegExp(oldMini, 'g'), newMini);
            updated = true;
        }

        if (updated) {
            fs.writeFileSync(filePath, content);
            console.log(`Injected contextual CTA into ${path.basename(filePath)}`);
        }
    }
}

// Process State Pages
const routesDir = path.join(__dirname, 'routes');
const stateFiles = fs.readdirSync(routesDir);
for (const file of stateFiles) {
    const fullPath = path.join(routesDir, file);
    if (fs.statSync(fullPath).isFile() && fullPath.endsWith('.html')) {
        processFile(fullPath);
    }
}

// Process City Pages
const cityDir = path.join(routesDir, 'city');
if (fs.existsSync(cityDir)) {
    const cityFiles = fs.readdirSync(cityDir);
    for (const file of cityFiles) {
        const fullPath = path.join(cityDir, file);
        if (fs.statSync(fullPath).isFile() && fullPath.endsWith('.html')) {
            processFile(fullPath);
        }
    }
}

console.log('Contextual CTAs injected successfully!');
