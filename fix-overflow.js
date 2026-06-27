const fs = require('fs');

function fixOverflow(file) {
  let content = fs.readFileSync(file, 'utf8');
  const styleBlock = '<style>\n  html, body { overflow-x: hidden !important; width: 100vw !important; position: relative !important; margin: 0 !important; padding: 0 !important; }\n</style>\n</head>';
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', styleBlock);
    fs.writeFileSync(file, content);
    console.log('Fixed overflow in ' + file);
  }
}

fixOverflow('index.html');
fixOverflow('services/open-auto-transport.html');
