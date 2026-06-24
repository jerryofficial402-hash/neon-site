const fs = require('fs');
const path = require('path');

function processDir(dirPath) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('scratch')) {
            processDir(fullPath);
        } else if (file.endsWith('.html') && !fullPath.includes('scratch')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (!content.includes('font-size: 110%;')) {
                // Insert the style block right before </head>
                content = content.replace('</head>', `    <style>\n      @media (min-width: 1024px) {\n        html { font-size: 110%; }\n      }\n    </style>\n  </head>`);
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

// Pass process.cwd() to target the root directory instead of __dirname
processDir(process.cwd());
console.log('Successfully injected 110% zoom scale on desktop for all HTML files!');
