/**
 * Sandhya Arora Fitness - Global Podcasts Component
 */

(function () {
  'use strict';

  const PODCASTS_DATA = [
    {
      id: 'uRnEExysMfk',
      title: 'फिटनेस Facts vs Myths : क्या आपका जिम आपको बेवकूफ बना रहा है?',
    },
    {
      id: 'rk89VpGFi-8',
      title: 'Cardio का ये Secret 90% लोग नहीं जानते!',
    },
    {
      id: '4u45AvshKzc',
      title: 'Ye Video Dekhe Bina Gym Supplements Mat Kharidna!',
    },
    {
      id: 'sSUVB1vAMtc',
      title: 'STOP Doing Cardio? The REAL Weight Loss Truth!',
    },
    {
      id: 'xZrsDhNHck0',
      title: 'Weight Loss vs Fat Loss: Why Scale Numbers Lie to You',
    },
    {
      id: 'eDiH_oHCT1A',
      title: 'रोज Protein लेने से पहले ये सच जान लो | Fitness Reality',
    },
    {
      id: 'Dm4uYBz7eVg',
      title: 'Therapy vs Gym',
    }
  ];

  function renderPodcastCard(item) {
    return `
      <a href="https://youtu.be/${item.id}" target="_blank" class="podcast-card" rel="noopener">
        <div class="podcast-thumb">
          <img src="https://img.youtube.com/vi/${item.id}/hqdefault.jpg" alt="Podcast Preview" loading="lazy">
          <div class="podcast-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
        </div>
        <div class="podcast-info">
          <h3>${item.title}</h3>
          <div class="yt-badge"><svg viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> Watch on YouTube</div>
        </div>
      </a>
    `;
  }

  function initPodcasts() {
    const root = document.getElementById('podcasts-root');
    if (!root) return;

    // Inject CSS once
    if (!document.getElementById('podcasts-styles')) {
      const style = document.createElement('style');
      style.id = 'podcasts-styles';
      style.innerHTML = `
        .podcast-section {
          padding: 80px 0;
          background: var(--dark);
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .podcast-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .podcast-header h2 {
          font-family: var(--font-display);
          font-size: 40px;
          color: #fff;
        }
        .podcast-header p {
          color: rgba(255,255,255,0.6);
          font-size: 16px;
          margin-top: 10px;
        }
        .podcast-marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        .podcast-marquee-wrapper::before,
        .podcast-marquee-wrapper::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 100px;
          z-index: 2;
          pointer-events: none;
        }
        .podcast-marquee-wrapper::before {
          left: 0;
          background: linear-gradient(to right, var(--dark), transparent);
        }
        .podcast-marquee-wrapper::after {
          right: 0;
          background: linear-gradient(to left, var(--dark), transparent);
        }
        .podcast-marquee {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: scroll-podcasts 40s linear infinite;
          padding: 10px 0 30px;
        }
        .podcast-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-podcasts {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 15px)); }
        }
        .podcast-card {
          width: 340px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }
        .podcast-card:hover {
          transform: translateY(-8px);
          border-color: rgba(233,69,96,0.4);
          box-shadow: 0 15px 40px rgba(0,0,0,0.5), 0 0 20px rgba(233,69,96,0.1);
        }
        .podcast-thumb {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: #000;
        }
        .podcast-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          opacity: 0.9;
        }
        .podcast-card:hover .podcast-thumb img {
          transform: scale(1.05);
          opacity: 1;
        }
        .podcast-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 56px;
          height: 56px;
          background: rgba(233,69,96,0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          opacity: 0;
          transition: all 0.3s ease;
          backdrop-filter: blur(4px);
        }
        .podcast-play svg {
          width: 24px;
          height: 24px;
          fill: currentColor;
          margin-left: 4px;
        }
        .podcast-card:hover .podcast-play {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.1);
        }
        .podcast-info {
          padding: 24px;
        }
        .podcast-info h3 {
          color: #fff;
          font-size: 16px;
          line-height: 1.5;
          font-family: var(--font-body, sans-serif);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 12px;
          font-weight: 600;
        }
        .podcast-info .yt-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
          transition: color 0.3s;
        }
        .podcast-info .yt-badge svg {
          width: 16px;
          height: 16px;
          fill: #ff0000;
        }
        .podcast-card:hover .yt-badge {
          color: rgba(255,255,255,0.8);
        }
        @media (max-width: 768px) {
          .podcast-card { width: 280px; }
          .podcast-header h2 { font-size: 32px; }
          .podcast-header { margin-bottom: 30px; }
        }
      `;
      document.head.appendChild(style);
    }

    const cardsHtml = PODCASTS_DATA.map(renderPodcastCard).join('');
    // Duplicate for infinite marquee
    const marqueeHtml = cardsHtml + cardsHtml;

    root.innerHTML = `
      <section class="podcast-section" id="podcasts">
        <div class="podcast-header">
          <p class="hero-eyebrow">Expert Insights</p>
          <h2>Featured Podcasts & Interviews</h2>
          <p>Dive deep into fitness truths, myths, and transformations with Coach Sandhya.</p>
        </div>
        <div class="podcast-marquee-wrapper">
          <div class="podcast-marquee" id="podcast-marquee">
            ${marqueeHtml}
          </div>
        </div>
      </section>
    `;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPodcasts);
  } else {
    initPodcasts();
  }

})();
