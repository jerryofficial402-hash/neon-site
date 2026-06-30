const fs = require('fs');

let html = fs.readFileSync('blog/who-ships-cars-from-woodbridge-virginia.html', 'utf8');

const oldTopBio = `<div class="flex items-center gap-4 pb-8 mb-8 border-b border-[#e6e6e6]">
          <div class="w-12 h-12 rounded-full bg-[#0a2540] text-white flex items-center justify-center font-bold text-xl">
            N
          </div>
          <div>
            <div class="font-bold text-[#0a2540]">Neon Auto Transport</div>
            <div class="text-sm text-[#425466]">June 27, 2026 - 4 min read</div>
          </div>
        </div>`;

const newTopBio = `<div class="flex items-center gap-4 pb-8 mb-8 border-b border-[#e6e6e6]">
          <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-12 h-12 rounded-full object-cover">
          <div>
            <div class="font-bold text-[#0a2540]">Shazil Ali</div>
            <div class="text-sm text-[#425466]">Director of Operations &middot; Neon Auto Transport &middot; June 2026</div>
          </div>
        </div>`;

html = html.replace(oldTopBio, newTopBio);

const authorBioBlock = `

        <section class="mt-16 pt-12 border-t border-[#e6e6e6]">
          <h3 class="text-xl font-bold text-[#0a2540] mb-6">About the Author</h3>
          <div class="stripe-card p-8 flex flex-col md:flex-row items-start gap-6 border-l-4 border-l-[#39FF14]">
            <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover shadow-inner flex-shrink-0 border-2 border-[#e0f2fe]">
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <div class="font-bold text-[#0a2540] text-lg"><a href="/author/shazil-ali/" class="hover:text-[#635bff] transition hover:underline">Shazil Ali</a></div>
                <span class="px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1] text-xs font-bold uppercase tracking-wider">Fact Checked &amp; Reviewed</span>
              </div>
              <div class="text-[#0a2540] text-sm font-bold mb-3">Director of Operations <span class="text-[#8ba3ba] mx-1">|</span> Neon Auto Transport</div>
              <p class="text-[#425466] text-sm leading-relaxed mb-3">Shazil Ali serves as Director of Operations at Neon Auto Transport, overseeing vehicle shipping operations, carrier coordination, dispatch management, logistics workflows, and customer transportation solutions nationwide. He reviews transportation guides, route pages, service content, and educational resources to ensure accuracy, transparency, and alignment with current auto transport industry standards.</p>
              <div class="flex items-center gap-4">
                <div class="text-xs text-[#8ba3ba] font-medium">Last Updated: <span class="text-[#0a2540] font-semibold">June 2026</span></div>
                <a href="https://www.linkedin.com/in/shazil-ali/" target="_blank" rel="noopener noreferrer" class="text-[#0a66c2] hover:text-[#004182] transition inline-flex items-center gap-1 text-xs font-bold">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>
        
      </div>

      <!-- Call to action -->`;

html = html.replace('      </div>\n\n      <!-- Call to action -->', authorBioBlock);

// Also need to update the blog index so the card says "Shazil Ali" instead of "Neon Auto Transport"
let indexHtml = fs.readFileSync('blog/index.html', 'utf8');
indexHtml = indexHtml.replace(
  '<div class="text-xs text-[#425466]">By Neon Auto Transport · June 27, 2026</div>',
  '<div class="text-xs text-[#425466]">By Shazil Ali · June 2026</div>'
);
fs.writeFileSync('blog/index.html', indexHtml);

fs.writeFileSync('blog/who-ships-cars-from-woodbridge-virginia.html', html);
console.log('Successfully added Shazil Ali and Fact Checked blocks.');
