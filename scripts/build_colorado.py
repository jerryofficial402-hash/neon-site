import os
from bs4 import BeautifulSoup
import json

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\colorado-car-shipping\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# 1. Update Title & Meta Description
title = soup.find('title')
if title:
    title.string = "Colorado Car Shipping: Costs, Routes & How It Works"

desc = soup.find('meta', attrs={'name': 'description'})
if desc:
    desc['content'] = "Whether you're relocating to Denver, heading to the mountains, or buying out of state, get real Colorado car shipping costs, routes, and auto transport quotes."

# 2. Extract FAQs for Schema Update
faqs = [
    {
        "q": "How much does it cost to ship a car to or from Colorado?",
        "a": "Most shipments range from $400 for short regional routes to $1,800 for long cross-country routes, depending on distance, vehicle size, and trailer type."
    },
    {
        "q": "How long does Colorado car shipping take?",
        "a": "Typically 1–3 days for short regional routes and 5–9 days for long cross-country routes, with possible added time for mountain-town deliveries during winter weather."
    },
    {
        "q": "Can you ship a car to a Colorado mountain town?",
        "a": "Yes — resort and mountain communities can be serviced, though pricing and scheduling may be slightly less flexible than Front Range cities due to lower carrier route density and seasonal weather."
    },
    {
        "q": "Is enclosed transport worth it for winter shipping?",
        "a": "For classic, luxury, or exotic vehicles, yes — enclosed transport protects against road salt, snow, and debris common on Colorado mountain routes in winter."
    },
    {
        "q": "Can you ship a non-running vehicle in Colorado?",
        "a": "Yes, with a winch-equipped carrier — let your shipping advisor know in advance so the right equipment is assigned."
    },
    {
        "q": "Do I need to register my car right away after shipping it to Colorado?",
        "a": "New residents generally have 90 days to register, and some counties require an emissions test first — check your county's specific rules."
    }
]

scripts = soup.find_all('script', type='application/ld+json')
for script in scripts:
    if 'FAQPage' in script.string:
        new_schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": []
        }
        for faq in faqs:
            new_schema['mainEntity'].append({
                "@type": "Question",
                "name": faq['q'],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq['a']
                }
            })
        script.string = json.dumps(new_schema, indent=2)
        break

# 3. New Content for col-span-2
new_content_html = """
<div class="space-y-12 min-w-0">
    <p class="text-xl text-[#425466] mb-12 leading-relaxed font-medium">Whether you're relocating to Denver for a new job, sending a vehicle to a family member in the mountains, or buying a car from an out-of-state seller, shipping a car to or from Colorado is more straightforward than it sounds. This guide covers real cost ranges, how the process works, and the Colorado-specific details — elevation, mountain weather, and registration rules — that actually affect your shipment.</p>
    <p class="text-lg text-[#425466] mb-12 leading-relaxed">Neon Auto Transport is a licensed and insured auto transport brokerage (DOT 4355879, MC 1703787) that arranges vehicle shipping nationwide, including throughout Colorado's Front Range and mountain communities.</p>

    <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Why Ship a Car To or From Colorado</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">Colorado's population growth, ski-town seasonal traffic, and status as a major relocation destination mean there's steady demand for auto transport in both directions. Common reasons customers ship a vehicle in or out of the state include:</p>
        <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
            <li>Relocating for work along the Front Range (Denver, Colorado Springs, Fort Collins, Boulder)</li>
            <li>Moving a vehicle to or from a mountain or resort town for the ski season</li>
            <li>Buying a car from an out-of-state dealer or private seller</li>
            <li>Sending a vehicle to a college student or family member</li>
            <li>Snowbird moves between Colorado and warm-weather states like Florida or Arizona</li>
        </ul>
    </div>

    <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">How Much Does Colorado Car Shipping Cost?</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">Car shipping costs are driven primarily by distance, vehicle size, trailer type (open vs. enclosed), and time of year. As a general guide:</p>
        
        <div class="overflow-x-auto mt-4 mb-6 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
            <table class="w-full text-left border-collapse min-w-[600px]">
                <thead class="bg-[#468de6] text-white text-[12px] font-bold uppercase tracking-wider">
                    <tr>
                        <th class="py-5 px-6">Distance</th>
                        <th class="py-5 px-6 text-center">Estimated Cost Range</th>
                        <th class="py-5 px-6 text-center">Typical Transit Time</th>
                    </tr>
                </thead>
                <tbody class="text-[15px]">
                    <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]">
                        <td class="py-4 px-6 font-bold text-[#0a2540]">Short (under 500 miles, e.g., Denver to Salt Lake City)</td>
                        <td class="py-4 px-6 text-center">$400–$700</td>
                        <td class="py-4 px-6 text-center">1–3 days</td>
                    </tr>
                    <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]">
                        <td class="py-4 px-6 font-bold text-[#0a2540]">Medium (500–1,500 miles, e.g., Denver to Dallas)</td>
                        <td class="py-4 px-6 text-center">$700–$1,200</td>
                        <td class="py-4 px-6 text-center">3–6 days</td>
                    </tr>
                    <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]">
                        <td class="py-4 px-6 font-bold text-[#0a2540]">Long (1,500+ miles, e.g., Denver to Miami)</td>
                        <td class="py-4 px-6 text-center">$1,000–$1,800</td>
                        <td class="py-4 px-6 text-center">5–9 days</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">These ranges reflect open-carrier transport for a standard sedan; enclosed transport typically runs 30–50% higher.</p>

        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">What Affects Your Price</h3>
        <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
            <li><strong>Distance and route:</strong> routes along major interstates (I-70, I-25) tend to price better than remote mountain-town pickups, since carriers pass through more often.</li>
            <li><strong>Season:</strong> summer and ski-season (November–March) demand can push prices up; booking a few weeks ahead helps.</li>
            <li><strong>Vehicle size and condition:</strong> larger vehicles and non-running vehicles typically cost more to transport.</li>
            <li><strong>Trailer type:</strong> open transport is more affordable; enclosed costs more but protects against weather and road debris.</li>
        </ul>
    </div>

    <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Open vs. Enclosed Car Transport in Colorado</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed"><a href="/services/open-auto-transport/" class="text-[#635bff] hover:underline font-semibold">Open car carriers</a> are the standard, most affordable option — the same type of multi-car trailers you see hauling new vehicles to dealerships. They're a good fit for most everyday vehicles.</p>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed"><a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline font-semibold">Enclosed auto transport</a> fully covers the vehicle during transit, protecting it from snow, road salt, and debris — a meaningful consideration for Colorado winters on I-70 mountain routes. It's the better choice for classic, luxury, or exotic vehicles, at a higher price point.</p>
        
        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Door-to-Door vs. Terminal Shipping</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">Most Colorado shipments are handled <a href="/services/door-to-door-car-shipping/" class="text-[#635bff] hover:underline font-semibold">door-to-door</a>, meaning the carrier picks up and delivers as close to your specified addresses as legally and practically possible — adjusted for narrow mountain roads, HOA restrictions, or low-clearance areas in some neighborhoods. Terminal-to-terminal shipping (dropping off and picking up at a depot) is less common but can sometimes reduce cost for flexible shippers.</p>
    </div>

    <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Popular Colorado Shipping Routes</h2>
        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Denver, Colorado Springs, Boulder & Fort Collins</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">The Front Range cities sit along I-25 and I-70, two of the most heavily traveled carrier corridors in the country, which generally means more carrier availability and more competitive pricing than remote mountain towns.</p>
        <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
            <li><a href="/routes/city/denver-co/" class="text-[#635bff] hover:underline font-semibold">Denver car shipping</a></li>
            <li><a href="/routes/city/colorado-springs-co/" class="text-[#635bff] hover:underline font-semibold">Colorado Springs car shipping</a></li>
            <li><a href="/routes/city/boulder-co/" class="text-[#635bff] hover:underline font-semibold">Boulder car shipping</a></li>
            <li><a href="/routes/city/fort-collins-co/" class="text-[#635bff] hover:underline font-semibold">Fort Collins car shipping</a></li>
            <li><a href="/routes/city/aurora-co/" class="text-[#635bff] hover:underline font-semibold">Aurora car shipping</a></li>
        </ul>

        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Colorado to California, Texas, Florida & New York</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">Some of the most common interstate routes we arrange:</p>
        <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
            <li><a href="/colorado-to-california-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Denver to California car shipping</a></li>
            <li><a href="/colorado-to-texas-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Colorado to Texas car shipping</a></li>
            <li><a href="/colorado-to-florida-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Colorado to Florida car shipping</a></li>
            <li><a href="/colorado-to-new-york-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Colorado to New York car shipping</a></li>
        </ul>
    </div>

    <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Shipping Specialty & High-Value Vehicles</h2>
        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Classic & Luxury Car Shipping</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed"><a href="/services/luxury-car-shipping/" class="text-[#635bff] hover:underline font-semibold">Classic and luxury vehicles</a> are typically shipped enclosed, with extra care taken during loading, securing, and inspection at pickup and delivery.</p>
        
        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Electric Vehicle Shipping</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">EVs can be shipped the same way as gas-powered vehicles, though carriers account for the added weight of the battery pack when assigning trailer space.</p>
        
        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Motorcycle & Oversized Vehicle Transport</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed"><a href="/services/motorcycle-shipping/" class="text-[#635bff] hover:underline font-semibold">Motorcycles</a> are usually shipped alongside other vehicles on the same trailer, while oversized vehicles (<a href="/services/truck-shipping-services/" class="text-[#635bff] hover:underline font-semibold">trucks</a>, RVs, boats) may require specialized equipment — let your shipping advisor know the vehicle type upfront so the right carrier is matched.</p>
        
        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Non-Running Vehicle Shipping</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">Vehicles that don't start or drive can still be shipped, but require a carrier with a winch — flag this when requesting a quote so the right equipment is dispatched.</p>
    </div>

    <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Colorado Weather, Elevation & Timing Considerations</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">Colorado's elevation and mountain terrain genuinely affect shipping logistics in ways flatter states don't:</p>
        <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
            <li><strong>Mountain pass closures:</strong> I-70 through the Rockies can close temporarily during heavy snow or high winds, which can add a day or two to transit for mountain-town deliveries.</li>
            <li><strong>Elevation effects:</strong> vehicles arriving from sea-level areas may run slightly differently at altitude at first (this is normal and typically self-resolves).</li>
            <li><strong>Front Range vs. mountain pricing:</strong> Denver, Colorado Springs, and Fort Collins are easier and generally cheaper to service than remote resort towns due to carrier route density.</li>
            <li><strong>Best booking window:</strong> for winter mountain-town shipments, booking 1–2 weeks ahead gives carriers more flexibility to route around weather delays.</li>
        </ul>

        <h3 class="text-3xl font-bold mb-4 mt-10 text-[#0a2540] tracking-tight">Registering Your Vehicle After It Arrives in Colorado</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">New Colorado residents generally have 90 days to register a vehicle at their county DMV. Depending on the county, an emissions inspection may be required before registration is complete — Front Range counties along the I-25 corridor are most likely to require this. Check your specific county's requirements before your vehicle arrives.</p>
    </div>

    <div class="mb-20">
        <p class="text-xl text-[#0a2540] font-bold mb-6">Getting an accurate quote takes just a few details: your pickup and delivery locations (zip codes help), vehicle make/model, preferred trailer type, and your target shipping window. Request a free instant quote from Neon Auto Transport, or call our team directly if you have questions about routes, timing, or specialty vehicles.</p>
        <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_15px_rgba(57,255,20,0.4)] inline-flex items-center gap-2">
            Calculate Your Rate Instantly 
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
    </div>

    <!-- FAQs -->
    <div class="mb-12 mt-12">
        <h2 class="text-3xl font-bold mb-8 text-[#0a2540] tracking-tight">Frequently Asked Questions</h2>
        <div class="space-y-4">
"""

for faq in faqs:
    new_content_html += f"""
            <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
                <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
                  {faq['q']}
                  <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
                </summary>
                <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
                  {faq['a']}
                </div>
            </details>
"""

new_content_html += """
        </div>
    </div>
</div>
"""

# Replace col_span_2 contents safely
col_span_2 = soup.find('div', class_='lg:col-span-2')
if col_span_2:
    new_soup = BeautifulSoup(new_content_html, 'html.parser')
    col_span_2.clear()
    
    # Actually, the original col_span_2 had a class "space-y-12 min-w-0" 
    # My new_content_html is wrapped in a div with those classes, so I'll just append its children.
    # Wait, the old col_span_2 already IS the div with those classes.
    # So I should append the children of the internal div.
    inner_div = new_soup.find('div')
    for child in inner_div.children:
        col_span_2.append(child)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))
