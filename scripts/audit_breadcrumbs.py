import os
import glob
import json

site_dir = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
html_files = glob.glob(os.path.join(site_dir, "**", "*.html"), recursive=True)

missing_visual = []
missing_schema = []
missing_both = []

categories = {
    "Homepage (index.html)": [],
    "Services (/services/*)": [],
    "Routes (/routes/*)": [],
    "Locations (/locations/*)": [],
    "Blog (/blog/*)": [],
    "Other Pages": []
}

for filepath in html_files:
    rel_path = os.path.relpath(filepath, site_dir).replace("\\", "/")
    if "node_modules" in rel_path or ".git" in rel_path:
        continue
        
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()

    # Homepage naturally doesn't need breadcrumbs (it's root)
    if rel_path == "index.html":
        continue

    # Check for visual breadcrumbs
    content_lower = content.lower()
    has_vis = "breadcrumb" in content_lower or "home /" in content_lower or "home</span>" in content_lower or "home </a>" in content_lower or "<span>/</span>" in content

    # Check for JSON-LD BreadcrumbList schema
    has_sch = "BreadcrumbList" in content

    cat = "Other Pages"
    if rel_path.startswith("services/"):
        cat = "Services (/services/*)"
    elif rel_path.startswith("routes/"):
        cat = "Routes (/routes/*)"
    elif rel_path.startswith("locations/"):
        cat = "Locations (/locations/*)"
    elif rel_path.startswith("blog/"):
        cat = "Blog (/blog/*)"

    record = {
        "path": rel_path,
        "has_visual": has_vis,
        "has_schema": has_sch
    }

    if not has_vis or not has_sch:
        categories[cat].append(record)

print("--- BREADCRUMB AUDIT REPORT ---")
print(f"Total pages scanned: {len(html_files) - 1}")

total_missing_vis = 0
total_missing_sch = 0

for cat, records in categories.items():
    if cat == "Homepage (index.html)":
        continue
    missing_vis_cat = [r for r in records if not r["has_visual"]]
    missing_sch_cat = [r for r in records if not r["has_schema"]]
    total_missing_vis += len(missing_vis_cat)
    total_missing_sch += len(missing_sch_cat)
    print(f"\n{cat} - Total Checked: {len(records)}")
    print(f"  Missing Visual Breadcrumbs: {len(missing_vis_cat)}")
    print(f"  Missing BreadcrumbList Schema: {len(missing_sch_cat)}")
    if missing_vis_cat:
        print("  Sample missing files:")
        for r in missing_vis_cat[:10]:
            print(f"   - {r['path']} (Visual: {r['has_visual']}, Schema: {r['has_schema']})")

print(f"\nOVERALL SUMMARY:")
print(f"Total Pages Missing Visual Breadcrumbs: {total_missing_vis}")
print(f"Total Pages Missing BreadcrumbList Schema: {total_missing_sch}")
