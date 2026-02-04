import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'green-dark': '#1D5B43',
        'green-light': '#81FE95',
        'red': '#FD5656',
        'yellow': '#FFBB00',
        'golden': '#FDB056',
        'gray-29': '#232829',
        'gray-37': '#313637',
        'gray-91': '#919191',
        'gray-cd': '#CDCDCD',
        'gray-4e': '#484D4E',
        'gray-dc': '#DCDCDC',
      },
    },
  },
  plugins: [],
}

export default config