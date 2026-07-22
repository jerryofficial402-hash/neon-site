import os

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\arkansas-car-shipping\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

main_content_html = """
<div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
    <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Arkansas Car Shipping: The Complete Auto Transport Guide</h2>
    <p class="text-lg text-[#425466] mb-6 leading-relaxed">Arkansas car shipping doesn’t have to mean guessing at a price and hoping a broker calls you back. Neon Auto Transport is a licensed auto transport company that runs Arkansas auto transport the way it should work: real pricing logic instead of a lowball teaser rate, carriers who are actually vetted, and route planning built around how freight actually moves through the state — not a copy-pasted page with a ZIP code swapped in. Whether you need to ship a car in Arkansas across town or across the country, here’s exactly what drives your cost, your timeline, and your options.</p>
</div>

<div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
    <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Why Arkansas Auto Transport Works Differently Than Other States</h3>
    <p class="text-lg text-[#425466] mb-6 leading-relaxed">Most Arkansas car shipping pages repeat the same generic line: “Arkansas is a hub because of good interstates.” That’s true, but it’s not the useful part. What actually moves your price is which corridor your route touches. I-40 runs east–west through Little Rock and North Little Rock, linking Memphis (140 miles) and Oklahoma City (215 miles) — both high-carrier-density lanes, which keeps competition, and therefore price, reasonable. I-49 up in Northwest Arkansas (Bentonville, Rogers, Springdale, Fayetteville) is a newer but increasingly saturated corridor thanks to corporate relocation volume in that area, feeding into Kansas City and the Dallas–Fort Worth metro. I-30 southwest out of Little Rock toward Texarkana is the thinner of the three — fewer carriers regularly run it, so quotes off that corridor (and anywhere further from it) tend to run higher per mile, not because the state is remote, but because that specific lane is.</p>
    <p class="text-lg text-[#425466] mb-6 leading-relaxed">That’s the practical difference between a generic listing and a page that actually helps you plan: knowing which of the three corridors your pickup or delivery point sits closest to tells you more about your real price than a single blended statewide average ever will.</p>
</div>

<div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
    <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Arkansas Car Shipping Cost: What You’ll Actually Pay</h3>
    <p class="text-lg text-[#425466] mb-6 leading-relaxed">Car shipping cost isn’t linear — it drops per mile as distance increases, because fixed costs (loading, fuel to reach you, driver time) get spread over a longer haul. Here’s how that plays out for Arkansas car shipping quotes right now:</p>
    
    <div class="overflow-x-auto mt-8 mb-8 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
        <table class="w-full text-left border-collapse min-w-[600px]">
            <thead class="bg-[#468de6] text-white text-[12px] font-bold uppercase tracking-wider">
                <tr>
                    <th class="py-4 px-6">Distance</th>
                    <th class="py-4 px-6">Typical Cost / Mile</th>
                    <th class="py-4 px-6">Example Total (Open)</th>
                    <th class="py-4 px-6">Example Total (Enclosed)</th>
                </tr>
            </thead>
            <tbody class="text-sm text-[#425466] font-medium">
                <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Under 200 miles</td>
                    <td class="py-4 px-6">$1.90 – $2.90</td>
                    <td class="py-4 px-6 font-bold text-[#0a2540]">$400 – $600</td>
                    <td class="py-4 px-6">$650 – $950</td>
                </tr>
                <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">200 – 500 miles</td>
                    <td class="py-4 px-6">$0.90 – $1.20</td>
                    <td class="py-4 px-6 font-bold text-[#0a2540]">$600 – $1,000</td>
                    <td class="py-4 px-6">$950 – $1,550</td>
                </tr>
                <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">500 – 1,500 miles</td>
                    <td class="py-4 px-6">$0.65 – $0.95</td>
                    <td class="py-4 px-6 font-bold text-[#0a2540]">$900 – $1,600</td>
                    <td class="py-4 px-6">$1,350 – $2,400</td>
                </tr>
                <tr class="hover:bg-[#f8fafc] transition">
                    <td class="py-4 px-6 font-bold text-[#0a2540]">Over 1,500 miles</td>
                    <td class="py-4 px-6">$0.55 – $0.75</td>
                    <td class="py-4 px-6 font-bold text-[#0a2540]">$1,200 – $1,800+</td>
                    <td class="py-4 px-6">$1,700 – $2,700+</td>
                </tr>
            </tbody>
        </table>
    </div>
    <p class="text-lg text-[#425466] mb-6 leading-relaxed">The part most competitor pages leave out: per-mile rate is only half the picture. The other half is timing. Carriers price routes based on which direction freight is already flowing that week. A quote from Little Rock to Florida in the same week as a big Florida-bound relocation surge will usually run cheaper than the same route two weeks later, once that demand clears and trucks are running back empty. If your dates are flexible, asking for a 3–5 day pickup window instead of a fixed date is the single biggest lever you have on affordable vehicle shipping in Arkansas — more effective than shopping five different quotes.</p>
</div>

<div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
    <div class="grid md:grid-cols-2 gap-12">
        <div>
            <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Sample Real-World Routes</h3>
            <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
                <li><strong>Little Rock, AR → Dallas, TX (~320 mi):</strong> roughly $600–$650, open transport</li>
                <li><strong>Little Rock, AR → Memphis, TN (~140 mi):</strong> roughly $350–$450, open transport</li>
                <li><strong>Fayetteville, AR → Denver, CO (~730 mi):</strong> roughly $700–$900, open transport</li>
                <li><strong>Arkansas → Florida (long-haul):</strong> roughly $1,600–$1,900, open transport</li>
            </ul>
        </div>
        <div>
            <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Shipping Methods We Offer</h3>
            <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
                <li><strong><a href="/services/open-auto-transport/" class="text-[#635bff] hover:underline font-semibold">Open car carrier (Arkansas)</a>:</strong> the standard, most cost-effective option — your vehicle rides on a multi-car open trailer.</li>
                <li><strong><a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline font-semibold">Enclosed auto transport (Arkansas)</a>:</strong> fully covered protection from weather and road debris, recommended for higher-value vehicles.</li>
                <li><strong><a href="/services/door-to-door-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Door-to-door car shipping (Arkansas)</a>:</strong> pickup and delivery as close to your exact addresses as legally and safely possible.</li>
                <li><strong><a href="/services/luxury-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Arkansas exotic car shipping</a>:</strong> enclosed transport with soft-tie systems and liftgate loading for exotic and high-performance vehicles.</li>
                <li><strong>Arkansas classic car transport:</strong> specialized handling and enclosed transport recommended to protect original paint, trim, and parts on vintage vehicles.</li>
            </ul>
        </div>
    </div>
</div>

<div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
    <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Regional Routes: Arkansas to Texas, Florida, and Beyond</h3>
    <p class="text-lg text-[#425466] mb-6 leading-relaxed">Shipping cars from <a href="/arkansas-to-texas-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Arkansas to Texas</a> is one of our highest-volume lanes — I-30 and I-40 give direct carrier access into Dallas, Fort Worth, and Houston, which keeps this corridor competitively priced most of the year. <a href="/arkansas-to-florida-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Arkansas to Florida car transport</a> typically routes through Memphis and Birmingham, with delivery in roughly 3–6 days depending on the exact Florida destination. We also handle a steady volume of intercity car shipping within Arkansas itself — Little Rock to Fayetteville, or Fort Smith to Jonesboro — for dealers, buyers, and relocating families who’d rather not add the miles to a vehicle themselves.</p>
    <p class="text-lg text-[#425466] mb-6 leading-relaxed">Little Rock auto transport and Fayetteville car shipping remain our two busiest pickup markets, but Northwest Arkansas vehicle haulers increasingly serve the Bentonville–Rogers–Springdale corridor as well, driven by the volume of corporate relocations moving through that part of the state along I-49.</p>
</div>

<div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
    <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Specialized Vehicle Shipping in Arkansas</h3>
    <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
        <li><strong>Non-running car shipping:</strong> we arrange winch-equipped carriers to safely load and ship a non-running car in Arkansas, whether it doesn’t start, roll, or steer.</li>
        <li><strong><a href="/services/military-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Arkansas military vehicle shipping</a>:</strong> PCS-friendly scheduling and discounts for service members stationed at or moving to/from Arkansas installations.</li>
        <li><strong>Electric vehicle transport (Arkansas):</strong> carriers experienced with EV weight distribution and battery-safe loading procedures.</li>
        <li><strong><a href="/services/motorcycle-shipping/" class="text-[#635bff] hover:underline font-semibold">Arkansas motorcycle shipping</a>:</strong> enclosed and crated options for motorcycles, ATVs, and other powersports vehicles.</li>
        <li><strong><a href="/services/heavy-haul-transport/" class="text-[#635bff] hover:underline font-semibold">Heavy equipment hauling (Arkansas)</a>:</strong> flatbed and lowboy trailer options for construction and agricultural equipment.</li>
    </ul>
</div>

<div class="mb-20">
    <p class="text-xl text-[#0a2540] font-bold mb-6">Ready to see your actual Arkansas car shipping quote? Get a free, no-obligation instant quote from Neon Auto Transport — licensed, insured, and built around getting your vehicle where it needs to go without the runaround.</p>
    <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_15px_rgba(57,255,20,0.4)] inline-flex items-center gap-2">
        Calculate Your Rate Instantly 
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </a>
</div>
"""

# The HTML currently looks like this:
# <div class="lg:col-span-2 space-y-12 min-w-0">
# 
# 
# 
# 
# 
# 
# 
# </div>

empty_div = '<div class="lg:col-span-2 space-y-12 min-w-0">\n\n\n\n\n\n\n\n</div>'
filled_div = '<div class="lg:col-span-2 space-y-12 min-w-0">\n' + main_content_html + '\n</div>'

if empty_div in html:
    html = html.replace(empty_div, filled_div)
else:
    # Fallback if whitespace differs
    import re
    html = re.sub(r'<div class="lg:col-span-2 space-y-12 min-w-0">.*?</div>', filled_div, html, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Content successfully injected into lg:col-span-2.")
