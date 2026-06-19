const fs = require('fs');
const path = require('path');

const scriptToInject = `
    <script>
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if(mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Scroll Reveal
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 50;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('active');
                }
            }
        }
        window.addEventListener('scroll', reveal);
        // Trigger once on load
        reveal();
    </script>
`;

function processDir(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (entry.name === 'node_modules' || entry.name === '.git') continue;
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            processDir(fullPath);
        } else if (entry.isFile() && fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (!content.includes('function reveal()')) {
                // Check if there is already a mobile menu script to avoid duplicates
                if (content.includes('mobileMenuBtn.addEventListener')) {
                     // Just replace the closing body tag
                     console.log('Skipping ' + fullPath + ' (partial script present?)');
                     continue;
                }

                // Inject right before </body>
                if (content.includes('</body>')) {
                    content = content.replace('</body>', scriptToInject + '</body>');
                    fs.writeFileSync(fullPath, content);
                    console.log('Fixed ' + fullPath);
                }
            }
        }
    }
}

processDir(path.join(__dirname, '..'));
console.log('All missing scripts injected!');
