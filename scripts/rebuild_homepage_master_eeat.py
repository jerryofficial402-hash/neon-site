import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update Title, Meta Description, Canonical
old_seo = re.compile(r'<!-- Primary SEO -->.*?<link rel="canonical" href="https://neonautotransport.com/">', re.DOTALL)
new_seo = """<!-- Primary SEO -->
  <title>Car Shipping Company | Nationwide Auto Transport Quotes | Neon</title>
  <meta name="description" content="Get a free nationwide car shipping quote from Neon Auto Transport. Compare open and enclosed auto transport, door-to-door delivery, and estimated pricing for your route.">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="Neon Auto Transport">
  <meta name="publisher" content="Neon Auto Transport LLC">
  <meta name="application-name" content="Neon Auto Transport">
  <link rel="canonical" href="https://neonautotransport.com/">"""

if old_seo.search(content):
    content = old_seo.sub(new_seo, content)
    print("SUCCESS: Updated primary SEO metadata")

# 2. Hero Section Update
hero_pattern = re.compile(r'<div class="text-white lg:col-span-6 xl:col-span-7".*?<!-- Hero Copy -->.*?</div>\s*</div>', re.DOTALL)
new_hero = """<div class="text-white lg:col-span-6 xl:col-span-7" style="opacity:1;transform:none;">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] text-xs font-bold mb-6">
       <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
       FMCSA Registered • USDOT #4355879 • MC #1703787
      </div>
      <h1 id="hero-heading" class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 text-white tracking-tighter">
       Nationwide Car Shipping With Fast, Transparent Quotes
      </h1>
      <p id="hero-description" class="text-lg text-[rgba(255,255,255,0.9)] mb-4 max-w-lg leading-relaxed font-medium">
       Arrange door-to-door auto transport for your car, SUV, truck, motorcycle, or specialty vehicle anywhere in the United States. Compare open and enclosed shipping options, use our cost calculator for an estimated rate, or request a free car shipping quote.
      </p>
      <p class="text-xs text-slate-300 max-w-lg leading-relaxed mb-6 font-normal">
       Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange vehicle transportation through independently owned motor carriers.
      </p>

      <div class="flex flex-wrap items-center gap-4 mb-8">
       <div class="flex items-center gap-1">
        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
       </div>
       <div class="text-white text-sm font-bold">
        5.0/5 <span class="font-normal text-white/70">on Google Reviews</span>
       </div>
      </div>
      <div class="flex flex-wrap gap-4 pointer-events-auto items-center">
       <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] py-3.5 px-6 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]" style="text-decoration: none;">Get a Free Car Shipping Quote →</a>
       <a href="/cost-calculator/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-white text-white hover:bg-white hover:text-[#0a2540] transition" style="text-decoration: none;">Calculate Car Shipping Cost →</a>
      </div>
     </div>"""

# Replace hero section
if hero_pattern.search(content):
    content = hero_pattern.sub(new_hero, content)
    print("SUCCESS: Updated Hero Section")

# 3. Trust Cards Update
trust_cards_pattern = re.compile(r'<!-- Trust & Value Propositions -->.*?<!-- How It Works', re.DOTALL)
new_trust_cards = """<!-- Trust & Value Propositions -->
  <section class="py-16 bg-white relative z-10 border-b border-[#e6e6e6]">
   <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
     
     <!-- Box 1 -->
     <div class="stripe-card p-6 flex flex-col items-start border border-[#e6e6e6] hover:border-[#39FF14] transition-colors bg-white group rounded-xl shadow-sm hover:shadow-md">
      <div class="w-12 h-12 rounded-full bg-[#f0f5fa] text-[#0a2540] flex items-center justify-center mb-4 group-hover:bg-[#39FF14] transition-colors">
       <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
      </div>
      <h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Licensed Broker Transparency</h3>
      <p class="text-sm text-[#425466] leading-relaxed mb-4 flex-grow">Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange shipments through independently owned motor carriers.</p>
      <a href="https://safer.fmcsa.dot.gov/" target="_blank" rel="noopener noreferrer" class="text-[#4338ca] font-semibold text-xs uppercase tracking-wider hover:underline mt-auto">Verify Our Authority →</a>
     </div>

     <!-- Box 2 -->
     <div class="stripe-card p-6 flex flex-col items-start border border-[#e6e6e6] hover:border-[#00d4ff] transition-colors bg-white group rounded-xl shadow-sm hover:shadow-md">
      <div class="w-12 h-12 rounded-full bg-[#f0f5fa] text-[#0a2540] flex items-center justify-center mb-4 group-hover:bg-[#00d4ff] group-hover:text-white transition-colors">
       <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path></svg>
      </div>
      <h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Carrier Assignment Coordination</h3>
      <p class="text-sm text-[#425466] leading-relaxed mb-4 flex-grow">After you approve booking details, we coordinate carrier assignment based on your route, vehicle, transport preference, pickup dates, and current availability.</p>
     </div>

     <!-- Box 3 -->
     <div class="stripe-card p-6 flex flex-col items-start border border-[#e6e6e6] hover:border-[#635bff] transition-colors bg-white group rounded-xl shadow-sm hover:shadow-md">
      <div class="w-12 h-12 rounded-full bg-[#f0f5fa] text-[#0a2540] flex items-center justify-center mb-4 group-hover:bg-[#635bff] group-hover:text-white transition-colors">
       <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Pickup and Delivery Windows</h3>
      <p class="text-sm text-[#425466] leading-relaxed mb-4 flex-grow">Your shipment is scheduled within an available pickup window. Pickup and delivery timing can be affected by route conditions, weather, traffic, vehicle access, and carrier scheduling.</p>
     </div>

     <!-- Box 4 -->
     <div class="stripe-card p-6 flex flex-col items-start border border-[#e6e6e6] hover:border-[#0a2540] transition-colors bg-white group rounded-xl shadow-sm hover:shadow-md">
      <div class="w-12 h-12 rounded-full bg-[#f0f5fa] text-[#0a2540] flex items-center justify-center mb-4 group-hover:bg-[#0a2540] group-hover:text-white transition-colors">
       <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h3 class="text-lg font-bold text-[#0a2540] mb-2 leading-tight">Vehicle Inspection Process</h3>
      <p class="text-sm text-[#425466] leading-relaxed mb-4 flex-grow">At pickup and delivery, review vehicle condition with the assigned carrier and retain your Bill of Lading. Document any concerns on the inspection record before signing.</p>
     </div>

    </div>
   </div>
  </section>

  <!-- How It Works"""

if trust_cards_pattern.search(content):
    content = trust_cards_pattern.sub(new_trust_cards, content)
    print("SUCCESS: Updated 4 Trust Cards Section")

# 4. How It Works Section Update
how_it_works_pattern = re.compile(r'<section id="how-it-works".*?</section>', re.DOTALL)
new_how_it_works = """<section id="how-it-works" class="py-32 bg-gradient-to-b from-[#f0f5fa] to-white slant-bottom relative z-10">
   <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
    <div class="max-w-2xl mb-20 reveal">
     <h2 class="text-[#4338ca] font-bold tracking-wide uppercase text-sm mb-4">How It Works</h2>
     <h3 class="text-4xl md:text-5xl font-black text-[#0a2540] tracking-tight mb-6">A clear auto transport process.</h3>
     <p class="text-lg text-[#425466] leading-relaxed">Understand the steps from quote to delivery before you book. For a full walkthrough, visit our <a href="/how-it-works/" class="text-[#4338ca] underline hover:no-underline font-bold">How Car Shipping Works</a> guide.</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
     <!-- Step 1 -->
     <div class="stripe-card p-8 reveal border border-transparent hover:border-[#00d4ff] transition duration-300">
      <div class="w-12 h-12 rounded-full bg-[#f6f9fc] flex items-center justify-center mb-6 shadow-sm border border-[#e6e6e6]">
       <svg aria-hidden="true" class="w-5 h-5 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      </div>
      <h4 class="text-xl font-bold mb-3 text-[#0a2540]">1. Request a Quote</h4>
      <p class="text-[#425466] text-sm leading-relaxed">Enter your pickup and delivery locations, vehicle details, preferred dates, and open or enclosed transport preference to review available options.</p>
     </div>
     <!-- Step 2 -->
     <div class="stripe-card p-8 reveal lg:mt-12 border border-transparent hover:border-[#39FF14] transition duration-300" style="transition-delay: 100ms;">
      <div class="w-12 h-12 rounded-full bg-[#f6f9fc] flex items-center justify-center mb-6 shadow-sm border border-[#e6e6e6]">
       <svg aria-hidden="true" class="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <h4 class="text-xl font-bold mb-3 text-[#0a2540]">2. Confirm Booking &amp; Carrier Assignment</h4>
      <p class="text-[#425466] text-sm leading-relaxed">Review written booking details, including estimated pickup timing and payment terms. Once a suitable carrier is assigned, pickup coordination begins.</p>
     </div>
     <!-- Step 3 -->
     <div class="stripe-card p-8 reveal lg:mt-24 border border-transparent hover:border-[#635bff] transition duration-300" style="transition-delay: 200ms;">
      <div class="w-12 h-12 rounded-full bg-[#f6f9fc] flex items-center justify-center mb-6 shadow-sm border border-[#e6e6e6]">
       <svg aria-hidden="true" class="w-5 h-5 text-[#4338ca]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h4 class="text-xl font-bold mb-3 text-[#0a2540]">3. Inspect at Delivery</h4>
      <p class="text-[#425466] text-sm leading-relaxed">At pickup and delivery, inspect the vehicle with the carrier and sign the Bill of Lading. Note any concerns on the document before signing and keep your copy.</p>
     </div>
    </div>
   </div>
  </section>"""

if how_it_works_pattern.search(content):
    content = how_it_works_pattern.sub(new_how_it_works, content)
    print("SUCCESS: Updated How It Works Section")

# 5. Services Section Update (Keep only 3 core service cards + 1 Explore button)
services_pattern = re.compile(r'<section class="py-32 bg-gradient-to-b from-\[#f0f5fa\] to-\[#f6f9fc\].*?id="services".*?</section>', re.DOTALL)
new_services = """<section class="py-32 bg-gradient-to-b from-[#f0f5fa] to-[#f6f9fc] slant-top relative z-0" id="services">
   <div class="container mx-auto px-4 lg:px-8 max-w-6xl reveal">
    <div class="flex flex-col md:flex-row justify-between items-end mb-12">
     <div class="max-w-2xl">
      <h2 class="text-[#4338ca] font-bold tracking-wide uppercase text-sm mb-4">Transport Services</h2>
      <h3 class="text-4xl md:text-5xl font-black text-[#0a2540] tracking-tight mb-6">Core Auto Transport Options</h3>
      <p class="text-lg text-[#425466] leading-relaxed mb-6">Compare our primary vehicle shipping services or explore specialized transport solutions tailored to your route.</p>
     </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
     <!-- Service 1: Open Auto Transport -->
     <a href="/services/open-auto-transport/" class="stripe-card p-8 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#635bff] bg-white rounded-xl flex flex-col justify-between">
      <div>
       <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform shadow-inner">🚗</div>
       <h4 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#4338ca] transition-colors">Open Auto Transport</h4>
       <p class="text-[#425466] leading-relaxed mb-6 text-sm">A common and typically more economical option for standard cars, SUVs, and trucks transported on an open multi-car trailer.</p>
      </div>
      <span class="text-[#4338ca] font-bold text-sm uppercase tracking-wider flex items-center gap-1 mt-auto">Explore Open Transport <svg aria-hidden="true" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
     </a>

     <!-- Service 2: Enclosed Car Shipping -->
     <a href="/services/enclosed-auto-transport/" class="stripe-card p-8 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#635bff] bg-white rounded-xl flex flex-col justify-between">
      <div>
       <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform shadow-inner">🏎️</div>
       <h4 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#4338ca] transition-colors">Enclosed Car Shipping</h4>
       <p class="text-[#425466] leading-relaxed mb-6 text-sm">Covered transport for classic, luxury, exotic, collector, or condition-sensitive vehicles that may need added protection from weather and road exposure.</p>
      </div>
      <span class="text-[#4338ca] font-bold text-sm uppercase tracking-wider flex items-center gap-1 mt-auto">Explore Enclosed Shipping <svg aria-hidden="true" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
     </a>

     <!-- Service 3: Door-to-Door Car Shipping -->
     <a href="/services/door-to-door-car-shipping/" class="stripe-card p-8 group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#635bff] bg-white rounded-xl flex flex-col justify-between">
      <div>
       <div class="w-14 h-14 rounded-2xl bg-[#e0e7ff] text-[#4338ca] flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform shadow-inner">🏠</div>
       <h4 class="font-black text-2xl text-[#0a2540] mb-3 group-hover:text-[#4338ca] transition-colors">Door-to-Door Car Shipping</h4>
       <p class="text-[#425466] leading-relaxed mb-6 text-sm">The assigned carrier aims to pick up and deliver as close to your selected addresses as safe and legal truck access allows.</p>
      </div>
      <span class="text-[#4338ca] font-bold text-sm uppercase tracking-wider flex items-center gap-1 mt-auto">Learn About Door-to-Door <svg aria-hidden="true" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></span>
     </a>
    </div>

    <div class="text-center">
     <a href="/services/" class="inline-flex items-center gap-2 bg-[#0a2540] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#4338ca] transition shadow-md" style="text-decoration: none;">
      <span>Explore Vehicle Transport Services</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
     </a>
    </div>
   </div>
  </section>"""

if services_pattern.search(content):
    content = services_pattern.sub(new_services, content)
    print("SUCCESS: Updated Services Section")

# 6. Delivery Timeline Section Update
timeline_pattern = re.compile(r'<!-- Transit Time Delivery Timeline Section -->.*?</section>', re.DOTALL)
new_timeline = """<!-- Transit Time Delivery Timeline Section -->
  <section class="py-24 bg-white border-t border-[#e6e6e6] relative z-10" id="transit-time">
   <div class="container mx-auto px-4 lg:px-8 max-w-6xl">
    <div class="max-w-3xl mb-12 reveal">
     <h2 class="text-4xl md:text-5xl font-black text-[#0a2540] tracking-tight mb-6">How Long Does Car Shipping Take?</h2>
     <p class="text-lg text-[#425466] leading-relaxed mb-4">
      Transit time depends on the route, total distance, carrier schedule, traffic, weather, loading stops, delivery access, and federal Hours-of-Service requirements. Transit begins after pickup; carrier assignment and the pickup window are separate from transit time.
     </p>
     <p class="text-lg text-[#425466] leading-relaxed mb-8">
      Regional shipments may take several days after pickup, while long cross-country shipments may take approximately one to two weeks depending on conditions. Your coordinator provides available pickup-window and estimated transit information for your specific route.
     </p>
     <div class="flex flex-wrap items-center gap-4">
      <a href="/cost-calculator/" class="btn-primary py-3.5 px-6 rounded-full font-bold text-base bg-[#635bff] text-white hover:bg-[#4b45cc] transition shadow-md" style="text-decoration: none;">Use the Car Shipping Cost Calculator →</a>
      <a href="/how-it-works/" class="px-6 py-3.5 rounded-full font-bold text-base border-2 border-[#0a2540] text-[#0a2540] hover:bg-[#0a2540] hover:text-white transition" style="text-decoration: none;">See How Car Shipping Works →</a>
     </div>
    </div>
   </div>
  </section>"""

if timeline_pattern.search(content):
    content = timeline_pattern.sub(new_timeline, content)
    print("SUCCESS: Updated Delivery Timeline Section")

# 7. Remove "The Backbone Section" / Stats & duplicated 4-step timeline
backbone_pattern = re.compile(r'<!-- The Backbone Section & Data Fountain -->.*?(?=<!-- Trusted Brands Marquee)', re.DOTALL)
if backbone_pattern.search(content):
    content = backbone_pattern.sub('', content)
    print("SUCCESS: Removed The Backbone Stats & duplicated timeline section")

# 8. Remove Competitor Comparison Table
competitor_pattern = re.compile(r'<!-- Competitor Comparison Section -->.*?</section>', re.DOTALL)
if competitor_pattern.search(content):
    content = competitor_pattern.sub('', content)
    print("SUCCESS: Removed Competitor Comparison Section")

# 9. Clean up Blog Article 3 description
old_blog3_desc = "Real pricing data, hidden fee breakdowns, and a broker comparison to help you avoid overpaying for auto transport."
new_blog3_desc = "Real pricing factors, key distance drivers, and planning guidance to help you navigate auto transport rates."
if old_blog3_desc in content:
    content = content.replace(old_blog3_desc, new_blog3_desc)
    print("SUCCESS: Updated Blog Article 3 description")

# Write updated file
with open(INDEX_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Master EEAT Homepage index.html rebuild complete!")
