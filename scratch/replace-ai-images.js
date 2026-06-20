const fs = require('fs');
const path = require('path');

function capitalize(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function run() {
    const dir = path.join(__dirname, '../routes/city');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
    
    let successCount = 0;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Skip -to- routes or handle them generically
        if (file.includes('-to-')) {
            continue;
        }

        const base = file.replace('.html', '');
        const parts = base.split('-');
        const abbr = parts.pop().toUpperCase(); // e.g. "TX"
        const cityHyphen = parts.join('-');
        const city = capitalize(cityHyphen); // e.g. "Houston"
        
        // Build the dynamic Pollinations.ai URL for the city
        // We encode the prompt so it's a valid URL
        const prompt = `City of ${city} beautiful skyline photography high quality`;
        const imgUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1200&height=800&nologo=true`;
        
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // The existing generic image URL
        const genericRegex = /https:\/\/images\.unsplash\.com\/photo-[^?"]+\?[^"]+/g;
        
        // It might also be a wikipedia url if the previous script succeeded for some
        const wikiRegex = /https:\/\/upload\.wikimedia\.org\/[^"]+/g;
        
        let changed = false;
        
        if (genericRegex.test(content)) {
            content = content.replace(genericRegex, imgUrl);
            changed = true;
        } else if (wikiRegex.test(content)) {
            content = content.replace(wikiRegex, imgUrl);
            changed = true;
        }
        
        if (changed) {
            fs.writeFileSync(filePath, content, 'utf8');
            successCount++;
        }
    }
    
    console.log(`\nDone! Replaced images with dynamic AI skylines in ${successCount} files.`);
}

run();
