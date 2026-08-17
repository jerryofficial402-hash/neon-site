import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
LOCATIONS_DIR = os.path.join(BASE_DIR, "locations")
os.makedirs(LOCATIONS_DIR, exist_ok=True)
LOCATIONS_FILE = os.path.join(LOCATIONS_DIR, "index.html")

locations_html = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Car Shipping Locations & Service Areas | Neon Auto Transport</title>
  <meta name="description" content="Explore Neon Auto Transport nationwide service areas across all 50 states, major cities, and popular auto transport corridors.">
  <link rel="canonical" href="https://neonautotransport.com/locations/">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="/css/styles.css">
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-white text-[#0a2540] antialiased">
  <!-- Announcement Bar -->
  <div class="bg-[#0a2540] text-white text-xs py-2 px-4 text-center font-medium border-b border-slate-800">
   <div class="container mx-auto flex items-center justify-between max-w-7xl">
    <div class="flex items-center gap-2">
     <span class="inline-block w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></span>
     <span>Licensed Auto Transport Broker &bull; MC #1703787 &bull; USDOT #4355879</span>
    </div>
    <div class="hidden md:flex items-center gap-6 text-slate-300">
     <a href="tel:5715767711" class="hover:text-white transition flex items-center gap-1">(571) 576-7711</a>
     <a href="mailto:info@neonautotransport.com" class="hover:text-white transition">info@neonautotransport.com</a>
    </div>
   </div>
  </div>

  <header class="sticky top-0 z-50 bg-[#0a2540]/85 backdrop-blur-md border-b border-slate-800">
   <div class="container mx-auto px-4 max-w-7xl h-20 flex items-center justify-between">
    <a href="/" class="text-2xl font-black text-white uppercase">NEON <span style="color: #00D1FF;">AUTO TRANSPORT</span></a>
    <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] px-5 py-2.5 rounded-full font-black text-sm">Get Quote</a>
   </div>
  </header>

  <main class="pb-20">
    <div class="bg-[#f6f9fc] border-b border-[#e6e6e6] py-3">
      <div class="container mx-auto px-4 max-w-7xl text-xs font-semibold text-[#425466]">
        <a href="/" class="hover:text-[#4338ca]">Home</a> / <span class="text-[#0a2540]">Locations</span>
      </div>
    </div>

    <section class="py-12 bg-gradient-to-b from-[#f6f9fc] to-white border-b border-[#e6e6e6]">
      <div class="container mx-auto px-4 max-w-7xl">
        <h1 class="text-3xl md:text-5xl font-black text-[#0a2540] mb-4">Nationwide Car Shipping Locations</h1>
        <p class="text-base text-[#425466] max-w-3xl leading-relaxed">
          Neon Auto Transport arranges door-to-door auto transport across all 50 states, connecting customers with FMCSA-registered motor carriers along key interstate corridors.
        </p>
      </div>
    </section>

    <section class="py-12">
      <div class="container mx-auto px-4 max-w-7xl space-y-12">
        <!-- Physical Offices -->
        <div class="p-8 bg-white border border-[#e6e6e6] rounded-3xl shadow-sm">
          <h2 class="text-2xl font-black text-[#0a2540] mb-4">Primary Office Locations</h2>
          <div class="grid md:grid-cols-2 gap-6 text-sm">
            <div class="p-6 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
              <span class="text-xs font-bold text-[#4338ca] uppercase">Virginia Location</span>
              <h3 class="font-black text-xl text-[#0a2540] mt-1">Woodbridge, VA</h3>
              <p class="text-xs text-[#425466] mt-2 leading-relaxed">2709 Neabsco Common Pl, Suite 101, Woodbridge, VA 22191<br>Phone: (571) 576-7711</p>
              <a href="/car-shipping-woodbridge-va/" class="text-xs font-bold text-[#4338ca] hover:underline mt-4 inline-block">Woodbridge Car Shipping →</a>
            </div>

            <div class="p-6 bg-[#f6f9fc] rounded-2xl border border-[#e6e6e6]">
              <span class="text-xs font-bold text-[#0891b2] uppercase">California Location</span>
              <h3 class="font-black text-xl text-[#0a2540] mt-1">Live Oak, CA</h3>
              <p class="text-xs text-[#425466] mt-2 leading-relaxed">8333 CA-99, Office 101, Live Oak, CA 95953<br>Phone: (530) 725-5383</p>
              <a href="/live-oak-ca-car-shipping/" class="text-xs font-bold text-[#0891b2] hover:underline mt-4 inline-block">Live Oak Car Shipping →</a>
            </div>
          </div>
        </div>

        <!-- Featured Service Cities -->
        <div>
          <h2 class="text-2xl font-black text-[#0a2540] mb-4">Northern California Service Cities</h2>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-semibold">
            <a href="/live-oak-ca-car-shipping/" class="p-4 bg-white border border-[#e6e6e6] rounded-xl text-[#4338ca] hover:bg-[#4338ca] hover:text-white transition">Live Oak, CA →</a>
            <a href="/yuba-city-ca-car-shipping/" class="p-4 bg-white border border-[#e6e6e6] rounded-xl text-[#4338ca] hover:bg-[#4338ca] hover:text-white transition">Yuba City, CA →</a>
            <a href="/marysville-ca-car-shipping/" class="p-4 bg-white border border-[#e6e6e6] rounded-xl text-[#4338ca] hover:bg-[#4338ca] hover:text-white transition">Marysville, CA →</a>
            <a href="/gridley-ca-car-shipping/" class="p-4 bg-white border border-[#e6e6e6] rounded-xl text-[#4338ca] hover:bg-[#4338ca] hover:text-white transition">Gridley, CA →</a>
            <a href="/oroville-ca-car-shipping/" class="p-4 bg-white border border-[#e6e6e6] rounded-xl text-[#4338ca] hover:bg-[#4338ca] hover:text-white transition">Oroville, CA →</a>
            <a href="/chico-ca-car-shipping/" class="p-4 bg-white border border-[#e6e6e6] rounded-xl text-[#4338ca] hover:bg-[#4338ca] hover:text-white transition">Chico, CA →</a>
            <a href="/sacramento-ca-car-shipping/" class="p-4 bg-white border border-[#e6e6e6] rounded-xl text-[#4338ca] hover:bg-[#4338ca] hover:text-white transition">Sacramento, CA →</a>
            <a href="/california-car-shipping/" class="p-4 bg-[#39FF14] text-[#0a2540] font-black rounded-xl hover:bg-[#32e011] transition">California State Hub →</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="bg-[#0a2540] text-slate-300 py-8 px-6 text-xs text-center border-t border-slate-800">
    © 2026 Neon Auto Transport LLC | DOT: 4355879 | MC: 1703787
  </footer>
</body>
</html>
"""

with open(LOCATIONS_FILE, "w", encoding="utf-8") as f:
    f.write(locations_html)

print("SUCCESS: Built /locations/index.html hub page!")
