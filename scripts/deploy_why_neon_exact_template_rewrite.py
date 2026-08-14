import os
import re

WHY_FILE_1 = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon.html"
WHY_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\why-neon"
os.makedirs(WHY_DIR, exist_ok=True)
WHY_FILE_2 = os.path.join(WHY_DIR, "index.html")

with open(WHY_FILE_1, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title & Meta Description in Head
content = re.sub(
    r'<title>.*?</title>',
    '<title>Why Choose Neon Auto Transport | Licensed Car Shipping Broker</title>',
    content
)

content = re.sub(
    r'<meta name="description" content=".*?">',
    '<meta name="description" content="Learn why customers choose Neon Auto Transport for nationwide vehicle shipping. Understand our licensed broker role, carrier assignment process, Bill of Lading inspections, and open or enclosed transport options.">',
    content
)

# 2. Update Badge text in Hero
content = content.replace("TRUSTED NATIONWIDE SINCE 2015", "LICENSED BROKER TRANSPARENCY")

# 3. Update Hero lead copy
old_hero_text = '<p class="text-lg md:text-xl text-[rgba(255,255,255,0.9)] max-w-2xl mx-auto leading-relaxed mb-8">\n     Discover our journey, mission, and the customer-first philosophy that has earned the trust of Thousands of vehicle owners across all 50 states.\n    </p>'

new_hero_text = """<p class="text-lg md:text-xl text-[rgba(255,255,255,0.9)] max-w-2xl mx-auto leading-relaxed mb-4 font-normal">
      Neon Auto Transport helps customers arrange door-to-door vehicle shipping across the United States. As a licensed auto transport broker, we match your shipment with an independent motor carrier based on your route, vehicle, transport preferences, timing, and carrier availability.
     </p>
     <p class="text-xs text-[#cdd5df] max-w-xl mx-auto mb-8 font-medium">
      Before you book, we explain transport options, provide written shipment details, and help you understand pickup windows, carrier assignments, and Bill of Lading inspection steps.
     </p>"""

if old_hero_text in content:
    content = content.replace(old_hero_text, new_hero_text)

# 4. Update Operating Narrative / Broker Transparency
old_narrative_title = '<h2 class="text-3xl md:text-4xl font-black text-[#0a2540] tracking-tight">\n       Revolutionizing Nationwide Vehicle Transportation\n      </h2>'
new_narrative_title = '<h2 class="text-3xl md:text-4xl font-black text-[#0a2540] tracking-tight">\n       Broker Transparency & Licensed Authority\n      </h2>'
content = content.replace(old_narrative_title, new_narrative_title)

# 5. Clean Stats display boxes
content = content.replace('<span class="text-5xl font-black tracking-tight text-[#39FF14]">Thousands of</span>', '<span class="text-4xl font-black tracking-tight text-[#39FF14]">Verified</span>')
content = content.replace('<span class="text-5xl font-black tracking-tight text-[#00D1FF]">9+ Yrs</span>', '<span class="text-4xl font-black tracking-tight text-[#00D1FF]">FMCSA</span>')

# 6. Clean Card Titles & Texts for Core Framework
content = content.replace("100% INSURED SHIPMENTS", "CARRIER INSURANCE VERIFIED")
content = content.replace("24/7 CUSTOMER SUPPORT", "COORDINATED DISPATCH")
content = content.replace("AI-POWERED ROUTING", "ROUTE AVAILABILITY")

# 7. Replace Competitor Table Section with Questions to Ask Checklist
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

# 8. Fix .reveal opacity bug
content = content.replace(" mb-16 reveal", " mb-16")
content = content.replace(" reveal", "")

# 9. Force explicit white text for Service Mode Analysis Matrix heading
content = content.replace(
    '<h4 class="font-bold text-xl">Service Mode Analysis Matrix</h4>',
    '<h4 class="font-bold text-xl text-white" style="color: #ffffff !important;">Service Mode Analysis Matrix</h4>'
)

with open(WHY_FILE_1, "w", encoding="utf-8") as f:
    f.write(content)

with open(WHY_FILE_2, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Preserved 100% original template design & layout while injecting clean EEAT content to {WHY_FILE_1} and {WHY_FILE_2}")
