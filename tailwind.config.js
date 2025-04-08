/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef3ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a4bafc',
          400: '#8094f8',
          500: '#6371f1',
          600: '#4f4ce4',
          700: '#3d3ec7',
          800: '#3335a0',
          900: '#2d317d',
        },
        accent: {
          50: '#fff3ed',
          100: '#ffe4d4',
          200: '#ffc5a8',
          300: '#ff9e71',
          400: '#ff6937',
          500: '#ff4811',
          600: '#ff3304',
          700: '#cc2001',
          800: '#a11c06',
          900: '#821a09',
        }
      },
    },
  },
  plugins: [],
};