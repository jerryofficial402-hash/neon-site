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

# HTML Section for Video Reviews
VIDEO_SECTION_HTML = """
    <!-- Verified Video Reviews Section -->
    <section id="video-reviews" class="py-12 md:py-16 bg-[#0a2540] text-white relative overflow-hidden my-8 rounded-3xl border border-[#ffffff15] shadow-2xl">
      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00d4ff20] border border-[#00d4ff40] text-[#00d4ff] text-xs font-bold uppercase tracking-wider mb-3">
            <span>🎥 Authentic Customer Stories</span> &bull; <span>Verified Video Proof</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            Watch Real Customers Review Neon Auto Transport
          </h2>
          <p class="text-[#8ba3ba] text-sm md:text-base max-w-2xl mx-auto">
            See real video testimonials from customers who shipped their vehicles across the country with $0 deposit and 5-star service.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <!-- Video 1: Jennifer (Ohio to California) -->
          <div class="bg-[#113054] rounded-3xl p-5 border border-[#ffffff15] shadow-xl flex flex-col items-center hover:border-[#00d4ff] transition duration-300">
            <div class="w-full mb-4 relative rounded-2xl overflow-hidden shadow-inner bg-black" style="aspect-ratio: 9/16; max-height: 480px;">
              <iframe 
                src="https://www.youtube.com/embed/L0np-zBOnXE" 
                title="Jennifer's Review - Ohio to California Car Shipping" 
                class="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy">
              </iframe>
            </div>
            
            <div class="w-full space-y-2 text-left pt-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-[#00d4ff] bg-[#00d4ff15] px-3 py-1 rounded-md">Ohio &rarr; California</span>
                <div class="flex text-amber-400 text-sm">★★★★★</div>
              </div>
              <h3 class="text-lg font-black text-white">Jennifer &bull; <span class="text-xs font-semibold text-[#8ba3ba]">Verified Customer</span></h3>
              <p class="text-xs text-[#8ba3ba] leading-relaxed italic">
                "Jennifer sharing her real car shipping experience moving her vehicle safely from Ohio to California."
              </p>
              <a href="https://youtube.com/shorts/L0np-zBOnXE" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#00d4ff] hover:underline pt-1">
                Watch on YouTube &rarr;
              </a>
            </div>
          </div>

          <!-- Video 2: Sam (Florida to California) -->
          <div class="bg-[#113054] rounded-3xl p-5 border border-[#ffffff15] shadow-xl flex flex-col items-center hover:border-[#00d4ff] transition duration-300">
            <div class="w-full mb-4 relative rounded-2xl overflow-hidden shadow-inner bg-black" style="aspect-ratio: 9/16; max-height: 480px;">
              <iframe 
                src="https://www.youtube.com/embed/muV1OxXCXUU" 
                title="Sam's Review - Florida to California Car Shipping" 
                class="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy">
              </iframe>
            </div>
            
            <div class="w-full space-y-2 text-left pt-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-[#00d4ff] bg-[#00d4ff15] px-3 py-1 rounded-md">Florida &rarr; California</span>
                <div class="flex text-amber-400 text-sm">★★★★★</div>
              </div>
              <h3 class="text-lg font-black text-white">Sam &bull; <span class="text-xs font-semibold text-[#8ba3ba]">Verified Customer</span></h3>
              <p class="text-xs text-[#8ba3ba] leading-relaxed italic">
                "Sam reviewing his 5-star door-to-door car transport experience shipping from Florida to California."
              </p>
              <a href="https://www.youtube.com/shorts/muV1OxXCXUU" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-[#00d4ff] hover:underline pt-1">
                Watch on YouTube &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
"""

# Pages to inject into
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
        
    # Check if already injected
    if "L0np-zBOnXE" in html:
        print(f"Already contains video reviews: {rel_path}")
        continue
        
    # 1. Inject JSON-LD Schema before </head>
    if "</head>" in html:
        html = html.replace("</head>", f"{VIDEO_SCHEMA_JSON}\n</head>")
        
    # 2. Inject Video Section HTML into main body or above reviews
    if 'id="reviews"' in html:
        html = html.replace('<section id="reviews"', f'{VIDEO_SECTION_HTML}\n<section id="reviews"')
    elif 'id="author-byline"' in html:
        html = html.replace('<section class="container mx-auto px-4 lg:px-8 max-w-4xl py-6" id="author-byline">', f'{VIDEO_SECTION_HTML}\n<section class="container mx-auto px-4 lg:px-8 max-w-4xl py-6" id="author-byline">')
    elif '</main>' in html:
        html = html.replace('</main>', f'{VIDEO_SECTION_HTML}\n</main>')
    else:
        print(f"Could not find anchor for HTML insertion in {rel_path}")
        continue
        
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(html)
        
    print(f"SUCCESS: Injected Video Reviews & Schema into {rel_path}")

print("\nFINISHED INJECTING VIDEO REVIEWS ACROSS SITE!")
