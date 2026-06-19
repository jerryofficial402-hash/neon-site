const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git') continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDir(fullPath);
        } else if (entry.isFile() && fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<li><a href="/reviews/"') && !content.includes('/insurance/')) {
                // Insert Insurance under Reviews in the footer Quick Links
                content = content.replace('<li><a href="/reviews/" class="hover:text-[#635bff] transition">Reviews</a></li>', '<li><a href="/reviews/" class="hover:text-[#635bff] transition">Reviews</a></li>\n                        <li><a href="/insurance/" class="hover:text-[#635bff] transition">Insurance Coverage</a></li>');
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

processDir(path.join(__dirname, '..'));
console.log('Footer updated with Insurance link');
