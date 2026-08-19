/**
 * China EV Brands — Motion System, Interactive Canvas & Visual Effects
 * Zero-dependency standalone engine for LoLyeah Compendium
 */

(function () {
  'use strict';

  // 1. Language switcher logic & persistence
  var validLangs = ['en', 'id'];
  var requestedLang = localStorage.getItem('lolyeah_lang') || 'en';
  var initialLang = validLangs.indexOf(requestedLang) >= 0 ? requestedLang : 'en';

  window.setLanguage = function (lang) {
    var next = validLangs.indexOf(lang) >= 0 ? lang : 'en';
    document.body.classList.remove('lang-en', 'lang-id');
    document.body.classList.add('lang-' + next);
    document.documentElement.lang = next;
    validLangs.forEach(function (code) {
      var button = document.getElementById('btn-' + code);
      if (button) {
        button.classList.toggle('active', code === next);
        button.setAttribute('aria-pressed', String(code === next));
      }
    });
    localStorage.setItem('lolyeah_lang', next);
  };
  setLanguage(initialLang);

  // 2. Reading progress bar
  var progressBar = document.getElementById('reading-progress');
  function updateReadingProgress() {
    if (!progressBar) return;
    var totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = Math.min(Math.max(progress, 0), 100) + '%';
  }
  if (progressBar) {
    window.addEventListener('scroll', updateReadingProgress, { passive: true });
    updateReadingProgress();
  }

  // 3. Ambient Particle Canvas Animation
  var canvas = document.getElementById('ev-canvas');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext('2d');
    var particles = [];
    var animationFrameId = null;
    var isTabVisible = !document.hidden;

    // Color palette matching editorial brand identity
    var palette = [
      'rgba(8, 123, 112, ',   // Teal
      'rgba(201, 65, 50, ',   // Coral / Red Accent
      'rgba(173, 116, 40, ',  // Warm Gold
      'rgba(102, 80, 131, ',  // Violet
      'rgba(6, 182, 212, '    // Cyan
    ];

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function Particle() {
      this.reset(true);
    }

    Particle.prototype.reset = function (initial) {
      this.x = Math.random() * (canvas.width || window.innerWidth);
      this.y = initial ? Math.random() * (canvas.height || window.innerHeight) : (canvas.height + 10);
      this.size = Math.random() * 2.2 + 0.8;
      this.speedX = (Math.random() - 0.5) * 0.35;
      this.speedY = -(Math.random() * 0.35 + 0.15);
      this.colorPrefix = palette[Math.floor(Math.random() * palette.length)];
      this.baseAlpha = Math.random() * 0.28 + 0.12;
      this.alpha = this.baseAlpha;
      this.pulseSpeed = Math.random() * 0.015 + 0.005;
      this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
    };

    Particle.prototype.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap horizontal
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;

      // Wrap vertical
      if (this.y < -10) {
        this.y = canvas.height + 10;
        this.x = Math.random() * canvas.width;
      }

      // Gentle pulsing
      this.alpha += this.pulseSpeed * this.pulseDirection;
      if (this.alpha >= this.baseAlpha * 1.5) {
        this.pulseDirection = -1;
      } else if (this.alpha <= this.baseAlpha * 0.5) {
        this.pulseDirection = 1;
      }
    };

    Particle.prototype.draw = function () {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorPrefix + Math.max(0, Math.min(this.alpha, 1)) + ')';
      ctx.fill();
    };

    function initParticles() {
      particles = [];
      var count = Math.min(Math.floor((canvas.width * canvas.height) / 24000), 65);
      for (var i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function renderLoop() {
      if (!isTabVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(renderLoop);
    }

    resizeCanvas();
    initParticles();
    renderLoop();

    window.addEventListener('resize', function () {
      resizeCanvas();
      initParticles();
    }, { passive: true });

    document.addEventListener('visibilitychange', function () {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationFrameId) {
        renderLoop();
      }
    });
  }

  // 4. Scroll Reveal Motion System
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealSelector = [
      '.section-heading-wrap',
      '.directory-banner',
      '.subpage-card',
      '.metric-card',
      '.stat-card',
      '.group-block',
      '.brand-unit-card',
      '.holding-card',
      '.oem-card',
      '.hero-car-card',
      '.segment-card',
      '.tech-card',
      '.realm-card',
      '.bigtech-card',
      '.analysis-card',
      '.narrative-card',
      '.tree-node-card',
      '.policy-card',
      '.mpv-grid',
      '.mpv-spec-card',
      '.licensing-section',
      '.hima-section',
      '.tech-stack-banner',
      '.subnav-footer-strip',
      '.table-responsive',
      '.licensing-table-wrap',
      '.filter-toolbar'
    ].join(', ');

    var revealTargets = document.querySelectorAll(revealSelector);

    revealTargets.forEach(function (target) {
      target.setAttribute('data-reveal', '');
      var siblings = target.parentElement ? Array.prototype.slice.call(target.parentElement.children) : [];
      var idx = siblings.indexOf(target);
      target.style.setProperty('--reveal-order', idx >= 0 ? Math.min(idx % 6, 5) : 0);
    });

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });

    revealTargets.forEach(function (target) {
      revealObserver.observe(target);
    });

    requestAnimationFrame(function () {
      document.body.classList.add('reveal-ready');
    });
  }

  // 5. Market Share Bar & Progress Animator
  if ('IntersectionObserver' in window && !reduceMotion) {
    var shareBars = document.querySelectorAll('.share-bar-fill');
    if (shareBars.length > 0) {
      shareBars.forEach(function (bar) {
        var originalWidth = bar.style.width || bar.getAttribute('data-width');
        if (originalWidth) {
          bar.setAttribute('data-target-width', originalWidth);
          bar.style.width = '0%';
        }
      });

      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var fills = entry.target.querySelectorAll('.share-bar-fill');
            fills.forEach(function (f) {
              var targetWidth = f.getAttribute('data-target-width');
              if (targetWidth) {
                f.style.width = targetWidth;
              }
            });
            barObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -5% 0px', threshold: 0.1 });

      document.querySelectorAll('.table-responsive, .sales-table, .licensing-table-wrap, .group-block').forEach(function (container) {
        barObserver.observe(container);
      });
    }
  }

  // 6. Normalise Brand Marks & Fallbacks
  function normaliseMarks() {
    var root = '/assets/ev-logos/';
    var official = {
      'zeekr': 'zeekr.svg', 'geely': 'geely.svg', 'byd': 'byd.svg', 'sgmw': 'wuling.svg', 'wuling': 'wuling.svg',
      'mg': 'mg.svg', 'chery': 'chery.svg', 'gac aion': 'aion.svg', 'aion': 'aion.svg', 'xiaomi': 'xiaomi.svg',
      'nio': 'nio.svg', 'xpeng': 'xpeng.svg', 'leapmotor': 'leapmotor.svg', 'li auto': 'li.svg', 'huawei': 'huawei.svg',
      'lepas': 'lepas.svg', 'jetour': 'jetour.svg', 'great wall': 'gwm.svg', 'gwm': 'gwm.svg', 'ora': 'ora.svg',
      'wey': 'wey.svg', 'polestar': 'polestar.svg', 'smart': 'smart.svg', 'volvo': 'volvo.svg', 'proton': 'proton.svg',
      'deepal': 'deepal.svg', 'aito': 'aito.svg', 'baic': 'baic.svg', 'changan': 'changan.svg', 'dongfeng': 'dongfeng.svg',
      'faw': 'faw.svg', 'saic': 'saic.svg', 'trumpchi': 'trumpchi.svg', 'lynkco': 'lynkco.svg', 'lynk & co': 'lynkco.svg',
      'hima': 'hima.svg', 'im': 'im.svg', 'icar': 'icar.svg', 'linghui': 'linghui.svg', 'new-forces': 'new-forces.svg'
    };
    var fallback = {
      'lynk & co': 'L&Co', 'global affiliates': 'GLOBAL', 'riddara': 'RADAR', 'denza': 'DENZA',
      'fang cheng bao': 'FCB', 'yangwang': 'YANGWANG', 'linghui': 'LINGHUI', 'im motors': 'IM',
      'roewe': 'SAIC', 'exeed': 'EXEED', 'icar': 'iCAR', 'deepal': 'DEEPAL', 'avatr': 'AVATR',
      'nevo': 'NEVO', 'kaicene': 'KC', 'ora': 'ORA', 'wey': 'WEY', 'poer': 'POER', 'hyptec': 'HYPTEC',
      'stelato': 'STELATO', 'arcfox': 'ARCFOX', 'baic off-road': 'BJ', 'hongqi': 'HONGQI'
    };

    document.querySelectorAll('.brand-logo-badge, .brand-cell-logo, .oem-logo-badge, .holding-logo-badge').forEach(function (box) {
      var scope = box.closest('.brand-unit-card, tr, .oem-card, .holding-card, .subbrand-row');
      var heading = scope && scope.querySelector('.brand-name-box h4, .brand-cell-info strong, .oem-header-info h3, .holding-card-title h3, .brand-title');
      var label = heading ? heading.textContent.trim() : '';
      var lower = label.toLowerCase();
      var key = Object.keys(official).sort(function (a, b) { return b.length - a.length; }).find(function (name) { return lower.indexOf(name) >= 0; });
      var fallbackKey = Object.keys(fallback).sort(function (a, b) { return b.length - a.length; }).find(function (name) { return lower.indexOf(name) >= 0; });

      if (key && (!box.querySelector('img') || box.querySelector('.official-logo-fallback'))) {
        box.innerHTML = '<img class="official-logo" src="' + root + official[key] + '" alt="' + label.replace(/"/g, '') + ' official logo">';
      } else if (fallbackKey && !box.querySelector('img') && !box.querySelector('.official-logo-fallback')) {
        box.innerHTML = '<span class="official-logo-fallback">' + fallback[fallbackKey] + '</span>';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', normaliseMarks);
  } else {
    normaliseMarks();
  }

  var search = document.getElementById('brand-search');
  if (search) {
    search.setAttribute('aria-label', 'Search brands, parent groups, or models');
  }
})();
