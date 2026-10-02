/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#0e3a22',
          950: '#072415',
        },
        charcoal: {
          800: '#1e2621',
          900: '#131915',
          950: '#0b0f0c',
        },
        warm: {
          50: '#fdfcf9',
          100: '#f7f6f0',
          200: '#edebe0',
          300: '#ded9c9',
          800: '#423f37',
          900: '#26241f',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(14, 58, 34, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 10px 30px -4px rgba(14, 58, 34, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.03)',
        'lift': '0 20px 35px -8px rgba(14, 58, 34, 0.14), 0 8px 16px -4px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
