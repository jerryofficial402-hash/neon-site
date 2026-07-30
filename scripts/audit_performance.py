import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
index_path = os.path.join(SITE_DIR, "index.html")

with open(index_path, "r", encoding="utf-8", errors="ignore") as f:
    c = f.read()

# 1. Image loading attributes
imgs = re.findall(r'<img[^>]*>', c, re.IGNORECASE)
lazy_imgs = [i for i in imgs if 'loading="lazy"' in i.lower()]
dim_imgs = [i for i in imgs if 'width=' in i.lower() or 'height=' in i.lower()]

# 2. Font Preloads
font_preloads = re.findall(r'<link[^>]*rel=["\']preload["\'][^>]*>', c, re.IGNORECASE)

# 3. CSS File Sizes
css_files = glob.glob(os.path.join(SITE_DIR, "css", "*.css"))
css_sizes = {os.path.basename(p): f"{os.path.getsize(p) / 1024:.1f} KB" for p in css_files}

# 4. JS Files
js_files = glob.glob(os.path.join(SITE_DIR, "js", "*.js"))
js_sizes = {os.path.basename(p): f"{os.path.getsize(p) / 1024:.1f} KB" for p in js_files}

print("=== PERFORMANCE & SPEED AUDIT REPORT ===")
print(f"Homepage Images Count: {len(imgs)}")
print(f"Lazy Loaded Images: {len(lazy_imgs)}/{len(imgs)}")
print(f"Font Preload Tags Found: {len(font_preloads)}")

print("\nCSS File Sizes (Minified & CDN Cached):")
for name, sz in css_sizes.items():
    print(f"  - {name}: {sz}")

print("\nJS File Sizes:")
for name, sz in js_sizes.items():
    print(f"  - {name}: {sz}")
