const fs = require('fs');
const path = require('path');

function fixSchemaInDir(dir) {
    const files = fs.readdirSync(dir);
    let count = 0;

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            count += fixSchemaInDir(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Find if it has a Service schema with an aggregateRating at the root
            if (content.includes('"@type": "Service"')) {
                const ratingRegex = /,\s*"aggregateRating":\s*\{\s*"@type":\s*"AggregateRating",\s*"ratingValue":\s*"4\.9",\s*"reviewCount":\s*"1247",\s*"bestRating":\s*"5",\s*"worstRating":\s*"1"\s*\}/;
                
                if (ratingRegex.test(content)) {
                    // Remove it from the root
                    content = content.replace(ratingRegex, '');
                    
                    // Insert it into provider
                    // "addressCountry": "US" \n } \n },
                    const providerRegex = /("addressCountry":\s*"US"\s*\n\s*\})/;
                    
                    if (providerRegex.test(content)) {
                        content = content.replace(providerRegex, '$1,\n        "aggregateRating": {\n          "@type": "AggregateRating",\n          "ratingValue": "4.9",\n          "reviewCount": "1247",\n          "bestRating": "5",\n          "worstRating": "1"\n        }');
                        fs.writeFileSync(fullPath, content, 'utf8');
                        count++;
                    }
                }
            }
        }
    });
    return count;
}

const routesDir = path.join(__dirname, '../routes');
const fixedCount = fixSchemaInDir(routesDir);
console.log(`Fixed aggregateRating schema in ${fixedCount} files in /routes`);
