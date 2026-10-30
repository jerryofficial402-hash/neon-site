// Subtle scroll-in for homepage blocks (transform/opacity only, so no layout shift).
// No layout reads: IntersectionObserver's first report tells us what is already on screen (left alone) and
// what is below the fold (hidden, then revealed once). Starts after load, in idle time.
// Skipped for prefers-reduced-motion and when IntersectionObserver is missing.
(function () {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var SEL = '.nx-sec-head, .nx-card, .nx-chip, .nx-table-card, .nx-track, #how-it-works .stripe-card, #popular-routes a.group, #blog article';

  function start() {
    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i], el = e.target;
        if (!seen.has(el)) {            // first report for this element
          seen.add(el);
          if (e.isIntersecting) { io.unobserve(el); continue; }
          el.classList.add('nx-will');  // below the fold: hide until it scrolls in
          continue;
        }
        if (e.isIntersecting) { el.classList.add('nx-in'); io.unobserve(el); }
      }
    }, { rootMargin: '0px 0px -8% 0px' });
    var els = document.querySelectorAll(SEL);
    for (var i = 0; i < els.length; i++) io.observe(els[i]);
  }

  function idle() { (window.requestIdleCallback || function (f) { setTimeout(f, 200); })(start, { timeout: 2000 }); }
  if (document.readyState === 'complete') idle(); else window.addEventListener('load', idle, { once: true });
})();
