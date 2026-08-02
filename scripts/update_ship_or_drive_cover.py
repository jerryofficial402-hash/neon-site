import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

hero_img_path = "https://neonautotransport.com/images/should-i-ship-or-drive-hero.jpg"
hero_img_relative = "/images/should-i-ship-or-drive-hero.jpg"

alt_text = "Licensed auto transport carrier driver securing white sedan and blue SUV on commercial double-decker open car carrier trailer - Neon Auto Transport FMCSA broker USDOT 4355879"

# 1. Update should-i-ship-or-drive-my-car/index.html
pillar_file = os.path.join(SITE_DIR, "should-i-ship-or-drive-my-car", "index.html")
if os.path.exists(pillar_file):
    with open(pillar_file, "r", encoding="utf-8") as f:
        html = f.read()

    # Update OG and Twitter images
    html = html.replace(
        '<meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">',
        f'<meta property="og:image" content="{hero_img_path}">'
    )
    html = html.replace(
        '<meta name="twitter:image" content="https://neonautotransport.com/images/og-cover.jpg">',
        f'<meta name="twitter:image" content="{hero_img_path}">'
    )

    # Insert ImageObject JSON-LD Schema
    article_img_schema = f'''"image": {{
      "@type": "ImageObject",
      "url": "{hero_img_path}",
      "caption": "Professional car carrier driver securing vehicles on double-decker transport trailer",
      "description": "{alt_text}",
      "width": "1200",
      "height": "800"
    }},'''

    if '"image":' not in html:
        html = html.replace(
            '"headline": "Should You Ship or Drive Your Car? The Real Cost Breakeven",',
            '"headline": "Should You Ship or Drive Your Car? The Real Cost Breakeven",\n    ' + article_img_schema
        )

    # Insert High-Impact Hero Cover Photo right after date bar
    hero_image_html = f'''
        <!-- High-Impact Hero Cover Photo with EEAT & AEO Optimization -->
        <div class="mt-6 overflow-hidden rounded-3xl border border-[#e6e6e6] shadow-lg relative bg-[#0a2540]">
          <img src="{hero_img_relative}" alt="{alt_text}" class="w-full h-auto max-h-[500px] object-cover" width="1200" height="800" loading="eager" decoding="async">
          <div class="p-4 bg-white/95 backdrop-blur-md border-t border-[#e6e6e6] flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs text-[#425466]">
            <span class="font-bold text-[#0a2540] flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Verified Commercial Car Carrier Transport &amp; Professional Driver Tie-Down Audit
            </span>
            <span class="text-[11px] text-[#8ba3ba]">FMCSA Licensed &bull; USDOT #4355879 &bull; MC #1703787</span>
          </div>
        </div>
'''

    date_line_token = '<span>FMCSA License USDOT #4355879</span>\n        </div>'
    if date_line_token in html and hero_img_relative not in html:
        html = html.replace(date_line_token, date_line_token + "\n" + hero_image_html)
        print("Updated should-i-ship-or-drive-my-car/index.html with Hero Cover Photo!")

    with open(pillar_file, "w", encoding="utf-8") as f:
        f.write(html)

# 2. Update blog/index.html card image
blog_file = os.path.join(SITE_DIR, "blog", "index.html")
if os.path.exists(blog_file):
    with open(blog_file, "r", encoding="utf-8") as f:
        b_html = f.read()

    b_html = b_html.replace(
        '<img src="/images/open-auto-transport-hero.png" alt="Should you ship or drive your car background"',
        f'<img src="{hero_img_relative}" alt="{alt_text}"'
    )

    with open(blog_file, "w", encoding="utf-8") as f:
        f.write(b_html)
    print("Updated blog/index.html card thumbnail image for Should You Ship or Drive!")

# 3. Update build_should_i_ship_or_drive.py script
build_script = os.path.join(SITE_DIR, "scripts", "build_should_i_ship_or_drive.py")
if os.path.exists(build_script):
    with open(build_script, "r", encoding="utf-8") as f:
        s_code = f.read()

    s_code = s_code.replace('og:image" content="https://neonautotransport.com/images/og-cover.jpg"', f'og:image" content="{hero_img_path}"')
    s_code = s_code.replace('twitter:image" content="https://neonautotransport.com/images/og-cover.jpg"', f'twitter:image" content="{hero_img_path}"')
    
    date_token_s = '<span>FMCSA License USDOT #4355879</span>\n        </div>'
    hero_block_s = f'''<span>FMCSA License USDOT #4355879</span>
        </div>

        <!-- High-Impact Hero Cover Photo with EEAT & AEO Optimization -->
        <div class="mt-6 overflow-hidden rounded-3xl border border-[#e6e6e6] shadow-lg relative bg-[#0a2540]">
          <img src="{hero_img_relative}" alt="{alt_text}" class="w-full h-auto max-h-[500px] object-cover" width="1200" height="800" loading="eager" decoding="async">
          <div class="p-4 bg-white/95 backdrop-blur-md border-t border-[#e6e6e6] flex flex-col md:flex-row md:items-center justify-between gap-2 text-xs text-[#425466]">
            <span class="font-bold text-[#0a2540] flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              Verified Commercial Car Carrier Transport &amp; Professional Driver Tie-Down Audit
            </span>
            <span class="text-[11px] text-[#8ba3ba]">FMCSA Licensed &bull; USDOT #4355879 &bull; MC #1703787</span>
          </div>
        </div>'''
    
    if date_token_s in s_code and hero_img_relative not in s_code:
        s_code = s_code.replace(date_token_s, hero_block_s)

    with open(build_script, "w", encoding="utf-8") as f:
        f.write(s_code)
    print("Updated build script for Should You Ship or Drive!")

print("Ship or Drive cover photo update complete!")
