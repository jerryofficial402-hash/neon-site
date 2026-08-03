import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
target_file = os.path.join(SITE_DIR, "index.html")

with open(target_file, "r", encoding="utf-8") as f:
    content = f.read()

rich_moving_company_schema = """  <!-- JSON-LD: MovingCompany + LocalBusiness Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": ["MovingCompany", "LocalBusiness"],
    "@id": "https://neonautotransport.com/#organization",
    "name": "Neon Auto Transport",
    "legalName": "Neon Auto Transport LLC",
    "alternateName": "Neon Auto Transport",
    "url": "https://neonautotransport.com/",
    "logo": "https://neonautotransport.com/images/logo.jpg",
    "image": "https://neonautotransport.com/images/og-cover.jpg",
    "description": "FMCSA and USDOT licensed nationwide auto transport company offering door-to-door open and enclosed car shipping across all 50 states.",
    "telephone": "+1-571-576-7711",
    "email": "info@neonautotransport.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2709 Neabsco Common Pl Suite 101",
      "addressLocality": "Woodbridge",
      "addressRegion": "VA",
      "postalCode": "22191",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.6582,
      "longitude": -77.2497
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "USDOT Number",
        "value": "4355879"
      },
      {
        "@type": "PropertyValue",
        "name": "MC Number",
        "value": "1703787"
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "20:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday"], "opens": "09:00", "closes": "17:00" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61577115704216",
      "https://www.instagram.com/neonautotransport",
      "https://www.linkedin.com/company/neon-auto-transport",
      "https://www.youtube.com/@neonautotransport",
      "https://www.tiktok.com/@neonautotransport",
      "https://www.trustpilot.com/review/neonautotransport.com",
      "https://www.bbb.org/us/va/woodbridge/profile/auto-transporters/neon-auto-transport-0241-236024907",
      "https://www.yelp.com/biz/neon-auto-transport-woodbridge"
    ]
  }
  </script>"""

# Replace existing MovingCompany schema
import re
pattern = re.compile(r'<!-- JSON-LD: Organization \+ MovingCompany -->\s*<script type="application/ld\+json">.*?</script>', re.DOTALL)

if pattern.search(content):
    content = pattern.sub(rich_moving_company_schema, content)
    with open(target_file, "w", encoding="utf-8") as f:
        f.write(content)
    print("SUCCESS: Updated MovingCompany schema in index.html!")
else:
    print("WARNING: Pattern not matched, checking manually.")
