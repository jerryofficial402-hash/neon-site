import os
import shutil
import re

# 1. Source Image Path
SRC_IMG = r"C:\Users\DYNABOOK\.gemini\antigravity\brain\5f8bf77f-bbf0-4260-abcb-110c028b6bb5\.user_uploaded\media_1786641643612.jpg"

# 2. Target Image Path
DEST_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\images"
os.makedirs(DEST_DIR, exist_ok=True)
DEST_IMG_NAME = "ferrari-enclosed-auto-transport-california-texas.jpg"
DEST_IMG_PATH = os.path.join(DEST_DIR, DEST_IMG_NAME)

shutil.copy2(SRC_IMG, DEST_IMG_PATH)
print(f"SUCCESS: Copied user image to {DEST_IMG_PATH}")

# 3. Update routes/california-to-texas-enclosed/index.html
ROUTE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\california-to-texas-enclosed\index.html"

with open(ROUTE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace image showcase in Section 1 (Overview Section)
old_img_showcase = r'''            <div class="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img loading="lazy" src="/images/true-cost-car-shipping-2026.webp" alt="Enclosed carrier transporting luxury vehicles from California to Texas" class="w-full h-64 lg:h-72 object-cover transform group-hover:scale-105 transition duration-500">
              <div class="absolute bottom-4 left-4 bg-[#0a2540]/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-white/20 shadow-lg">
                📍 1,500 Miles | California to Texas Corridor
              </div>
            </div>'''

new_img_showcase = r'''            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group bg-[#0a2540]">
              <img loading="eager" itemprop="image" src="/images/ferrari-enclosed-auto-transport-california-texas.jpg" alt="Enclosed car shipping red Ferrari supercar secured with soft-tie straps inside climate-controlled hard-sided trailer on California to Texas route" title="Red Ferrari Exotic Vehicle Enclosed Shipping California to Texas" class="w-full h-72 lg:h-80 object-cover transform group-hover:scale-105 transition duration-500" width="1200" height="1200">
              <!-- High Impact Visual Badges for AEO & GEO -->
              <div class="absolute top-4 left-4 bg-[#39FF14] text-[#0a2540] text-xs font-black px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#0a2540] animate-pulse"></span> Hard-Sided Enclosed Trailer
              </div>
              <div class="absolute bottom-4 left-4 right-4 bg-[#0a2540]/90 backdrop-blur-md text-white text-xs font-bold p-3 rounded-xl border border-white/20 shadow-xl flex items-center justify-between">
                <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> Soft-Tie Wheel Straps</span>
                <span class="text-[#00D1FF] font-black">📍 CA &rarr; TX Corridor</span>
              </div>
            </div>'''

content = content.replace(old_img_showcase, new_img_showcase)

# Also update schema graph to include ImageObject Schema for AEO/GEO/SEO
image_schema = '''  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "@id": "https://neonautotransport.com/images/ferrari-enclosed-auto-transport-california-texas.jpg#primaryimage",
    "url": "https://neonautotransport.com/images/ferrari-enclosed-auto-transport-california-texas.jpg",
    "contentUrl": "https://neonautotransport.com/images/ferrari-enclosed-auto-transport-california-texas.jpg",
    "caption": "Red Ferrari supercar secured with soft-tie wheel straps inside hard-sided enclosed carrier trailer on California to Texas route",
    "description": "Professional enclosed car shipping for luxury, exotic, and classic vehicles from California to Texas via Interstate 10 corridor with $500,000 cargo insurance coverage.",
    "name": "Enclosed Car Shipping Ferrari California to Texas",
    "representativeOfPage": true,
    "author": {
      "@type": "Organization",
      "name": "Neon Auto Transport LLC"
    }
  }
  </script>'''

if 'ImageObject' not in content:
    content = content.replace('</head>', f'{image_schema}\n</head>')

with open(ROUTE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Updated routes/california-to-texas-enclosed/index.html with Ferrari image and AEO/GEO/SEO schema!")
