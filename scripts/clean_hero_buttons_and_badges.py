import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

hero_copy_pattern = re.compile(r'<!-- Hero Copy -->.*?<div class="block lg:col-span-6 xl:col-span-5', re.DOTALL)

clean_hero_copy = """<!-- Hero Copy -->
    <div class="text-white lg:col-span-6 xl:col-span-7 pointer-events-auto relative z-30" style="opacity:1;transform:none;">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-xs font-bold mb-6">
       <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
       FMCSA Registered • USDOT #4355879 • MC #1703787
      </div>
      <h1 id="hero-heading" class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-white tracking-tighter">
       Nationwide Car Shipping With Fast, Transparent Quotes
      </h1>
      <p id="hero-description" class="text-lg text-[rgba(255,255,255,0.9)] mb-4 max-w-lg leading-relaxed font-medium">
       Arrange door-to-door auto transport for your car, SUV, truck, motorcycle, or specialty vehicle anywhere in the United States. Compare open and enclosed shipping options, use our cost calculator for an estimated rate, or request a free car shipping quote.
      </p>
      <p class="text-xs text-slate-300 max-w-lg leading-relaxed mb-6 font-normal">
       Licensed auto transport broker: MC #1703787 • USDOT #4355879
      </p>

      <div class="flex flex-wrap items-center gap-4 mb-8 font-semibold pointer-events-auto relative z-30">
       <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] py-3.5 px-6 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)] pointer-events-auto relative z-30" style="text-decoration: none;">Get a Free Car Shipping Quote →</a>
       <a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition pointer-events-auto relative z-30" style="text-decoration: none;">Calculate Car Shipping Cost →</a>
      </div>

      <div class="flex flex-wrap items-center gap-4 mb-8 pointer-events-auto relative z-30">
       <a href="https://maps.app.goo.gl/8sytHbRV3BsnPBUD6" target="_blank" rel="noopener noreferrer" aria-label="View Neon Auto Transport Google reviews" class="flex items-center gap-2 text-white text-sm font-bold hover:underline pointer-events-auto relative z-30" style="text-decoration: none;">
        <div class="flex text-yellow-400 text-sm tracking-wider">★★★★★</div>
        <span>5.0 / 5 on Google</span>
       </a>
       <div class="hidden sm:block w-px h-6 bg-white/20 mx-2"></div>
       <div class="hidden sm:flex items-center gap-2 text-white text-sm font-bold">
        <svg class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        Nationwide Service • Open &amp; Enclosed Options • Door-to-Door Coordination
       </div>
      </div>
     </div>

     <!-- Calculator in Hero Section -->
     <div class="block lg:col-span-6 xl:col-span-5"""

if hero_copy_pattern.search(content):
    content = hero_copy_pattern.sub(clean_hero_copy, content)
    print("SUCCESS: Cleaned hero copy, buttons, and rating badge")
else:
    print("ERROR: Hero copy pattern not matched")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Hero buttons and clickability cleaned up in index.html!")
