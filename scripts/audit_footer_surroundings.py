import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

html_files = glob.glob(os.path.join(SITE_DIR, "*.html")) + glob.glob(os.path.join(SITE_DIR, "*", "*.html"))

found_after_footer = []

for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception:
        continue

    parts = content.split("</footer>")
    if len(parts) > 1:
        after = parts[1].strip()
        # Remove standard script/body tags
        clean_after = re.sub(r'<(script|link|noscript)[^>]*>.*?</\1>', '', after, flags=re.DOTALL)
        clean_after = re.sub(r'<(script|link|noscript)[^>]*/>', '', clean_after)
        clean_after = re.sub(r'</?(body|html)>', '', clean_after).strip()
        
        # Check if any visible text, section, div, header, footer exists after </footer>
        if clean_after and len(clean_after) > 0 and '<' in clean_after:
            found_after_footer.append((filepath, clean_after[:300]))

print(f"Found {len(found_after_footer)} files with extra HTML after </footer>:")
for path, snippet in found_after_footer:
    rel_path = os.path.relpath(path, SITE_DIR)
    print(f"--- {rel_path} ---")
    print(snippet)
    print()
