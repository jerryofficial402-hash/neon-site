import os
import re

WHY_FILE_1 = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
WHY_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon"
os.makedirs(WHY_DIR, exist_ok=True)
WHY_FILE_2 = os.path.join(WHY_DIR, "index.html")

with open(WHY_FILE_1, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description in Head
content = re.sub(r'<title>.*?</title>', '<title>Why Choose Neon Auto Transport | Licensed Car Shipping Broker</title>', content, flags=re.DOTALL)
content = re.sub(r'<meta name="description" content=".*?">', '<meta name="description" content="Learn why customers choose Neon Auto Transport for nationwide vehicle shipping. Understand our licensed broker role, carrier assignment process, Bill of Lading inspections, and open or enclosed transport options.">', content, flags=re.DOTALL)

# 2. Fix .reveal opacity bug so no text is ever hidden
content = content.replace(" mb-16 reveal", " mb-16")
content = content.replace(" reveal", "")

# 3. Add explicit white text color to Service Mode Analysis Matrix header
content = content.replace(
    '<h4 class="font-bold text-xl">Service Mode Analysis Matrix</h4>',
    '<h4 class="font-bold text-xl text-white" style="color: #ffffff !important;">Service Mode Analysis Matrix</h4>'
)

content = content.replace(
    '<p class="text-xs text-[#a1b0c0] mt-1">A side-by-side comparison of transport tiers to help you decide.</p>',
    '<p class="text-xs mt-1" style="color: #cdd5df !important;">A side-by-side comparison of transport tiers to help you decide.</p>'
)

# 4. Save to both why-neon.html and why-neon/index.html
with open(WHY_FILE_1, "w", encoding="utf-8") as f:
    f.write(content)

with open(WHY_FILE_2, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Preserved 100% original design system while applying text & color fixes to {WHY_FILE_1} and {WHY_FILE_2}")
