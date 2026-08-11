import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# 1. Responsive mobile header fixes for style tag
MOBILE_HEADER_STYLE_FIX = """  /* Mobile Header & Layout Fixes */
  @media (max-width: 1023px) {
   html, body {
    overflow-x: clip !important;
    max-width: 100vw !important;
   }
   
   #global-header .container {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
   }
   
   #logo-text {
    font-size: 1.05rem !important;
    letter-spacing: -0.02em !important;
    white-space: nowrap !important;
    line-height: 1.2 !important;
    max-width: none !important;
    font-weight: 900 !important;
   }
   
   #mobile-menu-btn {
    position: relative !important;
    z-index: 9999 !important;
    pointer-events: auto !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.35rem !important;
   }
   
   #mobile-menu {
    position: absolute !important;
    width: 100% !important;
    left: 0 !important;
    top: 100% !important;
    z-index: 9999 !important;
    max-height: calc(100vh - 70px) !important;
    overflow-y: auto !important;
    background-color: #0a2540 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4) !important;
   }

   #mobile-menu a {
    color: #e2e8f0 !important;
    text-decoration: none !important;
   }

   #mobile-menu a:hover {
    color: #00D1FF !important;
   }

   #mobile-menu a.mobile-phone-btn {
    background-color: #ffc72c !important;
    color: #0a2540 !important;
    font-weight: 900 !important;
   }
  }"""

html_files = glob.glob(os.path.join(SITE_DIR, "*.html")) + glob.glob(os.path.join(SITE_DIR, "*", "*.html"))

patched = 0
for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception:
        continue

    modified = False

    # Fix CSS in mobile-fixes style tag
    if 'id="mobile-fixes"' in content:
        content = re.sub(
            r'<style id="mobile-fixes">.*?</style>',
            f'<style id="mobile-fixes">\n{MOBILE_HEADER_STYLE_FIX}\n </style>',
            content,
            flags=re.DOTALL
        )
        modified = True

    # Ensure header contains quick mobile call button before mobile-menu-btn if not already present
    if 'id="mobile-menu-btn"' in content and 'mobile-header-call-btn' not in content:
        mobile_call_button = """<a href="tel:5715767711" aria-label="Call Neon Auto Transport" id="mobile-header-call-btn" class="lg:hidden flex items-center justify-center w-9 h-9 rounded-full bg-[#ffc72c] text-[#0a2540] font-black shadow-md hover:scale-105 transition" style="width: 36px; height: 36px; border-radius: 50%; background-color: #ffc72c; color: #0a2540; display: inline-flex; align-items: center; justify-content: center; text-decoration: none; margin-right: 0.5rem;">
     <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style="width: 16px; height: 16px;"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
    </a>\n    <button id="mobile-menu-btn" """
        content = content.replace('<button id="mobile-menu-btn"', mobile_call_button)
        modified = True

    # Update #mobile-menu HTML to be dark themed & feature solid gold phone button
    if '<div id="mobile-menu"' in content:
        updated_mobile_menu = """<div id="mobile-menu" class="hidden lg:hidden bg-[#0a2540] border-t border-white/10 flex flex-col p-5 space-y-4 text-center font-semibold text-slate-200 shadow-2xl">
    <a href="/#how-it-works" class="py-2 hover:text-[#00D1FF] transition">How it works</a>
    <a href="/services/" class="py-2 hover:text-[#00D1FF] transition">Transport Options</a>
    <a href="/why-neon/" class="py-2 hover:text-[#00D1FF] transition">Why Neon</a>
    <a href="/reviews/" class="py-2 hover:text-[#00D1FF] transition">Customer Reviews</a>
    <a href="/contact.html" class="py-2 hover:text-[#00D1FF] transition">Contact Us</a>
    <hr class="border-white/10 my-2">
    <a href="tel:5715767711" class="mobile-phone-btn flex items-center justify-center gap-2 bg-[#ffc72c] text-[#0a2540] py-3.5 px-4 rounded-xl font-black text-base shadow-md" style="background-color: #ffc72c; color: #0a2540; font-weight: 900; text-decoration: none;">
     <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
     (571) 576-7711
    </a>
    <a href="/cost-calculator/" class="btn-primary inline-block mx-auto py-3 px-6 text-sm font-bold rounded-full text-white" style="text-decoration: none;">Cost Calculator &rarr;</a>
   </div>"""
        content = re.sub(r'<div id="mobile-menu"[^>]*>.*?</div>', updated_mobile_menu, content, flags=re.DOTALL)
        modified = True

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        patched += 1

print(f"SUCCESS: Patched mobile header layout, quick call button, and dark menu styling across {patched} HTML files!")
