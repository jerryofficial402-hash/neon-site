const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    const newCtaBlock = `
    <!-- Mobile Sticky CTA -->
    <style>
      #mobile-sticky-cta { position: fixed; bottom: 0; left: 0; width: 100%; z-index: 50; padding: 12px; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-top: 1px solid #e6e6e6; box-shadow: 0 -4px 10px -1px rgba(0,0,0,0.1); display: flex; gap: 12px; align-items: center; justify-content: space-between; box-sizing: border-box; }
      @media (min-width: 1024px) { #mobile-sticky-cta { display: none !important; } }
      .mobile-cta-btn { flex: 1; text-align: center; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; border-radius: 8px; font-weight: 900; text-decoration: none; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif; font-size: 15px; box-sizing: border-box; }
      .mobile-cta-btn.call { background-color: #39FF14; color: #0a2540; }
      .mobile-cta-btn.quote { background-color: #0a2540; color: #ffffff; }
      .mobile-cta-btn svg { width: 20px; height: 20px; flex-shrink: 0; }
    </style>
    <div id="mobile-sticky-cta">
        <a href="tel:5715767711" class="mobile-cta-btn call">
            <svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            Call Now
        </a>
        <a href="/cost-calculator/" class="mobile-cta-btn quote">
            Get Free Quote
        </a>
    </div>
</body>`;

    // Regex to find the old block.
    // It starts with <!-- Mobile Sticky CTA --> and ends right before </body>
    const oldBlockRegex = /<!-- Mobile Sticky CTA -->[\s\S]*?<\/body>/;
    
    if (oldBlockRegex.test(content)) {
        content = content.replace(oldBlockRegex, newCtaBlock);
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
console.log('Mobile CTA fixed globally!');
