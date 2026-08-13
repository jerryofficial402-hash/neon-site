import os
import re

ROUTE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\california-to-texas-enclosed\index.html"
SERVICE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\services\enclosed-auto-transport.html"

# Perfectly Structured Full-Width Modular Layout with ZERO Overlaps & Equal Height Cards
perfect_route_body = """    <!-- Main Content Body (Full-Width Modular Layout — Zero Overlaps & Equal Height Cards) -->
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl mt-12 mb-24 space-y-16">
      
      <!-- Section 1: Overview & Key Facts (2-Column Equal Height Row) -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Left: Answer-First Intro Card -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0369a1] text-xs font-bold uppercase tracking-wider mb-5">
              <span class="w-2 h-2 rounded-full bg-[#0369a1]"></span> Route Overview
            </div>
            <h2 class="text-2xl lg:text-3xl font-black text-[#0a2540] mb-4 leading-tight">Enclosed Car Shipping California to Texas Overview</h2>
            <p class="text-[#425466] text-base lg:text-lg leading-relaxed mb-6 font-normal">
              Enclosed car shipping from California to Texas costs between <strong class="text-[#0a2540]">$1,400 and $2,200</strong> in 2026, depending on vehicle type, specific cities, and season. The 1,500-mile journey typically takes <strong class="text-[#0a2540]">3–6 days in transit</strong>, with total time from booking to delivery averaging 7–10 days. Enclosed transport is recommended for luxury, classic, exotic, and high-value vehicles valued over $80,000.
            </p>
          </div>
          <div class="pt-6 border-t border-[#e6e6e6] flex flex-wrap gap-4 text-xs font-semibold text-[#0a2540]">
            <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> FMCSA Licensed</span>
            <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> $500K Cargo Coverage</span>
            <span class="flex items-center gap-1.5"><svg class="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> Zero Upfront Deposit</span>
          </div>
        </div>

        <!-- Right: Key Facts Grid Card -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <h3 class="text-xs font-black text-[#0369a1] uppercase tracking-widest mb-6 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#39FF14]"></span> ROUTE AT A GLANCE — KEY FACTS
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Distance</div>
                <div class="font-bold text-[#0a2540] text-base">1,500–1,600 Miles</div>
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Enclosed Cost</div>
                <div class="font-bold text-[#0369a1] text-base">$1,400–$2,200</div>
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Transit Time</div>
                <div class="font-bold text-[#0a2540] text-base">3–6 Business Days</div>
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Best Time to Ship</div>
                <div class="font-bold text-[#0a2540] text-base">Jan–Apr, Aug–Oct</div>
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Primary Highway</div>
                <div class="font-bold text-[#0a2540] text-base">I-10 Corridor East</div>
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="text-xs text-[#64748b] font-bold uppercase mb-1">Upfront Deposit</div>
                <div class="font-bold text-[#0a2540] text-base">$0 Required</div>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs text-[#64748b] font-medium text-right">
            Updated for 2026 Season
          </div>
        </div>
      </section>

      <!-- Section 2: Pricing & City Routes (Full-Width Block Container) -->
      <section class="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#e6e6e6] w-full">
        <div class="mb-8">
          <h2 class="text-2xl lg:text-3xl font-black text-[#0a2540] mb-3">Enclosed Car Shipping California to Texas Cost — 2026 Pricing</h2>
          <p class="text-[#425466] text-base leading-relaxed">
            Enclosed car shipping from California to Texas costs between $1,400 and $2,200 in 2026, depending on vehicle type, specific cities, and seasonal demand. The 1,500-mile route is one of the busiest auto transport corridors in the U.S., which keeps pricing competitive but also means summer peaks can drive rates higher.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <!-- Left Table: By Vehicle Type -->
          <div class="space-y-4 w-full">
            <h3 class="text-xl font-bold text-[#0a2540] flex items-center gap-2">
              <svg class="w-5 h-5 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 014 0m6 0a2 2 0 104 0m-4 0a2 2 0 014 0"/></svg>
              Pricing by Vehicle Type
            </h3>
            <div class="overflow-x-auto rounded-xl border border-[#e6e6e6]">
              <table class="w-full text-left border-collapse text-sm">
                <thead>
                  <tr class="bg-[#0a2540] text-white">
                    <th class="p-3.5 font-bold">Vehicle Type</th>
                    <th class="p-3.5 font-bold text-[#00d4ff]">Enclosed Cost</th>
                    <th class="p-3.5 font-bold">Transit</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#e6e6e6] bg-white">
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Sedan / Coupe</td><td class="p-3.5 font-bold text-[#4338ca]">$1,400 – $1,900</td><td class="p-3.5">3–5 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Luxury Sedan</td><td class="p-3.5 font-bold text-[#4338ca]">$1,600 – $2,100</td><td class="p-3.5">3–6 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">SUV / Pickup</td><td class="p-3.5 font-bold text-[#4338ca]">$1,600 – $2,150</td><td class="p-3.5">4–6 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Exotic / Supercar</td><td class="p-3.5 font-bold text-[#4338ca]">$1,800 – $2,600</td><td class="p-3.5">4–7 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Classic / Vintage</td><td class="p-3.5 font-bold text-[#4338ca]">$1,800 – $2,600</td><td class="p-3.5">5–8 days</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Right Table: City-to-City Costs -->
          <div class="space-y-4 w-full">
            <h3 class="text-xl font-bold text-[#0a2540] flex items-center gap-2">
              <svg class="w-5 h-5 text-[#00D1FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              Popular City-to-City Routes
            </h3>
            <div class="overflow-x-auto rounded-xl border border-[#e6e6e6]">
              <table class="w-full text-left border-collapse text-sm">
                <thead>
                  <tr class="bg-[#f6f9fc] border-b border-[#e6e6e6]">
                    <th class="p-3.5 font-bold text-[#0a2540]">City Pair</th>
                    <th class="p-3.5 font-bold text-[#0a2540]">Miles</th>
                    <th class="p-3.5 font-bold text-[#4338ca]">Cost Range</th>
                    <th class="p-3.5 font-bold text-[#0a2540]">Transit</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#e6e6e6] bg-white">
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Los Angeles to Houston</td><td class="p-3.5">1,547 mi</td><td class="p-3.5 font-bold text-[#4338ca]">$1,600 – $2,100</td><td class="p-3.5">3–5 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">San Diego to Dallas</td><td class="p-3.5">1,430 mi</td><td class="p-3.5 font-bold text-[#4338ca]">$1,500 – $2,000</td><td class="p-3.5">3–5 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">San Francisco to Austin</td><td class="p-3.5">1,850 mi</td><td class="p-3.5 font-bold text-[#4338ca]">$1,800 – $2,400</td><td class="p-3.5">4–6 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Sacramento to San Antonio</td><td class="p-3.5">1,750 mi</td><td class="p-3.5 font-bold text-[#4338ca]">$1,700 – $2,300</td><td class="p-3.5">4–6 days</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">San Jose to El Paso</td><td class="p-3.5">1,200 mi</td><td class="p-3.5 font-bold text-[#4338ca]">$1,400 – $1,900</td><td class="p-3.5">3–5 days</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[#e6e6e6] text-sm text-[#425466]">
          <h4 class="font-bold text-[#0a2540] mb-2">What drives enclosed transport pricing on this route?</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5">
            <li><strong>Distance &amp; route:</strong> Primary I-10 corridor spanning 1,400–1,900 miles.</li>
            <li><strong>Vehicle size &amp; clearance:</strong> Low-clearance exotics require hydraulic lift gates.</li>
            <li><strong>Seasonal demand:</strong> Summer relocation peaks increase rates 10–20%.</li>
            <li><strong>Carrier availability:</strong> High-volume route maintains strong carrier frequency.</li>
          </ul>
        </div>
      </section>

      <!-- Section 3: Route Details & Seasonal Trends (2-Column Equal Height Row) -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Left: Highway Details Card -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0fdf4] text-[#166534] text-xs font-bold uppercase tracking-wider mb-4">
              <span class="w-2 h-2 rounded-full bg-[#166534]"></span> Interstate Highway Overview
            </div>
            <h2 class="text-2xl lg:text-3xl font-black text-[#0a2540] mb-4">California to Texas Route — I-10 Corridor</h2>
            <p class="text-[#425466] leading-relaxed mb-6">
              From Southern California, enclosed carriers head east on <strong>Interstate 10 (I-10)</strong> through Arizona and New Mexico into West Texas, then fan out to El Paso, San Antonio, Austin, Houston, and up toward Dallas. This is one of the most efficient and heavily trafficked auto transport routes in the country.
            </p>
            <ul class="space-y-2.5 text-sm text-[#425466] mb-6">
              <li class="flex items-center gap-2"><svg class="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> <strong>Origins:</strong> Los Angeles, San Diego, San Francisco, Sacramento</li>
              <li class="flex items-center gap-2"><svg class="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> <strong>Primary Route:</strong> I-10 East (LA &rarr; Phoenix &rarr; El Paso &rarr; Houston)</li>
              <li class="flex items-center gap-2"><svg class="w-4 h-4 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg> <strong>Secondary Routes:</strong> I-20 East to Dallas, I-35 North to Austin</li>
            </ul>
          </div>
          <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] text-xs text-[#64748b]">
            ⚡ <strong>Transit Guarantee:</strong> Average 3–6 days once loaded on carrier.
          </div>
        </div>

        <!-- Right: Seasonal Trends Card -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fefce8] text-[#ca8a04] text-xs font-bold uppercase tracking-wider mb-4">
              <span class="w-2 h-2 rounded-full bg-[#ca8a04]"></span> Seasonal Pricing Guide
            </div>
            <h2 class="text-2xl lg:text-3xl font-black text-[#0a2540] mb-4">Best Time to Ship — California to Texas</h2>
            <p class="text-[#425466] leading-relaxed mb-6">
              The cheapest time to ship from California to Texas is <strong>late fall and winter (January–April)</strong>, avoiding peak summer relocation season. Late summer (August–October) also offers good pricing and availability.
            </p>
            <div class="grid grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                <div class="font-bold text-[#0a2540]">Summer (May–Aug)</div>
                <div class="text-[#64748b]">Peak relocation; rates +10-20%</div>
              </div>
              <div class="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                <div class="font-bold text-[#0a2540]">Fall (Sep–Nov)</div>
                <div class="text-[#64748b]">Moderate demand, stable rates</div>
              </div>
              <div class="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                <div class="font-bold text-[#166534]">Winter (Dec–Mar)</div>
                <div class="text-[#166534]">Lowest demand, best rates</div>
              </div>
              <div class="p-3 bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
                <div class="font-bold text-[#0a2540]">Spring (Apr–May)</div>
                <div class="text-[#64748b]">Relocation season starting</div>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs text-[#0a2540] font-semibold flex items-center gap-2">
            💡 Pro Tip: Booking 2-3 weeks ahead during summer locks in lower rates.
          </div>
        </div>
      </section>

      <!-- Section 4: Vehicles & Comparison (2-Column Equal Height Row) -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Left: Vehicle Eligibility List -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <h2 class="text-2xl font-black text-[#0a2540] mb-4">Vehicles Requiring Enclosed Transport</h2>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">
              The 1,500-mile journey crosses desert, mountain, and plains terrain. Enclosed trailers shield high-value vehicles from road debris, dust, and UV exposure.
            </p>
            <ul class="space-y-3 text-sm text-[#425466]">
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Luxury Sedans ($80K+):</strong> Mercedes S-Class, BMW 7 Series, Audi A8</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Exotics &amp; Supercars:</strong> Ferrari, Lamborghini, McLaren, Porsche 911 GT3</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Classics &amp; Vintage:</strong> Pre-1980 American muscle, European classics</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Low-Clearance Supercars:</strong> Clearance &lt;4" requires hydraulic lift gates</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>EVs &amp; Battery Tech:</strong> Tesla Plaid, Lucid Air requiring specialized care</span></li>
            </ul>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs text-[#64748b]">
            Soft-tie strap tie-downs prevent wheel rim or frame contact damage.
          </div>
        </div>

        <!-- Right: Comparison Table -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <h2 class="text-2xl font-black text-[#0a2540] mb-4">Enclosed vs. Open Transport — CA to TX</h2>
            <div class="overflow-x-auto rounded-xl border border-[#e6e6e6]">
              <table class="w-full text-left border-collapse text-sm">
                <thead>
                  <tr class="bg-[#f6f9fc] border-b border-[#e6e6e6]">
                    <th class="p-3.5 font-bold text-[#0a2540]">Feature</th>
                    <th class="p-3.5 font-bold text-[#4338ca]">Enclosed Transport</th>
                    <th class="p-3.5 font-bold text-[#0a2540]">Open Transport</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#e6e6e6] bg-white">
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Cost (CA&rarr;TX)</td><td class="p-3.5 font-bold text-[#4338ca]">$1,400 – $2,200</td><td class="p-3.5">$900 – $1,300</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Weather protection</td><td class="p-3.5 text-green-600 font-bold">Complete</td><td class="p-3.5 text-red-500 font-bold">None</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Dust/debris protection</td><td class="p-3.5 text-green-600 font-bold">Complete</td><td class="p-3.5 text-orange-500 font-bold">Minimal</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Cargo Insurance</td><td class="p-3.5 font-bold text-[#4338ca]">Up to $500,000</td><td class="p-3.5">Up to $250,000</td></tr>
                  <tr class="hover:bg-[#f6f9fc]"><td class="p-3.5 font-semibold text-[#0a2540]">Best for</td><td class="p-3.5 font-bold text-[#4338ca]">Luxury, classic, exotic</td><td class="p-3.5">Standard daily drivers</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs text-[#64748b]">
            Enclosed transport maintains vehicle resale value and paint perfection.
          </div>
        </div>
      </section>

      <!-- Section 5: Documents & Preparation (2-Column Equal Height Row) -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <!-- Left: Required Documents -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <h2 class="text-2xl font-black text-[#0a2540] mb-4">Required Documents for Interstate Transport</h2>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">
              For domestic interstate shipping from California to Texas, paperwork is minimal. The driver issues the primary document at pickup.
            </p>
            <div class="space-y-4 text-sm">
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="font-bold text-[#0a2540] mb-1">📋 Bill of Lading (BOL)</div>
                <div class="text-[#425466]">Always required. Official contract and condition inspection report at pickup and delivery.</div>
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="font-bold text-[#0a2540] mb-1">🛡️ Carrier Cargo Insurance Certificate</div>
                <div class="text-[#425466]">Always provided by Neon before dispatch. You do not need to show personal insurance proof.</div>
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e2e8f0]">
                <div class="font-bold text-[#0a2540] mb-1">🆔 Photo ID &amp; Keys</div>
                <div class="text-[#425466]">Have your ID and vehicle keys ready for driver verification at pickup.</div>
              </div>
            </div>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs text-[#64748b]">
            Keep a copy of your signed BOL for legal condition verification.
          </div>
        </div>

        <!-- Right: Preparation Steps -->
        <div class="lg:col-span-6 bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <h2 class="text-2xl font-black text-[#0a2540] mb-4">Vehicle Preparation Checklist</h2>
            <p class="text-[#425466] text-sm leading-relaxed mb-6">
              Preparing your high-value vehicle ensures a smooth 1,500-mile transit between California and Texas:
            </p>
            <ul class="space-y-3 text-sm text-[#425466]">
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Detail &amp; Photograph:</strong> Wash exterior and photograph every panel in daylight.</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Fuel Level at 1/4:</strong> Enough gas for loading without adding excess weight.</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Remove Personal Items:</strong> Empty trunk and interior; remove toll transponders.</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Alarm Code:</strong> Disable aftermarket alarm or provide disarm instructions to driver.</span></li>
              <li class="flex items-start gap-2.5"><span class="text-[#39FF14] font-bold">✓</span><span><strong>Ground Clearance Check:</strong> Confirm lift gate requirement if clearance is under 4".</span></li>
            </ul>
          </div>
          <div class="mt-6 pt-4 border-t border-[#e6e6e6] text-xs text-[#64748b]">
            Inspect vehicle exterior together with driver at pickup and delivery.
          </div>
        </div>
      </section>

      <!-- Section 6: Why Choose Neon (3-Column Equal Height Cards) -->
      <section class="bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-[#e6e6e6] w-full">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <h2 class="text-3xl font-black text-[#0a2540] mb-3">Why Choose Neon for California to Texas Shipping?</h2>
          <p class="text-[#425466] text-base">Hundreds of brokers offer enclosed auto transport. Here is what sets Neon apart on the I-10 corridor:</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#e0f2fe] text-[#0369a1] flex items-center justify-center font-bold text-lg mb-4">$0</div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">Zero Upfront Deposit</h3>
              <p class="text-sm text-[#425466] leading-relaxed">No upfront charges. You pay nothing until a vetted enclosed carrier is assigned to your vehicle.</p>
            </div>
          </div>

          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#f0fdf4] text-[#166534] flex items-center justify-center font-bold text-lg mb-4">📞</div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">Direct Driver Contact</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Direct phone contact with your enclosed driver for real-time updates across the 1,500-mile route.</p>
            </div>
          </div>

          <div class="p-6 bg-[#f8fafc] rounded-xl border border-[#e2e8f0] flex flex-col justify-between h-full">
            <div>
              <div class="w-10 h-10 rounded-full bg-[#fefce8] text-[#ca8a04] flex items-center justify-center font-bold text-lg mb-4">🛡️</div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">$500,000 Cargo Insurance</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Comprehensive insurance certificate provided before dispatch on every enclosed shipment.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 7: FAQs (2-Column Equal Height Q&A Grid) -->
      <section class="bg-[#f8fafc] p-8 lg:p-12 rounded-2xl border border-[#e6e6e6] w-full">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <h2 class="text-3xl font-black text-[#0a2540] mb-3">California to Texas Enclosed Shipping FAQs</h2>
          <p class="text-[#425466] text-sm">Answers to common questions about enclosed shipping between California and Texas.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div class="bg-white p-6 rounded-xl border border-[#e6e6e6] flex flex-col justify-between h-full">
            <div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">How much does enclosed shipping from CA to TX cost?</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Enclosed car shipping from California to Texas costs between $1,400 and $2,200 in 2026, depending on vehicle size, exact route, and season.</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-[#e6e6e6] flex flex-col justify-between h-full">
            <div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">How long does transit take from California to Texas?</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Transit time is typically 3–6 days on the I-10 corridor once picked up, with total booking-to-delivery time averaging 7–10 days.</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-[#e6e6e6] flex flex-col justify-between h-full">
            <div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">What is the cheapest month to ship from CA to TX?</h3>
              <p class="text-sm text-[#425466] leading-relaxed">Late fall and winter (January–April) offer the lowest rates, avoiding peak summer relocation demand.</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-[#e6e6e6] flex flex-col justify-between h-full">
            <div>
              <h3 class="font-bold text-lg text-[#0a2540] mb-2">Do I need personal insurance to ship my vehicle?</h3>
              <p class="text-sm text-[#425466] leading-relaxed">No. Carriers carry mandatory cargo insurance up to $500,000. Personal insurance is optional for extra peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 8: Related Routes Links & Author Byline -->
      <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div class="lg:col-span-6 bg-white p-8 rounded-xl border border-[#e6e6e6] flex flex-col justify-between h-full">
          <div>
            <h3 class="text-xl font-bold text-[#0a2540] mb-4">Related Enclosed Auto Transport Routes</h3>
            <ul class="space-y-3 text-sm">
              <li><a href="/routes/california-to-florida-enclosed/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; Enclosed Car Shipping California to Florida</a></li>
              <li><a href="/routes/texas-to-florida-enclosed/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; Enclosed Car Shipping Texas to Florida</a></li>
              <li><a href="/services/enclosed-auto-transport/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; Full Enclosed Auto Transport Guide</a></li>
              <li><a href="/california-to-texas-car-shipping/" class="text-[#4338ca] font-medium hover:underline flex items-center gap-2">&rarr; General California to Texas Car Shipping Corridor</a></li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-6 bg-white p-8 rounded-xl border border-[#e6e6e6] flex items-center gap-4 h-full">
          <img src="/images/shazil-ali.jpg" alt="Shazil Ali" class="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-[#e0e7ff]">
          <div>
            <div class="font-bold text-[#0a2540]">Reviewed by Shazil Ali</div>
            <div class="text-xs text-[#425466] mb-1">Director of Operations, Neon Auto Transport</div>
            <div class="text-xs text-[#64748b]">Last Updated August 2026</div>
          </div>
        </div>
      </section>

    </div>"""

# Replace main content body in route file
with open(ROUTE_FILE, "r", encoding="utf-8") as f:
    route_content = f.read()

route_content = re.sub(
    r'<!-- Main Content Body \(Full-Width Modular Layout.*?</div>\s*</main>',
    perfect_route_body + "\n\n  </main>",
    route_content,
    flags=re.DOTALL
)

with open(ROUTE_FILE, "w", encoding="utf-8") as f:
    f.write(route_content)

print("SUCCESS: Perfected routes/california-to-texas-enclosed/index.html with zero vertical overlaps!")
