import glob
import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
GTM_ID = "GTM-P5K57THT"

HEAD_SNIPPET = f"""<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){{w[l]=w[l]||[];w[l].push({{'gtm.start':
new Date().getTime(),event:'gtm.js'}});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
}})(window,document,'script','dataLayer','{GTM_ID}');</script>
<!-- End Google Tag Manager -->"""

BODY_SNIPPET = f"""<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id={GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->"""

html_files = glob.glob(os.path.join(SITE_DIR, "**", "*.html"), recursive=True)
count = 0

for file_path in html_files:
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    if GTM_ID in content:
        continue
    
    modified = False
    
    # Inject into <head>
    if "<head>" in content:
        content = content.replace("<head>", f"<head>\n  {HEAD_SNIPPET}", 1)
        modified = True
    
    # Inject after <body>
    if "<body" in content:
        # Find end of <body...> tag
        body_idx = content.find("<body")
        gt_idx = content.find(">", body_idx)
        if gt_idx != -1:
            content = content[:gt_idx+1] + f"\n  {BODY_SNIPPET}\n" + content[gt_idx+1:]
            modified = True
    
    if modified:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1

print(f"SUCCESS: Injected GTM ({GTM_ID}) into {count} HTML files!")
