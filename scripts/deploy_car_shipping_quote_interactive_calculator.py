import os
import re

PAGE_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\car-shipping-quote\index.html"

with open(PAGE_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Right Column Showcase Image with Fully Functional Interactive Quote Calculator Form
calculator_form_markup = """<!-- Right Column: Interactive Calculator Form Card -->
          <div class="lg:w-1/2 relative w-full mt-8 lg:mt-0">
            <div class="stripe-card p-6 lg:p-8 w-full shadow-2xl relative z-20 bg-white rounded-3xl border border-[#e6e6e6]">
              
              <div class="flex items-center justify-between mb-4 border-b border-[#e6e6e6] pb-4">
                <div>
                  <h2 class="text-2xl font-black text-[#0a2540]">Get Your Free Quote</h2>
                  <p class="text-[#425466] text-xs font-medium">Instant calculation &bull; No obligation to book</p>
                </div>
                <span class="px-3 py-1 bg-[#468de6]/10 text-[#468de6] text-xs font-bold rounded-full uppercase tracking-wider">Fast &amp; Free</span>
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
                    <div class="vehicle-group border border-[#e6e6e6] rounded-2xl p-3.5 mb-2 bg-[#f6f9fc]/50">
                      <span id="vehicle1Label" class="block text-[11px] font-bold text-[#468de6] uppercase tracking-wide mb-2">Vehicle 1</span>
                      <div class="grid grid-cols-3 gap-2 mb-2">
                        <input type="text" class="vehicleYear w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Year e.g. 2023" aria-label="Vehicle Year" required="">
                        <input type="text" class="vehicleMake w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Make e.g. Honda" aria-label="Vehicle Make" required="">
                        <input type="text" class="vehicleModel w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl" placeholder="Model e.g. Civic" aria-label="Vehicle Model" required="">
                      </div>
                      <div class="grid grid-cols-2 gap-2">
                        <select class="vehicleType w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl bg-white" aria-label="Vehicle Type">
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="truck">Truck / Pickup</option>
                          <option value="motorcycle">Motorcycle</option>
                          <option value="classic">Classic / Exotic</option>
                        </select>
                        <select class="vehicleCondition w-full px-3 py-2 text-sm border border-[#e6e6e6] rounded-xl bg-white" aria-label="Vehicle Condition">
                          <option value="run">Runs &amp; Drives</option>
                          <option value="inop">Inoperable</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button aria-label="Interactive Button" type="button" id="btnAddVehicle" class="w-full py-2 mb-2 rounded-xl border-2 border-dashed border-[#e6e6e6] text-[#425466] text-xs font-bold hover:border-[#468de6] hover:text-[#468de6] transition-colors flex items-center justify-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
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
                  
                  <h3 class="text-lg font-bold text-[#0a2540] mb-3 flex items-center gap-2">
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
          </div>"""

# Replace old right column
old_right_col_pattern = r'<!-- Right Column: Interactive Visual Showcase Card -->.*?<!-- SECTION 1:'

content = re.sub(
    old_right_col_pattern,
    calculator_form_markup + '\n\n        </div>\n      </div>\n    </section>\n\n    <!-- SECTION 1:',
    content,
    flags=re.DOTALL
)

# Add calculator.js script tag before </body>
if 'calculator.js' not in content:
    content = content.replace(
        '</body>',
        '  <!-- Calculator JS script -->\n  <script src="/js/calculator.js?v=2" defer=""></script>\n</body>'
    )

with open(PAGE_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Embedded fully functional Interactive Calculator into car-shipping-quote Hero section!")
