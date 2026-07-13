const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const filePath = path.join(__dirname, 'new-york-car-shipping', 'index.html');
let html = fs.readFileSync(filePath, 'utf8');

const $ = cheerio.load(html, { decodeEntities: false });

// Find the left column
const leftCol = $('.lg\\:col-span-2.space-y-12').first();

// The "Why Choose..." section is the first div.mb-12 in leftCol
const whyChooseDiv = leftCol.children('.mb-12').first();

if (whyChooseDiv.text().includes('Why Choose Neon Auto Transport')) {
  // We want to insert this above the <div class="grid lg:grid-cols-3 gap-12">
  const grid = $('.grid.lg\\:grid-cols-3.gap-12').first();
  
  // Create a wrapper for full width
  const wrapper = $('<div class="mb-16 w-full"></div>');
  
  // We can make it look like a nice wide section if we want, or just keep its content
  // Currently it's a div.mb-12. Let's change its class to mb-0 since the wrapper has mb-16.
  whyChooseDiv.removeClass('mb-12');
  
  // In a full width container, the ul list might look better in a grid or flex. Let's make the list a 2-col or 3-col grid.
  const ul = whyChooseDiv.find('ul');
  ul.addClass('grid md:grid-cols-2 lg:grid-cols-3 gap-6').removeClass('space-y-2');
  ul.find('li').addClass('bg-white p-6 rounded-2xl shadow-sm border border-[#e6e6e6]');
  ul.removeClass('list-disc pl-5'); // remove bullet points since it's a grid now
  
  // Add a checkmark icon to the lis
  ul.find('li').each((i, el) => {
    const textHtml = $(el).html();
    $(el).html(`
      <div class="flex items-start gap-4">
        <div class="mt-1 flex-shrink-0 text-[#39FF14]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <div>
          ${textHtml}
        </div>
      </div>
    `);
  });

  wrapper.append(whyChooseDiv);
  
  grid.before(wrapper);
  
  fs.writeFileSync(filePath, $.html(), 'utf8');
  console.log('Successfully moved Why Choose section');
} else {
  console.log('Could not find Why Choose section');
}
