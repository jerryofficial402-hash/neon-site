const fs = require('fs');

function fixMenuJS(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Replace the menu toggle logic
  const oldJS = /mobileMenuBtn\.addEventListener\('click', \(\) => \{\s*mobileMenu\.classList\.toggle\('hidden'\);\s*\}\);/g;
  const newJS = "mobileMenuBtn.addEventListener('click', () => { if(mobileMenu.style.display === 'none' || mobileMenu.classList.contains('hidden')) { mobileMenu.classList.remove('hidden'); mobileMenu.style.display = 'flex'; } else { mobileMenu.style.display = 'none'; } });";
  
  if (oldJS.test(content)) {
    content = content.replace(oldJS, newJS);
    fs.writeFileSync(file, content);
    console.log('Fixed ' + file);
  } else {
    console.log('Not found in ' + file);
  }
}

fixMenuJS('index.html');
fixMenuJS('services/open-auto-transport.html');
