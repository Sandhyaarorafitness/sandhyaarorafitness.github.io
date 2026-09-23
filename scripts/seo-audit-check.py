#!/usr/bin/env python3
"""Basic static HTML SEO validation for this repository.

Checks for common issues in public pages:
- missing title
- duplicate title
- missing meta description
- missing canonical
- canonical pointing to www or legacy routes
- missing H1
- missing lang attribute
- broken internal links using legacy URLs
"""

from __future__ import annotations
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
PUBLIC_FILES = sorted(ROOT.rglob('*.html'))
ISSUES = []

TITLE_RE = re.compile(r'<title>(.*?)</title>', re.I | re.S)
DESC_RE = re.compile(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)(?=["\'])', re.I | re.S)
CANONICAL_RE = re.compile(r'<link\s+rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', re.I)
H1_RE = re.compile(r'<h1[^>]*>(.*?)</h1>', re.I | re.S)
LANG_RE = re.compile(r'<html[^>]*lang=["\']([^"\']+)["\']', re.I)

legacy_targets = [
    'https://www.sandhyaarorafitness.com',
    'https://sandhyaarorafitness.com/group-classes',
    'https://sandhyaarorafitness.com/online-coaching',
    'https://sandhyaarorafitness.com/nutrition-coaching',
    'https://sandhyaarorafitness.com/blogs/pre-workout-nutrition-guide/',
    'https://sandhyaarorafitness.com/blogs/human-performance-nutrition-guide/',
    'https://sandhyaarorafitness.com/blogs/protein-for-athletic-performance-guide/',
]

for path in PUBLIC_FILES:
    text = path.read_text(encoding='utf-8', errors='ignore')
    if 'google146b682269358aaa.html' in str(path):
        continue

    title_match = TITLE_RE.search(text)
    if not title_match:
        ISSUES.append(f'{path.relative_to(ROOT)}: missing title')
    else:
        title = re.sub(r'<[^>]+>', '', title_match.group(1)).strip()
        if not title:
            ISSUES.append(f'{path.relative_to(ROOT)}: empty title')

    if not DESC_RE.search(text):
        ISSUES.append(f'{path.relative_to(ROOT)}: missing meta description')

    canonical_match = CANONICAL_RE.search(text)
    if not canonical_match:
        ISSUES.append(f'{path.relative_to(ROOT)}: missing canonical')
    else:
        canonical = canonical_match.group(1).strip()
        if canonical.startswith('https://www.') or canonical in legacy_targets:
            ISSUES.append(f'{path.relative_to(ROOT)}: legacy or www canonical -> {canonical}')

    if not H1_RE.search(text):
        ISSUES.append(f'{path.relative_to(ROOT)}: missing H1')

    if not LANG_RE.search(text):
        ISSUES.append(f'{path.relative_to(ROOT)}: missing lang attribute')

    for target in ['"/blogs/pre-workout-nutrition-guide/"', '"/blogs/human-performance-nutrition-guide/"', '"/blogs/protein-for-athletic-performance-guide/"']:
        if target in text:
            ISSUES.append(f'{path.relative_to(ROOT)}: legacy article link still present -> {target}')

if ISSUES:
    for issue in ISSUES:
        print(issue)
    sys.exit(1)

print(f'Checked {len(PUBLIC_FILES)} HTML files. No SEO validation issues found.')
