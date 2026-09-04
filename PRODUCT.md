# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary users: Curious professionals, domain researchers, policy/market analysts, students, and practitioners seeking deep, structured, and unbiased explanations across medicine, automotive/clean energy, economics/infrastructure, and science.
- Secondary audience: General readers and bilingual audiences (English and Indonesian) consulting localized guides on regional public policy, healthcare protocols, and consumer automotive decisions.

## Product Purpose

- A curated, zero-dependency digital publication and interactive simulator hub hosted on GitHub Pages (`lolyeah.github.io`).
- Transforms dense academic, clinical, and economic literature into intuitive, evidence-dense compendiums, decision trees, diagnostic pathways, and visual systems models.
- Success means a reader can grasp a nuanced thesis within the first minute, adjust topic-specific variables to explore causality, and arrive at clear, defensible conclusions.

## Positioning

- Zero-dependency, ad-free, fast, standalone static interactive compendiums that bridge rigorous domain evidence with editorial visual craft.
- Distinct from generic calculator widgets and monolithic dashboard templates: each topic has a bespoke mental model, domain-specific units, and synchronized bilingual localization (EN/ID) where relevant.

## Operating Context

- Static hosting on GitHub Pages at `lolyeah.github.io`.
- Zero build steps; viewable locally via standard static web servers (`python3 -m http.server 8000`) or directly in the browser.
- High-cognition reading and analysis scenarios: clinical diagnostic reference, policy review, automotive spec comparison, or academic study.
- Viewed across desktop workstations, tablets, and mobile devices (down to 320px viewport width).

## Capabilities and Constraints

- Architecture: Semantic HTML5, modern CSS3 (custom properties, container queries, CSS grid), and vanilla ES6 JavaScript.
- Dependency rule: Static web architecture is preferred. Lightweight external client-side CDNs (e.g., Chart.js, KaTeX, Leaflet) are permitted only when domain models strictly require specialized math or visualization, with resilient static fallbacks.
- Repository structure: `index.html` serves as discovery showcase; `topics/<topic>.html` acts as topic hub; `topics/<topic>/` contains deep drill-down subpages.
- Multi-page discoverability: Schema.org JSON-LD structured data, Open Graph / Twitter cards, canonical URLs, and current `sitemap.xml` entries on every published page.
- Motion & Accessibility: Strict compliance with WCAG 2.2 reflow, contrast, and keyboard navigation standards, with `@media (prefers-reduced-motion: reduce)` fallbacks.

## Brand Commitments

- Brand Name: LoLyeah Compendium (`lolyeah.github.io`).
- Visual Voice: Editorial, modern, topic-led, calm, intentional, and premium. A curated digital publication rather than a software dashboard.
- Design System: Small, deliberate palettes per topic (one background family, surface hierarchy, primary and supporting accents); restrained depth with hairline borders and subtle tonal surfaces; no gratuitous typewriter monospace.
- Assets: Shared logos and icons in `assets/` (e.g., `assets/logo.png`).

## Evidence on Hand

- 40+ published standalone interactive guides and visual tools across four major domains:
  - Clinical Medicine & Healthcare (`topics/acs-diagnostics.html`, `topics/stemi.html`, `topics/stroke.html`, `topics/adhd.html`, `topics/audhd-clinical-analysis.html`, `topics/antibiotics.html`, `topics/laxative-comparison.html`).
  - Automotive & Energy (`topics/indonesia-car-selector.html`, `topics/indonesia-hybrid-cars.html`, `topics/china-ev-brands.html`, `topics/ev-battery-vendors.html`, `topics/nuclear-reactors.html`, `topics/geothermal-energy.html`).
  - Economics, Infrastructure & Policy (`topics/indonesia-middle-income-trap.html`, `topics/indoSEZ.html`, `topics/hsr-indonesia.html`, `topics/ikn-nusantara.html`, `topics/aviation-economics.html`, `topics/indonesia-gaji-kotor.html`).
  - Science & Systems (`topics/radcompare.html`, `topics/foodborne-outbreak.html`, `topics/solar-system.html`, `topics/fetal-development.html`).
- Established design standards and widget contracts in `AGENTS.md` and topic-specific protocols (`topics/indonesia-car-selector/AGENTS.md`).

## Product Principles

- **Topic-Led Form:** Visual language, layout hierarchy, and interaction models must follow the subject matter rather than conforming to a generic UI template.
- **Expose Causality:** Interactive models must demonstrate input → intermediate metric → result, with defensible presets, labeled assumptions, and clear disclaimers.
- **Zero-Friction Access:** Rapid static loading, no paywalls or sign-in barriers, zero telemetry or ad bloat, and graceful degradation upon CDN failure.
- **Editorial Legibility:** Prioritize reading comfort, hierarchy, typographic balance, and mobile reflow over decorative excess.
- **Bilingual Fidelity:** Localized EN/ID guides must synchronize live control values, caveats, and dynamic explanations without markup degradation.

## Accessibility & Inclusion

- WCAG 2.2 AA target across all viewports.
- Keyboard-operable interactive widgets, visible `:focus-visible` outlines, semantic landmarks, and programmatic form labels.
- Mobile reflow down to 320px without accidental horizontal overflow.
