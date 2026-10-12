# Impeccable Critique: topics/suravidl.html

Method: dual-agent (A: c612e3c6-4a8a-4099-a57d-f72a2eb8d121 · B: 65706ed2-068d-46fc-bf76-e2298712acea)
Target: `topics/suravidl.html`
Evaluated: 2026-10-12T11:44:00Z

---

## Design Health Score

| # | Heuristic | Score (0–4) | Rationale |
|---|---|:---:|---|
| 1 | Visibility of System Status | 3 | Immediate clipboard copy confirmations and toasts; lacks real-time release status and filter count indicators. |
| 2 | Match Between System & Real World | 3 | Rich technical terminology (AV1, VP9, Opus, MediaStore); demuxer internal jargon unadapted for general users. |
| 3 | User Control and Freedom | 3 | URL preset resets work; Command Studio lacks a global "Reset to Defaults" button for toggles. |
| 4 | Consistency and Standards | 2 | Murky dark navy (`#070b19` / `#0d152e`) violates DESIGN.md Obsidian standard; mobile hides app title. |
| 5 | Error Prevention | 3 | Bounded calculator ranges; URL input lacks client-side sanity check before generating CLI string. |
| 6 | Recognition Rather Than Recall | 3 | Preset chips provide one-click population; 6 post-processing switches don't explain CLI flag mappings. |
| 7 | Flexibility and Efficiency of Use | 3 | Power-user accelerators ("Flags Only" copy, git clone chip); keyboard navigation (`⌘K` / `/`) missing. |
| 8 | Aesthetic and Minimalist Design | 2 | Pseudo-glass renders as opaque flat boxes; mobile header bloats to 150px tall across 3 rows. |
| 9 | Error Recovery | 3 | Dedicated empty states with reset filters; clear clipboard fallback instructions. |
| 10 | Help and Documentation | 3 | Step-by-step sideloading walkthrough and SHA-256 card; lacks Android Play Protect troubleshooting. |
| **Total** | | **28 / 40** | **Good (70% - Lower Boundary)** |

---

## Cognitive Load Assessment
- **Single focus**: FAIL (Hero and Studio present competing primary CTAs simultaneously).
- **Visual hierarchy**: FAIL (CLI terminal, pipeline flow, and raw JSON have equal visual weight).
- **One thing at a time**: FAIL (Command Studio requires processing Profile, Resolution, Audio, and 6 toggles at once).
- **Minimal choices (≤4)**: FAIL (6 simultaneous feature switches, 10+ selector pills).
- **Progressive disclosure**: FAIL (Raw JSON config preview permanently expanded).
- **Checklist Result**: 4 failures / 8 items → **High Cognitive Load**

---

## Priority Issues & Technical Remediation Plan

### [P0] Version Stagnation: Stale v0.39.8 vs Active v0.46.14 Arc
- **Root Cause**: The page was authored during v0.39.8 and has missed 7 minor release cycles and the entire v0.46 "New Capability" arc (v0.46.0 "the toolbox", v0.46.1 "the recorder" live streams, v0.46.2 "the follower" watch lists, v0.46.14 "the round").
- **Fix**: Update all 20+ version instances to **v0.46.14**. Highlight the new capabilities (Live Stream `● REC` recording, Watch List channel automation, and Pre-flight Batch Link Inspection).

### [P1] Pseudo-Glassmorphism & Murky Navy Color Scheme
- **Root Cause**: `--glass-bg: #0d152e` is 100% opaque hex. `backdrop-filter: blur(16px)` cannot blur pixels through a solid wall of paint. The saturated navy canvas (`#070b19`) looks muddy and dated.
- **Fix**: 
  - Overhaul canvas to Deep Obsidian (`#080b12`) with ambient radial mesh diffusion.
  - Implement genuine iOS liquid glass: `background: rgba(14, 18, 28, 0.65)`, `backdrop-filter: blur(28px) saturate(190%)`, `border: 1px solid rgba(255, 255, 255, 0.10)`, and specular top rim `box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.16)`.

### [P2] Mobile Navigation Viewport Hijack & Brand Suppression
- **Root Cause**: `.nav-inner` wraps into 3 rows (`150.53px` tall, eating 18.5% of mobile screen), and `@media (max-width: 480px)` hides the brand name (`span.app-name { display: none; }`).
- **Fix**: Refactor mobile header into a compact 56px sticky bar with visible brand title, direct APK download button, and a horizontal swipeable pill nav.

### [P3] Nested Cards & Type Ramp Drift
- **Root Cause**: 5 instances of nested `.calc-results-card` and `.stage-detail-panel` inside `.glass-panel`, and 12 off-ramp micro-fractional font sizes (`0.72rem`, `0.75rem`, `0.88rem`, etc.).
- **Fix**: Flatten card-in-card nesting using clean borders and negative space. Normalize typography strictly to the 6 DESIGN.md type steps.
