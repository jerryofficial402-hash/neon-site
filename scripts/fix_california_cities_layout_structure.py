import os
import re

CITIES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\california-car-shipping-cities\index.html"

with open(CITIES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace the entire <main> block with clean, balanced, 100% structured layout
old_main_pattern = r'<main>.*?</main>'

new_main_content = """<main>
    <!-- Hero Section -->
    <section class="bg-[#f6f9fc] border-b border-[#e6e6e6] py-16 lg:py-24">
      <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div class="lg:w-1/2 flex flex-col justify-center">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e6e6e6] bg-white shadow-sm text-[#0a2540] text-xs font-bold mb-6 self-start">
              <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
              FMCSA Registered • USDOT #4355879 • MC #1703787
            </div>
            <h1 class="font-black text-[#0a2540] mb-6 tracking-tight leading-tight">
              <span class="block text-4xl lg:text-5xl mb-2">California Car Shipping Cities:</span>
              <span class="block text-2xl lg:text-3xl text-[#468de6] font-bold">Costs, Routes & Local Guides</span>
            </h1>
            <p class="text-lg text-[#425466] mb-4 leading-relaxed font-normal">
              Compare estimated car shipping costs, pickup windows, and open or enclosed transport options for California's largest metro areas. Choose a city below for local pickup details, popular routes, and a free car shipping quote.
            </p>
            <p class="text-base text-[#425466] mb-6 leading-relaxed font-normal">
              For statewide route overviews and interstate corridor pricing, visit our main <a href="/california-car-shipping/" class="text-[#2563eb] font-bold hover:underline">California Car Shipping</a> hub, calculate rates with our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a>, or <a href="/car-shipping-quote/" class="text-[#2563eb] font-bold hover:underline">request a free quote</a>.
            </p>
            <p class="text-xs text-slate-500 mb-8 font-medium">
              Neon Auto Transport LLC is a licensed auto transport broker operating under MC #1703787 and USDOT #4355879. We arrange shipments through independently owned and insured motor carriers.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_15px_rgba(57,255,20,0.4)] flex items-center gap-2">
                Get Free Quote
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="/cost-calculator/" class="bg-[#0a2540] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1a3a5a] transition shadow-md">
                Cost Calculator
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 relative w-full">
            <div class="relative rounded-3xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-black/5 transform hover:scale-[1.02] transition duration-500 bg-white p-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/1280px-Flag_of_California.svg.png" alt="California Auto Transport Cities" class="w-full h-auto rounded-2xl object-contain" style="max-height: 450px;" width="1200" height="800" fetchpriority="high" decoding="async" loading="eager">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="container mx-auto px-4 lg:px-8 max-w-6xl py-16">
      
      <!-- City Directory Navigation Grid -->
      <div class="mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-[#0a2540] tracking-tight">Find Car Shipping Services in California Cities</h2>
        <p class="text-base text-[#425466] mb-8 leading-relaxed">
          Choose your pickup or delivery city to see local carrier access, popular routes, estimated transit ranges, and options for <a href="/services/open-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Open Auto Transport</a> or <a href="/services/enclosed-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Enclosed Car Shipping</a>.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Los Angeles Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Major SoCal hub with dense I-5 & I-10 carrier coverage for open & enclosed auto transport.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Los Angeles Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">San Diego Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Southern border corridor access via I-5 & I-15 for cross-country vehicle shipping.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">San Diego Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">San Francisco Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Bay Area door-to-door shipping with designated meeting points for narrow urban streets.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">San Francisco Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">San Jose Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Silicon Valley tech relocation & luxury vehicle transport via US-101 and I-880.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">San Jose Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Sacramento Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Capital corridor hub connecting Northern California via I-5 and I-80 interstate routes.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Sacramento Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Fresno Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Central Valley shipping corridor providing competitive long-distance transport value.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Fresno Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Long Beach Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Port-adjacent vehicle transport with fast connections to the greater LA area.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Long Beach Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Oakland Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">East Bay shipping hub serving industrial, commercial, and residential vehicle relocations.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Oakland Transport Guide &rarr;</a>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm hover:shadow-md transition">
            <h3 class="text-xl font-bold text-[#0a2540] mb-2">Anaheim & Irvine Car Shipping</h3>
            <p class="text-xs text-[#425466] mb-4">Orange County vehicle logistics with direct interstate access to I-5 and CA-55.</p>
            <a href="/california-car-shipping/" class="text-[#2563eb] font-bold text-xs hover:underline flex items-center gap-1">Orange County Transport &rarr;</a>
          </div>

        </div>
      </div>

      <!-- Two-Column Layout for Main Content & Sidebar -->
      <div class="grid lg:grid-cols-3 gap-12">
        
        <!-- Left 2 Columns -->
        <div class="lg:col-span-2 space-y-12 min-w-0">

          <div>
            <div class="mb-6">
              <a href="/california-car-shipping/" class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0a2540] text-white font-bold rounded-full hover:bg-[#1a3a5a] transition-all shadow-md group text-sm">
                <svg class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
                View California Statewide Routes & Hub
              </a>
            </div>
            <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Choosing Auto Transport in California Cities</h2>
            <p class="text-[#425466] mb-4 leading-relaxed">Car shipping logistics vary by city. Major metro areas such as Los Angeles, San Diego, San Francisco, San Jose, Sacramento, and Oakland have access to major interstate corridors and regular carrier activity. Pickup timing, vehicle transport pricing, and available carrier types still depend on your exact route, vehicle, pickup date, and street access.</p>
            <p class="text-[#425466] mb-8 leading-relaxed">In dense neighborhoods, gated communities, apartment complexes, and narrow urban streets, a large auto carrier may need to meet you at a nearby safe, truck-accessible location. Your assigned carrier will coordinate the practical pickup and delivery details before dispatch.</p>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Open Auto Transport vs. Enclosed Car Shipping</h2>
            <p class="text-[#425466] mb-6 leading-relaxed">Open auto transport is the standard and generally more affordable option for daily-driver vehicles. Enclosed car shipping uses a covered trailer and is commonly selected for classic, luxury, exotic, or collector vehicles that need additional protection from weather and road debris. Learn more about <a href="/services/open-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Open Auto Transport</a> or <a href="/services/enclosed-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Enclosed Car Shipping</a> options.</p>
            <div class="overflow-x-auto bg-white rounded-xl shadow-sm border border-[#e6e6e6] mb-8">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-[#0a2540] text-white text-sm font-bold tracking-wider">
                    <th class="py-5 px-6">Factor</th>
                    <th class="py-5 px-6">Open Carrier</th>
                    <th class="py-5 px-6">Enclosed Carrier</th>
                  </tr>
                </thead>
                <tbody class="text-[#425466] text-[15px]">
                  <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition"><td class="py-5 px-6 font-bold text-[#0a2540]">Cost</td><td class="py-5 px-6">Standard, budget-friendly</td><td class="py-5 px-6">Higher, premium white-glove service</td></tr>
                  <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition"><td class="py-5 px-6 font-bold text-[#0a2540]">Protection</td><td class="py-5 px-6">Exposed to weather & road elements</td><td class="py-5 px-6">Fully enclosed, hard-sided trailer</td></tr>
                  <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition"><td class="py-5 px-6 font-bold text-[#0a2540]">Best for</td><td class="py-5 px-6">Sedans, SUVs, trucks, daily drivers</td><td class="py-5 px-6"><a href="/services/luxury-car-shipping/" class="text-[#2563eb] hover:underline font-medium">Luxury, classic, or exotic cars</a></td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-5 px-6 font-bold text-[#0a2540]">Availability</td><td class="py-5 px-6">Widely available nationwide</td><td class="py-5 px-6">Specialized carrier network</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">What Affects City-to-City Pricing?</h2>
            <p class="text-[#425466] mb-4 leading-relaxed">Estimated pricing for California city-to-city transport depends on:</p>
            <ul class="space-y-2.5 text-[#425466] mb-6 pl-4 list-disc font-medium">
              <li>Distance and route demand</li>
              <li>Vehicle size, modifications, and operability</li>
              <li>Open or enclosed trailer selection</li>
              <li>Pickup and delivery accessibility</li>
              <li>Date flexibility and seasonal carrier availability</li>
              <li>Urban traffic, restricted streets, and meeting-point requirements</li>
            </ul>
            <p class="text-[#425466] mb-8 leading-relaxed">Short routes can still have a minimum transport charge because loading, insurance, scheduling, and carrier operating costs do not decrease in direct proportion to mileage. Use our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a> for a current estimate tailored to your exact route.</p>
          </div>

          <div class="my-8 p-8 bg-white rounded-2xl border border-[#e6e6e6] shadow-sm text-center">
            <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Explore California Interstate Routes</h3>
            <p class="text-sm text-[#425466] mb-6 max-w-xl mx-auto">Planning a move beyond California? Visit our California Car Shipping hub for statewide route information, estimated transit times, and links to popular interstate corridors.</p>
            <a href="/california-car-shipping/" class="bg-[#2563eb] text-white font-bold py-3.5 px-8 rounded-full inline-block hover:bg-[#1d4ed8] transition shadow-sm">View California Statewide Routes &rarr;</a>
          </div>

          <div class="p-8 bg-[#0a2540] rounded-2xl shadow-xl text-white text-center">
            <h3 class="text-2xl lg:text-3xl font-bold mb-3 text-white">Get a Free California Car Shipping Quote</h3>
            <p class="text-[#cdd5df] mb-6 text-sm max-w-xl mx-auto">Compare open and enclosed transport options for your route. Pricing and pickup windows depend on your vehicle, dates, pickup/delivery access, and carrier availability.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] px-8 py-3.5 rounded-full font-black text-base hover:bg-[#32e011] transition shadow-md w-full sm:w-auto">Get My Free Quote</a>
              <a href="/cost-calculator/" class="bg-white/10 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-base hover:bg-white/20 transition w-full sm:w-auto">Use the Cost Calculator</a>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">FAQ</h2>
            <div class="space-y-6 mb-8">
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6]">
                <h3 class="font-bold text-xl text-[#0a2540] mb-3">How much does it cost to ship a car between California cities?</h3>
                <p class="text-[#425466] leading-relaxed">In-state shipping typically ranges from $150 for short routes like San Diego to Long Beach, up to $500 for longer routes like Los Angeles to San Francisco. Short routes still carry a minimum transport fee to cover loading and carrier overhead. Calculate live rates with our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a>.</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6]">
                <h3 class="font-bold text-xl text-[#0a2540] mb-3">How long does car shipping take within California?</h3>
                <p class="text-[#425466] leading-relaxed">Most in-state routes take 1–4 days from pickup to delivery, depending on the carrier's existing route, driver hours of service, and distance between cities.</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6]">
                <h3 class="font-bold text-xl text-[#0a2540] mb-3">Can an auto carrier pick up at my apartment, gated community, or narrow street?</h3>
                <p class="text-[#425466] leading-relaxed">In dense neighborhoods or restricted access zones, a multi-car carrier may ask to meet you at a nearby safe, truck-accessible parking lot or shopping center.</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6]">
                <h3 class="font-bold text-xl text-[#0a2540] mb-3">Is open or enclosed transport better for my vehicle?</h3>
                <p class="text-[#425466] leading-relaxed">Open carrier transport is the standard and most affordable option for daily drivers. Enclosed transport provides a covered trailer for classic, luxury, or high-value vehicles needing extra weather and road debris protection.</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6]">
                <h3 class="font-bold text-xl text-[#0a2540] mb-3">Do I need to be present at pickup and delivery?</h3>
                <p class="text-[#425466] leading-relaxed">Yes — you or an authorized representative needs to be present to perform a vehicle condition inspection and sign the Bill of Lading at both pickup and delivery.</p>
              </div>
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-[#e6e6e6]">
                <h3 class="font-bold text-xl text-[#0a2540] mb-3">How do I get a California city-to-city shipping quote?</h3>
                <p class="text-[#425466] leading-relaxed">You can get an instant estimate using our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a> or request a live personalized quote on our <a href="/car-shipping-quote/" class="text-[#2563eb] font-bold hover:underline">Free Quote Page</a>.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right 1 Column Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-24 space-y-6">
            
            <div class="stripe-card p-6 border-t-4 border-[#635bff] bg-white rounded-2xl border border-[#e6e6e6] shadow-sm">
              <h3 class="font-bold text-xl mb-4 text-[#0a2540]">How Car Shipping Works in CA</h3>
              <div class="relative pl-6 border-l-2 border-[#e6e6e6] space-y-6 pb-2">
                <div class="relative">
                  <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#e0e7ff] border-2 border-white text-[#4338ca] flex items-center justify-center text-xs font-bold shadow-sm">1</div>
                  <h4 class="font-bold text-[#0a2540] text-sm mb-1">Get an Instant Quote</h4>
                  <p class="text-xs text-[#425466] leading-relaxed">Use our calculator to get a transparent estimated rate.</p>
                </div>
                <div class="relative">
                  <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#e0e7ff] border-2 border-white text-[#4338ca] flex items-center justify-center text-xs font-bold shadow-sm">2</div>
                  <h4 class="font-bold text-[#0a2540] text-sm mb-1">Carrier Assignment</h4>
                  <p class="text-xs text-[#425466] leading-relaxed">A licensed, insured carrier is scheduled for your vehicle pickup.</p>
                </div>
                <div class="relative">
                  <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-[#e0e7ff] border-2 border-white text-[#4338ca] flex items-center justify-center text-xs font-bold shadow-sm">3</div>
                  <h4 class="font-bold text-[#0a2540] text-sm mb-1">Safe Delivery</h4>
                  <p class="text-xs text-[#425466] leading-relaxed">Your vehicle arrives safely. Inspect, sign the Bill of Lading, and proceed.</p>
                </div>
              </div>
              <a href="/cost-calculator/" class="btn-primary w-full mt-6 py-3 block text-center font-bold text-sm">Start Your Quote &rarr;</a>
            </div>

            <div class="bg-[#0a2540] rounded-2xl p-6 text-white text-center shadow-lg">
              <div class="w-12 h-12 bg-[#39FF14] rounded-full mx-auto flex items-center justify-center mb-4 text-[#0a2540]">
                <svg aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 class="font-bold text-xl mb-2">Speak to a Specialist</h3>
              <p class="text-xs text-[#cdd5df] mb-6">Have custom vehicle transport questions? Talk to an auto transport expert now.</p>
              <a href="tel:5715767711" class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#39FF14] text-[#0a2540] font-black hover:bg-[#32e612] transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] text-lg w-full">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                (571) 576-7711
              </a>
            </div>

          </div>
        </div>

      </div>

      <div class="mt-16 text-center">
        <a href="/locations/" class="text-[#4338ca] font-bold hover:underline flex items-center justify-center gap-2 text-sm">
          <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to All US Locations
        </a>
      </div>

    </section>

    <!-- Nearby Cities Module -->
    <section class="nearby-cities py-12 bg-[#f6f9fc] border-t border-[#e6e6e6]" aria-label="Car shipping cities in California">
      <div class="container mx-auto px-4 max-w-6xl">
        <h3 class="text-2xl font-black text-[#0a2540] mb-2 text-center">Car Shipping Near You in California</h3>
        <p class="text-xs text-[#425466] text-center mb-6">Popular local pickup &amp; delivery hubs across California</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <a href="/california-car-shipping/fresno/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            Fresno Car Shipping &rarr;
          </a>
          <a href="/california-car-shipping/houston-tx-to-los-angeles/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            Houston Tx To Los Angeles Car Shipping &rarr;
          </a>
          <a href="/california-car-shipping/los-angeles/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            Los Angeles Car Shipping &rarr;
          </a>
          <a href="/california-car-shipping/new-york-city-ny-to-los-angeles/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            New York City Ny To Los Angeles Car Shipping &rarr;
          </a>
          <a href="/california-car-shipping/san-diego/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            San Diego Car Shipping &rarr;
          </a>
          <a href="/california-car-shipping/san-francisco/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            San Francisco Car Shipping &rarr;
          </a>
          <a href="/california-car-shipping/san-francisco-ca-to-los-angeles/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            San Francisco Ca To Los Angeles Car Shipping &rarr;
          </a>
          <a href="/california-car-shipping/san-jose/" class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:border-[#635bff] transition block text-xs font-bold text-[#0a2540] hover:text-[#4338ca]">
            San Jose Car Shipping &rarr;
          </a>
        </div>
      </div>
    </section>
  </main>"""

content = re.sub(old_main_pattern, new_main_content.strip(), content, flags=re.DOTALL)

with open(CITIES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Fully restored clean 2-column grid layout for California Car Shipping Cities hub page!")
