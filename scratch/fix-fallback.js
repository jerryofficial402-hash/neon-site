const fs = require('fs');
const path = require('path');
const dir = 'routes/city';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
const fallbackImg = 'https://images.unsplash.com/photo-1577943203833-841ae6223c24?auto=format&fit=crop&w=1200&q=60';
const regex = /https:\/\/image\.pollinations\.ai[^"']+/g;
let c = 0;
for(let f of files) {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  if(regex.test(content)) {
    fs.writeFileSync(p, content.replace(regex, fallbackImg), 'utf8');
    c++;
  }
}
console.log('Replaced ' + c + ' slow pollinations images with static fallback.');
