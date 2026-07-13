const fs = require('fs');
const path = require('path');

const file = 'c:\\Users\\DYNABOOK\\.gemini\\antigravity\\scratch\\neon-site\\services\\index.html';
const content = fs.readFileSync(file, 'utf8');

const regex = /href="([^"]+)"/g;
let match;
const links = [];

while ((match = regex.exec(content)) !== null) {
    links.push(match[1]);
}

const baseDir = 'c:\\Users\\DYNABOOK\\.gemini\\antigravity\\scratch\\neon-site';
const issues = [];

links.forEach(link => {
    if (link.startsWith('http') || link.startsWith('tel:') || link.startsWith('#')) return;
    
    // Normalize path to local file
    let localPath = link;
    if (localPath.startsWith('/')) {
        localPath = localPath.substring(1);
    }
    
    // If it's a directory, look for index.html
    if (localPath === '' || localPath.endsWith('/')) {
        localPath = path.join(localPath, 'index.html');
    }
    
    const fullPath = path.join(baseDir, localPath);
    if (!fs.existsSync(fullPath)) {
        issues.push(`MISSING: ${link} -> expected ${fullPath}`);
    }
});

console.log(`Found ${issues.length} broken links:`);
issues.forEach(i => console.log(i));
