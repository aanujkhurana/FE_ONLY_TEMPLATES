/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
  extend: {
    colors: {
      aquatic: {
        dark: '#020b14',      // Deep oceanic abyss
        deep: '#061a2c',      // Midnight pool depths
        glass: 'rgba(255, 255, 255, 0.03)',
        border: 'rgba(255, 255, 255, 0.08)',
        neon: '#00f2fe',      // Hyper-clear cyan glow
        electric: '#4facfe',  // Premium kinetic blue
        mint: '#43e97b',      // Crystal clear safe balance
        premium: '#d4af37'    // Subtle gold accentuation
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Syncopate', 'sans-serif'],
      serif: ['Playfair Display', 'serif']
    }
  }
},
  plugins: [],
}


