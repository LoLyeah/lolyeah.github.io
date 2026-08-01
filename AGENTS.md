# AGENTS.md — Repository Architecture & Developer Conventions

This document outlines structural rules, navigation guidelines, and design conventions for AI agents and developers working on the `lolyeah.github.io` codebase.

---

## 📁 Multi-Page Topic & Subpage Conventions

When building complex, high-density compendiums or guides that require multiple subpages:

1. **Main Hub Page Placement**:
   - The main entry point for a topic MUST be placed directly inside the `topics/` directory as `topics/<topic-name>.html` (e.g. `topics/car-suspension.html`).
   - `index.html` (the homepage showcase grid) should register **only the main hub page** (`topics/<topic-name>.html`) to prevent cluttering the main directory listing.

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
   - Hub pages should have `<priority>0.9</priority>`, while subpages have `<priority>0.8</priority>`.

---

## 🎨 UI & Design Standards

- **Theme**: Dark glassmorphic interface (`#030712` background, blur filters, custom CSS design tokens).
- **Fonts**: `Instrument Serif` for headers, `Geist` for body, `Geist Mono` for tags and metrics.
- **Bilingual Support**: All interactive guides should provide EN/ID toggling using `.en-only` and `.id-only` utility classes with `localStorage` state persistence.
