import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# JSON-LD Schema for VideoObjects & Reviews
VIDEO_SCHEMA_JSON = """
  <!-- JSON-LD: Verified Customer Video Reviews (VideoObject + Review Schema for AI & Google Search) -->
  <script type="application/ld+json">
  [
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Jennifer's Neon Auto Transport Review - Ohio to California Car Shipping",
      "description": "Watch Jennifer's verified 5-star video review detailing her seamless car shipping experience from Ohio to California with Neon Auto Transport.",
      "thumbnailUrl": "https://img.youtube.com/vi/L0np-zBOnXE/hqdefault.jpg",
      "uploadDate": "2026-08-01",
      "embedUrl": "https://www.youtube.com/embed/L0np-zBOnXE",
      "contentUrl": "https://youtube.com/shorts/L0np-zBOnXE",
      "publisher": {
        "@type": "Organization",
        "name": "Neon Auto Transport LLC",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neonautotransport.com/images/logo.png"
        }
      },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Jennifer" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Verified customer video review for Neon Auto Transport vehicle shipping from Ohio to California."
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Sam's Neon Auto Transport Review - Florida to California Car Shipping",
      "description": "Watch Sam's verified 5-star video review sharing his door-to-door car transport experience from Florida to California with Neon Auto Transport.",
      "thumbnailUrl": "https://img.youtube.com/vi/muV1OxXCXUU/hqdefault.jpg",
      "uploadDate": "2026-08-01",
      "embedUrl": "https://www.youtube.com/embed/muV1OxXCXUU",
      "contentUrl": "https://www.youtube.com/shorts/muV1OxXCXUU",
      "publisher": {
        "@type": "Organization",
        "name": "Neon Auto Transport LLC",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neonautotransport.com/images/logo.png"
        }
      },
      "review": {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sam" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Verified customer video review for Neon Auto Transport vehicle shipping from Florida to California."
      }
    }
  ]
  </script>
"""

# New Ultra-Compact, Sleek 1-Frame Horizontal Video Section HTML
VIDEO_SECTION_COMPACT_HTML = """
    <!-- Verified Video Reviews Section (Compact 1-Frame Layout) -->
    <section id="video-reviews" class="py-8 px-4 bg-[#0a2540] text-white relative overflow-hidden my-8 rounded-2xl border border-[#ffffff15] shadow-xl">
      <div class="container mx-auto max-w-5xl relative z-10">
        
        <div class="text-center mb-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00d4ff15] border border-[#00d4ff30] text-[#00d4ff] text-[11px] font-bold uppercase tracking-wider mb-2">
            <span>🎥 Verified Customer Videos</span> &bull; <span>5.0★ Verified Proof</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-white tracking-tight">
            Watch Real Customer Reviews
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          
          <!-- Video Card 1: Jennifer (Ohio to California) -->
          <div class="bg-[#113054] rounded-xl p-3.5 border border-[#ffffff15] shadow-md flex flex-row items-center gap-3.5 hover:border-[#00d4ff] transition duration-300">
            <div class="w-[120px] sm:w-[135px] h-[220px] rounded-lg overflow-hidden bg-black flex-shrink-0 relative shadow">
              <iframe 
                src="https://www.youtube.com/embed/L0np-zBOnXE" 
                title="Jennifer's Review - Ohio to California" 
                class="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy">
              </iframe>
            </div>
            
            <div class="flex-1 space-y-1.5 text-left">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#00d4ff] bg-[#00d4ff15] px-2 py-0.5 rounded">OH &rarr; CA</span>
                <div class="flex text-amber-400 text-xs">★★★★★</div>
              </div>
              <h3 class="text-base font-bold text-white">Jennifer</h3>
              <p class="text-xs text-[#8ba3ba] leading-snug italic">
                "Relocating from Ohio to California — seamless car shipping experience with zero deposit."
              </p>
              <a href="https://youtube.com/shorts/L0np-zBOnXE" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#00d4ff] hover:underline pt-1">
                Watch Full Video &rarr;
              </a>
            </div>
          </div>

          <!-- Video Card 2: Sam (Florida to California) -->
          <div class="bg-[#113054] rounded-xl p-3.5 border border-[#ffffff15] shadow-md flex flex-row items-center gap-3.5 hover:border-[#00d4ff] transition duration-300">
            <div class="w-[120px] sm:w-[135px] h-[220px] rounded-lg overflow-hidden bg-black flex-shrink-0 relative shadow">
              <iframe 
                src="https://www.youtube.com/embed/muV1OxXCXUU" 
                title="Sam's Review - Florida to California" 
                class="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy">
              </iframe>
            </div>
            
            <div class="flex-1 space-y-1.5 text-left">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#00d4ff] bg-[#00d4ff15] px-2 py-0.5 rounded">FL &rarr; CA</span>
                <div class="flex text-amber-400 text-xs">★★★★★</div>
              </div>
              <h3 class="text-base font-bold text-white">Sam</h3>
              <p class="text-xs text-[#8ba3ba] leading-snug italic">
                "5-star door-to-door car transport moving my vehicle safely from Florida to California."
              </p>
              <a href="https://www.youtube.com/shorts/muV1OxXCXUU" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#00d4ff] hover:underline pt-1">
                Watch Full Video &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
"""

TARGET_PAGES = [
    "index.html",
    "reviews.html",
    os.path.join("california-car-shipping", "index.html"),
    os.path.join("florida-car-shipping", "index.html"),
    os.path.join("ohio-car-shipping", "index.html"),
    os.path.join("florida-to-california-car-shipping", "index.html"),
    os.path.join("ohio-to-california-car-shipping", "index.html"),
    os.path.join("california-to-florida-car-shipping", "index.html")
]

for rel_path in TARGET_PAGES:
    full_path = os.path.join(SITE_DIR, rel_path)
    if not os.path.exists(full_path):
        print(f"Skipping (not found): {rel_path}")
        continue
        
    with open(full_path, "r", encoding="utf-8") as f:
        html = f.read()
        
    # Replace existing video section if present
    if '<section id="video-reviews"' in html:
        # Match from <section id="video-reviews" down to </section>
        import re
        html = re.sub(r'<section id="video-reviews".*?</section>', VIDEO_SECTION_COMPACT_HTML.strip(), html, flags=re.DOTALL)
        print(f"REPLACED WITH COMPACT 1-FRAME UI: {rel_path}")
    else:
        # Inject if missing
        if "</head>" in html and "L0np-zBOnXE" not in html:
            html = html.replace("</head>", f"{VIDEO_SCHEMA_JSON}\n</head>")
        if 'id="reviews"' in html:
            html = html.replace('<section id="reviews"', f'{VIDEO_SECTION_COMPACT_HTML}\n<section id="reviews"')
        elif '</main>' in html:
            html = html.replace('</main>', f'{VIDEO_SECTION_COMPACT_HTML}\n</main>')
        print(f"INJECTED NEW COMPACT UI: {rel_path}")
        
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(html)

print("\nFINISHED UPDATING VIDEO REVIEWS TO COMPACT 1-FRAME BEAUTIFUL UI!")
