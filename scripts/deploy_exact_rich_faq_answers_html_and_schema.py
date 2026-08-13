import os
import re

CALCULATOR_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

with open(CALCULATOR_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Exact answers requested
ans_1 = "Your quote is calculated using live market data from our nationwide carrier network. We factor in mileage, vehicle size, carrier type (open or enclosed), pickup and delivery locations, and current demand on your route to provide a realistic car shipping cost range before you book."
ans_2 = "No. Neon Auto Transport does not charge hidden fees or mandatory upfront deposits. The price you see in your quote already includes standard carrier, fuel, and insurance costs, so your auto transport pricing stays 100% transparent from start to finish."
ans_3 = "Open transport is the most popular and affordable option, ideal for everyday vehicles and most relocations. Your car travels on an open trailer with other vehicles. Enclosed transport provides fully covered, weather-shielded protection, which is perfect for classic, exotic, and luxury vehicles that need extra care."
ans_4 = "For most routes, booking 3–7 days before your desired pickup date works well. During busy seasons or for remote locations, booking earlier helps us secure the best carrier and lock in your car shipping rate."

# 1. Update HTML Accordions
content = re.sub(
    r'<div class="px-6 pb-6 text-\[\#425466\] text-sm leading-relaxed border-t border-\[\#e6e6e6\] pt-4">\s*Your quote is calculated.*?\s*</div>',
    f'<div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">\n              {ans_1}\n            </div>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<div class="px-6 pb-6 text-\[\#425466\] text-sm leading-relaxed border-t border-\[\#e6e6e6\] pt-4">\s*No\. At Neon Auto Transport.*?\s*</div>',
    f'<div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">\n              {ans_2}\n            </div>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<div class="px-6 pb-6 text-\[\#425466\] text-sm leading-relaxed border-t border-\[\#e6e6e6\] pt-4">\s*Open transport carries vehicles.*?\s*</div>',
    f'<div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">\n              {ans_3}\n            </div>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<div class="px-6 pb-6 text-\[\#425466\] text-sm leading-relaxed border-t border-\[\#e6e6e6\] pt-4">\s*Booking 1 to 2 weeks.*?\s*</div>',
    f'<div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">\n              {ans_4}\n            </div>',
    content,
    flags=re.DOTALL
)

# 2. Update JSON-LD FAQ Schema in <head>
faq_schema = f"""  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {{
        "@type": "Question",
        "name": "How is my auto shipping quote calculated?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "{ans_1}"
        }}
      }},
      {{
        "@type": "Question",
        "name": "Are there any hidden fees or upfront deposits required?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "{ans_2}"
        }}
      }},
      {{
        "@type": "Question",
        "name": "What is the difference between open and enclosed auto transport?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "{ans_3}"
        }}
      }},
      {{
        "@type": "Question",
        "name": "How far in advance should I book my vehicle shipment?",
        "acceptedAnswer": {{
          "@type": "Answer",
          "text": "{ans_4}"
        }}
      }}
    ]
  }}
  </script>"""

content = re.sub(
    r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@type": "FAQPage".*?</script>',
    faq_schema.strip(),
    content,
    flags=re.DOTALL
)

with open(CALCULATOR_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Embedded exact rich FAQ answers into HTML accordions and JSON-LD schema!")
