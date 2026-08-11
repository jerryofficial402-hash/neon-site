import os
import glob
import re

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CHATBOT_JS_PATH = os.path.join(SITE_DIR, "js", "chatbot.js")
CHATBOT_CSS_PATH = os.path.join(SITE_DIR, "css", "chatbot.css")

# 1. Update js/chatbot.js to include explicit inline dimensions on all SVGs
if os.path.exists(CHATBOT_JS_PATH):
    with open(CHATBOT_JS_PATH, "r", encoding="utf-8") as f:
        js_content = f.read()

    # Replace createBubble SVGs with inline size styles
    js_content = js_content.replace(
        '<svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">',
        '<svg class="chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" style="width:28px!important;height:28px!important;max-width:28px!important;max-height:28px!important;">'
    )
    js_content = js_content.replace(
        '<svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;">',
        '<svg class="close-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="28" height="28" style="display:none;width:28px!important;height:28px!important;max-width:28px!important;max-height:28px!important;">'
    )

    # Replace avatar SVG with inline size style
    js_content = js_content.replace(
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">',
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22" style="width:22px!important;height:22px!important;max-width:22px!important;max-height:22px!important;">'
    )

    with open(CHATBOT_JS_PATH, "w", encoding="utf-8") as f:
        f.write(js_content)

print("SUCCESS: Updated js/chatbot.js with explicit SVG sizing!")

# 2. Update css/chatbot.css to enforce strict SVG bounds
if os.path.exists(CHATBOT_CSS_PATH):
    with open(CHATBOT_CSS_PATH, "r", encoding="utf-8") as f:
        css_content = f.read()

    strict_svg_rules = """
/* ---- Strict SVG Sizing Guard (Prevents SVG explosion) ---- */
#neon-chat-bubble svg {
  width: 28px !important;
  height: 28px !important;
  max-width: 28px !important;
  max-height: 28px !important;
}
#neon-chat-window svg,
.neon-chat-header-avatar svg,
.neon-chat-header-close svg,
.neon-chat-send svg {
  width: 22px !important;
  height: 22px !important;
  max-width: 22px !important;
  max-height: 22px !important;
}
"""

    if "Strict SVG Sizing Guard" not in css_content:
        css_content += "\n" + strict_svg_rules
        with open(CHATBOT_CSS_PATH, "w", encoding="utf-8") as f:
            f.write(css_content)

print("SUCCESS: Updated css/chatbot.css with strict SVG sizing guard!")

# 3. Synchronize chatbot.css loading in all HTML files
html_files = glob.glob(os.path.join(SITE_DIR, "*.html")) + glob.glob(os.path.join(SITE_DIR, "*", "*.html"))

patched_html = 0
for filepath in html_files:
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception:
        continue

    # Fix async print media loading of chatbot.css to synchronous load
    if 'chatbot.css' in content:
        new_content = re.sub(
            r'<link rel="stylesheet" href="/css/chatbot\.css[^"]*" media="print"[^>]*>.*?<noscript>.*?</noscript>',
            '<link rel="stylesheet" href="/css/chatbot.css?v=3">',
            content,
            flags=re.DOTALL
        )
        new_content = re.sub(
            r'<link rel="stylesheet" href="/css/chatbot\.css[^"]*" media="print"[^>]*>',
            '<link rel="stylesheet" href="/css/chatbot.css?v=3">',
            new_content
        )
        if new_content != content:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            patched_html += 1

print(f"SUCCESS: Synchronized synchronous loading of chatbot.css across {patched_html} HTML files!")
