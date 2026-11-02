/**
 * Coach Sandhya Arora - Photo Gallery & Visual Slider Component
 * Auto-scrolling gallery with YouTube-style edge fades, active scroll fallback, and full lightbox.
 */
(function () {
  'use strict';

  function initCoachGallery() {
    // ── 1. HERO SLIDER IN .about-visual ────────────────────────────────
    const sliderContainers = document.querySelectorAll('.coach-slider-container');
    sliderContainers.forEach(container => {
      const slides = container.querySelectorAll('.coach-slide');
      const dots = container.querySelectorAll('.coach-dot');
      const prevBtn = container.querySelector('.coach-slide-prev');
      const nextBtn = container.querySelector('.coach-slide-next');

      if (!slides.length) return;

      let currentIndex = 0;
      let timer = null;
      const INTERVAL = 4200;

      function showSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        slides.forEach((s, i) => {
          if (i === index) {
            s.classList.add('active');
          } else {
            s.classList.remove('active');
          }
        });

        dots.forEach((d, i) => {
          if (i === index) {
            d.classList.add('active');
            d.setAttribute('aria-current', 'true');
          } else {
            d.classList.remove('active');
            d.removeAttribute('aria-current');
          }
        });

        currentIndex = index;
      }

      function nextSlide() {
        showSlide(currentIndex + 1);
      }

      function prevSlide() {
        showSlide(currentIndex - 1);
      }

      function startTimer() {
        stopTimer();
        timer = setInterval(nextSlide, INTERVAL);
      }

      function stopTimer() {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', e => {
          e.preventDefault();
          prevSlide();
          startTimer();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', e => {
          e.preventDefault();
          nextSlide();
          startTimer();
        });
      }

      dots.forEach((dot, idx) => {
        dot.addEventListener('click', e => {
          e.preventDefault();
          showSlide(idx);
          startTimer();
        });
      });

      container.addEventListener('mouseenter', stopTimer);
      container.addEventListener('mouseleave', startTimer);

      // Touch swipe support for hero slider
      let startX = 0;
      container.addEventListener('touchstart', e => {
        startX = e.changedTouches[0].screenX;
        stopTimer();
      }, { passive: true });

      container.addEventListener('touchend', e => {
        const diffX = e.changedTouches[0].screenX - startX;
        if (Math.abs(diffX) > 40) {
          if (diffX < 0) nextSlide();
          else prevSlide();
        }
        startTimer();
      }, { passive: true });

      startTimer();
    });

    // ── 2. MARQUEE SCROLL ENGINE (CSS WITH JS FALLBACK) ───────────────
    const marquees = document.querySelectorAll('.coach-marquee');
    marquees.forEach(marquee => {
      // Check if CSS animation is actively moving after 500ms
      setTimeout(() => {
        const t1 = window.getComputedStyle(marquee).transform;
        setTimeout(() => {
          const t2 = window.getComputedStyle(marquee).transform;
          // If CSS animation is not actively running (e.g., prefers-reduced-motion in OS),
          // drive it smoothly via requestAnimationFrame
          if (t1 === t2 || t1 === 'none') {
            marquee.style.animation = 'none';
            let offset = 0;
            let isPaused = false;

            marquee.addEventListener('mouseenter', () => { isPaused = true; });
            marquee.addEventListener('mouseleave', () => { isPaused = false; });
            marquee.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
            marquee.addEventListener('touchend', () => { isPaused = false; }, { passive: true });

            function anim() {
              const halfWidth = marquee.scrollWidth / 2;
              if (!isPaused && halfWidth > 0) {
                offset += 1.8;
                if (offset >= halfWidth) {
                  offset = 0;
                }
                marquee.style.transform = `translate3d(-${offset}px, 0, 0)`;
              }
              requestAnimationFrame(anim);
            }
            requestAnimationFrame(anim);
          }
        }, 500);
      }, 500);
    });

    // ── 3. LIGHTBOX COMPONENT ─────────────────────────────────────────
    initLightbox();
  }

  function initLightbox() {
    let lightbox = document.getElementById('coachLightboxModal');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.id = 'coachLightboxModal';
      lightbox.className = 'coach-lightbox';
      lightbox.setAttribute('role', 'dialog');
      lightbox.setAttribute('aria-modal', 'true');
      lightbox.setAttribute('aria-label', 'Coach Photo Lightbox');
      lightbox.innerHTML = `
        <button class="coach-lightbox-close" type="button" aria-label="Close dialog">&times;</button>
        <button class="coach-lightbox-prev" type="button" aria-label="Previous photo">&#10094;</button>
        <button class="coach-lightbox-next" type="button" aria-label="Next photo">&#10095;</button>
        <div class="coach-lightbox-content" tabindex="-1">
          <div class="coach-lightbox-img-wrap">
            <img src="" alt="" id="coachLightboxImg">
          </div>
          <div class="coach-lightbox-caption">
            <span class="coach-lightbox-title" id="coachLightboxTitle"></span>
            <span class="coach-lightbox-meta" id="coachLightboxMeta"></span>
          </div>
        </div>
      `;
      document.body.appendChild(lightbox);
    }

    const imgEl = document.getElementById('coachLightboxImg');
    const titleEl = document.getElementById('coachLightboxTitle');
    const metaEl = document.getElementById('coachLightboxMeta');
    const closeBtn = lightbox.querySelector('.coach-lightbox-close');
    const prevBtn = lightbox.querySelector('.coach-lightbox-prev');
    const nextBtn = lightbox.querySelector('.coach-lightbox-next');

    // Collect distinct cards
    const cards = Array.from(document.querySelectorAll('.coach-photo-card[data-original="true"]'));
    let activeIndex = 0;
    let lastActiveTrigger = null;

    function openLightbox(index, triggerEl) {
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;

      activeIndex = index;
      lastActiveTrigger = triggerEl;

      const card = cards[activeIndex] || cards[0];
      if (!card) return;

      const img = card.querySelector('img');
      const badge = card.querySelector('.coach-photo-badge');

      if (imgEl && img) {
        imgEl.src = img.src;
        imgEl.alt = img.alt || 'Sandhya Arora Fitness Trainer';
      }
      if (titleEl) {
        titleEl.textContent = badge ? badge.textContent : (img ? img.alt : '');
      }
      if (metaEl) {
        metaEl.textContent = `Photo ${activeIndex + 1} of ${cards.length} • Sandhya Arora Fitness`;
      }

      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      const content = lightbox.querySelector('.coach-lightbox-content');
      if (content) content.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      if (imgEl) imgEl.src = '';
      if (lastActiveTrigger && typeof lastActiveTrigger.focus === 'function') {
        lastActiveTrigger.focus();
      }
    }

    function showNext() {
      openLightbox(activeIndex + 1, lastActiveTrigger);
    }

    function showPrev() {
      openLightbox(activeIndex - 1, lastActiveTrigger);
    }

    document.querySelectorAll('.coach-photo-card').forEach(card => {
      card.addEventListener('click', () => {
        const idx = parseInt(card.getAttribute('data-gallery-index'), 10) || 0;
        openLightbox(idx, card);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const idx = parseInt(card.getAttribute('data-gallery-index'), 10) || 0;
          openLightbox(idx, card);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCoachGallery);
  } else {
    initCoachGallery();
  }
})();
