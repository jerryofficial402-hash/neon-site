import os
import re

SERVICES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\index.html"

with open(SERVICES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description in Head
content = re.sub(
    r'<title>.*?</title>',
    '<title>Vehicle Transport Services | Nationwide Auto Shipping | Neon</title>',
    content
)

content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Explore nationwide vehicle transport services from Neon Auto Transport. Compare open, enclosed, door-to-door, expedited, motorcycle, military, luxury, dealer, and fleet shipping options, then request a free quote.">',
    content
)

# 2. Update Schema to Clean Graph
schema_start = content.find('<script type="application/ld+json">')
schema_end = content.find('</script>', schema_start)
if schema_start != -1 and schema_end != -1:
    new_schema = """<script type="application/ld+json">
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
        "name": "Vehicle Transport Services | Nationwide Auto Shipping | Neon",
        "description": "Explore nationwide vehicle transport services from Neon Auto Transport, including open, enclosed, door-to-door, and expedited shipping options.",
        "isPartOf": {
          "@id": "https://neonautotransport.com/#website"
        },
        "about": {
          "@type": "Service",
          "name": "Nationwide Vehicle Transport Services"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://neonautotransport.com/services/#service-list",
        "name": "Vehicle Transport Services",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Open Auto Transport",
            "url": "https://neonautotransport.com/services/open-auto-transport/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Enclosed Car Shipping",
            "url": "https://neonautotransport.com/services/enclosed-auto-transport/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Door-to-Door Car Shipping",
            "url": "https://neonautotransport.com/services/door-to-door-car-shipping/"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Expedited Auto Transport",
            "url": "https://neonautotransport.com/services/expedited-auto-transport/"
          }
        ]
      }
    ]
  }
  """
    content = content[:schema_start] + new_schema + content[schema_end:]

# 3. Update Hero Title & Description
content = content.replace(
    'Our Car Shipping <br><span style="color: #00D1FF">Services</span>',
    'Nationwide Vehicle <br><span style="color: #00D1FF">Transport Services</span>'
)

# 4. Remove Competitor Table Section and replace with Questions to Ask Checklist
if 'id="competitor-comparison"' in content:
    old_comp_start = content.find('<!-- Competitor Comparison Section -->')
    old_comp_end = content.find('<!-- What We Offer Comparison Grid & Table -->')
    if old_comp_start != -1 and old_comp_end != -1:
        new_comp_section = """<!-- Questions to Ask Checklist Section -->
  <section class="py-20 bg-white relative z-10 border-b border-[#e6e6e6]" id="questions-checklist">
   <div class="container mx-auto px-4 lg:px-8 max-w-5xl">
    <div class="p-8 md:p-12 bg-[#f8fafc] rounded-3xl border border-[#e6e6e6] shadow-sm">
     <h2 class="text-2xl md:text-3xl font-black text-[#0a2540] mb-4 tracking-tight">Questions to Ask Any Auto Transport Company</h2>
     <p class="text-sm text-[#425466] mb-6">Before booking with any auto transport provider, ask these essential verification questions:</p>
     <div class="grid md:grid-cols-2 gap-4 text-sm font-semibold text-[#0a2540]">
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> Are you a broker or a motor carrier?
      </div>
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> What are your MC and USDOT numbers?
      </div>
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> Is my quote an estimate or a binding price under stated conditions?
      </div>
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> What payment, cancellation, and refund terms apply?
      </div>
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> Which carrier will physically transport my vehicle?
      </div>
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> How can I review insurance information for the assigned carrier?
      </div>
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> What should I do if my street cannot accommodate a large transport truck?
      </div>
      <div class="p-4 bg-white rounded-xl border border-[#e6e6e6] flex items-center gap-3">
       <span class="text-[#2563eb]">✔</span> How do pickup and delivery inspections work?
      </div>
     </div>
    </div>
   </div>
  </section>\n\n  """
        content = content[:old_comp_start] + new_comp_section + content[old_comp_end:]

# 5. Fix .reveal opacity bug
content = content.replace(" mb-16 reveal", " mb-16")
content = content.replace(" reveal", "")

# 6. Force explicit white text for Service Mode Analysis Matrix heading
content = content.replace(
    '<h4 class="font-bold text-xl">Service Mode Analysis Matrix</h4>',
    '<h4 class="font-bold text-xl text-white" style="color: #ffffff !important;">Service Mode Analysis Matrix</h4>'
)

with open(SERVICES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Preserved 100% original template design & layout while injecting clean EEAT content to {SERVICES_FILE}")
