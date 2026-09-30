---
name: LoLyeah Compendium
description: Editorial Digital Publication & Interactive Simulator Hub
colors:
  bg-canvas: "#f8fafc"
  bg-surface: "#ffffff"
  bg-surface-subtle: "#f1f5f9"
  bg-dark-canvas: "#0a0a0a"
  bg-dark-surface: "#111726"
  border-subtle: "#e2e8f0"
  border-dark: "#1e293b"
  text-primary: "#0f172a"
  text-secondary: "#475569"
  text-muted: "#64748b"
  text-dark-primary: "#f8fafc"
  text-dark-muted: "#94a3b8"
  accent-primary: "#059669"
  accent-primary-hover: "#047857"
  accent-secondary: "#4f46e5"
  accent-secondary-hover: "#4338ca"
  status-success: "#10b981"
  status-warning: "#f59e0b"
  status-danger: "#ef4444"
typography:
  display:
    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif"
    fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  heading:
    fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
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
  sm: "4px"
  md: "8px"
  lg: "14px"
  xl: "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent-primary}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-primary-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.bg-surface-subtle}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "10px 20px"
  compendium-card:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "24px"
  filter-chip:
    backgroundColor: "{colors.bg-surface-subtle}"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  filter-chip-active:
    backgroundColor: "{colors.accent-primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  input-search:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "12px 18px"
---

# Design System: LoLyeah Compendium

## Overview

**Creative North Star: "The Curated Visual Compendium"**

LoLyeah Compendium bridges rigorous academic literature, clinical medicine, macroeconomic policy, and physical sciences with high-craft digital editorial design. It rejects sterile SaaS templates, generic corporate dashboards, and frivolous decorative animations in favor of a calm, intentional, topic-led digital publication.

Every guide is structured to allow a reader to grasp a nuanced mental model within 60 seconds, manipulate topic-calibrated variables, and inspect defensible conclusions. The aesthetic combines Swiss modernist typography, restrained physical elevation, and domain-authentic color palettes.

**Key Characteristics:**
- **Topic-Led Form:** Visual motifs, diagrams, and color treatments emerge directly from the subject matter (e.g. Natural History Vault for Gemstones, Clinical Ingest for STEMI/Cardiology, Precision Ledger for Automotive economics).
- **Cognitive Clarity:** Dense compendiums remain navigable through disciplined typographic hierarchy, generous line heights, and compact progressive disclosure.
- **Craft Floor Discipline:** 100% free of cheap generative UI patterns—no kicker labels, no gradient text, no raw emoji icons, and no zero-blur drop shadows.

## Colors

The core compendium palette is anchored in an airy slate-white foundation for light mode, deep obsidian/slate for dark mode, and restrained emerald/indigo accents that signal exploration and verification.

### Primary
- **Emerald Accent (`#059669` / `#10b981`):** Primary action buttons, active tab indicators, and verified status pills. Signifies clarity, health, and validation.

### Secondary
- **Indigo Accent (`#4f46e5` / `#6366f1`):** Secondary interactive triggers, exploratory links, deep search highlights, and cross-reference badges.

### Neutral
- **Alabaster Canvas (`#f8fafc`):** Primary page background in light mode; subtle, luminous, and glare-free.
- **Pristine Surface (`#ffffff`):** Base elevation layer for compendium cards, modal sheets, and search inputs.
- **Deep Obsidian Canvas (`#0a0a0a` / `#06090e`):** Dark mode background foundation; rich and deep without harsh blue tints.
- **Layered Basalt Surface (`#111726` / `#0d1219`):** Elevated cards, darkroom vitrines, and data matrix surfaces in dark mode.
- **Slate Text Hierarchy (`#0f172a` primary, `#475569` secondary, `#64748b` muted):** Calibrated for effortless contrast and long-form reading comfort.
- **Hairline Border (`#e2e8f0` light / `#1e293b` dark):** Clean 1px framing that defines structural edges without visual noise.

### Named Rules
**The Scarcity Rule.** The primary accent is used on ≤ 10% of any given surface. Its rarity and restraint are what make interactive points immediately legible.
**The No-Gray-on-Tint Rule.** On colored or darkroom surfaces, secondary text is tinted directly from the foreground or backing hue—never washed-out flat gray.

## Typography

**Display Font:** `Outfit` (fallback: `Plus Jakarta Sans`, `-apple-system`, sans-serif)
**Body Font:** `Plus Jakarta Sans` (fallback: `Inter`, `-apple-system`, sans-serif)
**Data/Mono Font:** `JetBrains Mono` (fallback: `ui-monospace`, monospace)

**Character:** Swiss editorial precision meets contemporary digital publishing. Bold, compact display headlines paired with comfortable, open humanist body text and disciplined tabular figures.

### Hierarchy
- **Display** (Bold 700/800, `clamp(2.2rem, 4.5vw, 3.8rem)`, line-height 1.15, tracking -0.025em): Used strictly for page titles and major editorial showcase openers.
- **Headline** (Bold 700, `1.5rem` / 24px, line-height 1.25, tracking -0.02em): Section headers, compendium hub categorizations, and major interactive module titles.
- **Title** (Semi-bold 600, `1.15rem` / 18px, line-height 1.35): Card headings, modal dialog titles, and scenario preset labels.
- **Body** (Regular 400, `0.95rem` / 15px, line-height 1.65, measure 65–75ch): Long-form explanatory narratives, clinical caveats, methodology notes, and descriptions.
- **Label** (Medium 500, `0.78rem` / 12.5px, tracking 0.04em, uppercase/semi-bold): Table column headers, badge counters, and form control captions.
- **Mono** (Medium 500, `0.82rem` / 13px, line-height 1.5): Numerical constants, physical formulas, currency figures, code snippets, and coordinate ledgers.

### Named Rules
**The Data-Mono Rule.** Monospace is strictly reserved for data, numbers, formulas, and code. It is never used as an aesthetic body font.
**The Measure Rule.** Long-form prose must never exceed 75 characters per line (`max-width: 75ch`) to maintain optimal ocular tracking.

## Layout

The spatial model relies on a clean 12-column responsive grid and centered maximum reading containers:
- **Editorial Reading Container:** `max-width: 1240px` with generous side margins (fluid padding `1.5rem` to `3rem`).
- **Data & Specimen Ledger Container:** `max-width: 1320px` for wide multi-column matrices, timelines, and formula benches.
- **Spacing Rhythm:** Built on strict 4px/8px increments (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`). Always provide more whitespace above a heading than below it.
- **Responsive Viewports:** Tested down to `320px` mobile devices without horizontal overflow. Breakpoints at `640px` (sm), `768px` (md), `1024px` (lg), and `1280px` (xl).

## Elevation & Depth

LoLyeah Compendium uses a hybrid model of tonal layering and soft ambient drop shadows. Surfaces feel like physical sheets of fine paper or matte museum vitrines rather than glowing screens.

### Shadow Vocabulary
- **Card Rest (`box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04), 0 12px 24px -4px rgba(15, 23, 42, 0.06)`):** Default elevation for interactive topic cards and search containers.
- **Card Hover (`transform: translateY(-2px); box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05), 0 16px 32px -4px rgba(15, 23, 42, 0.1)`):** Tactile lift responding to user pointer intent.
- **Modal Sheet (`box-shadow: 0 24px 64px -12px rgba(0, 0, 0, 0.25)`):** Deep ambient shadow separating inspection dialogs and drawer panels from the dimmed canvas.

### Named Rules
**The Single Elevation Rule.** Declare elevation once: either a clean 1px hairline border or an ambient blurred shadow. Never stack thick colored borders on top of heavy shadows.
**The Ghost Glow Ban.** Zero-offset colored glow halos are banned. Depth is conveyed through physical light vectors and tonal steps.

## Shapes

- **Base Radius Scale:**
  - Micro controls & tags: `4px` (`rounded.sm`).
  - Standard buttons & inputs: `8px` (`rounded.md`).
  - Cards & panels: `14px` (`rounded.lg`).
  - Modal sheets & hero vitrines: `20px` (`rounded.xl`).
  - Filter chips, state pills, and status badges: `9999px` (`rounded.full`).
- **Borders:** Consistent `1px solid var(--border-subtle)` for crisp optical definition.

## Components

### Buttons
- **Primary:** Filled Emerald (`#059669`), crisp white text, 8px radius, `10px 20px` padding, subtle hover lift (`translateY(-1px)`).
- **Secondary / Ghost:** Subtle slate tint (`#f1f5f9` / `#1e293b`), dark text, 8px radius, clean active press feedback (`scale(0.98)`).
- **Hit Area:** Guaranteed minimum `44×44px` on coarse pointers.

### Compendium Cards
- **Structure:** 14px radius, white surface, hairline border, `24px` internal padding, structured header, concise description, and bottom action metadata.
- **Interactivity:** Hover elevation transition (`200ms cubic-bezier(0.16, 1, 0.3, 1)`).

### Filter Chips
- **Resting:** Pill radius (`9999px`), subtle background (`#f1f5f9`), secondary text, `6px 14px` padding.
- **Active:** Solid Emerald (`#059669`), white text, bold state clarity.

### Search Fields
- **Container:** Glassmorphic or crisp white background, 8px radius, embedded SVG magnifying glass icon, keyboard shortcut badge (`⌘K` / `/`), and clean `:focus-visible` border highlight.

### Themed Browser Surfaces
- **Scrollbar:** Custom 6px track with rounded slate-thumb (`#cbd5e1` / `#334155`).
- **Selection:** Emerald/Indigo tinted background with high-contrast text.
- **Focus Rings:** `2px solid var(--accent-primary)` with `2px` offset.

## Do's and Don'ts

### Do:
- **Do** let headings speak for themselves; use confident typographic scale instead of kickers or eyebrows.
- **Do** provide defensible defaults and clear intermediate math for all interactive calculators.
- **Do** ensure every interactive element meets WCAG 2.2 AA (4.5:1 contrast, 44×44px touch targets).
- **Do** honor `@media (prefers-reduced-motion: reduce)` by disabling non-essential transitions while preserving instant feedback.
- **Do** theme native browser surfaces (scrollbars, selection, focus indicators).

### Don't:
- **Don't** use gradient text or rainbow fills.
- **Don't** use raw emojis in functional buttons, tabs, or badges—use authored SVGs.
- **Don't** nest cards inside cards.
- **Don't** use monospace as a decorative body font.
- **Don't** use zero-blur hard block shadows outside deliberate neobrutalism.
- **Don't** build interactive widgets without a written widget contract and accessible fallback.
