import os
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Shorten the massive H1
html = html.replace('text-4xl md:text-5xl lg:text-6xl font-black', 'text-4xl md:text-5xl lg:text-5xl font-black')

# 2. Shorten the hero paragraph
old_para = '<p class="text-lg text-[#425466] mb-10 leading-relaxed">New York state auto transport covers more ground — and more logistical variety — than almost any other state in the country. Dense, parkway-restricted New York City sits at one end of the spectrum; wide-open, Thruway-connected Upstate cities like Buffalo, Rochester, Syracuse, and Albany sit at the other; and Westchester and Long Island communities like Yonkers, White Plains, and Hempstead fall somewhere in between. NY car shipping costs reflect that range: a same-day in-city move might run under $300, while a cross-country haul to California can run $1,600 or more.</p>'

new_hero_para = '<p class="text-lg text-[#425466] mb-10 leading-relaxed">New York state auto transport covers more ground — and more logistical variety — than almost any other state in the country. Dense, parkway-restricted New York City sits at one end of the spectrum; wide-open, Thruway-connected Upstate cities sit at the other.</p>'

moved_text = 'Westchester and Long Island communities like Yonkers, White Plains, and Hempstead fall somewhere in between. NY car shipping costs reflect that range: a same-day in-city move might run under $300, while a cross-country haul to California can run $1,600 or more. '

if old_para in html:
    html = html.replace(old_para, new_hero_para)
    
    # 3. Add the moved text to the main body column
    target = '<div class="lg:col-span-2 space-y-12 min-w-0"><p class="text-xl text-[#425466] mb-12 leading-relaxed font-medium">'
    replacement = target + moved_text
    html = html.replace(target, replacement)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Hero text shortened, H1 sized down, layout balanced.")
