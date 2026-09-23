# SEO Audit Report

## Executive summary

This repository is a static HTML website for Sandhya Arora Fitness. The site already includes a strong visual brand and a substantial blog library, but there are several important technical SEO issues that need to be corrected to maintain clean indexing and consistent crawl signals.

The most important issues identified were:

- mixed canonical URL signals (`www` vs non-www)
- legacy route slugs that do not match the currently published canonical URLs
- inconsistent internal page structure around the older route names
- missing dedicated documentation for monitoring and search-engine submission
- risk of duplicated/contradictory metadata if legacy URLs remain in circulation
- unresolved business factual claims that should be conservatively phrased or reviewed by the owner

The site remains a valid static HTML publication with a clear commercial service model and useful educational content. The main goal at this stage is to create a clean canonical structure, keep the core pages discoverable, and avoid false or unsupported claims.

## Existing technical architecture

- Site type: static HTML pages
- Language: HTML/CSS/JS
- Hosting: GitHub Pages via repository root
- Domain: sandhyaarorafitness.com
- Configuration: custom `CNAME` file points to the production domain
- Sitemap: static XML file at `/sitemap.xml`
- Robots: static `robots.txt` file
- Rendering: server-rendered static HTML pages, no framework or build pipeline

## Public page inventory

The site includes the following public HTML routes:

- Homepage: /
- Blog index: /blogs/
- Services:
  - /services/personal-fitness-trainer/
  - /services/group-fitness-classes/
  - /services/online-fitness-coach/
  - /services/nutrition-coaching/
- Pricing: /pricing/
- Articles:
  - /blogs/articles/benefits-of-personal-training/
  - /blogs/articles/best-supplements-for-performance/
  - /blogs/articles/human-performance-nutrition/
  - /blogs/articles/hydration-for-athletes/
  - /blogs/articles/muscle-recovery-foods/
  - /blogs/articles/nutrition-for-fat-loss/
  - /blogs/articles/nutrition-for-muscle-gain/
  - /blogs/articles/one-on-one-personal-training/
  - /blogs/articles/online-personal-trainer/
  - /blogs/articles/personal-fitness-trainer/
  - /blogs/articles/personal-trainer-at-home/
  - /blogs/articles/personal-trainer-for-weight-loss/
  - /blogs/articles/personal-training-cost/
  - /blogs/articles/personal-training-services/
  - /blogs/articles/post-workout-nutrition-that-speeds-recovery/
  - /blogs/articles/pre-workout-nutrition/
  - /blogs/articles/the-ultimate-guide-to-protein-for-athletic-performance-how-much-do-you-really-need/

## Indexability findings

- Canonical URLs were inconsistent in some pages and still referenced legacy `www` or route variants.
- Some article metadata referenced older URLs or mismatched article paths.
- The public pages are mostly crawlable and indexable, but canonical consistency matters for avoiding duplicate interpretation across the same content.
- The sitemap is present and mostly aligned to the live domain, but it should be treated as a canonical source of touchpoints for future maintenance.

## Metadata findings

- The homepage and main service pages have useful page titles and descriptions.
- The repository contains a substantial amount of article metadata already.
- Several pages still use keyword-heavy phrasing and some meta titles are overly long or awkward.
- Some stronger canonicalization is needed around legacy URL variants and route names.

## Content findings

- Content quality is generally good and informationally useful.
- The site includes many relevant nutrition and fitness articles around the business’s service area and coaching specialties.
- A few pages contain strong result claims or near-guarantee language that should be reviewed for factual support before being treated as definitive statements.
- Content is generally people-first and service-led, without obvious spam patterns.

## Internal-linking findings

- There is a meaningful internal link architecture across services and articles.
- Some older article references still point at legacy URLs rather than canonical article paths.
- Internal linking can be further tightened by aligning the blog and service content around the current canonical URLs.

## Schema findings

- The site already includes JSON-LD for key business and FAQ data.
- The main issue is not absence of schema, but consistency: the same business and service entity should remain aligned across pages and domains.
- Some schema references still assume a `www` domain or different route names; those should be normalized.

## Image findings

- Images are served from a mix of remote image hosts and some project assets.
- The site uses meaningful imagery and hero graphics in a static style.
- Performance and ALT conventions are reasonable but could be tightened with a more consistent image strategy.

## Performance findings

- Site is lightweight static HTML, which is inherently performance-friendly.
- The main performance risks are external font and script loading, not application complexity.
- The current static setup is easier to keep fast than a JavaScript-heavy site.

## Accessibility findings

- The pages include a clear focus ring and accessible navigation patterns.
- The static HTML structure is generally semantic and usable.
- The content is readable and mobile-friendly with a consistent design language.

## Local SEO findings

- The site appears to serve a combination of India-based and worldwide online coaching services.
- Publicly available in-person location details should be confirmed unless the business wants to keep the model broad and online-first.
- The site should avoid creating city or regional pages unless there is a real, documented service footprint and clear unique content for each locale.

## AI/AEO/GEO readiness findings

- The site is already semantically structured in a usable way for AI and search systems.
- The biggest AI related risk is not hidden manipulation but inconsistent URL and entity signals.
- Better canonical normalization and clearer service-page structure improve answer extraction and entity resolution.

## Keyword cannibalization findings

- Some content clusters overlap around personal training, online coaching, and weight loss guidance.
- This is not necessarily harmful if the content is clearly differentiated by intent and service type.
- The main risk is not exact-match keyword stuffing but repeated themes across pages without a clear hierarchy.

## Redirects

No real redirect configuration existed in this static file repository beyond canonical markup. There are legacy route patterns in content references that should be consolidated as the canonical URLs are finalized and externally served by the live site.

## Sitemap

- File exists: `/sitemap.xml`
- It is already present and mostly aligned to key production URLs.
- It should continue to include only canonical, indexable pages.
- Legacy or noindex URLs should not be added.

## Robots.txt

- File exists: `/robots.txt`
- It is valid and does not block critical content.
- It correctly references the sitemap.

## External actions required

The following tasks require external action or confirmation from the site owner:

- confirmation of the public in-person/service-area model
- confirmation of any official social profiles that should be used in `sameAs`
- review of client testimonial/review language before any structured review markup is expanded
- review of any result claims that need to be softened for factual accuracy
- verification of Google Search Console / Bing Webmaster Tools setup and sitemap submission
- confirmation of any real business addresses or contact details to keep aligned across the site

## Validation performed

This report was created after inspection of the repository and the live static HTML output. The main technical cleanup performed in the repository focused on canonical normalization and documentation.

## Remaining known limitations

- This repo does not include a framework, build process, or real deployment automation to generate meta tags dynamically.
- Some pages may continue to include older wording or claim language that should be re-reviewed for marketing accuracy.
- Because the site is static HTML, ongoing SEO improvements depend on continued manual maintenance of canonical URLs and page metadata.
