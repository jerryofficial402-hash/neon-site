import os
import re

PAGE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\car-shipping-quote\index.html"

with open(PAGE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Hero section with perfect 12-column grid layout where Left & Right match height & zero void space
old_hero_section = r'<!-- HERO SECTION -->.*?<!-- SECTION 1: Why Request a Car Shipping Quote Online\? -->'

new_hero_section = """<!-- HERO SECTION -->
    <section class="bg-[#f6f9fc] border-b border-[#e6e6e6] pt-24 pb-12 lg:pt-28 lg:pb-16" id="hero-quote">
      <div class="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <!-- Left Column Content (Col-7 / 58% Width) -->
          <div class="lg:col-span-7 space-y-6">
            <!-- Breadcrumb -->
            <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs font-semibold flex-wrap">
              <a href="/" class="text-[#468de6] hover:underline font-semibold">Home</a>
              <span class="text-[#8ba3ba]">/</span>
              <span class="text-[#0a2540] font-bold">Car Shipping Quote</span>
            </nav>

            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#e6e6e6] bg-white shadow-sm text-[#0a2540] text-xs font-bold self-start">
              <span class="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse"></span>
              2026 Live Market Auto Transport Pricing
            </div>

            <h1 class="text-4xl md:text-5xl lg:text-5xl font-black text-[#0a2540] tracking-tight leading-[1.15]">
              Free Car Shipping Quote – Instant Auto Transport Pricing
            </h1>

            <p class="text-base lg:text-lg text-[#425466] leading-relaxed font-normal">
              Get a free car shipping quote in seconds from Neon Auto Transport. Whether you’re moving to another state, buying a vehicle online, or relocating a fleet, our live market system gives you instant auto transport pricing with no hidden fees and no upfront deposit required.
            </p>

            <p class="text-sm lg:text-base text-[#425466] leading-relaxed">
              Enter your route and vehicle details in our interactive calculator to compare open and enclosed carrier options, lock in a competitive rate, and schedule door-to-door pickup anywhere in the United States.
            </p>

            <!-- Feature Bullet Grid (2x2 Compact Cards) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-[#0a2540]">
              <div class="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#468de6]/40 transition-all duration-300">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black shrink-0">✓</span>
                Fast, free car shipping quotes
              </div>
              <div class="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#468de6]/40 transition-all duration-300">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black shrink-0">✓</span>
                Door-to-door nationwide transport
              </div>
              <div class="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#468de6]/40 transition-all duration-300">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black shrink-0">✓</span>
                Open &amp; enclosed carrier options
              </div>
              <div class="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#468de6]/40 transition-all duration-300">
                <span class="w-6 h-6 rounded-full bg-[#39FF14]/20 text-[#0a2540] flex items-center justify-center font-black shrink-0">✓</span>
                Licensed &amp; FMCSA-compliant network
              </div>
            </div>

            <!-- Value Badges Grid -->
            <div class="grid grid-cols-3 gap-3 pt-4 border-t border-[#e6e6e6] text-center text-xs font-bold text-[#0a2540]">
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#468de6]/40 hover:bg-[#f8fafc] transition-all duration-300">
                <div class="text-[#468de6] text-sm font-black mb-0.5">★★★★★ 5.0 / 5</div>
                Google Reviews
              </div>
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#468de6]/40 hover:bg-[#f8fafc] transition-all duration-300">
                <div class="text-[#468de6] text-sm font-black mb-0.5">Door-to-Door</div>
                Direct Carrier Pickup
              </div>
              <div class="p-3 bg-white rounded-xl border border-[#e6e6e6] shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-[#468de6]/40 hover:bg-[#f8fafc] transition-all duration-300">
                <div class="text-[#468de6] text-sm font-black mb-0.5">Price Lock</div>
                100% Rate Guarantee
              </div>
            </div>

            <!-- Call CTA Line -->
            <div class="pt-2 flex items-center gap-4 text-xs font-bold text-[#425466]">
              <span>Need help over the phone?</span>
              <a href="tel:5715767711" class="text-[#0a2540] font-black hover:text-[#468de6] transition inline-flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-[#e6e6e6] shadow-sm" style="text-decoration: none;">
                <svg class="w-3.5 h-3.5 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                Call (571) 576-7711 for Live Quote
              </a>
            </div>

          </div>

          <!-- Right Column: Interactive Calculator Form Card (Col-5 / 42% Width) -->
          <div class="lg:col-span-5 relative w-full">
            <div class="stripe-card p-6 lg:p-7 w-full shadow-2xl relative z-20 bg-white rounded-3xl border border-[#e6e6e6]">
              
              <div class="flex items-center justify-between mb-4 border-b border-[#e6e6e6] pb-3.5">
                <div>
                  <h2 class="text-xl font-black text-[#0a2540]">Get Your Free Quote</h2>
                  <p class="text-[#425466] text-xs font-medium">Instant calculation &bull; No obligation to book</p>
                </div>
                <span class="px-2.5 py-1 bg-[#468de6]/10 text-[#468de6] text-[11px] font-bold rounded-full uppercase tracking-wider">Fast &amp; Free</span>
              </div>

              <form id="advancedCalcForm" class="space-y-3" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="5e86dea9-8ed6-476f-b4db-1ab24c5de766">
                <input type="hidden" name="subject" value="New Website Lead: Auto Transport Quote">
                
                <!-- Step 1: Shipment Details -->
                <div id="step1">
                  <div class="grid grid-cols-2 gap-3 mb-3">
                    <div class="relative">
                      <label class="block text-[11px] font-bold text-[#425466] mb-1">Pickup ZIP or City</label>
                      <input type="text" id="pickupZip" name="Pickup ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:ring-2 focus:ring-[#468de6]/20 focus:outline-none" placeholder="e.g. 33101 (Miami)">
                      <ul id="pickupDropdown" class="absolute w-full mt-1 bg-white border border-[#e6e6e6] rounded-xl shadow-lg z-50 hidden max-h-40 overflow-y-auto text-xs"></ul>
                    </div>
                    <div class="relative">
                      <label class="block text-[11px] font-bold text-[#425466] mb-1">Delivery ZIP or City</label>
                      <input type="text" id="deliveryZip" name="Delivery ZIP" required="" maxlength="5" autocomplete="off" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:ring-2 focus:ring-[#468de6]/20 focus:outline-none" placeholder="e.g. 90001 (Los Angeles)">
                      <ul id="deliveryDropdown" class="absolute w-full mt-1 bg-white border border-[#e6e6e6] rounded-xl shadow-lg z-50 hidden max-h-40 overflow-y-auto text-xs"></ul>
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <label class="block text-[11px] font-bold text-[#425466] mb-1">Calculated Route Distance (Miles)</label>
                    <input type="number" id="distance" name="Distance" required="" min="10" readonly="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] cursor-not-allowed border border-[#e6e6e6] rounded-xl text-[#0a2540] font-bold" placeholder="Auto-calculated from ZIPs">
                  </div>

                  <div class="mb-3">
                    <label class="block text-[11px] font-bold text-[#425466] mb-1" for="pickupDate">Estimated Pickup Date</label>
                    <input type="date" id="pickupDate" name="Pickup Date" required="" onclick="this.showPicker()" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl focus:border-[#468de6] focus:ring-2 focus:ring-[#468de6]/20 focus:outline-none">
                  </div>

                  <div id="vehicleGroupsContainer">
                    <div class="vehicle-group border border-[#e6e6e6] rounded-2xl p-3 mb-2 bg-[#f6f9fc]/50">
                      <span id="vehicle1Label" class="block text-[11px] font-bold text-[#468de6] uppercase tracking-wide mb-1.5">Vehicle 1</span>
                      <div class="grid grid-cols-3 gap-2 mb-2">
                        <input type="text" class="vehicleYear w-full px-2.5 py-2 text-xs border border-[#e6e6e6] rounded-xl" placeholder="Year e.g. 2023" aria-label="Vehicle Year" required="">
                        <input type="text" class="vehicleMake w-full px-2.5 py-2 text-xs border border-[#e6e6e6] rounded-xl" placeholder="Make e.g. Honda" aria-label="Vehicle Make" required="">
                        <input type="text" class="vehicleModel w-full px-2.5 py-2 text-xs border border-[#e6e6e6] rounded-xl" placeholder="Model e.g. Civic" aria-label="Vehicle Model" required="">
                      </div>
                      <div class="grid grid-cols-2 gap-2">
                        <select class="vehicleType w-full px-2.5 py-2 text-xs border border-[#e6e6e6] rounded-xl bg-white" aria-label="Vehicle Type">
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="truck">Truck / Pickup</option>
                          <option value="motorcycle">Motorcycle</option>
                          <option value="classic">Classic / Exotic</option>
                        </select>
                        <select class="vehicleCondition w-full px-2.5 py-2 text-xs border border-[#e6e6e6] rounded-xl bg-white" aria-label="Vehicle Condition">
                          <option value="run">Runs &amp; Drives</option>
                          <option value="inop">Inoperable</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button aria-label="Interactive Button" type="button" id="btnAddVehicle" class="w-full py-2 mb-2 rounded-xl border-2 border-dashed border-[#e6e6e6] text-[#425466] text-xs font-bold hover:border-[#468de6] hover:text-[#468de6] transition-colors flex items-center justify-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    Add Another Vehicle
                  </button>

                  <div class="mb-3">
                    <label class="block text-[11px] font-bold text-[#425466] mb-1" for="transportType">Carrier Type</label>
                    <select id="transportType" name="Transport Type" class="w-full px-3.5 py-2.5 text-sm border border-[#e6e6e6] rounded-xl bg-white">
                      <option value="open">Open Carrier (Most Popular &amp; Affordable)</option>
                      <option value="enclosed">Enclosed Carrier (For Luxury / Exotic Cars)</option>
                    </select>
                  </div>

                  <button aria-label="Next" type="button" id="btnNextStep" class="w-full py-3.5 rounded-xl font-black text-white bg-[#635bff] hover:bg-[#0a2540] transition-colors shadow-lg text-base">
                    Continue to Get Quote Rate &rarr;
                  </button>
                </div>

                <!-- Step 2: Contact Info -->
                <div id="step2" class="hidden">
                  <button aria-label="Interactive Button" type="button" id="btnBackStep" class="mb-4 inline-flex items-center text-xs font-bold text-white bg-[#e31837] px-3 py-1.5 rounded-lg shadow-sm hover:bg-[#c41530] transition-colors">
                    &larr; Back to Route Details
                  </button>
                  
                  <h3 class="text-base font-bold text-[#0a2540] mb-3 flex items-center gap-2">
                    <svg aria-hidden="true" class="w-4 h-4 text-[#468de6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    Where Should We Send Your Instant Quote?
                  </h3>

                  <div class="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <input type="text" name="First Name" id="firstName" autocomplete="given-name" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="First Name">
                    </div>
                    <div>
                      <input type="text" name="Last Name" id="lastName" autocomplete="family-name" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="Last Name">
                    </div>
                  </div>
                  
                  <div class="mb-3">
                    <input type="email" name="Email" id="email" autocomplete="email" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="Email Address">
                  </div>

                  <div class="mb-3">
                    <input type="tel" name="Phone" id="phone" autocomplete="tel" required="" class="w-full px-3.5 py-2.5 text-sm bg-[#f6f9fc] border border-[#e6e6e6] rounded-xl focus:ring-2 focus:ring-[#468de6] focus:outline-none" placeholder="Phone Number">
                  </div>

                  <p class="text-[10px] text-[#425466] mb-4 leading-relaxed">
                    🔒 By submitting, you agree to receive instant quote updates from Neon Auto Transport. Zero spam.
                  </p>
                  
                  <input type="hidden" name="Estimated Price" id="estimatedPriceField" value="">

                  <button aria-label="Interactive Button" type="submit" class="w-full py-3.5 rounded-xl font-black text-[#0a2540] bg-[#39FF14] hover:bg-[#32e011] transition-all shadow-lg text-base">
                    Submit &amp; View Guaranteed Rate &rarr;
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 1: Why Request a Car Shipping Quote Online? -->"""

content = re.sub(old_hero_section, new_hero_section, content, flags=re.DOTALL)

with open(PAGE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Optimized car-shipping-quote Hero 12-column grid layout to eliminate void space and align calculator!")
