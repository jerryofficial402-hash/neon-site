import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
SITEMAP_PATH = os.path.join(SITE_DIR, "sitemap.xml")

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

with open(SITEMAP_PATH, "r", encoding="utf-8") as f:
    xml_content = f.read()

replaced_count = 0

def replace_city_url(match):
    global replaced_count
    url = match.group(1)
    # Check if /routes/city/
    if "/routes/city/" in url:
        slug = url.split("/routes/city/")[-1].strip("/")
        parts = slug.split("-")
        state_code = parts[-1].lower() if len(parts) > 1 else ""
        if state_code in STATE_NAMES:
            state_slug = STATE_NAMES[state_code]
            city_name_slug = "-".join(parts[:-1])
            new_url = f"https://neonautotransport.com/{state_slug}-car-shipping/{city_name_slug}/"
            replaced_count += 1
            return f"<loc>{new_url}</loc>"
    return match.group(0)

new_xml = re.sub(r'<loc>(https://neonautotransport\.com/routes/city/[^<]+)</loc>', replace_city_url, xml_content)

with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
    f.write(new_xml)

print(f"SUCCESS: Updated {replaced_count} city URLs in sitemap.xml to final canonical state-city URLs!")
