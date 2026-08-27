import os
import re
import json

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

print("=== STEP 7: ADD ARTICLE / BLOGPOSTING SCHEMA TO BLOG POSTS ===")
blog_dir = os.path.join(BASE_DIR, "blog")

if os.path.exists(blog_dir):
    for bfile in os.listdir(blog_dir):
        if bfile.endswith(".html"):
            bpath = os.path.join(blog_dir, bfile)
            with open(bpath, "r", encoding="utf-8", errors="ignore") as f:
                bcontent = f.read()
            
            if "BlogPosting" not in bcontent:
                # Extract title and desc
                m_title = re.search(r'<title>(.*?)</title>', bcontent)
                m_desc = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', bcontent)
                
                title_str = m_title.group(1).strip() if m_title else "Neon Auto Transport Guide"
                desc_str = m_desc.group(1).strip() if m_desc else "Expert vehicle transport guide and industry insights from Neon Auto Transport."
                
                article_schema = {
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": title_str,
                    "description": desc_str,
                    "image": "https://neonautotransport.com/images/og-cover.jpg",
                    "author": {
                        "@type": "Person",
                        "name": "Shazil Ali",
                        "jobTitle": "Director of Operations",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Neon Auto Transport"
                        },
                        "url": "https://www.linkedin.com/in/shazil-ali/"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Neon Auto Transport LLC",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://neonautotransport.com/images/logo.png"
                        }
                    },
                    "datePublished": "2026-06-01",
                    "dateModified": "2026-08-27",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": f"https://neonautotransport.com/blog/{bfile[:-5]}/"
                    }
                }
                
                schema_tag = f'\n  <script type="application/ld+json">\n{json.dumps(article_schema, indent=2)}\n  </script>\n'
                bcontent = bcontent.replace("</head>", schema_tag + "</head>")
                
                with open(bpath, "w", encoding="utf-8") as f:
                    f.write(bcontent)
                print(f"Added BlogPosting schema to /blog/{bfile}")

print("\n=== STEP 8: ADD SERVICE SCHEMA TO SERVICE PAGES ===")
services_dir = os.path.join(BASE_DIR, "services")

if os.path.exists(services_dir):
    for sfile in os.listdir(services_dir):
        if sfile.endswith(".html"):
            spath = os.path.join(services_dir, sfile)
            with open(spath, "r", encoding="utf-8", errors="ignore") as f:
                scontent = f.read()
            
            if "Service" not in scontent:
                m_title = re.search(r'<title>(.*?)</title>', scontent)
                m_desc = re.search(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', scontent)
                
                service_name = m_title.group(1).split("|")[0].strip() if m_title else sfile[:-5].replace("-", " ").title()
                desc_str = m_desc.group(1).strip() if m_desc else f"Professional {service_name} services by Neon Auto Transport LLC."
                
                service_schema = {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": service_name,
                    "provider": {
                        "@type": "Organization",
                        "name": "Neon Auto Transport LLC",
                        "telephone": "+1-571-576-7711",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "2709 Neabsco Common Pl, Suite 101",
                            "addressLocality": "Woodbridge",
                            "addressRegion": "VA",
                            "postalCode": "22191",
                            "addressCountry": "US"
                        },
                        "license": "MC #1703787, USDOT #4355879"
                    },
                    "areaServed": {
                        "@type": "Country",
                        "name": "United States"
                    },
                    "description": desc_str,
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "USD",
                        "description": "Pricing varies by distance, vehicle size, route demand, and season. Use cost calculator for instant estimates."
                    }
                }
                
                schema_tag = f'\n  <script type="application/ld+json">\n{json.dumps(service_schema, indent=2)}\n  </script>\n'
                scontent = scontent.replace("</head>", schema_tag + "</head>")
                
                with open(spath, "w", encoding="utf-8") as f:
                    f.write(scontent)
                print(f"Added Service schema to /services/{sfile}")

print("\n=== STEP 10: FIX ROUTE DISTANCE CORRECTIONS ===")
distance_fixes = {
    r'California.*?Chicago.*?805\s*miles': 'California to Chicago — 2,017 miles',
    r'Chicago.*?California.*?805\s*miles': 'Chicago to California — 2,017 miles',
    r'Miami.*?California.*?1520\s*miles': 'Miami to California — 2,735 miles',
    r'California.*?Miami.*?1559\s*miles': 'California to Miami — 2,735 miles',
}

fixed_distances_count = 0
for root, dirs, files in os.walk(BASE_DIR):
    if any(ignore in root for ignore in [".git", "node_modules", ".agents", "scripts", "brain"]):
        continue
    for file in files:
        if file.endswith(".html"):
            fpath = os.path.join(root, file)
            with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
            
            orig = content
            # Correct erroneous distances
            content = content.replace("805 miles</td>", "2017 miles</td>")
            content = content.replace("1520 miles</td>", "2735 miles</td>")
            content = content.replace("1559 miles</td>", "2735 miles</td>")
            
            if content != orig:
                with open(fpath, "w", encoding="utf-8") as f:
                    f.write(content)
                fixed_distances_count += 1

print(f"Corrected erroneous route distances across {fixed_distances_count} pages.")
print("\nSUCCESS: Completed Schema & Route Distance Enhancements!")
