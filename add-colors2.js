const fs = require('fs');

let content = fs.readFileSync('services/open-auto-transport.html', 'utf8');

const colors = ['#39FF14', '#468de6', '#635bff', '#0a2540'];
let colorIndex = 0;

// The exact string to replace
const searchString = 'class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12"';

let parts = content.split(searchString);
let newContent = parts[0];

for (let i = 1; i < parts.length; i++) {
    let color = colors[colorIndex % colors.length];
    colorIndex++;
    newContent += `class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 border-t-4 border-t-[${color}]"` + parts[i];
}

content = newContent;

// Fix tables
content = content.replace(/<tr class="bg-\[#f6f9fc\] text-\[#0a2540\] font-bold">/g, '<tr class="bg-gradient-to-r from-[#0a2540] to-[#1a365d] text-white font-bold">');
content = content.replace(/<th class="py-4 px-6 border-b border-\[#e6e6e6\]">/g, '<th class="py-4 px-6 border-b border-transparent">');

fs.writeFileSync('services/open-auto-transport.html', content);
console.log('Fixed colors again!');
