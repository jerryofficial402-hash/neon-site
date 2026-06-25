import os

state_routes = {
    "california": [
        {"name": "California to Florida", "url": "/california-to-florida-car-shipping/"},
        {"name": "California to New York", "url": "/california-to-new-york-car-shipping/"},
        {"name": "California to Texas", "url": "/california-to-texas-car-shipping/"}
    ],
    "florida": [
        {"name": "Florida to California", "url": "/florida-to-california-car-shipping/"},
        {"name": "Florida to New York", "url": "/florida-to-new-york-car-shipping/"}
    ],
    "georgia": [
        {"name": "Georgia to California", "url": "/georgia-to-california-car-shipping/"}
    ],
    "illinois": [
        {"name": "Illinois to Florida", "url": "/illinois-to-florida-car-shipping/"}
    ],
    "new-jersey": [
        {"name": "New Jersey to Florida", "url": "/new-jersey-to-florida-car-shipping/"}
    ],
    "new-york": [
        {"name": "New York to California", "url": "/new-york-to-california-car-shipping/"},
        {"name": "New York to Florida", "url": "/new-york-to-florida-car-shipping/"}
    ],
    "ohio": [
        {"name": "Ohio to Florida", "url": "/ohio-to-florida-car-shipping/"}
    ],
    "texas": [
        {"name": "Texas to California", "url": "/texas-to-california-car-shipping/"},
        {"name": "Texas to Florida", "url": "/texas-to-florida-car-shipping/"}
    ],
    "virginia": [
        {"name": "Virginia to Florida", "url": "/virginia-to-florida-car-shipping/"}
    ]
}

state_names_map = {
    "california": "California",
    "florida": "Florida",
    "georgia": "Georgia",
    "illinois": "Illinois",
    "new-jersey": "New Jersey",
    "new-york": "New York",
    "ohio": "Ohio",
    "texas": "Texas",
    "virginia": "Virginia"
}

def inject_state_routes():
    count = 0
    for state_slug, routes in state_routes.items():
        filepath = f"{state_slug}-car-shipping/index.html"
        if not os.path.exists(filepath):
            print(f"File not found: {filepath}")
            continue
            
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        if "Popular Interstate Routes from" in content:
            continue

        links_html = ""
        for route in routes:
            links_html += f'<a href="{route["url"]}" class="hover:text-[#0a2540] transition">{route["name"]}</a>\\n        '

        state_name = state_names_map[state_slug]

        routes_html = f"""
<!-- Popular Routes -->
<div class="stripe-card p-8 lg:p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl mb-12 border-t-4 border-t-[#39FF14]">
    <h2 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Popular Interstate Routes from {state_name}</h2>
    <p class="text-[#425466] mb-8 leading-relaxed">Planning an interstate move or buying a vehicle out of state? These are our most requested state-to-state car shipping routes originating from {state_name}.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-2 text-sm text-[#468de6] font-semibold">
        {links_html}
    </div>
</div>
"""

        if "<!-- FAQs -->" in content:
            content = content.replace("<!-- FAQs -->", routes_html + "\\n<!-- FAQs -->")
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            count += 1
            print(f"Injected routes into {filepath}")
        else:
            print(f"Could not find FAQs marker in {filepath}")

if __name__ == "__main__":
    inject_state_routes()
