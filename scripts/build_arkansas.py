import os
from bs4 import BeautifulSoup
import json

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\arkansas-car-shipping\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Generate the new Main Content HTML
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

# Now we need to update the Two Column Layout.
# We will find the div containing "Popular Routes from Arkansas" and find its next sibling which is the Two Column Layout.
# But actually, the safest way is to find the `<div class="lg:col-span-2 space-y-12 min-w-0">` element.

col_span_2 = soup.find('div', class_='lg:col-span-2')
if col_span_2:
    # Clear its contents
    col_span_2.clear()
    # Insert new HTML
    new_soup = BeautifulSoup(main_content_html, 'html.parser')
    for elem in new_soup:
        col_span_2.append(elem)

# Now, we need to update the FAQs section. It might be outside the Two Column Layout, or below it.
# Let's find the FAQ H2: "Arkansas Vehicle Transport FAQs"
faq_h2 = soup.find('h2', string=lambda s: s and 'Vehicle Transport FAQs' in s)
if faq_h2:
    faq_container = faq_h2.parent
    # We clear the container and put the new FAQs
    faq_container.clear()
    
    new_faqs_html = """
    <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">Frequently Asked Questions</h2>
    <div class="space-y-4">
        <!-- FAQ 1 -->
        <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            How much does it cost to ship a car to or from Arkansas?
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            Most Arkansas car shipping quotes fall between $400 and $1,800 depending on distance, with short in-state or regional moves costing more per mile than long cross-country hauls.
        </div>
        </details>
        <!-- FAQ 2 -->
        <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            What’s the cheapest way to ship a car in Arkansas?
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            Open transport with a flexible 3–5 day pickup window is generally the most affordable option. Booking outside peak moving season (May–August) also helps keep quotes lower.
        </div>
        </details>
        <!-- FAQ 3 -->
        <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            How long does Arkansas car shipping take?
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            In-state and regional moves (under 500 miles) typically take 1–3 days. Cross-country shipments can take 5–10 days depending on distance and carrier scheduling.
        </div>
        </details>
        <!-- FAQ 4 -->
        <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            Can you ship a car that doesn’t run?
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            Yes. Non-running vehicles require a carrier with a winch — let us know upfront and we’ll match you with one. It’s a normal part of vehicle shipping and doesn’t usually add much to the cost.
        </div>
        </details>
        <!-- FAQ 5 -->
        <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            Do you ship motorcycles and electric vehicles in Arkansas?
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            Yes, both. We match motorcycles and EVs with carriers experienced in the specific handling each requires.
        </div>
        </details>
        <!-- FAQ 6 -->
        <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            Is my car insured during transport?
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            Yes. All carriers in our network carry cargo insurance, and we verify active coverage before booking your shipment.
        </div>
        </details>
        <!-- FAQ 7 -->
        <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
        <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
            Do you ship to rural parts of Arkansas?
            <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
        </summary>
        <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
            Yes, though pickup or delivery well outside the I-40 / I-49 / I-30 corridors may involve a short drive to a more accessible meeting point to keep the price down.
        </div>
        </details>
    </div>
    """
    new_faqs_soup = BeautifulSoup(new_faqs_html, 'html.parser')
    for elem in new_faqs_soup:
        faq_container.append(elem)

# Update the FAQ JSON-LD Schema
faq_schema_script = None
scripts = soup.find_all('script', type='application/ld+json')
for script in scripts:
    if 'FAQPage' in script.string:
        faq_schema_script = script
        break

if faq_schema_script:
    new_schema_data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car to or from Arkansas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Arkansas car shipping quotes fall between $400 and $1,800 depending on distance, with short in-state or regional moves costing more per mile than long cross-country hauls."
          }
        },
        {
          "@type": "Question",
          "name": "What’s the cheapest way to ship a car in Arkansas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open transport with a flexible 3–5 day pickup window is generally the most affordable option. Booking outside peak moving season (May–August) also helps keep quotes lower."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Arkansas car shipping take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In-state and regional moves (under 500 miles) typically take 1–3 days. Cross-country shipments can take 5–10 days depending on distance and carrier scheduling."
          }
        },
        {
          "@type": "Question",
          "name": "Can you ship a car that doesn’t run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Non-running vehicles require a carrier with a winch — let us know upfront and we’ll match you with one. It’s a normal part of vehicle shipping and doesn’t usually add much to the cost."
          }
        },
        {
          "@type": "Question",
          "name": "Do you ship motorcycles and electric vehicles in Arkansas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, both. We match motorcycles and EVs with carriers experienced in the specific handling each requires."
          }
        },
        {
          "@type": "Question",
          "name": "Is my car insured during transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All carriers in our network carry cargo insurance, and we verify active coverage before booking your shipment."
          }
        },
        {
          "@type": "Question",
          "name": "Do you ship to rural parts of Arkansas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, though pickup or delivery well outside the I-40 / I-49 / I-30 corridors may involve a short drive to a more accessible meeting point to keep the price down."
          }
        }
      ]
    }
    faq_schema_script.string = json.dumps(new_schema_data, indent=2)

# Write out the updated HTML
with open(file_path, "w", encoding="utf-8") as f:
    # Use formatter=None to avoid bs4 messing up existing entities if any, though standard is fine
    f.write(str(soup))

print("Arkansas page updated successfully.")
