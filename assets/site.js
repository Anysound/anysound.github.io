(function () {
  'use strict';

  var KEY = 'nb-lang';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function remember(v) {
    try { localStorage.setItem(KEY, v); } catch (e) { /* private mode, ignore */ }
  }

  function apply(lang) {
    root.setAttribute('lang', lang);
    var alt = root.getAttribute('data-title-' + lang);
    if (alt) document.title = alt;
    var btns = document.querySelectorAll('.lang button');
    for (var j = 0; j < btns.length; j++) {
      btns[j].setAttribute('aria-pressed', String(btns[j].dataset.set === lang));
    }
  }

  var initial = stored();
  if (!initial) {
    initial = (navigator.language || 'en').toLowerCase().indexOf('ru') === 0 ? 'ru' : 'en';
  }
  apply(initial);

  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.lang button') : null;
    if (!btn) return;
    apply(btn.dataset.set);
    remember(btn.dataset.set);
  });
})();
