import os
import json

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

def fix_vercel_json_trailing_slash_rewrites():
    print("=== FIXING VERCEL.JSON TRAILING-SLASH REWRITE PATTERN ===")
    
    # Ensure no middleware.js exists to avoid Next.js module build error
    mw_path = os.path.join(BASE_DIR, "middleware.js")
    if os.path.exists(mw_path):
        os.remove(mw_path)
        print("[REMOVED] middleware.js removed.")

    v_path = os.path.join(BASE_DIR, "vercel.json")
    with open(v_path, "r", encoding="utf-8") as f:
        v_data = json.load(f)

    # Define exact Option B rewrites
    homepage_markdown_rewrite = {
        "source": "/",
        "has": [
            {
                "type": "header",
                "key": "accept",
                "value": ".*text/markdown.*"
            }
        ],
        "destination": "/index.md"
    }

    slash_markdown_rewrite = {
        "source": "/((?!api|_next|robots|sitemap|llms|favicon|.*\\.md|.*\\.xml|.*\\.txt|.*\\.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.css|.*\\.js).*)/",
        "has": [
            {
                "type": "header",
                "key": "accept",
                "value": ".*text/markdown.*"
            }
        ],
        "destination": "/$1.md"
    }

    noslash_markdown_rewrite = {
        "source": "/((?!api|_next|robots|sitemap|llms|favicon|.*\\.md|.*\\.xml|.*\\.txt|.*\\.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.css|.*\\.js).*)",
        "has": [
            {
                "type": "header",
                "key": "accept",
                "value": ".*text/markdown.*"
            }
        ],
        "destination": "/$1.md"
    }

    # Clean out any old markdown rewrites
    existing_rewrites = v_data.get("rewrites", [])
    other_rewrites = [r for r in existing_rewrites if not (isinstance(r, dict) and r.get("destination", "").endswith(".md"))]

    v_data["rewrites"] = [homepage_markdown_rewrite, slash_markdown_rewrite, noslash_markdown_rewrite] + other_rewrites

    with open(v_path, "w", encoding="utf-8") as f:
        json.dump(v_data, f, indent=2)

    print("[UPDATED VERCEL.JSON] Restored exact trailing-slash markdown rewrites in vercel.json!")

def ensure_index_md_companions_exist():
    print("=== ENSURING INDEX.MD COMPANIONS EXIST IN ALL DIRECTORIES (OPTION C FALLBACK) ===")
    created_count = 0
    for root, dirs, files in os.walk(BASE_DIR):
        if any(x in root for x in [".git", "node_modules", ".agents", "scripts", "brain"]):
            continue
        for file in files:
            if file.endswith(".md") and not file.endswith("index.md") and file not in ["llms.txt", "llms-full.txt", "sitemap.md"]:
                rel_path = os.path.relpath(os.path.join(root, file), BASE_DIR).replace("\\", "/")
                dir_name = rel_path.replace(".md", "")
                index_md_fp = os.path.join(BASE_DIR, dir_name, "index.md")
                if not os.path.exists(index_md_fp):
                    os.makedirs(os.path.dirname(index_md_fp), exist_ok=True)
                    with open(os.path.join(root, file), "r", encoding="utf-8") as f:
                        content = f.read()
                    with open(index_md_fp, "w", encoding="utf-8") as f:
                        f.write(content)
                    created_count += 1
    print(f"[COMPLETED] Created {created_count} directory index.md fallback files!")

if __name__ == "__main__":
    fix_vercel_json_trailing_slash_rewrites()
    ensure_index_md_companions_exist()
    print("=== SUCCESS: ACCEPT HEADER ROOT CAUSE FIX COMPLETE ===")
