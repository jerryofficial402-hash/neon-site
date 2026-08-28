import urllib.request

slugs = [
    "miami-fl", "orlando-fl", "arlington-tx", "austin-tx", "corpus-christi-tx",
    "dallas-tx", "el-paso-tx", "fort-worth-tx", "houston-tx", "san-antonio-tx"
]

print("=== VERIFYING LIVE PRODUCTION HTTP STATUS CODES ===")

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

print("\n1. Testing Canonical /routes/city/{slug}/ URLs:")
for slug in slugs:
    url = f"https://neonautotransport.com/routes/city/{slug}/"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            print(f"  OK {slug}: HTTP {resp.status}")
    except urllib.error.HTTPError as e:
        print(f"  HTTP ERROR {slug}: {e.code}")
    except Exception as e:
        print(f"  ERROR {slug}: {e}")

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
        with urllib.request.urlopen(req) as resp:
            print(f"  OK {url} -> final HTTP {resp.status}")
    except urllib.error.HTTPError as e:
        print(f"  HTTP ERROR {url}: {e.code}")
    except Exception as e:
        print(f"  ERROR {url}: {e}")
