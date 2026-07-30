import os
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

# 1. Update css/styles.css
styles_path = os.path.join(SITE_DIR, "css", "styles.css")
with open(styles_path, "r", encoding="utf-8") as f:
    styles_content = f.read()

# Fix .reveal to prevent permanent blank gaps
old_reveal = """.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}"""

new_reveal = """.reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}
.js-loaded .reveal:not(.active) {
  opacity: 0;
  transform: translateY(15px);
}
.js-loaded .reveal.active {
  opacity: 1;
  transform: translateY(0);
}"""

if old_reveal in styles_content:
    styles_content = styles_content.replace(old_reveal, new_reveal)
    with open(styles_path, "w", encoding="utf-8") as f:
        f.write(styles_content)
    print("Updated css/styles.css reveal rules!")
else:
    # Append fallback to ensure opacity 1
    styles_content += "\n.reveal { opacity: 1 !important; transform: none !important; }\n"
    with open(styles_path, "w", encoding="utf-8") as f:
        f.write(styles_content)
    print("Appended reveal fallback to css/styles.css!")

# 2. Update js/main.js to remove negative rootMargin and add documentReady class
js_path = os.path.join(SITE_DIR, "js", "main.js")
with open(js_path, "r", encoding="utf-8") as f:
    js_content = f.read()

# Replace rootMargin -100px with +50px
js_content = js_content.replace('rootMargin:"0px 0px -100px 0px"', 'rootMargin:"0px 0px 50px 0px"')
js_content = js_content.replace('rootMargin: "0px 0px -100px 0px"', 'rootMargin: "0px 0px 50px 0px"')

# Add js-loaded class on DOMReady and force reveal after 200ms
if 'document.documentElement.classList.add("js-loaded")' not in js_content:
    js_content = js_content.replace('document.addEventListener("DOMContentLoaded",()=>', 'document.addEventListener("DOMContentLoaded",()=>{document.documentElement.classList.add("js-loaded");setTimeout(()=>{document.querySelectorAll(".reveal").forEach(e=>e.classList.add("active"))},300);')

with open(js_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Updated js/main.js to fix IntersectionObserver rootMargin and add automatic reveal fallback!")
