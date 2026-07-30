import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# 1. Update index.html with enhanced SiteNavigationElement and SearchAction Sitelinks Searchbox Schema
index_path = os.path.join(SITE_DIR, "index.html")

sitelinks_schema = """  <!-- JSON-LD: WebSite Sitelinks Searchbox & SiteNavigationElement -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://neonautotransport.com/#website",
        "url": "https://neonautotransport.com/",
        "name": "Neon Auto Transport",
        "description": "Nationwide Door-to-Door Auto Transport Services",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://neonautotransport.com/cost-calculator/?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://neonautotransport.com/#sitelinks",
        "name": "Primary Site Navigation Links",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Instant Quote Calculator",
            "description": "Calculate auto shipping rates instantly with zero upfront deposit.",
            "url": "https://neonautotransport.com/cost-calculator/"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Auto Transport Services",
            "description": "Explore open, enclosed, luxury, and door-to-door car shipping options.",
            "url": "https://neonautotransport.com/services/"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Why Choose Neon",
            "description": "Discover why thousands trust our FMCSA & USDOT licensed carriers.",
            "url": "https://neonautotransport.com/why-neon/"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Customer Reviews",
            "description": "Read verified 5-star customer reviews and transport experiences.",
            "url": "https://neonautotransport.com/reviews/"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "Florida Car Shipping Hub",
            "description": "Complete guide to shipping vehicles to and from top Florida cities.",
            "url": "https://neonautotransport.com/florida-car-shipping/"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 6,
            "name": "Contact Support",
            "description": "Get in touch with our dispatch team at (571) 576-7711.",
            "url": "https://neonautotransport.com/contact/"
          }
        ]
      }
    ]
  }
  </script>"""

with open(index_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace old SiteNavigationElement schema
content = re.sub(r'<!-- JSON-LD: SiteNavigationElement \(Encourage Sitelinks\) -->\s*<script type="application/ld\+json">.*?</script>', sitelinks_schema, content, flags=re.DOTALL)

with open(index_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated index.html with WebSite Sitelinks Searchbox & 6-target SiteNavigationElement schema!")

# 2. Add aria-label="Main Navigation" to header <nav> tags across all HTML files
html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)
updated_nav_count = 0

for filepath in html_files:
    rel = os.path.relpath(filepath, SITE_DIR).replace("\\", "/")
    if "node_modules" in rel or ".git" in rel:
        continue

    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        c = f.read()

    modified = False
    # Ensure header nav has aria-label
    if '<nav class="' in c and 'aria-label="Main Navigation"' not in c:
        c = c.replace('<nav class="hidden lg:flex', '<nav aria-label="Main Navigation" class="hidden lg:flex')
        c = c.replace('<nav class="flex items-center', '<nav aria-label="Breadcrumbs" class="flex items-center')
        modified = True

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(c)
        updated_nav_count += 1

print(f"Added accessibility & SEO aria-label attributes to navigation tags in {updated_nav_count} files!")
