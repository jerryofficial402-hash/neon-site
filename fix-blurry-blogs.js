const fs = require('fs');
const path = require('path');

const blogDir = 'blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the low-res '-card.webp' with the high-res '.webp'
    const newContent = content.replace(/-card\.webp/g, '.webp');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed blurry images in ${file}`);
    }
});
console.log('Done!');
