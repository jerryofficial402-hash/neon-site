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

    if '</footer>' in content:
        parts = content.split('</footer>')
        footer_and_before = parts[0] + '</footer>'
        after_footer = parts[1]

        # In after_footer, strip out any stray <style>...</style> blocks, <div id="mobile-sticky-cta">...</div>, comments
        clean_after = re.sub(r'<!--\s*Mobile Sticky CTA\s*-->', '', after_footer, flags=re.DOTALL)
        clean_after = re.sub(r'<style[^>]*>\s*#mobile-sticky-cta.*?</style>', '', clean_after, flags=re.DOTALL)
        clean_after = re.sub(r'<style[^>]*>\s*/\*\s*Hide mobile sticky cta globally\s*\*/.*?</style>', '', clean_after, flags=re.DOTALL)
        clean_after = re.sub(r'<!--\s*Sticky Side Widget\s*-->', '', clean_after, flags=re.DOTALL)
        clean_after = re.sub(r'<div id="mobile-sticky-cta"[^>]*>.*?</div>', '', clean_after, flags=re.DOTALL)
        clean_after = re.sub(r'<div id="sticky-widget"[^>]*>.*?</div>', '', clean_after, flags=re.DOTALL)

        new_content = footer_and_before + '\n\n' + clean_after.lstrip()
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            patched += 1

print(f"SUCCESS: Purged all stray style blocks, comments, and widget remnants after </footer> across {patched} HTML files!")
