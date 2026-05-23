/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1a231e',
        olive: '#566147',
        moss: '#b3b78e',
        clay: '#a9684d',
        sand: '#e6d7bd',
        stone: '#e9e1d2',
        warm: '#f7f2e8',
        charcoal: '#202a25',
      },
      boxShadow: {
        'soft-earth': '0 24px 80px rgba(32, 42, 37, 0.12)',
      },
    },
  },
  plugins: [],
};
