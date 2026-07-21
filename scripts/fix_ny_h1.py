import os

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Revert Hero H1
content = content.replace(
    '<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">New York Car Shipping: Costs, Routes &amp; Everything You Need to Know</h1>',
    '<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">New York Car Shipping</h1>'
)
# Also handle the non HTML-escaped version just in case
content = content.replace(
    '<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">New York Car Shipping: Costs, Routes & Everything You Need to Know</h1>',
    '<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">New York Car Shipping</h1>'
)

# 2. Add the H1 before "Why Choose Neon Auto Transport..."
target_h2 = '<h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">Why Choose Neon Auto Transport for New York Car Shipping</h2>'
replacement_h1_h2 = '<h1 class="text-4xl font-black text-[#0a2540] mb-12 tracking-tight text-center">New York Car Shipping: Costs, Routes &amp; Everything You Need to Know</h1>\n' + target_h2

content = content.replace(target_h2, replacement_h1_h2)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
