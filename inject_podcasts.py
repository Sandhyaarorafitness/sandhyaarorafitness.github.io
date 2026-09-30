import os
import re

files_to_update = [
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\online-personal-fitness-trainer\index.html',
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\index.html',
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\services\group-fitness-classes\index.html',
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\services\nutrition-coaching\index.html',
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\services\online-fitness-coach\index.html',
    r'f:\Vinay\OneDrive\Desktop\sandhyaarorafitness.github.io\services\personal-fitness-trainer\index.html',
]

podcast_snippet = '\n<!-- ── PODCASTS ───────────────────────────────────────── -->\n<div id="podcasts-root"></div>\n<script src="/assets/js/podcasts.js" defer></script>\n'

for filepath in files_to_update:
    if not os.path.exists(filepath):
        print(f"Skipping {filepath}, does not exist.")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # If it already has the podcast root, skip
    if 'id="podcasts-root"' in content:
        print(f"Already injected in {filepath}")
        # Let's remove the hardcoded podcast html if it exists
        if '<section class="podcast-section" id="podcasts">' in content:
            content = re.sub(r'<!-- ── PODCASTS ───────────────────────────────────────── -->\s*<style>.*?<script>.*?</script>', '', content, flags=re.DOTALL)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Cleaned up hardcoded podcasts in {filepath}")
        continue

    # First, let's remove any hardcoded podcast HTML block just in case it exists (specifically in online-personal-fitness-trainer)
    if '<section class="podcast-section" id="podcasts">' in content:
        content = re.sub(r'<!-- ── PODCASTS ───────────────────────────────────────── -->\s*<style>.*?<script>.*?</script>', '', content, flags=re.DOTALL)

    # Now, find the about section ending, and insert the snippet
    # The structure is usually <section class="about" id="about"> ... </section>
    # We will search for `<section class="about" id="about">` and then the first `</section>` after it.
    about_match = re.search(r'<section class="about".*?</section>', content, flags=re.DOTALL)
    if about_match:
        end_idx = about_match.end()
        new_content = content[:end_idx] + podcast_snippet + content[end_idx:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Injected into {filepath}")
    else:
        print(f"Could not find about section in {filepath}")

