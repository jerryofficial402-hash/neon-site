const fs = require('fs');
const path = require('path');

const vercelJsonPath = path.join(__dirname, '..', 'vercel.json');

let vercelJson = {};
if (fs.existsSync(vercelJsonPath)) {
  vercelJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
}

if (!vercelJson.redirects) {
  vercelJson.redirects = [];
}

const redirectRule = {
  "source": "/detail/:path*",
  "destination": "/",
  "permanent": true
};

// Check if it already exists
const exists = vercelJson.redirects.some(r => r.source === redirectRule.source);
if (!exists) {
  vercelJson.redirects.push(redirectRule);
  fs.writeFileSync(vercelJsonPath, JSON.stringify(vercelJson, null, 2), 'utf-8');
  console.log('Successfully injected /detail/ redirect into vercel.json');
} else {
  console.log('Redirect rule already exists in vercel.json');
}
