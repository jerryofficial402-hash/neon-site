import os
import re

CALCULATOR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(CALCULATOR_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the broken hero section markup with perfectly structured grid layout
broken_hero_pattern = r'<!-- HERO SECTION WITH CALCULATOR -->.*?<!-- Right Column: Interactive Calculator Form Card -->'

perfect_hero_markup = """<!-- HERO SECTION WITH CALCULATOR -->
    <section class="bg-[#f6f9fc] border-b border-[#e6e6e6] pt-24 pb-12 lg:pt-28 lg:pb-16" id="quote-form">
      <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          <!-- Left Column Content -->
          <div class="lg:w-1/2 flex flex-col justify-center pt-2">
            <!-- Breadcrumbs -->
            <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-semibold mb-6 flex-wrap">
              <a href="/" class="text-[#468de6] hover:underline font-semibold">Home</a>
              <span class="text-[#8ba3ba]">/</span>
              <span class="text-[#0a2540] font-bold">Cost Calculator</span>
            </nav>

            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e6e6e6] bg-white shadow-sm text-[#0a2540] text-xs font-bold mb-6 self-start">
              <span class="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse"></span>
              2026 Live Market Analytics Pricing
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight leading-[1.1]">
              Instant Auto Shipping Quote Calculator
            </h1>

            <p class="text-lg text-[#425466] mb-8 leading-relaxed">
              Get a guaranteed, real-time vehicle shipping quote in seconds. Enter your pickup and delivery cities to calculate door-to-door open or enclosed auto transport rates across all 50 states — zero hidden fees, zero deposit required.
            </p>

            <!-- Feature Bullet List & Trust Rating -->
            <div class="space-y-3 mb-8 text-sm font-bold text-[#0a2540]">
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black text-sm">✓</span>
                Zero upfront deposit required to book
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black text-sm">✓</span>
                Up to $500,000 cargo insurance included at no extra cost
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black text-sm">✓</span>
                FMCSA &amp; USDOT licensed nationwide broker network
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <span class="w-7 h-7 rounded-full bg-amber-400/20 text-amber-600 flex items-center justify-center font-black text-sm">★</span>
                <span>★★★★★ 5.0 / 5 Rating</span>
              </div>
            </div>

            <!-- Value Badges -->
            <div class="grid grid-cols-3 gap-4 pt-6 border-t border-[#e6e6e6] text-center text-xs font-bold text-[#0a2540]">
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <div class="text-[#468de6] text-base font-black mb-1">4.9 / 5★</div>
                1,240+ Verified Reviews
              </div>
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <div class="text-[#468de6] text-base font-black mb-1">Door-to-Door</div>
                Direct Carrier Pickup
              </div>
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <div class="text-[#468de6] text-base font-black mb-1">Price Lock</div>
                100% Rate Guarantee
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Calculator Form Card -->"""

content = re.sub(broken_hero_pattern, perfect_hero_markup, content, flags=re.DOTALL)

with open(CALCULATOR_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed Cost Calculator hero layout structure and div nesting!")
