// Homepage: "how it works" journey animation, hero quick-quote hand-off to the full calculator,
// and arrows for the service photo cards. No dependencies.
(function () {
  // ---------- Journey animation ----------
  var stage = document.querySelector('.nx-jr-stage');
  if (stage) {
    var truck = stage.querySelector('.nx-jr-truck');
    var bubble = stage.querySelector('.nx-jr-bubble');
    var stops = [].slice.call(stage.querySelectorAll('.nx-jr-stops li'));
    var items = [].slice.call(document.querySelectorAll('.nx-jr-steps li'));
    var playBtn = stage.querySelector('.nx-jr-play');
    var X = [10, 30, 50, 70, 90];
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var step = 0, playing = !reduce, visible = false, timer = null;
    var DRIVE = 2000, DWELL = 2600;

    function setText(i) {
      var li = items[i];
      bubble.querySelector('.nx-jr-num').textContent = i + 1;
      bubble.querySelector('b').textContent = li.querySelector('b').textContent;
      bubble.querySelector('p').textContent = li.querySelector('.nx-jr-t').textContent;
    }
    function mark(i) {
      stops.forEach(function (s, k) { s.classList.toggle('is-on', k === i); s.classList.toggle('is-done', k < i); });
      items.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
      stage.setAttribute('data-step', i);
    }
    function clear() { clearTimeout(timer); timer = null; }
    function go(i, instant) {
      clear();
      step = i;
      bubble.classList.add('is-out');
      if (instant || reduce) {
        truck.style.transition = 'none'; truck.style.left = X[i] + '%';
        void truck.offsetWidth; truck.style.transition = '';
        setText(i); mark(i); bubble.classList.remove('is-out');
        if (playing && visible) timer = setTimeout(next, DWELL);
        return;
      }
      stage.classList.add('is-moving');
      truck.style.left = X[i] + '%';
      timer = setTimeout(function () {
        stage.classList.remove('is-moving');
        setText(i); mark(i); bubble.classList.remove('is-out');
        if (playing && visible) timer = setTimeout(next, DWELL);
      }, DRIVE);
    }
    function next() {
      if (step < 4) return go(step + 1);
      // drive off the right edge, then come back in from the left
      clear(); bubble.classList.add('is-out'); stage.classList.add('is-moving');
      truck.style.left = '118%';
      timer = setTimeout(function () {
        truck.style.transition = 'none'; truck.style.left = '-20%';
        void truck.offsetWidth; truck.style.transition = '';
        stops.forEach(function (s) { s.classList.remove('is-on', 'is-done'); });
        go(0);
      }, DRIVE);
    }
    function setPlaying(p) {
      playing = p;
      stage.classList.toggle('is-paused', !p);
      playBtn.setAttribute('aria-label', p ? 'Pause animation' : 'Play animation');
      clear();
      if (p && visible) timer = setTimeout(next, 900);
    }
    playBtn.addEventListener('click', function () { setPlaying(!playing); });
    items.forEach(function (li, k) {
      li.querySelector('button').addEventListener('click', function () { setPlaying(false); go(k); });
    });
    // start at the left edge, drive to step 1 when the stage scrolls into view
    truck.style.transition = 'none'; truck.style.left = '-20%'; void truck.offsetWidth; truck.style.transition = '';
    if (reduce) { stage.classList.add('is-paused'); go(0, true); }
    var started = false;
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
      visible = es[0].isIntersecting;
      if (visible && !started) { started = true; go(0); }
      else if (visible && playing && !timer) timer = setTimeout(next, 900);
      else if (!visible) clear();
    }, { threshold: 0.35 }) : null;
    if (io) io.observe(stage);
    // fallback (no IntersectionObserver, or it never reports): check on scroll
    var check = function () {
      var r = stage.getBoundingClientRect(), h = window.innerHeight || document.documentElement.clientHeight;
      var inView = r.top < h * 0.8 && r.bottom > h * 0.2;
      if (inView && !started) { visible = true; started = true; go(0); }
      else if (!io) { visible = inView; if (!inView) clear(); else if (playing && !timer) timer = setTimeout(next, 900); }
    };
    window.addEventListener('scroll', check, { passive: true });
    check();
  }

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

  // ---------- Service cards arrows ----------
  var track = document.querySelector('.nx-svc-track');
  if (track) {
    var by = function (d) { var c = track.querySelector('.nx-svc-card'); track.scrollBy({ left: d * ((c ? c.offsetWidth : 600) + 18), behavior: 'smooth' }); };
    var p = document.querySelector('.nx-svc-prev'), n = document.querySelector('.nx-svc-next');
    if (p) p.addEventListener('click', function () { by(-1); });
    if (n) n.addEventListener('click', function () { by(1); });
  }
})();
