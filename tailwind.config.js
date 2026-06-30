/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          20: '#3A54B1',
          DEFAULT: '#212867',
        },
        purplegray: {
          DEFAULT: '#2E3241',
        },
        disabledgray: {
          DEFAULT: '#C9CCD2',
        },
        blueGreen: {
          DEFAULT: '#6DC1BC',
        },
        steelTeal: {
          DEFAULT: '#589193',
        },
        florBlue: {
          DEFAULT: '#81F0E5',
        },
      },
    },
  },
  plugins: [],
}
