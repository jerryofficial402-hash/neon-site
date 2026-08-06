import os
import re
from html.parser import HTMLParser
from collections import defaultdict

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

class SimpleHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.in_title = False
        self.meta_desc = ""
        self.h1_count = 0
        self.in_h1 = False
        self.canonical = ""
        self.links = set()
        self.schemas = set()
        self.text_content = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        tag_lower = tag.lower()

        if tag_lower == "title":
            self.in_title = True
        elif tag_lower == "h1":
            self.h1_count += 1
            self.in_h1 = True
        elif tag_lower == "meta":
            name = attrs_dict.get("name", "").lower()
            if name == "description":
                self.meta_desc = attrs_dict.get("content", "").strip()
        elif tag_lower == "link":
            rel = attrs_dict.get("rel", "").lower()
            if rel == "canonical":
                self.canonical = attrs_dict.get("href", "").strip()
        elif tag_lower == "a":
            href = attrs_dict.get("href", "").strip()
            if href.startswith("/"):
                clean_href = href.split("#")[0].split("?")[0]
                if clean_href:
                    self.links.add(clean_href)

    def handle_endtag(self, tag):
        tag_lower = tag.lower()
        if tag_lower == "title":
            self.in_title = False
        elif tag_lower == "h1":
            self.in_h1 = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        self.text_content.append(data)

def run_audit():
    pages = []
    for root, dirs, files in os.walk(SITE_DIR):
        if ".git" in root or "node_modules" in root or "images" in root:
            continue
        for file in files:
            if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2") or file.endswith(".py") or file.endswith(".js") or file.endswith(".json") or file.endswith(".xml") or file.endswith(".txt"):
                continue
            
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, SITE_DIR).replace("\\", "/")
            pages.append((file_path, rel_path))

    print(f"Total Pages Discovered: {len(pages)}")

    titles = {}
    descriptions = {}
    h1_counts = {}
    canonicals = {}
    word_counts = {}
    eeat_usdot = 0
    eeat_shazil = 0
    eeat_reviews = 0

    missing_titles = []
    short_titles = []
    long_titles = []
    missing_descs = []
    short_descs = []
    long_descs = []
    missing_h1s = []
    multiple_h1s = []

    thin_content = []
    medium_content = []
    deep_content = []

    for file_path, rel_path in pages:
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                html = f.read()

            parser = SimpleHTMLParser()
            parser.feed(html)

            t = parser.title.strip()
            d = parser.meta_desc
            h1 = parser.h1_count
            c = parser.canonical
            words = len(" ".join(parser.text_content).split())

            titles[rel_path] = t
            descriptions[rel_path] = d
            h1_counts[rel_path] = h1
            canonicals[rel_path] = c
            word_counts[rel_path] = words

            if not t:
                missing_titles.append(rel_path)
            elif len(t) < 30:
                short_titles.append((rel_path, t))
            elif len(t) > 65:
                long_titles.append((rel_path, t))

            if not d:
                missing_descs.append(rel_path)
            elif len(d) < 100:
                short_descs.append((rel_path, d))
            elif len(d) > 165:
                long_descs.append((rel_path, d))

            if h1 == 0:
                missing_h1s.append(rel_path)
            elif h1 > 1:
                multiple_h1s.append(rel_path)

            if words < 500:
                thin_content.append(rel_path)
            elif words < 1200:
                medium_content.append(rel_path)
            else:
                deep_content.append(rel_path)

            if "4355879" in html:
                eeat_usdot += 1
            if "Shazil Ali" in html:
                eeat_shazil += 1
            if "5.0" in html and "Google" in html:
                eeat_reviews += 1

        except Exception as e:
            pass

    print("\n--- 1. KEYWORD & ON-PAGE AUDIT SUMMARY ---")
    print(f"Total Pages Analyzed: {len(pages)}")
    print(f"Missing Title Tags: {len(missing_titles)}")
    print(f"Short Titles (<30 chars): {len(short_titles)}")
    print(f"Long Titles (>65 chars): {len(long_titles)}")
    print(f"Missing Meta Descriptions: {len(missing_descs)}")
    print(f"Short Meta Descriptions (<100 chars): {len(short_descs)}")
    print(f"Long Meta Descriptions (>165 chars): {len(long_descs)}")
    print(f"Missing H1 Headings: {len(missing_h1s)}")
    print(f"Multiple H1 Headings: {len(multiple_h1s)}")

    print("\n--- 2. CONTENT AUDIT SUMMARY ---")
    print(f"Thin Content Pages (<500 words): {len(thin_content)}")
    print(f"Medium Content Pages (500-1200 words): {len(medium_content)}")
    print(f"Deep Content Pages (>1200 words): {len(deep_content)}")

    print("\n--- 3. E-E-A-T AUDIT SUMMARY ---")
    print(f"USDOT License #4355879 Present: {eeat_usdot} / {len(pages)} pages ({eeat_usdot/len(pages)*100:.1f}%)")
    print(f"Shazil Ali Author Byline Present: {eeat_shazil} / {len(pages)} pages ({eeat_shazil/len(pages)*100:.1f}%)")
    print(f"Verified 5.0 Google Reviews Present: {eeat_reviews} / {len(pages)} pages ({eeat_reviews/len(pages)*100:.1f}%)")

if __name__ == "__main__":
    run_audit()
