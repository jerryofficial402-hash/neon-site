const fs = require('fs');

function fixVW(file) {
  let content = fs.readFileSync(file, 'utf8');
  const oldCSS = 'html, body { overflow-x: hidden !important; width: 100vw !important; position: relative !important; margin: 0 !important; padding: 0 !important; }';
  const newCSS = 'html, body { overflow-x: hidden !important; max-width: 100% !important; position: relative !important; margin: 0 !important; padding: 0 !important; }';
  
  if (content.includes(oldCSS)) {
    content = content.replace(oldCSS, newCSS);
    fs.writeFileSync(file, content);
    console.log('Fixed VW bug in ' + file);
  }
}

fixVW('index.html');
fixVW('services/open-auto-transport.html');
