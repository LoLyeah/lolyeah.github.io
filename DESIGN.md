---
name: LoLyeah Gemstone Suite
description: Swiss Mineral Monograph & Apple Pro Precision Design System
colors:
  bg-canvas: "#f8fafc"
  bg-surface-card: "#ffffff"
  bg-surface-subtle: "#f1f5f9"
  bg-surface-input: "#ffffff"
  bg-darkroom: "#090d16"
  bg-darkroom-card: "#111726"
  border-subtle: "#e2e8f0"
  border-card: "rgba(15, 23, 42, 0.08)"
  border-darkroom: "rgba(255, 255, 255, 0.12)"
  sapphire-primary: "#2563eb"
  sapphire-bright: "#3b82f6"
  sapphire-dim: "#1d4ed8"
  diamond-cyan: "#0284c7"
  emerald: "#059669"
  ruby: "#e11d48"
  amber-gold: "#d97706"
  amethyst: "#7c3aed"
  text-primary: "#0f172a"
  text-secondary: "#475569"
  text-muted: "#64748b"
  text-darkroom-primary: "#f8fafc"
  text-darkroom-muted: "#94a3b8"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
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
  lg: "16px"
  xl: "20px"
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
    backgroundColor: "{colors.bg-surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "20px 24px"
  archetype-card:
    backgroundColor: "{colors.bg-surface-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  filter-chip:
    backgroundColor: "{colors.bg-surface-subtle}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  filter-chip-active:
    backgroundColor: "{colors.sapphire-primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "6px 14px"
---

# DESIGN.md — Swiss Mineral Monograph & Apple Pro Precision

## Overview
The Swiss Mineral Monograph & Apple Pro Precision design system transforms technical mineralogy and crystallography data into an authoritative, clean, and inspiring digital publication. It pairs Swiss typography and grid layout with Apple-grade hardware precision.

- **Audience:** Curious researchers, collectors, jewelry buyers, and gemology students seeking unvarnished physics facts.
- **Tone:** Pristine, authoritative, calm, and exquisitely crafted.
- **Core Principle:** Mineral beauty is crystalline physics made visible.

## Colors
The palette is rooted in an airy, luminous Swiss slate-white foundation with vibrant mineral jewel accents and a dedicated optical darkroom chamber.

- **Alabaster Canvas (`#f8fafc`):** The primary background, layered with subtle ambient sky and champagne mesh lighting for depth.
- **Pristine Surfaces (`#ffffff`):** Pure white gallery cards and vitrines with hairline borders (`#e2e8f0`).
- **Precision Optical Darkroom (`#090d16` / `#111726`):** Dedicated high-contrast enclosure for laser ray tracing and Snell's Law vectors.
- **Mineral Jewel Tones:** Vivid Royal Sapphire (`#2563eb`), Icy Diamond (`#0284c7`), Emerald (`#059669`), Pigeon-Blood Ruby (`#e11d48`), Refined Amber Gold (`#d97706`), and Amethyst (`#7c3aed`).
- **Typography Contrast:** Deep charcoal headline & body (`#0f172a`, `#334155`) for effortless readability.

## Typography
- **Display & Headings:** `Plus Jakarta Sans` with tight, confident tracking (`-0.03em`) and clear hierarchical scale. Replaces archaic all-caps Roman serifs with modern Swiss precision.
- **Body & Editorial Narratives:** `Plus Jakarta Sans` with comfortable column measure (`65–75ch`) and generous line-height (`1.65`).
- **Data & Physical Constants:** `JetBrains Mono` for refractive indices ($\\eta$), critical angles ($\\theta_c$), dispersion ($\\Delta$), chemical formulas, and Mohs hardness.

## Layout & Rhythm
- Maximum container width is calibrated at 1240px for editorial reading comfort and 1320px for the 41-specimen ledger.
- Generous whitespace breathing room, full-width headers with frosted glass backdrop blur, and asymmetric focal anchors.
- Spacing follows consistent 8px / 16px / 24px / 32px / 48px steps.

## Elevation & Depth
- Real physical depth via layered soft drop shadows:
  - Base cards: `0 2px 8px rgba(15, 23, 42, 0.04), 0 12px 24px -4px rgba(15, 23, 42, 0.06)`
  - Elevated hover: `transform: translateY(-2px); box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05), 0 16px 32px -4px rgba(15, 23, 42, 0.1)`
- Hairline borders (`1px solid #e2e8f0` or `1px solid rgba(15, 23, 42, 0.08)`) frame all components.

## Motion & Animation
- **Thesis:** Motion represents physical optical refraction and smooth Apple Pro segment transitions.
- **Tokens:**
  - Fast feedback (`120ms cubic-bezier(0.16, 1, 0.3, 1)`): button active presses, slider thumbs, segment switches.
  - Normal transitions (`220ms cubic-bezier(0.16, 1, 0.3, 1)`): card hover elevations, view mode transitions.
  - Smooth expansion (`320ms cubic-bezier(0.16, 1, 0.3, 1)`): modal sheet entrance, collapsible drawer grid interpolation.
- **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` zeroes motion durations while preserving instant state changes.

## Components
1. **Apple Pro Segmented Controls:** Pill switches (`#f1f5f9`) with elevated white active thumb.
2. **Optical Darkroom Chamber:** High-contrast laser bench simulating Snell's Law vectors and Total Internal Reflection (TIR).
3. **Laboratory Wearability Gauge:** High-contrast scientific score circle with instant formula breakdown.
4. **Specimen Exhibition Cards:** Clean white cards with vivid photographic preview, optical constants table, and quick actions.
5. **Specimen Ledger & Inspector Modal:** Comprehensive crystallography dialog with clean typography and geographic deposit maps.
