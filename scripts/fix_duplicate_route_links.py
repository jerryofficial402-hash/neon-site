import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

print("=== FIXING DUPLICATE ROUTE LINKS IN STATE & REGIONAL TRANSPORT HUBS ===")

def deduplicate_related_city_routes(content):
    # Match the related-city-routes section or any ul inside it
    if "related-city-routes" in content or "State &amp; Regional Transport Hubs" in content or "State & Regional Transport Hubs" in content:
        def replace_ul(match):
            ul_tag_open = match.group(1) # <ul ...>
            ul_inner = match.group(2)    # inside contents
            
            # Find all <li>...</li> items
            li_items = re.findall(r'<li>(.*?)</li>', ul_inner, re.DOTALL)
            seen_urls = set()
            clean_lis = []
            
            for li in li_items:
                # Extract href URL from li
                href_match = re.search(r'href=["\'](.*?)["\']', li)
                if href_match:
                    url_key = href_match.group(1).strip()
                    if url_key not in seen_urls:
                        seen_urls.add(url_key)
                        clean_lis.append(f"<li>{li.strip()}</li>")
                else:
                    clean_lis.append(f"<li>{li.strip()}</li>")
            
            return f"{ul_tag_open}\n" + "\n".join(clean_lis) + "\n</ul>"

        # Match any <ul ...>(.*?)</ul> inside related-city-routes section
        content = re.sub(
            r'(<ul[^>]*class=["\'][^"\']*text-xs[^"\']*["\'][^>]*>)(.*?)</ul>',
            replace_ul,
            content,
            flags=re.DOTALL
        )
        # Also catch generic <ul ...> in related-city-routes
        content = re.sub(
            r'(<section[^>]*class=["\'][^"\']*related-city-routes[^"\']*["\'][^>]*>.*?)(<ul[^>]*>)(.*?)</ul>',
            lambda m: m.group(1) + replace_ul(m.re.search(r'(<ul[^>]*>)(.*?)</ul>', m.group(0), re.DOTALL)),
            content,
            flags=re.DOTALL
        )
    return content

fixed_files_count = 0
for root, dirs, files in os.walk(BASE_DIR):
    if any(ignore in root for ignore in [".git", "node_modules", ".agents", "scripts", "brain"]):
        continue
    for file in files:
        if file.endswith(".html") or not "." in file:
            fpath = os.path.join(root, file)
            try:
                with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                
                orig = content
                
                # Check for duplicate <li> hrefs in transport hubs
                if "related-city-routes" in content or "Transport Hubs" in content:
                    # Parse transport hubs ul
                    hub_match = re.search(r'(<h4[^>]*>State &amp; Regional Transport Hubs</h4>\s*<ul[^>]*>)(.*?)(</ul>)', content, re.DOTALL)
                    if not hub_match:
                        hub_match = re.search(r'(<h4[^>]*>State & Regional Transport Hubs</h4>\s*<ul[^>]*>)(.*?)(</ul>)', content, re.DOTALL)
                    
                    if hub_match:
                        header_and_ul_open = hub_match.group(1)
                        lis_raw = hub_match.group(2)
                        ul_close = hub_match.group(3)
                        
                        items = re.findall(r'<li>(.*?)</li>', lis_raw, re.DOTALL)
                        seen = set()
                        unique_lis = []
                        for item in items:
                            href = re.search(r'href=["\'](.*?)["\']', item)
                            key = href.group(1).strip() if href else item.strip()
                            if key not in seen:
                                seen.add(key)
                                unique_lis.append(f"<li>{item.strip()}</li>")
                        
                        new_hub_html = header_and_ul_open + "\n" + "\n".join(unique_lis) + "\n" + ul_close
                        content = content.replace(hub_match.group(0), new_hub_html)

                if content != orig:
                    with open(fpath, "w", encoding="utf-8") as f:
                        f.write(content)
                    fixed_files_count += 1
            except Exception as e:
                pass

print(f"SUCCESS: Deduplicated route links across {fixed_files_count} city pages!")
