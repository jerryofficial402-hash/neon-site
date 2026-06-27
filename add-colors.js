const fs = require('fs');

let content = fs.readFileSync('services/open-auto-transport.html', 'utf8');

// The colors we want to cycle through for the top border of the cards
const colors = ['#39FF14', '#468de6', '#635bff', '#0a2540'];
let colorIndex = 0;

// Regex to find all white stripe-cards and inject a colorful top border
// We look for: class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12"
// Some might already have border-t-4, so we need to be careful.

const searchString = 'class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12';

let parts = content.split(searchString);
let newContent = parts[0];

for (let i = 1; i < parts.length; i++) {
    // Check if the next part starts with ' border-t-4'
    if (!parts[i].startsWith('"') && !parts[i].startsWith(' border-t-4')) {
        let color = colors[colorIndex % colors.length];
        colorIndex++;
        newContent += `class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 border-t-4 border-[${color}]` + parts[i];
    } else {
        newContent += searchString + parts[i];
    }
}

content = newContent;

// Also, let's make the tables more colorful.
// Find: <tr class="bg-[#f6f9fc] text-[#0a2540] font-bold">
content = content.replace(/<tr class="bg-\[#f6f9fc\] text-\[#0a2540\] font-bold">/g, '<tr class="bg-gradient-to-r from-[#0a2540] to-[#1a365d] text-white font-bold">');

// Find: <th class="py-4 px-6 border-b border-[#e6e6e6]">
content = content.replace(/<th class="py-4 px-6 border-b border-\[#e6e6e6\]">/g, '<th class="py-4 px-6 border-b border-transparent">');

fs.writeFileSync('services/open-auto-transport.html', content);
console.log('Done adding colors!');
