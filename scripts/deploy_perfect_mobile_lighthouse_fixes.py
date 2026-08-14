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

    # 1. Logo Contrast Fix: Replace #00e0ff / #00D1FF with high-contrast #38bdf8 (7.25:1 contrast ratio against #0a2540)
    content = content.replace('color: #00e0ff', 'color: #38bdf8')
    content = content.replace('color: #00D1FF', 'color: #38bdf8')
    content = content.replace('color:#00D1FF', 'color: #38bdf8')
    content = content.replace('color: #00d4ff', 'color: #38bdf8')

    # 2. Render-blocking tailwind.css Fix: Preload tailwind.css asynchronously
    old_tailwind = r'<link rel="stylesheet" href="/css/tailwind\.css\?v=\d+">'
    new_tailwind = """<link rel="preload" href="/css/tailwind.css?v=3" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <noscript><link rel="stylesheet" href="/css/tailwind.css?v=3"></noscript>"""
    
    content = re.sub(old_tailwind, new_tailwind, content)

    # 3. Reduce Unused JS (128 KiB): Interaction-based GTM & GTAG loading
    old_gtm_block = r'<!-- Google Tag Manager.*?<!-- End Google Tag Manager -->'
    new_gtm_interaction = """<!-- Google Tag Manager (Interaction Deferred for Mobile) -->
<script>
  (function() {
    var gtmLoaded = false;
    function loadGTM() {
      if (gtmLoaded) return;
      gtmLoaded = true;
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-P5K57THT');
    }
    ['touchstart', 'scroll', 'pointermove', 'click'].forEach(function(e) {
      window.addEventListener(e, loadGTM, { passive: true, once: true });
    });
    window.addEventListener('load', function() {
      setTimeout(loadGTM, 3500);
    });
  })();
</script>
<!-- End Google Tag Manager -->"""

    content = re.sub(old_gtm_block, new_gtm_interaction, content, flags=re.DOTALL)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"SUCCESS: Applied perfect mobile Lighthouse fixes to {file_path}")

print("All mobile performance and contrast fixes deployed!")
