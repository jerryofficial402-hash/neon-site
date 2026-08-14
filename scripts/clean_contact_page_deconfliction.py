import os
import re

CONTACT_FILE = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site\contact.html"

with open(CONTACT_FILE, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Soften response time claims and add top internal link to /services/
old_contact_lead = r'<p class="text-lg text-\[\#425466\] mb-8 leading-relaxed">.*?</p>'

new_contact_lead = """<p class="text-base text-[#2563eb] font-bold mb-4">
            Looking for transport options first? Explore our <a href="/services/" class="underline hover:text-[#1d4ed8]">Nationwide Vehicle Transport Services</a>.
          </p>
          <p class="text-lg text-[#425466] mb-8 leading-relaxed font-normal">
            Have questions about vehicle transport or a pending quote? Call, email, or send us a message. A member of our team will respond as soon as possible during our stated business hours.
          </p>"""

content = re.sub(old_contact_lead, new_contact_lead, content, flags=re.DOTALL)

# Replace "immediately", "available around the clock", "within 1 hour" if present
content = content.replace("immediately", "promptly")
content = content.replace("available around the clock", "available during business hours")
content = content.replace("within 1 hour", "as soon as possible")

with open(CONTACT_FILE, "w", encoding="utf-8") as f:
    f.write(content)

print("SUCCESS: Cleaned contact.html to resolve vehicle transport services query cannibalization!")
