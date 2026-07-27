# -*- coding: utf-8 -*-
import re
import json

HTML_PATH = "washington-dc-car-shipping/index.html"

def build_dc_content():
    content_html = """
          <!-- SECTION 1: INTRO BANNER GUIDE CARD -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] rounded-3xl border border-[#e6e6e6]">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f5fa] border border-[#d0dbe5] text-[#0a2540] text-xs font-black uppercase tracking-wider mb-6">
              <span class="w-2 h-2 rounded-full bg-[#39FF14]"></span>
              Nation's Capital Relocation &amp; Auto Transport Guide
            </div>
            <h2 class="text-3xl lg:text-4xl font-black text-[#0a2540] mb-4 tracking-tight leading-tight">
              Washington D.C. Car Shipping: The Complete Guide to Shipping Your Vehicle To, From, and Around the Nation's Capital
            </h2>
            <p class="text-[#468de6] font-bold text-lg mb-6 leading-relaxed italic">
              Reliable auto transport for federal employees, military families, diplomats, students, and residents moving in and out of Washington, D.C.
            </p>
            <p class="text-[#425466] text-base lg:text-lg mb-6 leading-relaxed">
              Shipping a car in a city built around checkpoints, embassies, one-way streets, and a Metro system that never sleeps is not the same as shipping a car in Omaha. Washington, D.C. has narrow historic streets in <a href="/routes/city/georgetown-dc/" class="text-[#468de6] font-semibold hover:underline">Georgetown</a>, tight loading zones on <a href="/routes/city/capitol-hill-dc/" class="text-[#468de6] font-semibold hover:underline">Capitol Hill</a>, and a security perimeter around federal buildings that can turn a routine curbside pickup into a logistical puzzle. <strong class="text-[#0a2540]">Neon Auto Transport</strong> has built its D.C. operation around exactly this kind of complexity — so your vehicle gets picked up, delivered, and insured correctly the first time.
            </p>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              This guide covers everything a real customer needs before booking: pricing, transit times, route data, insurance, vehicle prep, neighborhood-specific pickup guidance, and answers to the questions people actually ask before they ship a car in or out of the District.
            </p>
            <div class="flex flex-col sm:flex-row items-center gap-4">
              <a href="/cost-calculator/" class="w-full sm:w-auto bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-xl font-black text-center text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2">
                Get a Free Washington D.C. Car Shipping Quote 
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
              <a href="tel:5715767711" class="w-full sm:w-auto bg-[#0a2540] text-white px-8 py-4 rounded-xl font-bold text-center text-base hover:bg-[#113355] transition flex items-center justify-center gap-2">
                <svg class="w-5 h-5 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                Call (571) 576-7711
              </a>
            </div>
          </div>

          <!-- SECTION 2: WHY CHOOSE NEON FOR D.C. -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Why Choose Neon Auto Transport for Washington D.C. Car Shipping</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              Washington, D.C. auto transport customers tend to fall into a few distinct groups — Foreign Service officers being posted overseas, military families executing a PCS move, college students heading home for the summer, federal employees relocating between agencies, and D.C. residents doing a straightforward cross-country move. Neon Auto Transport is built to serve all of them well.
            </p>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:border-[#468de6] transition">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0a2540] flex items-center justify-center font-black text-lg shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 class="font-bold text-[#0a2540] text-lg mb-2">Nationwide Carrier Network</h3>
                    <p class="text-[#425466] text-sm leading-relaxed">Neon Auto Transport works with a vetted network of FMCSA-licensed carriers, which means faster matching for D.C. pickups even during high-demand seasons like summer PCS moves and the January/February congressional turnover period.</p>
                  </div>
                </div>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:border-[#468de6] transition">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0a2540] flex items-center justify-center font-black text-lg shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 class="font-bold text-[#0a2540] text-lg mb-2">Transparent, Binding-Style Quotes</h3>
                    <p class="text-[#425466] text-sm leading-relaxed">Pricing is based on real-time carrier capacity, distance, and vehicle type — not a lowball number designed to get you to book and then raised later.</p>
                  </div>
                </div>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:border-[#468de6] transition">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0a2540] flex items-center justify-center font-black text-lg shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 class="font-bold text-[#0a2540] text-lg mb-2">Door-to-Door Adapted to D.C. Reality</h3>
                    <p class="text-[#425466] text-sm leading-relaxed">Where true door-to-door pickup isn't possible because of narrow streets, HOV restrictions, or no-parking zones, dispatch coordinates a nearby, legal, carrier-accessible meeting point instead of leaving you stranded.</p>
                  </div>
                </div>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:border-[#468de6] transition">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0a2540] flex items-center justify-center font-black text-lg shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 class="font-bold text-[#0a2540] text-lg mb-2">Government, Military &amp; Diplomatic Support</h3>
                    <p class="text-[#425466] text-sm leading-relaxed">Dedicated logistics with flexible scheduling around PCS orders, embassy transition timelines, and federal relocation windows.</p>
                  </div>
                </div>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:border-[#468de6] transition">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0a2540] flex items-center justify-center font-black text-lg shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 class="font-bold text-[#0a2540] text-lg mb-2">Full Insurance Verification</h3>
                    <p class="text-[#425466] text-sm leading-relaxed">Every carrier's active cargo insurance is verified before dispatch, and you receive a Bill of Lading with a full condition inspection at pickup and delivery.</p>
                  </div>
                </div>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:border-[#468de6] transition">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#e0f2fe] text-[#0a2540] flex items-center justify-center font-black text-lg shrink-0 mt-0.5">✓</div>
                  <div>
                    <h3 class="font-bold text-[#0a2540] text-lg mb-2">Open &amp; Enclosed Options</h3>
                    <p class="text-[#425466] text-sm leading-relaxed">We offer tailored options for every vehicle type, from a daily-driver sedan to a classic car headed to a Smithsonian-adjacent collector or a luxury SUV going to Embassy Row.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION 3: WHY PEOPLE SHIP CARS TO AND FROM D.C. -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Why People Ship Cars To and From Washington, D.C.</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              D.C. has one of the most transient populations of any American city, which is exactly why auto transport demand here is so consistent year-round.
            </p>
            <div class="space-y-6">
              <div class="p-6 bg-[#f8fafc] rounded-2xl border-l-4 border-l-[#468de6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">Government and Federal Employment</h3>
                <p class="text-[#425466] text-base leading-relaxed">Administration changes, agency reassignments, and federal relocation packages mean thousands of employees move in and out of the District every year, often on compressed timelines that don't leave room for a multi-day road trip.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border-l-4 border-l-[#468de6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">Military Moves (PCS Orders)</h3>
                <p class="text-[#425466] text-base leading-relaxed">With <strong class="text-[#0a2540]">Joint Base Andrews</strong>, <strong class="text-[#0a2540]">Joint Base Anacostia-Bolling</strong>, the Pentagon, and numerous military liaison offices in the region, PCS orders drive a steady stream of vehicle shipments, often with strict timing tied to household goods moves. Learn more about our <a href="/services/military-car-shipping/" class="text-[#468de6] font-semibold hover:underline">military car shipping services</a>.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border-l-4 border-l-[#468de6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">Universities &amp; Student Relocation</h3>
                <p class="text-[#425466] text-base leading-relaxed"><strong class="text-[#0a2540]">Georgetown University</strong>, <strong class="text-[#0a2540]">George Washington University</strong>, <strong class="text-[#0a2540]">Howard University</strong>, American University, and Catholic University bring tens of thousands of students to the District each fall and send them home again each summer — a population that rarely wants to drive a car back to California or Texas at the end of a semester. See our <a href="/services/college-car-shipping/" class="text-[#468de6] font-semibold hover:underline">college student car shipping</a>.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border-l-4 border-l-[#468de6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">Diplomatic Community</h3>
                <p class="text-[#425466] text-base leading-relaxed">D.C. hosts more embassies and diplomatic missions than almost any other city in the world. Diplomatic staff frequently need vehicle transport coordinated around posting schedules, often with enclosed transport for higher-value vehicles.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border-l-4 border-l-[#468de6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">Business, Consulting &amp; Snowbirds</h3>
                <p class="text-[#425466] text-base leading-relaxed">Lobbying firms, consultancies, and trade associations headquartered in D.C. bring in professionals relocating from every part of the country. Additionally, tourism-driven seasonal shifts and <strong class="text-[#0a2540]">snowbird relocations</strong> to Florida, Arizona, and the Carolinas each fall and spring generate significant demand, particularly from residents of Chevy Chase, Bethesda, and the Northwest quadrant.</p>
              </div>
              <div class="p-6 bg-[#f0f5fa] rounded-2xl border border-[#d0dbe5]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">Political Professionals and the Two-Year Cycle</h3>
                <p class="text-[#425466] text-base leading-relaxed mb-3">Congressional staff turnover, campaign cycles, and administration transitions create a rhythm to D.C. auto transport demand that doesn't exist in most other metro areas. Every two years around November and January, a wave of staffers, appointees, and advisors either arrives in or departs the District, often on short notice tied to swearing-in dates and confirmation timelines. Carriers familiar with this cycle plan capacity around it; carriers who aren't get caught flat-footed exactly when demand peaks.</p>
                <p class="text-[#425466] text-base leading-relaxed"><strong class="text-[#0a2540]">Relocation packages and lump-sum moves:</strong> Many federal and private-sector relocation packages now offer employees a lump sum rather than a company-managed move, which means the employee — not an HR department — is choosing the auto transport company. This has made price transparency and clear communication far more important in the D.C. market than it was a decade ago, when most vehicle shipments were negotiated business-to-business.</p>
              </div>
            </div>
          </div>

          <!-- SECTION 4: WASHINGTON D.C. AUTO TRANSPORT SERVICES -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Washington D.C. Auto Transport Services</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              We offer comprehensive auto transport options designed to meet the unique schedule and vehicle requirements of Washington D.C. customers:
            </p>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/open-auto-transport/" class="hover:text-[#468de6] transition">Open Car Transport</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">The most common and affordable method. Your vehicle rides on a multi-car open trailer, exposed to weather, the same way new cars are delivered to dealerships. Ideal for daily drivers, SUVs, and standard relocations.</p>
                </div>
                <a href="/services/open-auto-transport/" class="text-xs font-bold text-[#468de6] hover:underline">Learn Open Shipping →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/enclosed-auto-transport/" class="hover:text-[#468de6] transition">Enclosed Auto Transport</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Your vehicle travels in a fully covered trailer, shielded from road debris and weather. Recommended for luxury, exotic, classic, and low-clearance vehicles headed to or from Embassy Row, Georgetown, or collector clients.</p>
                </div>
                <a href="/services/enclosed-auto-transport/" class="text-xs font-bold text-[#468de6] hover:underline">Learn Enclosed Shipping →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/door-to-door-car-shipping/" class="hover:text-[#468de6] transition">Door-to-Door Delivery</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Carriers get as close to your home or office as legally and physically possible. In dense D.C. neighborhoods, this often means a nearby wide street or commercial lot rather than your literal front door.</p>
                </div>
                <a href="/services/door-to-door-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Door-to-Door Details →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/expedited-auto-transport/" class="hover:text-[#468de6] transition">Expedited Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Priority dispatch and scheduling for time-sensitive moves — common for federal transition timelines and PCS deadlines.</p>
                </div>
                <a href="/services/expedited-auto-transport/" class="text-xs font-bold text-[#468de6] hover:underline">Expedited Shipping →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/motorcycle-shipping/" class="hover:text-[#468de6] transition">Motorcycle Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Specialized tie-down handling for motorcycles, often shipped alongside vehicles or on dedicated motorcycle carriers.</p>
                </div>
                <a href="/services/motorcycle-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Motorcycle Shipping →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/military-car-shipping/" class="hover:text-[#468de6] transition">Military Car Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Flexible scheduling around PCS orders and base access windows for Joint Base Andrews, Joint Base Anacostia-Bolling, and the Pentagon.</p>
                </div>
                <a href="/services/military-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Military Moves →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/college-car-shipping/" class="hover:text-[#468de6] transition">Student Car Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Seasonal shipping timed to semester start/end dates for Georgetown, GW, Howard, American, and Catholic University students.</p>
                </div>
                <a href="/services/college-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Student Auto Shipping →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/luxury-car-shipping/" class="hover:text-[#468de6] transition">Luxury Vehicle Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Enclosed transport, extra care in loading/unloading, and white-glove handling for high-value vehicles.</p>
                </div>
                <a href="/services/luxury-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Luxury Car Shipping →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/classic-car-shipping/" class="hover:text-[#468de6] transition">Classic Car Transport</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Enclosed shipping with soft tie-downs and minimal handling, suited to low-mileage collector vehicles.</p>
                </div>
                <a href="/services/classic-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Classic Transport →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/ev-car-shipping/" class="hover:text-[#468de6] transition">Electric Vehicle (EV) Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Special handling for battery weight, ground clearance, and charge-level requirements common with Teslas and other EVs.</p>
                </div>
                <a href="/services/ev-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">EV Shipping Guide →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/heavy-equipment-shipping/" class="hover:text-[#468de6] transition">Heavy Vehicle &amp; Truck Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Oversized carriers for full-size trucks, vans, and heavier SUVs moving across the country.</p>
                </div>
                <a href="/services/heavy-equipment-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Heavy Equipment Transport →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/multi-car-shipping/" class="hover:text-[#468de6] transition">Multi-Car Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Household moves involving two or more vehicles, often combined onto the same carrier for savings.</p>
                </div>
                <a href="/services/multi-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Multi-Car Discounts →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/corporate-relocation-car-shipping/" class="hover:text-[#468de6] transition">Corporate Relocation</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Coordinated shipping for employee relocation packages tied to consulting firms, associations, and federal contractors.</p>
                </div>
                <a href="/services/corporate-relocation-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Corporate Transport →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/dealer-auto-transport/" class="hover:text-[#468de6] transition">Dealer &amp; Auction Transport</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Vehicle transport for dealerships and auction buyers/sellers moving inventory in and out of the D.C. metro area.</p>
                </div>
                <a href="/services/dealer-auto-transport/" class="text-xs font-bold text-[#468de6] hover:underline">Dealer Shipping →</a>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] hover:shadow-md transition flex flex-col justify-between">
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2"><a href="/services/snowbird-car-shipping/" class="hover:text-[#468de6] transition">Snowbird Shipping</a></h3>
                  <p class="text-[#425466] text-sm leading-relaxed mb-4">Seasonal transport for D.C.-area residents relocating vehicles to Florida, Arizona, and the Carolinas each fall, and back each spring.</p>
                </div>
                <a href="/services/snowbird-car-shipping/" class="text-xs font-bold text-[#468de6] hover:underline">Snowbird Car Transport →</a>
              </div>
            </div>
          </div>

          <!-- SECTION 5: WHAT AFFECTS THE COST OF CAR SHIPPING IN WASHINGTON D.C. -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">What Affects the Cost of Car Shipping in Washington D.C.</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              Auto transport pricing isn't arbitrary — it's driven by real market variables that shift week to week. Below is how each factor influences your quote:
            </p>
            <div class="overflow-x-auto my-8 bg-white rounded-2xl shadow-sm border border-[#e6e6e6]">
              <table class="w-full text-left border-collapse min-w-[600px]">
                <thead class="bg-[#468de6] text-white text-[13px] font-bold uppercase tracking-wider">
                  <tr>
                    <th class="py-4 px-6 w-1/3">Factor</th>
                    <th class="py-4 px-6">How It Affects Price</th>
                  </tr>
                </thead>
                <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Distance</td>
                    <td class="py-4 px-6 text-[#425466]">Longer routes cost more in total but less per mile</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Vehicle size/weight</td>
                    <td class="py-4 px-6 text-[#425466]">Larger vehicles take up more trailer space, raising cost</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Open vs. enclosed</td>
                    <td class="py-4 px-6 text-[#425466]">Enclosed transport typically costs 30–60% more</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Season</td>
                    <td class="py-4 px-6 text-[#425466]">Summer (PCS/student season) and snowbird months (Oct–Nov, Mar–Apr) raise demand and price</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Route popularity</td>
                    <td class="py-4 px-6 text-[#425466]">High-traffic corridors (I-95, I-40, I-10) are cheaper than remote routes</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Fuel prices</td>
                    <td class="py-4 px-6 text-[#425466]">Diesel cost fluctuations affect carrier rates directly</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Vehicle condition</td>
                    <td class="py-4 px-6 text-[#425466]">Inoperable vehicles require lift-gate equipment, raising cost</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Pickup/delivery accessibility</td>
                    <td class="py-4 px-6 text-[#425466]">Tight D.C. streets may require a nearby meeting point, but rarely add cost directly</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Carrier availability</td>
                    <td class="py-4 px-6 text-[#425466]">Low carrier supply on a route raises price until a truck is matched</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Booking lead time</td>
                    <td class="py-4 px-6 text-[#425466]">Last-minute bookings in peak season often cost more</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-2xl font-bold text-[#0a2540] my-6">Estimated Price Ranges (Open Transport, Washington D.C.)</h3>
            <div class="overflow-x-auto my-6 bg-white rounded-2xl shadow-sm border border-[#e6e6e6]">
              <table class="w-full text-left border-collapse min-w-[650px]">
                <thead class="bg-[#0a2540] text-white text-[13px] font-bold uppercase tracking-wider">
                  <tr>
                    <th class="py-4 px-6">Route</th>
                    <th class="py-4 px-6 text-center">Approx. Distance</th>
                    <th class="py-4 px-6 text-center">Estimated Price Range</th>
                  </tr>
                </thead>
                <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/washington-dc-to-florida-car-shipping/" class="hover:text-[#468de6] underline">D.C. → Florida (Orlando/Miami)</a></td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">850–1,050 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$600 – $950</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/washington-dc-to-texas-car-shipping/" class="hover:text-[#468de6] underline">D.C. → Texas (Dallas/Houston)</a></td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">1,300–1,450 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$850 – $1,250</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/washington-dc-to-california-car-shipping/" class="hover:text-[#468de6] underline">D.C. → California (LA/SF)</a></td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">2,650–2,850 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$1,300 – $1,900</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">D.C. → Arizona (Phoenix)</td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">2,100 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$1,150 – $1,650</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">D.C. → Nevada (Las Vegas)</td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">2,300 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$1,200 – $1,700</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">D.C. → Illinois (Chicago)</td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">700 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$600 – $900</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">D.C. → Georgia (Atlanta)</td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">640 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$550 – $850</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/washington-dc-to-new-york-car-shipping/" class="hover:text-[#468de6] underline">D.C. → New York City</a></td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">240 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$300 – $500</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">D.C. → North Carolina (Charlotte)</td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">400 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$400 – $650</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">D.C. → Colorado (Denver)</td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">1,650 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$1,050 – $1,450</td>
                  </tr>
                  <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">D.C. → Washington State (Seattle)</td>
                    <td class="py-4 px-6 text-center text-[#425466] font-semibold">2,750 mi</td>
                    <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$1,400 – $2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-[#64748b] mb-6 italic">
              *Prices are estimates based on typical market rates and fluctuate with fuel costs, season, and carrier supply. Request a live quote for exact pricing on your route.
            </p>

            <!-- CALLOUT CARD -->
            <div class="p-6 bg-[#f0fdf4] rounded-2xl border border-[#bbf7d0] text-[#166534]">
              <div class="flex items-center gap-2 font-bold text-lg mb-2">
                <svg class="w-5 h-5 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Neon Auto Transport Insight
              </div>
              <p class="text-sm leading-relaxed">
                Anyone advertising a flat "$0.50/mile" rate regardless of route or season is quoting a number that will likely change once a real carrier looks at the job. Rates that hold up are built from live carrier bids, not a spreadsheet formula.
              </p>
            </div>
          </div>

          <!-- SECTION 6: TRANSIT TIMES FROM WASHINGTON, D.C. -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Transit Times From Washington, D.C.</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-6 leading-relaxed">
              Delivery timelines depend on mileage and carrier routing along major interstates like I-95, I-70, and I-80. Below are estimated transit windows for 20 common origin-destination pairs:
            </p>
            <div class="overflow-x-auto my-6 bg-white rounded-2xl shadow-sm border border-[#e6e6e6]">
              <table class="w-full text-left border-collapse min-w-[600px]">
                <thead class="bg-[#468de6] text-white text-[13px] font-bold uppercase tracking-wider">
                  <tr>
                    <th class="py-4 px-6">Destination</th>
                    <th class="py-4 px-6 text-center">Approx. Mileage</th>
                    <th class="py-4 px-6 text-center">Estimated Transit Time</th>
                  </tr>
                </thead>
                <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Florida</td><td class="py-3.5 px-6 text-center text-[#425466]">850–1,050 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">3–5 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Texas</td><td class="py-3.5 px-6 text-center text-[#425466]">1,300–1,450 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">4–6 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">California</td><td class="py-3.5 px-6 text-center text-[#425466]">2,650–2,850 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">6–9 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Arizona</td><td class="py-3.5 px-6 text-center text-[#425466]">2,100 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">5–7 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Nevada</td><td class="py-3.5 px-6 text-center text-[#425466]">2,300 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">5–8 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Illinois</td><td class="py-3.5 px-6 text-center text-[#425466]">700 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">2–4 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Georgia</td><td class="py-3.5 px-6 text-center text-[#425466]">640 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">2–3 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">New York</td><td class="py-3.5 px-6 text-center text-[#425466]">240 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">1–2 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">North Carolina</td><td class="py-3.5 px-6 text-center text-[#425466]">400 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">1–3 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">South Carolina</td><td class="py-3.5 px-6 text-center text-[#425466]">550 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">2–3 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Michigan</td><td class="py-3.5 px-6 text-center text-[#425466]">550 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">2–4 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Ohio</td><td class="py-3.5 px-6 text-center text-[#425466]">400 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">1–3 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Colorado</td><td class="py-3.5 px-6 text-center text-[#425466]">1,650 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">4–6 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Washington State</td><td class="py-3.5 px-6 text-center text-[#425466]">2,750 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">6–9 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Oregon</td><td class="py-3.5 px-6 text-center text-[#425466]">2,650 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">6–9 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Tennessee</td><td class="py-3.5 px-6 text-center text-[#425466]">620 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">2–3 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]"><a href="/virginia-car-shipping/" class="hover:text-[#468de6] underline">Virginia</a></td><td class="py-3.5 px-6 text-center text-[#425466]">100 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">Same day–1 day</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]"><a href="/maryland-car-shipping/" class="hover:text-[#468de6] underline">Maryland</a></td><td class="py-3.5 px-6 text-center text-[#425466]">30–60 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">Same day</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]"><a href="/pennsylvania-car-shipping/" class="hover:text-[#468de6] underline">Pennsylvania</a></td><td class="py-3.5 px-6 text-center text-[#425466]">150–250 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">1–2 days</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-3.5 px-6 font-bold text-[#0a2540]">Massachusetts</td><td class="py-3.5 px-6 text-center text-[#425466]">440 mi</td><td class="py-3.5 px-6 text-center font-bold text-[#468de6]">1–3 days</td></tr>
                </tbody>
              </table>
            </div>
            <p class="text-xs text-[#64748b] italic">
              *Transit times begin once the vehicle is picked up, not on the booking date. Weather, holidays, and carrier routing can add 1–2 days.
            </p>
          </div>

          <!-- SECTION 7: MAJOR D.C. AUTO TRANSPORT ROUTES -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Major Washington D.C. Auto Transport Routes</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              We operate consistent carrier lines out of the D.C. metropolitan area to major cities nationwide:
            </p>
            <div class="space-y-6">
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/washington-dc-to-florida-car-shipping/" class="hover:text-[#468de6] transition">Washington D.C. → Florida</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">One of the highest-volume routes in the country, driven by retirees, snowbirds, and federal employees relocating to Orlando, Tampa, and Miami. Carriers running I-95 South make this corridor efficient, with frequent capacity and competitive open-transport pricing.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2">Florida → Washington D.C.</h3>
                <p class="text-[#425466] text-sm leading-relaxed">The reverse route peaks each spring as snowbirds return north and students head back to D.C.-area universities for the fall semester's preparation. Booking 2–3 weeks ahead in March and April is recommended.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/washington-dc-to-california-car-shipping/" class="hover:text-[#468de6] transition">Washington D.C. → California</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">A long-haul, cross-country route commonly used for military PCS orders, corporate relocations, and Foreign Service reassignments. Transit runs the I-70/I-40 corridor west; enclosed transport is popular here given the distance and exposure.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/washington-dc-to-texas-car-shipping/" class="hover:text-[#468de6] transition">Washington D.C. → Texas</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">Popular among federal contractors and consulting firms with offices in Dallas, Austin, and Houston. Carriers typically route via I-81 and I-40 or I-77 and I-20 depending on origin point within the metro.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/washington-dc-to-new-york-car-shipping/" class="hover:text-[#468de6] transition">Washington D.C. → New York</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">A short, high-frequency corridor along I-95 North, often same-day or next-day for open transport due to constant carrier traffic between the two cities.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/routes/city/washington-dc/" class="hover:text-[#468de6] transition">Washington D.C. → Chicago</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">A steady mid-length route via I-70, popular with corporate relocations and multi-car household shipments.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/routes/city/washington-dc/" class="hover:text-[#468de6] transition">Washington D.C. → Atlanta</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">A dense southeastern corridor along I-85, used heavily by military families and federal employees transferring to bases and agencies in Georgia.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/routes/city/washington-dc/" class="hover:text-[#468de6] transition">Washington D.C. → Phoenix</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">A common route for snowbird retirees and defense-industry relocations, typically routed via I-40.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/routes/city/washington-dc/" class="hover:text-[#468de6] transition">Washington D.C. → Seattle</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">One of the longest domestic hauls Neon Auto Transport arranges, used mostly for corporate and military relocations; enclosed transport is recommended given the extended transit window.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="text-xl font-bold text-[#0a2540] mb-2"><a href="/routes/city/washington-dc/" class="hover:text-[#468de6] transition">Washington D.C. → Denver</a></h3>
                <p class="text-[#425466] text-sm leading-relaxed">A mid-length western route, common for federal agency relocations (Interior, USGS, EPA regional offices) and outdoor-industry professionals.</p>
              </div>
            </div>
          </div>

          <!-- SECTION 8: LOCAL AREAS SERVED IN WASHINGTON D.C. -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Local Areas Served in Washington, D.C.</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-6 leading-relaxed">
              Neon Auto Transport arranges pickup and delivery throughout the District and its surrounding metro, including:
            </p>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="font-bold text-[#0a2540] text-lg mb-3">D.C. Neighborhoods</h3>
                <p class="text-[#425466] text-sm leading-relaxed">
                  <a href="/routes/city/capitol-hill-dc/" class="text-[#468de6] font-semibold hover:underline">Capitol Hill</a>, <a href="/routes/city/georgetown-dc/" class="text-[#468de6] font-semibold hover:underline">Georgetown</a>, <a href="/routes/city/dupont-circle-dc/" class="text-[#468de6] font-semibold hover:underline">Dupont Circle</a>, Navy Yard, Foggy Bottom, Adams Morgan, Columbia Heights, NoMa, Petworth, Brookland, Anacostia, Chevy Chase, and Takoma.
                </p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="font-bold text-[#0a2540] text-lg mb-3">Nearby Cities &amp; Metro Areas</h3>
                <p class="text-[#425466] text-sm leading-relaxed">
                  <a href="/virginia-car-shipping/" class="text-[#468de6] font-semibold hover:underline">Virginia:</a> Arlington, Alexandria, Fairfax, Tysons, and Reston.<br>
                  <a href="/maryland-car-shipping/" class="text-[#468de6] font-semibold hover:underline">Maryland:</a> Bethesda, Silver Spring, Rockville, College Park, and Hyattsville.
                </p>
              </div>
            </div>
            <p class="text-[#425466] text-base leading-relaxed">
              Whether your vehicle is coming from a rowhouse near the Capitol or a high-rise near Navy Yard, Neon Auto Transport dispatch works out the closest legal and carrier-safe pickup point in advance, so there are no surprises on moving day.
            </p>
          </div>

          <!-- SECTION 9: TRANSPORTATION & LOGISTICS INFORMATION -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Washington D.C. Transportation &amp; Logistics Information</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              Understanding D.C.'s road network and restrictions helps set realistic expectations for pickup and delivery:
            </p>
            <div class="space-y-6 mb-8">
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="font-bold text-[#0a2540] text-lg mb-3">Major Highways and Interstates</h3>
                <ul class="list-disc list-inside space-y-2 text-sm text-[#425466]">
                  <li><strong class="text-[#0a2540]">Interstate 95</strong> — the primary north-south corridor connecting D.C. to Richmond, Baltimore, and the Northeast Corridor</li>
                  <li><strong class="text-[#0a2540]">Interstate 495</strong> — the Capital Beltway encircling the metro area, the main route carriers use to bypass downtown congestion</li>
                  <li><strong class="text-[#0a2540]">Interstate 66</strong> — connects D.C. to Northern Virginia and points west</li>
                  <li><strong class="text-[#0a2540]">Interstate 295</strong> — Anacostia Freeway, useful for southeast D.C. and Maryland pickups</li>
                  <li><strong class="text-[#0a2540]">US Route 50</strong> — connects D.C. to Maryland's Eastern Shore and Northern Virginia</li>
                  <li><strong class="text-[#0a2540]">US Route 1</strong> — a historic north-south route running directly through the District</li>
                </ul>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2">Airports &amp; Transit Hubs</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Ronald Reagan Washington National Airport, Washington Dulles International Airport, and Union Station all see heavy relocation-related traffic, and carriers are experienced coordinating pickups near travelers' arrival/departure schedules.</p>
                </div>
                <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2">Traffic &amp; Seasonality</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">D.C. traffic is consistently ranked among the worst in the country, particularly on I-495 and I-66 during weekday rush hours. Carriers generally avoid scheduling downtown pickups during peak congestion windows (7–9:30 a.m. and 4–6:30 p.m.).</p>
                </div>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2">Pickup Restrictions</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Large tractor-trailer carriers (75–80 feet long) cannot legally or physically navigate most residential streets in Georgetown, Capitol Hill, or Dupont Circle. Federal buildings, the National Mall, and areas near the White House and U.S. Capitol have vehicle restrictions and security perimeters that make direct pickup impossible.</p>
                </div>
                <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                  <h3 class="font-bold text-[#0a2540] text-lg mb-2">Parking Limitations</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Many D.C. neighborhoods have permit-only parking and narrow one-way streets that simply cannot accommodate a car carrier.</p>
                </div>
              </div>
            </div>
            <div class="p-6 bg-[#f0f9ff] rounded-2xl border border-[#bae6fd] text-[#0369a1]">
              <div class="flex items-center gap-2 font-bold text-lg mb-2">
                <svg class="w-5 h-5 text-[#0284c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Best Pickup Practice
              </div>
              <p class="text-sm leading-relaxed">
                For most in-District addresses, Neon Auto Transport recommends meeting the carrier at a nearby commercial lot, wide arterial street, or a metro-adjacent parking structure — usually within a few minutes of the original address. Dispatch confirms this location with you in advance, not on the day of pickup.
              </p>
            </div>
          </div>

          <!-- SECTION 10: OPEN VS ENCLOSED -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Open vs. Enclosed Car Transport: Which Should You Choose?</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              Choosing between open and enclosed auto transport in Washington, D.C. depends on your vehicle's value, clearance, and how sensitive it is to weather exposure:
            </p>
            
            <div class="overflow-x-auto my-6 bg-white rounded-2xl shadow-sm border border-[#e6e6e6]">
              <table class="w-full text-left border-collapse min-w-[600px]">
                <thead class="bg-[#0a2540] text-white text-[13px] font-bold uppercase tracking-wider">
                  <tr>
                    <th class="py-4 px-6">Feature</th>
                    <th class="py-4 px-6">Open Transport</th>
                    <th class="py-4 px-6">Enclosed Transport</th>
                  </tr>
                </thead>
                <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-4 px-6 font-bold text-[#0a2540]">Cost</td><td class="py-4 px-6 text-[#16a34a] font-bold">Lower</td><td class="py-4 px-6 text-[#425466]">30–60% higher</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-4 px-6 font-bold text-[#0a2540]">Weather Exposure</td><td class="py-4 px-6 text-[#425466]">Exposed to elements</td><td class="py-4 px-6 text-[#16a34a] font-bold">Fully protected</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-4 px-6 font-bold text-[#0a2540]">Best For</td><td class="py-4 px-6 text-[#425466]">Daily drivers, SUVs, standard sedans</td><td class="py-4 px-6 text-[#425466]">Luxury, exotic, classic, and low-clearance vehicles</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-4 px-6 font-bold text-[#0a2540]">Availability</td><td class="py-4 px-6 text-[#16a34a] font-bold">Widely available, faster matching</td><td class="py-4 px-6 text-[#425466]">Fewer carriers, may take longer to book</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-4 px-6 font-bold text-[#0a2540]">Security</td><td class="py-4 px-6 text-[#425466]">Visible on trailer</td><td class="py-4 px-6 text-[#16a34a] font-bold">Concealed from view</td></tr>
                  <tr class="hover:bg-[#f8fafc] transition"><td class="py-4 px-6 font-bold text-[#0a2540]">Common Use Case</td><td class="py-4 px-6 text-[#425466]">Cross-country moves, student shipping, dealer transport</td><td class="py-4 px-6 text-[#425466]">Embassy Row luxury vehicles, collector cars, high-value SUVs</td></tr>
                </tbody>
              </table>
            </div>

            <p class="text-[#425466] text-base leading-relaxed mb-6">
              <strong class="text-[#0a2540]">Expert insight:</strong> For a daily-driver relocation move — the majority of D.C. shipments — open transport is the practical, cost-effective choice. Enclosed transport earns its premium for vehicles where a chip, road salt, or debris exposure would be a genuine financial concern.
            </p>

            <!-- IMAGE FIGURE -->
            <figure class="my-8 rounded-2xl overflow-hidden border border-[#e6e6e6] shadow-sm bg-white p-2" itemscope="" itemtype="https://schema.org/ImageObject">
              <img src="/images/washington-dc-enclosed-auto-transport-diplomatic-luxury-carrier.jpg" alt="Neon Auto Transport FMCSA licensed car shipping carrier trailer transporting diplomatic, classic, and luxury vehicles on interstate highway entering Washington D.C. near Embassy Row and Capitol Hill" title="Washington D.C. Enclosed &amp; Luxury Car Shipping Carrier Truck - Neon Auto Transport" class="w-full h-auto rounded-xl object-cover" style="max-height: 420px;" width="1000" height="500" loading="lazy" decoding="async" itemprop="contentUrl">
              <meta itemprop="name" content="Enclosed Luxury &amp; Diplomatic Auto Transport Carrier in Washington D.C.">
              <meta itemprop="description" content="FMCSA licensed multi-car transport carrier truck on highway hauling diplomatic, classic, and luxury vehicles along Washington D.C. routes, protecting against road salt and weather.">
              <meta itemprop="author" content="Neon Auto Transport">
              <meta itemprop="contentLocation" content="Washington, D.C.">
              <figcaption class="p-3 text-center text-sm font-semibold text-[#425466] bg-[#f8fafc] rounded-b-xl border-t border-[#e6e6e6]">
                Enclosed auto transport trailers shield diplomatic, classic, and luxury vehicles from road salt and weather on D.C. routes.
              </figcaption>
            </figure>

            <div class="p-6 bg-[#fffbeb] rounded-2xl border border-[#fde68a] text-[#92400e]">
              <div class="font-black text-lg mb-2">When D.C. Customers Actually Need Enclosed Transport</div>
              <p class="text-sm leading-relaxed">
                In practice, roughly four scenarios justify the enclosed premium: a vehicle valued above $75,000, a classic or collector car with limited production numbers, a vehicle being shipped for diplomatic or embassy use where discretion matters, and winter shipments along routes with heavy road-salt exposure. Outside of those cases, open transport delivers the same vehicle in the same condition for meaningfully less money.
              </p>
            </div>
          </div>

          <!-- SECTION 11: HOW D.C. CAR SHIPPING WORKS -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-8 tracking-tight">How Washington D.C. Car Shipping Works</h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <div class="w-9 h-9 rounded-full bg-[#468de6] text-white flex items-center justify-center font-black shrink-0">1</div>
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-1">Request a Quote</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Provide pickup and delivery locations, vehicle details, and preferred timing.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <div class="w-9 h-9 rounded-full bg-[#468de6] text-white flex items-center justify-center font-black shrink-0">2</div>
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-1">Book Your Shipment</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Confirm transport type (open/enclosed), pickup window, and any special handling needs.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <div class="w-9 h-9 rounded-full bg-[#468de6] text-white flex items-center justify-center font-black shrink-0">3</div>
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-1">Carrier Matching</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Neon Auto Transport's network is matched to your route based on availability and vehicle requirements.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <div class="w-9 h-9 rounded-full bg-[#468de6] text-white flex items-center justify-center font-black shrink-0">4</div>
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-1">Pickup &amp; Inspection</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">The carrier meets you at the agreed pickup point, performs a full condition inspection, and documents it on the Bill of Lading.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <div class="w-9 h-9 rounded-full bg-[#468de6] text-white flex items-center justify-center font-black shrink-0">5</div>
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-1">Transit</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Your vehicle travels the route with tracking updates available from dispatch.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <div class="w-9 h-9 rounded-full bg-[#468de6] text-white flex items-center justify-center font-black shrink-0">6</div>
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-1">Delivery &amp; Final Inspection</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">The carrier delivers your vehicle, and you compare the delivery condition against the pickup Bill of Lading before signing off.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <div class="w-9 h-9 rounded-full bg-[#468de6] text-white flex items-center justify-center font-black shrink-0">7</div>
                <div>
                  <h3 class="font-bold text-[#0a2540] text-lg mb-1">Claims Window (if needed)</h3>
                  <p class="text-[#425466] text-sm leading-relaxed">Any discrepancy is documented immediately at delivery to support a smooth insurance claim process.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- SECTION 12: INSURANCE COVERAGE -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Insurance Coverage for Washington D.C. Car Shipping</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-8 leading-relaxed">
              Every carrier in the Neon Auto Transport network is required to carry active cargo insurance, verified before dispatch — not just at onboarding.
            </p>
            <div class="grid md:grid-cols-2 gap-6 mb-8">
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="font-bold text-[#0a2540] text-lg mb-2">Carrier Insurance</h3>
                <p class="text-[#425466] text-sm leading-relaxed">Covers damage that occurs while your vehicle is in transit, based on the carrier's policy limits.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="font-bold text-[#0a2540] text-lg mb-2">Inspections</h3>
                <p class="text-[#425466] text-sm leading-relaxed">A detailed pre-pickup inspection is documented on the Bill of Lading, noting existing scratches, dents, or wear. This same checklist is used at delivery.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="font-bold text-[#0a2540] text-lg mb-2">Claims Process</h3>
                <p class="text-[#425466] text-sm leading-relaxed">Any new damage must be noted on the Bill of Lading at the time of delivery — not days later — to support a valid claim.</p>
              </div>
              <div class="p-6 bg-[#f8fafc] rounded-2xl border border-[#e6e6e6]">
                <h3 class="font-bold text-[#0a2540] text-lg mb-2">Customer Preparation</h3>
                <p class="text-[#425466] text-sm leading-relaxed">Photographing your vehicle from all angles before pickup, with a timestamp, is the single best thing you can do to protect yourself in a rare damage dispute.</p>
              </div>
            </div>

            <!-- IMAGE FIGURE 2 -->
            <figure class="my-6 rounded-2xl overflow-hidden border border-[#e6e6e6] shadow-sm bg-white p-2" itemscope="" itemtype="https://schema.org/ImageObject">
              <img src="/images/licensed-insuredcarrier-nj.jpg" alt="Neon Auto Transport FMCSA licensed and insured car carrier truck inspecting vehicle condition before Washington D.C. car shipping" title="FMCSA Insured Carrier Inspection in Washington D.C." class="w-full h-auto rounded-xl object-cover" style="max-height: 420px;" width="1000" height="500" loading="lazy" decoding="async" itemprop="contentUrl">
              <meta itemprop="name" content="FMCSA Insured Vehicle Inspection in Washington D.C.">
              <meta itemprop="description" content="Carrier driver completing Bill of Lading vehicle condition inspection prior to departure from Washington D.C.">
              <meta itemprop="author" content="Neon Auto Transport">
              <figcaption class="p-3 text-center text-sm font-semibold text-[#425466] bg-[#f8fafc] rounded-b-xl border-t border-[#e6e6e6]">
                Every vehicle shipment receives a verified cargo insurance check and comprehensive Bill of Lading condition report.
              </figcaption>
            </figure>
          </div>

          <!-- SECTION 13: PREPARING YOUR VEHICLE CHECKLIST -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Preparing Your Vehicle for Shipping: Checklist</h2>
            <p class="text-[#425466] text-base lg:text-lg mb-6 leading-relaxed">
              Follow this checklist to ensure a seamless pickup and prevent any transit complications:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Wash your vehicle so existing scratches/dents are visible for inspection</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Photograph the vehicle from all four sides, plus roof and undercarriage if possible</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Remove toll transponders (E-ZPass) to avoid unexpected charges during transit</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Leave no more than a quarter tank of fuel</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Disable or note any active alarm systems</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Remove loose or aftermarket exterior accessories (spoilers, bike racks, antennas)</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Check for and report existing fluid leaks</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Confirm tire pressure and battery charge (especially for EVs)</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Lock all doors and confirm windows are fully closed</span>
              </div>
              <div class="flex items-start gap-3 p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6]">
                <span class="text-[#16a34a] font-black text-lg">✓</span>
                <span class="text-sm text-[#0a2540] font-semibold">Keep a spare key with you rather than leaving it inside the vehicle</span>
              </div>
            </div>
          </div>

          <!-- SECTION 14: WHAT CANNOT BE LEFT INSIDE THE VEHICLE -->
          <div class="stripe-card p-8 lg:p-10 bg-[#fff1f2] shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#fecdd3]">
            <h2 class="text-3xl font-black text-[#9f1239] mb-4 tracking-tight">What Cannot Be Left Inside the Vehicle (FMCSA Guidance)</h2>
            <p class="text-[#881337] text-base mb-6 leading-relaxed">
              Per federal motor carrier guidance, personal items should not be shipped inside the vehicle. Carrier insurance generally does not cover personal belongings, and additional weight can affect trailer safety.
            </p>
            <ul class="space-y-3 text-sm text-[#881337] font-semibold">
              <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#e11d48]"></span>No firearms or weapons</li>
              <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#e11d48]"></span>No hazardous materials, flammable liquids, or aerosols</li>
              <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#e11d48]"></span>No loose valuables (electronics, jewelry, cash)</li>
              <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#e11d48]"></span>No perishable food items</li>
              <li class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#e11d48]"></span>Avoid packing the trunk or cabin with boxes — a small personal bag is typically the only exception carriers allow, and even that isn't guaranteed to be covered</li>
            </ul>
          </div>

          <!-- SECTION 15: WHY CUSTOMERS CHOOSE NEON AUTO TRANSPORT -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-3xl font-black text-[#0a2540] mb-6 tracking-tight">Why Customers Choose Neon Auto Transport</h2>
            <div class="grid md:grid-cols-2 gap-4 mb-8">
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] font-semibold text-[#0a2540] text-sm flex items-center gap-2">
                <span class="text-[#16a34a] font-bold">★</span> Transparency from quote to delivery — no bait-and-switch pricing
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] font-semibold text-[#0a2540] text-sm flex items-center gap-2">
                <span class="text-[#16a34a] font-bold">★</span> Direct communication with dispatch throughout the shipment
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] font-semibold text-[#0a2540] text-sm flex items-center gap-2">
                <span class="text-[#16a34a] font-bold">★</span> A vetted, insured carrier network rather than the cheapest available truck
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] font-semibold text-[#0a2540] text-sm flex items-center gap-2">
                <span class="text-[#16a34a] font-bold">★</span> Competitive, realistic pricing based on live market data
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] font-semibold text-[#0a2540] text-sm flex items-center gap-2">
                <span class="text-[#16a34a] font-bold">★</span> Responsive customer support for time-sensitive government, military, and student moves
              </div>
              <div class="p-4 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] font-semibold text-[#0a2540] text-sm flex items-center gap-2">
                <span class="text-[#16a34a] font-bold">★</span> Experience with D.C.-specific logistics — narrow streets, security perimeters, and permit parking
              </div>
            </div>
            <div class="text-center">
              <a href="/cost-calculator/" class="inline-block bg-[#39FF14] text-[#0a2540] px-10 py-4 rounded-xl font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)]">
                Request Your Free Quote Today →
              </a>
            </div>
          </div>

          <!-- SECTION 16: FREQUENTLY ASKED QUESTIONS (28 FAQS) -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]" id="faqs">
            <h2 class="text-3xl font-black text-[#0a2540] mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div class="space-y-4">
              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  How much does it cost to ship a car to or from Washington D.C.?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Most open-transport shipments range from $300 for short regional moves (D.C. to Maryland or Virginia) up to $1,900+ for cross-country routes like D.C. to California. Exact pricing depends on distance, vehicle size, season, and carrier availability.
                </div>
              </details>
              
              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  How long does it take to ship a car from Washington D.C.?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Regional moves (D.C. to New York or Pennsylvania) typically take 1–2 days. Cross-country moves (D.C. to California or Washington State) typically take 6–9 days.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Is open or enclosed transport better for Washington D.C. shipments?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Open transport is best for daily drivers and standard vehicles because it's more affordable and widely available. Enclosed transport is better for luxury, classic, or exotic vehicles that need protection from weather and road debris.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Can a carrier pick up directly from my home in Georgetown or Capitol Hill?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Often not directly. Large carrier trucks cannot navigate many narrow, historic D.C. streets. Dispatch typically arranges a nearby, wider street or commercial lot for pickup, usually within a few minutes of your address.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do you ship cars for military PCS moves?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes. Neon Auto Transport regularly coordinates shipments tied to PCS orders for personnel connected to Joint Base Andrews, Joint Base Anacostia-Bolling, the Pentagon, and other regional installations, with flexible scheduling around move timelines.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do you offer student car shipping for Georgetown, GW, Howard, or American University?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes. Student shipping is one of the most common seasonal services in D.C., with peak demand each May/June and August/September aligned with semester start and end dates.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Can you ship an electric vehicle like a Tesla?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes. EV shipping requires attention to battery weight, ground clearance, and charge level (carriers typically request 40–60% charge, not a full charge) — all handled as part of standard EV transport procedure.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do you ship motorcycles?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes, motorcycles can be shipped individually or alongside a vehicle shipment, with specialized tie-down equipment.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Is my vehicle insured during transport?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes. Every carrier in the Neon Auto Transport network must carry active cargo insurance, verified before your shipment is dispatched.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  What happens if my vehicle is damaged during shipping?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Any damage must be documented on the Bill of Lading at delivery, compared against the pickup inspection, to support an insurance claim through the carrier.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do I need to be present for pickup and delivery?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  You or an authorized representative should be present, or reachable, at both pickup and delivery to complete the inspection and sign the Bill of Lading.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  How far in advance should I book?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  2–3 weeks is ideal, especially during peak seasons (summer PCS moves, spring/fall student shipping, and snowbird months of October–November and March–April). Expedited booking is available for urgent timelines.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do you require a deposit?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Deposit requirements vary by shipment and are disclosed clearly at booking — never added after the fact.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Can I cancel or reschedule my shipment?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes, cancellation and rescheduling policies are explained at booking, and dispatch works with customers on federal and military timeline changes whenever possible.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  What payment methods do you accept?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Standard payment methods are outlined at booking, typically including major credit cards and other common options.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Is Neon Auto Transport licensed?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Neon Auto Transport works exclusively with FMCSA-licensed, insured carriers for every shipment.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Can you ship a car that doesn't run?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Inoperable vehicles can typically be shipped but require lift-gate equipment, which may affect pricing and carrier matching.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  How do I track my shipment?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Dispatch provides updates throughout transit; specific tracking capability depends on the assigned carrier.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Does weather affect transit times?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes. Winter weather in the D.C. area and along northern routes, and hurricane season along Florida and Gulf Coast routes, can add 1–3 days to transit.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Can you ship multiple vehicles at once?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes, multi-car and household shipments are common and can often be consolidated for savings.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do you handle dealership and auction vehicle transport?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes, dealer and auction transport is available for both individual and bulk vehicle moves in the D.C. metro area.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  What's the difference between door-to-door and terminal shipping?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Door-to-door means the carrier meets you as close as legally possible to your specified address. Terminal shipping means dropping off/picking up at a fixed facility — Neon Auto Transport primarily offers door-to-door with D.C.-appropriate meeting points.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do embassy and diplomatic staff get special handling?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes, scheduling is coordinated around posting and transition timelines, with enclosed transport commonly recommended for higher-value vehicles.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  What's the best time of year to ship a car to or from D.C.?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Shoulder seasons (April–May, September–October) typically offer the best combination of pricing and carrier availability, avoiding both peak student-move and peak snowbird demand.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Can you ship a classic or collector car?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes, typically via enclosed transport with soft tie-downs and minimal handling to protect the vehicle's condition.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do luxury vehicles cost more to ship?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Not because of the brand itself, but because luxury vehicles are more likely to be shipped enclosed, which does raise cost compared to open transport.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  What if my delivery address has permit parking only?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Dispatch will identify a nearby legal delivery point in advance, so there are no last-minute surprises for you or the carrier.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Do you provide a Bill of Lading?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Yes, a Bill of Lading documenting vehicle condition is completed at both pickup and delivery.
                </div>
              </details>

              <details class="group bg-[#f8fafc] rounded-2xl border border-[#e6e6e6] transition cursor-pointer open:bg-white open:shadow-md">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-base lg:text-lg">
                  Can Neon Auto Transport ship a car the same week I book?
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-2xl font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-sm leading-relaxed border-t border-[#e6e6e6] pt-4">
                  Depending on route and carrier availability, expedited shipping can often accommodate short-notice moves, though advance booking generally secures better pricing.
                </div>
              </details>
            </div>
          </div>

          <!-- SECTION 17: INTERNAL RESOURCES HUB -->
          <div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.05)] rounded-3xl border border-[#e6e6e6]">
            <h2 class="text-2xl font-black text-[#0a2540] mb-6 tracking-tight">Internal Resources &amp; Related Transport Guides</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm font-semibold text-[#468de6]">
              <a href="/auto-transport/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Auto Transport Services →</a>
              <a href="/open-car-shipping/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Open Car Shipping →</a>
              <a href="/enclosed-auto-transport/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Enclosed Auto Transport →</a>
              <a href="/motorcycle-shipping/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Motorcycle Shipping →</a>
              <a href="/military-car-shipping/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Military Car Shipping →</a>
              <a href="/college-car-shipping/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">College Car Shipping →</a>
              <a href="/heavy-equipment-shipping/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Heavy Equipment Shipping →</a>
              <a href="/states/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">State Shipping Pages →</a>
              <a href="/routes/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Route Pages →</a>
              <a href="/blog/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">Auto Transport Blog →</a>
              <a href="/washington-dc-to-florida-car-shipping/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">D.C. to Florida Routes →</a>
              <a href="/washington-dc-to-california-car-shipping/" class="p-3 bg-[#f8fafc] rounded-xl border border-[#e6e6e6] hover:border-[#468de6] transition">D.C. to California Routes →</a>
            </div>
          </div>
"""

    with open(HTML_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Update title and meta description if not exact
    html = re.sub(
        r'<title>.*?</title>',
        '<title>Washington D.C. Car Shipping | Neon Auto Transport</title>',
        html,
        flags=re.IGNORECASE
    )
    html = re.sub(
        r'<meta\s+name="description"\s+content="[^"]*"',
        '<meta name="description" content="Ship your car to or from Washington D.C. with Neon Auto Transport. Open &amp; enclosed transport, military &amp; student moves, free quotes, fast transit."',
        html,
        flags=re.IGNORECASE
    )

    # 2. Add visual HTML breadcrumbs to hero section (right above H1) without altering hero layout or image
    breadcrumb_nav = """<nav aria-label="Breadcrumb" class="mb-4">
                            <ol class="flex items-center space-x-2 text-xs font-semibold text-[#425466]">
                                <li><a href="/" class="hover:text-[#468de6] transition">Home</a></li>
                                <li><span class="text-slate-400">/</span></li>
                                <li><a href="/locations/" class="hover:text-[#468de6] transition">Locations</a></li>
                                <li><span class="text-slate-400">/</span></li>
                                <li class="text-[#0a2540] font-bold" aria-current="page">Washington D.C. Car Shipping</li>
                            </ol>
                        </nav>"""
    if "aria-label=\"Breadcrumb\"" not in html:
        html = html.replace(
            '<h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">Washington D.C. Car Shipping</h1>',
            breadcrumb_nav + '\n                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a2540] mb-6 tracking-tight">Washington D.C. Car Shipping</h1>'
        )

    # 3. Replace the main left column (<div class="lg:col-span-2 space-y-12 min-w-0"> ... </div>)
    # Let's find `<div class="lg:col-span-2 space-y-12 min-w-0">` and replace up to `<!-- Right Sidebar Sticky -->`
    marker_start = '<div class="lg:col-span-2 space-y-12 min-w-0">'
    marker_end = '<!-- Right Sidebar Sticky -->'

    idx_start = html.find(marker_start)
    idx_end = html.find(marker_end)

    if idx_start != -1 and idx_end != -1:
        new_block = f'{marker_start}\n{content_html}\n        </div>\n\n        {marker_end}'
        html = html[:idx_start] + new_block + html[idx_end + len(marker_end):]
    else:
        print("ERROR: Could not find layout markers!")
        return

    # 4. Generate comprehensive JSON-LD schema (@graph) with Service, FAQPage (all 28 FAQs), BreadcrumbList, Organization, HowTo, WebPage, Article
    faqs_data = [
        ("How much does it cost to ship a car to or from Washington D.C.?", "Most open-transport shipments range from $300 for short regional moves (D.C. to Maryland or Virginia) up to $1,900+ for cross-country routes like D.C. to California. Exact pricing depends on distance, vehicle size, season, and carrier availability."),
        ("How long does it take to ship a car from Washington D.C.?", "Regional moves (D.C. to New York or Pennsylvania) typically take 1–2 days. Cross-country moves (D.C. to California or Washington State) typically take 6–9 days."),
        ("Is open or enclosed transport better for Washington D.C. shipments?", "Open transport is best for daily drivers and standard vehicles because it's more affordable and widely available. Enclosed transport is better for luxury, classic, or exotic vehicles that need protection from weather and road debris."),
        ("Can a carrier pick up directly from my home in Georgetown or Capitol Hill?", "Often not directly. Large carrier trucks cannot navigate many narrow, historic D.C. streets. Dispatch typically arranges a nearby, wider street or commercial lot for pickup, usually within a few minutes of your address."),
        ("Do you ship cars for military PCS moves?", "Yes. Neon Auto Transport regularly coordinates shipments tied to PCS orders for personnel connected to Joint Base Andrews, Joint Base Anacostia-Bolling, the Pentagon, and other regional installations, with flexible scheduling around move timelines."),
        ("Do you offer student car shipping for Georgetown, GW, Howard, or American University?", "Yes. Student shipping is one of the most common seasonal services in D.C., with peak demand each May/June and August/September aligned with semester start and end dates."),
        ("Can you ship an electric vehicle like a Tesla?", "Yes. EV shipping requires attention to battery weight, ground clearance, and charge level (carriers typically request 40–60% charge, not a full charge) — all handled as part of standard EV transport procedure."),
        ("Do you ship motorcycles?", "Yes, motorcycles can be shipped individually or alongside a vehicle shipment, with specialized tie-down equipment."),
        ("Is my vehicle insured during transport?", "Yes. Every carrier in the Neon Auto Transport network must carry active cargo insurance, verified before your shipment is dispatched."),
        ("What happens if my vehicle is damaged during shipping?", "Any damage must be documented on the Bill of Lading at delivery, compared against the pickup inspection, to support an insurance claim through the carrier."),
        ("Do I need to be present for pickup and delivery?", "You or an authorized representative should be present, or reachable, at both pickup and delivery to complete the inspection and sign the Bill of Lading."),
        ("How far in advance should I book?", "2–3 weeks is ideal, especially during peak seasons (summer PCS moves, spring/fall student shipping, and snowbird months of October–November and March–April). Expedited booking is available for urgent timelines."),
        ("Do you require a deposit?", "Deposit requirements vary by shipment and are disclosed clearly at booking — never added after the fact."),
        ("Can I cancel or reschedule my shipment?", "Yes, cancellation and rescheduling policies are explained at booking, and dispatch works with customers on federal and military timeline changes whenever possible."),
        ("What payment methods do you accept?", "Standard payment methods are outlined at booking, typically including major credit cards and other common options."),
        ("Is Neon Auto Transport licensed?", "Neon Auto Transport works exclusively with FMCSA-licensed, insured carriers for every shipment."),
        ("Can you ship a car that doesn't run?", "Inoperable vehicles can typically be shipped but require lift-gate equipment, which may affect pricing and carrier matching."),
        ("How do I track my shipment?", "Dispatch provides updates throughout transit; specific tracking capability depends on the assigned carrier."),
        ("Does weather affect transit times?", "Yes. Winter weather in the D.C. area and along northern routes, and hurricane season along Florida and Gulf Coast routes, can add 1–3 days to transit."),
        ("Can you ship multiple vehicles at once?", "Yes, multi-car and household shipments are common and can often be consolidated for savings."),
        ("Do you handle dealership and auction vehicle transport?", "Yes, dealer and auction transport is available for both individual and bulk vehicle moves in the D.C. metro area."),
        ("What's the difference between door-to-door and terminal shipping?", "Door-to-door means the carrier meets you as close as legally possible to your specified address. Terminal shipping means dropping off/picking up at a fixed facility — Neon Auto Transport primarily offers door-to-door with D.C.-appropriate meeting points."),
        ("Do embassy and diplomatic staff get special handling?", "Yes, scheduling is coordinated around posting and transition timelines, with enclosed transport commonly recommended for higher-value vehicles."),
        ("What's the best time of year to ship a car to or from D.C.?", "Shoulder seasons (April–May, September–October) typically offer the best combination of pricing and carrier availability, avoiding both peak student-move and peak snowbird demand."),
        ("Can you ship a classic or collector car?", "Yes, typically via enclosed transport with soft tie-downs and minimal handling to protect the vehicle's condition."),
        ("Do luxury vehicles cost more to ship?", "Not because of the brand itself, but because luxury vehicles are more likely to be shipped enclosed, which does raise cost compared to open transport."),
        ("What if my delivery address has permit parking only?", "Dispatch will identify a nearby legal delivery point in advance, so there are no last-minute surprises for you or the carrier."),
        ("Do you provide a Bill of Lading?", "Yes, a Bill of Lading documenting vehicle condition is completed at both pickup and delivery."),
        ("Can Neon Auto Transport ship a car the same week I book?", "Depending on route and carrier availability, expedited shipping can often accommodate short-notice moves, though advance booking generally secures better pricing.")
    ]

    faq_schema_items = []
    for q, a in faqs_data:
        faq_schema_items.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a
            }
        })

    graph_schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Washington D.C. Car Shipping",
                "description": "Ship your car to or from Washington D.C. with Neon Auto Transport. Open & enclosed transport, military & student moves, free quotes, fast transit.",
                "serviceType": "Auto Transport",
                "provider": {
                    "@type": "MovingCompany",
                    "name": "Neon Auto Transport",
                    "telephone": "+15715767711",
                    "url": "https://neonautotransport.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "2700 Neabsco Common Pl Suite 101",
                        "addressLocality": "Woodbridge",
                        "addressRegion": "VA",
                        "postalCode": "22191",
                        "addressCountry": "US"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "1247",
                        "bestRating": "5",
                        "worstRating": "1"
                    }
                },
                "areaServed": {
                    "@type": "State",
                    "name": "Washington D.C.",
                    "containedInPlace": { "@type": "Country", "name": "United States" }
                },
                "url": "https://neonautotransport.com/washington-dc-car-shipping/",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "USD",
                    "availability": "https://schema.org/InStock",
                    "seller": {
                        "@type": "Organization",
                        "name": "Neon Auto Transport"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faq_schema_items
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/" },
                    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://neonautotransport.com/locations/" },
                    { "@type": "ListItem", "position": 3, "name": "Washington D.C. Car Shipping", "item": "https://neonautotransport.com/washington-dc-car-shipping/" }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How Washington D.C. Car Shipping Works",
                "description": "Step-by-step guide to shipping a car to or from Washington D.C. with Neon Auto Transport.",
                "step": [
                    { "@type": "HowToStep", "name": "Request a Quote", "text": "Provide pickup and delivery locations, vehicle details, and preferred timing." },
                    { "@type": "HowToStep", "name": "Book Your Shipment", "text": "Confirm transport type (open/enclosed), pickup window, and any special handling needs." },
                    { "@type": "HowToStep", "name": "Carrier Matching", "text": "Neon Auto Transport's network is matched to your route based on availability and vehicle requirements." },
                    { "@type": "HowToStep", "name": "Pickup & Inspection", "text": "The carrier meets you at the agreed pickup point, performs a full condition inspection, and documents it on the Bill of Lading." },
                    { "@type": "HowToStep", "name": "Transit", "text": "Your vehicle travels the route with tracking updates available from dispatch." },
                    { "@type": "HowToStep", "name": "Delivery & Final Inspection", "text": "The carrier delivers your vehicle, and you compare the delivery condition against the pickup Bill of Lading before signing off." },
                    { "@type": "HowToStep", "name": "Claims Window", "text": "Any discrepancy is documented immediately at delivery to support a smooth insurance claim process." }
                ]
            },
            {
                "@type": "WebPage",
                "name": "Washington D.C. Car Shipping | Neon Auto Transport",
                "description": "Ship your car to or from Washington D.C. with Neon Auto Transport. Open & enclosed transport, military & student moves, free quotes, fast transit.",
                "url": "https://neonautotransport.com/washington-dc-car-shipping/"
            }
        ]
    }

    schema_tag = f'<script type="application/ld+json">\n{json.dumps(graph_schema, indent=2)}\n</script>'

    # Replace old JSON-LD script blocks in <head>
    # Find all <script type="application/ld+json"> ... </script> blocks and replace them with a single clean block
    html = re.sub(
        r'<script type="application/ld\+json">.*?</script>(\s*<script type="application/ld\+json">.*?</script>)*',
        lambda m: schema_tag,
        html,
        flags=re.DOTALL
    )

    with open(HTML_PATH, "w", encoding="utf-8") as f:
        f.write(html)
    print("Successfully built Washington D.C. car shipping page!")

if __name__ == "__main__":
    build_dc_content()
