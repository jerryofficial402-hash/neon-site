// Builds the minified stylesheets the pages load. Edit css/theme.css, then run: node tools/build-css.mjs
import { execSync } from 'node:child_process';
execSync('npx tailwindcss -c tools/tailwind.config.cjs -i css/input.css -o css/tailwind.css --minify', { stdio: 'inherit' });
execSync('npx tailwindcss -i css/theme.css -o css/theme.min.css --minify', { stdio: 'inherit' });
