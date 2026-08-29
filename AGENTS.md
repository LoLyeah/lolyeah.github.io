# AGENTS.md — Repository Architecture & Product Standards

This repository is a zero-dependency static web compendium and interactive simulator hub hosted on GitHub Pages. These standards apply to new pages, substantial UI changes, and maintenance work. They are guardrails, not a mandate to make every topic look identical.

## 1. Repository architecture

- `index.html` is the homepage, topic discovery surface, and search showcase.
- `topics/<topic-name>.html` is the main hub page for a topic.
- `topics/<topic-name>/` contains that topic's subpages. Register only the hub on the homepage.
- `assets/` contains shared brand assets, favicons, and logos.
- `beta/` is for prototypes and staging; do not treat it as published content.
- `sitemap.xml` and `robots.txt` describe the published site.

For a multi-page topic:

1. Place the hub directly in `topics/`.
2. Place subpages in a matching `topics/<topic-name>/` directory.
3. Give the hub a prominent directory/banner linking to its subpages.
4. Give every subpage a clear `← Main Compendium` link to `../<topic-name>.html`.
5. Add every published hub and subpage to `sitemap.xml` with current `<lastmod>` values. Use priorities `1.0` for the homepage, `0.9` for hubs, and `0.8` for subpages/prototypes that are publicly indexed.

## 2. Product direction: editorial, modern, and topic-led

The site should feel like a curated digital publication: calm, intentional, legible, and premium rather than a collection of generic dashboards. A page may be dark, light, archival, clinical, geographic, economic, or playful, but its visual language must follow the subject.

### Visual principles

- Start with a topic thesis and audience: what should a visitor understand or decide in the first minute?
- Use a small, deliberate design system: one background family, one surface hierarchy, one primary accent, one supporting accent, and semantic status colors only where necessary.
- Prefer subtle depth: restrained shadows, hairline borders, tonal surfaces, and occasional gradients. Glass, noise, scanlines, excessive glow, and animated backgrounds are optional accents—not defaults.
- Every decorative effect must preserve contrast, performance, and the information hierarchy. Content wins over atmosphere.
- Make sure there's animation and transition, should be classy and modern.

### Page composition

- The first viewport needs a clear title, a concise promise, topic/context metadata, and one primary action such as “Explore the model”, “Compare corridors”, or “Read the evidence”.
- Keep dense compendiums dense, but make them navigable with a compact table of contents, section labels, progressive disclosure, and meaningful summaries.
- Establish a visual anchor that belongs to the topic: a route, timeline, map, evidence card, clinical pathway, scenario dial, material palette, or other explanatory motif.
- Use consistent spacing tokens and component variants instead of page-specific one-off nudges. Avoid stacking override blocks; consolidate the final rule for each component.
- Design at mobile widths, 320px, 768px, and desktop widths. No accidental horizontal overflow. Horizontal scrolling is acceptable only for genuinely wide content such as tables or timelines, with an obvious cue and preserved headers.
- Respect `prefers-color-scheme` only when the page supports both themes intentionally; do not pretend a dark theme is a light theme by simply inverting colors.

### Interaction quality

- Controls must look and behave like controls. Give buttons a clear label, hover/active/focus states, disabled state where relevant, and a minimum comfortable hit area.
- Prefer familiar interaction patterns over novelty. A control should explain what it changes before the user touches it.
- Preserve URL/shareability where useful: meaningful tabs, filters, and scenarios should use query parameters or hash state when practical, and should not make browser Back unusable.
- Provide empty, loading, invalid-input, and boundary states for interactive views.
- Make state visible: selected filters, active tabs, current language, units, assumptions, and whether values are illustrative or sourced.
- Never add a “widget” merely because a page needs something interactive. If interaction does not improve comprehension, comparison, exploration, or decision-making, use a static explanation instead.

## 3. Topic-context interactive widgets (OPTIONAL)

Interactive tools must be derived from the topic model, not copied from a generic calculator template. Before building one, write a short “widget contract” in the page code/comments or accompanying content:

- **User question:** the real question the visitor is trying to answer.
- **Inputs:** topic-specific variables, allowed ranges, units, defaults, and why each matters.
- **Model:** formula, scoring logic, assumptions, data vintage, and known limitations.
- **Output:** the primary result, comparison or scenario, plus the rationale in plain language.
- **Action:** what the visitor can explore next and which section/source explains it.

Widget requirements:

1. Use domain vocabulary and units. A transport tool should understand route, mode, occupancy, distance, time, tolls, fuel, subsidy, or fare; a medical tool should distinguish symptoms, urgency, risk factors, and clinical caveats; a geopolitical tool should expose geography, institutions, resources, and time horizon rather than generic “score” sliders.
2. Choose controls that match the variable: select/radio for discrete categories, range input for bounded continuous assumptions, text input for searchable entities, and date/time controls for temporal models. Show the current value and unit next to every control.
3. Make defaults defensible and explain them. Offer a small number of meaningful presets tied to recognizable topic scenarios, not arbitrary low/medium/high labels.
4. Show contribution and causality where possible: input → intermediate metric → result. If the model is heuristic, label it “illustrative” or “educational”, state that it is not engineering/clinical/legal/financial advice as appropriate, and avoid false precision.
5. Explain threshold and recommendation logic. A result must answer “why did this change?” and show sensitivity or a comparison when a single number could mislead.
6. Keep explanatory copy synchronized with live values and the EN/ID language switch. Do not update only a headline while leaving stale labels, units, formulas, or caveats.
7. Make the tool usable without a pointer: keyboard operation, visible focus, semantic labels, live-result announcements where appropriate, and no interaction that depends on hover.
8. Keep the static fallback meaningful. If JavaScript or a third-party chart library fails, the user should still see the model, assumptions, key findings, and source links.
9. External dependencies must be justified and resilient to CDN failure. If you need advanced features that wasn't possible with native, external dependencies and CDN is justified.

## 4. Accessibility, responsive behavior, and motion

- Include a skip link on long pages and use semantic landmarks (`header`, `nav`, `main`, `section`, `footer`). Keep heading levels logical.
- Every form control needs a visible or programmatic label. Use `fieldset`/`legend` for related choices. Do not use placeholder text as the only label.
- Maintain visible `:focus-visible` styles, sufficient color contrast, and non-color indicators for status and selection. Use `aria-current`, `aria-selected`, `aria-expanded`, and live regions only when they accurately reflect state.
- Responsive layouts must reflow at narrow widths without forcing two-dimensional scrolling except for content that genuinely requires it. Follow WCAG 2.2 reflow expectations and test zoom/text enlargement where practical.
- Use `scroll-padding-top` or `scroll-margin-top` for fixed navigation. Verify every section link, hero CTA, modal close path, and subpage back-link.
- Motion should clarify state or spatial relationships. Prefer opacity/transform transitions that do not cause layout shift; avoid auto-playing motion that competes with reading.
- Always provide a `@media (prefers-reduced-motion: reduce)` fallback that removes non-essential animation, parallax, bobbing, scanlines, and staggered reveals.
- A modal, drawer, menu, or popover needs keyboard escape, focus behavior, an accessible name, and an obvious close path. On mobile, do not leave a desktop-only nav that overflows.

## 5. Bilingual EN / ID behavior

Interactive guides and subpages should support EN/ID when their audience warrants it.

- Persist the preference in `localStorage`, update `<html lang>`, and expose the active state with `aria-pressed` or the appropriate tab semantics.
- Translate meaningful visible content, including control labels, options, result explanations, caveats, units where language-specific, and empty/error states.
- Prefer keyed translation nodes or `data-en`/`data-id` values. Do not translate arbitrary text nodes across the whole document; repeated toggling can destroy nested links, icons, and markup.
- Test EN → ID → EN without losing nested markup, dynamic output, selected state, or user inputs.
- Never add language buttons without implementing the actual behavior.

## 6. SEO and metadata

Every published HTML page must contain a current metadata block in `<head>`:

- unique `description`, title, canonical URL, author, and robots metadata;
- Open Graph and Twitter card title, description, URL, and image;
- JSON-LD using the most accurate type (`WebPage`, `TechArticle`, `Dataset`, or another appropriate Schema.org type), with page name, description, URL, author, and publisher.

Do not use a generic description or claim that an illustrative model is authoritative. Keep structured data consistent with the visible page.

## 7. Homepage and publishing rules

- Register only main hubs on the homepage. Keep `.feature-icon` numbering gapless and descending newest-first if that convention is still used by the homepage sorting logic; renumber all cards together when changing it.
- Keep beta, old, and experimental pages out of the production sitemap unless explicitly published.
- Do not commit secrets, credentials, `.env` files, or unrelated generated files.
- Do not commit, push, or rewrite history unless explicitly asked.

## 8. Verification checklist

Before calling a UI change complete:

1. Read the target page and its nearest relevant exemplar before editing.
2. Run `git diff --check` and inspect `git status`.
3. Parse modified HTML and check unique critical IDs, balanced tags, anchor targets, canonical URLs, and subpage back-links.
4. Extract inline JavaScript and run `node --check` where applicable.
5. Serve the repository with `python3 -m http.server 8000` and request each modified route, confirming HTTP 200.
6. Exercise the actual page at desktop and mobile widths. Inspect the initial viewport and every redesigned surface below the fold.
7. Test keyboard navigation, focus visibility, reduced motion, language switching, filters, calculators, charts, modals, menus, and browser Back when those features exist.
8. Report visual/interaction verification separately from static verification. If a browser cannot start, say so; static checks are not visual QA.

Useful local checks:

```bash
git diff --check
python3 -m http.server 8000
# In another shell, request the relevant routes with curl -I or curl -sS
```

## 9. Recommended implementation sequence

1. Define the page thesis, audience, content hierarchy, and widget contract.
2. Inspect the existing structure and preserve useful content/data.
3. Establish the topic-specific visual system and responsive layout.
4. Implement the simplest native interaction that answers the user question.
5. Add accessibility, bilingual behavior, states, caveats, and static fallback.
6. Verify with the checklist above, then review the diff for unnecessary complexity.

The goal is not maximum decoration or maximum interactivity. The goal is a distinctive, elegant, accessible page where the design and the tool both make the topic easier to understand.

## 10. Research references

These standards are informed by the following stable references; consult the current versions when a requirement is ambiguous:

- W3C WAI, WCAG 2.2 Understanding 1.4.10 Reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
- web.dev, `prefers-reduced-motion`: https://web.dev/articles/prefers-reduced-motion
- MDN, `aria-expanded`: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded
- MDN, CSS `prefers-reduced-motion`: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
