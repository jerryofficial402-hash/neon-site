import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

old_p = '<p class="text-[#425466] text-lg max-w-2xl mx-auto">Trusted by thousands of vehicle owners across the nation.</p>'
new_p = '<p class="text-[#425466] text-lg max-w-2xl mx-auto">Read authentic vehicle shipping feedback from our verified customers.</p>'

if old_p in content:
    content = content.replace(old_p, new_p)
    print("SUCCESS: Replaced 'Trusted by thousands' subtitle")

with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Updated index.html!")
