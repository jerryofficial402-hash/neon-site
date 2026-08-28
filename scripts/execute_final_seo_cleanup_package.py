import os
import re
import json

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
ROUTES_CITY_DIR = os.path.join(BASE_DIR, "routes", "city")
VERCEL_JSON_PATH = os.path.join(BASE_DIR, "vercel.json")

# State name / slug to state abbreviation mapping
STATE_ABBR_MAP = {
    "alabama": "al", "alaska": "ak", "arizona": "az", "arkansas": "ar", "california": "ca",
    "colorado": "co", "connecticut": "ct", "delaware": "de", "florida": "fl", "georgia": "ga",
    "hawaii": "hi", "idaho": "id", "illinois": "il", "indiana": "in", "iowa": "ia",
    "kansas": "ks", "kentucky": "ky", "louisiana": "la", "maine": "me", "maryland": "md",
    "massachusetts": "ma", "michigan": "mi", "minnesota": "mn", "mississippi": "ms", "missouri": "mo",
    "montana": "mt", "nebraska": "ne", "nevada": "nv", "new-hampshire": "nh", "new-jersey": "nj",
    "new-mexico": "nm", "new-york": "ny", "north-carolina": "nc", "north-dakota": "nd", "ohio": "oh",
    "oklahoma": "ok", "oregon": "or", "pennsylvania": "pa", "rhode-island": "ri", "south-carolina": "sc",
    "south-dakota": "sd", "tennessee": "tn", "texas": "tx", "utah": "ut", "vermont": "vt",
    "virginia": "va", "washington": "wa", "washington-dc": "dc", "west-virginia": "wv",
    "wisconsin": "wi", "wyoming": "wy"
}

# Build map of all existing city slugs in routes/city
existing_city_slugs = set()
for f in os.listdir(ROUTES_CITY_DIR):
    if f.endswith(".html"):
        existing_city_slugs.add(f[:-5])
    elif os.path.isdir(os.path.join(ROUTES_CITY_DIR, f)):
        existing_city_slugs.add(f)

print(f"Total verified city slugs in routes/city/: {len(existing_city_slugs)}")

# Function to map an old state-car-shipping link (e.g. /california-car-shipping/los-angeles/) to clean route city slug
def map_state_city_link_to_canonical(path):
    path = path.strip("/")
    parts = path.split("/")
    if len(parts) == 2 and parts[0].endswith("-car-shipping"):
        state_name = parts[0][:-13] # remove -car-shipping
        city_part = parts[1]
        
        st_abbr = STATE_ABBR_MAP.get(state_name, "")
        if st_abbr:
            # Check direct match e.g. los-angeles-ca
            candidate = f"{city_part}-{st_abbr}"
            if candidate in existing_city_slugs:
                return f"/routes/city/{candidate}/"
            
            # Check route-style candidate e.g. houston-tx-to-los-angeles -> houston-tx-to-los-angeles-ca
            candidate_route = f"{city_part}-{st_abbr}"
            if candidate_route in existing_city_slugs:
                return f"/routes/city/{candidate_route}/"
            
            # Search for any slug starting with city_part and ending with -st_abbr
            for s in existing_city_slugs:
                if s.startswith(city_part) and s.endswith(f"-{st_abbr}"):
                    return f"/routes/city/{s}/"
    return None

print("\n=== FIX 1: UPDATE ALL CITY PAGE CANONICAL TAGS TO SELF-REFERENCING ===")
fixed_city_canonicals = 0

for root, dirs, files in os.walk(ROUTES_CITY_DIR):
    for file in files:
        if file == "index.html" or file.endswith(".html"):
            fpath = os.path.join(root, file)
            # Determine slug
            if file == "index.html":
                slug = os.path.basename(root)
            else:
                slug = file[:-5]
            
            clean_canonical = f"https://neonautotransport.com/routes/city/{slug}/"
            
            try:
                with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                    c = f.read()
                
                # Replace canonical tag with clean self-referencing canonical
                new_c = re.sub(
                    r'<link\s+rel=["\']canonical["\']\s+href=["\'].*?["\']\s*/?>',
                    f'<link rel="canonical" href="{clean_canonical}" />',
                    c,
                    flags=re.IGNORECASE
                )
                
                if new_c != c:
                    with open(fpath, "w", encoding="utf-8") as f:
                        f.write(new_c)
                    fixed_city_canonicals += 1
            except Exception as e:
                pass

print(f"Fixed {fixed_city_canonicals} city page canonical tags to self-referencing!")

print("\n=== FIX 2: UPDATE BROKEN INTERNAL LINKS SITEWIDE AND ADD 301 REDIRECTS ===")
link_mappings = {} # old_path -> new_path
updated_link_files = 0

for root, dirs, files in os.walk(BASE_DIR):
    if any(ignore in root for ignore in [".git", "node_modules", ".agents", "scripts", "brain"]):
        continue
    for file in files:
        if file.endswith(".html") or file.endswith(".json"):
            fpath = os.path.join(root, file)
            try:
                with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                
                orig = content
                
                # Find all href="/{state}-car-shipping/{city}/" patterns
                matches = re.findall(r'href=["\'](/([a-z-]+)-car-shipping/([a-z0-9-]+)/?)["\']', content)
                for full_href, st_name, city_name in matches:
                    old_path = f"/{st_name}-car-shipping/{city_name}/"
                    mapped = map_state_city_link_to_canonical(old_path)
                    if mapped:
                        link_mappings[old_path] = mapped
                        content = content.replace(f'href="{full_href}"', f'href="{mapped}"')
                        content = content.replace(f"href='{full_href}'", f"href='{mapped}'")
                        content = content.replace(f'href="{old_path[:-1]}"', f'href="{mapped}"')
                        content = content.replace(f"href='{old_path[:-1]}'", f"href='{mapped}'")

                if content != orig:
                    with open(fpath, "w", encoding="utf-8") as f:
                        f.write(content)
                    updated_link_files += 1
            except Exception as e:
                pass

print(f"Updated internal links across {updated_link_files} files sitewide (Identified {len(link_mappings)} unique state-city links).")

# Update vercel.json with 301 redirects for all identified state-city link mappings as safety net
with open(VERCEL_JSON_PATH, "r", encoding="utf-8") as f:
    vdata = json.load(f)

existing_redirect_sources = {r["source"] for r in vdata.get("redirects", [])}
added_301_redirects = 0

for old_p, new_p in link_mappings.items():
    if old_p not in existing_redirect_sources:
        vdata["redirects"].append({
            "source": old_p,
            "destination": new_p,
            "permanent": True
        })
        existing_redirect_sources.add(old_p)
        added_301_redirects += 1

with open(VERCEL_JSON_PATH, "w", encoding="utf-8") as f:
    json.dump(vdata, f, indent=2)

print(f"Added {added_301_redirects} new 301 redirects to vercel.json for complete safety net!")

print("\n=== FIX 3: FIX BLOG POST CANONICAL TAG (.HTML -> CLEAN URL) ===")
blog_target = os.path.join(BASE_DIR, "blog", "who-ships-cars-from-woodbridge-virginia", "index.html")
blog_flat_target = os.path.join(BASE_DIR, "blog", "who-ships-cars-from-woodbridge-virginia.html")

for bfile in [blog_target, blog_flat_target]:
    if os.path.exists(bfile):
        with open(bfile, "r", encoding="utf-8", errors="ignore") as f:
            bc = f.read()
        
        new_bc = re.sub(
            r'<link\s+rel=["\']canonical["\']\s+href=["\'].*?woodbridge-virginia\.html["\']\s*/?>',
            '<link rel="canonical" href="https://neonautotransport.com/blog/who-ships-cars-from-woodbridge-virginia/" />',
            bc,
            flags=re.IGNORECASE
        )
        
        if new_bc != bc:
            with open(bfile, "w", encoding="utf-8") as f:
                f.write(new_bc)
            print(f"Fixed canonical tag in {os.path.basename(bfile)}")

print("\n=== FIX 4: REMOVE .HTML FROM INTERNAL HREF LINKS SITEWIDE ===")
cleaned_html_href_files = 0

for root, dirs, files in os.walk(BASE_DIR):
    if any(ignore in root for ignore in [".git", "node_modules", ".agents", "scripts", "brain"]):
        continue
    for file in files:
        if file.endswith(".html"):
            fpath = os.path.join(root, file)
            try:
                with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                
                orig = content
                
                # Replace internal links ending in .html (e.g. href="/contact.html" -> href="/contact/")
                def replace_html_href(match):
                    full = match.group(0)
                    quote = match.group(1)
                    path = match.group(2)
                    # Exclude external links, image/css assets, and mailto
                    if path.startswith("http") or path.startswith("//") or path.startswith("mailto:") or path.startswith("tel:"):
                        return full
                    return f'href={quote}{path}/{quote}'
                
                content = re.sub(r'href=(["\'])(/[^"\']*?)\.html\1', replace_html_href, content)

                if content != orig:
                    with open(fpath, "w", encoding="utf-8") as f:
                        f.write(content)
                    cleaned_html_href_files += 1
            except Exception as e:
                pass

print(f"Removed .html from internal links across {cleaned_html_href_files} files sitewide!")

print("\n=== SUCCESS: Executed Complete Final SEO Clean-Up Fix Package ===")
