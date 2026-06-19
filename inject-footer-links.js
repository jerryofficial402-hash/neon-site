const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    const targetBlock = `                    <h3 class="text-[#0a2540] font-bold mb-4 text-sm">Quick Links</h3>
                    <ul class="space-y-3 text-[#425466] text-sm font-medium">
                        <li><a href="/" class="hover:text-[#635bff] transition">Home</a></li>
                        <li><a href="/locations/" class="hover:text-[#635bff] transition">Locations</a></li>
                        <li><a href="/services/" class="hover:text-[#635bff] transition">Transport Options</a></li>
                        <li><a href="/reviews/" class="hover:text-[#635bff] transition">Reviews</a></li>
                        <li><a href="/blog/" class="hover:text-[#635bff] transition">Blog</a></li>
                        <li><a href="/#faqs" class="hover:text-[#635bff] transition">FAQs</a></li>
                    </ul>`;

    const newBlock = `                    <h3 class="text-[#0a2540] font-bold mb-4 text-sm">Quick Links</h3>
                    <ul class="space-y-3 text-[#425466] text-sm font-medium">
                        <li><a href="/" class="hover:text-[#635bff] transition">Home</a></li>
                        <li><a href="/locations/" class="hover:text-[#635bff] transition">Locations</a></li>
                        <li><a href="/services/" class="hover:text-[#635bff] transition">Transport Options</a></li>
                        <li><a href="/reviews/" class="hover:text-[#635bff] transition">Reviews</a></li>
                        <li><a href="/blog/" class="hover:text-[#635bff] transition">Blog</a></li>
                        <li><a href="/#faqs" class="hover:text-[#635bff] transition">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-[#0a2540] font-bold mb-4 text-sm">Comparison Guides</h3>
                    <ul class="space-y-3 text-[#425466] text-sm font-medium">
                        <li><a href="/compare/neon-vs-montway.html" class="hover:text-[#635bff] transition">Neon vs Montway</a></li>
                        <li><a href="/compare/broker-vs-carrier.html" class="hover:text-[#635bff] transition">Broker vs Carrier</a></li>
                        <li><a href="/compare/open-vs-enclosed.html" class="hover:text-[#635bff] transition">Open vs Enclosed</a></li>
                    </ul>`;

    // Wait, if I add another div, I need to change md:grid-cols-5 to md:grid-cols-6!
    const gridCols5 = /md:grid-cols-5 gap-8 mb-16/g;
    
    if (content.includes(targetBlock) && content.match(gridCols5)) {
        content = content.replace(targetBlock, newBlock);
        content = content.replace(gridCols5, 'md:grid-cols-6 gap-8 mb-16');
        fs.writeFileSync(filePath, content);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                processDirectory(fullPath);
            }
        } else {
            processFile(fullPath);
        }
    }
}

processDirectory(__dirname);
console.log('Footer links injected successfully!');
