const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (f !== 'node_modules' && f !== '.git' && f !== '.vercel' && f !== '.gemini' && f !== 'brain') {
        walkDir(dirPath, callback);
      }
    } else {
      if (f.endsWith('.html')) {
        callback(dirPath);
      }
    }
  });
}

const rootDir = path.join(__dirname, '..');

walkDir(rootDir, filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if we already injected the style block
  if (content.includes('/* Hide sticky widget globally */')) {
    console.log(`Already hidden in: ${filePath}`);
    return;
  }
  
  // Rule to inject
  const styleBlock = `
<style>
  /* Hide sticky widget globally */
  #sticky-widget {
    display: none !important;
  }
</style>
</head>`;

  if (content.includes('</head>')) {
    content = content.replace('</head>', styleBlock);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Injected global hide rule for sticky widget in: ${filePath}`);
  }
});
