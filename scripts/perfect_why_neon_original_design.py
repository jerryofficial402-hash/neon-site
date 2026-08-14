import os

WHY_FILE_1 = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
WHY_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon"
os.makedirs(WHY_DIR, exist_ok=True)
WHY_FILE_2 = os.path.join(WHY_DIR, "index.html")

with open(WHY_FILE_1, "r", encoding="utf-8") as f:
    content = f.read()

# Make sure title is accurate and high-EEAT
content = content.replace("<title>Why Choose Neon Auto Transport | | Neon Auto Transport</title>", "<title>Why Choose Neon Auto Transport | Vetted Carriers & Transparent Pricing</title>")

with open(WHY_FILE_1, "w", encoding="utf-8") as f:
    f.write(content)

with open(WHY_FILE_2, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Synchronized original rich why-neon.html design to {WHY_FILE_1} and {WHY_FILE_2}")
