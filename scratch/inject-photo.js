const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    let replacedCount = 0;

    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'scratch' || file === 'css' || file === 'js') continue;
        
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            if (file !== 'images') {
                replacedCount += processDirectory(fullPath);
            }
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Target the large SA initials in the author byline block (route pages, blog bottom)
            const largeInitialsRegex = /<div class="w-16 h-16 rounded-full bg-\[#e0f2fe\] flex items-center justify-center text-\[#0369a1\] font-black text-2xl flex-shrink-0 shadow-inner">SA<\/div>/g;
            const largeImageReplacement = `<img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover shadow-inner flex-shrink-0 border-2 border-[#e0f2fe]">`;
            
            // Target the small SA initials in the blog posts top banner
            const smallInitialsRegex = /<div class="w-12 h-12 rounded-full bg-\[#e0e7ff\] flex items-center justify-center text-\[#635bff\] font-black text-lg">SA<\/div>/g;
            const smallImageReplacement = `<img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-12 h-12 rounded-full object-cover shadow-inner flex-shrink-0 border-2 border-[#e0e7ff]">`;

            // Target the massive SA initials on the author page itself
            const massiveInitialsRegex = /<div class="w-32 h-32 mx-auto rounded-full bg-\[#e0f2fe\] flex items-center justify-center text-\[#0369a1\] font-black text-5xl mb-6 shadow-inner ring-4 ring-white shadow-lg">SA<\/div>/g;
            const massiveImageReplacement = `<img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-32 h-32 mx-auto rounded-full object-cover mb-6 shadow-inner ring-4 ring-white shadow-lg">`;

            if (largeInitialsRegex.test(content)) {
                content = content.replace(largeInitialsRegex, largeImageReplacement);
                modified = true;
            }
            if (smallInitialsRegex.test(content)) {
                content = content.replace(smallInitialsRegex, smallImageReplacement);
                modified = true;
            }
            if (massiveInitialsRegex.test(content)) {
                content = content.replace(massiveInitialsRegex, massiveImageReplacement);
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                replacedCount++;
            }
        }
    }
    return replacedCount;
}

const count = processDirectory(path.join(__dirname, '..'));
console.log(`Successfully replaced 'SA' initials with the profile picture in ${count} files.`);
