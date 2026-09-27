/**
 * Sandhya Arora Fitness - Global Instagram Reels Component
 * 
 * Single source of truth for the Instagram reels section across all pages:
 * - Homepage (index.html)
 * - Online Fitness Coach (/services/online-fitness-coach/)
 * - 1-on-1 Personal Trainer (/services/personal-fitness-trainer/)
 * - Group Fitness Classes (/services/group-fitness-classes/)
 * - Nutrition Coaching (/services/nutrition-coaching/)
 * 
 * To add, edit, or reorder reels, update the REELS_DATA array below.
 * All pages using <div id="instagram-reels-root"></div> will automatically reflect changes.
 */

(function () {
  'use strict';

  const REEL_CATEGORIES = [
    { id: 'all', label: 'All' },
    { id: 'trainer', label: 'Know Your Trainer' },
    { id: 'strength', label: 'Strength Training' },
    { id: 'online', label: 'Online Training' },
    { id: 'offline', label: 'Offline / Client Training' },
    { id: 'group', label: 'Group Training' },
    { id: 'results', label: 'Testimonials & Results' },
    { id: 'nutrition', label: 'Nutrition & Education' }
  ];

  const REELS_DATA = [
    // ── LATEST REELS (Surfaced first) ─────────────────────────────────
    {
      type: 'instagram',
      id: 'DdtlgxyT246',
      url: 'https://www.instagram.com/reel/DdtlgxyT246/',
      categories: ['nutrition'],
      pills: ['Nutrition', 'Tips']
    },
    {
      type: 'instagram',
      id: 'DaZ5UvNzgNl',
      url: 'https://www.instagram.com/reel/DaZ5UvNzgNl/',
      categories: ['strength', 'offline'],
      pills: ['Strength', 'Training']
    },
    {
      type: 'instagram',
      id: 'DcB41FOTR88',
      url: 'https://www.instagram.com/reel/DcB41FOTR88/',
      categories: ['offline', 'results'],
      pills: ['Client', 'Testimonial']
    },
    {
      type: 'instagram',
      id: 'DcwGQtLTq7n',
      url: 'https://www.instagram.com/reel/DcwGQtLTq7n/',
      categories: ['offline', 'results'],
      pills: ['Client', 'Testimonial']
    },

    // ── HIGHLIGHTED REELS ─────────────────────────────────────────────
    {
      type: 'instagram',
      id: 'DdoUZ80TNcM',
      url: 'https://www.instagram.com/reel/DdoUZ80TNcM/',
      categories: ['trainer'],
      pills: ['Trainer', 'Story']
    },
    {
      type: 'instagram',
      id: 'DdX-cQuz2dN',
      url: 'https://www.instagram.com/reel/DdX-cQuz2dN/',
      categories: ['online'],
      pills: ['Online', 'Program']
    },
    {
      type: 'instagram',
      id: 'Ddp8UMjzQaQ',
      url: 'https://www.instagram.com/reel/Ddp8UMjzQaQ/',
      categories: ['results'],
      pills: ['Results', 'Testimonial']
    },
    {
      type: 'instagram',
      id: 'DdqHms3T7gC',
      url: 'https://www.instagram.com/reel/DdqHms3T7gC/',
      categories: ['results'],
      pills: ['Results', 'Testimonial']
    },
    {
      type: 'instagram',
      id: 'DdqhVA9lPJu',
      url: 'https://www.instagram.com/reel/DdqhVA9lPJu/',
      categories: ['results'],
      pills: ['Results', 'Client']
    },

    // ── TRAINER PREVIEWS & EMBEDS ─────────────────────────────────────
    {
      type: 'instagram',
      id: 'DdjLKbFTV1Z',
      url: 'https://www.instagram.com/reel/DdjLKbFTV1Z/',
      categories: ['trainer'],
      pills: ['Trainer', 'Latest']
    },
    {
      type: 'preview',
      id: 'Dcgqe_CvHHC',
      url: 'https://www.instagram.com/reel/Dcgqe_CvHHC/?stkn=NTc4MTIwNjQ2YQ==',
      image: 'assets/images/trainer-Dcgqe_CvHHC.jpg',
      alt: 'Watch Sandhya Arora trainer reel on Instagram',
      categories: ['trainer'],
      pills: ['Trainer', 'Intro']
    },
    {
      type: 'preview',
      id: 'DcgUuqTPzU6',
      url: 'https://www.instagram.com/reel/DcgUuqTPzU6/?stkn=MXM2amtieDA5MTRuZg==',
      image: 'assets/images/trainer-DcgUuqTPzU6.jpg',
      alt: 'Watch Sandhya Arora trainer reel on Instagram',
      categories: ['trainer'],
      pills: ['Trainer', 'Bio']
    },
    {
      type: 'instagram',
      id: 'Dcd9uNgxlKc',
      url: 'https://www.instagram.com/p/Dcd9uNgxlKc/',
      categories: ['trainer'],
      pills: ['Trainer', 'Story']
    },
    {
      type: 'preview',
      id: 'DcdX4QkPgbX',
      url: 'https://www.instagram.com/reel/DcdX4QkPgbX/?stkn=MWNmYjZlMTlmZ3N4ZQ==',
      image: 'assets/images/trainer-DcdX4QkPgbX.jpg',
      alt: 'Watch Sandhya Arora trainer reel on Instagram',
      categories: ['trainer'],
      pills: ['Trainer', 'Approach']
    },
    {
      type: 'preview',
      id: 'DbIIfp_pdTO',
      url: 'https://www.instagram.com/reel/DbIIfp_pdTO/?stkn=MTNleGxreXg4cjlxNQ==',
      image: 'assets/images/trainer-DbIIfp_pdTO.jpg',
      alt: 'Watch Sandhya Arora trainer reel on Instagram',
      categories: ['trainer'],
      pills: ['Trainer', 'Journey']
    },
    {
      type: 'preview',
      id: 'DbID6i1JDba',
      url: 'https://www.instagram.com/reel/DbID6i1JDba/?stkn=YnJmcWtteG82ajh1',
      image: 'assets/images/trainer-DbID6i1JDba.jpg',
      alt: 'Watch Sandhya Arora trainer reel on Instagram',
      categories: ['trainer'],
      pills: ['Trainer', 'Values']
    },

    // ── YOUTUBE SHORTS ────────────────────────────────────────────────
    {
      type: 'preview',
      id: 'Vm-TFA7rOek',
      url: 'https://youtube.com/shorts/Vm-TFA7rOek?si=8UxHuBo4yK95nXxN',
      image: 'assets/images/trainer-Vm-TFA7rOek.jpg',
      alt: 'Watch Sandhya Arora trainer Short on YouTube',
      categories: ['trainer'],
      pills: ['Trainer', 'Short']
    },
    {
      type: 'preview',
      id: 'Ax5acMFQBJg',
      url: 'https://youtube.com/shorts/Ax5acMFQBJg?si=Ot19irapErVm9yYP',
      image: 'assets/images/trainer-Ax5acMFQBJg.jpg',
      alt: 'Watch Sandhya Arora trainer Short on YouTube',
      categories: ['trainer'],
      pills: ['Trainer', 'Short']
    },

    // ── MORE CATEGORIZED REELS ────────────────────────────────────────
    {
      type: 'instagram',
      id: 'DdbTG3GTQi2',
      url: 'https://www.instagram.com/p/DdbTG3GTQi2/',
      categories: ['online'],
      pills: ['Online', 'Program']
    },
    {
      type: 'instagram',
      id: 'DdTdQ3FTJOO',
      url: 'https://www.instagram.com/p/DdTdQ3FTJOO/',
      categories: ['group'],
      pills: ['Group', 'Class']
    },
    {
      type: 'instagram',
      id: 'DdTU1s-T7pC',
      url: 'https://www.instagram.com/p/DdTU1s-T7pC/',
      categories: ['offline'],
      pills: ['Offline', 'Training']
    },
    {
      type: 'instagram',
      id: 'DdOQiS8TrqW',
      url: 'https://www.instagram.com/p/DdOQiS8TrqW/',
      categories: ['offline'],
      pills: ['Client', 'Form']
    },
    {
      type: 'instagram',
      id: 'DdKy1YEz4iz',
      url: 'https://www.instagram.com/p/DdKy1YEz4iz/',
      categories: ['nutrition'],
      pills: ['Education', 'Nutrition']
    },
    {
      type: 'instagram',
      id: 'DdKtoNszL2r',
      url: 'https://www.instagram.com/p/DdKtoNszL2r/',
      categories: ['results'],
      pills: ['Results', 'Testimonial']
    },
    {
      type: 'instagram',
      id: 'DdHXj8aNqHM',
      url: 'https://www.instagram.com/p/DdHXj8aNqHM/',
      categories: ['nutrition'],
      pills: ['Education', 'Workout']
    }
  ];

  function resolveImagePath(path) {
    if (/^https?:\/\//i.test(path)) return path;
    if (window.location.protocol === 'file:') {
      const isSub = window.location.pathname.replace(/\\/g, '/').includes('/services/');
      return (isSub ? '../../' : '') + path;
    }
    return '/' + path.replace(/^\/+/, '');
  }

  function renderCard(item) {
    const cats = (item.categories || []).join(' ');
    const pillsHtml = (item.pills || []).map(p => `<span class="reel-pill">${p}</span>`).join('');
    
    if (item.type === 'preview') {
      const imgSrc = resolveImagePath(item.image);
      return `<div class="ig-card reel-card" data-category="${cats}">` +
        `<a class="reel-preview-link" href="${item.url}" target="_blank" rel="noopener">` +
        `<img class="reel-preview-image" src="${imgSrc}" alt="${item.alt || 'Watch Sandhya Arora on Instagram'}">` +
        `</a>` +
        `<div class="reel-card-meta">${pillsHtml}</div>` +
        `</div>`;
    }

    const embedUrl = `https://www.instagram.com/reel/${item.id}/embed/?utm_source=ig_embed`;
    return `<div class="ig-card reel-card" data-category="${cats}">` +
      `<iframe src="${embedUrl}" scrolling="no" allowtransparency="true" allow="encrypted-media; autoplay; clipboard-write; picture-in-picture; web-share"></iframe>` +
      `<div class="reel-card-meta">${pillsHtml}</div>` +
      `</div>`;
  }

  function renderComponent() {
    const buttonsHtml = REEL_CATEGORIES.map((cat, idx) => {
      const activeClass = idx === 0 ? ' active' : '';
      return `<button class="reel-category-btn${activeClass}" type="button" data-category="${cat.id}">${cat.label}</button>`;
    }).join('');

    const cardsHtml = REELS_DATA.map(renderCard).join('\n      ');

    return `
    <div class="section-container">
      <div class="vg-head">
        <div class="vg-headtext">
          <p class="section-eyebrow">Join the Community</p>
          <h2 class="section-title">Latest on <em style="color:var(--red);font-style:normal;">Instagram</em></h2>
          <p class="section-sub">Public reel highlights grouped by the training and coaching themes visible on the profile.</p>
        </div>
        <a href="https://www.instagram.com/sandhya.arora.fitness?igsi=MTFsdGYyY2JuZjJpcQ==" class="vg-yt-link" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          Follow on Instagram
        </a>
      </div>

      <div class="reel-category-bar" aria-label="Instagram content categories">
        ${buttonsHtml}
      </div>

      <div class="ig-grid" id="reelGrid">
        ${cardsHtml}
      </div>
    </div>`;
  }

  function applyFilter(category, container) {
    const cards = container.querySelectorAll('.reel-card');
    const buttons = container.querySelectorAll('.reel-category-btn');

    cards.forEach((card) => {
      const cats = (card.dataset.category || '').split(/\s+/);
      const match = category === 'all' || cats.includes(category);
      card.classList.toggle('hidden', !match);
    });

    buttons.forEach((button) => {
      const active = button.dataset.category === category;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function initInstagramReels() {
    // Mount point can be #instagram-reels-root or the section itself
    let root = document.getElementById('instagram-reels-root');
    let section = document.getElementById('instagram');

    if (!root && section) {
      root = section;
    }

    if (!root) {
      console.warn('Instagram Reels: Mount container #instagram-reels-root or #instagram not found.');
      return;
    }

    root.innerHTML = renderComponent();

    const buttons = root.querySelectorAll('.reel-category-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', function () {
        applyFilter(this.dataset.category, root);
      });
    });
  }

  // Public API for programmatic control
  window.SandhyaReels = {
    data: REELS_DATA,
    categories: REEL_CATEGORIES,
    render: initInstagramReels,
    applyFilter: applyFilter
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initInstagramReels);
  } else {
    initInstagramReels();
  }
})();
