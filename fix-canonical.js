const fs = require('fs');
const path = require('path');

function fixCanonical(filePath, baseUrl) {
    if (!filePath.endsWith('.html')) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    const slug = path.basename(filePath, '.html');
    let canonicalUrl = '';
    
    if (slug === 'index') {
        canonicalUrl = `${baseUrl}/`;
    } else {
        canonicalUrl = `${baseUrl}/${slug}/`;
    }

    const wrongCanonical = /<link rel="canonical" href="https:\/\/neonautotransport\.com\/about\/" \/>/;
    if (wrongCanonical.test(content)) {
        content = content.replace(wrongCanonical, `<link rel="canonical" href="${canonicalUrl}" />`);
        fs.writeFileSync(filePath, content);
        console.log(`Fixed canonical in ${filePath}`);
    }
}

// Fix Compare Pages
const compareDir = path.join(__dirname, 'compare');
if (fs.existsSync(compareDir)) {
    const files = fs.readdirSync(compareDir);
    for (const file of files) {
        fixCanonical(path.join(compareDir, file), 'https://neonautotransport.com/compare');
    }
}

// Fix FAQs
const faqsDir = path.join(__dirname, 'faqs');
if (fs.existsSync(faqsDir)) {
    const files = fs.readdirSync(faqsDir);
    for (const file of files) {
        fixCanonical(path.join(faqsDir, file), 'https://neonautotransport.com/faqs');
    }
}

console.log('Canonical fix complete.');
