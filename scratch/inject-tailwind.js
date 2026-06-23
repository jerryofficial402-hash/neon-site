const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        if (file === 'node_modules' || file === '.git') continue;
        
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            if (!content.includes('tailwind.css')) {
                // Find </head> and inject tailwind.css before it
                content = content.replace('</head>', '  <link rel="stylesheet" href="/css/tailwind.css">\n</head>');
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Injected tailwind.css into ${fullPath}`);
            }
        }
    }
}

processDirectory(path.join(__dirname, '..'));
console.log('Finished injecting tailwind.css into missing files.');
