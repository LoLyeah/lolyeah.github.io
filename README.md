# LoLyeah Interactive Guides 🌐

Welcome to **LoLyeah Interactive Guides** (`lolyeah.github.io`), a premium repository of highly interactive, responsive, and visually stunning web-based simulators, clinical guides, and educational tools. 

Designed with rich visual aesthetics, modern typography, glassmorphism, and responsive layouts, this static site delivers deep, evidence-based insights across medicine, neurodiversity, science, and economics.

---

## Key Highlights & Features

### 🖥️ Cinematic Homepage
- **Dual-Theme Engine**: Smooth transitions between curated Light and Dark HSL color palettes.
- **Glassmorphic Interactive Search**: Responsive instant-filtering of all guides, complete with a keyboard shortcut (`/`) focus state and micro-animations.
- **Collapsible Developer Console**: A cinematic terminal detailing system status and developer credentials.
- **Interactive Mouse-Tracking Glow**: Dynamic cards that respond to mouse coordinates for premium tactile feedback.

### 📚 Extensive Interactive Directory (27+ Guides)
The project hosts a wide array of specialized interactive tools across multiple domains:

| Category | Interactive Guides |
| :--- | :--- |
| **Cardiology & Emergency** | [STEMI (Heart Attack) Diagnostics](topics/stemi.html), [Acute Coronary Syndrome (ACS) Diagnostics](topics/acs-diagnostics.html) |
| **Clinical Medicine** | [Stroke Diagnostics & Rehabilitation](topics/stroke.html), [Diabetes Mellitus Care Guide](topics/diabetes-guide.html), [Upper Gastrointestinal Anatomy](topics/upper-gastro.html), [Scoliosis Treatment & Cobb Angle Guide](topics/scoliosis.html), [Medical Specialist Comparative scope](topics/specialist-compared.html) |
| **Neurodiversity** | [ADHD Comprehensive Guide](topics/adhd.html), [Diet & Nutrition for ADHD](topics/adhd-diet-guide.html), [AuDHD Deep Clinical Analysis](topics/audhd-clinical-analysis.html) |
| **Pharmacology & Science** | [Antibiotics Class Comparative Chart](topics/antibiotics.html), [Laxative Class Interactive Comparison](topics/laxative-comparison.html), [Radiation Dose Visual Comparison](topics/radcompare.html) |
| **Nuclear Engineering & Energy** | [Nuclear Reactors Compendium: Operating, Gen IV, SMRs, Fusion & Research Reactors](topics/nuclear-reactors.html) |
| **Simulators & Astronomy** | [Foodborne Disease Outbreak Simulator](topics/foodborne-outbreak.html), [Interactive Solar System Scale Model](topics/solar-system.html) |
| **Economics & Analytics** | [2026 Economic Outlook Visualizer](topics/econ-outlook-2026.html), [Psychology of Emotional Suppression (Bottle Up)](topics/bottle-up.html) |
| **Geopolitics & History** | [Alternative Nusantara Scenario Simulator](topics/what-if-nusantara.html), [Comparative Balkan-Indonesian Geopolitics](topics/balkan-indo.html), [Naval Ship Class Historical Directory](topics/ship-class.html) |

---

## Technology Stack

- **Core Structure**: Semantic HTML5 (incorporating `<nav>`, `<main>`, `<article>`, and `<footer>` tags).
- **Styling**: Vanilla CSS3 custom variables with premium web typography (Outfit, Plus Jakarta Sans, Playfair Display, and JetBrains Mono) sourced from Google Fonts.
- **Interactivity**: Lightweight, native vanilla ES6 JavaScript (handling search, translation dictionaries, tab routing, and responsive layouts) without heavy third-party framework overhead.
- **Graphics**: Inline responsive SVGs, custom data visualizations, and visual-rich interactive grids.

---

## Built-in SEO & Discoverability

The site is fully optimized for modern SEO crawler indexing and social media preview rendering:
- **Canonical Linking**: Explicit `<link rel="canonical">` elements on every page to prevent duplicate search indexing.
- **Open Graph (OG) & Twitter Cards**: Configured preview tags for beautiful shared cards on Twitter/X, Discord, Slack, and LinkedIn.
- **Schema.org Structured Data**: Integrated JSON-LD schemas (`MedicalWebPage` and `WebPage`) to enable rich snippet displays.
- **Robots & Sitemap**: Contains a standardized `robots.txt` and a complete `sitemap.xml` mapping all production directories.

### Repeating SEO Optimizations
If you add or update any guide in the future, you can instantly refresh the metadata and sitemap for the entire website using the Python automation script:
```bash
python3 .system_generated/scratch/seo_optimizer.py
```

---

## Local Development & Hosting

Since the project is built completely on static web standards, it has zero dependencies and can be run locally on any system:

### 1. Python Live Server (Recommended)
Navigate to the repository directory and run:
```bash
# Python 3
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### 2. Node.js (npx)
```bash
npx serve .
```

### 3. VS Code
Simply open the repository in Visual Studio Code and use the **Live Server** extension.

---

## Author & Credits

Created and maintained by **LoLyeah** (Rizqihan).
- GitHub: [@LoLyeah](https://github.com/LoLyeah)
- Live Site: [lolyeah.github.io](https://lolyeah.github.io/)
