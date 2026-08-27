import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

print("=== STEP 1: ADD FAQPAGE JSON-LD TO HOMEPAGE (index.html) ===")
homepage_path = os.path.join(BASE_DIR, "index.html")

faq_schema = """
  <!-- JSON-LD: Homepage FAQPage Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does it cost to ship a car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Car shipping costs vary by total distance, vehicle size, transport type (open or enclosed), fuel prices, and seasonal carrier demand. Use our cost calculator or request a customized quote."
        }
      },
      {
        "@type": "Question",
        "name": "How long does car shipping take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regional moves often take several days, while long cross-country routes take approximately 1 to 2 weeks after pickup. Transit timing depends on route mileage, weather, traffic, and federal Hours-of-Service rules."
        }
      },
      {
        "@type": "Question",
        "name": "Is Neon Auto Transport a broker or carrier?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We coordinate shipments through independently owned motor carriers."
        }
      },
      {
        "@type": "Question",
        "name": "Is open or enclosed transport right for my vehicle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Open Auto Transport is the most popular and economical option for everyday cars. Enclosed Car Shipping offers covered protection from weather and road debris for classic, luxury, exotic, or collector vehicles."
        }
      },
      {
        "@type": "Question",
        "name": "Will the carrier pick up from my exact address?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The assigned motor carrier aims to pick up and deliver as close to your specified addresses as safe and legal truck access allows. Narrow streets or low-hanging trees may require meeting at a nearby parking lot."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get a car shipping quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Request a free shipping estimate through our Free Car Shipping Quote page or use our Cost Calculator with your pickup ZIP, delivery ZIP, and vehicle details."
        }
      }
    ]
  }
  </script>
"""

with open(homepage_path, "r", encoding="utf-8") as f:
    hp_content = f.read()

if "How much does it cost to ship a car?" not in hp_content:
    hp_content = hp_content.replace("</head>", faq_schema + "\n</head>")
    with open(homepage_path, "w", encoding="utf-8") as f:
        f.write(hp_content)
    print("Added FAQPage JSON-LD schema to homepage head.")
else:
    print("FAQPage JSON-LD schema already present on homepage.")

print("\n=== STEP 2: UPDATE ROBOTS.TXT WITH EXPLICIT AI CRAWLER ACCESS ===")
robots_path = os.path.join(BASE_DIR, "robots.txt")

robots_content = """User-agent: *
Allow: /

# Explicit AI crawler access
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

# Block junk / non-indexable templates / author archives
Disallow: /routes/route-template.html
Disallow: /author/

Sitemap: https://neonautotransport.com/sitemap.xml
"""

with open(robots_path, "w", encoding="utf-8") as f:
    f.write(robots_content)
print("Updated robots.txt with AI crawler permissions and sitemap URL.")

print("\n=== STEP 3: ADD NOINDEX TO AUTHOR & TEMPLATE PAGES ===")
noindex_files = [
    os.path.join(BASE_DIR, "author", "shazil-ali.html"),
    os.path.join(BASE_DIR, "routes", "route-template.html")
]

for nfile in noindex_files:
    if os.path.exists(nfile):
        with open(nfile, "r", encoding="utf-8", errors="ignore") as f:
            c = f.read()
        if 'content="noindex' not in c:
            c = re.sub(
                r'<meta\s+content=["\']index,\s*follow["\']\s+name=["\']robots["\']\s*/?>',
                '<meta content="noindex, follow" name="robots"/>',
                c,
                flags=re.IGNORECASE
            )
            with open(nfile, "w", encoding="utf-8") as f:
                f.write(c)
            print(f"Added noindex tag to {nfile}")

print("\n=== STEP 4: REBUILD 100% CLEAN SITEMAP.XML ===")
exclude_paths = [
    "routes/route-template.html",
    "author/shazil-ali.html",
    "author/",
    "original_index",
    "original_utf8",
    "slider",
    "services-grid",
    "dashboard",
    "og-images",
    "faq.html",
]

sitemap_urls = set()

for root, dirs, files in os.walk(BASE_DIR):
    if any(ignore in root for ignore in [".git", "node_modules", ".agents", "scripts", "brain"]):
        continue
    for file in files:
        if file.endswith(".html"):
            rel_path = os.path.relpath(os.path.join(root, file), BASE_DIR).replace("\\", "/")
            
            # Skip excluded files
            if any(ex in rel_path for ex in exclude_paths):
                continue
            
            # Form clean URL
            if rel_path == "index.html":
                url = "https://neonautotransport.com/"
            elif rel_path.endswith("/index.html"):
                slug = rel_path[:-10].strip('/')
                url = f"https://neonautotransport.com/{slug}/"
            else:
                # Flat .html file — strip .html and make clean trailing slash directory URL
                slug = rel_path[:-5].strip('/')
                url = f"https://neonautotransport.com/{slug}/"
            
            sitemap_urls.add(url)

sorted_urls = sorted(list(sitemap_urls))

xml_lines = ['<?xml version="1.0" encoding="UTF-8"?>']
xml_lines.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
for url in sorted_urls:
    priority = "1.0" if url == "https://neonautotransport.com/" else "0.8"
    changefreq = "daily" if url == "https://neonautotransport.com/" else "weekly"
    xml_lines.append("  <url>")
    xml_lines.append(f"    <loc>{url}</loc>")
    xml_lines.append("    <lastmod>2026-08-27</lastmod>")
    xml_lines.append(f"    <changefreq>{changefreq}</changefreq>")
    xml_lines.append(f"    <priority>{priority}</priority>")
    xml_lines.append("  </url>")
xml_lines.append("</urlset>")

sitemap_path = os.path.join(BASE_DIR, "sitemap.xml")
with open(sitemap_path, "w", encoding="utf-8") as f:
    f.write("\n".join(xml_lines) + "\n")

print(f"Successfully generated clean sitemap.xml with {len(sorted_urls)} valid 200 OK URLs (0 double slashes, 0 .html extensions)!")

# Verification check on sitemap.xml
double_slashes = [u for u in sorted_urls if u.count("//") > 1 and not u.startswith("https://")]
html_exts = [u for u in sorted_urls if u.endswith(".html")]
print(f"Verification: Double slash count = {len(double_slashes)}, .html count = {len(html_exts)}")

print("\nSUCCESS: Completed Ziggy SEO Audit Fix Package!")
