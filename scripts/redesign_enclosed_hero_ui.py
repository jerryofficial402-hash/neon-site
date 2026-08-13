import os
import re

FILE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the slanted-hero-eat CSS and section with a high-end Luxury Midnight Obsidian Hero Section
old_hero_css_pattern = r'<style>\s*\.slanted-hero-eat.*?</style>\s*<!-- Slanted Hero Header \(Why Neon Style\) -->\s*<section class="relative stripe-gradient-bg overflow-hidden slanted-hero-eat">.*?</section>'

new_hero_html = """<!-- Executive Obsidian Hero Header (Luxury Enclosed Aesthetic) -->
    <section class="relative bg-[#080d1a] overflow-hidden pt-32 pb-24 lg:pt-36 lg:pb-28 border-b border-slate-800">
      <!-- Glow Gradients & Ambient Mesh -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div class="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-40 bg-gradient-to-t from-[#0a2540] to-transparent opacity-60"></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 z-10 relative max-w-7xl">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <!-- Left Side: Text Content -->
          <div class="lg:w-1/2 text-white">
            
            <!-- Luxury Gold Pill Badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Premium Enclosed Carrier Service
            </div>
            
            <!-- Breadcrumb Navigation -->
            <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 flex-wrap">
              <a href="/" class="hover:text-[#00D1FF] transition-colors">Home</a>
              <span class="text-slate-600">/</span>
              <a href="/services/" class="hover:text-[#00D1FF] transition-colors">Services</a>
              <span class="text-slate-600">/</span>
              <span class="text-amber-300 font-semibold">Enclosed Auto Transport</span>
            </nav>

            <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Enclosed Auto Transport <span class="bg-gradient-to-r from-amber-300 via-yellow-200 to-cyan-300 bg-clip-text text-transparent block mt-1">Premium Car Shipping</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              The gold standard for shipping high-value, classic, exotic, and low-clearance vehicles across the United States. Sealed trailers shield your investment from weather, road debris, dust, and salt spray with $500,000 active insurance.
            </p>

            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-base sm:text-lg hover:bg-[#32e011] transition-all duration-300 shadow-[0_0_25px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2 group">
                Calculate Your Rate Instantly 
                <svg aria-hidden="true" class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="tel:5715767711" class="border border-white/20 hover:border-amber-300/60 bg-white/5 hover:bg-white/10 text-white px-6 py-4 rounded-full font-bold text-base transition-all duration-300 flex items-center justify-center gap-2">
                <svg class="w-4 h-4 text-amber-300" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                (571) 576-7711
              </a>
            </div>

            <!-- Trust Features Row -->
            <div class="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-800 text-xs text-slate-300">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>$500K Insurance</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>$0 Upfront Deposit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                <span>Hydraulic Lift Gates</span>
              </div>
            </div>

          </div>

          <!-- Right Side: Luxury Glass Showcase Card -->
          <div class="lg:w-1/2 relative z-10 w-full">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900/60 backdrop-blur-md transform hover:scale-[1.01] transition-all duration-500 p-2">
              <img loading="lazy" src="/images/true-cost-car-shipping-2026.webp" alt="Enclosed auto transport service shipping luxury vehicles across the country" class="w-full h-auto object-cover rounded-xl" width="1200" height="800">
              <div class="absolute inset-0 bg-gradient-to-t from-[#080d1a]/80 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Floating Glass Tag -->
              <div class="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-xs text-slate-200 flex items-center justify-between">
                <div>
                  <div class="font-bold text-white text-sm">Hydraulic Lift Gate & Air-Ride Trailers</div>
                  <div class="text-slate-400">Dedicated protection for Ferrari, Porsche, McLaren & Classics</div>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 font-extrabold text-[10px] uppercase">100% Sealed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>"""

content = re.sub(
    old_hero_css_pattern,
    new_hero_html,
    content,
    flags=re.DOTALL
)

with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Updated Hero Section to Executive Midnight Obsidian Luxury Design!")
