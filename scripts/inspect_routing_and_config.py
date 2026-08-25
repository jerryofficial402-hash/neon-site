import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

print("=== CONFIGURATION & ROUTING FILES AUDIT ===")
config_files = [
    "vercel.json",
    "next.config.js",
    "next.config.mjs",
    "next.config.ts",
    "middleware.js",
    "middleware.ts",
    "_redirects",
    ".htaccess",
    "package.json"
]

for cfg in config_files:
    fpath = os.path.join(BASE_DIR, cfg)
    print(f"File '{cfg}': {'EXISTS' if os.path.exists(fpath) else 'DOES NOT EXIST'}")
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
            print(f"--- CONTENT OF {cfg} ---")
            print(f.read()[:500])

print("\n=== VERIFYING /products/ ROUTE DIRECTORY ===")
products_dir = os.path.join(BASE_DIR, "products")
print(f"Directory 'products': {'EXISTS' if os.path.exists(products_dir) else 'DOES NOT EXIST'}")
