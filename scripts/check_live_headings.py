import urllib.request
import re

url = "https://neonautotransport.com/new-york-car-shipping/"
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
)

try:
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        headings = re.findall(r'<(h[1-4])[^>]*>(.*?)</\1>', html, re.DOTALL | re.IGNORECASE)
        print("\n--- LIVE HEADINGS FOUND ON PRODUCTION PAGE ---")
        for tag, text in headings:
            clean_text = re.sub(r'<[^>]+>', '', text).strip()
            if clean_text:
                indent = "  " if tag == "h2" else ("    " if tag == "h3" else ("      " if tag == "h4" else ""))
                print(f"{indent}<{tag}> {clean_text}")

except Exception as e:
    print(f"Error fetching URL: {e}")
