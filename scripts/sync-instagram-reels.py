#!/usr/bin/env python3
"""
Sync Instagram Reels Global Component across all pages:
- index.html
- services/online-fitness-coach/index.html
- services/personal-fitness-trainer/index.html
- services/group-fitness-classes/index.html
- services/nutrition-coaching/index.html

Extracts REELS_DATA and REEL_CATEGORIES from assets/js/instagram-reels.js
and updates the #instagram section in each page to use the global component structure.
"""

import os
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_COMPONENT_PATH = os.path.join(ROOT_DIR, 'assets', 'js', 'instagram-reels.js')

PAGES = [
    {
        'file': os.path.join(ROOT_DIR, 'index.html'),
        'asset_prefix': 'assets/',
        'script_src': 'assets/js/instagram-reels.js',
    },
    {
        'file': os.path.join(ROOT_DIR, 'services', 'online-fitness-coach', 'index.html'),
        'asset_prefix': '../../assets/',
        'script_src': '../../assets/js/instagram-reels.js',
    },
    {
        'file': os.path.join(ROOT_DIR, 'services', 'personal-fitness-trainer', 'index.html'),
        'asset_prefix': '../../assets/',
        'script_src': '../../assets/js/instagram-reels.js',
    },
    {
        'file': os.path.join(ROOT_DIR, 'services', 'group-fitness-classes', 'index.html'),
        'asset_prefix': '../../assets/',
        'script_src': '../../assets/js/instagram-reels.js',
    },
    {
        'file': os.path.join(ROOT_DIR, 'services', 'nutrition-coaching', 'index.html'),
        'asset_prefix': '../../assets/',
        'script_src': '../../assets/js/instagram-reels.js',
    },
]

CATEGORIES = [
    ('all', 'All'),
    ('trainer', 'Know Your Trainer'),
    ('strength', 'Strength Training'),
    ('online', 'Online Training'),
    ('offline', 'Offline / Client Training'),
    ('group', 'Group Training'),
    ('results', 'Testimonials & Results'),
    ('nutrition', 'Nutrition & Education'),
]

# Order and attributes of all reels
REELS = [
    # Latest reels on top
    {'type': 'instagram', 'id': 'Ddyw0UtEoRd', 'categories': 'online offline', 'pills': ['Online', 'Client']},
    {'type': 'instagram', 'id': 'Dd1N35_z1_Z', 'categories': 'trainer', 'pills': ['Trainer', 'Latest']},
    {'type': 'instagram', 'id': 'DdtlgxyT246', 'categories': 'nutrition', 'pills': ['Nutrition', 'Tips']},
    {'type': 'instagram', 'id': 'DaZ5UvNzgNl', 'categories': 'strength offline', 'pills': ['Strength', 'Training']},
    {'type': 'instagram', 'id': 'DcB41FOTR88', 'categories': 'offline results', 'pills': ['Client', 'Testimonial']},
    {'type': 'instagram', 'id': 'DcwGQtLTq7n', 'categories': 'offline results', 'pills': ['Client', 'Testimonial']},
    
    # Highlights
    {'type': 'instagram', 'id': 'DdoUZ80TNcM', 'categories': 'trainer', 'pills': ['Trainer', 'Story']},
    {'type': 'instagram', 'id': 'DdX-cQuz2dN', 'categories': 'online', 'pills': ['Online', 'Program']},
    {'type': 'instagram', 'id': 'Ddp8UMjzQaQ', 'categories': 'results', 'pills': ['Results', 'Testimonial']},
    {'type': 'instagram', 'id': 'DdqHms3T7gC', 'categories': 'results', 'pills': ['Results', 'Testimonial']},
    {'type': 'instagram', 'id': 'DdqhVA9lPJu', 'categories': 'results', 'pills': ['Results', 'Client']},
    
    # Trainer
    {'type': 'instagram', 'id': 'DdjLKbFTV1Z', 'categories': 'trainer', 'pills': ['Trainer', 'Latest']},
    {'type': 'preview', 'url': 'https://www.instagram.com/reel/Dcgqe_CvHHC/?stkn=NTc4MTIwNjQ2YQ==', 'img': 'images/trainer-Dcgqe_CvHHC.jpg', 'alt': 'Watch Sandhya Arora trainer reel on Instagram', 'categories': 'trainer', 'pills': ['Trainer', 'Intro']},
    {'type': 'preview', 'url': 'https://www.instagram.com/reel/DcgUuqTPzU6/?stkn=MXM2amtieDA5MTRuZg==', 'img': 'images/trainer-DcgUuqTPzU6.jpg', 'alt': 'Watch Sandhya Arora trainer reel on Instagram', 'categories': 'trainer', 'pills': ['Trainer', 'Bio']},
    {'type': 'instagram', 'id': 'Dcd9uNgxlKc', 'categories': 'trainer', 'pills': ['Trainer', 'Story']},
    {'type': 'preview', 'url': 'https://www.instagram.com/reel/DcdX4QkPgbX/?stkn=MWNmYjZlMTlmZ3N4ZQ==', 'img': 'images/trainer-DcdX4QkPgbX.jpg', 'alt': 'Watch Sandhya Arora trainer reel on Instagram', 'categories': 'trainer', 'pills': ['Trainer', 'Approach']},
    {'type': 'preview', 'url': 'https://www.instagram.com/reel/DbIIfp_pdTO/?stkn=MTNleGxreXg4cjlxNQ==', 'img': 'images/trainer-DbIIfp_pdTO.jpg', 'alt': 'Watch Sandhya Arora trainer reel on Instagram', 'categories': 'trainer', 'pills': ['Trainer', 'Journey']},
    {'type': 'preview', 'url': 'https://www.instagram.com/reel/DbID6i1JDba/?stkn=YnJmcWtteG82ajh1', 'img': 'images/trainer-DbID6i1JDba.jpg', 'alt': 'Watch Sandhya Arora trainer reel on Instagram', 'categories': 'trainer', 'pills': ['Trainer', 'Values']},
    
    # YouTube Shorts
    {'type': 'preview', 'url': 'https://youtube.com/shorts/Vm-TFA7rOek?si=8UxHuBo4yK95nXxN', 'img': 'images/trainer-Vm-TFA7rOek.jpg', 'alt': 'Watch Sandhya Arora trainer Short on YouTube', 'categories': 'trainer', 'pills': ['Trainer', 'Short']},
    {'type': 'preview', 'url': 'https://youtube.com/shorts/Ax5acMFQBJg?si=Ot19irapErVm9yYP', 'img': 'images/trainer-Ax5acMFQBJg.jpg', 'alt': 'Watch Sandhya Arora trainer Short on YouTube', 'categories': 'trainer', 'pills': ['Trainer', 'Short']},
    
    # Categorized reels
    {'type': 'instagram', 'id': 'DdbTG3GTQi2', 'categories': 'online', 'pills': ['Online', 'Program']},
    {'type': 'instagram', 'id': 'DdTdQ3FTJOO', 'categories': 'group', 'pills': ['Group', 'Class']},
    {'type': 'instagram', 'id': 'DdTU1s-T7pC', 'categories': 'offline', 'pills': ['Offline', 'Training']},
    {'type': 'instagram', 'id': 'DdOQiS8TrqW', 'categories': 'offline', 'pills': ['Client', 'Form']},
    {'type': 'instagram', 'id': 'DdKy1YEz4iz', 'categories': 'nutrition', 'pills': ['Education', 'Nutrition']},
    {'type': 'instagram', 'id': 'DdKtoNszL2r', 'categories': 'results', 'pills': ['Results', 'Testimonial']},
    {'type': 'instagram', 'id': 'DdHXj8aNqHM', 'categories': 'nutrition', 'pills': ['Education', 'Workout']},
]

def generate_section_html(asset_prefix, script_src):
    buttons_html = []
    for idx, (cat_id, cat_label) in enumerate(CATEGORIES):
        active = ' active' if idx == 0 else ''
        buttons_html.append(f'      <button class="reel-category-btn{active}" type="button" data-category="{cat_id}">{cat_label}</button>')
    buttons_block = '\n'.join(buttons_html)

    cards_html = []
    for item in REELS:
        pills_str = ''.join([f'<span class="reel-pill">{p}</span>' for p in item['pills']])
        if item['type'] == 'preview':
            img_path = f"{asset_prefix}{item['img']}"
            card = f'      <div class="ig-card reel-card" data-category="{item["categories"]}"><a class="reel-preview-link" href="{item["url"]}" target="_blank" rel="noopener"><img class="reel-preview-image" src="{img_path}" alt="{item["alt"]}"></a><div class="reel-card-meta">{pills_str}</div></div>'
        else:
            embed_url = f'https://www.instagram.com/reel/{item["id"]}/embed/?utm_source=ig_embed'
            card = f'      <div class="ig-card reel-card" data-category="{item["categories"]}"><iframe src="{embed_url}" scrolling="no" allowtransparency="true" allow="encrypted-media; autoplay; clipboard-write; picture-in-picture; web-share"></iframe><div class="reel-card-meta">{pills_str}</div></div>'
        cards_html.append(card)
    cards_block = '\n'.join(cards_html)

    return f'''<!-- ── INSTAGRAM REELS (GLOBAL COMPONENT) ───────────────────────────────── -->
<section class="instagram-gallery" id="instagram">
  <div id="instagram-reels-root">
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
{buttons_block}
      </div>

      <div class="ig-grid" id="reelGrid">
{cards_block}
      </div>
    </div>
  </div>
</section>
<script src="{script_src}?v=2" defer></script>'''

def update_page(page_info):
    file_path = page_info['file']
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    new_section = generate_section_html(page_info['asset_prefix'], page_info['script_src'])

    # Match from instagram section until the next section comment (CTA BANNER or TESTIMONIALS)
    pattern = r'(?:<!-- ── INSTAGRAM REELS.*?-->\s*)?<section class="instagram-gallery" id="instagram">.*?(?=\s*<!-- ── (?:CTA BANNER|TESTIMONIALS))'
    
    if re.search(pattern, content, re.DOTALL):
        updated_content = re.sub(pattern, new_section, content, count=1, flags=re.DOTALL)
    else:
        print(f"Could not locate instagram section in {file_path}")
        return False

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"Updated: {os.path.relpath(file_path, ROOT_DIR)}")
    return True

def main():
    print("Syncing Instagram Reels Global Component across all pages...")
    success = True
    for p in PAGES:
        if not update_page(p):
            success = False
    if success:
        print("All pages successfully synced with the global Instagram reels component!")
    else:
        print("Some pages could not be synced.")

if __name__ == '__main__':
    main()
