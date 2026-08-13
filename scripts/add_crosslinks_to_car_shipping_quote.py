import os

HOME_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\index.html"
CALC_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\cost-calculator\index.html"

# 1. Add link in Cost Calculator popular routes or footer list
with open(CALC_FILE, "r", encoding="utf-8") as f:
    calc_content = f.read()

if '/car-shipping-quote/' not in calc_content:
    calc_content = calc_content.replace(
        '<li><a href="/why-neon/"',
        '<li><a href="/car-shipping-quote/" style="color: #cbd5e1; text-decoration: none; display: flex; align-items: center; gap: 0.35rem;"><span style="color: #ffc72c; font-weight: 700;">&gt;</span> Free Car Shipping Quote</a></li>\n      <li><a href="/why-neon/"'
    )
    with open(CALC_FILE, "w", encoding="utf-8") as f:
        f.write(calc_content)
    print("SUCCESS: Added cross-link to /car-shipping-quote/ in cost-calculator footer!")

# 2. Add link in Homepage footer or popular options
with open(HOME_FILE, "r", encoding="utf-8") as f:
    home_content = f.read()

if '/car-shipping-quote/' not in home_content:
    home_content = home_content.replace(
        '<li><a href="/why-neon/"',
        '<li><a href="/car-shipping-quote/">Free Car Shipping Quote</a></li>\n            <li><a href="/why-neon/"'
    )
    with open(HOME_FILE, "w", encoding="utf-8") as f:
        f.write(home_content)
    print("SUCCESS: Added cross-link to /car-shipping-quote/ on homepage!")
