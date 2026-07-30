import os
import re
from bs4 import BeautifulSoup

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\colorado-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, "html.parser")

# 1. Update Title & Meta
title_tag = soup.find("title")
if title_tag:
    title_tag.string = "Colorado Car Shipping: Denver to Colorado Springs & Top Cities"

meta_desc = soup.find("meta", attrs={"name": "description"})
if meta_desc:
    meta_desc["content"] = "Ship a car in Colorado with Neon Auto Transport. Denver to Colorado Springs rates, transit times, and city-by-city pricing. Free instant quotes."

meta_keywords = soup.find("meta", attrs={"name": "keywords"})
if meta_keywords:
    meta_keywords["content"] = "Colorado car shipping, Denver to Colorado Springs car shipping, cheap auto transport Denver to Colorado Springs, ship a car in Colorado, auto transport Colorado"

canonical = soup.find("link", attrs={"rel": "canonical"})
if canonical:
    canonical["href"] = "https://neonautotransport.com/colorado-car-shipping-cities/"

og_url = soup.find("meta", attrs={"property": "og:url"})
if og_url:
    og_url["content"] = "https://neonautotransport.com/colorado-car-shipping-cities/"

og_title = soup.find("meta", attrs={"property": "og:title"})
if og_title:
    og_title["content"] = "Colorado Car Shipping: Denver to Colorado Springs & Top Cities"

og_desc = soup.find("meta", attrs={"property": "og:description"})
if og_desc:
    og_desc["content"] = "Ship a car in Colorado with Neon Auto Transport. Denver to Colorado Springs rates, transit times, and city-by-city pricing. Free instant quotes."

og_img = soup.find("meta", attrs={"property": "og:image"})
if og_img:
    og_img["content"] = "https://neonautotransport.com/images/colorado-car-shipping-top-cities.jpg"

twitter_title = soup.find("meta", attrs={"name": "twitter:title"})
if twitter_title:
    twitter_title["content"] = "Colorado Car Shipping: Denver to Colorado Springs & Top Cities"

twitter_desc = soup.find("meta", attrs={"name": "twitter:description"})
if twitter_desc:
    twitter_desc["content"] = "Ship a car in Colorado with Neon Auto Transport. Denver to Colorado Springs rates, transit times, and city-by-city pricing. Free instant quotes."

twitter_img = soup.find("meta", attrs={"name": "twitter:image"})
if twitter_img:
    twitter_img["content"] = "https://neonautotransport.com/images/colorado-car-shipping-top-cities.jpg"

# Remove all existing JSON-LD scripts and add a clean unified one
schema_tags = soup.find_all("script", attrs={"type": "application/ld+json"})
for idx, s in enumerate(schema_tags):
    if idx == 0:
        continue
    s.decompose()

schema_tag = soup.find("script", attrs={"type": "application/ld+json"})
new_schema_json = """{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Colorado State Auto Transport & City Routes",
      "description": "Ship a car in Colorado with Neon Auto Transport. Denver to Colorado Springs rates, transit times, and city-by-city pricing. Free instant quotes.",
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
      "areaServed": [
        {"@type": "City", "name": "Denver, CO"},
        {"@type": "City", "name": "Colorado Springs, CO"},
        {"@type": "City", "name": "Aurora, CO"},
        {"@type": "City", "name": "Fort Collins, CO"},
        {"@type": "City", "name": "Lakewood, CO"},
        {"@type": "City", "name": "Thornton, CO"},
        {"@type": "City", "name": "Arvada, CO"},
        {"@type": "City", "name": "Westminster, CO"},
        {"@type": "City", "name": "Pueblo, CO"},
        {"@type": "City", "name": "Boulder, CO"},
        {"@type": "City", "name": "Grand Junction, CO"}
      ],
      "url": "https://neonautotransport.com/colorado-car-shipping-cities/"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to ship a car from Denver to Colorado Springs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Expect roughly $185–$325 on an open carrier and $375–$575 enclosed, depending on vehicle size, condition, and how quickly you need pickup. Short routes are priced with a trip minimum rather than a strict per-mile rate."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Denver to Colorado Springs car shipping take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The drive itself is about 70 miles and just over an hour. Once a carrier is dispatched, most vehicles are delivered same-day or the next day."
          }
        },
        {
          "@type": "Question",
          "name": "Is open or enclosed transport better for a Colorado car shipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open carrier is the standard, most affordable choice and is safe for the vast majority of vehicles. Enclosed transport is worth the extra cost for classic, luxury, exotic, or otherwise high-value vehicles."
          }
        },
        {
          "@type": "Question",
          "name": "Can I ship a car that doesn't run?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — inoperable car transport is available throughout Colorado, but it requires a carrier with a winch, so disclose the vehicle's condition when requesting your quote."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to be present for pickup and delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You or an authorized person needs to be present to hand over keys and sign the bill of lading at both pickup and delivery, documenting the vehicle's condition."
          }
        },
        {
          "@type": "Question",
          "name": "Which Colorado cities are easiest (and cheapest) to ship from?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cities directly on I-25 — Denver, Colorado Springs, Aurora, Pueblo, and Fort Collins — see the most carrier traffic, which generally means faster pickup and more competitive rates than cities off the interstate."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://neonautotransport.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Colorado Car Shipping",
          "item": "https://neonautotransport.com/colorado-car-shipping/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Top Cities Guide",
          "item": "https://neonautotransport.com/colorado-car-shipping-cities/"
        }
      ]
    }
  ]
}"""
if schema_tag:
    schema_tag.string = new_schema_json

# 2. Update Hero Section
h1_tag = soup.find("h1")
if h1_tag:
    h1_tag.string = "Colorado Top Cities Car Shipping Guide: Denver, Colorado Springs & Beyond"

# Find hero back link
hero_section = soup.find("section", class_=lambda c: c and "bg-[#f6f9fc]" in c)
if hero_section:
    back_link = hero_section.find("a", href=True)
    if back_link and "Back to" in back_link.text:
        back_link["href"] = "/colorado-car-shipping/"
        back_link.string = "Back to Colorado Car Shipping Guide"
    
    # Update hero intro paragraph
    p_tags = hero_section.find_all("p")
    for p in p_tags:
        p.string = "If you're relocating, buying a vehicle out of state, or sending a car to a family member, you already know Colorado isn't a one-city market. Between the Front Range corridor that runs from Fort Collins down through Denver and Colorado Springs to Pueblo, and the mountain and Western Slope communities further out, the price and logistics of Colorado car shipping depend heavily on which city you're shipping to or from. At Neon Auto Transport, we move vehicles in and out of every major city in the state every week, and this guide breaks down exactly what it costs, how long it takes, and which transport method makes sense — city by city."
        break
            
    # Update hero image
    hero_img = hero_section.find("img")
    if hero_img:
        hero_img["src"] = "/images/colorado-car-shipping-top-cities.jpg"
        hero_img["alt"] = "Open carrier truck hauling vehicles on I-25 between Denver and Colorado Springs"

# 3. Build Full Body Content for lg:col-span-2
col_span_2 = soup.find("div", class_="lg:col-span-2")
if col_span_2:
    col_span_2.clear()
    
    body_html = """
    <div class="space-y-16 min-w-0">
      <!-- What's Covered in This Guide Box -->
      <div class="bg-gradient-to-br from-[#0a2540] to-[#1e3a5f] text-white p-8 rounded-2xl shadow-lg border border-slate-700">
        <h2 class="text-2xl font-black mb-4 flex items-center gap-2 text-[#39FF14]">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg>
          What's Covered in This Guide
        </h2>
        <ol class="list-decimal pl-6 space-y-2 text-[16px] text-slate-200 font-medium">
          <li><a href="#top-cities" class="hover:text-[#39FF14] transition underline decoration-slate-600">Colorado's top cities for car shipping, and what makes each one unique</a></li>
          <li><a href="#denver-to-colorado-springs" class="hover:text-[#39FF14] transition underline decoration-slate-600">Denver to Colorado Springs car shipping — routes, pricing, and timing</a></li>
          <li><a href="#costs-by-distance" class="hover:text-[#39FF14] transition underline decoration-slate-600">Colorado car shipping costs by distance and destination state</a></li>
          <li><a href="#transport-methods" class="hover:text-[#39FF14] transition underline decoration-slate-600">Open vs. enclosed vs. expedited: choosing the right transport method</a></li>
          <li><a href="#specialty-vehicles" class="hover:text-[#39FF14] transition underline decoration-slate-600">Shipping specialty vehicles — classic cars, EVs, motorcycles, oversized, non-running</a></li>
          <li><a href="#choose-transporter" class="hover:text-[#39FF14] transition underline decoration-slate-600">How to vet a licensed, reliable Colorado auto transporter</a></li>
          <li><a href="#faqs" class="hover:text-[#39FF14] transition underline decoration-slate-600">Frequently asked questions</a></li>
        </ol>
      </div>

      <!-- Section 1: Top Cities -->
      <div id="top-cities" class="border-b border-[#e6e6e6] pb-16">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Colorado's Top Cities for Car Shipping</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">
          Colorado's population is concentrated along the I-25 corridor, which is exactly why it's also the backbone of the state's car-hauling network. Carriers running the Denver–Colorado Springs–Pueblo line, or heading west on I-70 toward Grand Junction, pass through these hubs constantly — which means more capacity, more competitive rates, and shorter wait times for pickup. Here's how the state's largest cities stack up for auto transport.
        </p>

        <div class="overflow-x-auto my-8 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
          <table class="w-full text-left border-collapse min-w-[700px]">
            <thead class="bg-[#0a2540] text-white text-[13px] font-bold uppercase tracking-wider">
              <tr>
                <th class="py-5 px-6">City</th>
                <th class="py-5 px-6">Approx. Population</th>
                <th class="py-5 px-6">Why It Matters for Car Shipping</th>
              </tr>
            </thead>
            <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/routes/city/denver-co/" class="text-[#635bff] hover:underline">Denver</a></td>
                <td class="py-4 px-6 font-semibold text-[#425466]">715,000+</td>
                <td class="py-4 px-6 text-[#425466]">State capital and the primary hub for every carrier route in and out of Colorado; the widest carrier availability in the state.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/routes/city/colorado-springs-co/" class="text-[#635bff] hover:underline">Colorado Springs</a></td>
                <td class="py-4 px-6 font-semibold text-[#425466]">490,000+</td>
                <td class="py-4 px-6 text-[#425466]">2nd-largest city; sits directly on I-25, large military relocation volume (Fort Carson, Peterson SFB, Air Force Academy).</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/routes/city/aurora-co/" class="text-[#635bff] hover:underline">Aurora</a></td>
                <td class="py-4 px-6 font-semibold text-[#425466]">390,000+</td>
                <td class="py-4 px-6 text-[#425466]">Borders Denver and Denver International Airport; frequently combined with Denver pickups for lower per-vehicle cost.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/routes/city/fort-collins-co/" class="text-[#635bff] hover:underline">Fort Collins</a></td>
                <td class="py-4 px-6 font-semibold text-[#425466]">170,000+</td>
                <td class="py-4 px-6 text-[#425466]">Northern Colorado hub near CSU; slightly farther from the interstate backbone, so book pickup windows a bit earlier.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Lakewood</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">155,000+</td>
                <td class="py-4 px-6 text-[#425466]">Immediately west of Denver; easy carrier access via I-70 and C-470.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Thornton</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">140,000+</td>
                <td class="py-4 px-6 text-[#425466]">North Denver metro; served on the same routes as Denver and Westminster.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Arvada</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">120,000+</td>
                <td class="py-4 px-6 text-[#425466]">Northwest Denver metro; strong carrier coverage due to proximity to I-70 and I-76.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Westminster</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">115,000+</td>
                <td class="py-4 px-6 text-[#425466]">Between Denver and Boulder; convenient consolidation point for multi-stop loads.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Pueblo</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">110,000+</td>
                <td class="py-4 px-6 text-[#425466]">Southern I-25 anchor city; a natural stop between Colorado Springs and destinations in New Mexico and Texas.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/routes/city/boulder-co/" class="text-[#635bff] hover:underline">Boulder</a></td>
                <td class="py-4 px-6 font-semibold text-[#425466]">108,000+</td>
                <td class="py-4 px-6 text-[#425466]">University and tech hub 30 miles northwest of Denver; slightly higher rates due to lower carrier density off the interstate.</td>
              </tr>
              <tr class="hover:bg-[#f8fafc] transition">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Grand Junction</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">68,000+</td>
                <td class="py-4 px-6 text-[#425466]">Western Slope's largest city; the main gateway for Colorado–Utah–Nevada shipments.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-lg text-[#425466] leading-relaxed">
          Because Denver, Colorado Springs, Aurora, Pueblo, and Fort Collins all sit on or near I-25, they're considered "high-density" pickup and delivery points — carriers run this stretch daily, so quotes tend to run lower and pickup windows tend to be tighter. Cities off the interstate, like Boulder, Durango, or Steamboat Springs, may add a day to pickup scheduling and a modest surcharge for the extra drive time.
        </p>
      </div>

      <!-- Section 2: Denver to Colorado Springs -->
      <div id="denver-to-colorado-springs" class="border-b border-[#e6e6e6] pb-16">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Denver to Colorado Springs Car Shipping</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">
          The Denver to Colorado Springs corridor is the single most-traveled auto transport route within Colorado. Whether you're a PCS military family headed to Fort Carson, a student moving for school, or a dealer repositioning inventory, this is a route Neon Auto Transport runs constantly, and it behaves differently from long-haul, cross-country shipping.
        </p>

        <div class="overflow-x-auto my-8 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
          <table class="w-full text-left border-collapse min-w-[600px]">
            <thead class="bg-[#468de6] text-white text-[13px] font-bold uppercase tracking-wider">
              <tr>
                <th class="py-4 px-6">Detail</th>
                <th class="py-4 px-6">Information</th>
              </tr>
            </thead>
            <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Primary route</td>
                <td class="py-4 px-6 text-[#425466]">Interstate 25 South (direct, no detours required)</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Driving distance</td>
                <td class="py-4 px-6 text-[#425466]">Approximately 70 miles</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Typical drive time (no stops)</td>
                <td class="py-4 px-6 text-[#425466]">1 hour, 10–20 minutes</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Typical carrier transit window</td>
                <td class="py-4 px-6 text-[#425466]">Same day to next day, once picked up</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Terrain/weather factor</td>
                <td class="py-4 px-6 text-[#425466]">Minimal — mostly flat interstate with light elevation gain; winter storms can occasionally cause short delays</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-lg text-[#425466] mb-8 leading-relaxed">
          Because Denver to Colorado Springs auto transport covers such a short distance, it's functionally a same-day or next-day delivery once a carrier is dispatched — a very different experience from a multi-day, multi-state haul. Most Denver CO to Colorado Springs CO car hauling requests get matched with a carrier that's already running the I-25 corridor for another customer, which is what keeps rates reasonable despite the short mileage.
        </p>

        <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Denver to Colorado Springs Car Shipping Rates</h3>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">
          Short routes like this one are priced differently than long-haul shipments. Because the trip only takes an hour or two, carriers apply a trip minimum rather than a strict per-mile rate — otherwise a 70-mile haul priced at national per-mile averages would fall below what covers fuel, insurance, and driver time. Here's what to expect when shipping a car from Denver to Colorado Springs (or the reverse):
        </p>

        <div class="overflow-x-auto my-8 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
          <table class="w-full text-left border-collapse min-w-[600px]">
            <thead class="bg-[#468de6] text-white text-[13px] font-bold uppercase tracking-wider">
              <tr>
                <th class="py-4 px-6">Service Type</th>
                <th class="py-4 px-6">Typical Price Range</th>
                <th class="py-4 px-6">Typical Transit</th>
              </tr>
            </thead>
            <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Open carrier (standard sedan/SUV)</td>
                <td class="py-4 px-6 font-bold text-[#16a34a]">$185 – $325</td>
                <td class="py-4 px-6 text-[#425466]">Same day – 1 day</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Enclosed carrier</td>
                <td class="py-4 px-6 font-bold text-[#635bff]">$375 – $575</td>
                <td class="py-4 px-6 text-[#425466]">Same day – 1 day</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Expedited / guaranteed pickup</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">+$75 – $150 above standard rate</td>
                <td class="py-4 px-6 text-[#425466]">Within 24 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-[#f8fafc] p-6 rounded-xl border-l-4 border-[#635bff] my-8">
          <p class="text-sm text-[#425466] italic mb-3">
            Rates are general market ranges for short-haul Colorado routes and vary with vehicle size, running condition, current carrier availability, and season. Request a free, no-obligation quote from Neon Auto Transport for an exact price on your vehicle.
          </p>
          <p class="text-sm text-[#0a2540] font-semibold">
            Why "cheap auto transport Denver to Colorado Springs" quotes vary so much: Because this is a short route, a handful of dollars in fuel or driver time swings the percentage cost more than it would on a 1,500-mile haul. The lowest quotes usually come from carriers who already have a truck running empty space on I-25 that day — which is exactly the kind of match Neon Auto Transport's carrier network is built to find.
          </p>
        </div>

        <h3 class="text-3xl font-bold mb-4 mt-12 text-[#0a2540] tracking-tight">Service Types for the Denver–Colorado Springs Route</h3>
        <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg mb-8">
          <li><strong><a href="/services/open-auto-transport/" class="text-[#635bff] hover:underline">Open carrier car shipping</a></strong> — the standard, most affordable option; your vehicle rides on a multi-car open trailer, the same type dealers use.</li>
          <li><strong><a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline">Enclosed auto transport</a></strong> — fully covered trailer that shields your vehicle from road debris and weather; recommended for classic, exotic, or luxury vehicles.</li>
          <li><strong><a href="/services/door-to-door-car-shipping/" class="text-[#635bff] hover:underline">Door-to-door car shipping</a></strong> — the carrier picks up and delivers as close to your exact addresses as legally and physically possible, which is the default for nearly every Colorado city-to-city move.</li>
          <li><strong><a href="/services/expedited-auto-transport/" class="text-[#635bff] hover:underline">Expedited car delivery</a></strong> — guaranteed pickup within a tight window, useful for last-minute PCS orders, closing dates, or rental returns.</li>
          <li><strong><a href="/services/luxury-car-shipping/" class="text-[#635bff] hover:underline">Luxury car transport</a></strong> — enclosed trailer, soft tie-downs, and liftgate loading for low-clearance sports cars and high-value vehicles.</li>
        </ul>

        <h3 class="text-3xl font-bold mb-4 mt-12 text-[#0a2540] tracking-tight">Choosing a Company for This Route</h3>
        <p class="text-lg text-[#425466] mb-4 leading-relaxed">
          Because Denver-to-Colorado Springs is a short, high-frequency route, it attracts a lot of listings from brokers who don't actually run it often. When comparing rated auto transporters in Colorado, confirm three things before booking:
        </p>
        <ul class="list-disc pl-5 mt-2 space-y-3 text-[#425466] text-lg mb-8">
          <li><strong>Active FMCSA registration</strong> — every legitimate broker or carrier has a US DOT and MC number you can verify on the FMCSA SAFER website.</li>
          <li><strong>Cargo insurance on file</strong> — ask for a certificate of insurance, not just a verbal confirmation.</li>
          <li><strong>Local route experience</strong> — a company that runs the I-25 corridor daily, like Neon Auto Transport, can typically offer a same-day pickup that a nationwide-only broker can't match.</li>
        </ul>

        <h3 class="text-3xl font-bold mb-4 mt-12 text-[#0a2540] tracking-tight">Vehicle-Specific Notes for This Route</h3>
        <div class="overflow-x-auto my-6 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
          <table class="w-full text-left border-collapse min-w-[600px]">
            <thead class="bg-[#0a2540] text-white text-[13px] font-bold uppercase tracking-wider">
              <tr>
                <th class="py-4 px-6">Vehicle Type</th>
                <th class="py-4 px-6">Recommended Method</th>
                <th class="py-4 px-6">Notes</th>
              </tr>
            </thead>
            <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Classic car</td>
                <td class="py-4 px-6 font-semibold text-[#635bff]">Enclosed, liftgate</td>
                <td class="py-4 px-6 text-[#425466]">Low ground clearance often requires a liftgate trailer even for short hauls.</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Electric vehicle</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">Open or enclosed</td>
                <td class="py-4 px-6 text-[#425466]">Confirm charge level (recommend 50% or below) before pickup; no special permit needed in-state.</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Non-running / inoperable</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">Open with winch-equipped trailer</td>
                <td class="py-4 px-6 text-[#425466]">Disclose upfront — a winch-capable carrier is required for loading.</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Oversized vehicle (truck/van)</td>
                <td class="py-4 px-6 font-semibold text-[#425466]">Open, flatbed if needed</td>
                <td class="py-4 px-6 text-[#425466]">May require a slightly larger trailer slot; confirm dimensions when booking.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Section 3: Costs by Distance -->
      <div id="costs-by-distance" class="border-b border-[#e6e6e6] pb-16">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Colorado Car Shipping Costs by Distance & Destination</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">
          Outside of short intrastate hops like Denver to Colorado Springs, most Colorado auto transport is interstate — vehicles moving to or from California, Texas, Florida, New York, and other major relocation states. Distance is the single biggest factor in the cost to ship a car from Denver, followed by vehicle size, trailer type, and how quickly you need pickup.
        </p>

        <div class="overflow-x-auto my-8 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
          <table class="w-full text-left border-collapse min-w-[700px]">
            <thead class="bg-[#468de6] text-white text-[13px] font-bold uppercase tracking-wider">
              <tr>
                <th class="py-4 px-6">Route</th>
                <th class="py-4 px-6 text-center">Approx. Distance</th>
                <th class="py-4 px-6 text-center">Open Carrier Estimate</th>
                <th class="py-4 px-6 text-center">Enclosed Estimate</th>
              </tr>
            </thead>
            <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Denver, CO → Colorado Springs, CO</td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">70 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$185 – $325</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$375 – $575</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Denver, CO → Grand Junction, CO</td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">245 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$350 – $500</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$600 – $850</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Denver, CO → Albuquerque, NM</td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">450 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$450 – $650</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$750 – $1,050</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Denver, CO → Phoenix, AZ</td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">830 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$650 – $900</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,050 – $1,450</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/colorado-to-texas-car-shipping/" class="text-[#635bff] hover:underline">Denver, CO → Dallas, TX</a></td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">780 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$625 – $875</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,000 – $1,400</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/colorado-to-california-car-shipping/" class="text-[#635bff] hover:underline">Denver, CO → Los Angeles, CA</a></td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">1,015 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$750 – $1,050</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,250 – $1,700</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Denver, CO → Chicago, IL</td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">1,000 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$750 – $1,000</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,200 – $1,650</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Denver, CO → Atlanta, GA</td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">1,400 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$900 – $1,250</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,450 – $1,950</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">Denver, CO → Seattle, WA</td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">1,320 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$875 – $1,200</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,400 – $1,900</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/colorado-to-new-york-car-shipping/" class="text-[#635bff] hover:underline">Denver, CO → New York, NY</a></td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">1,780 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$1,050 – $1,450</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,700 – $2,300</td>
              </tr>
              <tr class="hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]"><a href="/colorado-to-florida-car-shipping/" class="text-[#635bff] hover:underline">Denver, CO → Miami, FL</a></td>
                <td class="py-4 px-6 text-center font-semibold text-[#425466]">2,100 miles</td>
                <td class="py-4 px-6 text-center font-bold text-[#16a34a]">$1,200 – $1,650</td>
                <td class="py-4 px-6 text-center font-bold text-[#635bff]">$1,950 – $2,650</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-lg text-[#425466] leading-relaxed mb-4">
          <em>Estimates reflect typical 2026 market ranges for a standard operable sedan and fluctuate with fuel prices, seasonal demand, and carrier availability. Get an exact quote for your vehicle and dates from Neon Auto Transport.</em>
        </p>
        <p class="text-lg text-[#425466] leading-relaxed">
          Notice the pattern: per-mile cost drops sharply as distance increases. A short in-state hop like Denver to Colorado Springs costs more per mile than a coast-to-coast haul, because trip minimums, fuel positioning, and driver time matter more on short routes. This is standard across the auto transport industry, not unique to any one company — and it's why "affordable auto transport Denver to Colorado Springs" quotes should always be compared against the trip minimum, not against a per-mile rate built for long-haul routes.
        </p>
      </div>

      <!-- Section 4: Transport Methods -->
      <div id="transport-methods" class="border-b border-[#e6e6e6] pb-16">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Open vs. Enclosed vs. Expedited: Choosing the Right Method</h2>
        
        <div class="overflow-x-auto my-8 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
          <table class="w-full text-left border-collapse min-w-[600px]">
            <thead class="bg-[#0a2540] text-white text-[13px] font-bold uppercase tracking-wider">
              <tr>
                <th class="py-4 px-6">Method</th>
                <th class="py-4 px-6">Best For</th>
                <th class="py-4 px-6">Typical Cost vs. Open</th>
              </tr>
            </thead>
            <tbody class="text-[15px] divide-y divide-[#e6e6e6]">
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Open carrier</td>
                <td class="py-4 px-6 text-[#425466]">Everyday sedans, SUVs, trucks; the majority of Colorado shipments</td>
                <td class="py-4 px-6 font-bold text-[#16a34a]">Baseline</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Enclosed auto transport</td>
                <td class="py-4 px-6 text-[#425466]">Classic cars, exotics, luxury vehicles, motorcycles</td>
                <td class="py-4 px-6 font-bold text-[#635bff]">+40% – 60%</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Door-to-door car shipping</td>
                <td class="py-4 px-6 text-[#425466]">Nearly all residential and commercial Colorado moves</td>
                <td class="py-4 px-6 font-semibold text-[#0a2540]">Included standard</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Expedited car delivery</td>
                <td class="py-4 px-6 text-[#425466]">PCS orders, closing dates, rental deadlines</td>
                <td class="py-4 px-6 font-semibold text-[#635bff]">+15% – 30%</td>
              </tr>
              <tr>
                <td class="py-4 px-6 font-bold text-[#0a2540]">Covered vehicle transport (soft-side)</td>
                <td class="py-4 px-6 text-[#425466]">Mid-tier protection between open and hard-shell enclosed</td>
                <td class="py-4 px-6 font-semibold text-[#635bff]">+20% – 35%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-lg text-[#425466] leading-relaxed">
          Open carrier car shipping remains the most popular choice across Colorado because it's the most cost-effective and perfectly safe for everyday vehicles — it's the same method dealerships use to move new inventory. Enclosed auto transport makes sense when the vehicle's value, rarity, or ground clearance justifies the extra cost. Door-to-door car shipping in Colorado is the default service level; true terminal-to-terminal shipping is rarely offered or needed given how spread out Colorado's terminals would have to be.
        </p>
      </div>

      <!-- Section 5: Specialty Vehicles -->
      <div id="specialty-vehicles" class="border-b border-[#e6e6e6] pb-16">
        <h2 class="text-4xl font-black text-[#0a2540] mb-8 tracking-tight">Specialized Vehicle Shipping in Colorado</h2>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Classic Car Shipping Colorado</h3>
            <p class="text-lg text-[#425466] leading-relaxed">
              Shipping a classic car from Denver to Colorado Springs — or anywhere in the state — typically calls for enclosed transport with a liftgate, since many classic vehicles sit too low for a standard ramp. Ask about soft tie-downs, which secure the vehicle without contacting the body or wheel wells.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Electric Vehicle Transport</h3>
            <p class="text-lg text-[#425466] leading-relaxed">
              Electric vehicle shipping in Colorado Springs to Denver and beyond works the same as transporting a gas vehicle, with one difference: carriers generally ask that the battery be between 30–50% charged, both to save weight and to have a safety margin if the vehicle needs to be moved on and off the trailer under its own power.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Motorcycle Shipping Colorado</h3>
            <p class="text-lg text-[#425466] leading-relaxed">
              Motorcycles ship on dedicated motorcycle trailers or in the top rows of multi-car carriers using wheel-chock tie-down systems. Enclosed transport is common for higher-value bikes.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Oversized Vehicle Transport Colorado</h3>
            <p class="text-lg text-[#425466] leading-relaxed">
              Shipping oversized vehicles in Colorado — full-size trucks, vans, or vehicles with lift kits — may require a specific trailer configuration. Always share exact height, length, and weight when requesting a quote so the right equipment is dispatched the first time.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-[#0a2540] mb-3">Non-Running / Inoperable Car Transport</h3>
            <p class="text-lg text-[#425466] leading-relaxed">
              Inoperable car transport from Denver to Colorado Springs (or any Colorado route) is entirely possible but requires a winch-equipped carrier. Disclosing that a vehicle doesn't start, steer, or roll before pickup day prevents delays and keeps the price accurate.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 6: Choose Transporter -->
      <div id="choose-transporter" class="border-b border-[#e6e6e6] pb-16">
        <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">How to Choose a Licensed, Reliable Colorado Auto Transporter</h2>
        <p class="text-lg text-[#425466] mb-6 leading-relaxed">
          Colorado's auto transport market includes national brokers, regional carriers, and local owner-operators. When comparing rated auto transporters in Colorado, look for:
        </p>
        <ul class="list-disc pl-5 mt-4 space-y-4 text-[#425466] text-lg">
          <li><strong>Licensing:</strong> Active FMCSA/DOT registration, verifiable on the FMCSA SAFER system.</li>
          <li><strong>Insurance:</strong> Cargo coverage sufficient for the vehicle's value, with a certificate available on request.</li>
          <li><strong>Transparent pricing:</strong> A written quote that states trailer type, pickup window, and total price — no vague "starting at" figures.</li>
          <li><strong>Track record:</strong> Verifiable reviews and a real customer service line, not just a lead-generation form.</li>
          <li><strong>Route familiarity:</strong> Companies that run Colorado routes regularly, like Neon Auto Transport, tend to offer faster pickup and more accurate delivery windows than out-of-state brokers unfamiliar with I-25 traffic patterns and mountain weather.</li>
        </ul>
      </div>

      <!-- Section 7: CTA Box -->
      <div class="bg-gradient-to-br from-[#0a2540] via-[#0d2d4c] to-[#163b60] text-white p-10 rounded-3xl shadow-xl text-center relative overflow-hidden border border-slate-700">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-[#39FF14] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
        <h2 class="text-3xl lg:text-4xl font-black mb-4 tracking-tight">Ready to ship your car in Colorado?</h2>
        <p class="text-lg text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Neon Auto Transport runs Denver, Colorado Springs, Aurora, Fort Collins, Boulder, Pueblo, and every major Colorado city — with open, enclosed, and expedited options. Get a free, no-obligation quote today.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="/cost-calculator/" class="bg-[#39FF14] text-[#0a2540] px-8 py-4 rounded-full font-black text-lg hover:bg-[#32e011] transition shadow-[0_0_20px_rgba(57,255,20,0.4)] inline-flex items-center gap-2">
            Get Your Free Quote Online
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </a>
          <a href="tel:5715767711" class="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition border border-white/20 inline-flex items-center gap-2">
            <svg class="w-5 h-5 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
            Call (571) 576-7711
          </a>
        </div>
      </div>

      <!-- Section 8: FAQ Accordion -->
      <div id="faqs" class="pt-8">
        <h2 class="text-4xl font-black text-[#0a2540] mb-8 tracking-tight">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
              How much does it cost to ship a car from Denver to Colorado Springs?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
              Expect roughly $185–$325 on an open carrier and $375–$575 enclosed, depending on vehicle size, condition, and how quickly you need pickup. Short routes are priced with a trip minimum rather than a strict per-mile rate.
            </div>
          </details>

          <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
              How long does Denver to Colorado Springs car shipping take?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
              The drive itself is about 70 miles and just over an hour. Once a carrier is dispatched, most vehicles are delivered same-day or the next day.
            </div>
          </details>

          <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
              Is open or enclosed transport better for a Colorado car shipment?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
              Open carrier is the standard, most affordable choice and is safe for the vast majority of vehicles. Enclosed transport is worth the extra cost for classic, luxury, exotic, or otherwise high-value vehicles.
            </div>
          </details>

          <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
              Can I ship a car that doesn't run?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
              Yes — inoperable car transport is available throughout Colorado, but it requires a carrier with a winch, so disclose the vehicle's condition when requesting your quote.
            </div>
          </details>

          <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
              Do I need to be present for pickup and delivery?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
              You or an authorized person needs to be present to hand over keys and sign the bill of lading at both pickup and delivery, documenting the vehicle's condition.
            </div>
          </details>

          <details class="group bg-[#f0f5fa] rounded-xl border border-transparent hover:border-[#468de6] transition cursor-pointer open:bg-white open:shadow-md open:border-[#e6e6e6]">
            <summary class="flex items-center justify-between font-bold text-[#0a2540] p-6 marker:content-none list-none text-lg">
              Which Colorado cities are easiest (and cheapest) to ship from?
              <span class="text-[#468de6] group-open:rotate-45 transition-transform text-3xl leading-none font-normal">+</span>
            </summary>
            <div class="px-6 pb-6 text-[#425466] text-[15px] leading-relaxed border-t border-[#e6e6e6] pt-4">
              Cities directly on I-25 — Denver, Colorado Springs, Aurora, Pueblo, and Fort Collins — see the most carrier traffic, which generally means faster pickup and more competitive rates than cities off the interstate.
            </div>
          </details>
        </div>
      </div>
    </div>
    """
    
    new_body_soup = BeautifulSoup(body_html, "html.parser")
    for child in list(new_body_soup.find("div").children):
        col_span_2.append(child)

# Replace any leftover footer links to Arkansas
footer_html = str(soup)
footer_html = footer_html.replace("/arkansas-to-florida-car-shipping/", "/colorado-to-florida-car-shipping/")
footer_html = footer_html.replace("AR to Florida", "CO to Florida")
footer_html = footer_html.replace("/california-to-arkansas-car-shipping/", "/california-to-texas-car-shipping/")
footer_html = footer_html.replace("CA to Arkansas", "CA to Texas")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(footer_html)

print("Successfully generated colorado-car-shipping-cities/index.html without leftover schema or footer links")
