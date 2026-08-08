import os
from html.parser import HTMLParser

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

class SimpleTextParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text = []
    def handle_data(self, data):
        self.text.append(data)

s2s_pages = []

for item in os.listdir(SITE_DIR):
    item_path = os.path.join(SITE_DIR, item)
    if os.path.isdir(item_path) and "-to-" in item and "-car-shipping" in item:
        index_file = os.path.join(item_path, "index.html")
        if os.path.exists(index_file):
            with open(index_file, "r", encoding="utf-8", errors="ignore") as f:
                html = f.read()
            
            parser = SimpleTextParser()
            parser.feed(html)
            words = len(" ".join(parser.text).split())
            
            s2s_pages.append((item, words))

s2s_pages.sort(key=lambda x: x[1])

thin_pages = [p for p in s2s_pages if p[1] < 800]
medium_pages = [p for p in s2s_pages if 800 <= p[1] < 1200]
deep_pages = [p for p in s2s_pages if p[1] >= 1200]

print(f"Total State-to-State Pages: {len(s2s_pages)}")
print(f"Thin Content (<800 words): {len(thin_pages)}")
print(f"Medium Content (800-1200 words): {len(medium_pages)}")
print(f"Deep Content (1200+ words): {len(deep_pages)}")

print("\n--- TOP STATE-TO-STATE PAGES NEEDING SEO CONTENT ENRICHMENT (<800 Words) ---")
for folder, words in thin_pages:
    print(f" - https://neonautotransport.com/{folder}/ ({words} words)")
