# AquaBlast Pro — White-Label Deployment Guide
## Pressure Washing Landing Page Template · Brisbane Edition

---

## 🎨 Colour Palette Options

Swap these values into `tailwind.config.js` → `theme.extend.colors`, and update the `SITE_CONFIG` object accordingly.

### Option 1 — Deep Ocean + Safety Gold *(Default)*
> Premium & trustworthy. High contrast. Converts well across all age groups.

```js
// tailwind.config.js
colors: {
  brand: {
    primary:   '#0ea5e9',  // Sky-500 — action buttons, links, icons
    accent:    '#f59e0b',  // Amber-500 — badges, highlights, CTAs
    dark:      '#0f172a',  // Slate-950 — page background
    surface:   '#1e293b',  // Slate-800 — card backgrounds
    muted:     '#475569',  // Slate-600 — body copy
  }
}
```

### Option 2 — Midnight Green + Electric Lime
> Fresh, eco-forward feel. Great for clients who emphasise eco-friendly / sustainable angle.

```js
colors: {
  brand: {
    primary:   '#10b981',  // Emerald-500
    accent:    '#a3e635',  // Lime-400
    dark:      '#0a1628',  // Custom navy
    surface:   '#132237',
    muted:     '#4b6a8a',
  }
}
```

### Option 3 — Gunmetal + Flame Orange
> Industrial, masculine, high-energy. Works well for operators targeting commercial clients.

```js
colors: {
  brand: {
    primary:   '#f97316',  // Orange-500
    accent:    '#fbbf24',  // Amber-400
    dark:      '#111111',  // Near-black
    surface:   '#1c1c1e',  // Dark charcoal
    muted:     '#6b7280',  // Gray-500
  }
}
```

---

## 🚀 White-Label Deployment Blueprint (3 Steps)

### Step 1 — Scaffold the Project (5 mins)

```bash
npx create-react-app aquablast-pro --template blank
# OR — recommended for faster builds:
npm create vite@latest aquablast-pro -- --template react
cd aquablast-pro

# Install dependencies
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configure `tailwind.config.js`:**
```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

**Add to `src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Drop `App.jsx` into `src/`. Run `npm run dev` to preview.

---

### Step 2 — Deploy to Vercel (10 mins, free)

1. Push the project to a GitHub repo (private is fine)
2. Go to [vercel.com](https://vercel.com) → "Add New Project" → import the GitHub repo
3. Vercel auto-detects Vite/React — click **Deploy**
4. You'll receive a `*.vercel.app` URL instantly

**To connect the client's `.com.au` domain:**
- In Vercel → Settings → Domains → Add `pressurewashingbrisbane.com.au`
- Vercel provides two DNS records (A + CNAME)
- Log into the registrar (Crazy Domains / VentraIP / Namecheap) → DNS settings → paste records
- Live in 5–30 mins

---

### Step 3 — Onboard the Next Client (< 30 mins)

Everything that changes between clients lives inside the `SITE_CONFIG` object at the top of `App.jsx`:

```js
const SITE_CONFIG = {
  businessName: "SparkleBlast QLD",    // ← change
  phone: "0433 987 654",               // ← change
  phoneTel: "+61433987654",            // ← change
  email: "info@sparkleblastqld.com.au", // ← change
  ABN: "72 491 882 334",               // ← change
  hours: "Mon–Sat: 7:00am – 5:00pm",  // ← change
  serviceAreas: ["Ipswich", "Goodna", "Redbank", ...],  // ← change
  // ... rest stays the same
};
```

Push to GitHub → Vercel auto-redeploys in ~60 seconds.

---

## 🔗 Domain Name Strategies for Brisbane

### Strategy 1 — Local Intent (Best for SEO + Google Ads)
> Targets people actively searching "pressure washing Brisbane"

- `pressurewashingbrisbane.com.au`
- `brisbanepressurewash.com.au`
- `pressurecleaningbrisbane.com.au`

**Why it works:** Exact-match local keywords in the domain signal relevance to Google and to users scanning search results. Strong click-through rates on ads.

---

### Strategy 2 — Brand-Led (Best for Referrals + Trust)
> Builds long-term brand equity; easier to remember word-of-mouth

- `aquablastpro.com.au`
- `cleanshineqld.com.au`
- `blastmasterbrisbane.com.au`

**Why it works:** Memorable for repeat business, referrals, and Facebook/Instagram. Scales if the client ever expands beyond one suburb.

---

### Strategy 3 — Suburb-Specific (Best for hyper-local dominance)
> If the client focuses on 2–3 specific areas, owning the suburb name is gold

- `northlakespressurewashing.com.au`
- `chermsidepressureclean.com.au`
- `aspleyexteriorclean.com.au`

**Why it works:** Near-zero competition for suburb-level exact match. Converts strongly when paired with "North Lakes" in the hero headline.

---

**Recommended Registrar:** VentraIP (Australian-owned, excellent support) — ~$17/yr for `.com.au`

---

## 📋 Client Handover Checklist

- [ ] `SITE_CONFIG` updated with client details
- [ ] Testimonial names/suburbs updated to client's real reviews
- [ ] Service areas array updated to client's coverage zone
- [ ] Google Reviews count updated
- [ ] Real photos added (replace placeholder hero visual)
- [ ] Domain purchased and connected in Vercel
- [ ] Test on mobile (iPhone + Android) — especially sticky bottom bar
- [ ] Submit URL to Google Search Console

---

*Template by AquaBlast Pro · Built with React + Tailwind CSS + Lucide React*
