// Build: npx tailwindcss -c tools/tailwind.config.cjs -i css/input.css -o css/tailwind.css
module.exports = {
  content: ['./*.html', './!(node_modules|scratch|scripts|tools|.agents)/**/*.html', './js/*.js'],
  theme: { extend: {} },
  plugins: [],
};
