/* THE COZY BOX SHOP, interactions */
(function () {
  'use strict';

  // ---- sticky nav shadow ----
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- mobile menu ----
  var burger = document.querySelector('.hamburger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.classList.toggle('open', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  }

  // ---- scroll reveal ----
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // ---- product filter chips ----
  var chips = document.querySelectorAll('.chip[data-filter]');
  var products = document.querySelectorAll('.prod[data-cat]');
  if (chips.length && products.length) {
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('active'); });
        chip.classList.add('active');
        var f = chip.getAttribute('data-filter');
        products.forEach(function (p) {
          var show = f === 'all' || p.getAttribute('data-cat') === f;
          p.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.faq-item');
      var ans = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : 0;
    });
  });

  // ---- contact / order form ----
  var WHATSAPP = '18298127667'; // +1 (829) 812-7667
  var form = document.getElementById('orderForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = form.querySelector('.form-success');
      if (ok) ok.classList.add('show');
      var data = new FormData(form);
      var msg = 'Hello! I would love to order from The Cozy Box Shop.%0A%0A' +
        'Name: ' + encodeURIComponent(data.get('name') || '') + '%0A' +
        'Box: ' + encodeURIComponent(data.get('box') || '') + '%0A' +
        'Message: ' + encodeURIComponent(data.get('message') || '');
      setTimeout(function () {
        window.open('https://wa.me/' + WHATSAPP + '?text=' + msg, '_blank');
      }, 600);
      form.reset();
    });
  }

  // ---- newsletter ----
  document.querySelectorAll('.nl-form').forEach(function (nl) {
    nl.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = nl.querySelector('input');
      if (input && input.value) {
        input.value = '';
        input.placeholder = 'Thank you, you are on the list! ✦';
      }
    });
  });

  // ---- footer year ----
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
