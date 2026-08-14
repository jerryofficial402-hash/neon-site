import os
import re

WHY_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
HOW_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\how-it-works\index.html"

with open(WHY_FILE, "r", encoding="utf-8") as f:
    template = f.read()

# Replace Head Metadata for How It Works
template = re.sub(r'<title>.*?</title>', '<title>How Car Shipping Works | Step-by-Step Auto Transport Guide</title>', template, flags=re.DOTALL)
template = re.sub(r'<meta name="description" content=".*?">', '<meta name="description" content="Learn how car shipping works with Neon Auto Transport. Step-by-step guide from getting a quote and carrier dispatch to vehicle inspection and door-to-door delivery.">', template, flags=re.DOTALL)
template = template.replace('href="https://neonautotransport.com/why-neon/"', 'href="https://neonautotransport.com/how-it-works/"')

with open(HOW_FILE, "w", encoding="utf-8") as f:
    f.write(template)

print(f"SUCCESS: Applied website template design system to {HOW_FILE}")
