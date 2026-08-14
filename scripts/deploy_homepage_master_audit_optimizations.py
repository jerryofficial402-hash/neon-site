import os
import re

HOME_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"

with open(HOME_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description in Head
content = re.sub(
    r'<title>.*?</title>',
    '<title>Car Shipping Company | Nationwide Auto Transport Quotes | Neon</title>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Get a free car shipping quote from Neon Auto Transport. Nationwide door-to-door open and enclosed auto transport, transparent pricing, and vetted carrier options.">',
    content,
    flags=re.DOTALL
)

# 2. Update Combined JSON-LD Schema Graph in Head
new_json_ld_graph = """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://neonautotransport.com/#organization",
        "name": "Neon Auto Transport LLC",
        "url": "https://neonautotransport.com/",
        "telephone": "+1-571-576-7711",
        "email": "info@neonautotransport.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2709 Neabsco Common Pl, Suite 101",
          "addressLocality": "Woodbridge",
          "addressRegion": "VA",
          "postalCode": "22191",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://neonautotransport.com/#website",
        "url": "https://neonautotransport.com/",
        "name": "Neon Auto Transport",
        "publisher": {
          "@id": "https://neonautotransport.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/#webpage",
        "url": "https://neonautotransport.com/",
        "name": "Car Shipping Company | Nationwide Auto Transport Quotes | Neon",
        "description": "Get a free car shipping quote from Neon Auto Transport. Nationwide door-to-door open and enclosed auto transport, transparent pricing, and vetted carrier options.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@type": "Service",
          "name": "Nationwide Auto Transport"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://neonautotransport.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://neonautotransport.com/"
          }
        ]
      }
    ]
  }
  </script>"""

# Replace old JSON-LD script blocks in <head>
content = re.sub(
    r'<!-- JSON-LD: MovingCompany \+ LocalBusiness Schema -->.*?</script>\s*<!-- JSON-LD: FAQPage -->.*?</script>\s*<!-- JSON-LD: Service \(AEO / AI Search Optimization\) -->.*?</script>',
    new_json_ld_graph.strip(),
    content,
    flags=re.DOTALL
)

# 3. Soften Claims (Replace 10K+ active carriers, guaranteed pickup)
content = content.replace("10,000+ Vetted Carriers", "Vetted Carrier Network")
content = content.replace("10K+ active carriers", "vetted carrier network")
content = content.replace("Guaranteed Pickup", "Scheduled Dispatch")
content = content.replace("guaranteed pickup and delivery dates", "scheduled pickup and delivery windows")

# 4. Update Delivery Time Wording to prevent contradictions
old_delivery_time_text = r'delivery typically takes between 1 and 7 days.*?'
new_delivery_time_text = "Most vehicle shipments take approximately 2–8 days in transit after pickup, depending on distance, route, carrier scheduling, weather, traffic, and delivery accessibility. Your confirmed carrier provides a pickup window and estimated delivery timeframe."

content = re.sub(
    r'delivery typically takes between 1 and 7 days.*?\.',
    new_delivery_time_text,
    content,
    flags=re.DOTALL
)

# 5. Add Clear Broker Disclosure near form and footer
broker_disclosure_html = '<p class="text-xs text-slate-400 mt-3 font-medium text-center">Neon Auto Transport LLC is a licensed auto transport broker (MC #1703787, USDOT #4355879). We arrange vehicle transportation through independently owned and insured motor carriers.</p>'

if 'licensed auto transport broker' not in content:
    content = content.replace(
        '© 2026 Neon Auto Transport LLC',
        f'© 2026 Neon Auto Transport LLC. {broker_disclosure_html}'
    )

with open(HOME_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Updated homepage Title, Meta Description, JSON-LD Graph Schema, Claim Softening, Delivery Time Wording, and Broker Disclosure!")
