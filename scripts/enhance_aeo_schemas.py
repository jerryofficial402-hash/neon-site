import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
target_file = os.path.join(SITE_DIR, "index.html")

with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

# Enhanced Service Schemas for AEO
service_schema = """
  <!-- JSON-LD: Service (AEO / AI Search Optimization) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://neonautotransport.com/#open-transport",
        "name": "Open Auto Transport",
        "description": "Standard door-to-door multi-car open carrier shipping for sedans, SUVs, and pickup trucks across all 50 US states.",
        "provider": { "@id": "https://neonautotransport.com/#organization" },
        "serviceType": "Open Car Shipping",
        "areaServed": { "@type": "Country", "name": "United States" },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Car Shipping Pricing",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "Short Distance Transport (300 mi)" },
              "priceSpecification": { "@type": "PriceSpecification", "minPrice": "250", "maxPrice": "450", "priceCurrency": "USD" }
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "Coast to Coast Transport (2000+ mi)" },
              "priceSpecification": { "@type": "PriceSpecification", "minPrice": "1000", "maxPrice": "1600", "priceCurrency": "USD" }
            }
          ]
        }
      },
      {
        "@type": "Service",
        "@id": "https://neonautotransport.com/#enclosed-transport",
        "name": "Enclosed Auto Transport",
        "description": "Hard-sided and soft-sided enclosed trailer car transport offering 100% weather-shielded protection for luxury, classic, exotic, and high-value vehicles.",
        "provider": { "@id": "https://neonautotransport.com/#organization" },
        "serviceType": "Enclosed Car Shipping",
        "areaServed": { "@type": "Country", "name": "United States" }
      }
    ]
  }
  </script>
"""

# Replace FAQ answers with specific data points for AI citations
old_faq_multi = '"Can I ship multiple vehicles?"'
if old_faq_multi in content and "9-10 vehicles per trailer" not in content:
    content = content.replace(
        '"text": "Yes, we offer multi-car transport using large trailers that hold several cars securely. This is often more cost-effective per vehicle than booking separate shipments."',
        '"text": "Yes. Our multi-car carriers transport up to 9-10 vehicles per trailer. Booking multiple vehicles on the same carrier qualifies for a multi-car discount of 10% to 15% per additional vehicle."'
    )

if "<!-- JSON-LD: Service (AEO" not in content:
    content = content.replace("<!-- JSON-LD: HowTo -->", f"{service_schema}\n  <!-- JSON-LD: HowTo -->")

with open(target_file, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Enhanced GEO/AEO schemas and FAQ facts in {target_file}")
