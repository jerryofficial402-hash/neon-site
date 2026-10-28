// Click-to-load YouTube: shows the thumbnail until the visitor presses play (saves ~2.5 MB of player JS).
document.addEventListener('click', function (e) {
  var btn = e.target.closest('.nx-yt');
  if (!btn) return;
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube.com/embed/' + btn.dataset.id + '?autoplay=1';
  f.title = btn.getAttribute('aria-label') || 'YouTube video';
  f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  f.allowFullscreen = true;
  f.className = btn.dataset.cls || '';
  f.style.cssText = 'width:100%;height:100%;border:0';
  btn.replaceWith(f);
});
