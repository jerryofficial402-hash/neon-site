// Owner wants the full calculator back in the hero (as before), not a 3-field quick form.
// Moves the quote card from #quote into the hero in place of the quick form, removes the #quote
// section, and points "Get a Quote" links at the hero form.
import fs from 'node:fs';
const F = 'index.html';
let h = fs.readFileSync(F, 'utf8');
const qs = h.indexOf('<section id="quote" class="nx-quote-sec"');
if (qs < 0) { console.log('no #quote section (already moved?)'); process.exit(0); }
const qe = h.indexOf('</section>', qs) + '</section>'.length;
const sec = h.slice(qs, qe);
const cs = sec.indexOf('<div class="stripe-card p-6 lg:p-8 w-full shadow-2xl');
const fend = sec.indexOf('</form>', cs) + '</form>'.length;
const card = sec.slice(cs, sec.indexOf('</div>', fend) + '</div>'.length).trim();
if (!card.includes('id="advancedCalcForm"') || !card.trim().endsWith('</div>')) throw new Error('card extract failed');
// remove the #quote section (and the blank line before it)
h = h.slice(0, qs).replace(/\s+$/, '\n\n  ') + h.slice(qe).replace(/^\s+/, '');
// replace the quick form in the hero with the full card
const fs0 = h.indexOf('<form class="nx-th-quote"');
const fe = h.indexOf('</form>', fs0) + '</form>'.length;
if (fs0 < 0) throw new Error('quick form not found');
h = h.slice(0, fs0) + '<div class="nx-th-form" id="quote">\n      ' + card + '\n    </div>' + h.slice(fe);
h = h.split('href="#quote"').join('href="#quote"'); // anchor id kept on the hero form wrapper
fs.writeFileSync(F, h);
console.log('advancedCalcForm count:', h.split('id="advancedCalcForm"').length - 1, '| quick form left:', h.includes('nx-th-quote"'), '| #quote ids:', h.split('id="quote"').length - 1);
