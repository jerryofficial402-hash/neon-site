import os
from bs4 import BeautifulSoup
import json

template_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\texas-car-shipping\dallas\index.html"

with open(template_path, "r", encoding="utf-8") as f:
    template_html = f.read()

cities_data = [
    {
        "slug": "little-rock-ar",
        "city_name": "Little Rock",
        "state_abbr": "AR",
        "state_name": "Arkansas",
        "title": "Little Rock Car Shipping | Auto Transport Quotes — Neon Auto Transport",
        "desc": "Ship your car to or from Little Rock, AR with Neon Auto Transport. Licensed, insured carriers, door-to-door service, and fast free quotes.",
        "h1": "Little Rock Car Shipping",
        "intro": "As Arkansas’s capital and largest city, Little Rock sits at the crossroads of I-30, I-40, and I-630, making it one of the most connected auto transport hubs in the state. Whether you’re relocating for work, buying a car from an out-of-state dealer, or sending a vehicle to a family member, Neon Auto Transport moves vehicles in and out of Little Rock every week.",
        "context": "The city’s central location means carriers routinely run routes through Little Rock on their way between Texas, Tennessee, Missouri, and the Gulf Coast — which typically means shorter wait times and more competitive pricing than more remote Arkansas cities.",
        "reasons": "military relocations (Little Rock Air Force Base in nearby Jacksonville), corporate transfers, university moves, and snowbirds heading to/from Florida and Arizona.",
        "routes": [
            "Little Rock, AR → Dallas, TX",
            "Little Rock, AR → Memphis, TN",
            "Little Rock, AR → Atlanta, GA",
            "Little Rock, AR → Kansas City, MO",
            "Little Rock, AR → Orlando, FL"
        ],
        "faqs": [
            {
                "q": "How long does it take to ship a car to/from Little Rock?",
                "a": "Typically 2–5 days for most regional routes, depending on carrier availability and exact pickup/drop-off addresses."
            },
            {
                "q": "Is Little Rock easy to schedule pickup in?",
                "a": "Yes — its interstate access makes it one of the easier Arkansas cities for open-carrier scheduling."
            }
        ]
    },
    {
        "slug": "fayetteville-ar",
        "city_name": "Fayetteville",
        "state_abbr": "AR",
        "state_name": "Arkansas",
        "title": "Fayetteville Car Shipping | Auto Transport Quotes — Neon Auto Transport",
        "desc": "Reliable car shipping to and from Fayetteville, AR. Serving the Northwest Arkansas region with door-to-door auto transport and free instant quotes.",
        "h1": "Fayetteville Car Shipping",
        "intro": "Fayetteville anchors the fast-growing Northwest Arkansas (NWA) region, home to the University of Arkansas and just minutes from Springdale, Rogers, and Bentonville. The area’s rapid population growth — driven by corporate headquarters, healthcare expansion, and the university — has made it one of the busiest car shipping corridors in the state.",
        "context": "Because NWA functions as one interconnected metro, carriers often combine Fayetteville pickups with stops in neighboring cities, which can help keep quotes competitive even though Fayetteville itself isn’t directly on a major interstate.",
        "reasons": "incoming/outgoing university students, corporate relocations tied to the region’s major employers, and new residents drawn by NWA’s growth.",
        "routes": [
            "Fayetteville, AR → Dallas, TX",
            "Fayetteville, AR → Chicago, IL",
            "Fayetteville, AR → Denver, CO",
            "Fayetteville, AR → Nashville, TN",
            "Fayetteville, AR → St. Louis, MO"
        ],
        "faqs": [
            {
                "q": "Does Fayetteville’s location affect pricing?",
                "a": "Being off the main interstate can mean a slightly longer positioning drive for carriers, but NWA’s high shipping volume generally offsets this."
            },
            {
                "q": "Can you ship to a University of Arkansas address?",
                "a": "Yes — we regularly coordinate campus-adjacent pickups and drop-offs for students and families."
            }
        ]
    },
    {
        "slug": "fort-smith-ar",
        "city_name": "Fort Smith",
        "state_abbr": "AR",
        "state_name": "Arkansas",
        "title": "Fort Smith Car Shipping | Auto Transport Quotes — Neon Auto Transport",
        "desc": "Ship your vehicle to or from Fort Smith, AR with trusted, insured carriers. Door-to-door auto transport and free quotes from Neon Auto Transport.",
        "h1": "Fort Smith Car Shipping",
        "intro": "Sitting on the Arkansas–Oklahoma border along I-40, Fort Smith is a historic river city and one of the state’s key western gateways. Its interstate position makes it a natural stop for carriers running east-west routes between Oklahoma City, Tulsa, and Memphis, which generally helps keep transit times and pricing reasonable.",
        "context": "Fort Smith's strong manufacturing base and geographic position means there is a consistent flow of both commercial and residential vehicle transport in and out of the area.",
        "reasons": "relocations tied to the area’s manufacturing and logistics employers, military and Fort Chaffee-related moves, and cross-border moves to/from Oklahoma.",
        "routes": [
            "Fort Smith, AR → Oklahoma City, OK",
            "Fort Smith, AR → Tulsa, OK",
            "Fort Smith, AR → Memphis, TN",
            "Fort Smith, AR → Dallas, TX",
            "Fort Smith, AR → Kansas City, MO"
        ],
        "faqs": [
            {
                "q": "Is Fort Smith a quick pickup city for carriers?",
                "a": "Yes — its position on I-40 means it’s frequently on existing carrier routes, which helps with both speed and cost."
            },
            {
                "q": "Do you ship vehicles across the Oklahoma border from Fort Smith?",
                "a": "Yes, cross-border regional moves are some of our most common Fort Smith routes."
            }
        ]
    },
    {
        "slug": "springdale-ar",
        "city_name": "Springdale",
        "state_abbr": "AR",
        "state_name": "Arkansas",
        "title": "Springdale Car Shipping | Auto Transport Quotes — Neon Auto Transport",
        "desc": "Auto transport to and from Springdale, AR made easy. Get a free quote for door-to-door car shipping with Neon Auto Transport.",
        "h1": "Springdale Car Shipping",
        "intro": "Springdale is one of the core cities of the Northwest Arkansas metro and home to major employers in food processing and logistics. Its proximity to Fayetteville, Rogers, and Bentonville means it benefits from the same steady flow of carrier traffic that runs through the broader NWA corridor.",
        "context": "The interconnected nature of Northwest Arkansas allows carriers to efficiently load and unload multiple vehicles in the Springdale area, ensuring reliable pickup windows.",
        "reasons": "workforce relocations tied to the area’s large employers, family moves within the growing NWA region, and vehicle purchases from regional dealerships.",
        "routes": [
            "Springdale, AR → Dallas, TX",
            "Springdale, AR → Chicago, IL",
            "Springdale, AR → Houston, TX",
            "Springdale, AR → Nashville, TN",
            "Springdale, AR → Phoenix, AZ"
        ],
        "faqs": [
            {
                "q": "Is Springdale shipping similar in cost to Fayetteville?",
                "a": "Very close — since both cities sit in the same NWA cluster, carriers typically quote them similarly."
            },
            {
                "q": "Can you coordinate a Springdale pickup on short notice?",
                "a": "In most cases yes, given the frequency of carrier activity through the NWA region."
            }
        ]
    },
    {
        "slug": "jonesboro-ar",
        "city_name": "Jonesboro",
        "state_abbr": "AR",
        "state_name": "Arkansas",
        "title": "Jonesboro Car Shipping | Auto Transport Quotes — Neon Auto Transport",
        "desc": "Ship a car to or from Jonesboro, AR with Neon Auto Transport. Licensed and insured carriers, door-to-door delivery, and free quotes.",
        "h1": "Jonesboro Car Shipping",
        "intro": "Jonesboro is the largest city in northeast Arkansas and home to Arkansas State University, serving as a regional hub for the surrounding agricultural communities. It’s a bit further from the interstate network than cities like Little Rock or Fort Smith, so scheduling sometimes takes a little more lead time — but Neon Auto Transport works regularly with carriers who service the Jonesboro area.",
        "context": "While not directly on a major coast-to-coast interstate, Jonesboro's status as a regional economic center ensures consistent carrier access, especially for routes heading toward Memphis or St. Louis.",
        "reasons": "university student moves, agricultural and manufacturing sector relocations, and family vehicle transfers across the Mid-South.",
        "routes": [
            "Jonesboro, AR → Memphis, TN",
            "Jonesboro, AR → St. Louis, MO",
            "Jonesboro, AR → Nashville, TN",
            "Jonesboro, AR → Little Rock, AR",
            "Jonesboro, AR → Dallas, TX"
        ],
        "faqs": [
            {
                "q": "Does Jonesboro take longer to schedule than other Arkansas cities?",
                "a": "It can, since it’s off the main interstate corridors — booking a few extra days ahead helps secure a carrier."
            },
            {
                "q": "Do you ship to Arkansas State University addresses?",
                "a": "Yes, we regularly handle student and family shipments in and around the ASU campus."
            }
        ]
    }
]

base_dir = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\routes\city"
os.makedirs(base_dir, exist_ok=True)

for city in cities_data:
    html = template_html
    
    html = html.replace("Dallas Car Shipping | Reliable Auto Transport in TX", city['title'])
    html = html.replace("Looking for Dallas car shipping? Neon Auto Transport provides reliable, fully insured auto transport in Dallas, TX with fast, free quotes.", city['desc'])
    
    html = html.replace("https://neonautotransport.com/texas-car-shipping/dallas/", f"https://neonautotransport.com/routes/city/{city['slug']}/")
    
    html = html.replace("Dallas Car Shipping", city['h1'])
    old_intro = "Neon Auto Transport provides reliable, fully insured car shipping services in Dallas, TX. Whether you’re relocating, buying a car from out of state, or sending a vehicle to family, our network of vetted carriers ensures your vehicle arrives safely and on time."
    html = html.replace(old_intro, city['intro'])
    
    html = html.replace("Texas", city['state_name'])
    html = html.replace('href="/texas-car-shipping/"', 'href="/arkansas-car-shipping/"')
    html = html.replace("Dallas", city['city_name'])
    
    html = html.replace("Why Dallas Auto Transport Works Differently", f"Why {city['city_name']} Auto Transport Works Differently")
    old_context = "Dallas is a major logistical hub, heavily connected via I-35, I-20, and I-30. This makes it highly accessible for auto transport carriers, generally leading to faster pickup times and more competitive rates compared to more rural areas."
    html = html.replace(old_context, city['context'])
    
    html = html.replace("Popular reasons customers ship to/from Dallas include corporate relocations to the DFW Metroplex, purchasing vehicles from the large local dealer network, and seasonal moves to warmer climates.", f"Popular reasons customers ship to/from {city['city_name']}: {city['reasons']}")
    
    soup = BeautifulSoup(html, 'html.parser')
    routes_ul = soup.find('ul', class_='list-disc')
    if routes_ul:
        routes_ul.clear()
        for r in city['routes']:
            li = soup.new_tag('li')
            li.string = r
            routes_ul.append(li)
        html = str(soup)

    soup = BeautifulSoup(html, 'html.parser')
    faq_section = soup.find('div', class_='space-y-4')
    if faq_section:
        faq_section.clear()
        for i, faq in enumerate(city['faqs']):
            details_html = f"""
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
            faq_section.append(BeautifulSoup(details_html, 'html.parser'))
        html = str(soup)

    soup = BeautifulSoup(html, 'html.parser')
    scripts = soup.find_all('script', type='application/ld+json')
    for script in scripts:
        if 'FAQPage' in script.string:
            new_schema = {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": []
            }
            for faq in city['faqs']:
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
            
    for script in scripts:
        if 'BreadcrumbList' in script.string:
            b_data = json.loads(script.string)
            if 'itemListElement' in b_data:
                b_data['itemListElement'][1]['name'] = city['state_name']
                b_data['itemListElement'][1]['item'] = "https://neonautotransport.com/arkansas-car-shipping/"
                b_data['itemListElement'][2]['name'] = city['city_name']
                b_data['itemListElement'][2]['item'] = f"https://neonautotransport.com/routes/city/{city['slug']}/"
            script.string = json.dumps(b_data, indent=2)
            break

    html = str(soup)

    # Save to both .html file and extensionless file (if we want) or index.html if it's a dir
    # For now, let's just write the .html file, which is all we strictly need.
    html_file = os.path.join(base_dir, f"{city['slug']}.html")
    with open(html_file, "w", encoding="utf-8") as f:
        f.write(html)
        
    # Check if a directory exists for this slug, if so write index.html. 
    # If a file exists with the exact slug (extensionless), write to it.
    no_ext_file = os.path.join(base_dir, city['slug'])
    if os.path.isdir(no_ext_file):
        with open(os.path.join(no_ext_file, "index.html"), "w", encoding="utf-8") as f:
            f.write(html)
    elif os.path.isfile(no_ext_file):
        with open(no_ext_file, "w", encoding="utf-8") as f:
            f.write(html)

print("All 5 Arkansas city pages generated successfully!")
