import urllib.request

urls_to_test = [
    "https://neonautotransport.com/products/41237055/",
    "https://neonautotransport.com/detail/12345/",
    "https://neonautotransport.com/cultural-views-on-gambling/"
]

print("=== TESTING LIVE ENDPOINTS FOR HTTP 410 GONE ===")
for url in urls_to_test:
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as resp:
            print(f"URL: {url} -> Status: {resp.status}")
    except urllib.error.HTTPError as e:
        print(f"URL: {url} -> Status: {e.code} ({e.reason})")
    except Exception as e:
        print(f"URL: {url} -> Error: {e}")
