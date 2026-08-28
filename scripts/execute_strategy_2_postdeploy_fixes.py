import os
import re
import json

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

def fix_task_1_blogposting_schema():
    print("=== TASK 1: ADDING BLOGPOSTING SCHEMA TO 8 NEW BLOG POSTS ===")
    
    blogs_data = [
        ("blog/snowbird-car-shipping-guide", "Car Shipping During Winter: Snowbird Transport Guide 2026", "Complete guide to snowbird car shipping — when to book, costs, popular routes, and tips for seasonal vehicle transport."),
        ("blog/cross-country-car-shipping", "Moving Cross-Country? How to Ship Your Car (2026 Guide)", "Complete guide to cross-country car shipping — costs, transit times, preparation, and how to choose the right transport method."),
        ("blog/car-shipping-insurance-explained", "Car Shipping Insurance Explained: What's Covered in 2026", "Understanding car shipping insurance — carrier cargo insurance, broker coverage, personal auto insurance, and how to verify coverage before pickup."),
        ("blog/how-to-choose-car-shipping-company", "How to Choose a Car Shipping Company: Red Flags to Watch For", "How to evaluate car shipping companies — FMCSA verification, red flags, review patterns, and what to check before booking."),
        ("blog/hawaii-car-shipping-guide", "Shipping a Car to or from Hawaii: Complete Port Guide 2026", "Complete guide to Hawaii car shipping — port-to-port process, costs, timelines, preparation, and mainland port options."),
        ("blog/military-car-shipping-pcs", "Military POV Shipping: PCS Vehicle Transport Guide 2026", "PCS vehicle shipping guide for military personnel — entitlements, timeline, preparation, and how to ship your POV during a permanent change of station."),
        ("blog/car-shipping-timeline", "Car Shipping Timeline: How Long Does Vehicle Transport Take?", "How long car shipping takes by distance — transit times, factors that affect delivery, and how to plan your shipment timeline."),
        ("blog/electric-vehicle-shipping", "Electric Vehicle Shipping: EV Transport Guide 2026", "EV shipping guide — battery preparation, transport considerations, charging requirements, and what makes electric vehicle transport different.")
    ]

    for rel_clean, title, desc in blogs_data:
        canonical_url = f"https://neonautotransport.com/{rel_clean}/"
        schema_json = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": title,
            "description": desc,
            "url": canonical_url,
            "datePublished": "2026-08-27",
            "dateModified": "2026-08-27",
            "author": {
                "@type": "Person",
                "name": "Shazil Ali",
                "url": "https://neonautotransport.com/author/shazil-ali/"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Neon Auto Transport LLC",
                "url": "https://neonautotransport.com/",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://neonautotransport.com/images/neon-logo.png",
                    "width": 512,
                    "height": 512
                }
            },
            "image": {
                "@type": "ImageObject",
                "url": "https://neonautotransport.com/images/neon-logo.png",
                "width": 1200,
                "height": 630
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonical_url
            }
        }
        schema_tag = f'\n<script type="application/ld+json">\n{json.dumps(schema_json, indent=2)}\n</script>\n'

        files_to_update = [
            os.path.join(BASE_DIR, f"{rel_clean}.html"),
            os.path.join(BASE_DIR, rel_clean, "index.html")
        ]

        for fp in files_to_update:
            if os.path.exists(fp):
                with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                    c = f.read()
                if "BlogPosting" not in c:
                    c = c.replace("</head>", f"{schema_tag}</head>")
                    with open(fp, "w", encoding="utf-8") as f:
                        f.write(c)
                    print(f"[UPDATED BlogPosting] {fp}")

def fix_task_6_route_faq_schemas():
    print("=== TASK 6: ADDING FAQ SECTIONS & SCHEMAS TO ALL 20 NEW ROUTE PAGES ===")
    
    top_routes = [
        ("florida-to-california-car-shipping", "Florida", "California", 2735, 1000, 1800, 1400, 2500, "7-10"),
        ("texas-to-florida-car-shipping", "Texas", "Florida", 1150, 650, 1150, 900, 1550, "3-5"),
        ("georgia-to-florida-car-shipping", "Georgia", "Florida", 660, 400, 750, 600, 1100, "2-3"),
        ("north-carolina-to-florida-car-shipping", "North Carolina", "Florida", 650, 400, 750, 600, 1100, "2-3"),
        ("new-jersey-to-florida-car-shipping", "New Jersey", "Florida", 1050, 650, 1150, 900, 1550, "3-5"),
        ("pennsylvania-to-florida-car-shipping", "Pennsylvania", "Florida", 1000, 600, 1100, 850, 1500, "3-5"),
        ("ohio-to-florida-car-shipping", "Ohio", "Florida", 1000, 600, 1100, 850, 1500, "3-5"),
        ("michigan-to-florida-car-shipping", "Michigan", "Florida", 1200, 700, 1250, 1000, 1700, "3-5"),
        ("arizona-to-california-car-shipping", "Arizona", "California", 400, 300, 550, 450, 750, "1-2"),
        ("washington-to-california-car-shipping", "Washington", "California", 950, 550, 950, 750, 1300, "2-4"),
        ("oregon-to-california-car-shipping", "Oregon", "California", 650, 400, 750, 600, 1100, "2-3"),
        ("nevada-to-california-car-shipping", "Nevada", "California", 280, 250, 450, 350, 650, "1-2"),
        ("florida-to-new-york-car-shipping", "Florida", "New York", 1090, 650, 1200, 900, 1600, "3-5"),
        ("texas-to-new-york-car-shipping", "Texas", "New York", 1600, 850, 1400, 1200, 1900, "4-6"),
        ("florida-to-texas-car-shipping", "Florida", "Texas", 1150, 650, 1150, 900, 1550, "3-5"),
        ("colorado-to-california-car-shipping", "Colorado", "California", 1000, 600, 1100, 850, 1500, "3-5"),
        ("minnesota-to-florida-car-shipping", "Minnesota", "Florida", 1500, 800, 1350, 1100, 1800, "4-6"),
        ("massachusetts-to-florida-car-shipping", "Massachusetts", "Florida", 1250, 700, 1250, 1000, 1700, "3-5"),
        ("connecticut-to-florida-car-shipping", "Connecticut", "Florida", 1150, 680, 1200, 950, 1600, "3-5"),
        ("south-carolina-to-new-york-car-shipping", "South Carolina", "New York", 750, 450, 850, 650, 1150, "2-3")
    ]

    for rel_clean, orig, dest, dist, open_low, open_high, enc_low, enc_high, transit in top_routes:
        faq_html = f"""
<section class="faq-section my-10 bg-slate-900/80 border border-slate-800 rounded-xl p-6">
  <h2 class="text-2xl font-bold text-cyan-400 mb-4">Frequently Asked Questions: {orig} to {dest} Car Shipping</h2>
  
  <div class="space-y-4">
    <div>
      <h3 class="text-lg font-semibold text-white">How much does it cost to ship a car from {orig} to {dest}?</h3>
      <p class="text-slate-300">Shipping a car from {orig} to {dest} costs approximately ${open_low}–${open_high} for open transport and ${enc_low}–${enc_high} for enclosed transport, depending on vehicle size, seasonality, and carrier availability.</p>
    </div>
    <div>
      <h3 class="text-lg font-semibold text-white">How long does it take to ship a car from {orig} to {dest}?</h3>
      <p class="text-slate-300">Transit time from {orig} to {dest} is approximately {transit} days for a distance of ~{dist} miles. Factor in 1–2 days for pickup assignment.</p>
    </div>
    <div>
      <h3 class="text-lg font-semibold text-white">What is the cheapest way to ship a car from {orig} to {dest}?</h3>
      <p class="text-slate-300">Choose open door-to-door transport, book 1–2 weeks in advance, and maintain flexible pickup dates to get the best rate.</p>
    </div>
    <div>
      <h3 class="text-lg font-semibold text-white">Is my vehicle insured during transport from {orig} to {dest}?</h3>
      <p class="text-slate-300">Yes. Neon Auto Transport maintains $500,000 cargo insurance coverage in addition to the motor carrier's primary cargo insurance policy.</p>
    </div>
  </div>
</section>

<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {{
      "@type": "Question",
      "name": "How much does it cost to ship a car from {orig} to {dest}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Shipping a car from {orig} to {dest} costs approximately ${open_low}–${open_high} for open transport and ${enc_low}–${enc_high} for enclosed transport."
      }}
    }},
    {{
      "@type": "Question",
      "name": "How long does it take to ship a car from {orig} to {dest}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Transit time from {orig} to {dest} is approximately {transit} days for a distance of ~{dist} miles."
      }}
    }},
    {{
      "@type": "Question",
      "name": "What is the cheapest way to ship a car from {orig} to {dest}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Choose open door-to-door transport, book 1–2 weeks in advance, and maintain flexible pickup dates."
      }}
    }},
    {{
      "@type": "Question",
      "name": "Is my vehicle insured during transport from {orig} to {dest}?",
      "acceptedAnswer": {{
        "@type": "Answer",
        "text": "Yes. Neon Auto Transport maintains $500,000 cargo insurance coverage in addition to the primary carrier policy."
      }}
    }}
  ]
}}
</script>
"""
        files_to_update = [
            os.path.join(BASE_DIR, f"{rel_clean}.html"),
            os.path.join(BASE_DIR, rel_clean, "index.html")
        ]

        for fp in files_to_update:
            if os.path.exists(fp):
                with open(fp, "r", encoding="utf-8", errors="ignore") as f:
                    c = f.read()
                if "FAQPage" not in c:
                    if "</article>" in c:
                        c = c.replace("</article>", faq_html + "\n</article>", 1)
                    else:
                        c = c.replace("</main>", faq_html + "\n</main>", 1)
                    with open(fp, "w", encoding="utf-8") as f:
                        f.write(c)
                    print(f"[UPDATED FAQPage] {fp}")

def fix_task_2_7_dynamic_sitemap_generator():
    print("=== TASK 2 & 7: GENERATING COMPLETE DYNAMIC SITEMAP.XML ===")
    
    urls = set()
    for root, dirs, files in os.walk(BASE_DIR):
        if any(x in root for x in [".git", "node_modules", ".agents", "scripts", "brain"]):
            continue
        for file in files:
            if file == "index.html":
                rel_dir = os.path.relpath(root, BASE_DIR).replace("\\", "/")
                if rel_dir == ".":
                    clean_url = "https://neonautotransport.com/"
                else:
                    clean_url = f"https://neonautotransport.com/{rel_dir}/"
                urls.add(clean_url)
            elif file.endswith(".html") and file != "404.html":
                rel_file = os.path.relpath(os.path.join(root, file), BASE_DIR).replace("\\", "/")
                clean_path = rel_file.replace(".html", "").replace("/index", "")
                if clean_path:
                    clean_url = f"https://neonautotransport.com/{clean_path}/"
                    urls.add(clean_url)

    sorted_urls = sorted(list(urls))
    
    xml_entries = []
    for u in sorted_urls:
        priority = "0.7"
        freq = "weekly"
        if u == "https://neonautotransport.com/":
            priority = "1.0"
            freq = "daily"
        elif "/car-shipping-cost/" in u or "/cost-calculator/" in u:
            priority = "0.9"
            freq = "daily"
        elif "/compare/" in u or "/services/" in u:
            priority = "0.8"
            freq = "weekly"
        elif "/blog/" in u:
            priority = "0.7"
            freq = "monthly"

        entry = f"""  <url>
    <loc>{u}</loc>
    <lastmod>2026-08-27</lastmod>
    <changefreq>{freq}</changefreq>
    <priority>{priority}</priority>
  </url>"""
        xml_entries.append(entry)

    sitemap_xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(xml_entries) + '\n</urlset>'

    sitemap_fp = os.path.join(BASE_DIR, "sitemap.xml")
    with open(sitemap_fp, "w", encoding="utf-8") as f:
        f.write(sitemap_xml_content)

    print(f"[CREATED SITEMAP.XML] Successfully wrote {len(sorted_urls)} URLs to sitemap.xml!")
    return sorted_urls

def fix_task_3_sitemap_md(urls):
    print("=== TASK 3: UPDATING SITEMAP.MD (AI SITEMAP) ===")
    
    lines = ["# Neon Auto Transport - AI Sitemap Index\n"]
    lines.append("Complete index of all live pages on https://neonautotransport.com for AI crawlers.\n")
    for u in urls:
        lines.append(f"- [{u}]({u})")
    
    md_content = "\n".join(lines)
    with open(os.path.join(BASE_DIR, "sitemap.md"), "w", encoding="utf-8") as f:
        f.write(md_content)
    print(f"[UPDATED SITEMAP.MD] Wrote {len(urls)} entries to sitemap.md!")

def fix_task_4_5_llms_txt_and_full(urls):
    print("=== TASK 4 & 5: UPDATING LLMS.TXT AND LLMS-FULL.TXT ===")
    
    llms_txt = f"""# Neon Auto Transport
> FMCSA-Licensed Nationwide Auto Transport Broker (USDOT #4355879 | MC #1703787)

## Core Knowledge Base
- [Company Knowledge Base](https://neonautotransport.com/llms-full.txt): Dense 20KB+ factual reference manual for AI models.
- [AI Sitemap](https://neonautotransport.com/sitemap.md): Full markdown index of all {len(urls)}+ live URLs sitewide.

## Primary Commercial Pages
- [Homepage](https://neonautotransport.com/): Nationwide door-to-door car shipping broker services.
- [Car Shipping Cost Guide 2026](https://neonautotransport.com/car-shipping-cost/): 3,500+ word comprehensive pricing guide & cost tiers.
- [Instant Cost Calculator](https://neonautotransport.com/cost-calculator/): Free online car shipping rate estimator.
- [Best Car Shipping Companies](https://neonautotransport.com/best-car-shipping-companies/): 2026 competitor comparison index.

## Competitor Comparison Guides
- [Neon vs Montway](https://neonautotransport.com/compare/neon-vs-montway/)
- [Neon vs AmeriFreight](https://neonautotransport.com/compare/neon-vs-amerifreight/)
- [Neon vs Sherpa](https://neonautotransport.com/compare/neon-vs-sherpa/)
- [Neon vs Nexus](https://neonautotransport.com/compare/neon-vs-nexus/)
- [Neon vs RoadRunner](https://neonautotransport.com/compare/neon-vs-roadrunner/)
- [Neon vs SGT Auto](https://neonautotransport.com/compare/neon-vs-sgt-auto/)
- [Neon vs Easy Auto Ship](https://neonautotransport.com/compare/neon-vs-easy-auto-ship/)

## Priority Guides & Blog Posts
- [Snowbird Car Shipping Guide](https://neonautotransport.com/blog/snowbird-car-shipping-guide/)
- [Cross Country Car Shipping](https://neonautotransport.com/blog/cross-country-car-shipping/)
- [Car Shipping Insurance Explained](https://neonautotransport.com/blog/car-shipping-insurance-explained/)
- [How to Choose a Car Shipping Company](https://neonautotransport.com/blog/how-to-choose-car-shipping-company/)
- [Hawaii Car Shipping Guide](https://neonautotransport.com/blog/hawaii-car-shipping-guide/)
- [Military POV Shipping (PCS)](https://neonautotransport.com/blog/military-car-shipping-pcs/)
- [Car Shipping Timeline](https://neonautotransport.com/blog/car-shipping-timeline/)
- [Electric Vehicle (EV) Shipping](https://neonautotransport.com/blog/electric-vehicle-shipping/)
"""
    with open(os.path.join(BASE_DIR, "llms.txt"), "w", encoding="utf-8") as f:
        f.write(llms_txt)

    # Update llms-full.txt URL index
    llms_full_path = os.path.join(BASE_DIR, "llms-full.txt")
    if os.path.exists(llms_full_path):
        with open(llms_full_path, "r", encoding="utf-8") as f:
            full_c = f.read()
        
        url_index_text = "\n".join(urls)
        if "## Full URL Index" in full_c:
            prefix = full_c.split("## Full URL Index")[0]
            new_full_c = prefix + "## Full URL Index\n" + url_index_text + "\n"
        else:
            new_full_c = full_c + "\n\n## Full URL Index\n" + url_index_text + "\n"
            
        with open(llms_full_path, "w", encoding="utf-8") as f:
            f.write(new_full_c)
        print("[UPDATED LLMS-FULL.TXT] URL index updated!")

if __name__ == "__main__":
    fix_task_1_blogposting_schema()
    fix_task_6_route_faq_schemas()
    urls = fix_task_2_7_dynamic_sitemap_generator()
    fix_task_3_sitemap_md(urls)
    fix_task_4_5_llms_txt_and_full(urls)
    print("=== RE-RUNNING MARKDOWN GENERATION & ALT LINK SCRIPT ===")
    os.system(f"python {os.path.join(BASE_DIR, 'scripts', 'execute_geo_strategy_1_followup.py')}")
    print("=== SUCCESS: POST-DEPLOY FIXES COMPLETE ===")
