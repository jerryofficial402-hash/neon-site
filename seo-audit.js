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

console.log(`Found ${htmlFiles.length} HTML files.`);

let missingTitles = [];
let missingDescriptions = [];
let missingH1s = [];
let multipleH1s = [];
let missingCanonicals = [];
let unoptimizedImages = [];
let missingAltTags = [];
let inlineStyles = [];

htmlFiles.forEach(file => {
    const relPath = path.relative(rootDir, file);
    const content = fs.readFileSync(file, 'utf8');

    // Basic SEO checks
    if (!/<title>[\s\S]*?<\/title>/i.test(content)) missingTitles.push(relPath);
    if (!/<meta[^>]*name=["']description["'][^>]*>/i.test(content)) missingDescriptions.push(relPath);
    
    const h1Count = (content.match(/<h1/gi) || []).length;
    if (h1Count === 0) missingH1s.push(relPath);
    if (h1Count > 1) multipleH1s.push(relPath);

    if (!/<link[^>]*rel=["']canonical["'][^>]*>/i.test(content)) missingCanonicals.push(relPath);

    // Performance & Accessibility
    const images = content.match(/<img[^>]*>/gi) || [];
    images.forEach(img => {
        if (!/alt=["']/i.test(img)) missingAltTags.push(relPath);
        if (!/loading=["']lazy["']/i.test(img)) {
            // Hero images shouldn't be lazy loaded, but let's just log them to review
            unoptimizedImages.push(relPath);
        }
    });

});

console.log('\n--- SEO Audit ---');
console.log(`Missing Titles: ${missingTitles.length}`);
console.log(`Missing Meta Descriptions: ${missingDescriptions.length}`);
console.log(`Missing H1 Tags: ${missingH1s.length}`);
console.log(`Multiple H1 Tags: ${multipleH1s.length}`);
console.log(`Missing Canonicals: ${missingCanonicals.length}`);

console.log('\n--- Performance & Accessibility Audit ---');
console.log(`Images missing alt tags: ${missingAltTags.length} instances`);
console.log(`Images without loading="lazy": ${unoptimizedImages.length} instances (Some may be above-the-fold hero images)`);

// Check Sitemap
console.log('\n--- Sitemap & Robots Check ---');
const sitemapPath = path.join(rootDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const urls = (sitemapContent.match(/<loc>.*?<\/loc>/g) || []).length;
    console.log(`Sitemap exists with ${urls} URLs.`);
} else {
    console.log('Sitemap is missing!');
}

const robotsPath = path.join(rootDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
    console.log('Robots.txt exists.');
} else {
    console.log('Robots.txt is missing!');
}

