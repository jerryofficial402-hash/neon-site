const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('routes/generate-routes-v2.js', 'utf8');

// 1. Change output path from routes/${slug}-car-shipping.html to ../${slug}-car-shipping/index.html
content = content.replace(
    /const outputPath = path\.join\(__dirname, `\$\{slug\}-car-shipping\.html`\);/,
    `const dirPath = path.join(__dirname, '..', \`\${slug}-car-shipping\`);\n    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });\n    const outputPath = path.join(dirPath, 'index.html');`
);

// 2. Fix the "Related States" /routes/ links in the template
// Instead of replacing in the template file, we'll add a replace call in the generator body
const relatedStatesReplacement = `    // Fix Related States links\n    content = content.replace(/href="\\/routes\\/([a-z-]+-car-shipping)\\/"/g, 'href="/$1/"');\n`;

// Let's insert this near where other link replacements are done
content = content.replace(
    /content = content\.replace\(\/<link rel="canonical" href="\(\[^"\]\+\)\\\.html"\/g, '<link rel="canonical" href="\$1\/"'\);/,
    `content = content.replace(/<link rel="canonical" href="([^"]+)\\.html"/g, '<link rel="canonical" href="$1/"');\n${relatedStatesReplacement}`
);

// 3. Update Popular Routes footer logic (which I injected earlier) to remove /routes/ prefix
content = content.replace(
    /href="\/routes\/\$\{slug\}-to-\$\{targetSlug\}-car-shipping\/"/g,
    'href="/${slug}-to-${targetSlug}-car-shipping/"'
);

fs.writeFileSync('routes/generate-routes-v2.js', content);
console.log('Generator updated for Option A!');
