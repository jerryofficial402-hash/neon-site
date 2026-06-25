import os

def update_footer_routes():
    count = 0
    for root, dirs, files in os.walk('.'):
        if '.git' in root or 'node_modules' in root:
            continue
        for filename in files:
            if filename.endswith(".html"):
                filepath = os.path.join(root, filename)
                try:
                    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Replacements
                    content = content.replace(
                        'href="/california-car-shipping/"', 'href="/new-york-to-florida-car-shipping/"'
                    ).replace(
                        ' California Shipping</a>', ' NY to Florida</a>'
                    )
                    
                    content = content.replace(
                        'href="/florida-car-shipping/"', 'href="/california-to-texas-car-shipping/"'
                    ).replace(
                        ' Florida Shipping</a>', ' CA to Texas</a>'
                    )
                    
                    content = content.replace(
                        'href="/texas-car-shipping/"', 'href="/california-to-new-york-car-shipping/"'
                    ).replace(
                        ' Texas Shipping</a>', ' CA to New York</a>'
                    )
                    
                    content = content.replace(
                        'href="/new-york-car-shipping/"', 'href="/texas-to-california-car-shipping/"'
                    ).replace(
                        ' New York Shipping</a>', ' Texas to CA</a>'
                    )
                    
                    content = content.replace(
                        'href="/illinois-car-shipping/"', 'href="/illinois-to-florida-car-shipping/"'
                    ).replace(
                        ' Illinois Shipping</a>', ' Illinois to FL</a>'
                    )
                    
                    if content != original_content:
                        with open(filepath, "w", encoding="utf-8") as f:
                            f.write(content)
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")

    print(f"Patched {count} footers.")

if __name__ == "__main__":
    update_footer_routes()
