import os

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"
CONTACT_FILE = os.path.join(BASE_DIR, "contact.html")

with open(CONTACT_FILE, "r", encoding="utf-8") as f:
    contact_html = f.read()

# Add explicit CSS rule for vibrant border color transitions on card hover
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

    .card-hover-green {
      border: 2px solid #e6e6e6 !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .card-hover-green:hover {
      border-color: #39FF14 !important;
      transform: translateY(-6px) !important;
      box-shadow: 0 14px 30px rgba(57, 255, 20, 0.2) !important;
    }
  </style>
</head>"""

if '</head>' in contact_html:
    contact_html = contact_html.replace('</head>', custom_hover_css)

# Update Woodbridge card class to use .card-hover-indigo
contact_html = contact_html.replace(
    'class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-md hover:border-[#635bff] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 transform flex flex-col justify-between"',
    'class="bg-white p-8 rounded-3xl card-hover-indigo flex flex-col justify-between"'
)

# Update Live Oak card class to use .card-hover-cyan
contact_html = contact_html.replace(
    'class="bg-white p-8 border border-[#e6e6e6] rounded-3xl shadow-md hover:border-[#00D4FF] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 transform flex flex-col justify-between"',
    'class="bg-white p-8 rounded-3xl card-hover-cyan flex flex-col justify-between"'
)

# Update Call Us card class to use .card-hover-indigo
contact_html = contact_html.replace(
    'class="stripe-card p-6 flex items-start gap-5 hover:border-[#635bff] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 transform block"',
    'class="p-6 flex items-start gap-5 card-hover-indigo rounded-2xl block"'
)

# Update Email Us card class to use .card-hover-green
contact_html = contact_html.replace(
    'class="stripe-card p-6 flex items-start gap-5 hover:border-[#39FF14] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 transform block"',
    'class="p-6 flex items-start gap-5 card-hover-green rounded-2xl block"'
)

# Update Map card class to use .card-hover-cyan
contact_html = contact_html.replace(
    'class="stripe-card p-2 hover:border-[#00D4FF] hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 transform overflow-hidden mt-6"',
    'class="p-2 card-hover-cyan rounded-2xl overflow-hidden mt-6"'
)

# Update Form container class to use .card-hover-indigo
contact_html = contact_html.replace(
    'class="lg:col-span-7 bg-white rounded-3xl stripe-card p-8 md:p-10 hover:shadow-2xl hover:border-[#635bff] transition-all duration-300 transform"',
    'class="lg:col-span-7 bg-white rounded-3xl card-hover-indigo p-8 md:p-10"'
)

with open(CONTACT_FILE, "w", encoding="utf-8") as f:
    f.write(contact_html)

print("SUCCESS: Applied vibrant colored border hover CSS classes across all contact cards!")
