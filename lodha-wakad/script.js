// Google Ads Conversion Tracking - Lodha Wakad
document.addEventListener('click', function(e) {
  var el = e.target.closest('a[href*="wa.me"], a[href^="tel:"]');
  if (el && typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-17833027272/Na30CJOL874cEMjNubdC'
    });
  }
});

// Fires the same conversion when a lead form (pre-register / hero) is submitted,
// since these forms open WhatsApp via JS (window.open) rather than a clickable
// <a href="wa.me..."> link, so the click listener above does not catch them.
function fireFormConversion() {
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-17833027272/Na30CJOL874cEMjNubdC'
    });
  }
}/* ============================================
   LODHA WAKAD - Production JS
   Performance-optimized, no framework dependencies
   ============================================ */

(function () {
  'use strict';

  // ---------- Reveal on Scroll (lightweight) ----------
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  // ---------- Header elevation on scroll ----------
  const header = document.querySelector('.header');
  const heroBg = document.querySelector('.hero-bg');
  let ticking = false;

  if (header || heroBg) {
    // Activate parallax class once (avoids transition on initial paint)
    if (heroBg) {
      requestAnimationFrame(() => heroBg.classList.add('parallax-on'));
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;

          if (header) {
            if (y > 24) {
              header.style.boxShadow = '0 2px 18px -8px rgba(0,0,0,0.08)';
            } else {
              header.style.boxShadow = 'none';
            }
          }

          // Cinematic hero parallax: image rises slowly as user scrolls
          // Only active while hero is in view (first 100vh)
          if (heroBg && y < window.innerHeight) {
            // Image translates up at 0.35x scroll speed - subtle, premium
            const translateY = -y * 0.35;
            // Slight scale to prevent edge gaps from showing
            const scale = 1 + (y / window.innerHeight) * 0.06;
            heroBg.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Smooth Scroll for Hash Links ----------
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 116; // header + action bar
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ---------- Pre-Register Form (bottom) ----------
  const form = document.getElementById('preForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = document.getElementById('f_name');
      const mobEl = document.getElementById('f_mob');

      const name = (nameEl.value || '').trim();
      const mob = (mobEl.value || '').trim().replace(/\D/g, '');

      let ok = true;
      if (!name) {
        nameEl.style.borderBottomColor = '#a8444a';
        nameEl.focus();
        ok = false;
      } else {
        nameEl.style.borderBottomColor = '';
      }

      if (mob.length < 10) {
        mobEl.style.borderBottomColor = '#a8444a';
        if (ok) mobEl.focus();
        ok = false;
      } else {
        mobEl.style.borderBottomColor = '';
      }

      if (!ok) return;

      const message =
        'Hi%2C+I+want+to+book+a+Priority+EOI+(Token)+slot+for+LODHA+WAKAD.%0A%0A' +
        'Name%3A+' + encodeURIComponent(name) + '%0A' +
        'Mobile%3A+%2B91+' + encodeURIComponent(mob);

      window.open('https://wa.me/917820954441?text=' + message, '_blank');
      fireFormConversion();

      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Redirecting to WhatsApp...';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = original;
          btn.disabled = false;
          form.reset();
        }, 2400);
      }
    });
  }

  // ---------- Hero Form (above the fold) ----------
  const heroForm = document.getElementById('heroForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameEl = document.getElementById('hf_name');
      const mobEl = document.getElementById('hf_mob');

      const name = (nameEl.value || '').trim();
      const mob = (mobEl.value || '').trim().replace(/\D/g, '');

      let ok = true;
      if (!name) {
        nameEl.classList.add('hf-error');
        nameEl.focus();
        ok = false;
      } else {
        nameEl.classList.remove('hf-error');
      }

      if (mob.length < 10) {
        mobEl.classList.add('hf-error');
        if (ok) mobEl.focus();
        ok = false;
      } else {
        mobEl.classList.remove('hf-error');
      }

      if (!ok) return;

      const message =
        'Hi%2C+I+want+to+book+a+Priority+EOI+(Token)+slot+for+LODHA+WAKAD+(Rs.+4.5+Lakh+refundable).%0A%0A' +
        'Name%3A+' + encodeURIComponent(name) + '%0A' +
        'Mobile%3A+%2B91+' + encodeURIComponent(mob);

      window.open('https://wa.me/917820954441?text=' + message, '_blank');
      fireFormConversion();

      const btn = heroForm.querySelector('button[type="submit"]');
      if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = 'Redirecting to WhatsApp...';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = original;
          btn.disabled = false;
          heroForm.reset();
        }, 2400);
      }
    });
  }

  // ---------- Lazy image fallback for older browsers ----------
  if (!('loading' in HTMLImageElement.prototype)) {
    const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
      const imgIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) img.src = img.dataset.src;
            imgIO.unobserve(img);
          }
        });
      });
      lazyImgs.forEach((img) => imgIO.observe(img));
    }
  }

})();

/* ============================================
   V12 - Gallery: soft swipe nudge + slow auto-advance
   Cycle: rest -> gentle peek-nudge toward next slide -> rest -> advance.
   Nudges stop once the user swipes; everything pauses on touch.
   ============================================ */
(function () {
  'use strict';

  const galleries = document.querySelectorAll('[data-autoslide="true"]');
  if (!galleries.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  galleries.forEach((gallery) => {
    const track = gallery.querySelector('[data-track]');
    if (!track) return;

    let paused = false;
    let resumeTimer = null;
    let userSwiped = false;
    let inView = false;
    let busy = false;
    let step = 0;

    const hint = document.createElement('div');
    hint.className = 'ag-swipe-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML = '<span class="ash-hand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M12 10.5V9a1.5 1.5 0 0 1 3 0v2"/><path d="M15 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-.6a6 6 0 0 1-4.9-2.6L4.3 15.2a1.5 1.5 0 0 1 2.4-1.8L9 15.5"/></svg></span><span class="ash-txt">Swipe</span><span class="ash-arrow">&rarr;</span>';
    gallery.appendChild(hint);
    const placeHint = () => { hint.style.top = (track.offsetTop + track.clientHeight / 2) + 'px'; };
    placeHint();
    window.addEventListener('resize', placeHint, { passive: true });
    window.addEventListener('load', placeHint);
    setTimeout(placeHint, 1200);

    const slideWidth = () => {
      const s = track.querySelector('.ag-slide');
      if (!s) return 0;
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 16;
      return s.getBoundingClientRect().width + gap;
    };

    const markSwiped = () => {
      if (userSwiped) return;
      userSwiped = true;
      gallery.classList.add('ag-user-swiped');
    };

    const pause = (ms) => {
      paused = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { paused = false; }, ms);
    };

    // Any real touch / drag counts as the user having discovered the swipe
    track.addEventListener('touchstart', () => { pause(9000); markSwiped(); }, { passive: true });
    track.addEventListener('mousedown', () => pause(9000));
    track.addEventListener('wheel', () => { pause(5000); markSwiped(); }, { passive: true });
    gallery.addEventListener('mouseenter', () => { paused = true; });
    gallery.addEventListener('mouseleave', () => { clearTimeout(resumeTimer); resumeTimer = setTimeout(() => { paused = false; }, 800); });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver((es) => es.forEach((e) => { inView = e.isIntersecting; }), { threshold: 0.35 }).observe(gallery);
    } else { inView = true; }

    const nudge = () => {
      // Soft peek: drift ~22% toward the next slide, then settle back
      busy = true;
      const prevSnap = track.style.scrollSnapType;
      const prevBeh = track.style.scrollBehavior;
      track.style.scrollSnapType = 'none';
      track.style.scrollBehavior = 'auto';
      const start = track.scrollLeft;
      const dist = Math.min(slideWidth() * 0.22, 110);
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (start + dist > maxScroll - 2) { busy = false; track.style.scrollSnapType = prevSnap; return; }
      const dur = 1500;
      const t0 = performance.now();
      const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2; // easeInOutSine
      const frame = (now) => {
        if (paused) { track.scrollLeft = start; track.style.scrollSnapType = prevSnap; track.style.scrollBehavior = prevBeh; busy = false; return; }
        const t = Math.min(1, (now - t0) / dur);
        // out and back in one smooth sine arc
        const k = t < 0.5 ? ease(t * 2) : ease((1 - t) * 2);
        track.scrollLeft = start + dist * k;
        if (t < 1) requestAnimationFrame(frame);
        else { track.scrollLeft = start; track.style.scrollSnapType = prevSnap; track.style.scrollBehavior = prevBeh; busy = false; }
      };
      requestAnimationFrame(frame);
    };

    const advance = () => {
      const w = slideWidth();
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft + w > maxScroll + 4) track.scrollTo({ left: 0, behavior: 'smooth' });
      else track.scrollBy({ left: w, behavior: 'smooth' });
    };

    if (reduce) return;

    // Every 2.6s: before the user has swiped -> nudge, advance, nudge, advance...
    // After the user has swiped -> only a slow advance every other tick.
    setInterval(() => {
      if (!inView || paused || busy || document.visibilityState !== 'visible') return;
      step++;
      if (!userSwiped && step % 2 === 1) nudge();
      else if (step % 2 === 0) advance();
    }, 2600);
  });
})();

/* ============================================
   V11 - Tap to zoom on gallery slides
   Tap a slide to zoom in. Tap it again, tap elsewhere,
   or swipe the track to zoom back out.
   ============================================ */
(function () {
  'use strict';

  const tracks = document.querySelectorAll('.ag-track');
  if (!tracks.length) return;

  const allZoomed = new Set();

  const zoomOut = (slide) => {
    if (!slide) return;
    slide.classList.remove('ag-zoomed');
    allZoomed.delete(slide);
    if (slide._agKeepAlive) {
      clearInterval(slide._agKeepAlive);
      slide._agKeepAlive = null;
    }
  };

  const zoomOutAll = () => {
    allZoomed.forEach((s) => zoomOut(s));
  };

  tracks.forEach((track) => {
    const slides = Array.from(track.querySelectorAll('.ag-slide'));

    slides.forEach((slide) => {
      slide.addEventListener('click', (e) => {
        if (e.target.closest('a, button')) return;
        e.preventDefault();
        e.stopPropagation();
        const wasZoomed = slide.classList.contains('ag-zoomed');
        zoomOutAll();
        if (!wasZoomed) {
          slide.classList.add('ag-zoomed');
          allZoomed.add(slide);
          // Keep auto-slide paused while a slide is zoomed in
          slide._agKeepAlive = setInterval(() => {
            track.dispatchEvent(new Event('mousedown'));
          }, 5000);
          track.dispatchEvent(new Event('mousedown'));
        }
      });
    });

    // Swiping / scrolling the track zooms everything back out
    track.addEventListener('scroll', () => { zoomOutAll(); }, { passive: true });
    track.addEventListener('touchmove', () => { zoomOutAll(); }, { passive: true });
  });

  // Tapping anywhere outside a slide zooms out too
  document.addEventListener('click', (e) => {
    if (allZoomed.size && !e.target.closest('.ag-slide')) {
      zoomOutAll();
    }
  });
})();

/* ============================================
   V7 - Smooth lazy image fade-in
   Adds .img-loaded class to lazy imgs once they decode,
   preventing the "pop" of late images.
   ============================================ */
(function () {
  'use strict';

  const lazyImgs = document.querySelectorAll('img[loading="lazy"]');
  if (!lazyImgs.length) return;

  const markLoaded = (img) => {
    img.classList.add('img-loaded');
  };

  lazyImgs.forEach((img) => {
    if (img.complete && img.naturalWidth > 0) {
      // Already cached
      markLoaded(img);
    } else {
      img.addEventListener('load', () => markLoaded(img), { once: true });
      img.addEventListener('error', () => markLoaded(img), { once: true });
    }
  });
})();

/* ============================================
   V10 - Synced gallery captions
   Reads data-caption per slide, mirrors it into the rail
   beneath the gallery, animates in/out with slide changes.
   ============================================ */
(function () {
  'use strict';

  const galleries = document.querySelectorAll('.auto-gallery');
  if (!galleries.length) return;

  galleries.forEach((gallery) => {
    const track = gallery.querySelector('[data-track]');
    const rail = gallery.querySelector('[data-caption-rail]');
    if (!track || !rail) return;

    const slides = Array.from(track.querySelectorAll('.ag-slide'));
    const captions = slides.map((s) => s.getAttribute('data-caption') || '');
    if (!captions.some(Boolean)) return;

    // Build caption elements once
    captions.forEach((text, idx) => {
      const el = document.createElement('span');
      el.className = 'ag-caption';
      el.textContent = text;
      if (idx === 0) el.classList.add('is-active');
      rail.appendChild(el);
    });
    const captionEls = rail.querySelectorAll('.ag-caption');

    let activeIdx = 0;
    let frame = 0;

    const setActive = (idx) => {
      if (idx === activeIdx) return;
      captionEls[activeIdx]?.classList.remove('is-active');
      captionEls[idx]?.classList.add('is-active');
      activeIdx = idx;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        let best = 0;
        let bestDist = Infinity;
        slides.forEach((slide, i) => {
          const r = slide.getBoundingClientRect();
          const slideCenter = r.left + r.width / 2;
          const d = Math.abs(slideCenter - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        setActive(best);
      });
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    // Re-sync on resize
    window.addEventListener('resize', onScroll, { passive: true });
  });
})();
/* ---------- Privacy Modal ---------- */
(function () {
  'use strict';
  const pm = document.getElementById('privacyModal');
  if (!pm) return;
  const openLinks = document.querySelectorAll('[data-open-privacy]');
  const closeBtn = pm.querySelector('[data-close-privacy]');
  const open = () => { pm.classList.add('open'); pm.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; };
  const close = () => { pm.classList.remove('open'); pm.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; };
  openLinks.forEach((l) => l.addEventListener('click', (e) => { e.preventDefault(); open(); }));
  if (closeBtn) closeBtn.addEventListener('click', close);
  pm.addEventListener('click', (e) => { if (e.target === pm) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

// ============================================================
// AUTO IMAGE COMPRESSION - Lodha Wakad
// Rewrites lazy-loaded <img> src to a resize/compress proxy
// (wsrv.nl) at runtime, so large brochure-quality uploads are
// served as smaller, WEBP-optimised files without quality loss
// to the eye. The LCP hero image (fetchpriority="high") is
// left untouched so first paint stays fast and uncompromised.
// If the proxy ever fails to load, the original file is restored.
// ============================================================
(function () {
  var PROXY = 'https://wsrv.nl/?url=';
  var imgs = document.querySelectorAll('img[loading="lazy"]');
  imgs.forEach(function (img) {
    if (img.dataset.noOptimize === 'true' || img.getAttribute('data-no-optimize') === 'true') return;
    var original = img.getAttribute('src');
    if (!original || original.indexOf('http') === 0) return; // skip already-absolute/external

    var absolute = new URL(original, window.location.href).href;
    var w = img.getAttribute('width') || 900;
    var proxied = PROXY + encodeURIComponent(absolute) + '&w=' + w + '&output=webp&q=80';

    img.dataset.originalSrc = absolute;
    img.addEventListener('error', function onErr() {
      if (img.src !== img.dataset.originalSrc) {
        img.src = img.dataset.originalSrc;
      }
      img.removeEventListener('error', onErr);
    });
    img.src = proxied;
  });
})();

// ---------- Action bar (pills) continuous auto-scroll marquee ----------
(function () {
  const bar = document.querySelector('.action-bar');
  if (!bar) return;

  // Duplicate all chips once so the row can loop seamlessly, like a news ticker.
  const originalChildren = Array.from(bar.children);
  originalChildren.forEach(function (chip) {
    const clone = chip.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('tabindex', '-1');
    bar.appendChild(clone);
  });

  // Give every pill (including the clones) its own staggered shine timing,
  // so the sweep visibly travels pill-to-pill instead of only showing on one.
  Array.from(bar.children).forEach(function (chip, i) {
    chip.style.setProperty('--shine-delay', (i % 8) * 0.5 + 's');
  });

  let autoScroll = true;
  let resumeTimer = null;
  const speed = 0.45; // px per frame - slow but clearly visible, continuous drift

  function tick() {
    if (autoScroll && bar.scrollWidth > 0) {
      bar.scrollLeft += speed;
      const half = bar.scrollWidth / 2;
      if (bar.scrollLeft >= half) {
        bar.scrollLeft -= half;
      }
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function pause() {
    autoScroll = false;
    if (resumeTimer) clearTimeout(resumeTimer);
  }
  function scheduleResume() {
    if (resumeTimer) clearTimeout(resumeTimer);
    resumeTimer = setTimeout(function () { autoScroll = true; }, 1000);
  }

  bar.addEventListener('touchstart', pause, { passive: true });
  bar.addEventListener('touchend', scheduleResume, { passive: true });
  bar.addEventListener('mousedown', pause);
  window.addEventListener('mouseup', scheduleResume);
  bar.addEventListener('wheel', function () { pause(); scheduleResume(); }, { passive: true });
})();


/* ============================================
   LODHA WAKAD - Timed EOI modal (once per session)
   ============================================ */
(function () {
  'use strict';
  var modal = document.getElementById('eoiModal');
  if (!modal) return;
  var KEY = 'lw_eoi_modal_seen';
  var seen = false;
  try { seen = sessionStorage.getItem(KEY) === '1'; } catch (e) {}

  var open = function () {
    if (modal.classList.contains('open')) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
  };
  var close = function () {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (!seen) {
    var timer = setTimeout(open, 18000);
    // Exit-intent on desktop
    document.addEventListener('mouseout', function (e) {
      if (!e.relatedTarget && e.clientY < 8) { clearTimeout(timer); open(); }
    });
  }

  var closeBtn = modal.querySelector('[data-close-eoi]');
  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  var form = document.getElementById('eoiForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nameEl = document.getElementById('eo_name');
    var mobEl = document.getElementById('eo_mob');
    var name = (nameEl.value || '').trim();
    var mob = (mobEl.value || '').trim().replace(/\D/g, '');
    var ok = true;
    if (!name) { nameEl.classList.add('hf-error'); nameEl.focus(); ok = false; } else { nameEl.classList.remove('hf-error'); }
    if (mob.length < 10) { mobEl.classList.add('hf-error'); if (ok) mobEl.focus(); ok = false; } else { mobEl.classList.remove('hf-error'); }
    if (!ok) return;
    var message =
      'Hi%2C+I+want+to+book+a+Priority+EOI+(Token)+slot+for+LODHA+WAKAD.%0A%0A' +
      'Name%3A+' + encodeURIComponent(name) + '%0A' +
      'Mobile%3A+%2B91+' + encodeURIComponent(mob);
    window.open('https://wa.me/917820954441?text=' + message, '_blank');
    fireFormConversion();
    form.reset();
    close();
  });
})();
