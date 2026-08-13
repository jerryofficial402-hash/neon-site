import os
import re

QUOTE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\car-shipping-quote\index.html"
CALC_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

# Dedicated GSC Enhancements JSON-LD Scripts for /car-shipping-quote/
quote_schemas = """  <!-- GSC Enhancement 1: BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://neonautotransport.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Car Shipping Quote",
        "item": "https://neonautotransport.com/car-shipping-quote/"
      }
    ]
  }
  </script>

  <!-- GSC Enhancement 2: FAQPage Rich Result Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
  }
  </script>

  <!-- GSC Enhancement 3: Auto Transport Service & Merchant Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Car Shipping Quote & Auto Transport Services",
    "serviceType": "Vehicle Shipping & Auto Transport",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neon Auto Transport",
      "image": "https://neonautotransport.com/images/og-cover.jpg",
      "telephone": "+1-571-576-7711",
      "email": "info@neonautotransport.com",
      "url": "https://neonautotransport.com/",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2709 Neabsco Common Pl, Suite 101",
        "addressLocality": "Woodbridge",
        "addressRegion": "VA",
        "postalCode": "22191",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Auto Shipping Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Open Auto Transport Quote"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enclosed Auto Transport Quote"
          }
        }
      ]
    }
  }
  </script>"""

# Update /car-shipping-quote/index.html
with open(QUOTE_FILE, "r", encoding="utf-8") as f:
    q_content = f.read()

q_content = re.sub(
    r'<script type="application/ld\+json">.*?</script>',
    quote_schemas.strip(),
    q_content,
    flags=re.DOTALL
)

with open(QUOTE_FILE, "w", encoding="utf-8") as f:
    f.write(q_content)

print("SUCCESS: Deployed explicit BreadcrumbList, FAQPage, and Service Rich Result Enhancements to /car-shipping-quote/")
