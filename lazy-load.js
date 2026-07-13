const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let htmlFiles = [];

function findHtmlFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== '.vercel' && file !== 'og-images') {
                findHtmlFiles(fullPath);
            }
        } else if (file.endsWith('.html')) {
            htmlFiles.push(fullPath);
        }
    }
}

findHtmlFiles(rootDir);

let modifiedCount = 0;
let totalImagesModified = 0;

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // We will look for <img ...> tags
    // We shouldn't lazy load the first 1-2 images (hero images), so let's only lazy load if the image is NOT in the header or hero.
    // A simple heuristic: Only add loading="lazy" to images that occur AFTER the first <img ...> tag, or if the image has class containing "logo" or "hero", ignore it.
    
    let imgIndex = 0;
    const newContent = content.replace(/<img[^>]+>/g, (match) => {
        imgIndex++;
        // Skip first image (usually logo/hero)
        if (imgIndex <= 2) return match; 
        
        // Skip if already has loading=
        if (/loading=["']/.test(match)) return match;
        
        // Skip if it contains 'logo' or 'hero'
        if (match.toLowerCase().includes('logo') || match.toLowerCase().includes('hero')) return match;

        // Add loading="lazy"
        changed = true;
        totalImagesModified++;
        return match.replace(/<img/i, '<img loading="lazy"');
    });

    if (changed) {
        fs.writeFileSync(file, newContent, 'utf8');
        modifiedCount++;
    }
});

console.log(`Added loading="lazy" to ${totalImagesModified} images across ${modifiedCount} files.`);
