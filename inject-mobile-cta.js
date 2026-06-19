const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has the mobile CTA
    if (content.includes('id="mobile-sticky-cta"')) return;

    const ctaBlock = `
    <!-- Mobile Sticky CTA -->
    <div id="mobile-sticky-cta" class="fixed bottom-0 left-0 w-full z-50 p-3 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)] flex gap-3 items-center justify-between">
        <div class="flex-1 text-center">
            <a href="tel:5715767711" class="flex items-center justify-center gap-2 w-full py-3 bg-[#39FF14] text-[#0a2540] font-black rounded-lg shadow-lg">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                Call Now
            </a>
        </div>
        <div class="flex-1 text-center">
            <a href="/cost-calculator/" class="flex items-center justify-center gap-2 w-full py-3 bg-[#0a2540] text-white font-bold rounded-lg shadow-lg">
                Get Quote
            </a>
        </div>
    </div>
</body>`;

    if (content.includes('</body>')) {
        content = content.replace('</body>', ctaBlock);
        
        // Also, add padding-bottom to the body or main so content isn't hidden behind the CTA on mobile
        // We can add a style to body: <body class="... pb-20 lg:pb-0">
        if (content.includes('<body class="')) {
            content = content.replace('<body class="', '<body class="pb-24 lg:pb-0 ');
        }
        
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
console.log('Mobile CTA injected successfully!');
