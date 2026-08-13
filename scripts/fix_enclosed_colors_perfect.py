import os
import re

FILE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the hero section with a perfectly color-matched, high-contrast, beautiful Brand Hero section
old_hero_pattern = r'<!-- Executive Obsidian Hero Header \(Luxury Enclosed Aesthetic\) -->\s*<section.*?</section>'

new_hero_html = """<!-- Brand Aligned Hero Header (Enclosed Auto Transport) -->
    <section class="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-24 border-b border-white/10" style="background: linear-gradient(135deg, #0a2540 0%, #0d3257 50%, #0a2540 100%) !important;">
      <!-- Glowing Background Accents -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute -top-32 -left-32 w-80 h-80 bg-[#00D1FF]/10 rounded-full blur-[100px]"></div>
        <div class="absolute top-1/2 -right-32 w-80 h-80 bg-[#39FF14]/10 rounded-full blur-[100px]"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 z-10 relative max-w-7xl">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          
          <!-- Left Side: Text Content -->
          <div class="lg:w-1/2 text-white">
            
            <!-- Pill Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#39FF14]/40 bg-[#39FF14]/10 text-[#39FF14] text-xs font-bold uppercase tracking-wider mb-6">
              <span class="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></span>
              Premium Enclosed Carrier Service
            </div>
            
            <!-- Breadcrumb Navigation -->
            <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-semibold text-white/80 mb-5 flex-wrap">
              <a href="/" class="hover:text-[#00D1FF] transition-colors">Home</a>
              <span class="text-white/40">/</span>
              <a href="/services/" class="hover:text-[#00D1FF] transition-colors">Services</a>
              <span class="text-white/40">/</span>
              <span class="text-[#00D1FF] font-bold">Enclosed Auto Transport</span>
            </nav>

            <h1 class="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6 tracking-tight">
              Enclosed Auto Transport — <span class="text-[#00D1FF] block mt-1">Premium Car Shipping</span>
            </h1>

            <p class="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-xl font-normal">
              The gold standard for shipping high-value, classic, exotic, and low-clearance vehicles across the United States. Sealed trailers shield your investment from weather, road debris, dust, and salt spray with $500,000 active insurance.
            </p>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-base sm:text-lg hover:bg-[#32e011] transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2 group text-center">
                Calculate Your Rate Instantly 
                <svg aria-hidden="true" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="tel:5715767711" class="bg-[#ffc72c] hover:bg-[#ebd523] text-[#0a2540] px-6 py-4 rounded-full font-black text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                (571) 576-7711
              </a>
            </div>

            <!-- Trust Features Row -->
            <div class="grid grid-cols-3 gap-3 pt-8 mt-8 border-t border-white/15 text-xs text-white/90 font-medium">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>$500K Insurance</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#39FF14] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>$0 Upfront Deposit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#00D1FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>Hydraulic Lift Gates</span>
              </div>
            </div>

          </div>

          <!-- Right Side: Image Card -->
          <div class="lg:w-1/2 relative z-10 w-full">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.01] transition duration-500">
              <img loading="lazy" src="/images/true-cost-car-shipping-2026.webp" alt="Enclosed auto transport service shipping luxury vehicles across the country" class="w-full h-auto object-cover rounded-2xl" width="1200" height="800">
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a2540]/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>"""

content = re.sub(
    old_hero_pattern,
    new_hero_html,
    content,
    flags=re.DOTALL
)

with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Perfected Enclosed Auto Transport hero colors & brand integration!")
