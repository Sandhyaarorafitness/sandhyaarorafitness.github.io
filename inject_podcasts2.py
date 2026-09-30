import os

files_to_update = [
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\services\group-fitness-classes\index.html',
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\services\nutrition-coaching\index.html',
]

podcast_snippet = '\n<!-- ── PODCASTS ───────────────────────────────────────── -->\n<div id="podcasts-root"></div>\n<script src="../../assets/js/podcasts.js" defer></script>\n\n'
# Note: since these are in nested directories (services/xxx), the path to assets is `../../assets/js/podcasts.js` or `/assets/js/podcasts.js`. We will use `/assets/js/podcasts.js` to be consistent since it works from root. Wait, in Github Pages, if there's no custom domain, `/assets/...` might break if it's served from `/sandhyaarorafitness.github.io/assets/...`. But the user's custom domain is active (`sandhyaarorafitness.com`).
podcast_snippet = '\n<!-- ── PODCASTS ───────────────────────────────────────── -->\n<div id="podcasts-root"></div>\n<script src="/assets/js/podcasts.js" defer></script>\n\n'

for filepath in files_to_update:
    if not os.path.exists(filepath):
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'id="podcasts-root"' in content:
        continue

    split_marker = '<!-- ── INSTAGRAM REELS (GLOBAL COMPONENT) ───────────────────────────────── -->'
    if split_marker in content:
        parts = content.split(split_marker)
        new_content = parts[0] + podcast_snippet + split_marker + parts[1]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Injected into {filepath}")
    else:
        print(f"Could not find instagram section in {filepath}")

