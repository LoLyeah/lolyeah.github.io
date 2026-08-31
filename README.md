<p align="center">
  <img src="assets/logo.png" alt="LoLyeah Logo" width="120" />
</p>

# LoLyeah Compendium

A curated collection of zero-dependency, static interactive guides, clinical simulators, and policy visualizers hosted on GitHub Pages.

**Live Site**: [lolyeah.github.io](https://lolyeah.github.io/)

---

## Overview

This repository houses standalone, accessible web applications and visual compendiums across multiple disciplines:

- **Clinical Medicine & Healthcare**: Interactive diagnostic pathways, cardiology (STEMI/ACS), neurodiversity guides (ADHD/AuDHD), pharmacology charts, and anatomical references.
- **Automotive & Energy**: Deep-dive visual directories on EV battery vendors, Chinese EV ecosystems, Indonesian hybrid market analysis, and nuclear reactor architectures.
- **Economics, Policy & Infrastructure**: Visual analyses of middle-income trap dynamics, Special Economic Zones (SEZ), high-speed rail corridors, and regional development models.
- **Science & Systems**: Physical scale models, radiation dosage comparators, and epidemiological outbreak simulators.

## Architecture

- **Stack**: Semantic HTML5, modern CSS3 (custom properties, container queries, CSS grid), and vanilla ES6 JavaScript.
- **Zero Dependencies**: Pure static assets with no runtime frameworks or build steps required.
- **Bilingual**: Selected guides provide synchronized English and Indonesian (EN/ID) localizations.
- **SEO & Metadata**: Complete Schema.org JSON-LD structured data, Open Graph tags, canonical links, and sitemap generation.

## Local Development

Serve the repository with any static file server:

```bash
# Python 3
python3 -m http.server 8000
```

Open `http://localhost:8000` in any modern web browser.

## Repository Structure

```
.
├── index.html         # Homepage discovery hub and search index
├── assets/            # Shared brand assets, stylesheets, and icons
├── topics/            # Topic hub pages and specialized subdirectories
│   ├── <topic>.html   # Topic landing page
│   └── <topic>/       # Subpages and interactive drill-downs
├── AGENTS.md          # Design standards, architecture rules, and QA checklist
└── sitemap.xml        # Search engine index map
```

## Contributing & Guidelines

Consult [AGENTS.md](AGENTS.md) for design system standards, widget contracts, accessibility requirements, and publishing rules.

## Author

Created and maintained by [LoLyeah](https://github.com/LoLyeah).
