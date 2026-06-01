/* Hush Hush Tan — theme.js
   Minimal, accessible, no dependencies. */
(function () {
  'use strict';

  // Mobile drawer
  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-drawer-open]');
    var closeBtn = e.target.closest('[data-drawer-close]');
    if (openBtn) {
      var drawer = document.querySelector(openBtn.getAttribute('data-drawer-open'));
      if (drawer) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    }
    if (closeBtn) {
      var d = closeBtn.closest('.drawer') || document.querySelector(closeBtn.getAttribute('data-drawer-close'));
      if (d) {
        d.classList.remove('is-open');
        d.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
    // close on backdrop
    if (e.target.classList && e.target.classList.contains('drawer')) {
      e.target.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });

  // Pricing tabs
  document.querySelectorAll('[data-pricing-tabs]').forEach(function (root) {
    var tabs = root.querySelectorAll('[role="tab"]');
    var panels = root.querySelectorAll('[role="tabpanel"]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.classList.remove('is-active'); });
        tab.setAttribute('aria-selected', 'true');
        var target = root.querySelector('#' + tab.getAttribute('aria-controls'));
        if (target) target.classList.add('is-active');
      });
    });
  });

  // Product gallery
  document.querySelectorAll('[data-product-gallery]').forEach(function (root) {
    var main = root.querySelector('[data-gallery-main]');
    root.querySelectorAll('[data-gallery-thumb]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = thumb.getAttribute('data-src');
        if (main && src) {
          main.querySelector('img').src = src;
          root.querySelectorAll('[data-gallery-thumb]').forEach(function (t) { t.removeAttribute('aria-current'); });
          thumb.setAttribute('aria-current', 'true');
        }
      });
    });
  });

  // Product variant selection
  document.querySelectorAll('[data-product-json]').forEach(function (script) {
    var productRoot = script.closest('.container') || document;
    var form = productRoot.querySelector('.product__form');
    var idInput = form && form.querySelector('input[name="id"]');
    var variants;
    try {
      variants = JSON.parse(script.textContent || '[]');
    } catch (err) {
      variants = [];
    }
    if (!form || !idInput || !variants.length) return;

    function updateVariant() {
      var selected = [];
      form.querySelectorAll('.product__option').forEach(function (option) {
        var checked = option.querySelector('input[type="radio"]:checked');
        selected.push(checked ? checked.value : '');
        var label = option.querySelector('.product__option-label small');
        if (label && checked) label.textContent = checked.value;
      });
      var match = variants.find(function (variant) {
        return variant.options.every(function (value, index) {
          return value === selected[index];
        });
      });
      if (!match) return;
      idInput.value = match.id;
      form.querySelectorAll('button[type="submit"]').forEach(function (button) {
        button.disabled = !match.available;
      });
    }

    form.addEventListener('change', function (event) {
      if (event.target.matches('.product__option input[type="radio"]')) updateVariant();
    });
    updateVariant();
  });

  // Quantity stepper
  document.querySelectorAll('[data-qty]').forEach(function (root) {
    var input = root.querySelector('input');
    root.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var step = parseInt(btn.getAttribute('data-step'), 10) || 1;
        var v = Math.max(1, (parseInt(input.value, 10) || 1) + step);
        input.value = v;
      });
    });
  });

  function initHeroSliders() {
    document.querySelectorAll('[data-hero-slider]').forEach(function (root) {
      if (root.getAttribute('data-hero-initialized') === 'true') return;
      root.setAttribute('data-hero-initialized', 'true');

      var slides = root.querySelectorAll('.hero-slider__slide[data-hero-slide]');
      var dots = root.querySelectorAll('[data-hero-dot]');
      if (!slides.length) return;

      var index = 0;
      var timer = null;
      var delay = parseInt(root.getAttribute('data-autoplay'), 10) || 5000;
      var autoplay = !root.hasAttribute('data-autoplay-off') && slides.length > 1;

      function replayAnimations(slide) {
        slide.classList.remove('is-replay');
        void slide.offsetWidth;
        slide.classList.add('is-replay');
      }

      function goTo(i) {
        index = (i + slides.length) % slides.length;
        slides.forEach(function (slide, n) {
          var active = n === index;
          slide.classList.toggle('is-active', active);
          slide.setAttribute('aria-hidden', active ? 'false' : 'true');
          if (active) replayAnimations(slide);
        });
        dots.forEach(function (dot, n) {
          var active = n === index;
          dot.classList.toggle('is-active', active);
          dot.setAttribute('aria-selected', active ? 'true' : 'false');
        });
      }

      function next() {
        goTo(index + 1);
      }

      function start() {
        stop();
        if (autoplay) timer = window.setInterval(next, delay);
      }

      function stop() {
        if (timer !== null) {
          window.clearInterval(timer);
          timer = null;
        }
      }

      dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
          goTo(parseInt(dot.getAttribute('data-hero-dot'), 10) || 0);
          start();
        });
      });

      root.addEventListener('mouseenter', stop);
      root.addEventListener('mouseleave', start);
      root.addEventListener('focusin', stop);
      root.addEventListener('focusout', function (e) {
        if (!root.contains(e.relatedTarget)) start();
      });

      goTo(0);
      start();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSliders);
  } else {
    initHeroSliders();
  }

  document.addEventListener('shopify:section:load', initHeroSliders);

  // Newsletter inline confirmation message handled by Shopify natively.
})();
