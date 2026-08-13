import os
import re

QUOTE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\car-shipping-quote\index.html"
HOME_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"
CALC_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

# -------------------------------------------------------------
# 1. UPDATE CAR-SHIPPING-QUOTE PAGE (SEO Head, FAQs, Links, Schema)
# -------------------------------------------------------------
with open(QUOTE_FILE, "r", encoding="utf-8") as f:
    quote_content = f.read()

# Exact Head Meta Tags
new_head_meta = """  <!-- Primary SEO -->
  <title>Free Car Shipping Quote | Instant Auto Transport Pricing</title>
  <meta name="description" content="Get a free car shipping quote in seconds with Neon Auto Transport. Enter your route and vehicle details to see instant auto transport pricing for open and enclosed carriers, door-to-door nationwide, with no hidden fees and no upfront deposit.">
  <meta name="keywords" content="car shipping quote, auto transport quote, free car shipping quote, instant auto transport quote, car haul quote, vehicle shipping quote">
  <meta name="robots" content="index, follow">
  <meta name="author" content="Neon Auto Transport">
  <link rel="canonical" href="https://neonautotransport.com/car-shipping-quote/">

  <!-- Hreflang Tags -->
  <link rel="alternate" hreflang="en-us" href="https://neonautotransport.com/car-shipping-quote/">
  <link rel="alternate" hreflang="x-default" href="https://neonautotransport.com/car-shipping-quote/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://neonautotransport.com/car-shipping-quote/">
  <meta property="og:title" content="Free Car Shipping Quote | Instant Auto Transport Pricing">
  <meta property="og:description" content="Request a free car shipping quote and compare open and enclosed auto transport pricing with Neon Auto Transport. Door-to-door nationwide, zero hidden fees.">
  <meta property="og:image" content="https://neonautotransport.com/images/og-cover.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Neon Auto Transport">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Free Car Shipping Quote | Instant Auto Transport Pricing">
  <meta name="twitter:description" content="Get an instant car shipping quote for open and enclosed auto transport, anywhere in the United States.">
  <meta name="twitter:image" content="https://neonautotransport.com/images/og-cover.jpg">"""

quote_content = re.sub(
    r'<!-- Primary SEO -->.*?<!-- Twitter Card -->\s*<meta name="twitter:image".*?>',
    new_head_meta.strip(),
    quote_content,
    flags=re.DOTALL
)

# Exact JSON-LD Graph Schema
new_json_ld = """  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/car-shipping-quote/",
        "url": "https://neonautotransport.com/car-shipping-quote/",
        "name": "Free Car Shipping Quote | Neon Auto Transport",
        "description": "Get a free car shipping quote in seconds with Neon Auto Transport. Instant auto transport pricing for open and enclosed carriers, door-to-door nationwide.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://neonautotransport.com/car-shipping-quote/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I get a car shipping quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can get a car shipping quote by entering your pickup and delivery ZIP codes or cities, vehicle details, and preferred carrier type (open or enclosed) into our online quote form or cost calculator. Our system instantly calculates a price range based on distance, vehicle size, carrier availability, and season."
            }
          },
          {
            "@type": "Question",
            "name": "Is a car shipping quote free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All car shipping quotes from Neon Auto Transport are completely free and carry no obligation to book. You can request multiple quotes, compare options, and decide when you’re ready to ship."
            }
          },
          {
            "@type": "Question",
            "name": "How accurate is the online car shipping quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our online quotes are based on live market data and recent carrier dispatches on your route. While your quote is an estimate until a carrier is assigned, it reflects realistic pricing and usually matches the final booked rate within a narrow range."
            }
          },
          {
            "@type": "Question",
            "name": "How long is my car shipping quote valid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most quotes are valid for 3–7 days, depending on route demand and season. If your pickup dates change, we can refresh your quote and provide updated pricing."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have to pay a deposit to get a car shipping quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Neon Auto Transport does not charge deposits just to request a quote. A deposit may be taken only after you approve a carrier assignment and confirm your booking."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a car shipping quote for multiple vehicles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You can request quotes for multiple cars, SUVs, trucks, motorcycles, or classic vehicles on the same route. Multi-vehicle bookings may be eligible for combined pricing or priority dispatch."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a car shipping quote near me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. When you search for 'car shipping quote near me' and enter your ZIP code, we match carriers that service your local area and preferred destination, providing quotes for both local and long-distance routes nationwide."
            }
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://neonautotransport.com/#organization",
        "name": "Neon Auto Transport",
        "image": "https://neonautotransport.com/images/og-cover.jpg",
        "telephone": "+1-571-576-7711",
        "email": "info@neonautotransport.com",
        "url": "https://neonautotransport.com/",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2709 Neabsco Common Pl, Suite 101",
          "addressLocality": "Woodbridge",
          "addressRegion": "VA",
          "postalCode": "22191",
          "addressCountry": "US"
        },
        "priceRange": "$$"
      },
      {
        "@type": "Organization",
        "@id": "https://neonautotransport.com/#website",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com/",
        "logo": "https://neonautotransport.com/images/og-cover.jpg"
      }
    ]
  }
  </script>"""

quote_content = re.sub(
    r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@graph":.*?</script>',
    new_json_ld.strip(),
    quote_content,
    flags=re.DOTALL
)

# Exact HTML Accordion FAQ Answers
faq_1_html = "You can get a car shipping quote by entering your pickup and delivery ZIP codes or cities, vehicle details, and preferred carrier type (open or enclosed) into our online quote form or cost calculator. Our system instantly calculates a price range based on distance, vehicle size, carrier availability, and season."
faq_2_html = "Yes. All car shipping quotes from Neon Auto Transport are completely free and carry no obligation to book. You can request multiple quotes, compare options, and decide when you’re ready to ship."
faq_3_html = "Our online quotes are based on live market data and recent carrier dispatches on your route. While your quote is an estimate until a carrier is assigned, it reflects realistic pricing and usually matches the final booked rate within a narrow range."
faq_4_html = "Most quotes are valid for 3–7 days, depending on route demand and season. If your pickup dates change, we can refresh your quote and provide updated pricing."
faq_5_html = "No. Neon Auto Transport does not charge deposits just to request a quote. A deposit may be taken only after you approve a carrier assignment and confirm your booking."
faq_6_html = "Yes. You can request quotes for multiple cars, SUVs, trucks, motorcycles, or classic vehicles on the same route. Multi-vehicle bookings may be eligible for combined pricing or priority dispatch."
faq_7_html = "Yes. When you search for “car shipping quote near me” and enter your ZIP code, we match carriers that service your local area and preferred destination, providing quotes for both local and long-distance routes nationwide."

# Replace FAQ accordion inner HTMLs
quote_content = re.sub(
    r'(<summary[^>]*>\s*How do I get a car shipping quote\?\s*<span[^>]*>\+</span>\s*</summary>\s*<div[^>]*>)\s*.*?\s*(</div>)',
    f'\\1\n              {faq_1_html}\n            \\2',
    quote_content,
    flags=re.DOTALL
)

quote_content = re.sub(
    r'(<summary[^>]*>\s*Is a car shipping quote free\?\s*<span[^>]*>\+</span>\s*</summary>\s*<div[^>]*>)\s*.*?\s*(</div>)',
    f'\\1\n              {faq_2_html}\n            \\2',
    quote_content,
    flags=re.DOTALL
)

quote_content = re.sub(
    r'(<summary[^>]*>\s*How accurate is the online car shipping quote\?\s*<span[^>]*>\+</span>\s*</summary>\s*<div[^>]*>)\s*.*?\s*(</div>)',
    f'\\1\n              {faq_3_html}\n            \\2',
    quote_content,
    flags=re.DOTALL
)

quote_content = re.sub(
    r'(<summary[^>]*>\s*How long is my car shipping quote valid\?\s*<span[^>]*>\+</span>\s*</summary>\s*<div[^>]*>)\s*.*?\s*(</div>)',
    f'\\1\n              {faq_4_html}\n            \\2',
    quote_content,
    flags=re.DOTALL
)

quote_content = re.sub(
    r'(<summary[^>]*>\s*Do I have to pay a deposit to get a car shipping quote\?\s*<span[^>]*>\+</span>\s*</summary>\s*<div[^>]*>)\s*.*?\s*(</div>)',
    f'\\1\n              {faq_5_html}\n            \\2',
    quote_content,
    flags=re.DOTALL
)

quote_content = re.sub(
    r'(<summary[^>]*>\s*Can I get a car shipping quote for multiple vehicles\?\s*<span[^>]*>\+</span>\s*</summary>\s*<div[^>]*>)\s*.*?\s*(</div>)',
    f'\\1\n              {faq_6_html}\n            \\2',
    quote_content,
    flags=re.DOTALL
)

quote_content = re.sub(
    r'(<summary[^>]*>\s*Can I get a car shipping quote near me\?\s*<span[^>]*>\+</span>\s*</summary>\s*<div[^>]*>)\s*.*?\s*(</div>)',
    f'\\1\n              {faq_7_html}\n            \\2',
    quote_content,
    flags=re.DOTALL
)

with open(QUOTE_FILE, "w", encoding="utf-8") as f:
    f.write(quote_content)

print("SUCCESS: Updated car-shipping-quote page with exact SEO head tags, JSON-LD graph schema, and rich accordion answers!")
