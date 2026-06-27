const fs = require('fs');

let content = fs.readFileSync('services/open-auto-transport.html', 'utf8');

// 1. Remove the Right Sidebar completely.
const sidebarStart = '        <!-- Right Sidebar Sticky -->';
const sidebarEndStr = `          </div>\n        </div>\n      </div>\n\n      <div class="mt-16 text-center pb-12">`;
const sidebarStartIndex = content.indexOf(sidebarStart);
const sidebarEndIndex = content.indexOf(sidebarEndStr);

if (sidebarStartIndex !== -1 && sidebarEndIndex !== -1) {
    const beforeSidebar = content.substring(0, sidebarStartIndex);
    const afterSidebar = content.substring(sidebarEndIndex + `          </div>\n        </div>\n      </div>`.length);
    content = beforeSidebar + '      </div>\n' + afterSidebar; // Keep the closing div for the new max-w-4xl container
} else {
    console.log("Could not find sidebar boundaries.");
}

// 2. Change the layout grid to a centered max-w-4xl column
content = content.replace('<div class="grid lg:grid-cols-3 gap-12">', '<div class="max-w-4xl mx-auto">');
content = content.replace('<div class="lg:col-span-2 space-y-12 min-w-0">', '<div class="space-y-12 min-w-0">');

// 3. Inject the beautiful horizontal "How Open Transport Works" before "Related Services"
const relatedServicesStart = '<!-- Internal Links to Add (Related Services) -->';

const howItWorksHtml = `
<!-- Beautiful Horizontal How It Works -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 border-t-4 border-t-[#635bff]">
  <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight text-center">How Open Transport Works</h2>
  
  <div class="grid md:grid-cols-3 gap-8">
    <div class="relative bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6] hover:shadow-md transition text-center">
      <div class="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#635bff] mx-auto flex items-center justify-center text-xl font-bold shadow-sm mb-4">1</div>
      <h4 class="font-bold text-[#0a2540] text-lg mb-2">Get an Instant Quote</h4>
      <p class="text-sm text-[#425466] leading-relaxed">Use our calculator to get a transparent rate with zero hidden fees.</p>
    </div>
    
    <div class="relative bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6] hover:shadow-md transition text-center">
      <div class="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#635bff] mx-auto flex items-center justify-center text-xl font-bold shadow-sm mb-4">2</div>
      <h4 class="font-bold text-[#0a2540] text-lg mb-2">Carrier Assignment</h4>
      <p class="text-sm text-[#425466] leading-relaxed">A fully vetted, licensed carrier is assigned and will pick up your vehicle typically within 1-5 business days.</p>
    </div>
    
    <div class="relative bg-[#f8fafc] p-6 rounded-xl border border-[#e6e6e6] hover:shadow-md transition text-center">
      <div class="w-12 h-12 rounded-full bg-[#e0e7ff] text-[#635bff] mx-auto flex items-center justify-center text-xl font-bold shadow-sm mb-4">3</div>
      <h4 class="font-bold text-[#0a2540] text-lg mb-2">Safe Delivery</h4>
      <p class="text-sm text-[#425466] leading-relaxed">Your car arrives at its destination safely. Inspect the vehicle, sign the Bill of Lading, and you're good to go.</p>
    </div>
  </div>
  <div class="mt-8 text-center">
    <a href="/cost-calculator/" class="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg">Start your quote <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
  </div>
</div>

`;

content = content.replace(relatedServicesStart, howItWorksHtml + relatedServicesStart);

fs.writeFileSync('services/open-auto-transport.html', content);
console.log('Done refactoring!');
