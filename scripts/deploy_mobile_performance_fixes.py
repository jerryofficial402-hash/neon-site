import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# Targeted HTML files for mobile performance optimization
target_files = [
    os.path.join(SITE_DIR, "index.html"),
    os.path.join(SITE_DIR, "cost-calculator", "index.html"),
    os.path.join(SITE_DIR, "car-shipping-quote", "index.html"),
    os.path.join(SITE_DIR, "routes", "california-to-texas-enclosed", "index.html"),
    os.path.join(SITE_DIR, "services", "enclosed-auto-transport.html")
]

for file_path in target_files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    modified = False

    # 1. Replace render-blocking chatbot.css with preloaded non-blocking style tag
    old_chatbot_css = r'<link rel="stylesheet" href="/css/chatbot.css\?v=\d+">'
    new_chatbot_css = """<link rel="preload" href="/css/chatbot.css?v=3" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/chatbot.css?v=3"></noscript>"""
    
    if re.search(old_chatbot_css, content):
        content = re.sub(old_chatbot_css, new_chatbot_css, content)
        modified = True

    # 2. Add Google Fonts Inter with font-display: swap if missing
    if 'fonts.googleapis.com/css2' not in content:
        fonts_link = """  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap">"""
        content = content.replace('<meta name="viewport"', fonts_link + '\n  <meta name="viewport"')
        modified = True

    # Save if modified
    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"SUCCESS: Applied mobile performance optimizations to {file_path}")

print("Mobile performance tuning completed!")
