const fs = require('fs');
let content = fs.readFileSync('services/open-auto-transport.html', 'utf8');

// Replace the broken gradient with a solid dark blue color
content = content.replace(/bg-gradient-to-r from-\[#0a2540\] to-\[#1a365d\] text-white font-bold/g, 'bg-[#0a2540] text-white font-bold');

fs.writeFileSync('services/open-auto-transport.html', content);
console.log('Fixed table headers.');
