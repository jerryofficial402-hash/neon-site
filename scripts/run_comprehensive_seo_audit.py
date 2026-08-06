import os
import re
from collections import defaultdict
import xml.etree.ElementTree as ET

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

pages = []
url_to_file = {}
file_to_url = {}

# 1. Gather all HTML/extensionless pages
for root, dirs, files in os.walk(SITE_DIR):
    if ".git" in root or "node_modules" in root or "images" in root:
        continue
    for file in files:
        if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2") or file.endswith(".py") or file.endswith(".js") or file.endswith(".json") or file.endswith(".xml") or file.endswith(".txt"):
            continue
        
        file_path = os.path.join(root, file)
        rel_path = os.path.relpath(file_path, SITE_DIR).replace("\\", "/")
        
        # Derive canonical URL path
        if rel_path == "index.html":
            url_path = "/"
        elif rel_path.endswith("/index.html"):
            url_path = "/" + rel_path[:-10]
        elif rel_path.endswith(".html"):
            url_path = "/" + rel_path[:-5] + "/"
        else:
            url_path = "/" + rel_path + "/"
            
        pages.append((file_path, rel_path, url_path))
        url_to_file[url_path] = file_path
        file_to_url[file_path] = url_path

print(f"Total Pages Discovered in File System: {len(pages)}")

# Audit Storage
titles = {}
descriptions = {}
h1_counts = {}
canonical_tags = {}
word_counts = {}
eeat_signals = {}
schema_types = {}
outgoing_links = defaultdict(set)
incoming_links = defaultdict(set)

title_pattern = re.compile(r'<title>(.*?)</title>', re.IGNORECASE | re.DOTALL)
desc_pattern = re.compile(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)
h1_pattern = re.compile(r'<h1[^>]*>(.*?)</h1>', re.IGNORECASE | re.DOTALL)
canonical_pattern = re.compile(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)
href_pattern = re.compile(r'href=["\'](/[^"\']*)["\']', re.IGNORECASE)
schema_pattern = re.compile(r'@type["\']\s*:\s*["\']([^"\']+)["\']', re.IGNORECASE)

for file_path, rel_path, url_path in pages:
    try:
        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()

        # Title
        t_match = title_pattern.search(html)
        title = t_match.group(1).strip() if t_match else ""
        titles[url_path] = title

        # Description
        d_match = desc_pattern.search(html)
        desc = d_match.group(1).strip() if d_match else ""
        descriptions[url_path] = desc

        # H1
        h1s = h1_pattern.findall(html)
        h1_counts[url_path] = len(h1s)

        # Canonical
        c_match = canonical_pattern.search(html)
        canonical = c_match.group(1).strip() if c_match else ""
        canonical_tags[url_path] = canonical

        # Word count (strip tags)
        clean_text = re.sub(r'<[^>]+>', ' ', html)
        words = clean_text.split()
        word_counts[url_path] = len(words)

        # E-E-A-T
        eeat = {
            "usdot": "4355879" in html,
            "mc": "1703787" in html,
            "shazil_ali": "Shazil Ali" in html,
            "reviews": "Google" in html and ("5.0" in html or "4.9" in html),
            "phone": "571" in html
        }
        eeat_signals[url_path] = eeat

        # Schema
        schemas = schema_pattern.findall(html)
        schema_types[url_path] = set(schemas)

        # Links
        hrefs = href_pattern.findall(html)
        for h in hrefs:
            # normalize link
            link_url = h.split('#')[0].split('?')[0]
            if not link_url.endswith('/') and not '.' in link_url.split('/')[-1]:
                link_url += '/'
            if link_url:
                outgoing_links[url_path].add(link_url)
                incoming_links[link_url].add(url_path)

    except Exception as e:
        pass

# Analyze Findings
print("\n=== 1. KEYWORD & ON-PAGE AUDIT ===")
missing_title = [u for u, t in titles.items() if not t]
missing_desc = [u for u, d in descriptions.items() if not d]
short_title = [u for u, t in titles.items() if t and len(t) < 30]
long_title = [u for u, t in titles.items() if t and len(t) > 65]
short_desc = [u for u, d in descriptions.items() if d and len(d) < 100]
long_desc = [u for u, d in descriptions.items() if d and len(d) > 165]
multiple_h1 = [u for u, c in h1_counts.items() if c > 1]
missing_h1 = [u for u, c in h1_counts.items() if c == 0]

print(f"Total Pages Analyzed: {len(titles)}")
print(f"Missing Title Tags: {len(missing_title)}")
print(f"Short Titles (<30 chars): {len(short_title)}")
print(f"Long Titles (>65 chars): {len(long_title)}")
print(f"Missing Meta Descriptions: {len(missing_desc)}")
print(f"Short Descriptions (<100 chars): {len(short_desc)}")
print(f"Long Descriptions (>165 chars): {len(long_desc)}")
print(f"Pages with Missing H1: {len(missing_h1)}")
print(f"Pages with Multiple H1s: {len(multiple_h1)}")

print("\n=== 2. CONTENT & E-E-A-T AUDIT ===")
thin_content = [u for u, w in word_counts.items() if w < 500]
medium_content = [u for u, w in word_counts.items() if 500 <= w < 1200]
deep_content = [u for u, w in word_counts.items() if w >= 1200]
missing_usdot = [u for u, e in eeat_signals.items() if not e["usdot"]]
missing_author = [u for u, e in eeat_signals.items() if not e["shazil_ali"]]

print(f"Thin Content Pages (<500 words): {len(thin_content)}")
print(f"Medium Content Pages (500-1200 words): {len(medium_content)}")
print(f"Deep Content Pages (>1200 words): {len(deep_content)}")
print(f"Pages missing USDOT License Signal: {len(missing_usdot)}")
print(f"Pages with Shazil Ali E-E-A-T Byline: {len(titles) - len(missing_author)}")

print("\n=== 3. TECHNICAL AUDIT ===")
missing_canonical = [u for u, c in canonical_tags.items() if not c]
schema_counts = defaultdict(int)
for u, st in schema_types.items():
    for s in st:
        schema_counts[s] += 1

print(f"Missing Canonical Tags: {len(missing_canonical)}")
print("Schema Markup Types Found across Site:")
for s, c in sorted(schema_counts.items(), key=lambda x: x[1], reverse=True):
    print(f"  - {s}: {c} pages")

print("\n=== 4. INTERLINKING AUDIT ===")
orphans = [u for u in titles.keys() if len(incoming_links[u]) == 0 and u != "/"]
low_inlinks = [u for u in titles.keys() if 0 < len(incoming_links[u]) < 3]

print(f"Orphan Pages (0 internal incoming links): {len(orphans)}")
print(f"Low Internal Link Pages (<3 incoming links): {len(low_inlinks)}")

if orphans:
    print("Sample Orphan Pages:", orphans[:10])

