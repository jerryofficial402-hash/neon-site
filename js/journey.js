// Homepage: hero quick-quote hand-off to the full calculator,
// and arrows for the service photo cards. No dependencies.
(function () {
  // ---------- Hero quick quote -> full calculator on this page ----------
  var quick = document.querySelector('.nx-th-quote');
  var full = document.getElementById('advancedCalcForm');
  if (quick && full) {
    quick.addEventListener('submit', function (e) {
      if (!quick.checkValidity()) return;
      e.preventDefault();
      var set = function (id, v) {
        var el = document.getElementById(id);
        if (el && v) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); }
      };
      set('pickupZip', quick.elements.from.value.replace(/\D/g, '').slice(0, 5));
      set('deliveryZip', quick.elements.to.value.replace(/\D/g, '').slice(0, 5));
      var type = full.querySelector('.vehicle-group .vehicleType');
      if (type && [].some.call(type.options, function (o) { return o.value === quick.elements.vehicle.value; })) type.value = quick.elements.vehicle.value;
      var sec = document.getElementById('quote');
      (sec || full).scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' });
      setTimeout(function () { var y = document.querySelector('#advancedCalcForm .vehicleYear'); if (y) y.focus({ preventScroll: true }); }, 700);
    });
  }
  function reduceMotion() { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }

  // ---------- Scroll-in reveal for section heads and cards (homepage) ----------
  (function () {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var groups = ['.nx-jr .nx-sec-head', '.nx-jr-steps li', '.nx-svc .nx-sec-head', '.nx-svc-card'];
    var els = [];
    groups.forEach(function (sel) {
      [].forEach.call(document.querySelectorAll(sel), function (el, k) {
        var r = el.getBoundingClientRect();
        if (r.top < (window.innerHeight || 800)) return;          // already on screen: leave as is
        el.style.setProperty('--rv-d', (Math.min(k, 5) * 0.09) + 's');
        el.classList.add('nx-rv'); els.push(el);
      });
    });
    if (!els.length) return;
    var show = function (el) { el.classList.add('is-in'); };
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
    // fallback for browsers that throttle the observer (and a safety net so nothing stays hidden)
    var check = function () {
      var h = window.innerHeight || 800;
      els.forEach(function (el) { if (!el.classList.contains('is-in') && el.getBoundingClientRect().top < h * 0.95) show(el); });
    };
    window.addEventListener('scroll', check, { passive: true });
  })();

  // ---------- Service cards arrows ----------
  var track = document.querySelector('.nx-svc-track');
  if (track) {
    var by = function (d) { var c = track.querySelector('.nx-svc-card'); track.scrollBy({ left: d * ((c ? c.offsetWidth : 600) + 18), behavior: 'smooth' }); };
    var p = document.querySelector('.nx-svc-prev'), n = document.querySelector('.nx-svc-next');
    if (p) p.addEventListener('click', function () { by(-1); });
    if (n) n.addEventListener('click', function () { by(1); });
  }
})();
