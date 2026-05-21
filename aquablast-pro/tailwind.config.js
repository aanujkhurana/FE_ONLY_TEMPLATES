/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        aquatic: {
          // COLD SPECTRUM — extracted from pool water
          dark:      '#020b14',      // Deep oceanic abyss
          deeper:    '#010810',      // Absolute void
          deep:      '#061a2c',      // Midnight pool depths
          mid:       '#0a2e4c',      // Deep pool wall
          glass:     'rgba(255,255,255,0.03)',
          border:    'rgba(255,255,255,0.08)',
          neon:      '#00d4f0',      // True aqua cyan (refined from image)
          electric:  '#0ba3d4',      // Premium kinetic deep blue
          sky:       '#38bdf8',      // Aerial light refraction
          mint:      '#34d399',      // Crystal-clear safe balance indicator
          // WARM SPECTRUM — extracted from sandy pool deck
          stone:     '#c8a96e',      // Warm sandy limestone — the KEY accent
          stone2:    '#e2c896',      // Light sun-bleached stone
          stone3:    '#8a6840',      // Deep terracotta shadow
          // GLOW / FX
          glow:      'rgba(0,212,240,0.15)',
          goldglow:  'rgba(200,169,110,0.12)',
        }
      },
      fontFamily: {
        sans:    ['DM Sans', 'Inter', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'],
        serif:   ['Playfair Display', 'serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      backgroundImage: {
        'caustic': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300d4f0' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'grid-dark': "url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v1H0zm0 31h32v1H0zM0 0v32h1V0zm31 0v32h1V0z' fill='%23ffffff' fill-opacity='0.03'/%3E%3C/svg%3E\")",
      },
      animation: {
        'text-shine':       'textShine 4s linear infinite',
        'ripple-1':         'ripple 4s ease-out infinite',
        'ripple-2':         'ripple 4s ease-out 1.3s infinite',
        'ripple-3':         'ripple 4s ease-out 2.6s infinite',
        'float-slow':       'floatSlow 8s ease-in-out infinite',
        'float-slower':     'floatSlow 12s ease-in-out infinite alternate',
        'glow-pulse':       'glowPulse 3s ease-in-out infinite',
        'shimmer':          'shimmer 2.5s linear infinite',

        'scan-down':        'scanDown 8s linear infinite',
      },
      keyframes: {
        textShine: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ripple: {
          '0%':   { transform: 'scale(0.3)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-18px) rotate(2deg)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%':     { opacity: '1',   transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },

        scanDown: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'aqua-glow':   '0 0 40px rgba(0,212,240,0.25), 0 0 80px rgba(0,212,240,0.1)',
        'aqua-sm':     '0 0 20px rgba(0,212,240,0.2)',
        'gold-glow':   '0 0 30px rgba(200,169,110,0.2)',
        'deep-card':   '0 30px 80px rgba(0,0,0,0.6), 0 10px 30px rgba(0,0,0,0.4)',
        'hero-float':  '0 50px 120px rgba(0,0,0,0.7), 0 20px 60px rgba(0,212,240,0.08)',
      },
    }
  },
  plugins: [],
}
