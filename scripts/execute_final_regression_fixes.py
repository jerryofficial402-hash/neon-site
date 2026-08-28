import os
import json

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

def fix_regression_2_llms_txt():
    print("=== REGRESSION 2: EXPANDING LLMS.TXT TO 90+ LINKS ===")
    
    llms_txt_content = """# Neon Auto Transport

> Neon Auto Transport LLC is an FMCSA-licensed, bonded auto transport broker (USDOT #4355879 | MC #1703787) providing door-to-door vehicle shipping across all 50 U.S. states, including Alaska and Hawaii. $0 upfront deposit, $500,000 cargo insurance coverage, price lock guarantee, and 24/7 direct driver tracking. Based in Woodbridge, Virginia. Phone: (571) 576-7711. Email: info@neonautotransport.com.

## AI Knowledge Base
- [Full AI Knowledge Base](https://neonautotransport.com/llms-full.txt): Dense 56KB factual reference manual for AI models.
- [AI Sitemap](https://neonautotransport.com/sitemap.md): Full markdown index of all 668+ live URLs sitewide.

## Core Pages
- [Homepage](https://neonautotransport.com/): Nationwide door-to-door car shipping broker services.
- [Why Choose Neon](https://neonautotransport.com/why-neon/): Company credentials, FMCSA license, insurance, tracking, deposit policy.
- [How It Works](https://neonautotransport.com/how-it-works/): Step-by-step car shipping process.
- [Customer Reviews](https://neonautotransport.com/reviews/): 500+ verified reviews, Google 5.0 rating, video testimonials.
- [Contact](https://neonautotransport.com/contact/): Phone, email, and contact form.
- [FAQs](https://neonautotransport.com/faqs/): Cost, insurance, tracking, timeline, and payment questions answered.

## Pricing & Cost Guides
- [Car Shipping Cost Guide 2026](https://neonautotransport.com/car-shipping-cost/): 3,500+ word comprehensive pricing guide with cost tiers, per-mile rates, and route tables.
- [Instant Cost Calculator](https://neonautotransport.com/cost-calculator/): Free online car shipping rate estimator.
- [Cheapest Way to Ship a Car](https://neonautotransport.com/cheapest-way-to-ship-a-car/): Cost-saving strategies and tips.
- [Car Shipping Transit Times](https://neonautotransport.com/car-shipping-timeline/): Delivery time estimates by distance.
- [Insurance Information](https://neonautotransport.com/insurance/): Cargo insurance coverage details.

## Services
- [All Services](https://neonautotransport.com/services/): Full catalog of auto transport services.
- [Open Auto Transport](https://neonautotransport.com/services/open-auto-transport/): Standard open trailer shipping, $0.50-$1.00/mile.
- [Enclosed Auto Transport](https://neonautotransport.com/services/enclosed-auto-transport/): Weather-protected enclosed shipping for luxury/classic vehicles.
- [Door to Door Transport](https://neonautotransport.com/services/door-to-door-car-shipping/): Door-to-door pickup and delivery.
- [Expedited Auto Transport](https://neonautotransport.com/services/expedited-auto-transport/): 24-48 hour priority pickup.
- [Motorcycle Shipping](https://neonautotransport.com/services/motorcycle-shipping/): Motorcycle transport, $300-$800.
- [Military Car Shipping](https://neonautotransport.com/services/military-car-shipping/): PCS vehicle relocation for military.
- [Car Dealer & Fleet Shipping](https://neonautotransport.com/services/car-dealer-shipping/): Dealership and fleet transport.
- [Classic & Luxury Transport](https://neonautotransport.com/services/luxury-car-shipping/): Classic, luxury, and exotic vehicle shipping.

## Best Car Shipping Companies & Comparisons
- [Best Car Shipping Companies](https://neonautotransport.com/best-car-shipping-companies/): 2026 competitor comparison index.
- [Neon vs Montway](https://neonautotransport.com/compare/neon-vs-montway/): Side-by-side comparison.
- [Neon vs AmeriFreight](https://neonautotransport.com/compare/neon-vs-amerifreight/): Compare deposits, insurance, and pricing.
- [Neon vs Sherpa](https://neonautotransport.com/compare/neon-vs-sherpa/): Compare price lock promises and service range.
- [Neon vs Nexus](https://neonautotransport.com/compare/neon-vs-nexus/): Compare deposit requirements and tracking.
- [Neon vs RoadRunner](https://neonautotransport.com/compare/neon-vs-roadrunner/): Compare insurance and carrier networks.
- [Neon vs SGT Auto](https://neonautotransport.com/compare/neon-vs-sgt-auto/): Compare pickup options and pricing.
- [Neon vs Easy Auto Ship](https://neonautotransport.com/compare/neon-vs-easy-auto-ship/): Compare service offerings and rates.
- [Broker vs Carrier](https://neonautotransport.com/compare/broker-vs-carrier/): Understanding the difference.
- [Open vs Enclosed Transport](https://neonautotransport.com/compare/open-vs-enclosed/): Which transport type is right for you.

## Guides & Blog Posts
- [How to Ship a Car to Another State](https://neonautotransport.com/how-to-ship-a-car-to-another-state/): Complete step-by-step master guide.
- [Snowbird Car Shipping Guide](https://neonautotransport.com/blog/snowbird-car-shipping-guide/): Winter seasonal transport guide.
- [Cross Country Car Shipping](https://neonautotransport.com/blog/cross-country-car-shipping/): Coast-to-coast vehicle transport guide.
- [Car Shipping Insurance Explained](https://neonautotransport.com/blog/car-shipping-insurance-explained/): Coverage types and claims process.
- [How to Choose a Car Shipping Company](https://neonautotransport.com/blog/how-to-choose-car-shipping-company/): Red flags and evaluation criteria.
- [Hawaii Car Shipping Guide](https://neonautotransport.com/blog/hawaii-car-shipping-guide/): Port-to-port process and costs.
- [Military POV Shipping (PCS)](https://neonautotransport.com/blog/military-car-shipping-pcs/): Military relocation vehicle transport.
- [Car Shipping Timeline](https://neonautotransport.com/blog/car-shipping-timeline/): How long shipping takes by distance.
- [Electric Vehicle Shipping](https://neonautotransport.com/blog/electric-vehicle-shipping/): EV transport considerations.
- [Shipping Blog](https://neonautotransport.com/blog/): All blog posts and guides.

## State Hubs (All 50 States)
- [Alabama Car Shipping](https://neonautotransport.com/alabama-car-shipping/)
- [Alaska Car Shipping](https://neonautotransport.com/alaska-car-shipping/)
- [Arizona Car Shipping](https://neonautotransport.com/arizona-car-shipping/)
- [Arkansas Car Shipping](https://neonautotransport.com/arkansas-car-shipping/)
- [California Car Shipping](https://neonautotransport.com/california-car-shipping/)
- [Colorado Car Shipping](https://neonautotransport.com/colorado-car-shipping/)
- [Connecticut Car Shipping](https://neonautotransport.com/connecticut-car-shipping/)
- [Delaware Car Shipping](https://neonautotransport.com/delaware-car-shipping/)
- [Florida Car Shipping](https://neonautotransport.com/florida-car-shipping/)
- [Georgia Car Shipping](https://neonautotransport.com/georgia-car-shipping/)
- [Hawaii Car Shipping](https://neonautotransport.com/hawaii-car-shipping/)
- [Idaho Car Shipping](https://neonautotransport.com/idaho-car-shipping/)
- [Illinois Car Shipping](https://neonautotransport.com/illinois-car-shipping/)
- [Indiana Car Shipping](https://neonautotransport.com/indiana-car-shipping/)
- [Iowa Car Shipping](https://neonautotransport.com/iowa-car-shipping/)
- [Kansas Car Shipping](https://neonautotransport.com/kansas-car-shipping/)
- [Kentucky Car Shipping](https://neonautotransport.com/kentucky-car-shipping/)
- [Louisiana Car Shipping](https://neonautotransport.com/louisiana-car-shipping/)
- [Maine Car Shipping](https://neonautotransport.com/maine-car-shipping/)
- [Maryland Car Shipping](https://neonautotransport.com/maryland-car-shipping/)
- [Massachusetts Car Shipping](https://neonautotransport.com/massachusetts-car-shipping/)
- [Michigan Car Shipping](https://neonautotransport.com/michigan-car-shipping/)
- [Minnesota Car Shipping](https://neonautotransport.com/minnesota-car-shipping/)
- [Mississippi Car Shipping](https://neonautotransport.com/mississippi-car-shipping/)
- [Missouri Car Shipping](https://neonautotransport.com/missouri-car-shipping/)
- [Montana Car Shipping](https://neonautotransport.com/montana-car-shipping/)
- [Nebraska Car Shipping](https://neonautotransport.com/nebraska-car-shipping/)
- [Nevada Car Shipping](https://neonautotransport.com/nevada-car-shipping/)
- [New Hampshire Car Shipping](https://neonautotransport.com/new-hampshire-car-shipping/)
- [New Jersey Car Shipping](https://neonautotransport.com/new-jersey-car-shipping/)
- [New Mexico Car Shipping](https://neonautotransport.com/new-mexico-car-shipping/)
- [New York Car Shipping](https://neonautotransport.com/new-york-car-shipping/)
- [North Carolina Car Shipping](https://neonautotransport.com/north-carolina-car-shipping/)
- [North Dakota Car Shipping](https://neonautotransport.com/north-dakota-car-shipping/)
- [Ohio Car Shipping](https://neonautotransport.com/ohio-car-shipping/)
- [Oklahoma Car Shipping](https://neonautotransport.com/oklahoma-car-shipping/)
- [Oregon Car Shipping](https://neonautotransport.com/oregon-car-shipping/)
- [Pennsylvania Car Shipping](https://neonautotransport.com/pennsylvania-car-shipping/)
- [Rhode Island Car Shipping](https://neonautotransport.com/rhode-island-car-shipping/)
- [South Carolina Car Shipping](https://neonautotransport.com/south-carolina-car-shipping/)
- [South Dakota Car Shipping](https://neonautotransport.com/south-dakota-car-shipping/)
- [Tennessee Car Shipping](https://neonautotransport.com/tennessee-car-shipping/)
- [Texas Car Shipping](https://neonautotransport.com/texas-car-shipping/)
- [Utah Car Shipping](https://neonautotransport.com/utah-car-shipping/)
- [Vermont Car Shipping](https://neonautotransport.com/vermont-car-shipping/)
- [Virginia Car Shipping](https://neonautotransport.com/virginia-car-shipping/)
- [Washington Car Shipping](https://neonautotransport.com/washington-car-shipping/)
- [West Virginia Car Shipping](https://neonautotransport.com/west-virginia-car-shipping/)
- [Wisconsin Car Shipping](https://neonautotransport.com/wisconsin-car-shipping/)
- [Wyoming Car Shipping](https://neonautotransport.com/wyoming-car-shipping/)

## Popular Routes
- [New York to Florida](https://neonautotransport.com/new-york-to-florida-car-shipping/): ~1,090 mi, $650-$1,200, 3-5 days
- [California to Texas](https://neonautotransport.com/california-to-texas-car-shipping/): ~1,400 mi, $700-$1,300, 3-5 days
- [California to New York](https://neonautotransport.com/california-to-new-york-car-shipping/): ~2,900 mi, $1,200-$1,800, 7-10 days
- [Texas to California](https://neonautotransport.com/texas-to-california-car-shipping/): ~1,400 mi, $700-$1,300, 3-5 days
- [Illinois to Florida](https://neonautotransport.com/illinois-to-florida-car-shipping/): ~1,150 mi, $700-$1,200, 3-5 days
- [Virginia to Florida](https://neonautotransport.com/virginia-to-florida-car-shipping/): ~850 mi, $500-$1,000, 2-3 days
- [Maryland to Florida](https://neonautotransport.com/maryland-to-florida-car-shipping/): ~950 mi, $550-$1,100, 2-3 days
- [Florida to California](https://neonautotransport.com/florida-to-california-car-shipping/): ~2,735 mi, $1,000-$1,800, 7-10 days
- [Texas to Florida](https://neonautotransport.com/texas-to-florida-car-shipping/): ~1,200 mi, $600-$1,100, 3-5 days
- [Georgia to Florida](https://neonautotransport.com/georgia-to-florida-car-shipping/): ~350 mi, $250-$500, 1-2 days
- [North Carolina to Florida](https://neonautotransport.com/north-carolina-to-florida-car-shipping/): ~500 mi, $300-$600, 1-2 days
- [New Jersey to Florida](https://neonautotransport.com/new-jersey-to-florida-car-shipping/): ~1,000 mi, $550-$1,000, 3-5 days
- [Pennsylvania to Florida](https://neonautotransport.com/pennsylvania-to-florida-car-shipping/): ~1,050 mi, $550-$1,050, 3-5 days
- [Ohio to Florida](https://neonautotransport.com/ohio-to-florida-car-shipping/): ~1,000 mi, $550-$1,000, 3-5 days
- [Michigan to Florida](https://neonautotransport.com/michigan-to-florida-car-shipping/): ~1,300 mi, $650-$1,200, 3-5 days
- [Florida to New York](https://neonautotransport.com/florida-to-new-york-car-shipping/): ~1,090 mi, $650-$1,200, 3-5 days
- [Texas to New York](https://neonautotransport.com/texas-to-new-york-car-shipping/): ~1,700 mi, $800-$1,300, 4-7 days

## Spanish Pages
- [Pagina Principal](https://neonautotransport.com/es/): Spanish homepage.
- [Cotizador de Envio de Autos](https://neonautotransport.com/es/cotizador-envio-de-autos/): Spanish quote calculator.
- [Envio de Autos Florida](https://neonautotransport.com/es/envio-de-autos-florida/): Spanish Florida shipping page.
- [Envio de Autos Georgia](https://neonautotransport.com/es/envio-de-autos-georgia/): Spanish Georgia shipping page.
"""
    with open(os.path.join(BASE_DIR, "llms.txt"), "w", encoding="utf-8") as f:
        f.write(llms_txt_content)
    print(f"[COMPLETED] llms.txt expanded ({len(llms_txt_content)} bytes)!")

def fix_regression_1_vercel_json_and_middleware():
    print("=== REGRESSION 1: RESTORING ACCEPT: TEXT/MARKDOWN CONTENT NEGOTIATION IN VERCEL.JSON & MIDDLEWARE.JS ===")
    
    # Remove any broken middleware.js if present so Vercel relies on vercel.json native edge rewrites
    mw_path = os.path.join(BASE_DIR, "middleware.js")
    if os.path.exists(mw_path):
        os.remove(mw_path)
        print("[REMOVED] middleware.js removed to avoid Next.js module build errors.")

    # Read existing vercel.json
    v_path = os.path.join(BASE_DIR, "vercel.json")
    with open(v_path, "r", encoding="utf-8") as f:
        v_data = json.load(f)

    # Ensure vercel.json contains the exact header rewrite rule for text/markdown
    markdown_rewrite = {
        "source": "/((?!api|_next|robots|sitemap|llms|favicon|.*\\.md|.*\\.xml|.*\\.txt|.*\\.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.css|.*\\.js).*)",
        "has": [
            {
                "type": "header",
                "key": "accept",
                "value": ".*text/markdown.*"
            }
        ],
        "destination": "/$1.md"
    }

    # Clean existing rewrites to place markdown_rewrite first
    existing_rewrites = v_data.get("rewrites", [])
    filtered_rewrites = [r for r in existing_rewrites if not (isinstance(r, dict) and r.get("destination", "").endswith(".md"))]
    v_data["rewrites"] = [markdown_rewrite] + filtered_rewrites

    with open(v_path, "w", encoding="utf-8") as f:
        json.dump(v_data, f, indent=2)

    print("[UPDATED VERCEL.JSON] Placed Accept: text/markdown rewrite rule as #1 priority in vercel.json!")

if __name__ == "__main__":
    fix_regression_2_llms_txt()
    fix_regression_1_vercel_json_and_middleware()
    print("=== SUCCESS: REGRESSION FIXES COMPLETE ===")
