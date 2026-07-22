import os
from bs4 import BeautifulSoup
import json

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\arkansas-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# 1. Fix Meta Description
desc = soup.find('meta', attrs={'name': 'description'})
if desc:
    desc['content'] = "Arkansas auto transport for Little Rock, Fayetteville, Fort Smith, Springdale, and Jonesboro. Compare AR car shipping costs and get a free quote."

# 2. Fix Title
title = soup.find('title')
if title:
    title.string = "Arkansas Car Shipping Cities | Auto Transport Quotes & Routes"

# 3. Fix H1
h1 = soup.find('h1')
if h1:
    h1.string = "Arkansas Car Shipping by City: Local Guides & Routes"

# 4. Fix Intro Paragraph (right below H1)
intro = soup.find('p', text=lambda t: t and 'Arkansas state auto transport covers more ground' in t)
if intro:
    intro.string = "Arkansas auto transport connects the fast-growing Northwest Arkansas corridor, the central hub of Little Rock, and key regional cities like Fort Smith and Jonesboro. From interstate highways to local routes, our carrier network covers every corner of the Natural State."

# 5. Fix the main body content (lg:col-span-2)
col_span_2 = soup.find('div', class_='lg:col-span-2')
if col_span_2:
    # We want to replace all the New York leftover text.
    # The New York text is inside p tags and h2/h3 tags before the H2 that says "Explore Arkansas Auto Transport by City"
    # Actually, earlier we appended the city cards grid.
    
    # Let's find the H2 that says "Explore Arkansas Auto Transport by City"
    explore_h2 = col_span_2.find('h2', text=lambda t: t and 'Explore' in t and 'City' in t)
    
    if explore_h2:
        # Everything before this H2 inside col_span_2 needs to be replaced.
        # It's easier to just rebuild col_span_2.
        
        new_content_html = """
        <div class="space-y-12 min-w-0">
            <p class="text-xl text-[#425466] mb-12 leading-relaxed font-medium">Arkansas car shipping costs and routes are largely determined by the state's major interstates: I-30 and I-40 cutting through Little Rock and Fort Smith, and the heavily trafficked I-49 corridor connecting the booming Northwest Arkansas region (Fayetteville, Springdale, Bentonville). Transporting a vehicle between these major hubs is fast and cost-effective, while routes extending to rural or off-interstate areas like Jonesboro may require a slight pricing adjustment and an extra day of scheduling lead time.</p>
            
            <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
                <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">The Northwest Arkansas (NWA) Shipping Corridor</h2>
                <p class="text-lg text-[#425466] mb-6 leading-relaxed">The NWA region—anchored by Fayetteville and Springdale—is one of the fastest-growing economic areas in the country. Driven by major corporate headquarters and the University of Arkansas, this area sees a massive volume of inbound and outbound auto transport. Because these cities function as one large interconnected metro area, carriers frequently combine pickups and deliveries here, resulting in highly competitive rates and flexible scheduling.</p>
                <p class="text-lg text-[#425466] mb-6 leading-relaxed">Whether you are relocating for a corporate role in Bentonville or shipping a car for a student at UofA in Fayetteville, open carrier transport is the standard and most efficient option. For high-value vehicles, enclosed transport is also readily available along the I-49 corridor.</p>
            </div>
            
            <div class="mb-20 pb-16 border-b border-[#e6e6e6] last:border-0">
                <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Central and Western Hubs: Little Rock & Fort Smith</h2>
                <p class="text-lg text-[#425466] mb-6 leading-relaxed">Little Rock is the geographical and logistical heart of Arkansas car shipping. Sitting directly at the junction of I-30, I-40, and I-630, the capital city is a mandatory waypoint for carriers traveling between Texas, the Midwest, and the East Coast. This central positioning ensures that Little Rock residents benefit from some of the fastest pickup windows in the state.</p>
                <p class="text-lg text-[#425466] mb-6 leading-relaxed">To the west, Fort Smith leverages its location on the Arkansas-Oklahoma border along I-40 to act as a crucial gateway. Carriers running east-west cross-country routes frequently stop in Fort Smith, making it highly accessible for both residential and commercial vehicle transport.</p>
                
                <div class="mb-10 mt-10">
                    <h3 class="text-3xl font-bold mb-4 text-[#0a2540] tracking-tight">Arkansas Car Shipping Considerations</h3>
                    <ul class="list-disc pl-5 mt-4 space-y-3 text-[#425466] text-lg">
                        <li><strong>Open Auto Transport:</strong> The standard, most affordable option for the vast majority of Arkansas routes.</li>
                        <li><strong>Enclosed Auto Transport:</strong> Recommended for classic cars, luxury vehicles, or anyone wanting maximum protection from weather.</li>
                        <li><strong>Interstate Connectivity:</strong> Proximity to I-40, I-30, and I-49 heavily influences both cost and carrier availability.</li>
                    </ul>
                </div>
            </div>
            
            <h2 class="text-4xl font-black text-[#0a2540] mb-6 tracking-tight">Explore Arkansas Auto Transport by City</h2>
            <div class="grid md:grid-cols-2 gap-6" id="city-cards-grid">
            </div>
        </div>
        """
        
        # Parse the new content
        new_content_soup = BeautifulSoup(new_content_html, 'html.parser')
        
        # We need to grab the city cards we generated earlier and put them in the new grid
        old_grid = col_span_2.find('div', class_='grid')
        if old_grid:
            cards = old_grid.find_all('div', class_='stripe-card')
            new_grid = new_content_soup.find(id='city-cards-grid')
            for card in cards:
                new_grid.append(card)
                
        # Now replace col_span_2's contents
        col_span_2.clear()
        # Append children of the new space-y-12 div
        for child in new_content_soup.find('div', class_='space-y-12').children:
            col_span_2.append(child)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))
