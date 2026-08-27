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
        print(f"Status Code: {response.status}")
        
        # Find head section
        head_match = re.search(r'<head>(.*?)</head>', html, re.DOTALL | re.IGNORECASE)
        if head_match:
            head_content = head_match.group(1)
            print("\n--- ALL META & LINK TAGS IN LIVE HEAD ---")
            for line in head_content.split('\n'):
                if '<meta' in line or '<link' in line:
                    print(line.strip())
        else:
            print("Could not find <head> section.")

except Exception as e:
    print(f"Error fetching URL: {e}")
