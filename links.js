const fs = require('fs');
const content = fs.readFileSync('services/index.html', 'utf8');
const matches = content.match(/href=[\"'](.*?)[\"']/g);
if (matches) {
  const links = Array.from(new Set(matches.map(m => m.replace(/href=[\"']|[\"']/g, ''))));
  console.log(links.join('\n'));
}
