import os
import glob
import re
from collections import defaultdict

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)

titles = defaultdict(list)
meta_descs = defaultdict(list)
h1s = defaultdict(list)
canonicals = defaultdict(list)
file_sizes = defaultdict(list)

draft_or_temp_files = []

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if "node_modules" in rel or ".git" in rel:
        continue

    # Flag potential temp / backup files
    if rel in ["original_index.html", "original_utf8.html", "slider.html", "services-grid.html", "routes/route-template.html", "temp.txt", "temp_state_gen.txt"]:
        draft_or_temp_files.append(rel)

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        c = f.read()

    # Extract title
    t_match = re.search(r'<title>(.*?)</title>', c, re.IGNORECASE | re.DOTALL)
    if t_match:
        t = t_match.group(1).strip()
        titles[t].append(rel)

    # Extract meta description
    m_match = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', c, re.IGNORECASE)
    if m_match:
        m = m_match.group(1).strip()
        meta_descs[m].append(rel)

    # Extract H1
    h_match = re.search(r'<h1[^>]*>(.*?)</h1>', c, re.IGNORECASE | re.DOTALL)
    if h_match:
        h = re.sub(r'<[^>]+>', '', h_match.group(1)).strip()
        h1s[h].append(rel)

    # Extract Canonical
    c_match = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', c, re.IGNORECASE)
    if c_match:
        can = c_match.group(1).strip()
        canonicals[can].append(rel)

print("=== DUPLICATE AUDIT REPORT ===")
print(f"Total HTML files scanned: {len(html_files)}")

print(f"\n1. DRAFT / TEMP / BACKUP FILES DISCOVERED ({len(draft_or_temp_files)}):")
for d in draft_or_temp_files:
    print(f"   - {d}")

dup_titles = {k: v for k, v in titles.items() if len(v) > 1}
print(f"\n2. DUPLICATE TITLE TAGS: {len(dup_titles)} distinct duplicate title groups")
for t, pages in list(dup_titles.items())[:10]:
    print(f"   Title: '{t}' (used on {len(pages)} pages)")
    for p in pages[:3]:
        print(f"     -> {p}")

dup_descs = {k: v for k, v in meta_descs.items() if len(v) > 1}
print(f"\n3. DUPLICATE META DESCRIPTIONS: {len(dup_descs)} distinct duplicate description groups")
for m, pages in list(dup_descs.items())[:10]:
    print(f"   Meta Desc: '{m[:60]}...' (used on {len(pages)} pages)")
    for p in pages[:3]:
        print(f"     -> {p}")

dup_h1s = {k: v for k, v in h1s.items() if len(v) > 1}
print(f"\n4. DUPLICATE H1 HEADINGS: {len(dup_h1s)} distinct duplicate H1 groups")
for h, pages in list(dup_h1s.items())[:10]:
    print(f"   H1: '{h}' (used on {len(pages)} pages)")
    for p in pages[:3]:
        print(f"     -> {p}")

dup_canonicals = {k: v for k, v in canonicals.items() if len(v) > 1}
print(f"\n5. DUPLICATE CANONICAL URLS (Multiple files claiming same canonical): {len(dup_canonicals)}")
for can, pages in list(dup_canonicals.items())[:10]:
    print(f"   Canonical: '{can}' (claimed by {len(pages)} pages)")
    for p in pages[:3]:
        print(f"     -> {p}")
