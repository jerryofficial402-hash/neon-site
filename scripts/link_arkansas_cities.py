import os
from bs4 import BeautifulSoup

file_path = r"c:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\arkansas-car-shipping\index.html"

with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

# Find the col-span-2 container
col_span_2 = soup.find('div', class_='lg:col-span-2')

if col_span_2:
    # Add a new block for the Cities Hub
    cities_block_html = """
    <div class="stripe-card p-8 lg:p-10 bg-[#f0f5fa] rounded-2xl border border-[#e6e6e6] mt-12 mb-12 flex items-center justify-between flex-wrap gap-6">
        <div>
            <h3 class="text-2xl font-bold text-[#0a2540] mb-2">Arkansas Car Shipping by City</h3>
            <p class="text-[#425466]">Explore our detailed local guides and routes for major Arkansas metros including Little Rock, Fayetteville, Fort Smith, and more.</p>
        </div>
        <a href="/arkansas-car-shipping-cities/" class="inline-flex items-center gap-2 px-6 py-3 bg-[#468de6] text-white font-bold rounded-xl hover:bg-[#3273c5] transition shadow-sm whitespace-nowrap">
            View All Arkansas Cities
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
    </div>
    """
    cities_soup = BeautifulSoup(cities_block_html, 'html.parser')
    
    # We want to insert this before the final FAQ section or at the very end of col_span_2
    col_span_2.append(cities_soup)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(str(soup))
