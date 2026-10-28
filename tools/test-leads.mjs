// End-to-end check of the lead forms against the local preview (tools/serve.mjs).
// /api/leads is mocked by the preview server; Web3Forms is intercepted here and never contacted.
// node tools/test-leads.mjs [baseUrl] [calculator page paths...]
import puppeteer from 'puppeteer';

const base = process.argv[2] || 'http://localhost:4173';
const calcPages = process.argv.slice(3).length ? process.argv.slice(3) : ['/', '/cost-calculator/', '/car-shipping-quote/'];
const b = await puppeteer.launch({ headless: true });
let failed = 0;

async function page() {
  const p = await b.newPage();
  await p.setViewport({ width: 1366, height: 900 });
  await p.setRequestInterception(true);
  const sent = { leads: [], web3: [] };
  p.on('request', r => {
    const u = r.url();
    if (/googletagmanager|google-analytics|doubleclick/.test(u)) return r.abort();
    if (u.includes('api.web3forms.com')) {
      sent.web3.push(r.postData());
      return r.respond({ status: 200, contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' }, body: '{"success":true}' });
    }
    if (u.includes('/api/leads')) sent.leads.push(r.postData());
    r.continue();
  });
  const errs = [];
  p.on('dialog', d => { errs.push('alert: ' + d.message()); d.dismiss(); });
  p.on('pageerror', e => errs.push(e.message));
  return { p, sent, errs };
}

function check(name, ok, detail = '') { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`); if (!ok) failed++; }

for (const path of calcPages) {
  const { p, sent, errs } = await page();
  try {
  await p.goto(base + path, { waitUntil: 'networkidle2' });
  if (!(await p.$('#advancedCalcForm'))) { check(`${path} has calculator`, false); await p.close(); continue; }
  await p.type('#pickupZip', '22191');
  await p.type('#deliveryZip', '75001');
  await p.waitForFunction(() => document.getElementById('distance').value, { timeout: 20000 }).catch(() => {});
  const distance = await p.$eval('#distance', e => e.value);
  check(`${path} distance auto-calculated`, !!distance, distance + ' mi');
  await p.$eval('#pickupDate', e => { e.value = '2026-12-01'; });
  const g = '.vehicle-group';
  await p.type(`${g} .vehicleYear`, '2020');
  await p.type(`${g} .vehicleMake`, 'Toyota');
  await p.type(`${g} .vehicleModel`, 'Camry');
  await p.click('#btnNextStep');
  await new Promise(r => setTimeout(r, 400));
  const step2 = await p.$eval('#step2', e => !e.classList.contains('hidden'));
  check(`${path} step 2 shown`, step2);
  const price = await p.$eval('#estimatedPriceField', e => e.value);
  check(`${path} price estimate filled`, !!price, price);
  await p.type('#firstName', 'Test');
  await p.type('#lastName', 'Preview');
  await p.type('#email', 'test@example.com');
  await p.type('#phone', '5555550100');
  await p.click('#advancedCalcForm [type="submit"]');
  await new Promise(r => setTimeout(r, 2500));
  const lead = sent.leads[0] ? JSON.parse(sent.leads[0]).fields : null;
  check(`${path} POST /api/leads`, !!lead);
  if (lead) {
    const need = ['firstName', 'lastName', 'email', 'phone', 'vehicleYear', 'vehicleMake', 'vehicleModel', 'pickupZip', 'deliveryZip', 'desiredPickupDate', 'transportType', 'source', 'estimatedPrice'];
    const missing = need.filter(k => !lead[k]);
    check(`${path} lead fields complete`, missing.length === 0, missing.length ? 'missing ' + missing : `${lead.firstName} ${lead.lastName}, ${lead.vehicleYear} ${lead.vehicleMake} ${lead.vehicleModel}, ${lead.pickupLocation} -> ${lead.dropoffLocation}, ${lead.estimatedPrice}`);
  }
  check(`${path} Web3Forms email sent`, sent.web3.length === 1);
  const success = await p.evaluate(() => document.body.innerText.includes('Quote Request Submitted'));
  check(`${path} success message`, success);
  check(`${path} no JS errors`, errs.length === 0, errs.join(' | '));
  } catch (e) { check(`${path} flow completes`, false, e.message.split('\n')[0]); }
  await p.close();
}

// Contact form (posts to /api/leads with keepalive, then submits to Web3Forms)
{
  const { p, sent, errs } = await page();
  await p.goto(base + '/contact/', { waitUntil: 'networkidle2' });
  await p.type('#name', 'Test Preview');
  await p.type('#email_address', 'test@example.com');
  await p.type('#phone_number', '5555550100');
  await p.type('#message', 'Local preview test, please ignore.');
  await Promise.all([p.waitForNavigation({ timeout: 8000 }).catch(() => {}), p.click('#contactForm [type="submit"]')]);
  await new Promise(r => setTimeout(r, 800));
  const lead = sent.leads[0] ? JSON.parse(sent.leads[0]).fields : null;
  check('/contact/ POST /api/leads', !!lead && lead.email === 'test@example.com' && !!lead.message, lead ? `${lead.firstName} ${lead.lastName}, source=${lead.source}` : '');
  check('/contact/ Web3Forms submit', sent.web3.length >= 1);
  check('/contact/ no JS errors', errs.length === 0, errs.join(' | '));
  await p.close();
}

await b.close();
console.log(failed ? `\n${failed} check(s) failed` : '\nAll lead checks passed');
process.exit(failed ? 1 : 0);
