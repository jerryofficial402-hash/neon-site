import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CONTACT_FILE = os.path.join(BASE_DIR, "contact.html")

# Read master header and footer from contact.html
with open(CONTACT_FILE, "r", encoding="utf-8") as f:
    contact_content = f.read()

header_start = contact_content.find('<!-- Announcement Bar -->')
header_end = contact_content.find('</header>') + len('</header>')
master_header = contact_content[header_start:header_end]

footer_start = contact_content.find('<!-- Global Footer -->')
footer_end = contact_content.find('</footer>') + len('</footer>')
master_footer = contact_content[footer_start:footer_end]

# List of target cluster pages to update
cluster_slugs = [
    "yuba-city-ca-car-shipping",
    "marysville-ca-car-shipping",
    "gridley-ca-car-shipping",
    "oroville-ca-car-shipping",
    "chico-ca-car-shipping",
    "sacramento-ca-car-shipping",
    "live-oak-ca-car-shipping"
]

custom_hover_css = """
  <style>
    .card-hover-indigo {
      border: 2px solid #e6e6e6 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .card-hover-indigo:hover {
      border-color: #635bff !important;
      transform: translateY(-6px) !important;
      box-shadow: 0 14px 30px rgba(99, 91, 255, 0.18) !important;
    }

    .card-hover-cyan {
      border: 2px solid #e6e6e6 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .card-hover-cyan:hover {
      border-color: #00D1FF !important;
      transform: translateY(-6px) !important;
      box-shadow: 0 14px 30px rgba(0, 209, 255, 0.2) !important;
    }
  </style>
</head>"""

for slug in cluster_slugs:
    file_path = os.path.join(BASE_DIR, slug, "index.html")
    if not os.path.exists(file_path):
        continue

    with open(file_path, "r", encoding="utf-8") as f:
        page_html = f.read()

    # Add custom hover CSS if not present
    if '</head>' in page_html and '.card-hover-indigo' not in page_html:
        page_html = page_html.replace('</head>', custom_hover_css)

    # Replace header
    curr_header_start = page_html.find('<!-- Announcement Bar -->')
    if curr_header_start == -1:
        curr_header_start = page_html.find('<header')
    
    curr_header_end = page_html.find('</header>') + len('</header>')
    
    if curr_header_start != -1 and curr_header_end != -1:
        page_html = page_html[:curr_header_start] + master_header + page_html[curr_header_end:]

    # Replace footer
    curr_footer_start = page_html.find('<!-- Global Footer -->')
    if curr_footer_start == -1:
        curr_footer_start = page_html.find('<footer')
    
    curr_footer_end = page_html.find('</footer>') + len('</footer>')

    if curr_footer_start != -1 and curr_footer_end != -1:
        page_html = page_html[:curr_footer_start] + master_footer + page_html[curr_footer_end:]

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(page_html)

    print(f"SUCCESS: Updated master header, footer, and hover CSS for /{slug}/index.html!")
