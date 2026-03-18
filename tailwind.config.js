/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        lift: {
          red: '#C62828',
          'red-dark': '#B71C1C',
          'red-pale': '#FFEBEE',
          dark: '#1C1917',
          warm: '#F5F5F5',
          muted: '#6B6560',
          border: '#E0E0E0',
        },
      },
    },
  },
  plugins: [],
}
