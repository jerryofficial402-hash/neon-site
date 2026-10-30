// One-time rewrite of css/theme.css: replaces substring/ancestor selectors with the marker classes added by
// tools/tag-theme.mjs. Each entry finds a rule by the start of its selector and replaces the whole rule.
import fs from 'node:fs';

const FILE = 'css/theme.css';
let css = fs.readFileSync(FILE, 'utf8');

function replaceRule(prefix, next) {
  const at = css.indexOf(prefix);
  if (at < 0) throw new Error('rule not found: ' + prefix.slice(0, 80));
  const open = css.indexOf('{', at);
  const close = css.indexOf('}', open);
  css = css.slice(0, at) + next + css.slice(close + 1);
}

const TXT_LIGHT = '.text-white, .text-slate-100, .text-slate-200, .text-gray-100, .text-gray-200';
const TXT_MUTED = '.text-slate-300, .text-slate-400, .text-gray-300, .text-gray-400, .text-\\[\\#8ba3ba\\], .text-\\[\\#cdd5df\\], .text-\\[\\#c9d6e3\\], .text-\\[\\#a1b0c0\\], .text-\\[\\#94a3b8\\]';
const TXT_CYAN = '.text-\\[\\#00d4ff\\], .text-\\[\\#00D4FF\\], .text-\\[\\#00d1ff\\], .text-\\[\\#00D1FF\\], .text-cyan-400, .text-cyan-300, .text-\\[\\#468de6\\], .text-\\[\\#39FF14\\], .text-\\[\\#39ff14\\]';
const DARK_SURF = '.nx-navy, .nx-overlay, .nx-fill, .nx-btn:not(.nx-btn-ghost), .btn-primary';

const rules = [
  // dark containers shown light
  [':is(section, div, aside, article, header:not(.nx-header)):is(', '.nx-flip { background: #fff !important; background-image: none !important; color: var(--nx-ink) !important; }'],
  [':is(div, aside, article):is(.bg-\\[\\#0a2540\\], .bg-\\[\\#1a385a\\]', '.nx-flip-card { background: var(--nx-soft) !important; border: 1px solid var(--nx-line) !important; }'],
  [':is(section, div)[class*="bg-[#0a2540]"] > .absolute.inset-0', '.nx-deco, .nx-flip > .absolute.inset-0 { display: none !important; }'],
  [':is([class*="bg-[#0a2540]"], .stripe-gradient-bg, [class*="from-[#0a2540]"]:not(.absolute), [style*="#0a2540"], .bg-slate-900, .bg-gray-900, .bg-black) :is(.text-white', `.nx-flip :is(${TXT_LIGHT}, [class*="text-white/"]):not([class*="bg-"]):not(a[class*="px-"]):not(button):not(a[class*="py-"]) { color: var(--nx-ink) !important; }`],
  [':is([class*="bg-[#0a2540]"], .stripe-gradient-bg, [class*="from-[#0a2540]"], [style*="#0a2540"], .bg-slate-900, .bg-gray-900) :is(.text-slate-300', `.nx-flip :is(${TXT_MUTED}):not([class*="bg-"]) { color: var(--nx-text) !important; }`],
  [':is([class*="bg-[#0a2540]"], .stripe-gradient-bg, [class*="from-[#0a2540]"], [style*="#0a2540"], .bg-slate-900, .bg-gray-900) :is(.text-\\[\\#00d4ff\\]', `.nx-flip :is(${TXT_CYAN}):not([class*="bg-"]) { color: var(--nx-blue) !important; }`],
  [':is([class*="bg-[#0a2540]"], .stripe-gradient-bg, [class*="from-[#0a2540]"], [style*="#0a2540"], .bg-slate-900, .bg-gray-900) :is(.bg-white\\/5', '.nx-flip :is(.bg-white\\/5, .bg-white\\/10, .bg-white\\/20) { background: #fff !important; border-color: var(--nx-line) !important; }'],
  [':is([class*="bg-[#0a2540]"], .stripe-gradient-bg, [class*="from-[#0a2540]"], [style*="#0a2540"], .bg-slate-900, .bg-gray-900) :is([class*="border-white"]', '.nx-flip :is(.border-white, .border-white\\/10, .border-white\\/20, .border-white\\/5, .border-slate-700, .border-slate-800, .border-\\[\\#1a385a\\]) { border-color: var(--nx-line) !important; }'],
  [':is([class*="bg-[#0a2540]"], .stripe-gradient-bg, [style*="#0a2540"]) a:is([class*="border-white"]', '.nx-flip a:is(.border-white, .border-2):not(.nx-fill) { color: var(--nx-ink) !important; background: #fff !important; border: 1px solid var(--nx-line) !important; }'],
  [':is([class*="bg-[#0a2540]"], .stripe-gradient-bg, [style*="#0a2540"]) :is(h1, h2, h3, h4, p, span, li, div)[style*="color: #fff"]', '.nx-flip :is(h1, h2, h3, h4, p, span, li, div)[style*="color:#fff"], .nx-flip :is(h1, h2, h3, h4, p, span, li, div)[style*="color: #fff"] { color: var(--nx-ink) !important; }'],
  // filled dark buttons
  [':is(a, button):is(.bg-\\[\\#0a2540\\], .bg-slate-900, .bg-gray-900, .bg-black, [style*=', '.nx-fill:is(.bg-\\[\\#0a2540\\], .bg-slate-900, .bg-gray-900, .bg-black, .bg-\\[\\#1a385a\\]) { background: var(--nx-navy) !important; color: #fff !important; border-color: var(--nx-navy) !important; }'],
  [':is(a, button):is(.bg-\\[\\#0a2540\\], .bg-slate-900, .bg-black) * {', '.nx-fill * { color: #fff !important; }'],
  [':is(a, button):is(.bg-\\[\\#39FF14\\], .bg-\\[\\#39ff14\\], .bg-\\[\\#635bff\\], .bg-\\[\\#468de6\\], .bg-\\[\\#00d4ff\\], .btn-primary) * {', '.btn-primary * { color: #fff !important; }'],
  [':is(a, button)[class*="bg-["]:is(.rounded-full', '.nx-fill:is(.rounded-full, .rounded-lg, .rounded-xl, .rounded-md, .rounded), .btn-primary { border-radius: var(--nx-radius) !important; }'],
  // tables
  ['table thead, table thead tr, thead[class*="bg-["], tr[class*="bg-[#0a2540]"], tr[class*="bg-[#468"] {', 'table thead, table thead tr, thead.nx-flip, tr.nx-flip, tr.bg-\\[\\#468de6\\] { background: var(--nx-soft) !important; }'],
  ['table thead th, thead[class*="bg-["] th {', 'table thead th { color: var(--nx-muted) !important; font: 400 12px/1.5 var(--nx-mono) !important; text-transform: uppercase; letter-spacing: .02em; }'],
  // purple gradient cards
  [':is(div, section, a, article)[class*="from-[#635bff]"]', '.nx-grad { background: var(--nx-soft) !important; background-image: none !important; border: 1px solid var(--nx-line) !important; color: var(--nx-ink) !important; }'],
  [':is([class*="from-[#635bff]"], [class*="from-[#4338ca]"], [class*="from-indigo-"], [class*="from-purple-"], [class*="from-violet-"]) :is(.text-white', '.nx-grad :is(.text-white, .text-white\\/80, .text-white\\/90, .text-white\\/70, .text-indigo-100, .text-indigo-200, .text-purple-100) { color: var(--nx-text) !important; }'],
  [':is([class*="from-[#635bff]"], [class*="from-[#4338ca]"], [class*="from-indigo-"]) :is(h2, h3, h4', '.nx-grad :is(h2, h3, h4, .text-3xl, .text-4xl, .text-5xl) { color: var(--nx-blue) !important; }'],
  // first section of every page
  [':is(main, body) > section:first-of-type:is(.pt-24, .pt-28, .pt-32, .pt-36, .pt-40, [class*="lg:pt-32"], [class*="lg:pt-40"]), #hero-section {\n  padding-top: calc(var(--nx-header-h) + 48px)', '.nx-hero:is(.pt-24, .pt-28, .pt-32, .pt-36, .pt-40, .lg\\:pt-32, .lg\\:pt-40), #hero-section {\n  padding-top: calc(var(--nx-header-h) + 48px) !important; padding-bottom: 72px !important;\n}'],
  [':is(main, body) > section:first-of-type:is(.pt-24, .pt-28, .pt-32, .pt-36, .pt-40, [class*="lg:pt-32"], [class*="lg:pt-40"]), #hero-section {\n    padding-top: calc(var(--nx-header-h) + 28px)', '.nx-hero:is(.pt-24, .pt-28, .pt-32, .pt-36, .pt-40, .lg\\:pt-32, .lg\\:pt-40), #hero-section {\n    padding-top: calc(var(--nx-header-h) + 28px) !important; padding-bottom: 48px !important;\n  }'],
  [':is(.stripe-card, div[class*="rounded"]):has(> #advancedCalcForm', '.nx-quote-card {\n  background: #fff !important; border: 1px solid #dde3eb !important; border-radius: 18px !important;\n  box-shadow: 0 1px 2px rgba(10, 25, 50, .05), 0 24px 48px -24px rgba(5, 60, 135, .28) !important;\n}'],
  ['.bg-\\[\\#f6f9fc\\] [class*="rounded-2xl"][class*="border"]', '.bg-\\[\\#f6f9fc\\] .rounded-2xl.border, .bg-\\[\\#f0f5fa\\] .rounded-2xl.border { background: #fff !important; }'],
  ['[class*="blur-["][class*="bg-[#39FF14]"]', '.nx-deco { display: none !important; }'],
  ['#hero-section, :is(main, body) > section:first-of-type { position', '#hero-section, .nx-hero { position: relative; isolation: isolate; }'],
  ['#hero-section::after, :is(main, body) > section:first-of-type::after {', '#hero-section::after, .nx-hero::after {\n  content: \'\'; position: absolute; inset: 0; z-index: -1; pointer-events: none;\n  background-image: radial-gradient(#d9e2ee 1px, transparent 1px); background-size: 22px 22px;\n  -webkit-mask-image: linear-gradient(to bottom, #000 0%, rgba(0,0,0,.6) 45%, transparent 90%); mask-image: linear-gradient(to bottom, #000 0%, rgba(0,0,0,.6) 45%, transparent 90%);\n}'],
  [':is(section, div, aside, article):is([class*="bg-slate-900/"]', '.nx-flip-card, .nx-flip:is(.border, [class*="rounded"]) { border-color: var(--nx-line) !important; }'],
  // brand surfaces that stay dark
  [':is(div, section, aside, article, span, p):is(.bg-\\[\\#468de6\\]', '.nx-navy { background-color: var(--nx-navy) !important; color: #fff !important; }'],
  [':is(.bg-\\[\\#468de6\\], .bg-\\[\\#468DE6\\], .bg-\\[\\#635bff\\], .bg-\\[\\#39FF14\\], .bg-\\[\\#39ff14\\], .bg-\\[\\#3273c5\\], .bg-\\[\\#0a5fb4\\], .bg-\\[\\#053c87\\], .bg-blue-600, .bg-blue-700, .bg-indigo-600, .bg-indigo-700, [class*="bg-black/', `:is(${DARK_SURF})\n  :is(h1, h2, h3, h4, p, span, li, div, strong, b, .text-white, [class*="text-white/"], .text-slate-200, .text-slate-300, .text-\\[\\#8ba3ba\\], .text-\\[\\#cdd5df\\]):not(#nx-a):not(#nx-b) { color: #fff !important; }`],
  [':is(.bg-\\[\\#468de6\\], .bg-\\[\\#635bff\\], .bg-\\[\\#39FF14\\], .bg-\\[\\#0a5fb4\\], .bg-blue-600) :is(.text-white\\/80', '.nx-navy :is(.text-white\\/80, .text-white\\/70, .text-slate-300, .text-\\[\\#8ba3ba\\], .text-\\[\\#cdd5df\\], p):not(#nx-a):not(#nx-b) { color: rgba(255, 255, 255, .82) !important; }'],
  [':is(.bg-\\[\\#468de6\\], .bg-\\[\\#635bff\\], .bg-\\[\\#39FF14\\], .bg-\\[\\#0a5fb4\\], .bg-blue-600) a.bg-white,', '.nx-navy a.bg-white, .nx-navy a.bg-white * { color: var(--nx-navy) !important; }'],
  [':is(table, thead, tbody, tr, td, th):is([class*="bg-slate-9"]', ':is(table, thead, tbody, tr, td, th).nx-flip { color: var(--nx-ink) !important; }'],
  [':is(thead, tr):is([class*="bg-[#0a2540]"], [class*="bg-slate-9"]) {', ':is(thead, tr).nx-flip { background: var(--nx-soft) !important; }'],
  [':is(table, tbody, tr)[class*="bg-slate"] :is(td, th)', ':is(table, tbody, tr).nx-flip :is(td, th), tbody.text-slate-200 td, tbody.text-slate-300 td { color: var(--nx-ink) !important; }'],
  [':is(.bg-\\[\\#468de6\\], .bg-\\[\\#635bff\\], .bg-\\[\\#39FF14\\], .bg-\\[\\#0a5fb4\\], .bg-blue-600) :is([class*="text-[rgba(255,255,255"]', '.nx-navy :is(.text-\\[\\#dbeafe\\], .text-blue-100):not(#nx-a):not(#nx-b), .nx-navy [class*="text-[rgba(255,255,255"]:not(#nx-a) { color: rgba(255, 255, 255, .85) !important; }'],
  ['tr:is([class*="bg-cyan"], [class*="bg-[#00d4ff]"], [class*="bg-[#0a2540]/"]', 'tr.nx-row-hl { background: var(--nx-blue-tint) !important; }'],
  ['tr:is([class*="bg-cyan"], [class*="bg-[#00d4ff]"], [class*="bg-slate-700"]) td', 'tr.nx-row-hl td { color: var(--nx-ink) !important; }'],
  ['a:is([class*="hover:bg-white"], [class*="bg-white/"], [class*="hover:bg-[rgba(255"]):not([class*="bg-[#"]):not([class*="bg-blue"]) {', '.nx-ghost {\n  color: var(--nx-ink) !important; background: #fff !important; border: 1px solid var(--nx-line) !important;\n}'],
  ['a:is([class*="hover:bg-white"], [class*="bg-white/"], [class*="hover:bg-[rgba(255"]):not([class*="bg-[#"]) *', '.nx-ghost * { color: var(--nx-ink) !important; }'],
  ['[class*="bg-black/"]:is(.rounded-full, [class*="rounded-"]):not(.absolute):not(.fixed) {', '.nx-pill-tint { background: var(--nx-blue-tint) !important; color: var(--nx-blue) !important; border-color: var(--nx-blue-line) !important; }'],
  ['[class*="bg-black/"]:is(.rounded-full, [class*="rounded-"]):not(.absolute):not(.fixed) *', '.nx-pill-tint * { color: var(--nx-blue) !important; }'],
  [':is(.bg-\\[\\#468de6\\], .bg-\\[\\#468DE6\\], .bg-\\[\\#635bff\\], .bg-\\[\\#39FF14\\], .bg-\\[\\#39ff14\\], .bg-\\[\\#0a5fb4\\], .bg-\\[\\#053c87\\], .bg-blue-600, .bg-blue-700) a:is(', '.nx-navy :is(.nx-ghost, a.border-white, a.border-2):not(#nx-a):not(#nx-b) {\n  background: transparent !important; color: #fff !important; border: 1px solid rgba(255, 255, 255, .55) !important;\n}'],
  [':is(.bg-\\[\\#468de6\\], .bg-\\[\\#635bff\\], .bg-\\[\\#39FF14\\], .bg-\\[\\#0a5fb4\\], .bg-blue-600) a:is([class*="hover:bg-white"], [class*="border-white"]):hover', '.nx-navy :is(.nx-ghost, a.border-white):hover:not(#nx-a):not(#nx-b) { background: rgba(255, 255, 255, .12) !important; }'],
  ['main:is(.bg-\\[\\#0a2540\\]', 'main.nx-flip { background: #fff !important; }'],
  [':is(main, body) > section:first-of-type > :is(.container, [class*="max-w-7xl"]', '.nx-hero-wrap {\n  max-width: var(--nx-page) !important; padding-left: var(--nx-gutter) !important; padding-right: var(--nx-gutter) !important; margin-left: auto !important; margin-right: auto !important;\n}'],
  [':is(main, body) > section:first-of-type :is(.lg\\:w-1\\/2, [class*="lg:col-span"]) > h1', '.nx-hero .lg\\:w-1\\/2 h1, .nx-hero [class*="lg:col-span"] > h1 { max-width: 16ch; }'],
  [':is(main, body) > section:first-of-type img {', '.nx-hero img { border-radius: 14px; }'],
  ['  :is(main, body) > section:first-of-type:not(#hero-section) :is(.lg\\:flex-row, [class*="lg:grid-cols"]).items-center {', '  .nx-hero:not(#hero-section) :is(.lg\\:flex-row, .lg\\:grid-cols-2, .lg\\:grid-cols-12).items-center { align-items: flex-start !important; }'],
  ['  :is(main, body) > section:first-of-type:not(#hero-section) :is(.lg\\:flex-row, [class*="lg:grid-cols"]).items-center > :not(:first-child)', '  .nx-hero:not(#hero-section) :is(.lg\\:flex-row, .lg\\:grid-cols-2, .lg\\:grid-cols-12).items-center > :not(:first-child) { position: sticky; top: calc(var(--nx-header-h) + 24px); }'],
];
for (const [prefix, next] of rules) replaceRule(prefix, next);
fs.writeFileSync(FILE, css);
const left = (css.match(/\[class\*=/g) || []).length;
console.log('rules replaced:', rules.length, '| [class*=] selectors left:', left, '| :has left:', (css.match(/:has\(/g) || []).length);
