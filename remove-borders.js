const fs = require('fs');
let content = fs.readFileSync('services/open-auto-transport.html', 'utf8');

// Remove the injected border classes
content = content.replace(/ border-t-4 border-t-\[#[0-9a-fA-F]+\]/g, '');

fs.writeFileSync('services/open-auto-transport.html', content);
console.log('Removed colorful top borders.');
