# AGENTS.md — Repository Architecture & Product Design Standards

This repository is a zero-dependency static web compendium and interactive simulator hub hosted on GitHub Pages (`lolyeah.github.io`). These standards apply to all new pages, component additions, substantial UI refactors, and maintenance passes. They are binding technical and visual guardrails designed to guarantee exceptional craft, uncompromising accessibility, and robust static reliability across all 55+ interactive guides.

---

## 1. Repository Architecture & Multi-Page Routing

- `index.html` is the primary discovery hub, topic index, and live search showcase.
- `topics/<topic-name>.html` is the canonical hub page for a specific topic domain.
- `topics/<topic-name>/` contains that topic's deep-dive subpages, spreadsheets, and specialized calculators. Register only the main hub on `index.html`.
- `assets/` contains shared brand assets, logos, favicons, global datasets, and shared styles.
- `beta/` is reserved strictly for unindexed prototypes and staging; never link from production navigation.
- `sitemap.xml` and `robots.txt` describe the published site.

### Multi-Page Linking Rules
1. Place the main topic hub directly in `topics/` (e.g. `topics/gemstones.html`).
2. Place subpages in a matching topic directory (e.g. `topics/gemstones/database.html`).
3. The hub must feature a prominent architectural navigation band linking to all subpages.
4. Every subpage must feature an explicit `← Main Compendium` back-link pointing to `../<topic-name>.html` at the top of the viewport.
5. Register every published hub and subpage in `sitemap.xml` with current `<lastmod>` timestamps:
   - Homepage: `priority: 1.0`
   - Topic Hubs: `priority: 0.9`
   - Topic Subpages: `priority: 0.8`
6. Maintain topic-specific datasets and operational protocols in dedicated sub-guides where appropriate (e.g. [`topics/indonesia-car-selector/AGENTS.md`](./topics/indonesia-car-selector/AGENTS.md)).

---

## 2. Product Direction: Editorial, Modern, and Topic-Led

The publication must feel like a curated digital compendium: calm, intentional, legible, and authoritative—never a sterile dashboard or a generic SaaS template. Each topic possesses its own intellectual character (clinical, geological, macroeconomic, automotive, or physical), and its visual form must flow directly from that domain.

### Visual Principles & Token Discipline
- **Topic-Led Mental Model:** Establish a clear thesis and audience immediately. What should a visitor understand, calculate, or decide within the first 60 seconds?
- **Restrained Palette Architecture:** Each topic uses a strict, deliberate palette: one background family, one surface elevation stack, one primary accent, one supporting accent, and semantic status colors only where essential (success, warning, danger).
- **Surface Elevation over Pure Black:** Avoid raw `#000000` except for OLED deep-contrast modes or video letterboxing. Use rich obsidian, deep graphite, or layered slate for dark surfaces, and luminous slate-white or alabaster for light surfaces.
- **Single Elevation Strategy:** Declare depth once per container: use either a subtle hairline border (`1px solid var(--border-subtle)`) OR a soft ambient shadow (`box-shadow: 0 4px 20px -2px rgba(0,0,0,0.06)`). Never stack a heavy border on top of an aggressive drop shadow ("ghost card").
- **Spacing Scale:** Adhere strictly to the 4px/8px modular rhythm:
  - `4px` (xs): Tight micro-gaps, chip internal padding, icon offsets.
  - `8px` (sm): Badge padding, button gap, inline form element spacing.
  - `16px` (md): Card internal padding, form group margins, compact grid gaps.
  - `24px` (lg): Standard container padding, section subsection separation.
  - `32px` (xl): Component group separation, editorial block rhythm.
  - `48px`–`64px` (2xl/3xl): Major section dividers and hero spacing. Always maintain more whitespace above a heading than below it.

### Craft Floor: Invariant Bans & Anti-Patterns
To preserve editorial dignity and avoid amateur generative UI traits, the following patterns are strictly banned:
- **NO Eyebrows / Kickers:** Do not place small uppercase kicker labels above headings. Let the heading carry its own weight and authority.
- **NO Gradient Text:** Text color must remain solid and crisp for readability. Emphasis comes from typographic weight, scale, or color tinting—never rainbow or linear-gradient text fills.
- **NO Raw Emojis in Controls:** Never use emojis as functional UI icons in buttons, search bars, tabs, or badges. Use clean, authored inline SVGs with matched stroke weight and currentColor.
- **NO Colored Side Borders:** Avoid thick `border-left` or `border-right` colored callout stripes (>1px) on cards or alerts. Use subtle surface tinting and hairline framing instead.
- **NO Hard Block Shadows:** Do not use zero-blur offset shadows (`box-shadow: 4px 4px 0px #000`) unless the specific surface brief explicitly calls for authentic neobrutalism. Shadows must carry soft, physical blur.
- **NO Monospace as Body Text:** Monospace (`JetBrains Mono`, `ui-monospace`) is reserved exclusively for numerical data, constants, physical formulas, currency, code, and table figures. Body prose must use high-legibility sans-serif (`Plus Jakarta Sans`, `Inter`).
- **NO Nested Cards:** Avoid cards inside cards. Use typographic hierarchy, hairline dividers, or tinted sub-panels to structure internal content.
- **Theme Browser Surfaces:** All pages must style their native browser touchpoints: custom scrollbars (`::-webkit-scrollbar`), high-contrast text selection (`::selection`), caret color, and crisp `:focus-visible` rings.

---

## 3. Typography Standards & Responsive Reflow

- **Display & Hero Typography:** Use modern, characterful display fonts (`Outfit`, `Cinzel`, or `Plus Jakarta Sans`) with tight, confident tracking (`-0.02em` to `-0.03em`). Never track tighter than `-0.04em`.
  - Use fluid clamp formulas: `font-size: clamp(2rem, 4vw + 1rem, 3.5rem)`.
- **Editorial Body Prose:** Maximum reading column measure of `65–75ch`. Line-height calibrated at `1.6` to `1.65` for effortless long-form reading.
- **Data & Tables:** Tabular numerals (`font-variant-numeric: tabular-nums`) and monospace alignment for all scientific, financial, and automotive metrics.
- **Responsive Viewport Reflow:**
  - Strict reflow down to `320px` viewport width without horizontal scrollbars.
  - Breakpoints: `640px` (sm / mobile landscape), `768px` (md / tablet), `1024px` (lg / desktop), `1280px` (xl / max container width).
  - Horizontal scrolling is permissible *only* for multi-column data matrices, complex timelines, or wide formula benches—and must always feature visible scroll fade cues or tactile pill indicators.

---

## 4. Motion, Interaction, and Touch Standards

Motion must communicate state, reveal spatial relationships, or model physical domain processes—never serve as gratuitous decoration.

### Motion Token Tiers
- **Fast Micro-Interactions (120ms):** Active button presses, chip selection, slider thumb motion, checkbox toggles. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Standard Transitions (200ms):** Card hover elevation, dropdown disclosures, modal cross-fades, tab switches. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Smooth Reveals (320ms):** Sheet expansions, drawer sliding, score dial filling, view mode cross-transitions. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.

### Reduced Motion Guarantee
Always implement an unconditional `@media (prefers-reduced-motion: reduce)` block:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
State changes must remain immediate, distinct, and fully functional when motion is disabled.

### Touch Targets & Pointer Ergonomics
- Interactive elements (buttons, filter chips, tabs, inputs, icon toggles) must meet a minimum hit area of **44×44px** on touch devices:
```css
@media (pointer: coarse) {
  button, .filter-chip, .tab-btn, input, select {
    min-height: 44px;
    min-width: 44px;
  }
}
```
- Hover styles must always be guarded inside `@media (hover: hover)` to prevent sticky hover states on mobile touchscreens.

---

## 5. Topic-Context Interactive Widgets & Calculators

Interactive simulators, decision wizards, and calculators must be derived from rigorous topic evidence, never copied from generic widget templates.

### The Mandatory Widget Contract
Every interactive tool must be grounded in an explicit contract documented in code comments or accompanying text:
1. **User Question:** The specific decision or insight the visitor seeks (e.g. "What is my car's true total cost of ownership over 5 years in Jakarta?").
2. **Inputs:** Domain-specific variables, bounded ranges, realistic defaults, and explicit units (e.g., kW, bar, %, Rp/bulan, Mohs).
3. **Mathematical Model:** Defensible formula, peer-reviewed methodology, clinical protocol, or official government decree cited with data vintage.
4. **Intermediate Causality:** Expose intermediate metrics (input → intermediate calculation → final outcome) so the user understands *why* the result changed.
5. **Output & Plain-Language Takeaway:** Clear, defensible recommendation or scenario comparison accompanied by actionable guidance.
6. **Caveats & Non-Advice Disclaimer:** Explicitly state if a tool is illustrative/educational and disclaim professional medical, financial, or legal advice where relevant.
7. **Static Fallback:** If JavaScript fails or is disabled, the page must still present the underlying formula, default scenario table, key findings, and source references.

---

## 6. Accessibility & Inclusion (WCAG 2.2 AA)

- **Contrast Ratios:**
  - Normal body and placeholder text: **≥ 4.5:1** against its backing surface.
  - Large text (≥ 18pt or 14pt bold) and active UI controls/borders: **≥ 3.0:1**.
  - High-density data ledgers should target **7.0:1** (AAA) where practical.
- **Focus Rings:** Visible, persistent `:focus-visible` styling across all interactive elements:
```css
:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}
```
- **Semantic HTML & ARIA:** Use native semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<dialog>`). Form controls must feature programmatic `<label>` elements or `aria-label`. Use `aria-expanded`, `aria-selected`, and `aria-live="polite"` only when they reflect dynamic DOM states.
- **Keyboard Navigation:** Every interactive pathway must be 100% operable via keyboard alone (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`). Modals and drawers must trap focus while open and restore focus to the trigger upon closing.

---

## 7. Bilingual EN / ID Localization Protocol

Selected compendiums support synchronized English (EN) and Indonesian (ID) localizations:
- Persist language preference in `localStorage` under `lolyeah_lang`.
- Update `<html lang="en">` or `<html lang="id">` dynamically.
- Use explicit data attributes (`data-en="..."` / `data-id="..."`) or targeted key dictionaries. Never use destructive text-node replacement that strips nested spans, SVG icons, or event listeners.
- Synchronize all live calculator labels, unit descriptions, form error messages, and disclaimer footnotes during language toggle.
- Verify bidirectional switching: `EN → ID → EN` must produce zero markup corruption or layout shifting.

---

## 8. SEO, Open Graph & Structured Data (JSON-LD)

Every published HTML document must provide complete, valid metadata in `<head>`:
- Concise, compelling `<title>` and `<meta name="description">` (150–160 characters).
- Canonical URL matching `https://lolyeah.github.io/<path>`.
- Open Graph (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`).
- Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- Valid Schema.org JSON-LD structured data (`WebPage`, `TechArticle`, `MedicalWebPage`, or `Dataset`) with author, publisher, datePublished, and dateModified.

---

## 9. Verification & Publishing Checklist

Before committing or publishing any changes, execute this verification protocol:

```bash
# 1. Check for git whitespace and formatting issues
git diff --check

# 2. Validate HTML syntax, critical IDs, and local asset paths
python3 -c "
import os, glob, re
for f in glob.glob('topics/*.html') + ['index.html']:
    with open(f) as fp:
        content = fp.read()
        assert '<!DOCTYPE html>' in content, f'Missing doctype in {f}'
        assert '<html' in content and '</html>' in content, f'Unclosed html in {f}'
        assert '<title>' in content, f'Missing title in {f}'
print('PASSED: All core HTML files well-formed!')
"

# 3. Verify that zero raw emojis appear in button/tab controls
python3 -c "
import glob, re
emoji_pattern = re.compile(r'[\U00010000-\U0010ffff]', flags=re.UNICODE)
for f in glob.glob('topics/*.html') + ['index.html']:
    with open(f) as fp:
        lines = fp.readlines()
        for idx, l in enumerate(lines):
            if any(tag in l for tag in ['<button', '<input', 'class=\"tab', 'class=\"filter']):
                matches = emoji_pattern.findall(l)
                if matches:
                    print(f'Warning: Emoji in control {f}:{idx+1}: {matches}')
"

# 4. Start local web server and test routes
python3 -m http.server 8000 &
SERVER_PID=$!
sleep 1
curl -sI http://localhost:8000/index.html | grep '200 OK'
curl -sI http://localhost:8000/topics/gemstones.html | grep '200 OK'
kill $SERVER_PID
```
