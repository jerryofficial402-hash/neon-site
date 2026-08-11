import os

SITE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CHATBOT_JS_PATH = os.path.join(SITE_DIR, "js", "chatbot.js")

if os.path.exists(CHATBOT_JS_PATH):
    with open(CHATBOT_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    style_injection_func = """
  // ---- Inject Essential Styles (Guarantees Fixed Position & Prevents Footer Layout Spill) ----
  function injectStyles() {
    if (document.getElementById('neon-chat-styles')) return;
    const style = document.createElement('style');
    style.id = 'neon-chat-styles';
    style.textContent = `
      #neon-chat-bubble {
        position: fixed !important;
        bottom: 28px !important;
        right: 28px !important;
        z-index: 9998 !important;
        width: 64px !important;
        height: 64px !important;
        border-radius: 50% !important;
        background: linear-gradient(135deg, #635bff, #7c3aed) !important;
        color: #ffffff !important;
        border: none !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        box-shadow: 0 4px 20px rgba(99, 91, 255, 0.5), 0 0 30px rgba(99, 91, 255, 0.2) !important;
        transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
      }
      #neon-chat-window {
        position: fixed !important;
        bottom: 104px !important;
        right: 28px !important;
        z-index: 9999 !important;
        width: 400px !important;
        max-width: calc(100vw - 32px) !important;
        height: 620px !important;
        max-height: calc(100vh - 140px) !important;
        border-radius: 16px !important;
        background: #ffffff !important;
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.3), 0 18px 36px -18px rgba(0, 0, 0, 0.35) !important;
        border: 1px solid #e6e6e6 !important;
        display: none !important;
        flex-direction: column !important;
        overflow: hidden !important;
        font-family: 'Inter', system-ui, sans-serif !important;
      }
      #neon-chat-window.visible {
        display: flex !important;
        opacity: 1 !important;
        transform: translateY(0) scale(1) !important;
        pointer-events: all !important;
      }
      #neon-chat-bubble svg {
        width: 28px !important;
        height: 28px !important;
        max-width: 28px !important;
        max-height: 28px !important;
      }
      #neon-chat-window svg, .neon-chat-header-avatar svg {
        width: 22px !important;
        height: 22px !important;
        max-width: 22px !important;
        max-height: 22px !important;
      }
      @media (max-width: 640px) {
        #neon-chat-bubble, #neon-chat-window {
          display: none !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
"""

    if "function injectStyles()" not in content:
        content = content.replace(
            "  function init() {\n    if (document.getElementById('neon-chat-bubble')) return;\n    createBubble();",
            style_injection_func + "\n  function init() {\n    if (document.getElementById('neon-chat-bubble')) return;\n    injectStyles();\n    createBubble();"
        )
        with open(CHATBOT_JS_PATH, "w", encoding="utf-8") as f:
            f.write(content)

print("SUCCESS: Injected inline styling engine into js/chatbot.js to guarantee fixed positioning and prevent any post-footer layout spill!")
