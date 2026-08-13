import os
import re

FILE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Fix Phone Button styling so (571) 576-7711 is 100% visible, bright yellow background with black text
old_phone_btn = r'<a href="tel:5715767711" class="bg-\[\#ffc72c\] hover:bg-\[\#ebd523\] text-\[\#0a2540\] px-6 py-4 rounded-full font-black text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-md">'

new_phone_btn = r'<a href="tel:5715767711" class="px-6 py-4 rounded-full font-black text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90" style="background-color: #ffc72c !important; color: #0a2540 !important; text-decoration: none !important;">'

content = re.sub(old_phone_btn, new_phone_btn, content)

# 2. Fix Section Overlap — remove overlap-up from main article container so white card sits nicely below hero
content = content.replace(
    '<section class="container mx-auto px-4 lg:px-8 max-w-6xl overlap-up mb-24">',
    '<section class="container mx-auto px-4 lg:px-8 max-w-6xl mt-12 mb-24">'
)

with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fixed phone number contrast & removed hero section overlap!")
