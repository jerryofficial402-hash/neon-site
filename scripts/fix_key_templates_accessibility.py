import os
import glob

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

REPLACEMENTS = [
    # 1. Color Contrast: Cyan badges (text-[#0891b2] -> text-[#0e7490])
    ('text-[#0891b2]', 'text-[#0e7490]'),
    
    # 2. Color Contrast: Purple/Indigo badges & text on light bg (text-[#635bff] -> text-[#4338ca])
    ('text-[#635bff] bg-[#635bff]/10', 'text-[#4338ca] bg-[#4338ca]/10'),
    ('text-[#635bff] bg-[#635bff]10', 'text-[#4338ca] bg-[#4338ca]/10'),
    ('text-[#635bff]', 'text-[#4338ca]'),
    
    # 3. Color Contrast: Light meta text (text-[#8ba3ba] -> text-[#475569])
    ('text-[#8ba3ba] font-semibold', 'text-[#475569] font-semibold'),
    ('text-[#8ba3ba] font-medium', 'text-[#475569] font-medium'),
    ('text-[#8ba3ba] font-bold', 'text-[#334155] font-bold'),
    
    # 4. Color Contrast: Rating text
    ('style="color: #fbbc04;"', 'style="color: #d97706; font-weight: 700;"'),
    ('style="color:#fbbc04;"', 'style="color: #d97706; font-weight: 700;"'),
    
    # 5. Buttons Accessible Names (aria-label)
    ('id="prevService" class="', 'id="prevService" aria-label="Previous Transport Service" class="'),
    ('id="nextService" class="', 'id="nextService" aria-label="Next Transport Service" class="'),
    
    # 6. Inline Links Relying Solely on Color
    ('class="text-[#4338ca] hover:underline"', 'class="text-[#4338ca] underline hover:no-underline"'),
    ('class="text-[#4338ca] font-bold hover:underline"', 'class="text-[#4338ca] font-bold underline hover:no-underline"'),
    ('class="text-[#4338ca] font-semibold text-xs uppercase tracking-wider hover:underline"', 'class="text-[#4338ca] font-bold text-xs uppercase tracking-wider underline hover:no-underline"'),
    
    # 7. Heading Hierarchy: FMCSA & Trust Grid h4 -> h3
    ('<h4 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">FMCSA Approved</h4>', '<h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">FMCSA Approved</h3>'),
    ('<h4 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Full Insurance Coverage</h4>', '<h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Full Insurance Coverage</h3>'),
    ('<h4 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Guaranteed Pick Up</h4>', '<h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Guaranteed Pick Up</h3>'),
    ('<h4 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Real-Time Updates</h4>', '<h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Real-Time Updates</h3>')
]

# Use glob to get top-level and subfolder index.html files directly
html_files = glob.glob(os.path.join(SITE_DIR, "*.html")) + glob.glob(os.path.join(SITE_DIR, "*", "*.html"))

mods = 0
for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception:
        continue

    orig = content
    for search_str, replace_str in REPLACEMENTS:
        if search_str in content:
            content = content.replace(search_str, replace_str)

    if content != orig:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        mods += 1

print(f"SUCCESS: Processed {len(html_files)} template HTML files. Remediated accessibility & contrast in {mods} files!")
