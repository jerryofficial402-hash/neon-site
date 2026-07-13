const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'services/car-shipping-to-another-state.html');
let content = fs.readFileSync(targetFile, 'utf8');

const fixes = [
    '/california-to-texas/',
    '/texas-to-florida/',
    '/florida-to-new-york/',
    '/california-to-florida/',
    '/new-york-to-california/',
    '/texas-to-california/',
    '/illinois-to-texas/',
    '/florida-to-california/',
    '/new-york-to-florida/',
    '/washington-to-california/'
];

fixes.forEach(brokenLink => {
    let newLink = brokenLink.slice(0, -1) + '-car-shipping/';
    content = content.replace(new RegExp(`href=["']${brokenLink}["']`, 'g'), `href="${newLink}"`);
});

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Fixed remaining broken links in car-shipping-to-another-state.html');
