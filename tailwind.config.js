/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0b0f',
        surface: '#0f1117',
        accentBlue: '#00E5FF',
        accentGreen: '#39FF88',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 229, 255, 0.25)',
      },
    },
  },
  plugins: [],
};
