// Homepage: "how it works" journey animation, hero quick-quote hand-off to the full calculator,
// and arrows for the service photo cards. No dependencies.
(function () {
  // ---------- 3D journey fly-through ----------
  var root = document.querySelector('.nx-j3');
  if (root) {
    var cam = root.querySelector('.nx-j3-cam');
    var devs = [].slice.call(root.querySelectorAll('.nx-j3-dev'));
    var truck = root.querySelector('.nx-j3-truck');
    var hud = root.querySelector('.nx-j3-hud');
    var bars = [].slice.call(root.querySelectorAll('.nx-j3-progress i'));
    var items = [].slice.call(document.querySelectorAll('.nx-jr-steps li'));
    var playBtn = root.querySelector('.nx-j3-play');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var X = devs.map(function (d) { return parseFloat(d.style.getPropertyValue('--x')) || 0; });
    var TY = -215, TZ = -260, DIST = 470, TILT = -9, YAW = -13;
    var DRIVE = 2300, DWELL = 5200;
    var step = 0, playing = !reduce, visible = false, started = false, timer = null;
    var camX = X[0] - 900, tween = null, t0 = performance.now();

    function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function frame(now) {
      var sway = 0, k = 0;
      if (tween) {
        k = Math.min(1, (now - tween.start) / tween.dur);
        camX = tween.from + (tween.to - tween.from) * ease(k);
        sway = Math.sin(Math.PI * k) * (tween.to > tween.from ? 9 : -9);
        if (k >= 1) { var cb = tween.done; tween = null; root.classList.remove('is-moving'); if (cb) cb(); }
      }
      var idle = reduce ? 0 : Math.sin((now - t0) / 2600) * 1.6;
      cam.style.transform = 'translateZ(' + (-DIST) + 'px) rotateX(' + TILT + 'deg) rotateY(' + (YAW + sway + idle) + 'deg) translate3d(' + (-camX) + 'px,' + (-TY) + 'px,' + (-TZ) + 'px)';
      truck.style.setProperty('--x', (camX + (window.innerWidth < 900 ? 140 : 330)) + 'px');
      if (visible || tween) raf = requestAnimationFrame(frame); else raf = null;
    }
    var raf = null;
    function loop() { if (!raf) raf = requestAnimationFrame(frame); }
    function fly(to, dur, done) {
      if (reduce) { camX = to; loop(); if (done) done(); return; }
      tween = { from: camX, to: to, start: performance.now(), dur: dur, done: done };
      root.classList.add('is-moving'); loop();
    }
    function show(i) {
      devs.forEach(function (d, k) { d.classList.remove('is-active'); });
      void root.offsetWidth;
      devs[i].classList.add('is-active');
      var li = items[i];
      hud.querySelector('.nx-j3-num').textContent = i + 1;
      hud.querySelector('b').textContent = li.querySelector('b').textContent;
      hud.querySelector('p').textContent = li.querySelector('.nx-jr-t').textContent;
      hud.classList.remove('is-out');
      bars.forEach(function (b, k) { b.classList.toggle('is-done', k < i); b.classList.remove('is-on'); });
      void root.offsetWidth;
      root.style.setProperty('--dwell', DWELL + 'ms');
      if (playing) bars[i].classList.add('is-on'); else bars[i].classList.add('is-done');
      items.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
      root.setAttribute('data-step', i);
    }
    function clear() { clearTimeout(timer); timer = null; }
    function go(i) {
      clear(); step = i;
      fly(X[i], DRIVE, function () { show(i); if (playing && visible) timer = setTimeout(next, DWELL); });
    }
    function next() {
      if (step < devs.length - 1) return go(step + 1);
      clear(); hud.classList.add('is-out');
      devs.forEach(function (d) { d.classList.remove('is-active'); });
      fly(X[0] - 700, 2600, function () { go(0); });
    }
    function setPlaying(p) {
      playing = p;
      root.classList.toggle('is-paused', !p);
      playBtn.setAttribute('aria-label', p ? 'Pause animation' : 'Play animation');
      clear();
      if (p && visible && !tween) timer = setTimeout(next, 1500);
    }
    playBtn.addEventListener('click', function () { setPlaying(!playing); });
    items.forEach(function (li, k) {
      li.querySelector('button').addEventListener('click', function () { setPlaying(false); go(k); });
    });
    function start() { if (started) return; started = true; visible = true; loop(); go(0); }
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
      visible = es[0].isIntersecting;
      if (visible && !started) start();
      else if (visible) { loop(); if (playing && !timer && !tween) timer = setTimeout(next, 1200); }
      else clear();
    }, { threshold: 0.3 }) : null;
    if (io) io.observe(root);
    var check = function () {
      var r = root.getBoundingClientRect(), h = window.innerHeight || document.documentElement.clientHeight;
      var inView = r.top < h * 0.8 && r.bottom > h * 0.2;
      if (inView && !started) start();
    };
    window.addEventListener('scroll', check, { passive: true });
    if (reduce) root.classList.add('is-paused');
    loop(); check();
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
