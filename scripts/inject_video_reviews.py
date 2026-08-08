import os
import re

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

# Perfect Light-Theme Framed Video Testimonials HTML Section
VIDEO_SECTION_PERFECT_HTML = """
    <!-- Verified Customer Video Reviews Section (Flawless Light Theme UI) -->
    <section id="video-reviews" class="py-10 my-8">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="bg-white p-6 md:p-8 rounded-3xl border border-[#e6e6e6] shadow-sm">
          
          <div class="text-center mb-8">
            <span class="inline-block text-[#635bff] text-xs font-bold uppercase tracking-widest mb-2 bg-[#635bff]/10 px-4 py-1.5 rounded-full">
              🎥 Customer Video Reviews
            </span>
            <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] tracking-tight">
              Watch Verified Customer Testimonials
            </h2>
            <p class="text-[#425466] text-xs md:text-sm mt-1">Real video feedback from customers who shipped their vehicles with Neon Auto Transport.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            
            <!-- Video 1: Jennifer (Ohio to California) -->
            <div class="bg-[#f6f9fc] rounded-2xl p-4 border border-[#e6e6e6] flex flex-col items-center text-center space-y-4 hover:shadow-md transition duration-300">
              <div class="w-full max-w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-md bg-black relative">
                <iframe 
                  src="https://www.youtube.com/embed/L0np-zBOnXE" 
                  title="Jennifer's Review - Ohio to California Car Shipping" 
                  class="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  loading="lazy">
                </iframe>
              </div>
              
              <div class="w-full space-y-2 text-left pt-1">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-[#635bff] bg-[#635bff]/10 px-2.5 py-1 rounded-md">Ohio &rarr; California</span>
                  <div class="flex text-amber-400 text-xs">★★★★★</div>
                </div>
                <h3 class="text-base font-bold text-[#0a2540]">Jennifer &bull; <span class="text-xs text-[#8ba3ba] font-semibold">Verified Customer</span></h3>
                <p class="text-xs text-[#425466] leading-relaxed italic">
                  "Jennifer sharing her real car shipping experience moving her vehicle safely from Ohio to California."
                </p>
                <a href="https://youtube.com/shorts/L0np-zBOnXE" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#635bff] hover:underline pt-1">
                  Watch on YouTube &rarr;
                </a>
              </div>
            </div>

            <!-- Video 2: Sam (Florida to California) -->
            <div class="bg-[#f6f9fc] rounded-2xl p-4 border border-[#e6e6e6] flex flex-col items-center text-center space-y-4 hover:shadow-md transition duration-300">
              <div class="w-full max-w-[240px] aspect-[9/16] rounded-xl overflow-hidden shadow-md bg-black relative">
                <iframe 
                  src="https://www.youtube.com/embed/muV1OxXCXUU" 
                  title="Sam's Review - Florida to California Car Shipping" 
                  class="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                  loading="lazy">
                </iframe>
              </div>
              
              <div class="w-full space-y-2 text-left pt-1">
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-bold uppercase tracking-wider text-[#635bff] bg-[#635bff]/10 px-2.5 py-1 rounded-md">Florida &rarr; California</span>
                  <div class="flex text-amber-400 text-xs">★★★★★</div>
                </div>
                <h3 class="text-base font-bold text-[#0a2540]">Sam &bull; <span class="text-xs text-[#8ba3ba] font-semibold">Verified Customer</span></h3>
                <p class="text-xs text-[#425466] leading-relaxed italic">
                  "Sam reviewing his 5-star door-to-door car transport experience shipping from Florida to California."
                </p>
                <a href="https://www.youtube.com/shorts/muV1OxXCXUU" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#635bff] hover:underline pt-1">
                  Watch on YouTube &rarr;
                </a>
              </div>
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
        html = re.sub(r'<section id="video-reviews".*?</section>', VIDEO_SECTION_PERFECT_HTML.strip(), html, flags=re.DOTALL)
        print(f"REPLACED WITH FLAWLESS LIGHT THEME UI: {rel_path}")
    else:
        # Inject if missing
        if "</head>" in html and "L0np-zBOnXE" not in html:
            html = html.replace("</head>", f"{VIDEO_SCHEMA_JSON}\n</head>")
        if 'id="reviews"' in html:
            html = html.replace('<section id="reviews"', f'{VIDEO_SECTION_PERFECT_HTML}\n<section id="reviews"')
        elif '</main>' in html:
            html = html.replace('</main>', f'{VIDEO_SECTION_PERFECT_HTML}\n</main>')
        print(f"INJECTED FLAWLESS LIGHT THEME UI: {rel_path}")
        
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(html)

print("\nFINISHED UPDATING VIDEO REVIEWS TO FLAWLESS MATCHING LIGHT THEME UI!")
