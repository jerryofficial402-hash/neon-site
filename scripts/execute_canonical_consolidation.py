import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
ROUTES_CITY_DIR = os.path.join(SITE_DIR, "routes", "city")

STATE_NAMES = {
    'al': 'alabama', 'ak': 'alaska', 'az': 'arizona', 'ar': 'arkansas', 'ca': 'california',
    'co': 'colorado', 'ct': 'connecticut', 'de': 'delaware', 'fl': 'florida', 'ga': 'georgia',
    'hi': 'hawaii', 'id': 'idaho', 'il': 'illinois', 'in': 'indiana', 'ia': 'iowa',
    'ks': 'kansas', 'ky': 'kentucky', 'la': 'louisiana', 'me': 'maine', 'md': 'maryland',
    'ma': 'massachusetts', 'mi': 'michigan', 'mn': 'minnesota', 'ms': 'mississippi', 'mo': 'missouri',
    'mt': 'montana', 'ne': 'nebraska', 'nv': 'nevada', 'nh': 'new-hampshire', 'nj': 'new-jersey',
    'nm': 'new-mexico', 'ny': 'new-york', 'nc': 'north-carolina', 'nd': 'north-dakota', 'oh': 'ohio',
    'ok': 'oklahoma', 'or': 'oregon', 'pa': 'pennsylvania', 'ri': 'rhode-island', 'sc': 'south-carolina',
    'sd': 'south-dakota', 'tn': 'tennessee', 'tx': 'texas', 'ut': 'utah', 'vt': 'vermont',
    'va': 'virginia', 'wa': 'washington', 'wv': 'west-virginia', 'wi': 'wisconsin', 'wy': 'wyoming'
}

canonical_updated = 0
canonical_pattern = re.compile(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', re.I)

if os.path.exists(ROUTES_CITY_DIR):
    for f in os.listdir(ROUTES_CITY_DIR):
        file_path = os.path.join(ROUTES_CITY_DIR, f)
        if os.path.isfile(file_path) and not f.endswith(".png") and not f.endswith(".jpg"):
            city_slug = f.replace(".html", "")
            parts = city_slug.split("-")
            state_code = parts[-1].lower() if len(parts) > 1 else ""
            
            if state_code in STATE_NAMES:
                state_slug = STATE_NAMES[state_code]
                city_name_slug = "-".join(parts[:-1])
                target_canonical = f"https://neonautotransport.com/{state_slug}-car-shipping/{city_name_slug}/"

                with open(file_path, "r", encoding="utf-8", errors="ignore") as file_in:
                    html = file_in.read()

                c_match = canonical_pattern.search(html)
                if c_match:
                    curr_canonical = c_match.group(1)
                    if curr_canonical != target_canonical:
                        html = canonical_pattern.sub(f'<link rel="canonical" href="{target_canonical}">', html)
                        with open(file_path, "w", encoding="utf-8") as file_out:
                            file_out.write(html)
                        canonical_updated += 1
                else:
                    if "</head>" in html:
                        html = html.replace("</head>", f'  <link rel="canonical" href="{target_canonical}">\n</head>')
                        with open(file_path, "w", encoding="utf-8") as file_out:
                            file_out.write(html)
                        canonical_updated += 1

print(f"SUCCESS: Consolidated canonical tags on {canonical_updated} city route files to hierarchical state-city paths!")
