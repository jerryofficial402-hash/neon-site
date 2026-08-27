import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# 1. Update new-york-car-shipping/index.html & new-york-car-shipping.html
ny_page_dir = os.path.join(BASE_DIR, "new-york-car-shipping")
ny_page_idx = os.path.join(ny_page_dir, "index.html")
ny_page_flat = os.path.join(BASE_DIR, "new-york-car-shipping.html")

faq_schema = """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car from NYC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shipping a car from NYC typically costs $300–$470 for regional Northeast and Mid-Atlantic routes, $500–$900 for the Southeast, Midwest, and Florida, and $1,150–$1,600 for cross-country West Coast routes on an open carrier."
      }
    },
    {
      "@type": "Question",
      "name": "Is affordable vehicle shipping in NYC realistic given how dense the city is?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — density affects where you meet your driver, not necessarily the price. Terminal or staging-area pickup in New Jersey, Long Island, or an outer borough is still standard, affordable open-carrier service. It's true door-to-door delivery to a Manhattan curb that gets harder and occasionally pricier."
      }
    },
    {
      "@type": "Question",
      "name": "Why can't my car be picked up directly at my Manhattan address?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New York's parkway system bans commercial trucks outright, and most residential streets are too narrow for an 80-foot carrier rig to navigate or turn around on safely. Drivers typically arrange a nearby staging point instead, commonly in New Jersey, Long Island, or a wider commercial street in Queens or Brooklyn."
      }
    },
    {
      "@type": "Question",
      "name": "What's the cost to ship a car from NYC to Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The New York-to-Florida corridor typically runs $650–$900 on an open carrier and takes 3–5 days, making it one of the more affordable and well-traveled long-distance routes out of the city, especially during snowbird season in fall and spring."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between open and enclosed car transport in New York?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open car carrier service is the standard, most affordable option and what the vast majority of vehicles ship on. Enclosed auto transport costs roughly 30–50% more and is the better choice for luxury or classic vehicles, given the added protection from road salt and winter grime."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be present for pickup and delivery in New York?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you or an authorized representative needs to be present to sign the Bill of Lading at both pickup and delivery. In New York specifically, confirm your staging location in advance so you know exactly where to meet your driver."
      }
    },
    {
      "@type": "Question",
      "name": "Can I ship a car from New York to Canada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cross-border shipments to cities like Toronto or Montreal typically run north via I-87, and you'll need your title, registration, and proof of ownership documents ready in advance for customs."
      }
    }
  ]
}
</script>"""

service_schema = """<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Auto Transport / Car Shipping",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Neon Auto Transport",
    "url": "https://neonautotransport.com/",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "New York"
  },
  "description": "Open and enclosed auto transport to and from New York, including New York City, Long Island, the Hudson Valley, Western New York, and every region statewide. FMCSA and USDOT approved, with insurance up to $500,000 per vehicle.",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "300",
    "highPrice": "1600"
  }
}
</script>"""

def fix_new_york_page(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace FAQ schema
    content = re.sub(
        r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": "FAQPage".*?</script>',
        faq_schema,
        content,
        flags=re.DOTALL
    )

    # Replace Service schema
    content = re.sub(
        r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": \["Service".*?</script>',
        service_schema,
        content,
        flags=re.DOTALL
    )

    # Replace visible Q1 FAQ copy
    content = content.replace(
        "Ship a car from NYC pricing typically runs $300–$470",
        "Shipping a car from NYC typically costs $300–$470"
    )
    content = content.replace(
        "Ship a car from NYC pricing typically runs $300&ndash;$470",
        "Shipping a car from NYC typically costs $300–$470"
    )

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated schemas and FAQ copy in {filepath}")

fix_new_york_page(ny_page_idx)
fix_new_york_page(ny_page_flat)

# 2. Update locations/index.html & locations.html to include New York Car Shipping Guide
loc_idx = os.path.join(BASE_DIR, "locations", "index.html")
loc_flat = os.path.join(BASE_DIR, "locations.html")

def update_locations_page(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if "New York Car Shipping Guide" not in content:
        link_code = '\n            <a href="https://neonautotransport.com/new-york-car-shipping/" class="p-4 bg-[#0a2540] text-white font-bold rounded-xl hover:bg-[#00D1FF] hover:text-[#0a2540] transition">New York Car Shipping Guide &rarr;</a>'
        content = content.replace(
            '<a href="/california-car-shipping/" class="p-4 bg-[#39FF14] text-[#0a2540] font-black rounded-xl hover:bg-[#32e011] transition">California State Hub →</a>',
            '<a href="/california-car-shipping/" class="p-4 bg-[#39FF14] text-[#0a2540] font-black rounded-xl hover:bg-[#32e011] transition">California State Hub →</a>' + link_code
        )
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Added New York link to {filepath}")

update_locations_page(loc_idx)
update_locations_page(loc_flat)

# 3. Update new-york-car-shipping-cities/index.html & flat
ny_cities_idx = os.path.join(BASE_DIR, "new-york-car-shipping-cities", "index.html")
ny_cities_flat = os.path.join(BASE_DIR, "new-york-car-shipping-cities.html")

def update_cities_link(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    content = content.replace(
        "Back to New York State Guide",
        "See the full New York car shipping guide →"
    )
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated anchor text in {filepath}")

update_cities_link(ny_cities_idx)
update_cities_link(ny_cities_flat)

# 4. Update routes/city/new-york-city-ny.html & index.html if exists
nyc_flat = os.path.join(BASE_DIR, "routes", "city", "new-york-city-ny.html")
nyc_idx = os.path.join(BASE_DIR, "routes", "city", "new-york-city-ny", "index.html")

def update_nyc_city_link(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if "https://neonautotransport.com/new-york-car-shipping/" not in content and "/new-york-car-shipping/" not in content:
        # insert link back to main state guide
        link_html = '\n<div class="mb-4"><a href="https://neonautotransport.com/new-york-car-shipping/" class="text-[#635bff] font-bold text-sm hover:underline">See the full New York car shipping guide &rarr;</a></div>\n'
        content = content.replace('<body class="', link_html + '<body class="')
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Updated NYC city page in {filepath}")

update_nyc_city_link(nyc_flat)
update_nyc_city_link(nyc_idx)

print("SUCCESS: Applied full New York Car Shipping Fix Package!")
