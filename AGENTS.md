# AGENTS.md — Repository Architecture & Developer Conventions

This document outlines structural rules, navigation guidelines, SEO requirements, and design conventions for AI agents and developers working on the `lolyeah.github.io` codebase.

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

## 🎨 UI, UX & Design Standards

- **Flexible UI/UX**: Specific UI layouts, visual motifs, dynamic widgets, and interactive components are flexible to encourage topic-specific visual flair and creative freedom.
- **Latest Design Trends**: All pages must adopt modern, high-end web aesthetics. This includes:
  - Sleek dark themes with glassmorphism, translucent backdrop-blur panels, and glowing subtle borders.
  - Micro-animations, interactive hover states, dynamic cards, dynamic metric badges, and tactile feedback.
  - Refined typography pairings (e.g., `Instrument Serif` for headers, `Geist` or `Plus Jakarta Sans` for body, `Geist Mono` or `JetBrains Mono` for metrics/code).
- **Universal Screen Compatibility**: All layouts MUST be fully responsive and compatible across all common screen sizes:
  - Mobile portrait & landscape (`320px` – `480px`)
  - Tablets (`768px` – `1024px`)
  - Laptops & Desktop Displays (`1280px` – `1920px+`)
  - Prevent unwanted horizontal scrolling and enforce fluid flex/grid layouts.

---

## 🌍 Bilingual Support (EN / ID)

All interactive guides and compendiums should provide dual-language support:
- Use `.en-only` and `.id-only` utility classes for language-specific content elements.
- Persist user preference via `localStorage.getItem('lang')` / `localStorage.setItem('lang', ...)`.
- Provide an intuitive header/nav toggle button to switch language modes smoothly without full page reloads.

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
4. [ ] **Homepage Integration**: Register the main hub card in `index.html` under the appropriate category grid.
5. [ ] **Sitemap Registration**: Add URL entries with appropriate `<priority>` (`0.9` for hub, `0.8` for subpage) in `sitemap.xml`.
6. [ ] **Local Verification**: Test locally using `python3 -m http.server 8000` or `npx serve .` across mobile, tablet, and desktop breakpoints.
