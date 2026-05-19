# Velocity Performance Garage

Premium sports car specialist website template. Dark, moody, high-performance aesthetic.

## Quick Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

---

## Configuration

All business data is in `GARAGE_CONFIG` at the top of `src/App.tsx`:

```tsx
const GARAGE_CONFIG = {
  businessName: 'Your Business Name',
  phone: '0400 000 000',
  email: 'info@example.com',
  address: 'Workshop Address',
  abn: '00 000 000 000',
  accentColor: 'neon-green',      // Current: Acid Green
  accentClass: 'text-neon-green border-neon-green bg-neon-green/10',
  glowClass: 'glow-green',
  // ... more config
};
```

---

## Three Premium Color Palettes

### Option A: The Euro Special (Acid Porsche Green)
```css
--color-carbon: #0B0F19
--color-neon-green: #C8FF00   /* Acid Porsche Green */
--color-neon-cyan: #00F0FF    /* Cyan accent */
```

### Option B: The Heritage Racing (Brembo Red)
```css
/* Change in @theme section */
--color-neon-green: #FF2D55   /* Brembo Red */
--color-neon-cyan: #FFB800    /* Racing Yellow */

/* Update accent classes */
accentClass: 'text-neon-red border-neon-red bg-neon-red/10',
glowClass: 'glow-red',
```

### Option C: The Stealth Tuner (Electric Cyan)
```css
/* Change in @theme section */
--color-neon-green: #00F0FF   /* Electric Cyan */
--color-neon-cyan: #FFE600    /* Electric Yellow */

/* Update accent classes */
accentClass: 'text-neon-cyan border-neon-cyan bg-neon-cyan/10',
glowClass: 'glow-cyan',
```

---

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub, then:
npx vercel
```

### Netlify

```bash
npm run build
# Drag dist/ folder to netlify.com/drop
```

### Manual Upload

Upload `dist/` contents to any web server.

---

## Sections

1. Fixed Nav - Blurred, angled CTA button
2. Hero - Dark image, pulsing "Bays Open" indicator
3. Trust Matrix - 4-column proof points
4. Services Bento - Cards with hover effects
5. Transformations - Before/After tabs
6. Booking Form - Dashboard-style intake
7. Reviews - Customer testimonials + suburbs
8. FAQ - Accordion with animations
9. Footer - Hours, address, ABN

---

## Tech Stack

- React 18 + Vite
- Tailwind CSS 4
- Lucide React icons
- No backend required
- Fully responsive