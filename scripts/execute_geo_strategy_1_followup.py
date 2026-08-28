import os
import re

BASE_DIR = r"C:\Users\DYNABOOK\.gemini\antigravity\scratch\neon-site"

def fix_issue_1_link_alternate_tags():
    print("=== ISSUE 1: INJECTING <link rel='alternate' type='text/markdown'> SITEWIDE ===")
    
    modified_count = 0
    for root, dirs, files in os.walk(BASE_DIR):
        if any(x in root for x in [".git", "node_modules", ".agents", "scripts", "brain"]):
            continue
        for file in files:
            if file.endswith(".html"):
                filepath = os.path.join(root, file)
                with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
                    c = f.read()

                # Find canonical URL or derive from filepath
                canonical_match = re.search(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', c, re.IGNORECASE)
                if canonical_match:
                    canonical_url = canonical_match.group(1).rstrip("/")
                else:
                    rel_path = os.path.relpath(filepath, BASE_DIR).replace("\\", "/").replace(".html", "").replace("/index", "")
                    canonical_url = f"https://neonautotransport.com/{rel_path}".rstrip("/")

                md_url = f"{canonical_url}.md"
                alternate_tag = f'  <link rel="alternate" type="text/markdown" href="{md_url}">'

                if 'rel="alternate" type="text/markdown"' not in c:
                    # Inject right after canonical tag or before </head>
                    if '<link rel="canonical"' in c:
                        c = re.sub(r'(<link\s+rel=["\']canonical["\'].*?>)', r'\1\n' + alternate_tag, c, count=1, flags=re.IGNORECASE)
                    else:
                        c = c.replace("</head>", f"{alternate_tag}\n</head>")
                    
                    with open(filepath, "w", encoding="utf-8") as f:
                        f.write(c)
                    modified_count += 1

    print(f"[COMPLETED] Injected <link rel='alternate'> tags into {modified_count} HTML pages sitewide!")

def fix_issue_2_blog_faq_schemas():
    print("=== ISSUE 2: ADDING FAQ SECTIONS & SCHEMAS TO 2 BLOG POSTS ===")

    faq_open_enclosed_html = """
<section class="faq-section my-10 bg-slate-900/80 border border-slate-800 rounded-xl p-6">
  <h2 class="text-2xl font-bold text-cyan-400 mb-4">Frequently Asked Questions: Open vs Enclosed Transport</h2>
  
  <div class="space-y-4">
    <div>
      <h3 class="text-lg font-semibold text-white">Is open transport safe for my vehicle?</h3>
      <p class="text-slate-300">Yes. Open transport is the standard method used by dealerships nationwide. Vehicles are exposed to weather and road debris, but damage is rare. Carrier insurance covers transit damage.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">How much more does enclosed transport cost?</h3>
      <p class="text-slate-300">Enclosed transport typically costs 30-40% more than open transport. For a coast-to-coast shipment, that's roughly $300-$700 extra.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">Should I choose enclosed transport for a standard sedan?</h3>
      <p class="text-slate-300">For a standard daily-driver sedan, open transport is usually sufficient. Enclosed transport is recommended for luxury, classic, exotic, or custom vehicles where protecting the finish matters.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">Does enclosed transport take longer?</h3>
      <p class="text-slate-300">Enclosed transport can take slightly longer because fewer enclosed carriers are on the road. Expect 1-2 additional days for pickup assignment on enclosed shipments.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">Is my vehicle insured during open transport?</h3>
      <p class="text-slate-300">Yes. The assigned carrier carries cargo insurance, and Neon Auto Transport maintains $500,000 in cargo insurance coverage. Verify carrier insurance limits before pickup.</p>
    </div>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is open transport safe for my vehicle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Open transport is the standard method used by dealerships nationwide. Vehicles are exposed to weather and road debris, but damage is rare. Carrier insurance covers transit damage."
      }
    },
    {
      "@type": "Question",
      "name": "How much more does enclosed transport cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enclosed transport typically costs 30-40% more than open transport. For a coast-to-coast shipment, that's roughly $300-$700 extra."
      }
    },
    {
      "@type": "Question",
      "name": "Should I choose enclosed transport for a standard sedan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For a standard daily-driver sedan, open transport is usually sufficient. Enclosed transport is recommended for luxury, classic, exotic, or custom vehicles where protecting the finish matters."
      }
    },
    {
      "@type": "Question",
      "name": "Does enclosed transport take longer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enclosed transport can take slightly longer because fewer enclosed carriers are on the road. Expect 1-2 additional days for pickup assignment on enclosed shipments."
      }
    },
    {
      "@type": "Question",
      "name": "Is my vehicle insured during open transport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The assigned carrier carries cargo insurance, and Neon Auto Transport maintains $500,000 in cargo insurance coverage. Verify carrier insurance limits before pickup."
      }
    }
  ]
}
</script>
"""

    faq_cost_2026_html = """
<section class="faq-section my-10 bg-slate-900/80 border border-slate-800 rounded-xl p-6">
  <h2 class="text-2xl font-bold text-cyan-400 mb-4">Frequently Asked Questions: Car Shipping Costs in 2026</h2>
  
  <div class="space-y-4">
    <div>
      <h3 class="text-lg font-semibold text-white">What is the average cost to ship a car in 2026?</h3>
      <p class="text-slate-300">The average cost to ship a car in 2026 ranges from $500 to $2,000. Open transport costs $0.50-$1.00 per mile, while enclosed transport costs $0.64-$2.20 per mile. The total depends on distance, vehicle size, transport type, and seasonality.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">What is the cheapest time of year to ship a car?</h3>
      <p class="text-slate-300">February is typically the cheapest month to ship a car, as demand is at its lowest and carrier availability is high. Late winter and early spring generally offer the best rates.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">Why is car shipping more expensive in summer?</h3>
      <p class="text-slate-300">Summer is peak auto transport season due to relocations, college moves, and increased demand. Higher demand with limited carrier availability drives prices up 20-30% compared to off-season.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">Do larger vehicles cost more to ship?</h3>
      <p class="text-slate-300">Yes. SUVs, trucks, and vans cost more to ship than sedans because they take up more space on the carrier and add weight. Expect to pay $100-$300 more for a large SUV or truck.</p>
    </div>
    
    <div>
      <h3 class="text-lg font-semibold text-white">Does Neon Auto Transport charge an upfront deposit?</h3>
      <p class="text-slate-300">No. Neon Auto Transport charges $0 upfront deposit. You only pay once a carrier is assigned and your vehicle is picked up. The remaining balance is due upon delivery.</p>
    </div>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the average cost to ship a car in 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The average cost to ship a car in 2026 ranges from $500 to $2,000. Open transport costs $0.50-$1.00 per mile, while enclosed transport costs $0.64-$2.20 per mile. The total depends on distance, vehicle size, transport type, and seasonality."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest time of year to ship a car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "February is typically the cheapest month to ship a car, as demand is at its lowest and carrier availability is high. Late winter and early spring generally offer the best rates."
      }
    },
    {
      "@type": "Question",
      "name": "Why is car shipping more expensive in summer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Summer is peak auto transport season due to relocations, college moves, and increased demand. Higher demand with limited carrier availability drives prices up 20-30% compared to off-season."
      }
    },
    {
      "@type": "Question",
      "name": "Do larger vehicles cost more to ship?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. SUVs, trucks, and vans cost more to ship than sedans because they take up more space on the carrier and add weight. Expect to pay $100-$300 more for a large SUV or truck."
      }
    },
    {
      "@type": "Question",
      "name": "Does Neon Auto Transport charge an upfront deposit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Neon Auto Transport charges $0 upfront deposit. You only pay once a carrier is assigned and your vehicle is picked up. The remaining balance is due upon delivery."
      }
    }
  ]
}
</script>
"""

    blog_files = [
        ("blog/open-vs-enclosed-auto-transport.html", faq_open_enclosed_html),
        ("blog/open-vs-enclosed-auto-transport/index.html", faq_open_enclosed_html),
        ("blog/true-cost-of-car-shipping-2026.html", faq_cost_2026_html),
        ("blog/true-cost-of-car-shipping-2026/index.html", faq_cost_2026_html),
    ]

    for rel_path, faq_code in blog_files:
        full_path = os.path.join(BASE_DIR, rel_path)
        if os.path.exists(full_path):
            with open(full_path, "r", encoding="utf-8", errors="ignore") as f:
                c = f.read()
            if "FAQPage" not in c:
                if "</article>" in c:
                    c = c.replace("</article>", faq_code + "\n</article>", 1)
                else:
                    c = c.replace("</body>", faq_code + "\n</body>", 1)
                with open(full_path, "w", encoding="utf-8") as f:
                    f.write(c)
                print(f"[UPDATED] FAQ section & FAQPage schema injected into {rel_path}")
            else:
                print(f"[OK] FAQPage schema already in {rel_path}")

def fix_issue_1_create_middleware_js():
    print("=== ISSUE 1: CREATING MIDDLEWARE.JS FOR ACCEPT HEADER REWRITES ===")
    
    middleware_code = """export default function middleware(request) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('accept') || '';
  const pathname = url.pathname;

  // Skip non-page requests
  if (
    pathname.endsWith('.md') ||
    pathname.endsWith('.xml') ||
    pathname.endsWith('.txt') ||
    pathname.endsWith('.json') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.webp') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('robots.txt') ||
    pathname.includes('sitemap') ||
    pathname.includes('llms') ||
    pathname.includes('favicon')
  ) {
    return;
  }

  // If client wants Markdown, rewrite to .md version
  if (acceptHeader.includes('text/markdown')) {
    let cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    if (!cleanPath) cleanPath = '/index';
    const mdUrl = new URL(cleanPath + '.md', url.origin);
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': mdUrl.toString(),
      },
    });
  }
}

export const config = {
  matcher: '/((?!api|_next|robots|sitemap|llms|favicon|css|images).*)',
};
"""
    mw_path = os.path.join(BASE_DIR, "middleware.js")
    with open(mw_path, "w", encoding="utf-8") as f:
        f.write(middleware_code)
    print("[CREATED] middleware.js created in project root!")

if __name__ == "__main__":
    fix_issue_1_link_alternate_tags()
    fix_issue_2_blog_faq_schemas()
    fix_issue_1_create_middleware_js()
    print("=== RE-RUNNING MARKDOWN GENERATION SCRIPT TO SYNC ALL .MD FILES ===")
    os.system(f"python {os.path.join(BASE_DIR, 'scripts', 'execute_geo_strategy_1.py')}")
    print("=== SUCCESS: FOLLOW-UP FIX COMPLETE ===")
