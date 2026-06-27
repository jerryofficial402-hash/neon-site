const fs = require('fs');
const cheerio = require('cheerio');
const file = 'services/open-auto-transport.html';
const html = fs.readFileSync(file, 'utf8');
const $ = cheerio.load(html);

// Remove all application/ld+json tags
$('script[type="application/ld+json"]').remove();

// Set proper og:title and twitter:title
$('meta[property="og:title"]').attr('content', 'Open Auto Transport Services | Open Carrier Car Shipping | Neon Auto Transport');
$('meta[name="twitter:title"]').attr('content', 'Open Auto Transport Services | Open Carrier Car Shipping | Neon Auto Transport');

// Insert the proper schema once
const schema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Open Auto Transport",
      "description": "Open carrier car shipping nationwide. FMCSA approved, fully insured, no upfront deposit. Door-to-door delivery on open multi-car trailers.",
      "provider": {
        "@type": "Organization",
        "name": "Neon Auto Transport",
        "url": "https://neonautotransport.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "url": "https://neonautotransport.com/services/open-auto-transport/",
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "550",
        "highPrice": "1700",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between open and enclosed auto transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Open transport ships your car on a multi-level trailer exposed to the elements, making it the most affordable and common method. Enclosed transport uses a fully covered trailer for maximum protection, ideal for luxury and classic cars."
          }
        },
        {
          "@type": "Question",
          "name": "How much does open auto transport cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 2026, open auto transport costs between $0.70 and $0.90 per mile. Shorter trips under 500 miles average $550, while cross-country trips over 2,000 miles average $1,250 to $1,550."
          }
        },
        {
          "@type": "Question",
          "name": "Is my car insured during open transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All carriers in the Neon Auto Transport network are fully licensed by the FMCSA and carry comprehensive cargo insurance that covers your vehicle from pickup to delivery with zero deductible for you."
          }
        },
        {
          "@type": "Question",
          "name": "Can I put personal items in my car during open transport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can securely pack up to 100 lbs of soft personal items (like clothes or blankets) in the trunk. The front seats and windows must remain completely clear for loading visibility."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to ship a car via open carrier?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transit times depend on distance. Trips under 500 miles take 1-3 days, 500-1,500 miles take 3-5 days, and cross-country trips over 2,000 miles typically take 7-10 days."
          }
        }
      ]
    }
  ]
}
</script>
`;

$('head').append(schema);

fs.writeFileSync(file, $.html());
