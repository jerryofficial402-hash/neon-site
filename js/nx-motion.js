// Subtle scroll-in for homepage blocks. Only elements that start below the fold animate (no layout shift:
// transform/opacity only). Skipped entirely for prefers-reduced-motion and when IntersectionObserver is missing.
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var sel = '.nx-sec-head, .nx-card, .nx-chip, .nx-table-card, .nx-track, .nx-trust-item, #how-it-works .stripe-card, #popular-routes a.group, #blog article, #faqs .faq-btn';
  var els = [].slice.call(document.querySelectorAll(sel));
  var fold = window.innerHeight;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('nx-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach(function (el, i) {
    if (el.getBoundingClientRect().top < fold) return; // already on screen at load: leave it alone
    el.classList.add('nx-will');
    el.style.transitionDelay = (i % 4) * 60 + 'ms';   // small stagger within a row
    io.observe(el);
  });
})();
