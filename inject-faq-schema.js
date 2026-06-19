const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    if (!filePath.endsWith('.html')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has <details> blocks
    const detailsRegex = /<details[\s\S]*?<\/details>/g;
    const detailsBlocks = content.match(detailsRegex);
    
    if (!detailsBlocks || detailsBlocks.length === 0) return;

    // Check if FAQPage already exists
    if (content.includes('"@type": "FAQPage"')) return;

    const faqEntities = [];

    detailsBlocks.forEach(block => {
        // Extract Question
        const summaryMatch = block.match(/<summary[^>]*>([\s\S]*?)<span/);
        // Extract Answer
        const divMatch = block.match(/<div[^>]*>([\s\S]*?)<\/div>/);
        
        if (summaryMatch && divMatch) {
            const question = summaryMatch[1].replace(/<\/?[^>]+(>|$)/g, "").trim().replace(/\s+/g, ' ');
            const answer = divMatch[1].replace(/<\/?[^>]+(>|$)/g, "").trim().replace(/\s+/g, ' ');
            
            if (question && answer) {
                faqEntities.push({
                    "@type": "Question",
                    "name": question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answer
                    }
                });
            }
        }
    });

    if (faqEntities.length > 0) {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqEntities
        };
        
        const scriptTag = `\n    <script type="application/ld+json">\n    ${JSON.stringify(faqSchema, null, 4)}\n    </script>\n</head>`;
        content = content.replace('</head>', scriptTag);
        
        fs.writeFileSync(filePath, content);
        console.log(`Injected FAQPage schema into ${filePath}`);
    }
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'css' && file !== 'images') {
                processDirectory(fullPath);
            }
        } else {
            processFile(fullPath);
        }
    }
}

processDirectory(__dirname);
console.log('FAQ Schema injection completed.');
