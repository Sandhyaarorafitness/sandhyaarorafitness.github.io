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
    { id: 'online', label: 'Online Training' },
    { id: 'results', label: 'Testimonials' },
    { id: 'podcasts', label: 'Interviews & Podcasts' },
    { id: 'nutrition', label: 'Nutrition' }
  ];
  const REELS_DATA = [
    // ── LATEST REELS (Surfaced first) ─────────────────────────────────
    {
      type: 'instagram',
      id: 'DehUbuDJb9E',
      url: 'https://www.instagram.com/reel/DehUbuDJb9E/?utm_source=ig_web_copy_link&exln=NTc4MTIwNjQ2YQ==',
      categories: ['trainer', 'podcasts'],
      pills: ['Trainer', 'Interview']
    },
    {
      type: 'instagram',
      id: 'DeeSu0yzaoI',
      url: 'https://www.instagram.com/reel/DeeSu0yzaoI/?utm_source=ig_web_copy_link&xtok=NTc4MTIwNjQ2YQ==',
      categories: ['trainer', 'podcasts'],
      pills: ['Trainer', 'Interview']
    },
    {
      type: 'instagram',
      id: 'DaPHrqPz8nW',
      url: 'https://www.instagram.com/reels/DaPHrqPz8nW/',
      categories: ['trainer'],
      pills: ['Trainer', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DdoUZ80TNcM',
      url: 'https://www.instagram.com/reels/DdoUZ80TNcM/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DdC5SL7T3vv',
      url: 'https://www.instagram.com/reels/DdC5SL7T3vv/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DakQj9jT9nT',
      url: 'https://www.instagram.com/reels/DakQj9jT9nT/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DafIbbcTx1b',
      url: 'https://www.instagram.com/reels/DafIbbcTx1b/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DVdFS9_gRuQ',
      url: 'https://www.instagram.com/reels/DVdFS9_gRuQ/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DUxvV73gV27',
      url: 'https://www.instagram.com/reels/DUxvV73gV27/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DQi3A2GgXTq',
      url: 'https://www.instagram.com/reels/DQi3A2GgXTq/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DOksttSASiW',
      url: 'https://www.instagram.com/reels/DOksttSASiW/',
      categories: ['online'],
      pills: ['Online', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DcYlpVEttaY',
      url: 'https://www.instagram.com/sandhya.arora.fitness/reel/DcYlpVEttaY/',
      categories: ['trainer'],
      pills: ['Trainer', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DZ62YP3Tp1Q',
      url: 'https://www.instagram.com/sandhya.arora.fitness/reel/DZ62YP3Tp1Q/',
      categories: ['trainer'],
      pills: ['Trainer', 'Latest']
    },
    {
      type: 'instagram',
      id: 'DY6g1vxBgYm',
      url: 'https://www.instagram.com/sandhya.arora.fitness/reel/DY6g1vxBgYm/',
      categories: ['trainer'],
      pills: ['Trainer', 'Latest']
    },
    {
      type: 'instagram',
      id: 'Ddyw0UtEoRd',
      url: 'https://www.instagram.com/reel/Ddyw0UtEoRd/',
      categories: ['online', 'offline'],
      pills: ['Online', 'Client']
    },
    {
      type: 'instagram',
      id: 'Dd1N35_z1_Z',
      url: 'https://www.instagram.com/reel/Dd1N35_z1_Z/',
      categories: ['trainer'],
      pills: ['Trainer', 'Latest']
    },
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
    },
    
    // ── PODCASTS ──────────────────────────────────────────────────────
    {
      type: 'preview',
      id: 'uRnEExysMfk',
      url: 'https://youtu.be/uRnEExysMfk',
      image: 'https://img.youtube.com/vi/uRnEExysMfk/hqdefault.jpg',
      alt: 'Watch Sandhya Arora Podcast',
      categories: ['podcasts'],
      pills: ['Podcast', 'Interview']
    },
    {
      type: 'preview',
      id: 'rk89VpGFi-8',
      url: 'https://youtu.be/rk89VpGFi-8',
      image: 'https://img.youtube.com/vi/rk89VpGFi-8/hqdefault.jpg',
      alt: 'Watch Sandhya Arora Podcast',
      categories: ['podcasts'],
      pills: ['Podcast', 'Cardio']
    },
    {
      type: 'preview',
      id: '4u45AvshKzc',
      url: 'https://youtu.be/4u45AvshKzc',
      image: 'https://img.youtube.com/vi/4u45AvshKzc/hqdefault.jpg',
      alt: 'Watch Sandhya Arora Podcast',
      categories: ['podcasts'],
      pills: ['Podcast', 'Supplements']
    },
    {
      type: 'preview',
      id: 'sSUVB1vAMtc',
      url: 'https://youtu.be/sSUVB1vAMtc',
      image: 'https://img.youtube.com/vi/sSUVB1vAMtc/hqdefault.jpg',
      alt: 'Watch Sandhya Arora Podcast',
      categories: ['podcasts'],
      pills: ['Podcast', 'Weight Loss']
    },
    {
      type: 'preview',
      id: 'xZrsDhNHck0',
      url: 'https://youtu.be/xZrsDhNHck0',
      image: 'https://img.youtube.com/vi/xZrsDhNHck0/hqdefault.jpg',
      alt: 'Watch Sandhya Arora Podcast',
      categories: ['podcasts'],
      pills: ['Podcast', 'Fat Loss']
    },
    {
      type: 'preview',
      id: 'eDiH_oHCT1A',
      url: 'https://youtu.be/eDiH_oHCT1A',
      image: 'https://img.youtube.com/vi/eDiH_oHCT1A/hqdefault.jpg',
      alt: 'Watch Sandhya Arora Podcast',
      categories: ['podcasts'],
      pills: ['Podcast', 'Protein']
    },
    {
      type: 'preview',
      id: 'Dm4uYBz7eVg',
      url: 'https://youtu.be/Dm4uYBz7eVg',
      image: 'https://img.youtube.com/vi/Dm4uYBz7eVg/hqdefault.jpg',
      alt: 'Watch Sandhya Arora Podcast',
      categories: ['podcasts'],
      pills: ['Podcast', 'Therapy']
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
      `<iframe src="${embedUrl}" title="Watch Sandhya Arora fitness reel" loading="lazy" scrolling="no" allowtransparency="true" allow="encrypted-media; autoplay; clipboard-write; picture-in-picture; web-share"></iframe>` +
      `<div class="reel-card-meta">${pillsHtml}</div>` +
      `</div>`;
  }

  function renderComponent() {
    const buttonsHtml = REEL_CATEGORIES.map((cat, idx) => {
      const activeClass = idx === 0 ? ' active' : '';
      return `<button class="reel-category-btn${activeClass}" type="button" data-category="${cat.id}">${cat.label}</button>`;
    }).join('');

    const cardsHtml = REELS_DATA.map(renderCard).join('\n      ');
    const duplicateCardsHtml = REELS_DATA.map(renderCard).join('\n      ');

    return `
    <div class="section-container">
      <div class="vg-head">
        <div class="vg-headtext">
          <p class="section-eyebrow">Join the Community</p>
          <h2 class="section-title">Latest on <em style="color:var(--red);font-style:normal;">Instagram</em></h2>
          <p class="section-sub">Public reel highlights grouped by the training and coaching themes visible on the profile.</p>
        </div>
        <div class="vg-actions">
          <a href="https://www.instagram.com/sandhya.arora.fitness?igsi=MTFsdGYyY2JuZjJpcQ==" class="vg-yt-link" target="_blank" rel="noopener">Follow on Instagram</a>
          <button class="reel-motion-toggle" type="button" aria-label="Pause reel carousel" title="Pause reel carousel" aria-pressed="false"><span aria-hidden="true"></span></button>
        </div>
      </div>

      <div class="reel-category-bar" aria-label="Instagram content categories">
        ${buttonsHtml}
      </div>

    </div>
    <div class="ig-marquee-window">
        <div class="ig-grid" id="reelGrid">
          <div class="ig-marquee-group">
            ${cardsHtml}
          </div>
          <div class="ig-marquee-group" aria-hidden="true" inert>
            ${duplicateCardsHtml}
          </div>
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

    const track = container.querySelector('.ig-grid');
    if (track) {
      updateMarqueeDuration(track);
      track.style.animation = 'none';
      track.offsetHeight;
      track.style.animation = '';
    }
  }

  function ensureCarouselStyles() {
    if (document.getElementById('instagram-reels-styles')) return;

    const style = document.createElement('style');
    style.id = 'instagram-reels-styles';
    style.textContent = `
      #instagram.instagram-gallery {
        overflow: hidden; background: var(--dark); color: var(--white);
        border-top: 1px solid rgba(255,255,255,0.06);
      }
      #instagram .section-eyebrow { color: var(--red-light); }
      #instagram .section-title { color: var(--white); }
      #instagram .section-sub { color: rgba(255,255,255,0.62); }
      #instagram .vg-yt-link { color: var(--red-light); }
      #instagram .vg-actions { display: inline-flex; align-items: center; gap: 14px; }
      #instagram .reel-category-bar {
        justify-content: center; align-items: center; gap: 10px; margin-bottom: 28px;
      }
      #instagram .reel-category-btn {
        background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.14);
        color: rgba(255,255,255,0.78); white-space: nowrap;
      }
      #instagram .reel-category-btn:hover, #instagram .reel-category-btn.active {
        background: var(--red); border-color: var(--red); color: var(--white);
      }
      #instagram .reel-motion-toggle {
        display: inline-flex; align-items: center; justify-content: center;
        width: 40px; height: 40px; flex: 0 0 40px; padding: 0;
        border: 1px solid rgba(255,255,255,0.2); border-radius: 50%;
        background: rgba(255,255,255,0.04); color: var(--white); cursor: pointer;
        transition: background 0.2s ease, border-color 0.2s ease;
      }
      #instagram .reel-motion-toggle:hover { background: rgba(233,69,96,0.2); border-color: var(--red); }
      #instagram .reel-motion-toggle span {
        display: block; width: 10px; height: 12px; border-left: 3px solid currentColor;
        border-right: 3px solid currentColor;
      }
      #instagram .reel-motion-toggle[aria-pressed="true"] span {
        width: 0; height: 0; border: 0; border-top: 7px solid transparent;
        border-bottom: 7px solid transparent; border-left: 11px solid currentColor;
        margin-left: 3px;
      }
      #instagram .ig-marquee-window {
        position: relative; width: 100%; margin-left: 0; overflow: hidden;
      }
      #instagram .ig-marquee-window::before, #instagram .ig-marquee-window::after {
        content: ''; position: absolute; top: 0; bottom: 0; width: clamp(150px, 14vw, 220px); z-index: 2; pointer-events: none;
      }
      #instagram .ig-marquee-window::before {
        left: 0; background: linear-gradient(to right, var(--dark), transparent);
      }
      #instagram .ig-marquee-window::after {
        right: 0; background: linear-gradient(to left, var(--dark), transparent);
      }
      #instagram .ig-grid {
        display: flex; flex-wrap: nowrap; width: max-content; gap: 0; margin: 0;
        padding: 8px 0 30px; animation: instagram-marquee var(--reel-duration, 120s) linear infinite;
      }
      #instagram .ig-grid:hover, #instagram .ig-grid:focus-within, #instagram .ig-grid.is-paused {
        animation-play-state: paused;
      }
      #instagram .ig-marquee-group {
        display: flex; flex: 0 0 auto; align-items: stretch; gap: 22px; padding-right: 22px;
      }
      #instagram .ig-card {
        flex: 0 0 clamp(230px, 20vw, 280px); width: clamp(230px, 20vw, 280px);
        min-width: 0; max-width: none; height: auto; aspect-ratio: 9 / 16;
        overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.12);
        background: #11111a; box-shadow: 0 18px 42px rgba(0,0,0,0.32);
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      }
      #instagram .ig-card:hover {
        transform: translateY(-5px); border-color: rgba(233,69,96,0.55);
        box-shadow: 0 24px 52px rgba(0,0,0,0.48), 0 0 24px rgba(233,69,96,0.12);
      }
      #instagram .ig-card iframe, #instagram .reel-preview-link { width: 100%; height: 100%; border: 0; }
      #instagram .reel-preview-link { display: block; background: #11111a; }
      #instagram .reel-card-meta { left: 10px; right: 10px; bottom: 10px; }
      #instagram .reel-pill { background: rgba(14,14,26,0.82); border-color: rgba(255,255,255,0.14); }
      @keyframes instagram-marquee { to { transform: translateX(-50%); } }
      @media (max-width: 700px) {
        #instagram .vg-head { gap: 20px; margin-bottom: 28px; }
        #instagram .reel-category-bar { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 8px; scrollbar-width: none; }
        #instagram .reel-category-bar::-webkit-scrollbar { display: none; }
        #instagram .ig-card { flex-basis: min(76vw, 290px); width: min(76vw, 290px); }
        #instagram .ig-marquee-window::before, #instagram .ig-marquee-window::after { width: clamp(72px, 20vw, 120px); }
      }
      @media (max-width: 420px) {
        #instagram .ig-card { flex-basis: 76vw; width: 76vw; }
      }
    `;
    document.head.appendChild(style);
  }

  function updateMarqueeDuration(track) {
    const originalGroup = track.querySelector('.ig-marquee-group');
    const visibleCards = originalGroup ? originalGroup.querySelectorAll('.reel-card:not(.hidden)').length : 1;
    track.style.setProperty('--reel-duration', `${Math.max(36, visibleCards * 4)}s`);
  }

  function initMotionToggle(root) {
    const track = root.querySelector('.ig-grid');
    const toggle = root.querySelector('.reel-motion-toggle');
    if (!track || !toggle) return;

    updateMarqueeDuration(track);
    toggle.addEventListener('click', () => {
      const paused = track.classList.toggle('is-paused');
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.setAttribute('aria-label', paused ? 'Play reel carousel' : 'Pause reel carousel');
      toggle.setAttribute('title', paused ? 'Play reel carousel' : 'Pause reel carousel');
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

    ensureCarouselStyles();
    root.innerHTML = renderComponent();
    initMotionToggle(root);

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
