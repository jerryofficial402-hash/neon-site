import os
import re

CALCULATOR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(CALCULATOR_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace header section with clean, non-overflowing max-w-7xl header
old_header = r'<!-- Global Header -->\s*<header.*?</header>'

new_header = """<!-- Global Header -->
  <header class="fixed top-0 w-full z-50 transition-all duration-300 shadow-md" id="global-header" style="background-color:#0a2540">
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl flex items-center justify-between h-20">
      
      <!-- Left: Logo -->
      <a href="/" class="text-xl lg:text-2xl font-black tracking-tight uppercase text-white hover:opacity-90 transition flex items-center gap-1 shrink-0" style="text-decoration: none;">
        <span>NEON</span> <span class="text-[#00D1FF]">AUTO TRANSPORT</span>
      </a>

      <!-- Center: Desktop Nav -->
      <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold text-white">
        <a href="/#how-it-works" class="hover:text-[#00D1FF] transition">How it works</a>
        <a href="/services/" class="hover:text-[#00D1FF] transition">Transport Services</a>
        <a href="/why-neon/" class="hover:text-[#00D1FF] transition">Why Neon</a>
        <a href="/contact/" class="hover:text-[#00D1FF] transition">Contact Us</a>
      </nav>

      <!-- Right: CTA Actions -->
      <div class="hidden lg:flex items-center gap-3.5 shrink-0">
        <!-- Language Switcher -->
        <a href="/es/cotizador-envio-de-autos/" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition" style="text-decoration: none;">
          <span>🇪🇸</span> Español
        </a>
        <a href="tel:5715767711" class="flex items-center gap-2 bg-[#39FF14] text-[#0a2540] py-2.5 px-4.5 rounded-full font-black text-sm hover:bg-[#32e011] transition shadow-md" style="text-decoration: none; white-space: nowrap;">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          (571) 576-7711
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" aria-label="Toggle mobile menu" class="lg:hidden text-white focus:outline-none">
        <svg aria-hidden="true" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>
    
    <!-- Mobile Nav -->
    <div id="mobile-menu" class="hidden lg:hidden bg-[#0a2540] border-t border-white/10 flex flex-col p-5 space-y-4 text-center font-semibold text-slate-200 shadow-2xl">
      <a href="/#how-it-works" class="py-2 hover:text-[#00D1FF] transition">How it works</a>
      <a href="/services/" class="py-2 hover:text-[#00D1FF] transition">Transport Options</a>
      <a href="/why-neon/" class="py-2 hover:text-[#00D1FF] transition">Why Neon</a>
      <a href="/reviews/" class="py-2 hover:text-[#00D1FF] transition">Customer Reviews</a>
      <a href="/contact/" class="py-2 hover:text-[#00D1FF] transition">Contact Us</a>
    </div>
  </header>"""

content = re.sub(old_header, new_header, content, flags=re.DOTALL)

with open(CALCULATOR_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed header overflow on cost-calculator/index.html!")
