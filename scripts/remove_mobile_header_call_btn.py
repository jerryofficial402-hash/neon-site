import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

html_files = glob.glob(os.path.join(SITE_DIR, "*.html")) + glob.glob(os.path.join(SITE_DIR, "*", "*.html"))

patched = 0
for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception:
        continue

    if 'id="mobile-header-call-btn"' in content:
        # Regex to remove mobile-header-call-btn completely
        new_content = re.sub(
            r'\s*<a [^>]*id="mobile-header-call-btn"[^>]*>.*?</a>',
            '',
            content,
            flags=re.DOTALL
        )
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            patched += 1

print(f"SUCCESS: Removed mobile-header-call-btn across {patched} HTML files!")
