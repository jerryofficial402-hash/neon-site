import os
import re

FILE_PATH = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\open-auto-transport.html"

with open(FILE_PATH, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description
content = re.sub(
    r'<title>.*?</title>',
    '<title>Open Auto Transport | Neon Auto Transport</title>',
    content
)
content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Ship your car by open transport for $400–$1,200. $0 deposit, $500K insurance, 3–7 day delivery. The same method automakers use. Get a free quote.">',
    content
)
content = re.sub(
    r'<meta property="og:title" content=".*?">',
    '<meta property="og:title" content="Open Auto Transport | Neon Auto Transport">',
    content
)
content = re.sub(
    r'<meta property="og:description" content=".*?">',
    '<meta property="og:description" content="Ship your car by open transport for $400–$1,200. $0 deposit, $500K insurance, 3–7 day delivery. The same method automakers use. Get a free quote.">',
    content
)
content = re.sub(
    r'<meta name="twitter:title" content=".*?">',
    '<meta name="twitter:title" content="Open Auto Transport | Neon Auto Transport">',
    content
)
content = re.sub(
    r'<meta name="twitter:description" content=".*?">',
    '<meta name="twitter:description" content="Ship your car by open transport for $400–$1,200. $0 deposit, $500K insurance, 3–7 day delivery. The same method automakers use. Get a free quote.">',
    content
)

# 2. Update JSON-LD Schemas in <head>
new_schemas = """  <!-- JSON-LD: BreadcrumbList + Service + FAQPage -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://neonautotransport.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Open Auto Transport", "item": "https://neonautotransport.com/services/open-auto-transport/" }
  ]
}
  </script>

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Open Auto Transport",
  "name": "Open Auto Transport",
  "provider": {
    "@type": "MovingCompany",
    "name": "Neon Auto Transport LLC",
    "telephone": "+1-571-576-7711"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceRange": "$400-$1200"
  }
}
  </script>

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does open auto transport cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most shipments cost $400 to $1,200, depending on distance, vehicle size, and season. Longer, cross-country routes cost more overall but less per mile than short regional trips."
      }
    },
    {
      "@type": "Question",
      "name": "How long does open transport take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most routes take 3 to 7 business days. Shorter regional routes can complete in 1-3 days; coast-to-coast shipments typically take 5-9 days."
      }
    },
    {
      "@type": "Question",
      "name": "Is my car safe on an open carrier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Vehicles are secured at designated tie-down points with wheel straps and safety chains, and every carrier carries active cargo insurance. This is the same method used to ship new vehicles from factories to dealerships nationwide."
      }
    },
    {
      "@type": "Question",
      "name": "How many vehicles ride on the carrier with mine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically 7 to 10 vehicles ride together on a standard multi-car open carrier. This shared-load model is what keeps open transport significantly cheaper than dedicated or enclosed transport."
      }
    },
    {
      "@type": "Question",
      "name": "When should I choose enclosed transport instead?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you're shipping a classic car, exotic, or any vehicle where you want zero exposure to weather or road debris, enclosed transport is worth the added cost. For daily drivers, SUVs, and trucks, open transport is the standard choice."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to be present for pickup and delivery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you or an authorized adult (18+) needs to be present to complete the inspection and sign the Bill of Lading at pickup, and the Proof of Delivery at drop-off."
      }
    },
    {
      "@type": "Question",
      "name": "Is my vehicle insured during open transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Neon Auto Transport provides up to $500,000 in cargo insurance coverage, active from pickup through delivery, on every shipment."
      }
    }
  ]
}
  </script>"""

# Replace schemas in head
content = re.sub(
    r'<script type="application/ld\+json">\s*\{\s*"@context": "https://schema\.org",\s*"@graph":.*?<\/script>',
    new_schemas,
    content,
    flags=re.DOTALL
)

# 3. Update Visual Breadcrumbs in Hero
visual_breadcrumb = """      <nav aria-label="Breadcrumbs" class="flex items-center gap-2 text-xs font-semibold text-white/80 mb-4 flex-wrap">
        <a href="https://neonautotransport.com/" class="hover:text-[#39FF14] transition">Home</a><span>/</span> <a href="https://neonautotransport.com/services/" class="hover:text-[#39FF14] transition">Services</a><span>/</span> <span class="text-[#39FF14] font-bold">Open Auto Transport</span>
      </nav>"""

content = re.sub(
    r'<nav aria-label="Breadcrumbs".*?</nav>',
    visual_breadcrumb,
    content,
    flags=re.DOTALL
)

# 4. Integrate Content Enhancements right after hero section start
enhanced_intro_block = """
      <!-- Featured Snippet Answer Card & Quick Facts Box -->
      <div class="my-8">
        <!-- Direct Answer Card -->
        <div class="bg-[#e0f2fe] border-l-4 border-[#0369a1] p-6 lg:p-8 rounded-r-2xl mb-8 shadow-sm">
          <h2 class="text-xl lg:text-2xl font-black text-[#0a2540] mb-3">Open Auto Transport — Nationwide Vehicle Shipping</h2>
          <p class="text-[#0a2540] text-base lg:text-lg leading-relaxed font-medium">
            Ship your car for <strong>$400–$1,200</strong> with open auto transport — the same method automakers use to move new vehicles from the factory to the dealership. It's the most affordable, most widely available shipping option, and it's what roughly three out of every four vehicle shipments in the U.S. use.
          </p>
        </div>

        <!-- Quick Facts / At a Glance -->
        <div class="bg-white rounded-2xl p-6 lg:p-8 border border-[#e6e6e6] shadow-[0_4px_20px_rgba(0,0,0,0.05)] mb-12">
          <h3 class="text-xs font-black text-[#0369a1] uppercase tracking-widest mb-6 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#39FF14]"></span> QUICK FACTS / AT A GLANCE
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Cost</div>
              <div class="font-bold text-[#0a2540] text-base">$400–$1,200 (Varies by distance & vehicle)</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Transit Time</div>
              <div class="font-bold text-[#0a2540] text-base">3–7 Business Days (Cross-country)</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Cargo Insurance</div>
              <div class="font-bold text-[#0369a1] text-base">Up to $500,000 Coverage Included</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Upfront Deposit</div>
              <div class="font-bold text-[#0a2540] text-base">$0 Required at Booking</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">How Vehicle Travels</div>
              <div class="font-bold text-[#0a2540] text-base">Multi-car carrier (6–9 cars), secured with wheel straps</div>
            </div>
            <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
              <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Best For</div>
              <div class="font-bold text-[#0a2540] text-base">Daily drivers, SUVs, trucks, & standard vehicles</div>
            </div>
          </div>
        </div>
      </div>
"""

# Inject enhanced_intro_block into container
content = content.replace(
    '<div class="max-w-4xl mx-auto">\n        <div class="space-y-12 min-w-0">',
    '<div class="max-w-4xl mx-auto">\n        <div class="space-y-12 min-w-0">\n' + enhanced_intro_block
)

# 5. Add Comparison Table: Open vs Enclosed
comparison_table_block = """
<!-- How Open Transport Compares to Enclosed Table -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12">
  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">How Open Transport Compares to Enclosed</h2>
  <p class="text-[#425466] mb-6 leading-relaxed">Understanding the structural differences between open and enclosed auto transport helps you pick the right shipping method for your specific budget and vehicle:</p>
  
  <div class="overflow-x-auto mb-8 border border-[#e6e6e6] rounded-xl shadow-sm">
    <table class="w-full text-left border-collapse min-w-[600px]">
      <thead>
        <tr class="bg-[#0a2540] text-white font-bold text-sm uppercase tracking-wider">
          <th class="py-4 px-6 border-b border-transparent">Feature</th>
          <th class="py-4 px-6 border-b border-transparent">Open Transport</th>
          <th class="py-4 px-6 border-b border-transparent">Enclosed Transport</th>
        </tr>
      </thead>
      <tbody class="text-[#425466] text-sm">
        <tr class="border-b border-[#e6e6e6]">
          <td class="py-4 px-6 font-bold text-[#0a2540]">Typical Cost</td>
          <td class="py-4 px-6 font-semibold text-[#0369a1]">$400 – $1,200</td>
          <td class="py-4 px-6 font-semibold">30–50% higher than open</td>
        </tr>
        <tr class="border-b border-[#e6e6e6]">
          <td class="py-4 px-6 font-bold text-[#0a2540]">Carrier Availability</td>
          <td class="py-4 px-6">Widest — most carriers run open trailers</td>
          <td class="py-4 px-6">Fewer carriers, longer scheduling lead time</td>
        </tr>
        <tr class="border-b border-[#e6e6e6]">
          <td class="py-4 px-6 font-bold text-[#0a2540]">Vehicles Per Load</td>
          <td class="py-4 px-6">7–10 vehicles</td>
          <td class="py-4 px-6">Typically 1–2 vehicles</td>
        </tr>
        <tr class="border-b border-[#e6e6e6]">
          <td class="py-4 px-6 font-bold text-[#0a2540]">Weather / Debris Exposure</td>
          <td class="py-4 px-6">Same as a normal highway drive</td>
          <td class="py-4 px-6">Fully enclosed, shielded</td>
        </tr>
        <tr class="hover:bg-[#f8fafc]">
          <td class="py-4 px-6 font-bold text-[#0a2540]">Best For</td>
          <td class="py-4 px-6 font-semibold text-[#0a2540]">Daily drivers, SUVs, trucks, most standard vehicles</td>
          <td class="py-4 px-6"><a href="/services/enclosed-auto-transport/" class="text-[#0369a1] font-bold hover:underline">Classic, luxury, or exotic vehicles →</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-[#425466] text-sm leading-relaxed">
    If you're shipping a standard vehicle and don't have a specific reason to fully enclose it, <strong>open transport is very likely your right call</strong> — it's faster to book and meaningfully cheaper without a meaningful increase in real-world risk.
  </p>
</div>
"""

# Replace existing comparison section or append
content = content.replace(
    '<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12">\n  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Open vs. Enclosed Auto Transport — Which Do You Need?</h2>',
    comparison_table_block + '\n<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12">\n  <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Open vs. Enclosed Auto Transport — Which Do You Need?</h2>'
)

# 6. Update Why Ship with Neon Section to include full package details ($0 deposit, price lock, $500K insurance)
content = content.replace(
    '<h3 class="font-bold text-lg text-[#0a2540] mb-1">$250,000 cargo insurance</h3>',
    '<h3 class="font-bold text-lg text-[#0a2540] mb-1">$500,000 cargo insurance</h3>'
)
content = content.replace(
    'Every open transport shipment includes cargo insurance coverage up to $250,000.',
    'Every open transport shipment includes cargo insurance coverage up to $500,000, active from pickup through delivery.'
)

# Write updated file
with open(FILE_PATH, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fully integrated Open Auto Transport deployment package into services/open-auto-transport.html!")
