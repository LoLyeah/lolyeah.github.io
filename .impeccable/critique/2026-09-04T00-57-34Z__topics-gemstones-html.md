---
target: topics/gemstones.html and it subpages
total_score: 26
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:/Users/handi/Github/lolyeah.github.io/topics/gemstones.html"
target_fingerprint: "sha256:a965b9514ee9ad95eb276ae4897e7ddc8eedc5b4f5ea7d7a0b61c4cfdd2c6d82"
target_path: /Users/handi/Github/lolyeah.github.io/topics/gemstones.html
timestamp: 2026-09-04T00-57-34Z
slug: topics-gemstones-html
---
Method: dual-agent (A: 8d2ea3f6-13d3-48ac-a418-249b32576004 · B: 1265e3d9-7484-48cd-9f27-f9cb62ce17aa)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|:-----:|-----------|
| 1 | **Visibility of System Status** | **3** | Active tabs and slider values update smoothly, but the database empty state fails to indicate which active filters caused a 0-result count. |
| 2 | **Match System / Real World** | **3** | Authentically uses professional mineralogical terms (η, Δ, Mohs, Cleavage), but the Wearability Calculator outputs a single opaque score ("Score: 98") without exposing its component weights. |
| 3 | **User Control and Freedom** | **2** | No "Reset All Filters" button in `database.html`. Users must manually click every active chip to return to default. No URL query parameter persistence for sharing or bookmarking filtered views. |
| 4 | **Consistency and Standards** | **3** | Tokens and visual styling are consistent across all three pages, but data structures are duplicated (`GEM_DATA` in hub, `CATEGORY_SPECIMENS` in categories, `DATABASE` in database) causing data drift. |
| 5 | **Error Prevention** | **3** | Inputs are bounded by sliders and dropdowns, but the database allows users to select impossible combinations (e.g. non-existent crystal system/Mohs combinations) without disabling invalid chips. |
| 6 | **Recognition Rather Than Recall** | **3** | Key specs are visible on cards, but database text search only matches name and formula—it fails to search colors, optical phenomena, or care instructions. |
| 7 | **Flexibility and Efficiency of Use** | **2** | No keyboard shortcuts (e.g. `/` to focus search); no multi-select filter capability; tabs and chips lack keyboard roving-tabindex support. |
| 8 | **Aesthetic and Minimalist Design** | **3** | Atmospheric dark mineral theme is visually compelling, but suffers from repetitive card layouts across pages and an overloaded filter surface in the database. |
| 9 | **Error Recovery** | **2** | When a search/filter combination produces 0 results, the UI displays static text (`No gemstones match your filter criteria`) with no suggestion to broaden search and no one-click reset action. |
| 10 | **Help and Documentation** | **2** | Inline explanations for optical constants are solid, but there is no accessible glossary or tooltip definitions for advanced crystallographic terms (e.g. "Uniaxial (-)", "Birefringence", "Lamellar lamellae"). |
| **Total** | | **26/40** | **Acceptable** (65% — Solid aesthetic foundation, but substantial UX, filter flow, and causality improvements needed). |

---

## Design Specificity Verdict

### LLM Assessment
The gemstone compendium suite demonstrates **exceptional domain grounding in subject matter, mineralogy, and physical constants**, but suffers from **templating uniformity in its UI components and missed causality in its physics simulation**.
- **Where it succeeds:** The concepts are rooted firmly in mineralogy, crystallographic symmetry, and transition-metal chromophores ($\text{Cr}^{3+}$, $\text{Fe}^{2+}$, $\text{Ti}^{4+}$, $\text{Cu}^{2+}$, trace Boron). The interactive widgets directly target gemological phenomena: Snell's Law / optical dispersion fire, Alexandrite thermal color change (2700K to 6500K CCT), Asterism/Chatoyancy rutile needle light scattering, and Pleochroism polarization angles. The editorial voice is critical and honest, exposing cartel pricing, Tanzanite fragility, and Morganite cloudiness.
- **Where it lapses:** Every card across all three pages defaults to identical slate dark glassmorphism (`rgba(15, 23, 42, 0.75)`), generic cyan glow borders, and pill tags. Crucially, the Ray Tracer adjusts a Refractive Index ($\eta$) label, but internal light rays bounce off fixed coordinates rather than calculating real refraction vectors via Snell's Law ($n_1 \sin \theta_1 = n_2 \sin \theta_2$) and the critical angle ($\theta_c = \arcsin(1/\eta)$), failing to demonstrate real windowing vs. total internal reflection.

### Deterministic Scan
Automated scan via `detect.mjs` found **10 warnings** across the 3 files:
- **`side-tab` (2 findings):** `topics/gemstones.html:778` (`.sim-explanation` border-left: 3px solid cyan) and `topics/gemstones.html:2270` (`updateArena()` verdict card border-left: 2px solid cyan). Both are true positive textbook AI container styling patterns.
- **`dark-glow` (2 findings):** `topics/gemstones.html:284` (cyan diffuse box-shadow glow on `.banner-card:hover`) and `topics/gemstones/database.html:298` (zero-offset cyan halo on `.search-input:focus`). Both are true positive chromatic glow slop patterns that should be replaced with neutral elevation and crisp high-contrast focus rings.
- **`overused-font` (3 findings):** `Plus Jakarta Sans` imported on all 3 pages (`gemstones.html:57`, `categories.html:57`, `database.html:57`). While paired with `Cinzel` for headings, `Plus Jakarta Sans` as the primary body font triggers the overused AI font rule.
- **`broken-image` (3 findings):** Empty placeholder `<img src="">` tags in lightbox and modal containers (`gemstones.html:1464`, `categories.html:806`, `database.html:967`). Evaluated as static HTML anti-pattern / functional false positive (JavaScript populates `src` synchronously before modal display, but empty `src` triggers invalid HTTP requests in some browsers).

### Visual Overlays
Browser visualization was attempted against a local server (verified HTTP 200 on all 3 routes on port 8999). However, no headless Chrome, Puppeteer, or Playwright binary is installed in this runtime environment. As a result, in-browser visual overlays and script injection could not be mounted. Inspection relies on static source analysis and deterministic CLI detection.

---

## Overall Impression
A rich, academically credible, and visually atmospheric gemstone compendium that genuinely respects the science of mineralogy. However, it is currently held back by repetitive card duplication between the Hub and Subpages, an overwhelming 25-chip filter trap with no reset button in the database, and an optical ray tracer that fakes its refraction geometry instead of simulating actual physics.

---

## What's Working
1. **Sensory Optical Phenomena Lab:** The interactive Alexandrite CCT color-temperature slider (emerald green at 6500K daylight to raspberry red at 2700K candlelight), cursor-tracking Asterism star effect, and Pleochroism polarizer transform complex optical physics into tactile, intuitive demonstrations.
2. **Unflinching Connoisseur Market Critique:** Instead of generic jewelry marketing, the compendium delivers rigorous, honest analysis: deconstructing cartel price inflation, exposing Tanzanite's cleavage vulnerability and Morganite's oil-clouding, while advocating for durable, unheated natural alternatives like Spinel and Tsavorite.
3. **Rigorous Crystallographic & Chemical Data:** Integrating accurate chemical formulas ($\text{Al}_2\text{O}_3 : \text{Cr}^{3+}$, $\text{Be}_3\text{Al}_2\text{Si}_6\text{O}_{18}$), crystal systems, Mohs hardness, dispersion metrics, and specific care guidelines provides genuine collector and educational utility.

---

## Priority Issues (P0–P3)

### [P1] Issue 1: Database Filter Trap with No Reset, No Zero-State Recovery, & No URL State
- **Why it matters:** Users filtering across Category, Crystal System, Mohs hardness, and Phenomena quickly hit a 0-result state with no indication of which filter caused the zero count, and must manually locate and click 4+ individual chips to reset. In addition, filtered states cannot be bookmarked or shared.
- **Fix:** Add a prominent "Reset All Filters" button in the summary bar and inside the empty state. Display active filter tags with dismissible '×' badges. Reflect filter state in URL search parameters (`?cat=popular&mohs=7&sys=Isometric`). Show matching count badges inside chips (e.g., `Isometric (6)`).
- **Suggested Command:** `/impeccable harden topics/gemstones/database.html`

### [P1] Issue 2: Ray Tracer Lacks Physical Causality (Snell's Law / Critical Angle)
- **Why it matters:** Violates Product Principle 2 ("Expose Causality: Interactive models must demonstrate input → intermediate metric → result"). Adjusting the Refractive Index ($\eta$) updates only a numeric label and ray spread, while internal rays bounce off hardcoded coordinates regardless of $\eta$, failing to demonstrate windowing vs. total internal reflection.
- **Fix:** Re-engineer the canvas rendering function to calculate dynamic refraction vectors based on Snell's Law ($n_1 \sin \theta_1 = n_2 \sin \theta_2$) and the facet critical angle ($\theta_c = \arcsin(1/\eta)$), clearly illustrating light leakage when $\eta < 1.6$ versus brilliant internal reflection when $\eta > 2.0$.
- **Suggested Command:** `/impeccable polish topics/gemstones.html`

### [P2] Issue 3: Architectural Redundancy & Cognitive Fatigue Between Hub and Categories
- **Why it matters:** The hub (`gemstones.html`) embeds an entire 22-card tabbed gallery, while `categories.html` presents essentially the same 20 cards. Visitors suffer cognitive fatigue and confusion regarding the distinct purpose of each page.
- **Fix:** Establish `gemstones.html` as the **Interactive Optical & Practical Decision Lab** (featuring the Ray Tracer, Phenomena Playground, Wearability Calculator, and Comparison Arena), with a compact 6-card visual router directing users to the subpages. Dedicate `categories.html` as the **Long-Form Editorial & Macro Market Compendium** (essays, market dynamics, and high-res specimen gallery).
- **Suggested Command:** `/impeccable distill topics/gemstones.html`

### [P2] Issue 4: Accessibility & Keyboard Navigation Failures
- **Why it matters:** Violates WCAG 2.2 AA standards and AGENTS.md rule 4. Tabs in `gemstones.html` and chips in `database.html` lack ARIA tab/pressed semantics, cannot be navigated with arrow keys, have no skip-to-content links, and the language switcher does not update `<html lang>`.
- **Fix:** Add proper ARIA attributes (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`) and arrow-key roving tabindex. Add `aria-pressed` to filter chips and `aria-live="polite"` to the database record count. Ensure modal close buttons include `aria-label="Close modal"`. Update `document.documentElement.lang` synchronously on language toggle. Provide a keyboard-accessible alternative or slider for the Asterism star simulator.
- **Suggested Command:** `/impeccable audit topics/gemstones.html`

### [P3] Issue 5: Metadata Specimen Count Discrepancy ("40+ Species" vs 36 Actual)
- **Why it matters:** Undermines user trust. The page title, Open Graph card, SEO description, and hero pill all advertise "40+ Species", but the database records counter displays "SHOWING: 36 SPECIES" on load.
- **Fix:** Add at least 5 additional prominent mineral specimens (e.g. Demantoid Garnet, Chrome Tourmaline, Heliodor, Fire Agate, Danburite) to reach 41 specimens, or update copy to reflect the exact count.
- **Suggested Command:** `/impeccable clarify topics/gemstones/database.html`

---

## Persona Red Flags

### 1. Alex (Impatient Power User / Mineralogy Researcher)
- **Goal:** Filter for singly-refractive (isotropic) gemstones with Mohs $\ge 7.5$ to evaluate durable diamond/sapphire alternatives.
- **Red Flags:**
  - Cannot select multiple crystal systems or multiple categories simultaneously.
  - Search input does not support property queries (e.g. `mohs:>7` or `color:blue`).
  - Pressing `/` does not focus the search bar.
  - Table view omits origin and optical phenomena, forcing Alex to click into individual modals one by one.
  - Cannot copy a filtered URL to share the query with research peers.

### 2. Sam (Accessibility-Dependent User)
- **Goal:** Browse the 6 categories and test optical phenomena using screen reader (VoiceOver) and keyboard navigation.
- **Red Flags:**
  - Must Tab through the full header navigation on every page before reaching content (no skip link).
  - The 16 filter chips in `database.html` are unannounced buttons without `aria-pressed`; Sam cannot determine which filters are active.
  - When filters change or clear results, no `aria-live` announcement communicates the updated count.
  - The Asterism star simulator is bound strictly to `onmousemove`; there is zero keyboard alternative.
  - Close button is rendered as `<button class="modal-close">&times;</button>`, announced as "multiplication sign".

### 3. Casey (Distracted Mobile User on 375px Device)
- **Goal:** Quickly check whether an Emerald or Tanzanite can survive a daily engagement ring while on the go.
- **Red Flags:**
  - The Ray Tracer canvas distorts vertically on narrow mobile viewports due to fixed 500x340 bitmap dimensions.
  - In `database.html`, the stacked filter controls occupy 850px of vertical height, forcing Casey to scroll past two full screens of controls before viewing the first result.
  - The category tab list on the hub overflows horizontally with no visual gradient or cue indicating that more categories exist to the right.
  - Specimen inspector modal on mobile stacks image and table, creating frustrating nested scroll traps inside the viewport.

---

## Minor Observations
- **Font Redundancy:** Four separate font families are loaded from Google Fonts (`Cinzel`, `Playfair Display`, `Plus Jakarta Sans`, `JetBrains Mono`). `Playfair Display` is barely utilized; eliminating it improves initial page load speed.
- **Unlinked Simulator Recommendations:** The Wearability Calculator outputs advice like "Tougher and cleaner than emerald for rings," but does not provide a direct link to inspect Tsavorite in the database or categories.
- **Inconsistent Card Click Targets:** On `categories.html`, clicking a card opens an image Lightbox; on `database.html`, clicking a card opens the detailed Specimen Inspector.

---

## Questions to Consider
- *What if `gemstones.html` abandoned its redundant category card deck entirely, transforming into a pure "Optics & Durability Lab" that routes all specimen exploration directly to `categories.html` and `database.html`?*
- *Why settle for a decorative ray diagram when a genuine 40-line Snell's Law implementation could calculate true refraction angles and physically demonstrate windowing vs. brilliance?*
- *What if `database.html` replaced its 25-chip filter wall with a responsive "Filter Drawer" equipped with real-time match counters, so mobile users see gemstones immediately on load?*
- *Could the Wearability Calculator expose its formula (Mohs rating + Cleavage penalty + Setting exposure) to educate buyers on why a hard gem like Tanzanite still cracks?*
