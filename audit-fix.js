const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
let $ = cheerio.load(html, { decodeEntities: false });

// 1. Fix /locations.html to /locations/
$('a[href="/locations.html"]').attr('href', '/locations/');
$('a[href="https://neonautotransport.com/locations.html"]').attr('href', '/locations/');

// 2. Fix FHWA link
$('a[href="https://www.fhwa.dot.gov/"]').attr('href', '/locations/').removeAttr('target').removeAttr('rel');

// 3. Add Florida to Footer Popular Routes
const popRoutesHeading = $('h3:contains("Popular Routes")');
if (popRoutesHeading.length > 0) {
    const ul = popRoutesHeading.nextAll('ul').first();
    if (ul.length > 0) {
        // Insert before the "View All 50 States" li
        const viewAllLi = ul.find('li').last();
        
        const flHTML = `
      <li><a href="/florida-car-shipping/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Florida Car Shipping</a></li>
      <li><a href="/florida-to-texas-car-shipping/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Florida to Texas</a></li>`;
        
        viewAllLi.before(flHTML);
    }
}

// 5. Add internal links inside FAQ answers
$('.faq-btn').each((i, el) => {
    const questionText = $(el).find('span').first().text().trim();
    const answerDiv = $(el).next('div');
    
    if (questionText === 'Is my vehicle insured during transit?') {
        answerDiv.html('Yes. Every carrier in our network is thoroughly vetted and carries active cargo insurance. Your vehicle is fully covered from the moment it is loaded until delivered — see our <a href="/insurance/" class="text-[#635bff] hover:underline font-bold">full insurance coverage details</a>.');
    }
    
    if (questionText === 'Can you ship non-running vehicles?') {
        answerDiv.html(`Yes. Neon Auto Transport can move cars that don't work using specialized equipment like a winch or lift gate. Learn more about <a href="/services/enclosed-auto-transport/" class="text-[#635bff] hover:underline font-bold">enclosed transport options</a> for vehicles needing extra care during a non-running shipment.`);
    }
    
    if (questionText === 'Do you offer Door to Door Service?') {
        answerDiv.html('Yes. Neon Auto Transport ships your car right to your door — see our full <a href="/services/door-to-door-car-shipping/" class="text-[#635bff] hover:underline font-bold">Door to Door Car Transport</a> service details.');
    }
});

// 6. Link Compare Us table to comparison page
const compareSection = $('#competitor-comparison');
if (compareSection.length > 0) {
    // I previously added a link div.mt-12.text-center. Let's find it and replace it with the exact requested HTML structure to be safe.
    const container = compareSection.find('.container');
    container.find('.mt-12.text-center').remove(); // Remove my old one
    
    container.append(`<div class="mt-8 text-center text-[#425466]">
        <p>See our full <a href="/blog/what-is-the-best-auto-transport-company-to-use/" class="text-[#635bff] font-bold hover:underline">detailed comparison of top car shipping companies</a>.</p>
    </div>`);
}

// 7. Fix hotlinked Mercedes logo
$('img[src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"]').attr('src', 'https://cdn.simpleicons.org/mercedes/425466');

// 8. Add Popular Cities block in footer and remove Arlington/Woodbridge from Company
const companyHeading = $('h3:contains("Company")');
if (companyHeading.length > 0) {
    const ulCompany = companyHeading.nextAll('ul').first();
    // Remove VA pages from company list
    ulCompany.find('a[href="/car-shipping-arlington-va/"]').parent().remove();
    ulCompany.find('a[href="/car-shipping-woodbridge-va/"]').parent().remove();
}

const footerFlexRow = $('h3:contains("Popular Routes")').parent().parent();
if (footerFlexRow.length > 0) {
    const popularCitiesHTML = `
    <div style="flex: 1 1 150px;">
     <div style="margin-bottom: 2rem;">
      <h3 style="color: white; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.12em; margin: 0;">Popular Cities</h3>
      <div style="width: 32px; height: 3px; background: #00D1FF; margin-top: 10px; border-radius: 3px; box-shadow: 0 0 10px rgba(0,209,255,0.4);"></div>
     </div>
     <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; font-size: 15px; font-weight: 500;">
      <li><a href="/routes/city/miami-fl/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Miami Car Shipping</a></li>
      <li><a href="/routes/city/orlando-fl/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Orlando Car Shipping</a></li>
      <li><a href="/car-shipping-arlington-va/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Arlington, VA</a></li>
      <li><a href="/car-shipping-woodbridge-va/" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Woodbridge, VA</a></li>
     </ul>
    </div>`;
    
    // Insert it after Popular Routes
    $('h3:contains("Popular Routes")').parent().parent().after(popularCitiesHTML);
}

fs.writeFileSync(indexPath, $.html(), 'utf8');
console.log('Index.html updated successfully.');
