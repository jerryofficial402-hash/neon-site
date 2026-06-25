const fs = require('fs');
const path = require('path');

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('.git') && !fullPath.includes('node_modules')) {
                walk(fullPath);
            }
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // Fix white gap in state pages
            if (content.includes('<main class="pt-28">') && content.includes('<section class="bg-[#f6f9fc] border-b border-[#e6e6e6]">')) {
                content = content.replace('<main class="pt-28">', '<main>');
                content = content.replace('<section class="bg-[#f6f9fc] border-b border-[#e6e6e6]">', '<section class="pt-28 bg-[#f6f9fc] border-b border-[#e6e6e6]">');
                modified = true;
            }
            
            // Fix image cropping
            if (content.includes('class="absolute inset-0 w-full h-full object-cover"')) {
                content = content.replace(/class="absolute inset-0 w-full h-full object-cover"/g, 'class="absolute inset-0 w-full h-full object-cover object-left"');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed', fullPath);
            }
        }
    });
}
walk('.');
