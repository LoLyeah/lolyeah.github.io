# AGENTS.md — Repository Architecture & Developer Conventions

This document outlines structural rules, navigation guidelines, SEO requirements, motion standards, and design conventions for AI agents and developers working on the `lolyeah.github.io` codebase.

---

## 🏗️ Repository Architecture & Directory Roles

`lolyeah.github.io` is a zero-dependency, static web compendium and interactive simulator hub hosted via GitHub Pages.

- **`index.html`**: Cinematic main entry point and interactive search showcase. Displays registered topic hub cards.
- **`topics/`**:
  - Main topic hub pages: `topics/<topic-name>.html` (registered on `index.html` grid and indexed in `sitemap.xml`).
  - Subpage directories: `topics/<topic-name>/` (contains subpages `subpage-01.html`, `subpage-02.html`, etc.).
- **`assets/`**: Global brand assets, favicons (`favicon-32x32.png`, `apple-touch-icon.png`), and logos.
- **`beta/`**: Staging area and experimental prototype guides.
- **`sitemap.xml` & `robots.txt`**: Production indexing and crawler instructions.

---

## 📁 Multi-Page Topic & Subpage Conventions

When building complex, high-density compendiums or guides that require multiple subpages:

1. **Main Hub Page Placement**:
   - The main entry point for a topic MUST be placed directly inside `topics/` as `topics/<topic-name>.html` (e.g. `topics/car-suspension.html`).
   - `index.html` (the homepage showcase grid) MUST register **only the main hub page** (`topics/<topic-name>.html`) to prevent cluttering the main directory listing.

2. **Dedicated Subpage Folder**:
   - Subpages MUST be organized inside a dedicated subfolder matching the topic name: `topics/<topic-name>/` (e.g. `topics/car-suspension/`).
   - Example subpage structure:
     ```
     topics/
     ├── car-suspension.html                    (Main Hub - Registered on index.html)
     └── car-suspension/                        (Dedicated Subpages Directory)
         ├── active-tech.html                   (Subpage 01)
         ├── ice-vs-ev.html                      (Subpage 02)
         └── indonesia-guide.html               (Subpage 03)
     ```

3. **User Pathway & Navigation Flow**:
   - **Homepage -> Main Hub -> Subpage**: Users land on `topics/<topic-name>.html` via `index.html`.
   - **Subpages Banner**: The main hub page must feature a prominent **Subpages Directory Banner** linking to all subpages inside `topics/<topic-name>/`.
   - **Back Navigation**: Every subpage MUST contain a clear back-link (`← Main Compendium`) pointing to `../<topic-name>.html`.

4. **Sitemap Indexing**:
   - All published pages (both hub pages and subpages) MUST be registered in `sitemap.xml`.
   - Priority hierarchy:
     - Homepage (`https://lolyeah.github.io/`): `<priority>1.0</priority>`
     - Main Hub Pages (`topics/<topic-name>.html`): `<priority>0.9</priority>`
     - Subpages & Prototypes (`topics/<topic-name>/<subpage>.html`): `<priority>0.8</priority>`
   - Include updated `<lastmod>YYYY-MM-DD</lastmod>` dates.

---

## 🌟 Exemplar & Benchmark References: `topics/aviation-economics.html` & `topics/train-bus-economics.html`

When building or updating interactive guides, compendiums, or simulators, developers and AI agents SHOULD reference both `topics/aviation-economics.html` and `topics/train-bus-economics.html` as primary **gold standard benchmarks** for visual design quality, fluid animations, interactive features, and codebase structure.

*Note: The code patterns and parameters below serve as reference benchmarks—not rigid constraints. Agents are encouraged to exercise creative freedom and adapt aesthetics, color palettes, typography, and interactive components to suit the specific domain and tone of each topic.*

Key patterns to study and mirror from these exemplars:

### 1. 🎨 Theme Design Paradigms
- **Dark Obsidian Theme Benchmark (`topics/aviation-economics.html`)**:
  - **Color Palette & CSS Variables**:
    ```css
    :root {
        --bg: #050a12;
        --bg-surface: #0a1120;
        --bg-card: #0e172a;
        --border: rgba(56, 189, 248, 0.15);
        --border-hov: rgba(56, 189, 248, 0.35);
        --cyan: #00e5ff;
        --blue: #38bdf8;
        --yellow: #ffc107;
        --red: #f43f5e;
        --green: #10b981;
        --text-primary: #f1f5f9;
        --text-secondary: #94a3b8;
    }
    ```
  - **Ambient Depth & Overlay**: Uses a noise overlay SVG (`body::before`) at low opacity (`.018`) paired with animated scanlines (`body::after` running a linear infinite `@keyframes scan`).
  - **Typography Stack**: Headings (`Bebas Neue`), Body Text (`Crimson Pro`), Subheaders (`Outfit`), Metrics & Code (`Space Mono`).

- **Light Paper & Mint Theme Benchmark (`topics/train-bus-economics.html`)**:
  - **Color Palette & CSS Variables**:
    ```css
    :root {
        --bg: #f2f5f3;
        --paper: #ffffff;
        --ink: #102c2a;
        --muted: #58706d;
        --line: #cbd8d4;
        --rail: #0d796b;         /* Rail brand node */
        --rail-soft: #d9eee9;
        --bus: #e25d32;          /* Bus brand node */
        --bus-soft: #fff0e9;
        --shadow: 0 18px 50px rgba(16, 44, 42, .09);
    }
    ```
  - **Visual Motif & Glassmorphic Nav**: Tactile grid background pattern (`28px x 28px`), radial brand accent gradients, and floating glassmorphic nav bar (`background: rgba(255, 255, 255, .91); backdrop-filter: blur(18px)`).
  - **Typography Stack**: Headings & Body (`Outfit`), Code & Metrics (`Space Mono`).

### 2. ⚡ Motion & Scroll Reveal Implementation
- **Reading Progress Bar**:
  Fixed reading indicator bar (`#reading-progress` or `#progress`) positioned at top of viewport (`height: 4px`), dynamically calculated on scroll:
  ```javascript
  window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('reading-progress').style.width = scrolled + '%';
  });
  ```
- **Viewport Reveal Animations (`IntersectionObserver`)**:
  Content blocks use `.reveal` class (`opacity: 0; transform: translateY(24px); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`).
  An `IntersectionObserver` triggers `.reveal.active` (`opacity: 1; transform: translateY(0)`):
  ```javascript
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  ```
- **Tactile Hover & Elevation Curves**:
  Card hover effects leverage physics curves: `transform: translateY(-3px) scale(1.005); transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);`.

### 3. 🛠️ Interactive Simulators & Dynamic Widgets
- **Bento Grid Architecture**: Metric cards, stat counters, and parameters organized inside modular CSS Grid containers (`display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px`).
- **Interactive Calculators**: Real-time slider controls (`<input type="range">`) bound to DOM event listeners (`input`, `change`) updating fare breakdowns, tax savings, or operating margin calculations live.
- **Dynamic Chart Visualizations**: Responsive Chart.js canvas elements initialized with custom CSS-variable color palettes (`var(--cyan)`, `var(--rail)`, `var(--bus)`), updated reactively upon user parameter or language changes.

### 4. 🌐 Bilingual Engine (EN / ID)
- Elements requiring localization use `data-i18n="translation_key"` attributes.
- Complete dictionary object `i18n = { en: { ... }, id: { ... } }` stored in memory.
- Language switcher function updates `localStorage`, `document.documentElement.lang`, and updates all matching `[data-i18n]` nodes without triggering page reloads:
  ```javascript
  function setLang(lang) {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
      document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (i18n[lang] && i18n[lang][key]) {
              el.innerHTML = i18n[lang][key];
          }
      });
      document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.id === `btn-${lang}`);
          btn.setAttribute('aria-pressed', btn.id === `btn-${lang}`);
      });
  }
  ```

### 5. 🔍 SEO & Metadata Standards
- Includes complete **Antigravity SEO Header Block** (`meta description`, `canonical`, OpenGraph `og:title`/`og:image`, Twitter Cards, and `TechArticle` / `WebPage` Schema.org JSON-LD).

---

## 🎨 UI, UX & Modern Design Trends

- **Gold Standard Benchmarks**: Refer to `topics/aviation-economics.html` (dark theme) and `topics/train-bus-economics.html` (light theme) for complete reference implementations combining state-of-the-art 2026 aesthetics with performance-focused CSS animations and dynamic widgets.
- **Creative Freedom & Non-Strict Design System**: Specific layouts, visual motifs, dynamic widgets, and 2026 design trends are **NOT strict or rigid constraints**. Agents and developers are encouraged to exercise creative freedom and adapt the aesthetic, color palette, UI structure, and interaction design to fit the specific needs, domain, and tone of each individual topic.
- **State-of-the-Art Visual Inspiration (2026 Trends)**:
  - **Liquid Glass & Dynamic Depth**: Optional glassmorphism with adaptive backdrop-blur (`backdrop-filter: blur(12px)` to `blur(20px)`), translucent noise/textures, and soft ambient glowing borders (`rgba(255,255,255,0.08)` to accent glows).
  - **Bento Grid Architecture**: Modular, clean, bento-box-inspired grid layouts for organizing complex data, metric cards, and interactive features effortlessly.
  - **Dark-First Curated Palette**: Deep obsidian/midnight canvas (`#030712` / `#0a0a0a`) paired with vibrant HSL/HEX accent nodes (`--cyan`: `#00d4ff`, `--emerald`: `#10b981`, `--amber`: `#f59e0b`, `--purple`: `#a855f7`).
  - **Refined Typography Contrast**: Editorial serif or modern display headers (`Instrument Serif`, `Outfit`, `Playfair Display`) paired with crisp sans-serif body text (`Geist`, `Plus Jakarta Sans`, `Inter`) and monospace code/metrics (`Geist Mono`, `JetBrains Mono`).
- **Universal Screen Compatibility**: All layouts MUST be fully responsive across all viewport sizes:
  - Mobile portrait & landscape (`320px` – `480px`)
  - Tablets (`768px` – `1024px`)
  - Laptops & Desktops (`1280px` – `1920px+`)
  - Enforce fluid grid/flex layouts with zero unwanted horizontal scrollbars.

---

## ✨ Motion & Smooth Animation Guidelines

Animations MUST be buttery smooth, performant, and functionally purposeful—enhancing spatial awareness and tactile feedback:

1. **Native Scroll-Driven Animations**:
   - Utilize native CSS `animation-timeline: scroll()` and `view()` for smooth, GPU-accelerated scroll progress indicators, parallax header depths, and viewport reveal triggers.
   - Avoid heavy JS scroll-event listeners to keep rendering on the browser compositor thread (maximizing Core Web Vitals / INP performance).

2. **App-Like View Transitions**:
   - Leverage the native `View Transitions API` (`document.startViewTransition`) for seamless, jank-free page morphing and tab switching.

3. **Physics-Based Micro-Interactions & Tactile Feedback**:
   - Use spring physics transition curves (e.g., `transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1)` or `cubic-bezier(0.16, 1, 0.3, 1)`).
   - Card hover states: Gentle elevation (`transform: translateY(-3px) scale(1.005)`), border glow illumination, and soft drop-shadow expansion (`0 12px 32px rgba(0,0,0,0.4)`).
   - Button click state: Subtle tactile compression (`transform: scale(0.97)`).

4. **Smooth Entry/Exit Transitions (`@starting-style`)**:
   - Implement `@starting-style` and `transition-behavior: allow-discrete` for dropdowns, modals, popovers, and filterable grid cards to ensure smooth opacity/transform fades without layout popping when toggled (`display: none` to `display: block`).

---

## 🌍 Bilingual Support (EN / ID)

All interactive guides and compendiums should provide dual-language support:
- Use `.en-only` and `.id-only` utility classes for language-specific content elements.
- Persist user preference via `localStorage.getItem('lang')` / `localStorage.setItem('lang', ...)`.
- Provide an intuitive header/nav toggle button to switch language modes smoothly without full page reloads.

---

## 🧭 Interactive Page Lessons

- **Subpages MUST be functional bilingual pages**: add EN/ID controls, persist language preference, update `<html lang>`, expose active state with `aria-pressed`, and translate meaningful visible content. Never add language buttons without translation behavior.
- **Nested markup MUST survive language changes**: prefer `data-en`/`data-id` or keyed translation nodes. If translating text nodes, preserve nested heading spans, links, labels, and other inline markup when toggling repeatedly.
- **Fixed navigation MUST not cover anchors**: use `scroll-padding-top` or `scroll-margin-top`, and offset custom `scrollTo()` calls by measured fixed-nav height. Test every section link, including hero buttons and `#crossings`, `#context`, `#tool`, and `#sources` targets.
- **Uneven grid panels MUST align to content**: calculator and dashboard grids containing panels of different heights should use `align-items: start`; do not let a long explanation card stretch short control panels into large empty regions.
- **Decision tools MUST explain outputs**: show input contribution, scoring formula, threshold, recommendation rationale, and intervention/design logic. Keep explanations synchronized with language toggle and live input changes. Label illustrative policy logic as non-engineering guidance.
- **Homepage topic numbering MUST remain gapless**: `.feature-icon` numbers control descending newest-first sorting in `index.html`; renumber all cards together when adding or removing topics, then verify no missing or duplicate numbers.
- **Before publishing UI changes**, run `git diff --check`, verify all anchor targets and subpage back-links, test EN/ID toggling and mobile layout, then inspect `git status` before commit/push.

---

## 🔍 SEO & Metadata Standards

Every HTML page created or updated MUST contain the standardized **Antigravity SEO Header Block** inside `<head>`:

```html
<!-- BEGIN ANTIGRAVITY SEO OPTIMIZATION -->
<meta name="description" content="[Detailed 1-2 sentence description of the guide/topic]">
<meta name="keywords" content="[Relevant comma-separated keywords]">
<meta name="author" content="LoLyeah">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://lolyeah.github.io/topics/[path].html">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="article">
<meta property="og:title" content="[Title] | LoLyeah">
<meta property="og:description" content="[Description]">
<meta property="og:url" content="https://lolyeah.github.io/topics/[path].html">
<meta property="og:site_name" content="LoLyeah Interactive Guides">
<meta property="og:image" content="https://lolyeah.github.io/assets/og-image.png">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Title] | LoLyeah">
<meta property="twitter:description" content="[Description]">
<meta name="twitter:image" content="https://lolyeah.github.io/assets/og-image.png">

<!-- Structured Data JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "name": "[Title]",
  "description": "[Description]",
  "url": "https://lolyeah.github.io/topics/[path].html",
  "publisher": {
    "@type": "Organization",
    "name": "LoLyeah Interactive Guides",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lolyeah.github.io/assets/logo.png"
    }
  },
  "author": {
    "@type": "Person",
    "name": "LoLyeah"
  }
}
</script>
<!-- END ANTIGRAVITY SEO OPTIMIZATION -->
```

---

## 🚀 Topic Creation & Registration Checklist

When creating a new interactive guide or compendium, complete the following steps:

1. [ ] **HTML File Creation**: Place main hub at `topics/<topic-name>.html` (and subpages in `topics/<topic-name>/`).
2. [ ] **SEO Header Block**: Add canonical links, Open Graph tags, Twitter cards, and Schema.org JSON-LD structured data.
3. [ ] **Bilingual Implementation**: Include EN/ID toggle support with `.en-only` and `.id-only` tags.
4. [ ] **Modern UI & Motion Standards**: Implement liquid glassmorphism, bento grids, responsive breakpoints, spring micro-animations, and scroll-driven reveal transitions.
5. [ ] **Homepage Integration**: Register the main hub card in `index.html` under the appropriate category grid.
6. [ ] **Sitemap Registration**: Add URL entries with appropriate `<priority>` (`0.9` for hub, `0.8` for subpage) in `sitemap.xml`.
7. [ ] **Local Verification**: Test locally using `python3 -m http.server 8000` or `npx serve .` across mobile, tablet, and desktop breakpoints.
