const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const blogPath = path.join(__dirname, 'blog', 'what-is-the-best-auto-transport-company-to-use.html');
const indexPath = path.join(__dirname, 'index.html');

let blogContent = fs.readFileSync(blogPath, 'utf8');

const newProseContent = `
<h2>How We Compared These Companies</h2>
<p>
We evaluated each company on five criteria that consistently matter most to
car shipping customers:
</p>
<ul class="list-disc list-inside space-y-2 mt-4">
  <li><strong>Pricing transparency</strong> — does the quote you receive match the final price?</li>
  <li><strong>Insurance coverage</strong> — how much cargo insurance is included, and is it clearly disclosed?</li>
  <li><strong>Service area</strong> — does the company cover all 50 states, including Alaska and Hawaii?</li>
  <li><strong>Transit reliability</strong> — average pickup and delivery windows based on published data and customer reviews.</li>
  <li><strong>Customer experience</strong> — verified review scores across Trustpilot, Google, and BBB.</li>
</ul>
<p class="mt-4">
Ratings below reflect publicly available company information current as of
2026. As with any service industry, individual experiences vary by route,
season, and carrier availability.
</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">Top 5 Auto Transport Companies at a Glance</h2>
<div class="overflow-x-auto my-6 border border-[#e6e6e6] rounded-xl shadow-sm">
  <table class="w-full text-left text-sm border-collapse">
    <thead>
      <tr class="bg-[#f6f9fc] border-b border-[#e6e6e6] text-[#0a2540]">
        <th class="p-4 font-bold">Company</th>
        <th class="p-4 font-bold">Best For</th>
        <th class="p-4 font-bold">Insurance Coverage</th>
        <th class="p-4 font-bold">Avg. Rating</th>
        <th class="p-4 font-bold">Service Area</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-[#e6e6e6]">
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 font-semibold text-[#0a2540]">Neon Auto Transport</td>
        <td class="p-4 text-[#425466]">Transparent pricing, door-to-door service</td>
        <td class="p-4 text-[#425466]">Up to $500K</td>
        <td class="p-4 font-bold text-[#0a2540]">4.9★</td>
        <td class="p-4 text-[#425466]">All 50 states</td>
      </tr>
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 font-semibold text-[#0a2540]">Montway Auto Transport</td>
        <td class="p-4 text-[#425466]">Long-distance moves, large carrier network</td>
        <td class="p-4 text-[#425466]">Varies by carrier</td>
        <td class="p-4 font-bold text-[#0a2540]">4.9★</td>
        <td class="p-4 text-[#425466]">All 50 states + AK/HI</td>
      </tr>
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 font-semibold text-[#0a2540]">Sherpa Auto Transport</td>
        <td class="p-4 text-[#425466]">Price-lock guarantee</td>
        <td class="p-4 text-[#425466]">Included, disclosed at quote</td>
        <td class="p-4 font-bold text-[#0a2540]">4.3–4.9★</td>
        <td class="p-4 text-[#425466]">48 states + AK/HI (via partners)</td>
      </tr>
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 font-semibold text-[#0a2540]">SGT Auto Transport</td>
        <td class="p-4 text-[#425466]">Guaranteed pickup dates</td>
        <td class="p-4 text-[#425466]">Full coverage included</td>
        <td class="p-4 font-bold text-[#0a2540]">4.3★</td>
        <td class="p-4 text-[#425466]">49 states (excl. Alaska)</td>
      </tr>
      <tr class="hover:bg-slate-50 transition">
        <td class="p-4 font-semibold text-[#0a2540]">AmeriFreight</td>
        <td class="p-4 text-[#425466]">Budget-friendly quotes, military/student discounts</td>
        <td class="p-4 text-[#425466]">Included + optional deductible coverage</td>
        <td class="p-4 font-bold text-[#0a2540]">4.16–4.8★</td>
        <td class="p-4 text-[#425466]">All 50 states</td>
      </tr>
    </tbody>
  </table>
</div>
<p class="text-sm italic mt-2 text-[#8ba3ba]">Ratings and figures compiled from company-published information and third-party review platforms as of 2026. Always confirm current details directly with each provider before booking.</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">1. Neon Auto Transport — Best for Transparent Pricing</h2>
<p>
Neon Auto Transport has shipped more than 150,000 vehicles over 9+ years in
business, and is fully licensed by the FMCSA and U.S. Department of
Transportation. What stands out is upfront pricing with no hidden fees,
door-to-door delivery as standard, and cargo insurance coverage up to
$500,000 depending on service type. Neon holds a 4.9-star rating from
verified customer reviews, with especially strong marks for communication
and honoring quoted prices.
</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">2. Montway Auto Transport — Best for Long-Distance Moves</h2>
<p>
Established in 2007, Montway operates one of the largest carrier networks
in the industry and has shipped more than 1 million vehicles nationwide.
Its online quoting tool makes it easy to compare open vs. enclosed pricing
and estimate cash-payment savings, and it's one of the few providers that
reliably covers Alaska and Hawaii routes.
</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">3. Sherpa Auto Transport — Best for Price Guarantees</h2>
<p>
Sherpa's Price Lock Promise means the quote you're given is the price you
pay — if Sherpa can't secure a carrier at that rate, they cover up to $300
of the difference themselves. Despite being newer to the industry
(founded 2017), Sherpa holds an A+ BBB rating and specializes in military
relocations and seasonal moves.
</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">4. SGT Auto Transport — Best for Guaranteed Pickup Dates</h2>
<p>
SGT is one of the only major providers offering an exact guaranteed pickup
date rather than the industry-standard loose window, which matters if
you're working around a tight moving timeline. The company has delivered
over 100,000 vehicles since 2014 and offers price matching against
competitor quotes.
</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">5. AmeriFreight — Best for Budget-Conscious Shippers</h2>
<p>
AmeriFreight consistently returns some of the lowest quotes for both short
and long-distance shipments, and offers optional gap coverage to help pay
insurance deductibles if damage occurs. Discounts for military members and
students make it a strong pick for cost-sensitive moves.
</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">How to Choose the Right Auto Transport Company for You</h2>
<ul class="list-disc list-inside space-y-2 mt-4">
  <li><strong>Comparing quotes?</strong> Get at least 2-3 quotes before booking — prices can vary significantly between providers for the same route.</li>
  <li><strong>Shipping something valuable?</strong> Confirm exact insurance coverage in writing, not just a verbal estimate.</li>
  <li><strong>On a tight schedule?</strong> Ask specifically about guaranteed pickup dates vs. standard pickup windows.</li>
  <li><strong>Shipping to/from Alaska or Hawaii?</strong> Confirm the company has direct service there — not all providers do.</li>
  <li><strong>Always verify FMCSA/USDOT registration</strong> before booking with any provider.</li>
</ul>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">FAQs: Choosing an Auto Transport Company</h2>

<h3 class="font-bold text-lg text-[#0a2540] mt-6">What is the best auto transport company in the USA?</h3>
<p>There's no single "best" company for everyone — the right choice depends on your priorities. Neon Auto Transport is a strong pick for transparent pricing and door-to-door service, Montway for long-distance and Alaska/Hawaii routes, Sherpa for price guarantees, SGT for guaranteed pickup dates, and AmeriFreight for budget-conscious shipping.</p>

<h3 class="font-bold text-lg text-[#0a2540] mt-6">How much does it cost to ship a car?</h3>
<p>Car shipping typically costs between $500 and $1,700, depending on distance, vehicle type, season, and whether you choose open or enclosed transport. Short regional routes start around $500, while cross-country shipments often run $1,000–$1,700.</p>

<h3 class="font-bold text-lg text-[#0a2540] mt-6">What's the difference between a broker and a carrier?</h3>
<p>A broker coordinates your shipment and connects you with a vetted carrier from their network, while a carrier is the company that physically transports the vehicle. Most companies in this comparison, including Neon Auto Transport, operate as brokers with an established carrier network.</p>

<h3 class="font-bold text-lg text-[#0a2540] mt-6">Is it safe to ship a car with a broker instead of a carrier directly?</h3>
<p>Yes, as long as the broker is FMCSA-registered and works with vetted, insured carriers. Brokers often provide more flexibility and competitive pricing since they can match your shipment with multiple available carriers rather than a single fleet.</p>

<h3 class="font-bold text-lg text-[#0a2540] mt-6">How far in advance should I book car shipping?</h3>
<p>Booking 1-2 weeks ahead of your target pickup date is ideal for most routes, and earlier during peak seasons (summer and snowbird months) when carrier availability is tighter.</p>

<h2 class="text-2xl font-bold text-[#0a2540] mt-8">Related Resources</h2>
<ul class="list-disc list-inside space-y-2 mt-4 text-[#635bff] font-medium">
  <li><a href="/services/open-auto-transport/" class="hover:underline">Open Auto Transport</a></li>
  <li><a href="/services/enclosed-auto-transport/" class="hover:underline">Enclosed Auto Transport</a></li>
  <li><a href="/services/door-to-door-car-shipping/" class="hover:underline">Door-to-Door Car Shipping</a></li>
  <li><a href="/insurance/" class="hover:underline">Insurance Coverage Details</a></li>
  <li><a href="/why-neon/" class="hover:underline">Why Choose Neon Auto Transport</a></li>
  <li><a href="/florida-car-shipping/" class="hover:underline">Florida Car Shipping</a></li>
  <li><a href="/get-a-quote/" class="hover:underline">Get a Free Quote</a></li>
</ul>
`;

const schemaContent = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Neon Auto Transport"},
    {"@type": "ListItem", "position": 2, "name": "Montway Auto Transport"},
    {"@type": "ListItem", "position": 3, "name": "Sherpa Auto Transport"},
    {"@type": "ListItem", "position": 4, "name": "SGT Auto Transport"},
    {"@type": "ListItem", "position": 5, "name": "AmeriFreight"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best auto transport company in the USA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There's no single best company for everyone. Neon Auto Transport is strong for transparent pricing and door-to-door service, Montway for long-distance and Alaska/Hawaii routes, Sherpa for price guarantees, SGT for guaranteed pickup dates, and AmeriFreight for budget-conscious shipping."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to ship a car?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Car shipping typically costs between $500 and $1,700, depending on distance, vehicle type, season, and transport type."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a broker and a carrier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A broker coordinates your shipment and connects you with a vetted carrier network, while a carrier physically transports the vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to ship a car with a broker instead of a carrier directly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, as long as the broker is FMCSA-registered and works with vetted, insured carriers."
      }
    },
    {
      "@type": "Question",
      "name": "How far in advance should I book car shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking 1-2 weeks ahead of your target pickup date is ideal for most routes, earlier during peak seasons."
      }
    }
  ]
}
</script>
`;

let $ = cheerio.load(blogContent, { decodeEntities: false });

// 1. Replace Title
$('title').text('Best Auto Transport Companies in 2026: Top 5 Compared');

// 2. Replace Meta Description
$('meta[name="description"]').attr('content', 'We compared the top 5 car shipping companies in the U.S. on price, insurance, and reliability. See how they stack up and find the best fit for your move.');

// 3. Replace H1
$('h1').text('Best Auto Transport Companies in 2026: Top 5 Compared');

// 4. Replace Intro Paragraph (the one right after H1 / Guide text)
// The intro in the HTML is currently:
// <p class="text-[#cdd5df] text-lg">How to navigate the car shipping industry, verify credentials, spot hidden fees, and choose the most reliable transport provider.</p>
$('h1').next('p').html(`Choosing an auto transport company comes down to a handful of things that
actually matter: transparent pricing, real insurance coverage, how the
company handles delays, and whether the quote you're given is the price
you actually pay. We compared five of the most established car shipping
companies in the U.S. — including our own service — on exactly those
factors, so you can see how each stacks up before booking.`);

// 5. Replace Prose body
$('.prose').html(newProseContent);

// 6. Inject Schema
$('head').append(schemaContent);

fs.writeFileSync(blogPath, $.html(), 'utf8');

// --- INDEX.HTML FIX ---
let indexContent = fs.readFileSync(indexPath, 'utf8');
let $idx = cheerio.load(indexContent, { decodeEntities: false });

// Link from Compare Us section
const compareSection = $idx('#competitor-comparison');
if (compareSection.length > 0) {
    const linkHtml = `
    <div class="mt-12 text-center">
        <a href="/blog/what-is-the-best-auto-transport-company-to-use/" class="text-[#635bff] font-bold text-lg hover:underline inline-flex items-center gap-2 group transition">
            Read our full breakdown of the top 5 auto transport companies for 2026 
            <svg aria-hidden="true" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </a>
    </div>`;
    
    compareSection.find('.container').append(linkHtml);
}

// Link in Blog Teaser (replace old title)
$idx('a[href="/blog/what-is-the-best-auto-transport-company-to-use/"] h3').text('Best Auto Transport Companies in 2026: Top 5 Compared');
$idx('a[href="/blog/what-is-the-best-auto-transport-company-to-use/"] p').text('We compared the top 5 car shipping companies in the U.S. on price, insurance, and reliability. See how they stack up.');

fs.writeFileSync(indexPath, $idx.html(), 'utf8');
console.log('Blog reworked and index.html updated.');
