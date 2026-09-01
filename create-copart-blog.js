import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Read the template
const templatePath = path.join(__dirname, 'blog', 'true-cost-of-car-shipping-2026.html');
let html = fs.readFileSync(templatePath, 'utf8');

// Replace SEO Metadata
html = html.replace(/<title>.*?<\/title>/, '<title>How to Ship a Car from Copart Richmond VA: Complete 2026 Guide | Neon Auto Transport</title>');
html = html.replace(/<meta name="description" content=".*?">/, '<meta name="description" content="Complete 2026 guide to shipping a car from Copart Richmond VA (Sandston & Charles City). Learn gate passes, storage fee rules, inoperable vehicle transport, and costs.">');
html = html.replace(/<link rel="canonical" href=".*?" \/>/, '<link rel="canonical" href="https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/" />');
html = html.replace(/<meta property="og:title" content=".*?">/, '<meta property="og:title" content="How to Ship a Car from Copart Richmond VA: Complete 2026 Guide">');
html = html.replace(/<meta property="og:description" content=".*?">/, '<meta property="og:description" content="Complete 2026 guide to shipping a car from Copart Richmond VA (Sandston & Charles City). Learn gate passes, storage fee rules, inoperable vehicle transport, and costs.">');
html = html.replace(/<meta property="og:url" content=".*?">/, '<meta property="og:url" content="https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/">');

// Replace JSON-LD Schema
const newSchema = `
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://neonautotransport.com/blog/how-to-ship-a-car-from-copart-richmond-va/"
      },
      "headline": "How to Ship a Car from Copart Richmond VA: Complete 2026 Guide",
      "description": "Complete 2026 guide to shipping a car from Copart Richmond VA (Sandston & Charles City). Learn gate passes, storage fee rules, inoperable vehicle transport, and costs.",
      "image": "https://neonautotransport.com/images/og-cover.jpg",
      "author": {
        "@type": "Organization",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com/"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Neon Auto Transport",
        "logo": {
          "@type": "ImageObject",
          "url": "https://neonautotransport.com/logo.png"
        }
      },
      "datePublished": "2026-09-01",
      "dateModified": "2026-09-01"
    }
`;

html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${newSchema}</script>`);

// Replace Main Content
const mainContent = `
  <main class="bg-[#f6f9fc] pb-24 relative pt-32">
    <div class="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
      
      <div class="mb-8">
        <a href="/blog/" class="text-[#635bff] font-bold text-sm hover:underline flex items-center gap-2 mb-6">
          <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Blog
        </a>
        <h1 class="text-4xl md:text-5xl font-black leading-tight mb-6 text-[#0a2540] tracking-tighter">How to Ship a Car from Copart Richmond VA: Complete 2026 Guide</h1>
        <div class="flex items-center gap-4 text-sm text-[#425466] font-medium border-b border-[#e6e6e6] pb-8">
          <span>By Neon Auto Transport</span>
          <span class="w-1 h-1 rounded-full bg-[#cdd5df]"></span>
          <span>September 1, 2026</span>
          <span class="w-1 h-1 rounded-full bg-[#cdd5df]"></span>
          <span>6 min read</span>
        </div>
      </div>

      <div class="prose prose-lg max-w-none text-[#425466]">
        <p class="lead text-xl text-[#0a2540] font-medium mb-8">Winning a salvage or clean-title vehicle at Copart Richmond is exciting, but arranging transport quickly is critical to avoid hefty storage fees. This guide walks you through every step of shipping a car from Copart's Richmond, VA auction yards directly to your doorstep.</p>

        <h2 class="text-2xl font-bold text-[#0a2540] mt-10 mb-4">1. Understand the Two Copart Richmond Yard Locations</h2>
        <p>Copart operates two primary auction facilities in the Richmond metropolitan area. Double-check your buyer invoice to confirm which yard is storing your vehicle:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Copart Richmond (Sandston):</strong> 5701 Whiteside Rd, Sandston, VA 23150 &bull; Phone: (804) 328-1023</li>
          <li><strong>Copart Richmond East (Charles City):</strong> 6300 Chambers Road, Charles City, VA 23030 &bull; Phone: (804) 829-9160</li>
        </ul>

        <div class="bg-[#dcfce7] p-6 rounded-xl border-l-4 border-[#16a34a] my-8 text-[#0a2540]">
          <strong>Pro Tip:</strong> For dedicated carrier booking and instant quotes specifically for these yards, check our main <a href="/copart-richmond-va-car-shipping/" class="text-[#16a34a] font-bold underline">Copart Richmond VA Car Shipping</a> service hub.
        </div>

        <h2 class="text-2xl font-bold text-[#0a2540] mt-10 mb-4">2. Step-by-Step Pickup Process</h2>
        <ol class="list-decimal pl-6 space-y-3 my-4">
          <li><strong>Complete Payment:</strong> Pay your vehicle invoice in full via wire, ePay, or approved payment methods. Copart will not release any lot until funds clear completely.</li>
          <li><strong>Download Your Gate Pass:</strong> Log into your Member account, locate the lot under Payments Due / Won Vehicles, and generate your <strong>Gate Pass PIN</strong>.</li>
          <li><strong>Book an Auction Carrier:</strong> Partner with a specialized broker like Neon Auto Transport who works with Copart-registered drivers. Provide your Lot Number and Gate PIN.</li>
          <li><strong>Copart App Scheduling:</strong> The assigned carrier reserves a gate appointment slot using the Copart Transportation App.</li>
          <li><strong>Gate Check-In &amp; Loading:</strong> The driver presents the PIN, conducts a Bill of Lading (BOL) inspection, and loads the car using ramps, winch, or yard loader.</li>
          <li><strong>Door-to-Door Delivery:</strong> The vehicle is delivered directly to your shop, home, dealership, or port.</li>
        </ol>

        <h2 class="text-2xl font-bold text-[#0a2540] mt-10 mb-4">3. How Copart Storage Fees Work</h2>
        <p>Copart typically provides <strong>2 to 3 business days of complimentary storage</strong> following the auction sale date (depending on your membership tier). After this window closes, storage fees accumulate daily ($30 to $50+ per day plus weekend fees).</p>
        <p>To avoid unnecessary charges, book your carrier the moment your invoice is paid so dispatch can align carrier arrival with your free storage window.</p>

        <h2 class="text-2xl font-bold text-[#0a2540] mt-10 mb-4">4. Shipping Inoperable &amp; Damaged Vehicles</h2>
        <p>A huge percentage of Copart inventory consists of salvage, non-running, or collision-damaged cars. When booking transport, always clarify vehicle condition:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Runs &amp; Drives:</strong> Can be loaded onto standard open multi-car trailers under its own power.</li>
          <li><strong>Rolls &amp; Steers (Non-Running):</strong> Loaded via electric winch onto a multi-car carrier or flatbed.</li>
          <li><strong>Missing Wheels / Heavy Damage:</strong> Requires forklift loading at Copart and flatbed roll-off at delivery.</li>
        </ul>

        <h2 class="text-2xl font-bold text-[#0a2540] mt-10 mb-4">5. What Does Copart Richmond Car Shipping Cost?</h2>
        <p>Rates generally range from <strong>$250 to $1,500+</strong> depending on distance and vehicle condition:</p>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Richmond to Washington DC / Northern VA (~100 mi):</strong> $250 – $400</li>
          <li><strong>Richmond to Philadelphia / New Jersey (~250 mi):</strong> $450 – $650</li>
          <li><strong>Richmond to New York (~350–400 mi):</strong> $550 – $800</li>
          <li><strong>Richmond to Atlanta / Southeast (~530 mi):</strong> $600 – $850</li>
          <li><strong>Richmond to Florida (~850–950 mi):</strong> $750 – $1,100</li>
          <li><strong>Richmond to Texas / West Coast:</strong> $950 – $1,800+</li>
        </ul>

        <div class="bg-[#0a2540] text-white p-8 rounded-2xl my-10 text-center">
          <h3 class="text-2xl font-bold mb-3 text-white">Need Car Shipping from Copart Richmond?</h3>
          <p class="text-[rgba(255,255,255,0.85)] mb-6 max-w-xl mx-auto">Get an instant quote with $0 upfront deposit and fast carrier dispatch from Sandston or Charles City yards.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="/cost-calculator/" class="px-8 py-3.5 rounded-full bg-[#39FF14] text-[#0a2540] font-bold hover:bg-[#32e612] transition">Get Instant Quote</a>
            <a href="tel:5715767711" class="px-8 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition">Call (571) 576-7711</a>
          </div>
        </div>

      </div>
    </div>
  </main>
`;

html = html.replace(/<main[\s\S]*?<\/main>/, mainContent);

// Write output files
const outputDir = path.join(__dirname, 'blog', 'how-to-ship-a-car-from-copart-richmond-va');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'index.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'blog', 'how-to-ship-a-car-from-copart-richmond-va.html'), html, 'utf8');

console.log('✅ Generated companion blog post: blog/how-to-ship-a-car-from-copart-richmond-va/index.html');
