// Homepage redesign (Tesla-style): full-bleed HD hero with a 3-field quick quote, original "how it works"
// animation, large photo service cards, and the full quote calculator in its own #quote section.
// Uses tools/partials/home-hero.html, home-journey.html, home-services.html. Run once on index.html.
import fs from 'node:fs';

const F = 'index.html';
let h = fs.readFileSync(F, 'utf8');
if (h.includes('class="nx-th"')) { console.log('already applied'); process.exit(0); }
const part = n => fs.readFileSync(`tools/partials/${n}`, 'utf8').replace(/\s+$/, '');

// 1) hero: pull the full quote card out, then replace the whole hero section
const hs = h.indexOf('<section class="relative pt-28');
const he = h.indexOf('</section>', hs) + '</section>'.length;
if (hs < 0 || !h.slice(hs, he).includes('id="hero-section"')) throw new Error('hero not found');
const hero = h.slice(hs, he);
const cs = hero.indexOf('<div class="stripe-card p-6 lg:p-8 w-full shadow-2xl');
const ce = hero.indexOf('</form>', cs) + '</form>'.length;
const card = hero.slice(cs, ce) + '\n      </div>';
if (cs < 0 || !card.includes('id="advancedCalcForm"')) throw new Error('quote card not found');
h = h.slice(0, hs) + part('home-hero.html').trimStart() + h.slice(he);

// 2) how-it-works -> journey animation + services cards + full quote section
const quote = `  <section id="quote" class="nx-quote-sec" aria-labelledby="quote-h">
   <div class="nx-wrap nx-quote-in">
    <div class="nx-quote-text">
     <p class="nx-eyebrow">Free quote</p>
     <h2 id="quote-h">Get your exact car shipping quote</h2>
     <p>Enter your route and vehicle to see an estimate, then add your contact details and a Neon specialist confirms pickup dates and the final price. No deposit, no obligation.</p>
     <ul class="nx-quote-points"><li>$0 upfront deposit</li><li>FMCSA-registered carriers only</li><li>$500,000 cargo insurance</li><li>Direct driver contact during transit</li></ul>
     <p class="nx-quote-call">Prefer to talk? <a href="tel:+15715767711">(571) 576-7711</a></p>
    </div>
    <div class="nx-quote-box">
      ${card.trim()}
    </div>
   </div>
  </section>`;
const ws = h.indexOf('<section id="how-it-works"');
const we = h.indexOf('</section>', ws) + '</section>'.length;
if (ws < 0) throw new Error('how-it-works not found');
h = h.slice(0, ws) + part('home-journey.html').trimStart() + '\n\n' + part('home-services.html') + '\n\n' + quote + h.slice(we);

// 3) remove the old services grid section (now shown as photo cards above)
const os = h.indexOf('<section id="services" class="nx-section">');
if (os > 0) { const oe = h.indexOf('</section>', os) + '</section>'.length; h = h.slice(0, os).replace(/\s+$/, '\n\n  ') + h.slice(oe).replace(/^\s+/, ''); }

// 4) preload: HD hero photo already preloaded; add the journey script (deferred) before </body>
if (!h.includes('/js/journey.js')) h = h.replace('</body>', ' <script src="/js/journey.js?v=20261120" defer></script>\n</body>');

fs.writeFileSync(F, h);
console.log('homepage redesigned:', ['nx-th', 'nx-jr', 'nx-svc', 'nx-quote-sec', 'advancedCalcForm'].map(k => k + '=' + (h.split(k).length - 1)).join(' '));
