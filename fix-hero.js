const fs = require('fs');

let html = fs.readFileSync('services/enclosed-auto-transport.html', 'utf8');

// Update Title Tag
html = html.replace(/<title>.*?<\/title>/, '<title>Enclosed Auto Transport | Enclosed Car Shipping for Luxury & Classic Vehicles</title>');

// The new hero section based on open-auto-transport
const newHero = `    <style>
      .slanted-hero-eat {
        padding-top: 120px;
        padding-bottom: 160px;
        clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
      }
      @media (min-width: 1024px) {
        .slanted-hero-eat {
          padding-top: 140px;
          padding-bottom: 120px;
          clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        }
      }
      .hero-img-eat {
        max-height: 250px;
      }
      @media (min-width: 640px) {
        .hero-img-eat {
          max-height: 300px;
        }
      }
      @media (min-width: 1024px) {
        .hero-img-eat {
          max-height: 400px;
        }
      }
    </style>
    <!-- Slanted Hero Header (Why Neon Style) -->
    <section class="relative stripe-gradient-bg overflow-hidden slanted-hero-eat">
      <div class="container mx-auto px-4 lg:px-8 z-10 relative max-w-7xl">
        <div class="flex flex-col lg:flex-row items-center gap-12">
          
          <!-- Left Side: Text -->
          <div class="lg:w-1/2 text-white">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-xs font-bold mb-6">
              <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
              Premium Enclosed Carrier Service
            </div>
            <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mb-6 tracking-tighter">
              Enclosed Auto Transport — Premium Enclosed Car Shipping for Luxury, Classic & Exotic Vehicles
            </h1>
            <p class="text-lg text-[rgba(255,255,255,0.9)] leading-relaxed mb-10 max-w-xl">
              Enclosed auto transport is the gold standard for shipping high-value, irreplaceable, and low-clearance vehicles across the United States. Unlike open carriers, enclosed trailers fully protect your vehicle from weather, road debris, salt spray, dust, and UV exposure during the entire journey.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center gap-2">
                Calculate Your Rate Instantly 
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
  
          <!-- Right Side: Image -->
          <div class="lg:w-1/2 relative z-10 mt-12 lg:mt-0 w-full">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform hover:scale-[1.02] transition duration-500">
              <img loading="lazy" src="/images/true-cost-car-shipping-2026.webp" alt="Enclosed auto transport service shipping luxury vehicles across the country" class="w-full h-auto object-cover hero-img-eat" width="1200" height="800">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a2540]/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
  
        </div>
      </div>
    </section>`;

// Target the existing hero section in enclosed-auto-transport.html and replace it
// We know it starts right after <main> and ends before <!-- Main Article Content -->
html = html.replace(/<main>[\s\S]*?<!-- Main Article Content -->/, '<main>\n' + newHero + '\n\n    <!-- Main Article Content -->');

fs.writeFileSync('services/enclosed-auto-transport.html', html);
console.log('Successfully updated the enclosed-auto-transport hero section');
