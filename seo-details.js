const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let htmlFiles = [];

function findHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.vercel') {
                findHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

findHtmlFiles(rootDir);

let missingTitles = [];
let missingDescriptions = [];
let missingH1s = [];
let multipleH1s = [];
let missingCanonicals = [];

htmlFiles.forEach(file => {
    const relPath = path.relative(rootDir, file);
    const content = fs.readFileSync(file, 'utf8');

    if (!/<title>[\s\S]*?<\/title>/i.test(content)) missingTitles.push(relPath);
    if (!/<meta[^>]*name=["']description["'][^>]*>/i.test(content)) missingDescriptions.push(relPath);
    
    const h1Count = (content.match(/<h1/gi) || []).length;
    if (h1Count === 0) missingH1s.push(relPath);
    if (h1Count > 1) multipleH1s.push(relPath);

    if (!/<link[^>]*rel=["']canonical["'][^>]*>/i.test(content)) missingCanonicals.push(relPath);
});

console.log('--- Missing Titles ---');
missingTitles.forEach(f => console.log(f));
console.log('\n--- Missing Descriptions ---');
missingDescriptions.forEach(f => console.log(f));
console.log('\n--- Missing Canonicals ---');
missingCanonicals.forEach(f => console.log(f));
console.log('\n--- Missing H1s ---');
missingH1s.forEach(f => console.log(f));
console.log('\n--- Multiple H1s ---');
multipleH1s.forEach(f => console.log(f));
