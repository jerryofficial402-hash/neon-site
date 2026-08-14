import os
import re

CITIES_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\california-car-shipping-cities\index.html"

with open(CITIES_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Replace lower half content (from City Breakdown to FAQs) with focused City Directory architecture
old_lower_half = r'<h2 class="text-3xl font-bold mb-8 text-\[\#0a2540\] tracking-tight">City-by-City Car Shipping Breakdown</h2>.*?<h2 class="text-3xl font-bold mb-8 text-\[\#0a2540\] tracking-tight">FAQ</h2>'

new_lower_half = """<div>
            <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Choosing Auto Transport in California Cities</h2>
            <p class="text-[#425466] mb-6 leading-relaxed">Car shipping logistics vary by city. Major metro areas such as Los Angeles, San Diego, San Francisco, San Jose, Sacramento, and Oakland have access to major interstate corridors and regular carrier activity. Pickup timing, vehicle transport pricing, and available carrier types still depend on your exact route, vehicle, pickup date, and street access.</p>
            <p class="text-[#425466] mb-10 leading-relaxed">In dense neighborhoods, gated communities, apartment complexes, and narrow urban streets, a large auto carrier may need to meet you at a nearby safe, truck-accessible location. Your assigned carrier will coordinate the practical pickup and delivery details before dispatch.</p>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">Open Auto Transport vs. Enclosed Car Shipping</h2>
            <p class="text-[#425466] mb-6 leading-relaxed">Open auto transport is the standard and generally more affordable option for daily-driver vehicles. Enclosed car shipping uses a covered trailer and is commonly selected for classic, luxury, exotic, or collector vehicles that need additional protection from weather and road debris. Learn more about <a href="/services/open-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Open Auto Transport</a> or <a href="/services/enclosed-auto-transport/" class="text-[#2563eb] font-bold hover:underline">Enclosed Car Shipping</a> options.</p>
            <div class="overflow-x-auto bg-white rounded-xl shadow-sm border border-[#e6e6e6] mb-10">
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
            <h2 class="text-3xl font-bold mb-6 text-[#0a2540] tracking-tight">What Affects City-to-City Pricing?</h2>
            <p class="text-[#425466] mb-4 leading-relaxed">Estimated pricing for California city-to-city transport depends on:</p>
            <ul class="space-y-3 text-[#425466] mb-6 pl-4 list-disc">
                <li>Distance and route demand</li>
                <li>Vehicle size, modifications, and operability</li>
                <li>Open or enclosed trailer selection</li>
                <li>Pickup and delivery accessibility</li>
                <li>Date flexibility and seasonal carrier availability</li>
                <li>Urban traffic, restricted streets, and meeting-point requirements</li>
            </ul>
            <p class="text-[#425466] mb-12 leading-relaxed">Short routes can still have a minimum transport charge because loading, insurance, scheduling, and carrier operating costs do not decrease in direct proportion to mileage. Use our <a href="/cost-calculator/" class="text-[#2563eb] font-bold hover:underline">Car Shipping Cost Calculator</a> for a current estimate tailored to your exact route.</p>
          </div>

          <div class="my-10 p-8 bg-[#0a2540] rounded-2xl shadow-xl text-white text-center">
            <h2 class="text-3xl font-bold mb-4 text-white">Get a Free California Car Shipping Quote</h2>
            <p class="text-[#cdd5df] mb-8 max-w-xl mx-auto">Compare open and enclosed transport options for your route. Pricing and pickup windows depend on your vehicle, dates, pickup/delivery access, and carrier availability.</p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/car-shipping-quote/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-md w-full sm:w-auto">Get My Free Quote</a>
              <a href="/cost-calculator/" class="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition w-full sm:w-auto">Use the Cost Calculator</a>
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">FAQ</h2>"""

content = re.sub(old_lower_half, new_lower_half, content, flags=re.DOTALL)

# 2. Update FAQ section with 6 clean location/process questions
old_faq_block = r'<div class="space-y-6">\s*<div class="bg-white rounded-2xl p-6 shadow-sm border border-\[\#e6e6e6\]">\s*<h3 class="font-bold text-xl text-\[\#0a2540\] mb-3">How much does it cost to ship a car in California\?</h3>.*?</div>\s*</div>\s*</div>'

new_faq_block = """<div class="space-y-6 mb-12">
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
          </div>"""

content = re.sub(old_faq_block, new_faq_block, content, flags=re.DOTALL)

with open(CITIES_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Cleaned up lower half of California Car Shipping Cities hub page!")
