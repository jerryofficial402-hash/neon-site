import json
import re
from bs4 import BeautifulSoup

def update_page():
    file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\new-york-car-shipping\index.html"
    with open(file_path, "r", encoding="utf-8") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")

    # 1. Update FAQ JSON-LD
    scripts = soup.find_all("script", type="application/ld+json")
    for script in scripts:
        try:
            data = json.loads(script.string)
            if data.get("@type") == "FAQPage":
                data["mainEntity"] = [
                    {
                        "@type": "Question",
                        "name": "How much does it cost to ship a car from NYC?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ship a car from NYC pricing typically runs $300–$470 for regional Northeast and Mid-Atlantic routes, $500–$900 for the Southeast, Midwest, and Florida, and $1,150–$1,600 for cross-country West Coast routes on an open carrier."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is affordable vehicle shipping in NYC realistic given how dense the city is?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes — density affects where you meet your driver, not necessarily the price. Terminal or staging-area pickup in New Jersey, Long Island, or an outer borough is still standard, affordable open-carrier service; it’s true door-to-door delivery to a Manhattan curb that gets harder and occasionally pricier."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why can’t my car be picked up directly at my Manhattan address?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "New York’s parkway system bans commercial trucks outright, and most residential streets are too narrow for an 80-foot carrier rig to navigate or turn around on safely. Drivers typically arrange a nearby staging point instead — commonly in New Jersey, Long Island, or a wider commercial street in Queens or Brooklyn."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What’s the cost to ship a car from NYC to Florida?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The New York-to-Florida corridor typically runs $650–$900 on an open carrier and takes 3–5 days, making it one of the more affordable and well-traveled long-distance routes out of the city, especially during snowbird season in fall and spring."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What’s the difference between open and enclosed car transport in New York?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Open car carrier service is the standard, most affordable option and what the vast majority of vehicles ship on. Enclosed auto transport costs roughly 30–50% more and is the better choice for luxury or classic vehicles, given the added protection from road salt and winter grime."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to be present for pickup and delivery in New York?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes — you or an authorized representative needs to be present to sign the Bill of Lading at both pickup and delivery. In New York specifically, confirm your staging location in advance so you know exactly where to meet your driver."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I ship a car from New York to Canada?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Cross-border shipments to cities like Toronto or Montreal typically run north via I-87, and you’ll need to have your title, registration, and proof of ownership documents ready in advance for customs."
                        }
                    }
                ]
                script.string = json.dumps(data, indent=2)
                break
        except Exception:
            continue

    html = str(soup)

    # 2. Inject Internal Links
    replacements = {
        # General linking
        r"open car carrier new york service": r'<a href="/services/open-auto-transport/" class="text-[#635bff] hover:underline font-semibold">open car carrier new york service</a>',
        r"enclosed auto transport nyc": r'<a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline font-semibold">enclosed auto transport nyc</a>',
        r"car shipping quotes new york estimate": r'<a href="/cost-calculator/" class="text-[#635bff] hover:underline font-semibold">car shipping quotes new york estimate</a>',
        r"cross-border shipments to Toronto or Montreal": r'<a href="/services/international-overseas-car-shipping-services/" class="text-[#635bff] hover:underline font-semibold">cross-border shipments to Toronto or Montreal</a>',
        
        # Sources
        r"FMCSA’s public SAFER System": r'<a href="https://safer.fmcsa.dot.gov/" target="_blank" rel="noopener" class="text-[#635bff] hover:underline font-semibold">FMCSA’s public SAFER System</a>',
        r"New York DMV": r'<a href="https://dmv.ny.gov/" target="_blank" rel="noopener" class="text-[#635bff] hover:underline font-semibold">New York DMV</a>',
        r"New York’s parkway system bans commercial vehicles outright": r'<a href="https://www.nyc.gov/html/dot/html/motorist/truckrouting.shtml" target="_blank" rel="noopener" class="text-[#635bff] hover:underline font-semibold">New York’s parkway system bans commercial vehicles outright</a>',
        
        # Additional contextual link for 'how car shipping works' since we don't have that exact phrase
        r"how the city’s geography changes the process": r'<a href="/how-to-ship-a-car-to-another-state/" class="text-[#635bff] hover:underline font-semibold">how the city’s geography changes the process</a>'
    }

    for search_str, replacement_str in replacements.items():
        # Only replace the first occurrence to avoid over-linking
        html = html.replace(search_str, replacement_str, 1)

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(html)

if __name__ == "__main__":
    update_page()
    print("SEO updates applied successfully.")
