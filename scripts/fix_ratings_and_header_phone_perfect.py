import os
import re

CALCULATOR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(CALCULATOR_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Remove duplicate 5.0/5 rating bullet item
old_rating_bullet = r'\s*<div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-\[\#e6e6e6\] shadow-sm">\s*<span class="w-7 h-7 rounded-full bg-amber-400/20 text-amber-600 flex items-center justify-center font-black text-sm">★</span>\s*<span>★★★★★ 5\.0 / 5 Rating</span>\s*</div>'

content = re.sub(old_rating_bullet, '', content)

# 2. Update the blue small box card to "5.0 / 5 ★★★★★" and "Verified Google Reviews"
old_blue_card = r'<div class="p-3 bg-white rounded-xl border border-\[\#e6e6e6\] shadow-sm">\s*<div class="text-\[\#468de6\] text-base font-black mb-1">4\.9 / 5★</div>\s*1,240\+ Verified Reviews\s*</div>'

new_blue_card = """<div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm">
                <div class="text-[#468de6] text-base font-black mb-1">5.0 / 5 ★★★★★</div>
                Verified Google Reviews
              </div>"""

content = re.sub(old_blue_card, new_blue_card, content, flags=re.DOTALL)

# 3. Fix header phone button padding & text wrapping so it renders perfectly without overlap
old_header_phone = r'<a href="tel:5715767711" class="flex items-center gap-2 bg-\[\#39FF14\] text-\[\#0a2540\] py-2\.5 px-4\.5 rounded-full font-black text-sm hover:bg-\[\#32e011\] transition shadow-md" style="text-decoration: none; white-space: nowrap;">\s*<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2\.153a1 1 0 01\.986\.836l\.74 4\.435a1 1 0 01-\.54 1\.06l-1\.548\.773a11\.037 11\.037 0 006\.105 6\.105l\.774-1\.548a1 1 0 011\.059-\.54l4\.435\.74a1 1 0 01\.836\.986V17a1 1 0 01-1 1h-2C7\.82 18 2 12\.18 2 5V3z"></path></svg>\s*\(571\) 576-7711\s*</a>'

new_header_phone = """<a href="tel:5715767711" class="inline-flex items-center gap-2 font-black text-sm transition shadow-md hover:bg-[#32e011]" style="background-color: #39FF14 !important; color: #0a2540 !important; padding: 10px 22px !important; border-radius: 9999px !important; text-decoration: none !important; white-space: nowrap !important;">
          <svg class="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
          (571) 576-7711
        </a>"""

content = re.sub(old_header_phone, new_header_phone, content, flags=re.DOTALL)

with open(CALCULATOR_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed ratings duplication, updated small blue box to 5.0/5 Verified Google Reviews, and fixed header phone button padding!")
