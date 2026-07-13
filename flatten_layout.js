const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const filePath = path.join(__dirname, 'new-york-car-shipping', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const $ = cheerio.load(html, { decodeEntities: false });

// 1. Find the Carrier Availability Widget
const rightCol = $('.lg\\:col-span-1').first();
const carrierWidget = rightCol.find('.bg-white.rounded-2xl.shadow-sm.border.border-\\[\\#e6e6e6\\]').first(); // It has these classes

// 2. Remove the right column entirely
rightCol.remove();

// 3. Find the grid container and left column
const grid = $('.grid.lg\\:grid-cols-3.gap-12').first();
const leftCol = $('.lg\\:col-span-2.space-y-12.min-w-0').first();

// 4. Move the left column contents to be direct children of the grid, or just change the classes
grid.removeClass('grid lg:grid-cols-3 gap-12');
leftCol.removeClass('lg:col-span-2 min-w-0').addClass('max-w-4xl mx-auto');

// 5. Insert the Carrier Widget somewhere nice in the left column.
// The left column has multiple div.mb-12 sections. Let's insert it after the "Cost & Transit Time Examples" table
// or before it.
// Let's find the table div
const costSection = leftCol.children('.mb-12').filter((i, el) => $(el).find('h2').text().includes('Cost & Transit Time'));

if (carrierWidget.length > 0) {
    // Let's modify the widget to look good in a wide column. Make it flex-row on desktop.
    carrierWidget.removeClass('mb-8 p-6').addClass('p-8 flex flex-col md:flex-row items-center justify-between gap-6');
    carrierWidget.find('.space-y-3').removeClass('space-y-3').addClass('flex flex-col sm:flex-row gap-6 w-full md:w-auto');
    
    // Insert it after the cost section
    if (costSection.length > 0) {
        costSection.after($('<div class="mb-12"></div>').append(carrierWidget));
    } else {
        leftCol.prepend($('<div class="mb-12"></div>').append(carrierWidget));
    }
}

// Ensure the Why Choose section matches the new max-w-4xl width
const whyChooseWrapper = $('.mb-16.w-full').first();
if (whyChooseWrapper.length > 0) {
    whyChooseWrapper.addClass('max-w-4xl mx-auto');
}

fs.writeFileSync(filePath, $.html(), 'utf8');
console.log('Successfully flattened layout');
