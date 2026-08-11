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

    modified = False

    # Remove sticky-widget elements
    if 'id="sticky-widget"' in content:
        content = re.sub(r'<!--\s*Sticky Side Widget\s*-->\s*<div id="sticky-widget"[^>]*>.*?</div>', '', content, flags=re.DOTALL)
        content = re.sub(r'<div id="sticky-widget"[^>]*>.*?</div>', '', content, flags=re.DOTALL)
        modified = True

    # Remove mobile-sticky-cta elements
    if 'id="mobile-sticky-cta"' in content:
        content = re.sub(r'<!--\s*Mobile Sticky CTA\s*-->\s*<div id="mobile-sticky-cta"[^>]*>.*?</div>', '', content, flags=re.DOTALL)
        content = re.sub(r'<div id="mobile-sticky-cta"[^>]*>.*?</div>', '', content, flags=re.DOTALL)
        modified = True

    # Remove inline style blocks hiding sticky widget if present
    if 'Hide mobile sticky cta globally' in content or 'Hide sticky widget globally' in content:
        content = re.sub(r'<style>\s*/\*\s*Hide mobile sticky cta globally\s*\*/.*?#mobile-sticky-cta\s*\{\s*display:\s*none\s*!important;\s*\}\s*</style>', '', content, flags=re.DOTALL)
        content = re.sub(r'<style>\s*/\*\s*Hide sticky widget globally\s*\*/.*?#sticky-widget\s*\{\s*display:\s*none\s*!important;\s*\}\s*</style>', '', content, flags=re.DOTALL)
        modified = True

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        patched += 1

print(f"SUCCESS: Cleaned up all legacy widget DOM elements after </footer> across {patched} HTML files!")
