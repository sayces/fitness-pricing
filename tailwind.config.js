/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      screens: {
        '320': '320px',
        '375': '375px',
      },
      colors: {
        // Кастомные цвета
        green: {
          dark: '#1D5B43',
          light: '#81FE95',
        },

        red: {
          DEFAULT: '#FD5656',
        },
        yellow: {
          DEFAULT: '#FFBB00',
          golden: '#FDB056'
        },
        gray: {
          29: '#232829',
          37: '#313637',
          91: '#919191',
          cd: '#CDCDCD',
          '4e': '#484D4E',
          dc: '#DCDCDC',
        }
      },
    },
  },
  plugins: [],
}