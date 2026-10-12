---
target: land-vs-water-logistics.html
total_score: 23
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 3
target_identity: "file:/home/ubuntu/antigravity/LoLyeah/topics/land-vs-water-logistics.html"
target_fingerprint: "sha256:acbad18eafefa08f19396873a4b9265a5fe2fa8ea56f5111855a88f6b9e7ec05"
target_path: /home/ubuntu/antigravity/LoLyeah/topics/land-vs-water-logistics.html
timestamp: 2026-10-12T01-33-09Z
slug: topics-land-vs-water-logistics-html
---
# Impeccable Critique: Land vs. Water Logistics

Method: dual-agent (A: 84c224d3-52ce-4f1f-817a-0ce8cc5dc8ab · B: 5a9ed586-6cd5-4db4-8fb0-e9945d7ea8a3)
Target: topics/land-vs-water-logistics.html (and assets/land-vs-water-logistics.css)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|:---:|---|
| 1 | Visibility of System Status | 2 | Instant numeric swapping across 28 fields without transition, tweening, or delta cues. |
| 2 | Match Between System and Real World | 2 | Raw unrendered LaTeX math code leaking in DOM; inland barge simulated crossing open ocean. |
| 3 | User Control and Freedom | 3 | Scenario presets reset cleanly, but no custom value reset and no URL state serialization. |
| 4 | Consistency and Standards | 2 | Redundant metric badges in labels; radius scale drift (6px/10px vs tokens.css 4px/8px). |
| 5 | Error Prevention | 2 | Number inputs lack soft bounds or step clamping feedback; invalid inputs silently fallback. |
| 6 | Recognition Rather Than Recall | 3 | Strong real-world presets, but cost comparison requires mental arithmetic across 4 cards. |
| 7 | Flexibility and Efficiency | 2 | Sterile number inputs without fluid scrubbers; no keyboard shortcuts; no deep-linking. |
| 8 | Aesthetic and Minimalist Design | 3 | Strong maritime darkroom atmosphere, but redundant label badges and unrendered formulas add noise. |
| 9 | Help Users Recognize & Recover from Errors | 1 | Zero inline validation messages; silent clamping leaves users confused. |
| 10 | Help and Documentation | 3 | High-quality methodology contract, but domain acronyms (ULCV, TEU, DWT, WACC) lack tooltips. |
| **Total** | | **23/40** | **Acceptable Band (57.5%)** |

## Design Specificity Verdict

**LLM Assessment:** Conceptually Deep & Authentic, Visually Template-Bound. The thermodynamic and economic model is world-class, but the visual execution relies on plain `<input type="number">` boxes and static cards with zero visual data representations. Unrendered LaTeX strings leak directly into editorial prose.

**Deterministic Scan:** 34 total findings (17 warnings, 17 advisories).
- 12 true positive low-contrast text warnings (WCAG 2.2 AA defect: `#64748b` on dark surfaces yields 3.7:1–3.8:1, failing 4.5:1 minimum).
- 6 design system color advisories (maritime cyan palette not mapped to `DESIGN.md`).
- 2 radius scale advisories (6px/10px drift).
- 6 off-ramp font-size advisories.
- 8 false positives (cramped padding container patterns and official body font).

**Browser Evidence:** Headless Chromium verified zero runtime exceptions or console errors. However, body prose lines span ~98–105 characters, exceeding the 75ch readability cap mandated in `DESIGN.md`.

## Overall Impression

A scientifically rigorous monograph with an outstanding intellectual thesis, held back by a static, form-card UI that lacks visual motion, tactile scrubbers, and dynamic comparative charts.

## What's Working

1. **Defensible Dual-Core Model:** Balances hydrodynamic/rolling physics ($F_b$, $C_{rr}$) with capital depreciation ($W \cdot V \cdot \frac{r}{365} \cdot t$).
2. **Four-Pillar Verdict Banner:** Breaks conventional transport dogma into Energy, Line-Haul, Speed/Holding, and Accessibility pillars.
3. **Atmospheric Maritime Darkroom Base:** Deep nautical palette (`#070d18` canvas) with clean `JetBrains Mono` figures.

## Priority Issues

- **[P1] Unrendered LaTeX Math Strings in DOM**: Raw code strings like `$F_b = \rho g \nabla$`, `$C_{rr}$`, and `$C = C_{\text{fixed}} + ...$` appear unparsed in editorial prose and methodology footer. (Fix with semantic HTML/CSS formatting or KaTeX; `/impeccable typeset`).
- **[P1] Simulator Lacks Comparative Visual Charts & Cost Stacked Bars**: Comparing 28 raw tabular numbers across 4 cards creates cognitive overload. (Fix with animated 3-segment stacked bars [Line-haul | Drayage | Holding Cost] and comparative delta badges; `/impeccable animate`).
- **[P1] WCAG 2.2 AA Contrast Failure on Subtext (3.7:1)**: Secondary text uses `#64748b` on dark navy `#0d1527` and `#0f192e`, failing 4.5:1. (Fix by updating `--text-dim` to `#94a3b8` / `#9aa9bf` for 7.0:1 contrast; `/impeccable colorize`).
- **[P2] Lack of Tactile Dual-Control Scrubbers & Ocean Routing Realism**: Sterile numeric input boxes without range sliders; allowing inland barges on a 10,500 km open-ocean Pacific corridor damages credibility. (Fix with dual input+slider controls and corridor feasibility badges; `/impeccable craft`).
- **[P2] Token Drift & Missing URL State Serialization**: Missing `assets/css/tokens.css` link causes 6px/10px radius drift; simulator adjustments do not sync to URL parameters via `history.replaceState`. (Fix by linking tokens and implementing `URLSearchParams` sync; `/impeccable harden`).

## Modern Design Trends & Animation Opportunities

1. **Fluid Dual-Control Scrubbers with Gradient Tracks:** Pair numeric inputs with smooth range sliders featuring glowing active gradient fills.
2. **Animated Cost Distribution Stacked Bars:** 3-segment horizontal bars that smoothly expand/contract as cargo value shifts from bulk ($150/t) to high-tech ($25,000/t).
3. **Tabular Number Roll Transitions:** Animate numeric recalculations with smooth 200ms `requestAnimationFrame` ease-out rolling counters.
4. **Physical Friction vs Buoyancy Visual Model:** Interactive diagram contrasting tire contact patch deformation against fluid displacement.
5. **Dynamic Break-Even Indicator:** Live calculation pill showing the exact kilometer crossover point where ocean overtakes trucking.
