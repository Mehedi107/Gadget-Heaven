/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clrPrimary: '#9538E2',
        clrSecondary: '#0B0B0B',
        clrAccent: 'hsla(249,29%,5%,0.6)',
        clrWhite: '#f7f7f7',
      },
    },
  },
  plugins: [daisyui],
};
