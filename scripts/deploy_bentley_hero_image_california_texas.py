import os
import shutil
import re

USER_UPLOADED_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\brain\5f8bf77f-bbf0-4260-abcb-110c028b6bb5\.user_uploaded"
DEST_IMAGE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\images\bentley-enclosed-car-shipping-california-texas.jpg"
PAGE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\california-to-texas-enclosed\index.html"

# Find the latest user uploaded image
files = [os.path.join(USER_UPLOADED_DIR, f) for f in os.listdir(USER_UPLOADED_DIR) if f.startswith("media_")]
files.sort(key=os.path.getmtime, reverse=True)
latest_image = files[0]

print(f"Copying {latest_image} -> {DEST_IMAGE_PATH}")
shutil.copy2(latest_image, DEST_IMAGE_PATH)

# Read page content
with open(PAGE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Hero Image HTML with rich AEO / GEO / SEO / EEAT alt, title, loading, glassmorphic badges
new_hero_image_card = """<div class="lg:w-1/2 relative z-10 w-full">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform hover:scale-[1.01] transition duration-500 bg-[#0a2540] group">
              <img loading="eager" src="/images/bentley-enclosed-car-shipping-california-texas.jpg" alt="Bentley luxury SUV loaded into hydraulic liftgate enclosed hauler trailer on California to Texas shipping route" title="Enclosed Auto Transport California to Texas — Hard-Sided Carrier with Liftgate" class="w-full h-auto object-cover rounded-2xl" width="1200" height="675">
              
              <!-- High Impact Glassmorphic AEO / GEO Badges -->
              <div class="absolute top-4 left-4 bg-[#0a2540]/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-xl border border-white/20 shadow-xl flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></span>
                <span>📍 CA to TX Interstate Corridor</span>
              </div>
              <div class="absolute bottom-4 left-4 right-4 bg-[#0a2540]/95 backdrop-blur-md text-white text-xs font-semibold p-3.5 rounded-xl border border-white/20 shadow-2xl flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-[#39FF14] font-black">🛡️ $500K</span>
                  <span>Full Replacement Coverage</span>
                </div>
                <span class="px-2.5 py-1 bg-[#39FF14]/20 text-[#39FF14] font-black rounded-lg text-[11px] uppercase tracking-wider">$0 Deposit</span>
              </div>
            </div>
          </div>"""

# Replace old hero image card in HTML
content = re.sub(
    r'<div class="lg:w-1/2 relative z-10 w-full">\s*<div class="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20.*?\s*</div>\s*</div>',
    new_hero_image_card,
    content,
    flags=re.DOTALL
)

# 2. Update JSON-LD ImageObject Schema for Hero Bentley Photo
new_hero_image_schema = """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": "https://neonautotransport.com/images/bentley-enclosed-car-shipping-california-texas.jpg#primaryimage",
    "url": "https://neonautotransport.com/images/bentley-enclosed-car-shipping-california-texas.jpg",
    "contentUrl": "https://neonautotransport.com/images/bentley-enclosed-car-shipping-california-texas.jpg",
    "caption": "Luxury orange Bentley SUV loaded onto hydraulic ramp of hard-sided enclosed auto transport trailer at sunset on California to Texas route",
    "description": "Professional enclosed car shipping for luxury, exotic, and classic vehicles from California to Texas via Interstate 10 corridor with $500,000 cargo insurance and hydraulic liftgate protection.",
    "name": "Enclosed Car Shipping Bentley California to Texas",
    "representativeOfPage": true,
    "author": {
      "@type": "Organization",
      "name": "Neon Auto Transport LLC"
    }
  }
  </script>"""

# Replace old ImageObject schema
content = re.sub(
    r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": "ImageObject".*?</script>',
    new_hero_image_schema.strip(),
    content,
    flags=re.DOTALL
)

# Also update Open Graph & Twitter Card Image Tags in <head>
content = re.sub(
    r'<meta property="og:image" content="[^"]+">',
    '<meta property="og:image" content="https://neonautotransport.com/images/bentley-enclosed-car-shipping-california-texas.jpg">',
    content
)

content = re.sub(
    r'<meta name="twitter:image" content="[^"]+">',
    '<meta name="twitter:image" content="https://neonautotransport.com/images/bentley-enclosed-car-shipping-california-texas.jpg">',
    content
)

with open(PAGE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Deployed new Bentley Hero photo asset, AEO/GEO/SEO badges, Open Graph tags, and JSON-LD ImageObject schema!")
