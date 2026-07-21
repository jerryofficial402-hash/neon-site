import os
import json
import re
from bs4 import BeautifulSoup

dallas_template_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\texas-car-shipping\dallas\index.html"
output_dir = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping-cities"

with open(dallas_template_path, "r", encoding="utf-8") as f:
    template_html = f.read()

# Hub info
hub_meta_title = "New York State Auto Transport | Car Shipping Costs"
hub_meta_desc = "New York state auto transport for NYC, Buffalo, Rochester, Syracuse, Albany, Yonkers, White Plains & Hempstead. Compare NY car shipping costs. Free quote."
hub_h1 = "New York State Auto Transport: City Guides, Routes & Costs"
hub_p1 = "New York state auto transport covers more ground — and more logistical variety — than almost any other state in the country. Dense, parkway-restricted New York City sits at one end of the spectrum; wide-open, Thruway-connected Upstate cities like Buffalo, Rochester, Syracuse, and Albany sit at the other; and Westchester and Long Island communities like Yonkers, White Plains, and Hempstead fall somewhere in between. NY car shipping costs reflect that range: a same-day in-city move might run under $300, while a cross-country haul to California can run $1,600 or more."
hub_p2 = "Interstate car shipping New York routes generally follow one of three patterns: the I-95/I-87 corridor connecting NYC, Westchester, and New England; the I-90 Thruway connecting Buffalo, Rochester, Syracuse, and Albany across the width of the state; and long-haul cross-country routes departing from any of these hubs toward the Midwest, Southeast, or West Coast. Best car shippers in New York are licensed and insured through the FMCSA, work transparently as either carriers or brokers, and provide a signed Bill of Lading at both pickup and delivery — the same standard that applies everywhere else in the country, though New York door to door car shipping specifically depends heavily on which part of the state you’re in, since parkway restrictions affect NYC, Westchester, and Long Island in ways that simply don’t apply Upstate."

cities = [
    {
        "id": "new-york-city",
        "name": "New York City",
        "h1": "Car Shipping NYC: Auto Transport for Manhattan, Brooklyn, Queens, the Bronx & Staten Island",
        "body_paragraphs": [
            "Car shipping NYC works differently than almost anywhere else in the country, because the city itself wasn’t built for an 80-foot carrier rig.",
            "New York’s parkway system — the Belt Parkway, the Grand Central Parkway, the Henry Hudson Parkway, the FDR Drive — bans commercial trucks outright, with some overpasses as low as 6’11”. That means auto transport New York City drivers route on legal truck corridors instead: the BQE (I-278) through Brooklyn and Queens, the LIE (I-495) and Van Wyck (I-678) toward JFK, the Cross Bronx Expressway (I-95) and Major Deegan (I-87) through the Bronx, and the Staten Island Expressway (I-278) connecting to the Verrazzano-Narrows Bridge and the Goethals Bridge into New Jersey.",
            "If you need to ship car from Manhattan, expect to meet your driver at a nearby staging point rather than your exact curb — narrow one-way streets, tight turns, and constant double-parking make true door-to-door delivery impossible on most blocks. Brooklyn car hauling services and Queens auto shipping generally have more flexibility, since parts of both boroughs sit directly on legal truck routes, though residential side streets still often require a short walk to a wider staging block. Bronx vehicle transport follows the same pattern along the Major Deegan and Cross Bronx corridors. Staten Island car shipping cost tends to run slightly lower than the rest of the city for regional routes, since the borough connects directly to New Jersey via the Goethals Bridge without needing to cross back through Manhattan traffic."
        ],
        "why_ship_bullets": [
            "Five boroughs, one shared logistics reality: commercial trucks are banned from parkways citywide, so pickup locations depend on which legal truck corridor is nearest to you",
            "NYC open carrier car shipping is the standard, most affordable option and what the vast majority of NYC shipments use",
            "Enclosed auto transport NYC is worth considering for luxury or classic vehicles given road salt, winter grime, and general city wear",
            "Direct interstate access to the entire Northeast corridor and beyond via I-95, I-87, and I-78"
        ],
        "routes": [
            {"dest": "Philadelphia, PA", "dist": "95 mi", "price": "$300 – $420", "transit": "Same day–1 day"},
            {"dest": "Boston, MA", "dist": "215 mi", "price": "$330 – $460", "transit": "1 day"},
            {"dest": "Washington, DC", "dist": "225 mi", "price": "$330 – $470", "transit": "1 day"},
            {"dest": "Buffalo, NY", "dist": "370 mi", "price": "$380 – $520", "transit": "1–2 days"},
            {"dest": "Miami, FL", "dist": "1,280 mi", "price": "$700 – $900", "transit": "3–5 days"},
            {"dest": "Los Angeles, CA", "dist": "2,790 mi", "price": "$1,300 – $1,600", "transit": "7–10 days"}
        ],
        "faqs": [
            {"q": "Why can’t a carrier pick up directly at my Manhattan address?", "a": "New York’s parkway system prohibits commercial trucks, and most residential streets are too narrow for an 80-foot rig to safely turn or park on. Drivers typically arrange a nearby staging point in a wider commercial area or just outside the densest parts of the city."},
            {"q": "How much does car shipping cost from NYC?", "a": "Regional Northeast routes run $300–$470, Southeast and Midwest routes run $500–$900, and cross-country West Coast routes run $1,150–$1,600 on an open carrier."},
            {"q": "Is Staten Island car shipping cheaper than Manhattan or Brooklyn?", "a": "Often slightly, yes — Staten Island connects directly to New Jersey via the Goethals Bridge, which can mean an easier, shorter route for a carrier compared to navigating deeper into the city."}
        ]
    },
    {
        "id": "buffalo",
        "name": "Buffalo",
        "h1": "Car Shipping Buffalo, NY: Rates, Routes & Timelines",
        "body_paragraphs": [
            "Buffalo sits at the junction of I-90 (the New York State Thruway) and I-190 (the Niagara Thruway), giving it strong east-west access across the state and a direct northbound route to the Canadian border at the Peace Bridge, one of the busiest crossings in the Niagara region. That combination makes Buffalo auto transport companies well-practiced at both domestic and cross-border logistics — a genuine point of difference from most inland New York cities.",
            "Vehicle hauling Buffalo covers the full metro, and the city’s position as a Western New York hub means it connects efficiently south toward Pennsylvania and east across the Thruway toward Albany and the rest of the state. A common route we run is when someone wants to ship a car from Buffalo to Florida — typically tied to retirees and seasonal residents — which runs south along I-90 and down through the Appalachians and Southeast on a well-traveled corridor.",
            "Winter weather is the defining seasonal factor for Buffalo. Lake-effect snow off Lake Erie can produce sudden, heavy accumulation with little warning, and it’s worth building extra flexibility into a pickup window between November and March."
        ],
        "why_ship_bullets": [
            "I-90/I-190 junction gives Buffalo strong east-west access and a direct route to the Peace Bridge/Canada border",
            "Western New York auto transport hub — connects efficiently to Pennsylvania, the rest of New York State, and Ontario",
            "Steady seasonal demand for Florida-bound shipments from retirees and snowbirds",
            "Buffalo NY car shipping rates are generally competitive given the city’s position on two major thruways"
        ],
        "routes": [
            {"dest": "Rochester, NY", "dist": "75 mi", "price": "$300 – $400", "transit": "Same day–1 day"},
            {"dest": "Syracuse, NY", "dist": "150 mi", "price": "$320 – $440", "transit": "1 day"},
            {"dest": "New York City, NY", "dist": "370 mi", "price": "$380 – $520", "transit": "1–2 days"},
            {"dest": "Cleveland, OH", "dist": "195 mi", "price": "$330 – $460", "transit": "1 day"},
            {"dest": "Miami, FL", "dist": "1,400 mi", "price": "$760 – $960", "transit": "4–5 days"},
            {"dest": "Toronto, ON (Canada)", "dist": "100 mi", "price": "$350 – $480", "transit": "1 day"}
        ],
        "faqs": [
            {"q": "How much does car shipping cost from Buffalo, NY?", "a": "Buffalo NY car shipping rates typically run $300–$520 for in-state and regional Great Lakes routes, and $650–$960 for cross-country or Southeast/Florida routes."},
            {"q": "How long does it take to ship a car from Buffalo to Florida?", "a": "The Buffalo-to-Florida corridor typically takes 4–5 days on a well-traveled I-90/I-95 route, and it’s busiest during snowbird season in fall and spring."},
            {"q": "Does winter weather affect Buffalo car shipping?", "a": "Yes — lake-effect snow off Lake Erie can bring sudden, heavy accumulation between November and March, so building extra flexibility into your pickup window during those months is a smart precaution."}
        ]
    },
    {
        "id": "rochester",
        "name": "Rochester",
        "h1": "Rochester, NY Car Shipping: Rates, Routes & Timelines",
        "body_paragraphs": [
            "Rochester sits on I-90 (the Thruway) with I-490 running directly through the metro, giving auto transport Rochester NY carriers efficient access east toward Syracuse and Albany, and west toward Buffalo and the rest of the Great Lakes region. The city’s position on Lake Ontario also puts it at the center of the Finger Lakes region, which drives steady seasonal relocation and vacation-property vehicle shipments in the warmer months.",
            "Rochester’s economy — long anchored by imaging and optics companies and now home to a growing tech and biomedical sector tied to the University of Rochester and Rochester Institute of Technology — creates a steady base of professional and student relocation demand. When people search to ship car from Rochester, it’s most often tied to a job relocation, a university move, or a seasonal Finger Lakes property."
        ],
        "why_ship_bullets": [
            "I-90/I-490 access connects Rochester efficiently across the Great Lakes region and the rest of New York State",
            "Home to the University of Rochester and Rochester Institute of Technology — steady student and academic relocation demand",
            "Finger Lakes region proximity drives seasonal vehicle shipping tied to vacation properties",
            "Rochester vehicle hauling covers the full metro with reliable regional connections"
        ],
        "routes": [
            {"dest": "Buffalo, NY", "dist": "75 mi", "price": "$300 – $400", "transit": "Same day–1 day"},
            {"dest": "Syracuse, NY", "dist": "90 mi", "price": "$310 – $410", "transit": "1 day"},
            {"dest": "Albany, NY", "dist": "200 mi", "price": "$340 – $450", "transit": "1 day"},
            {"dest": "New York City, NY", "dist": "335 mi", "price": "$370 – $500", "transit": "1–2 days"},
            {"dest": "Chicago, IL", "dist": "605 mi", "price": "$470 – $620", "transit": "2 days"},
            {"dest": "Atlanta, GA", "dist": "950 mi", "price": "$610 – $790", "transit": "3 days"}
        ],
        "faqs": [
            {"q": "What does best car shipping Rochester NY typically cost?", "a": "Rochester NY car shipping runs $300–$500 for in-state and regional Northeast routes, and $470–$790+ for Midwest and Southeast cross-country hauls."},
            {"q": "How long does it take to ship a car from Rochester?", "a": "Regional routes within New York State typically ship within a day; Midwest routes take about 2 days, and Southeast routes run around 3 days."},
            {"q": "Does Rochester’s winter weather affect shipping schedules?", "a": "Yes, similar to Buffalo — lake-effect snow off Lake Ontario can affect scheduling from late fall through early spring, so a flexible pickup window helps during those months."}
        ]
    },
    {
        "id": "syracuse",
        "name": "Syracuse",
        "h1": "Syracuse, NY Car Shipping: Rates, Routes & Timelines",
        "body_paragraphs": [
            "Syracuse sits at the crossing of I-81 and I-90, making it the geographic center of Central NY car hauling and a natural connecting point between the North Country, the Southern Tier, and the rest of the Thruway system. One current, genuinely local factor worth knowing about: Syracuse is in the middle of the I-81 Viaduct Project, a multi-year Community Grid initiative replacing the elevated downtown highway with a street-level roadway. Phase two construction is active through 2026, so if you’re arranging pickup or delivery near downtown Syracuse, expect some detours and shifting traffic patterns — carriers serving the area are accustomed to routing around the active work zones.",
            "Auto transport Syracuse demand is driven heavily by Syracuse University and the surrounding hospital and medical corridor on University Hill, which creates predictable seasonal spikes around the academic calendar. When people search to ship car from Syracuse NY, it’s frequently tied to a semester move, a hospital or healthcare relocation, or a job change in the broader Central New York corridor."
        ],
        "why_ship_bullets": [
            "I-81/I-90 junction puts Syracuse at the center of Central New York’s carrier network",
            "Home to Syracuse University and a major regional hospital/medical corridor — steady student and professional relocation demand",
            "Aware of active I-81 Community Grid construction and downtown detours through 2026",
            "Central NY car hauling connects efficiently to Rochester, Albany, and the Southern Tier"
        ],
        "routes": [
            {"dest": "Rochester, NY", "dist": "90 mi", "price": "$310 – $410", "transit": "1 day"},
            {"dest": "Albany, NY", "dist": "145 mi", "price": "$320 – $430", "transit": "1 day"},
            {"dest": "New York City, NY", "dist": "250 mi", "price": "$350 – $470", "transit": "1 day"},
            {"dest": "Buffalo, NY", "dist": "150 mi", "price": "$320 – $440", "transit": "1 day"},
            {"dest": "Boston, MA", "dist": "320 mi", "price": "$370 – $500", "transit": "1–2 days"},
            {"dest": "Chicago, IL", "dist": "570 mi", "price": "$460 – $610", "transit": "2 days"}
        ],
        "faqs": [
            {"q": "What are typical Syracuse vehicle shipping prices?", "a": "Syracuse vehicle shipping prices run $310–$500 for in-state and Northeast regional routes, and $460–$610+ for Midwest cross-country hauls."},
            {"q": "Does the I-81 construction project affect car shipping in Syracuse?", "a": "It can affect exact pickup and delivery logistics downtown, since Phase Two of the Community Grid project is actively under construction through 2026. Carriers serving Syracuse are used to routing around the affected area, but confirming your exact pickup point in advance is worth doing if you’re near downtown."},
            {"q": "How long does it take to ship a car from Syracuse to New York City?", "a": "Typically about a day, given the well-traveled I-90 corridor connecting Central New York to the city."}
        ]
    },
    {
        "id": "albany",
        "name": "Albany",
        "h1": "Car Shipping Albany, NY: Rates, Routes & Timelines",
        "body_paragraphs": [
            "As New York’s state capital, Albany sits at the junction of I-87 (the Northway/Thruway) and I-90, giving Albany auto transport services strong connections north toward the Adirondacks and Canada, west across the Thruway toward Syracuse and Buffalo, and south toward New York City and the Hudson Valley. That interstate access, combined with Albany’s role as the seat of state government, creates a steady, distinctive kind of demand: state employees, legislative staff, and government contractors relocating in and out of the Capital Region on a predictable annual cycle tied to the legislative session and state budget calendar.",
            "Albany NY car shipping quotes also reflect a growing share of tech-sector relocation tied to the Capital Region’s semiconductor and nanotechnology corridor, which has brought a steady wave of engineers and researchers into the area over the past several years. A common long-haul request we see is to ship car from Albany to California, usually tied to a tech-industry move between the two coasts."
        ],
        "why_ship_bullets": [
            "I-87/I-90 junction connects Albany efficiently north, west, and south across the entire state",
            "State capital status drives predictable relocation demand tied to the legislative and budget calendar",
            "Growing tech and semiconductor sector relocation into the Capital Region",
            "Vehicle hauling Albany NY covers the full Capital Region, including Schenectady and Troy"
        ],
        "routes": [
            {"dest": "New York City, NY", "dist": "150 mi", "price": "$320 – $430", "transit": "1 day"},
            {"dest": "Syracuse, NY", "dist": "145 mi", "price": "$320 – $430", "transit": "1 day"},
            {"dest": "Boston, MA", "dist": "165 mi", "price": "$330 – $440", "transit": "1 day"},
            {"dest": "Buffalo, NY", "dist": "285 mi", "price": "$360 – $490", "transit": "1 day"},
            {"dest": "Washington, DC", "dist": "370 mi", "price": "$390 – $530", "transit": "1–2 days"},
            {"dest": "Los Angeles, CA", "dist": "2,760 mi", "price": "$1,280 – $1,580", "transit": "7–10 days"}
        ],
        "faqs": [
            {"q": "What are typical Albany NY car shipping quotes?", "a": "Albany NY car shipping quotes typically run $320–$530 for Northeast regional routes and $1,150–$1,600 for cross-country West Coast routes on an open carrier."},
            {"q": "How much does it cost to ship a car from Albany to California?", "a": "This long-haul route typically runs $1,150–$1,600 and takes 7–10 days, similar in pricing structure to a New York City-to-California shipment given the comparable distance."},
            {"q": "Is there a busy season for Albany car shipping?", "a": "Yes — relocation demand tends to spike around the state legislative session’s start and end dates, alongside the more typical spring and summer relocation season seen statewide."}
        ]
    },
    {
        "id": "yonkers",
        "name": "Yonkers",
        "h1": "Car Shipping Yonkers, NY: Rates, Routes & Timelines",
        "body_paragraphs": [
            "Yonkers sits directly on New York City’s northern border in Westchester County, connected by I-87 (the Major Deegan Expressway continues north as the Thruway here) and the Saw Mill River Parkway. That second detail matters for car shipping: the Saw Mill, like many roads carrying the “parkway” name in this region, restricts commercial vehicles, so Yonkers auto transport carriers route along I-87 and I-95 rather than the more scenic parkway routes locals typically drive.",
            "Being immediately adjacent to the Bronx means Yonkers car shipping shares a lot of its logistics pattern with New York City proper — carriers already running the Major Deegan corridor for Bronx and Manhattan deliveries can often add a Yonkers stop with minimal detour, which keeps pricing and scheduling competitive for a city its size."
        ],
        "why_ship_bullets": [
            "Direct I-87 access puts Yonkers on the same carrier corridor serving the Bronx and Manhattan",
            "Commercial vehicles are restricted from the Saw Mill River Parkway, so carriers use I-87/I-95 instead",
            "Close enough to NYC to benefit from the city’s carrier density without its parking and street-width challenges",
            "Yonkers auto transport typically sees more true door-to-door service than deep into Manhattan"
        ],
        "routes": [
            {"dest": "New York City, NY", "dist": "18 mi", "price": "$290 – $400", "transit": "Same day"},
            {"dest": "White Plains, NY", "dist": "8 mi", "price": "$290 – $390", "transit": "Same day"},
            {"dest": "Albany, NY", "dist": "140 mi", "price": "$320 – $430", "transit": "1 day"},
            {"dest": "Boston, MA", "dist": "210 mi", "price": "$330 – $460", "transit": "1 day"},
            {"dest": "Miami, FL", "dist": "1,285 mi", "price": "$700 – $900", "transit": "3–5 days"}
        ],
        "faqs": [
            {"q": "How much does car shipping cost from Yonkers, NY?", "a": "Car shipping Yonkers NY typically runs $290–$460 for regional Northeast routes and $700–$900+ for Southeast and Florida shipments."},
            {"q": "Can I get true door-to-door service in Yonkers?", "a": "Usually, yes — Yonkers’ street grid and highway access are far less restrictive than deep Manhattan, so most addresses can get a direct pickup or delivery rather than needing a staging point."},
            {"q": "Why can’t my carrier use the Saw Mill River Parkway?", "a": "Like most New York roads carrying the “parkway” designation, the Saw Mill restricts commercial vehicles. Carriers route via I-87 or I-95 instead, which adds little to no time for most Yonkers addresses."}
        ]
    },
    {
        "id": "white-plains",
        "name": "White Plains",
        "h1": "White Plains, NY Car Shipping: Rates, Routes & Timelines",
        "body_paragraphs": [
            "White Plains is the seat of Westchester County and one of the region’s biggest corporate employment centers, home to a concentration of company headquarters and regional offices that drives steady corporate and executive relocation demand. I-287 (the Cross Westchester Expressway) runs directly through the city, connecting White Plains east-west across the county and linking efficiently to I-95 and I-87 for trips into New York City or north toward Albany.",
            "Westchester County auto hauling in general benefits from this well-connected highway network, and White Plains car shipping in particular sees a mix of corporate relocations, university-adjacent moves, and typical suburban household shipments — a broader demand base than a lot of similarly-sized cities. When someone needs to ship vehicle White Plains NY on a tight corporate relocation timeline, expedited scheduling is usually available given how much carrier traffic already passes through the I-287/I-95 corridor."
        ],
        "why_ship_bullets": [
            "I-287 (Cross Westchester Expressway) gives White Plains strong east-west access across the county",
            "Concentration of corporate headquarters drives steady executive and employee relocation demand",
            "Well-connected to both NYC (south via I-95/I-87) and the rest of the Hudson Valley (north)",
            "Westchester County auto hauling here typically supports true door-to-door service"
        ],
        "routes": [
            {"dest": "Yonkers, NY", "dist": "8 mi", "price": "$290 – $390", "transit": "Same day"},
            {"dest": "New York City, NY", "dist": "30 mi", "price": "$300 – $410", "transit": "Same day–1 day"},
            {"dest": "Albany, NY", "dist": "130 mi", "price": "$320 – $430", "transit": "1 day"},
            {"dest": "Boston, MA", "dist": "200 mi", "price": "$330 – $450", "transit": "1 day"},
            {"dest": "Chicago, IL", "dist": "780 mi", "price": "$550 – $710", "transit": "2–3 days"}
        ],
        "faqs": [
            {"q": "How much does White Plains car shipping cost?", "a": "White Plains car shipping typically runs $290–$450 for regional Northeast routes and $550–$900+ for Midwest and Southeast cross-country hauls."},
            {"q": "Does White Plains see a lot of corporate relocation shipments?", "a": "Yes — the concentration of company headquarters and regional offices in White Plains creates steady demand for corporate and executive vehicle relocation, often on tighter timelines than typical household moves."},
            {"q": "Is White Plains easier to schedule than NYC?", "a": "Generally, yes. White Plains has wider streets and direct highway access via I-287, so true door-to-door service is far more common here than in the denser parts of New York City."}
        ]
    },
    {
        "id": "hempstead",
        "name": "Hempstead",
        "h1": "Car Shipping Hempstead, NY: Rates, Routes & Timelines",
        "body_paragraphs": [
            "Hempstead is the largest town in Nassau County and one of the anchor communities for Long Island auto transport, sitting close to both the Long Island Expressway (I-495) and the Southern State Parkway. As with the rest of the New York City region, the Southern State — like most Long Island parkways — restricts commercial vehicles, so carriers serving Hempstead vehicle hauling services route via the LIE or local state roads instead.",
            "Hempstead’s location also puts it within easy reach of JFK Airport, which keeps a steady baseline of logistics and carrier traffic moving through the area regardless of season. Nassau County car shipping overall benefits from this — carriers already running Long Island routes for other freight can typically add a Hempstead pickup or delivery without much added distance, keeping pricing competitive for the borough’s size."
        ],
        "why_ship_bullets": [
            "Close to the LIE (I-495) and JFK Airport, keeping carrier traffic and availability steady",
            "Southern State Parkway restricts commercial vehicles, so carriers route via the LIE instead — same pattern as NYC’s parkway system",
            "Nassau County car shipping benefits from Hempstead’s central Long Island location",
            "Home to Hofstra University, adding steady student relocation demand alongside typical household moves"
        ],
        "routes": [
            {"dest": "New York City, NY", "dist": "25 mi", "price": "$300 – $410", "transit": "Same day–1 day"},
            {"dest": "Yonkers, NY", "dist": "35 mi", "price": "$310 – $420", "transit": "Same day–1 day"},
            {"dest": "Boston, MA", "dist": "235 mi", "price": "$340 – $470", "transit": "1 day"},
            {"dest": "Philadelphia, PA", "dist": "115 mi", "price": "$310 – $430", "transit": "1 day"},
            {"dest": "Miami, FL", "dist": "1,300 mi", "price": "$710 – $910", "transit": "3–5 days"}
        ],
        "faqs": [
            {"q": "How much does it cost to ship a car from Hempstead?", "a": "Car shipping Hempstead NY typically runs $300–$470 for regional Northeast routes and $710–$910+ for Southeast and Florida shipments."},
            {"q": "Why can’t a carrier use the Southern State Parkway to reach Hempstead?", "a": "Like most Long Island parkways, the Southern State restricts commercial vehicles. Carriers use the Long Island Expressway (I-495) or local roads instead, which adds little time for most Hempstead addresses."},
            {"q": "Does being near JFK Airport affect Hempstead car shipping?", "a": "It helps, generally — the steady logistics and carrier traffic already moving through the area near JFK keeps availability strong and pricing competitive for Nassau County shipments."}
        ]
    }
]

soup = BeautifulSoup(template_html, "html.parser")

# Update Head
soup.title.string = hub_meta_title
soup.find("meta", {"name": "description"})["content"] = hub_meta_desc
soup.find("link", {"rel": "canonical"})["href"] = "https://neonautotransport.com/new-york-car-shipping-cities/"
soup.find("meta", {"property": "og:url"})["content"] = "https://neonautotransport.com/new-york-car-shipping-cities/"
soup.find("meta", {"property": "og:title"})["content"] = hub_meta_title
soup.find("meta", {"property": "og:description"})["content"] = hub_meta_desc
soup.find("meta", {"name": "twitter:title"})["content"] = hub_meta_title
soup.find("meta", {"name": "twitter:description"})["content"] = hub_meta_desc

# Compile FAQ Schema
all_faqs = []
for c in cities:
    for f in c["faqs"]:
        all_faqs.append({
            "@type": "Question",
            "name": f["q"],
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f["a"]
            }
        })

# Compile Area Served array
areas_served = [
    {"@type": "City", "name": "New York City, NY"},
    {"@type": "City", "name": "Buffalo, NY"},
    {"@type": "City", "name": "Rochester, NY"},
    {"@type": "City", "name": "Syracuse, NY"},
    {"@type": "City", "name": "Albany, NY"},
    {"@type": "City", "name": "Yonkers, NY"},
    {"@type": "City", "name": "White Plains, NY"},
    {"@type": "City", "name": "Hempstead, NY"}
]

# Update JSON-LD Schemas
scripts = soup.find_all("script", type="application/ld+json")
for script in scripts:
    try:
        data = json.loads(script.string)
        if data.get("@type") == "Service":
            data["name"] = "New York State Auto Transport"
            data["description"] = hub_meta_desc
            data["url"] = "https://neonautotransport.com/new-york-car-shipping-cities/"
            data["areaServed"] = areas_served
            script.string = json.dumps(data, indent=2)
        
        elif data.get("@type") == "BreadcrumbList":
            # Just shorten it to match
            data["itemListElement"] = [
                {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://neonautotransport.com/"},
                {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://neonautotransport.com/locations/"},
                {"@type": "ListItem", "position": 3, "name": "New York Cities", "item": "https://neonautotransport.com/new-york-car-shipping-cities/"}
            ]
            script.string = json.dumps(data, indent=2)
            
        elif data.get("@type") == "FAQPage":
            data["mainEntity"] = all_faqs
            script.string = json.dumps(data, indent=2)
    except Exception:
        continue

# Update Hero Section
h1_tag = soup.find("main").find("div", class_=lambda x: x and "text-4xl" in x and "md:text-5xl" in x)
if not h1_tag:
    h1_tag = soup.find("h1")
if h1_tag:
    h1_tag.name = "h1"
    h1_tag.string = hub_h1
    h1_p = h1_tag.find_next_sibling("p")
    if h1_p:
        h1_p.string = hub_p1
        new_p = soup.new_tag("p", attrs={"class": "text-lg text-[#425466] mb-10 leading-relaxed"})
        new_p.append(BeautifulSoup(hub_p2, "html.parser"))
        h1_p.insert_after(new_p)

img_tag = soup.find("img", {"alt": lambda x: x and "Dallas" in x})
if img_tag:
    img_tag["src"] = "/images/neon-auto-transport-new-york-car-shipping-cities.jpg"
    img_tag["alt"] = "Neon Auto Transport serving New York State"

# Find the main container section and clear out the old Dallas content
content_section = soup.find("section", class_=lambda x: x and "container" in x and "mx-auto" in x and "max-w-6xl" in x)

if content_section:
    content_section.clear()

    # Now we loop through all 8 cities and append them as blocks
    for city in cities:
        city_div = soup.new_tag("div", attrs={"class": "mb-20 pb-16 border-b border-[#e6e6e6] last:border-0"})
        
        # H2
        h2 = soup.new_tag("h2", attrs={"class": "text-4xl font-black text-[#0a2540] mb-6 tracking-tight"})
        h2.string = city["h1"]
        city_div.append(h2)

        # Body Paras
        for p_text in city["body_paragraphs"]:
            p = soup.new_tag("p", attrs={"class": "text-lg text-[#425466] mb-6 leading-relaxed"})
            p.append(BeautifulSoup(p_text, "html.parser"))
            city_div.append(p)
            
        # Why Ship H3
        why_div = soup.new_tag("div", attrs={"class": "mb-10 mt-10"})
        why_h3 = soup.new_tag("h3", attrs={"class": "text-3xl font-bold mb-4 text-[#0a2540] tracking-tight"})
        why_h3.string = f"Why Ship a Car in {city['name']}"
        why_ul = soup.new_tag("ul", attrs={"class": "list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg"})
        for bullet in city["why_ship_bullets"]:
            li = soup.new_tag("li")
            li.append(BeautifulSoup(bullet, "html.parser"))
            why_ul.append(li)
        why_div.append(why_h3)
        why_div.append(why_ul)
        city_div.append(why_div)

        # Routes Table
        routes_div = soup.new_tag("div", attrs={"class": "mb-12"})
        routes_h3 = soup.new_tag("h3", attrs={"class": "text-2xl font-bold mb-4 text-[#0a2540] tracking-tight"})
        routes_h3.string = f"Popular Routes from {city['name']}"
        
        table_html = f"""
        <div class="overflow-x-auto mt-4 bg-white rounded-xl shadow-sm border border-[#e6e6e6]">
            <table class="w-full text-left border-collapse min-w-[700px]">
                <thead class="bg-[#468de6] text-white text-[12px] font-bold uppercase tracking-wider">
                    <tr>
                        <th class="py-5 px-6">Destination</th>
                        <th class="py-5 px-6 text-center">Distance</th>
                        <th class="py-5 px-6 text-center">Estimated Price (Open)</th>
                        <th class="py-5 px-6 text-center">Estimated Transit</th>
                    </tr>
                </thead>
                <tbody class="text-[15px]">
        """
        for r in city["routes"]:
            table_html += f"""
            <tr class="border-b border-[#e6e6e6] hover:bg-[#f8fafc]">
                <td class="py-4 px-6 font-bold text-[#0a2540]">{r['dest']}</td>
                <td class="py-4 px-6 text-center">{r['dist']}</td>
                <td class="py-4 px-6 text-center">{r['price']}</td>
                <td class="py-4 px-6 text-center">{r['transit']}</td>
            </tr>
            """
        table_html += "</tbody></table></div>"
        
        routes_div.append(routes_h3)
        routes_div.append(BeautifulSoup(table_html, "html.parser"))
        city_div.append(routes_div)

        # FAQs
        faq_div = soup.new_tag("div", attrs={"class": "mb-8"})
        faq_h3 = soup.new_tag("h3", attrs={"class": "text-3xl font-bold mb-4 text-[#0a2540] tracking-tight"})
        faq_h3.string = f"{city['name']} Car Shipping FAQ"
        faq_div.append(faq_h3)
        
        for faq in city["faqs"]:
            faq_html = f"""
            <div class="mt-6 border-b border-[#e6e6e6] pb-6 last:border-0">
                <h4 class="text-xl font-bold text-[#0a2540]">{faq['q']}</h4>
                <p class="mt-2 text-[#425466] leading-relaxed">{faq['a']}</p>
            </div>
            """
            faq_div.append(BeautifulSoup(faq_html, "html.parser"))
            
        city_div.append(faq_div)
        
        content_section.append(city_div)

# Save the file
os.makedirs(output_dir, exist_ok=True)
with open(os.path.join(output_dir, "index.html"), "w", encoding="utf-8") as f:
    f.write(str(soup))

print("Mega page generated successfully.")
