import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

REPLACEMENTS = [
    # 1. Color Contrast: Cyan badges
    ('text-[#0891b2]', 'text-[#0e7490]'),
    
    # 2. Color Contrast: Purple/Indigo badges & text on light bg
    ('text-[#635bff]', 'text-[#4338ca]'),
    
    # 3. Color Contrast: Light meta text
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

count_files = 0
count_mods = 0

for root, dirs, files in os.walk(SITE_DIR):
    # Skip node_modules or .git if any
    if '.git' in root or 'node_modules' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith(".html"):
            full_path = os.path.join(root, file)
            count_files += 1
            try:
                with open(full_path, "r", encoding="utf-8") as f:
                    content = f.read()
            except Exception:
                continue

            orig = content
            for search_str, replace_str in REPLACEMENTS:
                if search_str in content:
                    content = content.replace(search_str, replace_str)

            if content != orig:
                with open(full_path, "w", encoding="utf-8") as f:
                    f.write(content)
                count_mods += 1

print(f"SUCCESS: Processed {count_files} HTML files. Remediated accessibility & contrast issues in {count_mods} files!")
