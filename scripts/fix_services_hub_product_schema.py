import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
SERVICES_INDEX = os.path.join(BASE_DIR, "services", "index.html")

new_schema = """  <!-- Structured Data Schema (BreadcrumbList, WebPage, Service, ItemList, FAQPage) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://neonautotransport.com/services/#breadcrumb",
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
            "name": "Vehicle Transport Services",
            "item": "https://neonautotransport.com/services/"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/services/#webpage",
        "url": "https://neonautotransport.com/services/",
        "name": "Nationwide Vehicle Transport Services",
        "description": "Compare nationwide vehicle transport services from Neon Auto Transport, including open, enclosed, door-to-door, expedited, motorcycle, military, classic, luxury, dealer, and fleet transport options.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@id": "https://neonautotransport.com/services/#service"
        }
      },
      {
        "@type": "Service",
        "@id": "https://neonautotransport.com/services/#service",
        "name": "Nationwide Vehicle Transport Services",
        "serviceType": "Vehicle transportation brokerage",
        "provider": {
          "@type": "Organization",
          "name": "Neon Auto Transport",
          "url": "https://neonautotransport.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "url": "https://neonautotransport.com/services/"
      },
      {
        "@type": "ItemList",
        "@id": "https://neonautotransport.com/services/#service-list",
        "name": "Vehicle Transport Service Options",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Service",
              "name": "Open Auto Transport",
              "url": "https://neonautotransport.com/services/open-auto-transport/"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Service",
              "name": "Enclosed Car Shipping",
              "url": "https://neonautotransport.com/services/enclosed-auto-transport/"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Service",
              "name": "Door-to-Door Car Shipping",
              "url": "https://neonautotransport.com/services/door-to-door-car-shipping/"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Service",
              "name": "Expedited Auto Transport",
              "url": "https://neonautotransport.com/expedited-auto-transport/"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Service",
              "name": "Motorcycle Shipping",
              "url": "https://neonautotransport.com/services/motorcycle-shipping/"
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "Service",
              "name": "Military Car Shipping",
              "url": "https://neonautotransport.com/services/military-car-shipping/"
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "Service",
              "name": "Classic and Luxury Car Shipping",
              "url": "https://neonautotransport.com/services/luxury-car-shipping/"
            }
          },
          {
            "@type": "ListItem",
            "position": 8,
            "item": {
              "@type": "Service",
              "name": "Dealer and Fleet Vehicle Transport",
              "url": "https://neonautotransport.com/services/car-dealer-shipping/"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://neonautotransport.com/services/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of vehicles can be shipped?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neon Auto Transport can help arrange transportation for many cars, SUVs, pickup trucks, motorcycles, classic vehicles, dealer units, and fleet vehicles. Share the vehicle year, make, model, condition, and any modifications so appropriate transport options can be reviewed."
            }
          },
          {
            "@type": "Question",
            "name": "Is Neon Auto Transport a broker or a carrier?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Neon Auto Transport is a licensed auto transport broker. We arrange shipments through independently owned motor carriers that physically transport the vehicle."
            }
          },
          {
            "@type": "Question",
            "name": "Is open or enclosed transport better?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open transport is the most common option and is generally suitable for everyday vehicles. Enclosed transport provides added protection from weather and road exposure and is often chosen for classic, luxury, exotic, and collector vehicles."
            }
          },
          {
            "@type": "Question",
            "name": "Will the carrier pick up from my exact address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The assigned carrier aims to pick up and deliver as close to your selected addresses as safely and legally possible. Truck-access restrictions may require a nearby meeting point."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get a vehicle transport quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Use our online quote form or cost calculator, or call our team with your route, vehicle details, and preferred timing. A specialist can review available carrier options for your shipment."
            }
          }
        ]
      }
    ]
  }
  </script>"""

with open(SERVICES_INDEX, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the ld+json script tag block in services/index.html
import re
pattern = re.compile(r'<!-- Structured Data Schema.*?<\/script>', re.DOTALL)
if pattern.search(content):
    new_content = pattern.sub(new_schema, content)
    with open(SERVICES_INDEX, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("SUCCESS: Successfully replaced JSON-LD schema in services/index.html")
else:
    print("ERROR: Pattern not found in services/index.html")
