import os

SERVICES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\index.html"

with open(SERVICES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Ensure Title & Meta Description match master EEAT standard
content = content.replace(
    '<title>Auto Transport Services | Neon Auto Transport</title>',
    '<title>Vehicle Transport Services | Nationwide Auto Shipping | Neon</title>'
)

content = content.replace(
    '<meta name="description" content="Every type of car shipping service you need — open, enclosed, door-to-door, expedited, military, motorcycle, luxury, and fleet. Get a free quote from Neon Auto Transport.">',
    '<meta name="description" content="Explore nationwide vehicle transport services from Neon Auto Transport. Compare open, enclosed, door-to-door, expedited, motorcycle, military, luxury, dealer, and fleet shipping options, then request a free quote.">'
)

# 2. Update Hero Title in slanted header
content = content.replace(
    '<h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">Transport <span class="text-[#00D1FF]">Options</span></h1>',
    '<h1 class="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">Nationwide Vehicle <span class="text-[#00D1FF]">Transport Services</span></h1>'
)

content = content.replace(
    '<p class="text-xl text-slate-300 leading-relaxed">Tailored transport solutions designed to deliver your vehicle safely, securely, and exactly when you need it.</p>',
    '<p class="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">Neon Auto Transport helps customers arrange vehicle transportation across the United States. Compare open, enclosed, door-to-door, and expedited auto shipping options for cars, SUVs, trucks, motorcycles, classic vehicles, dealer inventory, and fleet moves.</p>'
)

# 3. Add Broker Transparency Strip right above the grid
old_grid_start = '<div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-20" style="margin-top:-60px">'
new_grid_start = """<div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-20" style="margin-top:-60px">
      <!-- Broker Disclosure Strip -->
      <div class="p-6 mb-8 bg-white rounded-2xl border border-[#e6e6e6] shadow-md flex items-center gap-4 text-left">
        <div class="w-10 h-10 rounded-full bg-[#0a2540] text-[#39FF14] flex items-center justify-center shrink-0 font-bold text-lg">🛡️</div>
        <div>
          <h2 class="text-base font-bold text-[#0a2540] mb-0.5">Licensed Broker Transparency</h2>
          <p class="text-xs text-[#425466] leading-relaxed">
            Neon Auto Transport LLC is a licensed auto transport broker operating under <strong>MC #1703787</strong> and <strong>USDOT #4355879</strong>. We arrange vehicle transportation through independently owned motor carriers.
          </p>
        </div>
      </div>"""

if old_grid_start in content and "Licensed Broker Transparency" not in content:
    content = content.replace(old_grid_start, new_grid_start)

# 4. Clean up cards text inside the .stripe-card grid to remove broken/unsupported wording
content = content.replace("100% protection from rain, snow, dust, and highway debris. Hard-sided trailers and higher insurance coverage.", "Covered transport trailers to help protect classic, luxury, exotic, and high-value vehicles from weather and road exposure.")
content = content.replace("The most affordable and fastest way to move a standard vehicle. Industry-standard multi-car open trailers.", "The most common and economical multi-car trailer transport mode for standard cars, SUVs, and trucks.")
content = content.replace("Having your car picked up and dropped off exactly where you want it. Direct residential neighborhood access.", "Pickup and delivery as close to your specified residential or commercial address as carrier trucks can safely access.")
content = content.replace("Bumping your vehicle to the front of the dispatch line for rapid pickup. Guaranteed pickup windows.", "Priority scheduling for time-sensitive relocations, event deadlines, or tight pickup windows.")

with open(SERVICES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print(f"SUCCESS: Integrated master EEAT content into original Stripe card grid design at {SERVICES_FILE}")
