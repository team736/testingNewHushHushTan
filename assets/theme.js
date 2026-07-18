/* Hush Hush Tan — theme.js
   Minimal, accessible, no dependencies. */
(function () {
  'use strict';

  // Mobile drawer + desktop nav dropdowns
  function closeDrawer(drawer) {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    var toggle = document.querySelector('[data-drawer-open="#' + drawer.id + '"]');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer(drawer, toggle) {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    var closeBtn = drawer.querySelector('[data-drawer-close]');
    if (closeBtn) closeBtn.focus();
  }

  function closeAllNavDropdowns(except) {
    document.querySelectorAll('[data-nav-item].is-open').forEach(function (item) {
      if (item === except) return;
      item.classList.remove('is-open');
      var trigger = item.querySelector('[data-nav-trigger]');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('click', function (e) {
    var openBtn = e.target.closest('[data-drawer-open]');
    var closeBtn = e.target.closest('[data-drawer-close]');
    var drawerLink = e.target.closest('[data-drawer-link]');

    if (openBtn) {
      var drawer = document.querySelector(openBtn.getAttribute('data-drawer-open'));
      openDrawer(drawer, openBtn);
      return;
    }

    if (closeBtn) {
      var drawerFromClose = closeBtn.closest('.drawer');
      if (drawerFromClose) closeDrawer(drawerFromClose);
      return;
    }

    if (drawerLink) {
      var drawerFromLink = drawerLink.closest('.drawer');
      if (drawerFromLink) closeDrawer(drawerFromLink);
      return;
    }

    if (e.target.classList && e.target.classList.contains('drawer')) {
      closeDrawer(e.target);
      return;
    }

    var navTrigger = e.target.closest('[data-nav-trigger]');
    if (navTrigger) {
      // Linked parents (e.g. Our Services → /pages/our-services) navigate on click.
      // Dropdown still opens on hover via CSS.
      if (navTrigger.tagName === 'A') {
        var href = navTrigger.getAttribute('href');
        if (href && href !== '#' && !href.startsWith('javascript:')) {
          return;
        }
      }
      var item = navTrigger.closest('[data-nav-item]');
      if (!item) return;
      var willOpen = !item.classList.contains('is-open');
      closeAllNavDropdowns(item);
      item.classList.toggle('is-open', willOpen);
      navTrigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      return;
    }

    if (!e.target.closest('[data-nav-item]')) {
      closeAllNavDropdowns();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.drawer.is-open').forEach(closeDrawer);
    closeAllNavDropdowns();
  });

  document.querySelectorAll('[data-nav-item]').forEach(function (item) {
    var trigger = item.querySelector('[data-nav-trigger]');

    item.addEventListener('mouseenter', function () {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        closeAllNavDropdowns(item);
        item.classList.add('is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
      }
    });

    item.addEventListener('mouseleave', function () {
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        item.classList.remove('is-open');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
    });

    item.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      item.classList.remove('is-open');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });
  });

  // Pricing ecosystem (location + content tabs)
  document.querySelectorAll('[data-pricing-ecosystem]').forEach(function (root) {
    var locationTabs = root.querySelectorAll('[data-location-tab]');
    var locationPanels = root.querySelectorAll('[data-location-panel]');

    locationTabs.forEach(function (btn, index) {
      btn.addEventListener('click', function () {
        locationTabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        locationPanels.forEach(function (p) {
          p.classList.remove('is-active');
          p.hidden = true;
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        var panel = locationPanels[index];
        if (panel) {
          panel.classList.add('is-active');
          panel.hidden = false;
        }
        root.dispatchEvent(
          new CustomEvent('hht:location-change', { detail: { index: index }, bubbles: true })
        );
      });
    });

    locationPanels.forEach(function (panel) {
      var contentTabs = panel.querySelectorAll('[data-content-tab]');
      var contentPanels = panel.querySelectorAll('[data-content-panel]');
      contentTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var key = tab.getAttribute('data-content-tab');
          contentTabs.forEach(function (t) {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
          });
          contentPanels.forEach(function (p) { p.classList.remove('active'); });
          tab.classList.add('active');
          tab.setAttribute('aria-selected', 'true');
          var target = panel.querySelector('[data-content-panel="' + key + '"]');
          if (target) target.classList.add('active');
        });
      });
    });
  });

  // Product gallery
  document.querySelectorAll('[data-product-gallery]').forEach(function (root) {
    var main = root.querySelector('[data-gallery-main]');
    root.querySelectorAll('[data-gallery-thumb]').forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        var src = thumb.getAttribute('data-src');
        var srcset = thumb.getAttribute('data-srcset');
        if (main && src) {
          var img = main.querySelector('img');
          if (img) {
            img.src = src;
            if (srcset) img.setAttribute('srcset', srcset);
            else img.removeAttribute('srcset');
          }
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

      var slides = root.querySelectorAll('[data-hero-slide]');
      var dots = root.querySelectorAll('[data-hero-dot]');
      if (slides.length < 2) return;

      var index = 0;
      var timer = null;
      var delay = parseInt(root.getAttribute('data-autoplay'), 10) || 4500;
      var autoplay = !root.hasAttribute('data-autoplay-off');

      function goTo(i) {
        index = (i + slides.length) % slides.length;
        slides.forEach(function (slide, n) {
          var active = n === index;
          slide.classList.toggle('is-active', active);
          slide.setAttribute('aria-hidden', active ? 'false' : 'true');
        });
        dots.forEach(function (dot, n) {
          var active = n === index;
          dot.classList.toggle('is-active', active);
          dot.setAttribute('aria-selected', active ? 'true' : 'false');
        });
      }

      function next() { goTo(index + 1); }
      function prev() { goTo(index - 1); }

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

      var prevBtn = root.querySelector('[data-hero-prev]');
      var nextBtn = root.querySelector('[data-hero-next]');
      if (prevBtn) prevBtn.addEventListener('click', function () { prev(); start(); });
      if (nextBtn) nextBtn.addEventListener('click', function () { next(); start(); });

      root.addEventListener('mouseenter', stop);
      root.addEventListener('mouseleave', start);
      root.addEventListener('focusin', stop);
      root.addEventListener('focusout', function (e) {
        if (!root.contains(e.relatedTarget)) start();
      });

      var touchStartX = null;
      var touchStartY = null;
      var track = root.querySelector('[data-hero-track]');
      if (track) {
        track.addEventListener('touchstart', function (e) {
          if (!e.touches || !e.touches.length) return;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          stop();
        }, { passive: true });
        track.addEventListener('touchend', function (e) {
          if (touchStartX === null) return;
          var endX = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientX : touchStartX;
          var endY = (e.changedTouches && e.changedTouches[0]) ? e.changedTouches[0].clientY : touchStartY;
          var dx = endX - touchStartX;
          var dy = endY - touchStartY;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) next(); else prev();
          }
          touchStartX = null;
          touchStartY = null;
          start();
        }, { passive: true });
      }

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

  // Stitch FAQ accordion — one open at a time
  function initHhtAccordions() {
    document.querySelectorAll('[data-hht-accordion]').forEach(function (root) {
      if (root.getAttribute('data-hht-accordion-init') === 'true') return;
      root.setAttribute('data-hht-accordion-init', 'true');

      var items = root.querySelectorAll('[data-hht-accordion-item]');

      function setPanelHeight(item, open) {
        var panel = item.querySelector('.hht-stitch-faq__panel, .hht-glow-stitch__panel');
        if (!panel) return;
        if (open) {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          item.style.setProperty('--hht-faq-panel-h', panel.scrollHeight + 'px');
        } else {
          panel.style.maxHeight = '0';
        }
      }

      function closeItem(item) {
        item.classList.remove('is-open');
        var trigger = item.querySelector('.hht-stitch-faq__trigger, .hht-glow-stitch__trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        setPanelHeight(item, false);
      }

      function openItem(item) {
        items.forEach(closeItem);
        item.classList.add('is-open');
        var trigger = item.querySelector('.hht-stitch-faq__trigger, .hht-glow-stitch__trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
        setPanelHeight(item, true);
      }

      items.forEach(function (item) {
        if (item.classList.contains('is-open')) {
          setPanelHeight(item, true);
        }
        var trigger = item.querySelector('.hht-stitch-faq__trigger, .hht-glow-stitch__trigger');
        if (!trigger) return;
        trigger.addEventListener('click', function () {
          if (item.classList.contains('is-open')) {
            closeItem(item);
          } else {
            openItem(item);
          }
        });
      });

      window.addEventListener('resize', function () {
        items.forEach(function (item) {
          if (item.classList.contains('is-open')) {
            setPanelHeight(item, true);
          }
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHhtAccordions);
  } else {
    initHhtAccordions();
  }
  document.addEventListener('shopify:section:load', initHhtAccordions);

  // Glow Moments carousel — scroll snap, arrows, dots, autoplay
  function initHhtCarousels() {
    var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('[data-hht-carousel]').forEach(function (track) {
      if (track.getAttribute('data-hht-carousel-init') === 'true') return;
      track.setAttribute('data-hht-carousel-init', 'true');

      var wrap = track.closest('[data-hht-carousel-wrap]');
      if (!wrap) return;

      var prevBtn = wrap.querySelector('[data-hht-carousel-prev]');
      var nextBtn = wrap.querySelector('[data-hht-carousel-next]');
      var dotsRoot = wrap.querySelector('[data-hht-carousel-dots]');
      var cards = track.querySelectorAll('.hht-glow-stitch__card');
      var timer = null;
      var index = 0;
      var autoplayMs = parseInt(wrap.getAttribute('data-hht-carousel-autoplay'), 10);
      var autoplay = !reducedMotion && autoplayMs > 0;

      function getGap() {
        var styles = window.getComputedStyle(track);
        return parseFloat(styles.columnGap || styles.gap) || 20;
      }

      function getStep() {
        var card = cards[0];
        return card ? card.offsetWidth + getGap() : 320;
      }

      function getMaxIndex() {
        return Math.max(0, cards.length - 1);
      }

      function scrollToIndex(i, behavior) {
        index = Math.max(0, Math.min(i, getMaxIndex()));
        var left = index * getStep();
        track.scrollTo({ left: left, behavior: behavior || 'smooth' });
        updateDots();
      }

      function updateDots() {
        if (!dotsRoot) return;
        dotsRoot.querySelectorAll('[data-hht-carousel-dot]').forEach(function (dot, n) {
          dot.classList.toggle('is-active', n === index);
        });
      }

      function syncIndexFromScroll() {
        var step = getStep();
        if (!step) return;
        index = Math.round(track.scrollLeft / step);
        index = Math.max(0, Math.min(index, getMaxIndex()));
        updateDots();
      }

      function next(behavior) {
        if (index >= getMaxIndex()) {
          scrollToIndex(0, behavior);
        } else {
          scrollToIndex(index + 1, behavior);
        }
      }

      function prev(behavior) {
        if (index <= 0) {
          scrollToIndex(getMaxIndex(), behavior);
        } else {
          scrollToIndex(index - 1, behavior);
        }
      }

      function startAutoplay() {
        stopAutoplay();
        if (!autoplay) return;
        timer = window.setInterval(function () { next('smooth'); }, autoplayMs);
      }

      function stopAutoplay() {
        if (timer !== null) {
          window.clearInterval(timer);
          timer = null;
        }
      }

      if (dotsRoot && cards.length > 1) {
        dotsRoot.innerHTML = '';
        cards.forEach(function (_, n) {
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'hht-glow-stitch__carousel-dot' + (n === 0 ? ' is-active' : '');
          dot.setAttribute('data-hht-carousel-dot', String(n));
          dot.setAttribute('aria-label', 'Go to card ' + (n + 1));
          dot.addEventListener('click', function () {
            scrollToIndex(n);
            startAutoplay();
          });
          dotsRoot.appendChild(dot);
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', function () {
          prev('smooth');
          startAutoplay();
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', function () {
          next('smooth');
          startAutoplay();
        });
      }

      track.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev('smooth'); startAutoplay(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); next('smooth'); startAutoplay(); }
      });

      var scrollTimer;
      track.addEventListener('scroll', function () {
        window.clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout(syncIndexFromScroll, 80);
      }, { passive: true });

      wrap.addEventListener('mouseenter', stopAutoplay);
      wrap.addEventListener('mouseleave', startAutoplay);
      wrap.addEventListener('focusin', stopAutoplay);
      wrap.addEventListener('focusout', function (e) {
        if (!wrap.contains(e.relatedTarget)) startAutoplay();
      });

      window.addEventListener('resize', function () {
        scrollToIndex(index, 'auto');
      });

      scrollToIndex(0, 'auto');
      startAutoplay();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHhtCarousels);
  } else {
    initHhtCarousels();
  }
  document.addEventListener('shopify:section:load', initHhtCarousels);

  // Newsletter inline confirmation message handled by Shopify natively.
})();
