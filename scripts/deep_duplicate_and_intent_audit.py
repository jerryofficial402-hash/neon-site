import os
import re
from collections import defaultdict
from html.parser import HTMLParser

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

class DeepAuditParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.in_title = False
        self.meta_desc = ""
        self.h1_count = 0
        self.h1_texts = []
        self.in_h1 = False
        self.current_h1 = ""
        self.images_without_alt = 0
        self.total_images = 0
        self.text_content = []

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        tag_lower = tag.lower()

        if tag_lower == "title":
            self.in_title = True
        elif tag_lower == "h1":
            self.h1_count += 1
            self.in_h1 = True
            self.current_h1 = ""
        elif tag_lower == "meta":
            if attrs_dict.get("name", "").lower() == "description":
                self.meta_desc = attrs_dict.get("content", "").strip()
        elif tag_lower == "img":
            self.total_images += 1
            alt = attrs_dict.get("alt", "").strip()
            if not alt:
                self.images_without_alt += 1

    def handle_endtag(self, tag):
        tag_lower = tag.lower()
        if tag_lower == "title":
            self.in_title = False
        elif tag_lower == "h1":
            self.in_h1 = False
            self.h1_texts.append(self.current_h1.strip())

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        if self.in_h1:
            self.current_h1 += data
        self.text_content.append(data)

def run_deep_audit():
    pages = []
    for root, dirs, files in os.walk(SITE_DIR):
        if ".git" in root or "node_modules" in root or "images" in root:
            continue
        for file in files:
            if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".svg") or file.endswith(".ico") or file.endswith(".woff2") or file.endswith(".py") or file.endswith(".js") or file.endswith(".json") or file.endswith(".xml") or file.endswith(".txt") or file.endswith(".md"):
                continue
            
            file_path = os.path.join(root, file)
            rel_path = os.path.relpath(file_path, SITE_DIR).replace("\\", "/")
            pages.append((file_path, rel_path))

    title_map = defaultdict(list)
    desc_map = defaultdict(list)
    h1_map = defaultdict(list)
    content_fingerprints = defaultdict(list)
    
    missing_alt_images = 0
    total_imgs = 0

    intent_mismatch_warnings = []
    overcompetitive_headterm_warnings = []

    for file_path, rel_path in pages:
        try:
            with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                html = f.read()

            parser = DeepAuditParser()
            parser.feed(html)

            t = parser.title.strip()
            d = parser.meta_desc
            h1s = parser.h1_texts
            words = " ".join(parser.text_content).split()

            total_imgs += parser.total_images
            missing_alt_images += parser.images_without_alt

            if t:
                title_map[t].append(rel_path)
            if d:
                desc_map[d].append(rel_path)
            for h in h1s:
                if h:
                    h1_map[h].append(rel_path)

            # Fingerprint first 50 words of body content to detect boilerplate internal duplication
            if len(words) > 30:
                fingerprint = " ".join(words[20:60]).lower()
                content_fingerprints[fingerprint].append(rel_path)

            # Intent Check
            if "city" in rel_path:
                if "best car shipping company in america" in t.lower() or "cheapest car shipping company in nation" in t.lower():
                    intent_mismatch_warnings.append((rel_path, t, "City page targeting broad nationwide intent instead of local route intent"))
            
            # Check for targeting hyper-competitive head terms on thin pages
            if len(words) < 600 and "car transport" in t.lower() and "how to" not in rel_path and rel_path != "index.html":
                overcompetitive_headterm_warnings.append((rel_path, t, f"Page targeting competitive head term with thin content ({len(words)} words)"))

        except Exception as e:
            pass

    # Results
    duplicate_titles = {t: urls for t, urls in title_map.items() if len(urls) > 1}
    duplicate_descs = {d: urls for d, urls in desc_map.items() if len(urls) > 1}
    duplicate_h1s = {h: urls for h, urls in h1_map.items() if len(urls) > 1}
    duplicate_fingerprints = {fp: urls for fp, urls in content_fingerprints.items() if len(urls) > 1}

    print("=== 1. INTERNAL DUPLICATE CONTENT AUDIT ===")
    print(f"Duplicate Title Tags: {len(duplicate_titles)} sets of duplicate titles")
    print(f"Duplicate Meta Descriptions: {len(duplicate_descs)} sets of duplicate descriptions")
    print(f"Duplicate H1 Headings: {len(duplicate_h1s)} sets of duplicate H1s")
    print(f"Boilerplate Body Content Clones: {len(duplicate_fingerprints)} content clusters")

    print("\n=== 2. KEYWORD INTENT & COMPETITION AUDIT ===")
    print(f"Intent Mismatch Warnings: {len(intent_mismatch_warnings)}")
    print(f"Hyper-Competitive Head Term Warnings on Thin Pages: {len(overcompetitive_headterm_warnings)}")

    print("\n=== 3. ON-PAGE IMAGE ALT AUDIT ===")
    print(f"Total Images Scanned: {total_imgs}")
    print(f"Images Missing Alt Attribute: {missing_alt_images} ({(missing_alt_images/max(1,total_imgs))*100:.1f}%)")

if __name__ == "__main__":
    run_deep_audit()
