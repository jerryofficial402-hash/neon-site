import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
blog_file = os.path.join(SITE_DIR, "blog", "index.html")

with open(blog_file, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Cards HTML to insert at top of grid
new_cards = """
          <!-- Pillar Guide 1: Car Transport Cost Guide -->
          <a href="/car-transport-cost-guide/" class="stripe-card overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#635bff]">
            <div class="h-48 overflow-hidden bg-[#0a2540] relative">
              <img src="/images/true-cost-car-shipping-2026.webp" alt="Car transport cost guide background" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90" width="600" height="315" loading="eager" decoding="async">
              <span class="absolute top-3 left-3 bg-[#39FF14] text-[#0a2540] font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">Pillar Guide</span>
            </div>
            <div class="p-6">
              <div class="text-xs text-[#635bff] font-bold uppercase tracking-wider mb-2">Cost &amp; Pricing Master Guide</div>
              <h2 class="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-[#635bff] transition">Car Transport Cost Guide (2026 Edition)</h2>
              <p class="text-[#425466] text-sm leading-relaxed mb-4">Complete breakdown of auto transport costs, route averages, train vs. truck comparisons, and open vs. enclosed rates.</p>
              <div class="text-xs text-[#425466]">By Neon Logistics Desk · August 2026</div>
            </div>
          </a>

          <!-- Pillar Guide 2: Cheapest Way to Ship a Car -->
          <a href="/cheapest-way-to-ship-a-car/" class="stripe-card overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#635bff]">
            <div class="h-48 overflow-hidden bg-[#0a2540] relative">
              <img src="/images/best-auto-transport-company.jpg" alt="Cheapest way to ship a car background" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90" width="600" height="315" loading="eager" decoding="async">
              <span class="absolute top-3 left-3 bg-[#39FF14] text-[#0a2540] font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">Pillar Guide</span>
            </div>
            <div class="p-6">
              <div class="text-xs text-[#635bff] font-bold uppercase tracking-wider mb-2">Savings &amp; Strategy</div>
              <h2 class="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-[#635bff] transition">Cheapest Way to Ship a Car: Costs &amp; Savings</h2>
              <p class="text-[#425466] text-sm leading-relaxed mb-4">Exposes why no single "cheapest company" exists, how carrier bidding works, dealership fee vs shipping cost, and 5 ways to save.</p>
              <div class="text-xs text-[#425466]">By Neon Logistics Desk · August 2026</div>
            </div>
          </a>

          <!-- Pillar Guide 3: Should You Ship or Drive Your Car? -->
          <a href="/should-i-ship-or-drive-my-car/" class="stripe-card overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#635bff]">
            <div class="h-48 overflow-hidden bg-[#0a2540] relative">
              <img src="/images/open-auto-transport-hero.png" alt="Should you ship or drive your car background" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90" width="600" height="315" loading="eager" decoding="async">
              <span class="absolute top-3 left-3 bg-[#39FF14] text-[#0a2540] font-black text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">Pillar Guide</span>
            </div>
            <div class="p-6">
              <div class="text-xs text-[#635bff] font-bold uppercase tracking-wider mb-2">Decision &amp; Breakeven</div>
              <h2 class="font-bold text-[#0a2540] text-lg mb-2 group-hover:text-[#635bff] transition">Should You Ship or Drive Your Car? Real Breakeven</h2>
              <p class="text-[#425466] text-sm leading-relaxed mb-4">Discover the exact mileage breakeven for driving vs shipping, 1-minute DIY formula, per-mile price rules, and fleet discounts.</p>
              <div class="text-xs text-[#425466]">By Neon Logistics Desk · August 2026</div>
            </div>
          </a>
"""

grid_anchor = '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">'
if grid_anchor in content and "/car-transport-cost-guide/" not in content:
    content = content.replace(grid_anchor, grid_anchor + "\n" + new_cards)
    print("Added 3 pillar cards to blog grid HTML!")

with open(blog_file, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Updated {blog_file}")
