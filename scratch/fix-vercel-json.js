const fs = require('fs');

let vercelConfig = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));

// 1. Remove all rewrites that map /state/ to /routes/state/
vercelConfig.rewrites = vercelConfig.rewrites.filter(r => !r.destination.startsWith('/routes/'));

// 2. Add redirects from /routes/state/ to /state/
const newRedirects = [
  { source: "/routes/:state-car-shipping.html", destination: "/:state-car-shipping/", permanent: true },
  { source: "/routes/:state-car-shipping/", destination: "/:state-car-shipping/", permanent: true }
];

// 3. Update the existing /state/:state redirects to point directly to /state-car-shipping/ instead of /routes/
vercelConfig.redirects = vercelConfig.redirects.map(r => {
  if (r.destination === '/routes/:state-car-shipping/') {
    r.destination = '/:state-car-shipping/';
  }
  return r;
});

// Add the new redirects
vercelConfig.redirects.push(...newRedirects);

fs.writeFileSync('vercel.json', JSON.stringify(vercelConfig, null, 2));
console.log('vercel.json updated successfully!');
