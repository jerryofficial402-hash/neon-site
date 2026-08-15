import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
INDEX_FILE = os.path.join(BASE_DIR, "index.html")

with open(INDEX_FILE, "r", encoding="utf-8") as f:
    content = f.read()

forbidden_terms = [
    "FMCSA Approved",
    "fully licensed, insured, and approved",
    "$500,000",
    "$500K",
    "Guaranteed Pick Up",
    "Guaranteed Pickup",
    "24/7 direct driver contact",
    "real-time tracking",
    "1–7 days",
    "1-7 days",
    "FMCSA permits 400",
    "permits 400-500",
    "divide your total route mileage",
    "divide route mileage by 500",
    "10K+",
    "10,000+",
    "$0 deposit",
    "$0 upfront deposit",
    "Trusted by thousands",
    "Thousands of Vehicles Shipped"
]

found_terms = []
for term in forbidden_terms:
    if term.lower() in content.lower():
        found_terms.append(term)

if found_terms:
    print(f"WARNING: Found forbidden terms in index.html: {found_terms}")
else:
    print("SUCCESS: Zero forbidden high-risk phrases found in index.html!")
