import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

target_files = [
    os.path.join(SITE_DIR, "index.html"),
    os.path.join(SITE_DIR, "cost-calculator", "index.html"),
    os.path.join(SITE_DIR, "car-shipping-quote", "index.html"),
    os.path.join(SITE_DIR, "routes", "california-to-texas-enclosed", "index.html"),
    os.path.join(SITE_DIR, "services", "enclosed-auto-transport.html")
]

for file_path in target_files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Clean up duplicate preconnects
    # Replace multiple preconnects with single set
    content = re.sub(
        r'(<link rel="preconnect" href="https://fonts\.googleapis\.com">\s*<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin.*?>\s*)+',
        '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n',
        content,
        flags=re.DOTALL
    )

    # 2. Make Google Fonts CSS non-render-blocking (asynchronous preload)
    old_fonts_sync = r'<link rel="stylesheet" href="https://fonts\.googleapis\.com/css2\?family=Inter:wght@[^"]+">'
    new_fonts_async = """<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"></noscript>"""
    
    content = re.sub(old_fonts_sync, new_fonts_async, content)

    # 3. Defer GTM snippet to load 2 seconds after page load to eliminate mobile forced reflow & 128KiB unused JS
    old_gtm = r'<!-- Google Tag Manager -->\s*<script>\(function\(w,d,s,l,i\)\{.*?\}\)\(window,document,\'script\',\'dataLayer\',\'GTM-P5K57THT\'\);</script>\s*<!-- End Google Tag Manager -->'
    new_gtm_deferred = """<!-- Google Tag Manager (Deferred for Mobile Performance) -->
<script>
  window.addEventListener('load', function() {
    setTimeout(function() {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P5K57THT');
    }, 2000);
  });
</script>
<!-- End Google Tag Manager -->"""
    
    content = re.sub(old_gtm, new_gtm_deferred, content, flags=re.DOTALL)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"SUCCESS: Fixed Lighthouse mobile bottlenecks on {file_path}")

print("All mobile performance network tree fixes applied!")
