const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'styles.css');

const cssFix = `

/* --- Hotfix: Add padding to footer instead of body on mobile to prevent white space below footer --- */
@media (max-width: 1024px) {
  footer {
    padding-bottom: 80px !important;
  }
}
`;

if (fs.existsSync(cssPath)) {
  let content = fs.readFileSync(cssPath, 'utf-8');
  if (!content.includes('padding to footer instead of body')) {
    fs.appendFileSync(cssPath, cssFix, 'utf-8');
    console.log('CSS fix appended to styles.css');
  } else {
    console.log('CSS fix already exists.');
  }
} else {
  console.error('styles.css not found!');
}
