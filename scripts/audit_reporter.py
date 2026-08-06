import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

total_files = 0
missing_titles = []
missing_descs = []
h1_missing = []
h1_multiple = []
word_counts = []
usdot_count = 0
mc_count = 0
shazil_count = 0
google_reviews_count = 0
sitemap_count = 0
canonical_count = 0

schema_counts = {
    "BreadcrumbList": 0,
    "Organization": 0,
    "Service": 0,
    "MovingCompany": 0,
    "FAQPage": 0,
    "Article": 0,
    "AggregateRating": 0
}

for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root or "images" in root:
        continue
    for file in files:
        if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2") or file.endswith(".py") or file.endswith(".js") or file.endswith(".json") or file.endswith(".xml") or file.endswith(".txt"):
            continue
        
        file_path = os.path.join(root, file)
        total_files += 1
        
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()

        if "<title>" not in html:
            missing_titles.append(file_path)
        if 'name="description"' not in html and "name='description'" not in html:
            missing_descs.append(file_path)
        
        h1s = html.count("<h1")
        if h1s == 0:
            h1_missing.append(file_path)
        elif h1s > 1:
            h1_multiple.append(file_path)

        if 'rel="canonical"' in html or "rel='canonical'" in html:
            canonical_count += 1

        if "4355879" in html:
            usdot_count += 1
        if "1703787" in html:
            mc_count += 1
        if "Shazil Ali" in html:
            shazil_count += 1
        if "Google" in html and ("5.0" in html or "4.9" in html):
            google_reviews_count += 1

        for s in schema_counts.keys():
            if s in html:
                schema_counts[s] += 1

        # Words
        clean_text = re.sub(r'<[^>]+>', ' ', html)
        words = len(clean_text.split())
        word_counts.append((file_path, words))

print(f"Total HTML/Page Files Analyzed: {total_files}")
print(f"Pages with Missing Title: {len(missing_titles)}")
print(f"Pages with Missing Description: {len(missing_descs)}")
print(f"Pages with Missing H1: {len(h1_missing)}")
print(f"Pages with Multiple H1s: {len(h1_multiple)}")
print(f"Pages with Canonical Tags: {canonical_count} / {total_files}")
print(f"USDOT #4355879 Signal: {usdot_count} / {total_files}")
print(f"MC #1703787 Signal: {mc_count} / {total_files}")
print(f"Shazil Ali Byline Signal: {shazil_count} / {total_files}")
print(f"Google Reviews Rating Signal: {google_reviews_count} / {total_files}")

print("\nSchema Counts:")
for s, c in schema_counts.items():
    print(f"  - {s}: {c}")

thin = [w for f, w in word_counts if w < 500]
med = [w for f, w in word_counts if 500 <= w < 1200]
deep = [w for f, w in word_counts if w >= 1200]

print(f"\nContent Depth Breakdown:")
print(f"  - Thin (<500 words): {len(thin)} pages")
print(f"  - Medium (500-1200 words): {len(med)} pages")
print(f"  - Deep (>1200 words): {len(deep)} pages")
