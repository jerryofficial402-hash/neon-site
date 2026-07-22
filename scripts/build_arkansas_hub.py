import os
from bs4 import BeautifulSoup
import re

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\arkansas-car-shipping-cities\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# Simple text replacements for the header, title, description, etc.
html = html.replace('New York Cities', 'Arkansas Cities')
html = html.replace('New York City', 'Little Rock')  # Just to fix some leftover
html = html.replace('New York', 'Arkansas')
html = html.replace('NY', 'AR')
html = html.replace('new-york', 'arkansas')
html = html.replace('Arkansas State Guide', 'Arkansas Car Shipping Guide')

# We need to replace the grid of cities. Let's parse with beautifulsoup to find the grid container
soup = BeautifulSoup(html, 'html.parser')

# Find the H2 that says "Explore Arkansas Auto Transport by City"
h2 = soup.find('h2', string=lambda s: s and 'Explore' in s and 'City' in s)
if h2:
    grid = h2.find_next_sibling('div', class_='grid')
    if grid:
        grid.clear()
        # Add the 5 new cities
        cities = [
            {
                "name": "Little Rock",
                "slug": "little-rock-ar",
                "desc": "As Arkansas’s capital and largest city, Little Rock sits at the crossroads of I-30, I-40, and I-630, making it one of the most connected auto transport hubs in the state."
            },
            {
                "name": "Fayetteville",
                "slug": "fayetteville-ar",
                "desc": "Fayetteville anchors the fast-growing Northwest Arkansas (NWA) region, home to the University of Arkansas and a major hub for corporate relocations."
            },
            {
                "name": "Fort Smith",
                "slug": "fort-smith-ar",
                "desc": "Sitting on the Arkansas–Oklahoma border along I-40, Fort Smith is a historic river city and a key western gateway for auto transport carriers."
            },
            {
                "name": "Springdale",
                "slug": "springdale-ar",
                "desc": "Springdale is one of the core cities of the Northwest Arkansas metro and benefits from the steady flow of carrier traffic through the NWA corridor."
            },
            {
                "name": "Jonesboro",
                "slug": "jonesboro-ar",
                "desc": "Jonesboro is the largest city in northeast Arkansas and home to Arkansas State University, serving as a regional hub for the surrounding communities."
            }
        ]
        
        for city in cities:
            card_html = f"""
            <div class="stripe-card p-8 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col h-full border border-transparent hover:border-[#468de6] transition group">
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-full bg-[#f0f5fa] text-[#468de6] flex items-center justify-center group-hover:bg-[#468de6] group-hover:text-white transition">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <h3 class="text-2xl font-bold text-[#0a2540]">{city['name']}</h3>
                    </div>
                    <p class="text-[#425466] leading-relaxed mb-8">{city['desc']}</p>
                </div>
                <div class="pt-6 border-t border-[#e6e6e6]">
                    <a href="/routes/city/{city['slug']}/" class="text-[#635bff] font-bold hover:text-[#0a2540] transition flex items-center gap-2 group-hover:gap-3">
                        View {city['name']} Shipping Rates
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                </div>
            </div>
            """
            card_soup = BeautifulSoup(card_html, 'html.parser')
            grid.append(card_soup)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))
