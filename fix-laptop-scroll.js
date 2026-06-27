const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The broken global CSS block
const oldCss = '<style>\n  html, body { overflow-x: hidden !important; max-width: 100% !important; position: relative !important; margin: 0 !important; padding: 0 !important; }\n</style>';

// The fixed CSS block (only for mobile)
const newCss = '<style>\n  @media (max-width: 1024px) {\n    html, body { overflow-x: hidden !important; max-width: 100% !important; position: relative !important; margin: 0 !important; padding: 0 !important; }\n  }\n</style>';

content = content.replace(oldCss, newCss);
fs.writeFileSync('index.html', content);
console.log('Fixed laptop overflow bug.');
