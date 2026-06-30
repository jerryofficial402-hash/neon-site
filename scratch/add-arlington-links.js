const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

// 1. Add to Homepage Footer
const indexHtmlPath = path.join(rootDir, 'index.html');
if (fs.existsSync(indexHtmlPath)) {
  let indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
  if (!indexHtml.includes('Car Shipping Arlington VA')) {
    const arlingtonLink = `<li><a href="/car-shipping-arlington-va/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Car Shipping Arlington VA</a></li>`;
    indexHtml = indexHtml.replace(
      `<li><a href="/car-shipping-woodbridge-va/"`,
      arlingtonLink + `\n            <li><a href="/car-shipping-woodbridge-va/"`
    );
    fs.writeFileSync(indexHtmlPath, indexHtml, 'utf-8');
  }
}

// 2. Add to Woodbridge Page Footer
const woodbridgePath = path.join(rootDir, 'car-shipping-woodbridge-va', 'index.html');
if (fs.existsSync(woodbridgePath)) {
  let wbHtml = fs.readFileSync(woodbridgePath, 'utf-8');
  if (!wbHtml.includes('Car Shipping Arlington VA')) {
    const arlingtonLink = `<li><a href="/car-shipping-arlington-va/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> Car Shipping Arlington VA</a></li>`;
    wbHtml = wbHtml.replace(
      `<li><a href="/car-shipping-woodbridge-va/"`,
      arlingtonLink + `\n            <li><a href="/car-shipping-woodbridge-va/"`
    );
    fs.writeFileSync(woodbridgePath, wbHtml, 'utf-8');
  }
}

// 3. Add prominent link in /virginia-car-shipping/ state page
const vaHtmlPath = path.join(rootDir, 'virginia-car-shipping', 'index.html');
if (fs.existsSync(vaHtmlPath)) {
  let vaHtml = fs.readFileSync(vaHtmlPath, 'utf-8');
  if (!vaHtml.includes('Local to Arlington or Alexandria?')) {
    const linkHtml = `<div class="bg-[#e0f2fe] border-l-4 border-[#0369a1] p-6 rounded-r-xl my-8">
  <div class="flex items-start gap-4">
    <svg class="w-6 h-6 text-[#0369a1] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    <div>
      <h3 class="text-lg font-bold text-[#0a2540] mb-2">Local to Arlington or Alexandria?</h3>
      <p class="text-[#425466]">If you're shipping out of Arlington, Clarendon, or the Pentagon area, we offer specialized local routing.</p>
      <a href="/car-shipping-arlington-va/" class="inline-flex items-center gap-2 mt-3 font-bold text-[#0369a1] hover:text-[#004182] hover:underline transition">Visit our dedicated Arlington, VA page <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></a>
    </div>
  </div>
</div>`;
    // Insert after the Woodbridge block
    vaHtml = vaHtml.replace(/(<div class="bg-\[#e0f2fe\].*?Woodbridge, VA page.*?<\/div>\n  <\/div>\n<\/div>)/s, `$1\n\n${linkHtml}`);
    fs.writeFileSync(vaHtmlPath, vaHtml, 'utf-8');
  }
}

// 4. Add to Service Pages footer
const servicesDir = path.join(rootDir, 'services');
const serviceFiles = fs.readdirSync(servicesDir);
for (const file of serviceFiles) {
  if (file.endsWith('.html')) {
    const servicePath = path.join(servicesDir, file);
    let serviceHtml = fs.readFileSync(servicePath, 'utf-8');
    
    if (!serviceHtml.includes('Local to Arlington VA?')) {
      const arlingtonServiceLink = `<li style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.1);"><span style="display:block; color:#39FF14; font-weight:bold; font-size:0.875rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.5rem;">Local to Arlington VA?</span><a href="/car-shipping-arlington-va/" class="group" style="color: #8ba3ba; text-decoration: none; display: flex; align-items: center; gap: 0.5rem; transition: all 0.3s;" onmouseover="this.style.color='#ffffff'; this.style.transform='translateX(4px)';" onmouseout="this.style.color='#8ba3ba'; this.style.transform='translateX(0)';"><svg style="width: 14px; height: 14px; color: #00D1FF;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg> View Arlington Services</a></li>`;
      
      // Insert after the woodbridge service link, or if not found, after FAQs
      if (serviceHtml.includes('Local to Woodbridge VA?')) {
         serviceHtml = serviceHtml.replace(
           /(<li style="margin-top: 1\.5rem;.*?Local to Woodbridge VA\?.*?<\/li>)/s,
           `$1\n            ${arlingtonServiceLink}`
         );
      } else {
         serviceHtml = serviceHtml.replace(
           /(<li><a href="\/faqs\/".*?<\/li>)/,
           `$1\n            ${arlingtonServiceLink}`
         );
      }
      fs.writeFileSync(servicePath, serviceHtml, 'utf-8');
    }
  }
}
console.log('Arlington internal links added.');
