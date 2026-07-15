# 4C Committee Website - Style Analysis Context

This document provides a comprehensive style, layout, and UI/UX analysis of the 4C Committee website's homepage. It is designed to act as a context prompt for AI models or developers looking to replicate or extend the website's visual aesthetic.

---

## 1. Core Visual Identity

The website employs a **premium, dark-mode-first aesthetic** characterized by massive typography, glowing gradient accents, heavy contrast, and dynamic micro-interactions. It leans heavily into a brutalist but refined look, using sharp edges mixed with heavily rounded container blocks.

### 1.1 Color Palette

The global palette is strictly managed via CSS variables in `:root`.

**Surfaces & Backgrounds:**
- `--ink: #0a0a0a` (Main background, very dark charcoal)
- `--ink-raised: #0a0f1f` (Slightly elevated backgrounds)
- `#0d0d0d` (Solid charcoal used for grid blocks)

**Text Colors:**
- `--paper: #eef1ff` (Primary text, soft white/blue tint)
- `--paper-dim: #97a1c4` (Secondary text, muted)
- `--paper-faint: #5b6489` (Tertiary/disabled text)

**Brand Accents:**
- `--cyan: #2ec4ff` (Primary highlight, hover states, selection background)
- `--blue: #1f5dff` (Secondary highlight, backgrounds)
- `--purple: #7a3cff`
- `--royal: #0b2da6`
- `#FA003F` (Blood Red, used specifically for punchy impact in Flagship Event)

**Gradients & Glows:**
- Primary Gradient: `linear-gradient(115deg, #1f5dff 0%, #7a3cff 100%)`
- Glow Effect: `radial-gradient(circle at 50% 50%, rgba(46, 196, 255, 0.35), transparent 70%)`
- Magic Spotlight: Radial gradient transitioning from Cyan -> Purple -> Transparent Royal Blue on hover.

---

## 2. Typography System

The site uses typography as a primary design element. Text is intentionally oversized to create impact.

**Font Families:**
1. **Primary/Body:** `Inter`, sans-serif (Clean, readable).
2. **Display/Headers:** `Archivo` and `Archivo Black`, sans-serif (Bold, wide, high impact).
3. **Nav Links:** `Space Grotesk`, sans-serif.

**Typographic Characteristics:**
- **Massive Scale:** Use of `vw` and `clamp()` extensively. Headings scale from `40px` up to `120px` or even `23vw` (in the Hero section).
- **Tight Letter Spacing:** Headings often use `letter-spacing: -0.02em` or `-0.11em` to merge characters slightly.
- **Tight Line Height:** Headers use a squashed line-height (e.g., `0.85`, `0.9`, `1`) for a compact, blocky appearance.
- **Text Transformations:** Headers and nav links are exclusively `text-transform: uppercase`.
- **Ghost Text:** Outline-only text is used for decorative elements (`-webkit-text-stroke: 1px rgba(255, 255, 255, 0.15)`, `color: transparent`).

---

## 3. Layout & Structure

The structural flow is generous and cinematic, mimicking a presentation or high-end agency site rather than a dense web app.

- **Containers:** Max-width is typically capped at `1400px` or `1600px` with generous side margins (`0 auto`).
- **Padding:** Sections use massive vertical padding (e.g., `padding: 16vh 4vw`, `12vh 4vw 24vh`). It creates breathing room and allows scroll animations to shine.
- **Grids & Flex:** Heavy reliance on Flexbox for centering and responsive row/column switching. CSS Grids (`grid-template-columns: 3.5fr 6.5fr`) are used for asymmetric layouts (e.g., the Mission section).

---

## 4. UI Components & Shapes

- **Border Radius:** Very heavy rounding on containers and images. Cards use `border-radius: 40px`, marquees use `24px`, and smaller grid blocks use `12px` to `16px`.
- **Borders & Lines:** Subtle dividing lines using `rgba(255, 255, 255, 0.05)` or `var(--line)`.
- **Box Shadows:** Used for dramatic depth and masking rather than subtle elevation. 
  - Massive ambient glows: `box-shadow: 0 0 100px 80px var(--ink)` to feather out backgrounds.
  - Deep drop shadows: `box-shadow: 0 -20px 80px rgba(0, 0, 0, 0.5)`.

---

## 5. Interactions & Animations

Motion and interactivity are critical to the "premium" feel of the site.

- **Easing:** Smooth, custom bezier curves: `cubic-bezier(0.16, 1, 0.3, 1)` or `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Sticky Elements:** `position: sticky` is heavily utilized. The Navigation bar sticks to the top and blurs (`backdrop-filter: blur(16px)`). Mission cards stack on top of each other as the user scrolls.
- **Custom Cursors / Floating Buttons:** The Flagship event section replaces the standard cursor with a floating, red pill-shaped button that tracks mouse movement.
- **Hover Micro-interactions:**
  - Nav links: Background color shift.
  - Images/Logos: Slight scale up and rotation (`transform: scale(1.05) rotate(2deg)`).
  - Roster Lists: Text color shifts to Cyan, elements slide horizontally (`transform: translateX(20px)`), and hidden detail groups fade in on hover.
  - Spotlight Grids: A pseudo-element radial gradient tracks `--mouse-x` and `--mouse-y` to create a flashlight effect over dark blocks.
- **Marquees:** Infinite CSS animations (`@keyframes scrollMarquee`) scrolling horizontally. Used both standard (horizontal) and vertically rotated (`writing-mode: vertical-rl`).
- **Scroll Revealing:** Words in paragraphs often have a starting opacity of `0.2` and fade in based on scroll position (usually handled via GSAP or similar JS libraries).

---

## Summary for AI Models

To replicate this style:
1. Wrap everything in a dark background (`#0a0a0a`).
2. Use massive, tightly-spaced, uppercase `Archivo` text for headings.
3. Keep body copy in `Inter` with a dim whitish-blue color.
4. Separate sections with huge vertical whitespace (`15vh+`).
5. Employ smooth sticky-scroll mechanics and blur filters.
6. Accent interactions with Cyan or a dramatic Glow Gradient.
7. Round major containers generously (`40px`).
