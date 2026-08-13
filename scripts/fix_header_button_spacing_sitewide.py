import os
import re

PAGE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\car-shipping-quote\index.html"

with open(PAGE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Header Right CTA Container with perfect explicit spacing (16px / 1rem gap, zero margin overlap)
old_header_cta = r'<!-- Right: CTA Actions -->\s*<div class="hidden lg:flex items-center gap-3\.5 shrink-0">.*?</div>\s*<!-- Mobile Menu Button -->'

new_header_cta = """<!-- Right: CTA Actions -->
      <div class="hidden lg:flex items-center shrink-0" style="display: flex !important; align-items: center !important; gap: 16px !important;">
        <a href="/es/cotizador-envio-de-autos/" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition" style="text-decoration: none; margin: 0 !important;">
          <span>🇪🇸</span> Español
        </a>
        <a href="tel:5715767711" class="inline-flex items-center transition shadow-md hover:bg-[#32e011]" style="background-color: #39FF14 !important; color: #0a2540 !important; padding: 10px 20px !important; border-radius: 9999px !important; text-decoration: none !important; white-space: nowrap !important; margin: 0 !important; font-weight: 900 !important; font-size: 0.875rem !important; display: inline-flex !important; align-items: center !important; gap: 8px !important; box-shadow: 0 4px 12px rgba(57, 255, 20, 0.3) !important;">
          <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20" style="width: 16px; height: 16px;"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          (571) 576-7711
        </a>
        <a href="/cost-calculator/" class="btn-primary transition shadow-md" style="background-color: #635bff !important; color: #ffffff !important; padding: 10px 22px !important; border-radius: 9999px !important; text-decoration: none !important; white-space: nowrap !important; margin: 0 !important; font-weight: 700 !important; font-size: 0.875rem !important; display: inline-flex !important; align-items: center !important; gap: 6px !important; box-shadow: 0 4px 12px rgba(99, 91, 255, 0.3) !important;">
          Cost Calculator &rarr;
        </a>
      </div>

      <!-- Mobile Menu Button -->"""

content = re.sub(old_header_cta, new_header_cta, content, flags=re.DOTALL)

with open(PAGE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed header CTA button spacing on car-shipping-quote page with explicit 16px gap!")
