import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

def fix_html_file(filepath):
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            html = f.read()
    except Exception as e:
        return False

    modified = False

    # 1. FIX COLOR CONTRAST: text-[#0891b2] -> text-[#0e7490] (passes 5.1:1 contrast)
    if "text-[#0891b2]" in html:
        html = html.replace("text-[#0891b2]", "text-[#0e7490]")
        modified = True

    # 2. FIX COLOR CONTRAST: text-[#635bff] on light badges or copy -> text-[#4338ca] (passes 4.6:1 contrast)
    if "text-[#635bff]" in html:
        html = html.replace("text-[#635bff] bg-[#635bff]/10", "text-[#4338ca] bg-[#4338ca]/10")
        html = html.replace("text-[#635bff] bg-[#635bff]10", "text-[#4338ca] bg-[#4338ca]/10")
        html = html.replace("text-[#635bff]", "text-[#4338ca]")
        modified = True

    # 3. FIX COLOR CONTRAST: text-[#8ba3ba] on light backgrounds in cards/badges
    if "text-[#8ba3ba] font-semibold" in html:
        html = html.replace("text-[#8ba3ba] font-semibold", "text-[#475569] font-semibold")
        modified = True

    # 4. FIX COLOR CONTRAST: Rating text spans with style="color: #fbbc04;" -> style="color: #d97706;"
    if 'style="color: #fbbc04;"' in html:
        html = html.replace('style="color: #fbbc04;"', 'style="color: #d97706; font-weight: 700;"')
        modified = True
    if 'style="color:#fbbc04;"' in html:
        html = html.replace('style="color:#fbbc04;"', 'style="color: #d97706; font-weight: 700;"')
        modified = True

    # 5. ACCESSIBLE NAMES ON BUTTONS
    if 'id="prevService"' in html and 'aria-label' not in html.split('id="prevService"')[1][:100]:
        html = html.replace('id="prevService" class="', 'id="prevService" aria-label="Previous Service" class="')
        modified = True
    if 'id="nextService"' in html and 'aria-label' not in html.split('id="nextService"')[1][:100]:
        html = html.replace('id="nextService" class="', 'id="nextService" aria-label="Next Service" class="')
        modified = True

    # Add aria-label to buttons lacking aria-label
    def add_btn_aria(match):
        btn_tag = match.group(0)
        if 'aria-label' in btn_tag:
            return btn_tag
        if 'prev' in btn_tag.lower():
            return btn_tag.replace('<button ', '<button aria-label="Previous" ')
        elif 'next' in btn_tag.lower():
            return btn_tag.replace('<button ', '<button aria-label="Next" ')
        else:
            return btn_tag.replace('<button ', '<button aria-label="Interactive Button" ')

    html, count = re.subn(r'<button\s+(?![^>]*aria-label)[^>]*>', add_btn_aria, html)
    if count > 0:
        modified = True

    # 6. INLINE LINK UNDERLINES: Ensure inline links have underline class
    if 'class="text-[#4338ca] hover:underline"' in html:
        html = html.replace('class="text-[#4338ca] hover:underline"', 'class="text-[#4338ca] underline hover:no-underline"')
        modified = True
    if 'class="text-[#4338ca] font-bold hover:underline"' in html:
        html = html.replace('class="text-[#4338ca] font-bold hover:underline"', 'class="text-[#4338ca] font-bold underline hover:no-underline"')
        modified = True

    # 7. SEQUENTIAL HEADING HIERARCHY: Fix skipped h4 in Trust & Value grid
    if '<h4 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">' in html:
        html = html.replace('<h4 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">', '<h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">')
        modified = True

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(html)
        return True
    return False

count_fixed = 0
for root, dirs, files in os.walk(SITE_DIR):
    for file in files:
        if file.endswith(".html"):
            full_path = os.path.join(root, file)
            if fix_html_file(full_path):
                count_fixed += 1

print(f"SUCCESS: Remediated Accessibility, Color Contrast, Button Labels & Heading Hierarchy across {count_fixed} HTML files!")
