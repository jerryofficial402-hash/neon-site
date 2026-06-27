const fs = require('fs');

let html = fs.readFileSync('blog/index.html', 'utf8');

const newCard = `
          <!-- Article: Who Ships Cars From Woodbridge, Virginia -->
          <a href="/blog/who-ships-cars-from-woodbridge-virginia/" class="stripe-card overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#635bff]">
            <div class="h-48 overflow-hidden">
              <img src="/images/woodbridge-va-car-shipping.webp" alt="Car shipping truck driving through Woodbridge, Virginia" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" width="600" height="315" loading="lazy" decoding="async">
            </div>
            <div class="p-6">
              <div class="text-xs text-[#635bff] font-bold uppercase tracking-wider mb-2">Local Guide</div>
              <h2 class="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-[#635bff] transition">Who Ships Cars From Woodbridge, Virginia?</h2>
              <p class="text-[#425466] text-sm leading-relaxed mb-4">Looking for local auto transport experts in Woodbridge? Neon Auto Transport provides reliable nationwide door-to-door car shipping right from your hometown.</p>
              <div class="text-xs text-[#425466]">By Neon Auto Transport · June 27, 2026</div>
            </div>
          </a>
`;

html = html.replace(
  '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">',
  '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">\n' + newCard
);

fs.writeFileSync('blog/index.html', html);
console.log('Successfully injected the Woodbridge blog post into blog/index.html');
