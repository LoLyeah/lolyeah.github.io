---
name: LoLyeah Gemstone Vault
description: Natural History Vault & Lapidary Cabinet Design System
colors:
  vault-bg: "#06090e"
  vault-surface-1: "#0d1219"
  vault-surface-2: "#131b24"
  vault-surface-card: "#0f1620"
  vault-surface-input: "#080c12"
  vault-border: "rgba(197, 160, 89, 0.20)"
  vault-border-gold: "rgba(226, 194, 117, 0.45)"
  gold-primary: "#c5a059"
  gold-bright: "#e2c275"
  gold-dim: "#8c733e"
  titanium-cyan: "#38bdf8"
  emerald: "#10b981"
  ruby: "#f43f5e"
  sapphire: "#3b82f6"
  amethyst: "#a855f7"
  amber: "#f59e0b"
  text-main: "#f8fafc"
  text-muted: "#94a3b8"
  text-dim: "#64748b"
typography:
  display:
    fontFamily: "'Cinzel', Georgia, serif"
    fontSize: "clamp(2.1rem, 4.2vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "0.02em"
  heading:
    fontFamily: "'Cinzel', Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.01em"
  body:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  mono:
    fontFamily: "'JetBrains Mono', ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "18px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
motion:
  fast: "120ms cubic-bezier(0.16, 1, 0.3, 1)"
  normal: "220ms cubic-bezier(0.16, 1, 0.3, 1)"
  smooth: "320ms cubic-bezier(0.16, 1, 0.3, 1)"
  ease-out: "cubic-bezier(0.16, 1, 0.3, 1)"
components:
  portal-card:
    backgroundColor: "{colors.vault-surface-card}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "16px 20px"
  archetype-card:
    backgroundColor: "{colors.vault-surface-1}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.lg}"
    padding: "24px"
  filter-chip:
    backgroundColor: "{colors.vault-surface-input}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
    padding: "5px 11px"
  filter-chip-active:
    backgroundColor: "rgba(197, 160, 89, 0.18)"
    textColor: "{colors.gold-bright}"
    rounded: "{rounded.full}"
    padding: "5px 11px"
---

# DESIGN.md — Natural History Vault & Lapidary Cabinet

## Overview
The Natural History Vault design language transforms technical mineralogy and crystallography data into an imposing, high-dignity museum vitrine experience. It marries authentic optical ray tracing with editorial monograph publishing and technical catalog navigation.

- **Audience:** Curious researchers, collectors, jewelry buyers, and gemology students seeking unvarnished physics facts.
- **Tone:** Architectural, calm, luxurious, and authoritative.
- **Core Principle:** Mineral beauty is crystalline physics made visible.

## Colors
The palette is rooted in deep obsidian basalt with warm, brushed gold accents and restrained spectral illumination.

- **Obsidian Ground (`#06090e`):** The primary background, representing deep subterranean earth and dark museum vitrine backing.
- **Basalt Surfaces (`#0d1219`, `#131b24`, `#0f1620`):** Elevation layers for cards, tables, and inspection panes.
- **Brushed Natural Gold (`#c5a059` / `#e2c275`):** Framing metals, active controls, readouts, and emphasis lines.
- **Jewel Tones (Titanium `#38bdf8`, Emerald `#10b981`, Ruby `#f43f5e`, Sapphire `#3b82f6`):** Reserved strictly for physical dispersion fire, crystal system identifiers, and specimen properties.

## Typography
- **Display & Headings:** `Cinzel` serif with deliberate uppercase tracking (`0.02em`). Expresses dignity and museum provenance without clutter.
- **Body & Editorial Narratives:** `Plus Jakarta Sans` with generous line-height (`1.65`) and comfortable column measure (`65–75ch`).
- **Data & Physical Constants:** `JetBrains Mono` for refractive indices, critical angles, wavelengths, chemical formulas, and Mohs hardness.

## Layout
- Maximum container width is calibrated at 1240px for editorial reading comfort and 1320px for the 41-specimen ledger.
- Multi-tier layouts reflow gracefully from 320px mobile viewports up to large desktop monitors.
- Spacing follows consistent 8px/16px/24px/32px steps.

## Elevation & Depth
- Real physical depth via soft blurred drop shadows (`0 16px 36px -10px rgba(0, 0, 0, 0.75)`).
- Hairline vitrine borders (`1px solid rgba(197, 160, 89, 0.2)`) delineate exhibition cards.
- Vitrine glass panels use dark obsidian wells with inner inset shadows (`inset 0 0 40px rgba(0, 0, 0, 0.9)`).

## Motion & Animation
- **Thesis:** Motion represents the physical refraction of light, lapidary micrometer precision, and subterranean crystalline revelation.
- **Tokens:**
  - Fast feedback (`120ms cubic-bezier(0.16, 1, 0.3, 1)`): button active presses, slider thumbs, chip toggles.
  - Normal transitions (`220ms cubic-bezier(0.16, 1, 0.3, 1)`): card hover frame highlights, status badge cross-fades, view mode toggles.
  - Smooth expansion (`320ms cubic-bezier(0.16, 1, 0.3, 1)`): modal chamber scale/fade, collapsible filter drawer easing, wearability score fill glide.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` removes spatial movement while preserving opacity and color transitions for essential feedback.

## Shapes
- Modest corner radii (`6px` for small controls, `12px` for vitrine plates, `18px` for major chamber boxes).
- Fully circular pill tags (`9999px`) for active filters and mineral crystal system badges.

## Components
1. **Vitrine Portal & Archetype Cards:** Exhibition tablets pairing mineralogical theses with direct dual CTAs (Monograph Chapter vs. Database Records).
2. **Optical Ray Tracer Canvas:** Dark velvet optical bench simulating Snell's Law vectors, Total Internal Reflection (TIR), and pavilion windowing in real time.
3. **Mount Defense Wearability Calculator:** Physical resistance formula calculator demonstrating how protective metal rims shield fragile stones.
4. **Specimen Ledger & Inspector Modal:** Multi-filter catalog with live result badges, dismissible active filter pills, and comprehensive crystallography modal dialogs.

## Do's and Don'ts
- **DO** use physical offset shadows with soft blur; **DON'T** use zero-offset colored glow halos.
- **DO** let headings speak for themselves with high-craft typography; **DON'T** put kickers or eyebrows above headings.
- **DO** theme browser surfaces (text selection, scrollbars, focus rings); **DON'T** leave raw browser defaults.
- **DO** use crisp authored SVGs; **DON'T** use raw emojis in titles, badges, or controls.
- **DO** use monospace strictly for numbers, measurements, and formulas; **DON'T** use monospace as a decorative body text font.
