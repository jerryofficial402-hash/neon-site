const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// The section we want to replace is between:
// id="servicesSlider">
// and
// </div>
// But we need to be careful with nested divs. Actually, there are no nested divs inside the <a> tags except the icon div.
// Let's just find all <!-- Service X --> ... </a> blocks using regex.

const cardRegex = /<!-- Service \d+ -->[\s\S]*?<\/a>/g;
let cards = [...content.matchAll(cardRegex)].map(m => m[0]);

if (cards.length === 0) {
    console.error("No cards found!");
    process.exit(1);
}

// Find the target cards by looking at their content
const targetTitles = ['Open Transport', 'Enclosed Transport', 'Door to Door Car Transport'];
let targetCards = [];
let otherCards = [];

// Iterate through the cards and categorize them
cards.forEach(card => {
    let matched = false;
    for (let i = 0; i < targetTitles.length; i++) {
        if (card.includes(`>${targetTitles[i]}</h4`)) {
            // Found one of the targets. Save it at the correct index to preserve the requested order.
            targetCards[i] = card;
            matched = true;
            break;
        }
    }
    if (!matched) {
        otherCards.push(card);
    }
});

// Re-number them for clean HTML (optional, but nice)
const allOrderedCards = [...targetCards.filter(Boolean), ...otherCards];
const renumberedCards = allOrderedCards.map((card, idx) => {
    return card.replace(/<!-- Service \d+ -->/, `<!-- Service ${idx + 1} -->`);
});

// Replace all old cards in the HTML string with the new ordered cards string
// The easiest way is to find the start of the first card and the end of the last card, and replace everything in between.

const firstCardIndex = content.indexOf(cards[0]);
const lastCardIndex = content.indexOf(cards[cards.length - 1]) + cards[cards.length - 1].length;

const beforeCards = content.substring(0, firstCardIndex);
const afterCards = content.substring(lastCardIndex);

// Add some nice spacing between cards
const newCardsHTML = renumberedCards.join('\n\n     ');

content = beforeCards + newCardsHTML + afterCards;

fs.writeFileSync('index.html', content);
console.log('Successfully reordered service cards!');
