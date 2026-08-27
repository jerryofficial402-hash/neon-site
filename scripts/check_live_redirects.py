import urllib.request
import urllib.parse

slugs = [
    "miami-fl", "orlando-fl", "arlington-tx", "austin-tx", "corpus-christi-tx",
    "dallas-tx", "el-paso-tx", "fort-worth-tx", "houston-tx", "san-antonio-tx"
]

print("=== VERIFYING LIVE PRODUCTION HTTP STATUS CODES ===")

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        print(f"  --> Redirect [{code}] to: {newurl}")
        return super().redirect_request(req, fp, code, msg, headers, newurl)

opener = urllib.request.build_opener(NoRedirectHandler)

print("\n1. Testing Canonical /routes/city/{slug}/ URLs:")
for slug in slugs:
    url = f"https://neonautotransport.com/routes/city/{slug}/"
    req = urllib.request.Request(url, headers=headers)
    try:
        with opener.open(req) as resp:
            print(f"  ✅ {slug}: HTTP {resp.status}")
    except Exception as e:
        print(f"  ❌ {slug}: ERROR {e}")

print("\n2. Testing Old Outlier State-Shipping URLs Redirects:")
old_urls = [
    "https://neonautotransport.com/florida-car-shipping/miami/",
    "https://neonautotransport.com/florida-car-shipping/orlando/",
    "https://neonautotransport.com/texas-car-shipping/houston/",
    "https://neonautotransport.com/texas-car-shipping/dallas/"
]

for url in old_urls:
    req = urllib.request.Request(url, headers=headers)
    try:
        with opener.open(req) as resp:
            print(f"  ✅ {url} -> final HTTP {resp.status}")
    except Exception as e:
        print(f"  ❌ {url}: ERROR {e}")
