import os
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# The full long paragraph
old_para = '<p class="text-lg text-[#425466] mb-10 leading-relaxed">New York state auto transport covers more ground — and more logistical variety — than almost any other state in the country. Dense, parkway-restricted New York City sits at one end of the spectrum; wide-open, Thruway-connected Upstate cities like Buffalo, Rochester, Syracuse, and Albany sit at the other; and Westchester and Long Island communities like Yonkers, White Plains, and Hempstead fall somewhere in between. NY car shipping costs reflect that range: a same-day in-city move might run under $300, while a cross-country haul to California can run $1,600 or more.</p>'

# Shortened for hero
new_hero_para = '<p class="text-lg text-[#425466] mb-10 leading-relaxed">New York state auto transport covers more ground — and more logistical variety — than almost any other state in the country. Dense, parkway-restricted New York City sits at one end of the spectrum; wide-open, Thruway-connected Upstate cities like Buffalo, Rochester, Syracuse, and Albany sit at the other; and Westchester and Long Island communities like Yonkers, White Plains, and Hempstead fall somewhere in between.</p>'

html = html.replace(old_para, new_hero_para)

# Add the moved sentence to the beginning of the main content column
target = '<div class="lg:col-span-2 space-y-12 min-w-0"><p class="text-xl text-[#425466] mb-12 leading-relaxed font-medium">'
replacement = '<div class="lg:col-span-2 space-y-12 min-w-0"><p class="text-xl text-[#425466] mb-12 leading-relaxed font-medium">NY car shipping costs reflect that range: a same-day in-city move might run under $300, while a cross-country haul to California can run $1,600 or more. '

html = html.replace(target, replacement)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Hero text shortened and moved to body.")
