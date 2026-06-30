const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'styles.css');

const cssFix = `

/* --- Hotfix for missing Tailwind classes in author images --- */
.w-12 { width: 3rem !important; }
.h-12 { height: 3rem !important; }
.w-16 { width: 4rem !important; }
.h-16 { height: 4rem !important; }
.w-32 { width: 8rem !important; }
.h-32 { height: 8rem !important; }
.rounded-full { border-radius: 9999px !important; }
.object-cover { object-fit: cover !important; }
`;

if (fs.existsSync(cssPath)) {
  let content = fs.readFileSync(cssPath, 'utf-8');
  if (!content.includes('Hotfix for missing Tailwind classes')) {
    fs.appendFileSync(cssPath, cssFix, 'utf-8');
    console.log('CSS fix appended to styles.css');
  } else {
    console.log('CSS fix already exists.');
  }
} else {
  console.error('styles.css not found!');
}
