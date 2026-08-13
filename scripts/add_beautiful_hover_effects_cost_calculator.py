import os
import re

CALCULATOR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(CALCULATOR_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add hover effects to Trust Bullet Boxes
old_bullets = r'<div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-\[\#e6e6e6\] shadow-sm">'
new_bullets = r'<div class="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#468de6]/40 transition-all duration-300">'

content = re.sub(old_bullets, new_bullets, content)

# 2. Add hover effects to Small Blue Value Cards
old_value_cards = r'<div class="p-3 bg-white rounded-xl border border-\[\#e6e6e6\] shadow-sm">'
new_value_cards = r'<div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-[#468de6]/40 hover:bg-[#f8fafc] transition-all duration-300">'

content = re.sub(old_value_cards, new_value_cards, content)

# 3. Add hover effects to Sample Pricing Route Cards
old_route_card = r'<div class="bg-\[\#f6f9fc\] p-6 rounded-2xl border border-\[\#e6e6e6\] shadow-sm hover:shadow-md transition">'
new_route_card = r'<div class="bg-[#f6f9fc] p-6 rounded-2xl border border-[#e6e6e6] shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-[#468de6]/40 hover:bg-white transition-all duration-300">'

content = re.sub(old_route_card, new_route_card, content)

# 4. Add hover effects to Key Factors Cards (Transparent Pricing)
old_factor_card = r'<div class="p-6 bg-white rounded-2xl border border-\[\#e6e6e6\] shadow-sm">'
new_factor_card = r'<div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-[#468de6]/40 transition-all duration-300">'

content = re.sub(old_factor_card, new_factor_card, content)

# 5. Add hover effects to FAQ Accordion Boxes
old_faq_box = r'<details class="group bg-\[\#f6f9fc\] rounded-2xl border border-\[\#e6e6e6\] transition cursor-pointer open:bg-white open:shadow-md">'
new_faq_box = r'<details class="group bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6] hover:border-[#468de6]/40 hover:shadow-md transition-all duration-300 cursor-pointer open:bg-white open:shadow-md">'

content = re.sub(old_faq_box, new_faq_box, content)

with open(CALCULATOR_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Audited cost-calculator/index.html and added hover effects across all cards!")
