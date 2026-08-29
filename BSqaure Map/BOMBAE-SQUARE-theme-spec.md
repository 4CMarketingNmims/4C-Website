# BOMBAE SQUARE — Theme Spec
Paste this whole thing into any AI along with "build me a page for [category] in this exact style" and it should match.

## Vibe
Dark festival / gold foil / Mumbai heritage trail. Bold condensed display type, warm gold-on-black, slightly tilted "polaroid" cards, sparse confetti, mobile-first (max-width 430px, centered frame).

## Colors (use exactly)
```css
:root{
  --black:#0A0908;
  --gold:#C89B5A;
  --gold-bright:#F0C878;
  --gold-deep:#8B6F3F;
  --gold-pale:#E8D3A0;
  --cream:#F4EDE4;
  --cream-dim:rgba(244,237,228,0.55);
}
body{ background:var(--black); color:var(--cream); }
```

## Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
```
- Headlines, numbers, eyebrows, category tags → `'Bebas Neue'` (uppercase, tight line-height ~0.82–1, wide letter-spacing on small labels)
- Body/paragraph/nav text → `'DM Sans'`, weights 400/500/700

## Layout
```css
.frame{ max-width:430px; margin:0 auto; min-height:100vh; position:relative; overflow:hidden; }
```
Design mobile-first inside this frame. No desktop-first assumptions.

## Photo treatment (apply to every image, every page)
```css
img{
  filter:grayscale(1) sepia(0.35) contrast(1.08) brightness(0.55);
}
.tone{ /* overlay div on top of img */
  position:absolute; inset:0; mix-blend-mode:color;
  background:linear-gradient(155deg, var(--gold-deep), #0A0908 80%);
  opacity:0.6;
}
.fade{ /* bottom gradient so text sits over the image */
  position:absolute; inset:0;
  background:linear-gradient(180deg, transparent 35%, rgba(10,9,8,0.85) 100%);
}
```
Source images from Wikimedia Commons (`https://commons.wikimedia.org/wiki/Special:FilePath/<filename>`) for free, license-safe photos.

## Core components

**Spot card** (repeat this for every location):
```html
<div class="spot-card">
  <img src="..." alt="...">
  <div class="tone"></div><div class="fade"></div><div class="dot"></div>
  <div class="num">01</div>
  <div class="name">Spot Name</div>
  <div class="cat">CATEGORY LABEL</div>
</div>
```
```css
.spot-card{
  position:relative; min-width:142px; height:186px; border-radius:8px; overflow:hidden;
  display:flex; flex-direction:column; justify-content:flex-end; padding:13px;
  box-shadow:0 12px 26px rgba(0,0,0,0.5); background:#0A0908;
}
.spot-card:nth-child(odd){ transform:rotate(-3deg); }
.spot-card:nth-child(even){ transform:rotate(2.5deg); }
.spot-card .num{ font-family:'Bebas Neue'; font-size:11px; letter-spacing:1px; color:var(--gold-bright); opacity:.85; position:absolute; top:10px; left:12px; }
.spot-card .name{ font-weight:700; font-size:13.5px; }
.spot-card .cat{ font-size:8.5px; letter-spacing:1.5px; color:var(--gold-bright); margin-top:3px; }
.spot-card .dot{ position:absolute; top:12px; right:12px; width:7px; height:7px; border-radius:50%; background:var(--gold-pale); box-shadow:0 0 6px var(--gold-bright); }
```

**Pill badge** (small tag/label, e.g. "CULTURAL SIDE OF 4C"):
```css
.badge{
  display:inline-flex; align-items:center; gap:6px;
  background:var(--gold-bright); color:var(--black); font-size:10.5px; font-weight:700; letter-spacing:1.5px;
  padding:7px 16px; border-radius:20px; transform:rotate(-2deg);
  animation:pulse 3.4s ease-in-out infinite;
}
@keyframes pulse{0%,100%{transform:rotate(-2deg) scale(1);}50%{transform:rotate(-2deg) scale(1.04);}}
```

**CTA button:**
```css
.btn{
  background:var(--gold-bright); color:var(--black); font-weight:700; font-size:13px; letter-spacing:1px;
  padding:16px 32px; border-radius:30px; position:relative;
}
.btn::before{
  content:''; position:absolute; top:-6px; right:-6px; width:14px; height:14px;
  background:var(--gold); clip-path:polygon(50% 0,100% 38%,82% 100%,18% 100%,0 38%);
}
```

**Confetti** (scatter 3–6 small shapes per page, low opacity, gentle float):
```css
.gconfetti{ position:absolute; z-index:2; animation:float 5s ease-in-out infinite; }
@keyframes float{0%,100%{transform:translateY(0) rotate(var(--r,10deg));}50%{transform:translateY(-6px) rotate(calc(var(--r,10deg) + 6deg));}}
```
Mix gold shapes (diamonds/triangles, `--gold-bright` or `--gold-deep`) with cream ones (`--cream-dim`, opacity 0.45) — gold should dominate.

**Optional: spinning sunburst** behind a hero section (use once per page max):
```js
// generates 32 thin gold rays radiating from center, spinning slowly (90s/rotation)
```

## Golden rule for the AI prompt
Tell it: *"Match this exact CSS — same variable names, same fonts, same card rotation/photo-filter treatment, same mobile frame width. Don't invent new colors or fonts."* That's the difference between it looking like the same site vs. a reskin.
