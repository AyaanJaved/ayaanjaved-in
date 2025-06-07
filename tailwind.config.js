/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
      },
      colors: {
        background: '#F7F5F1',
        dark: '#0C0908',
        accent: {
          DEFAULT: '#D9AE6E',
          hover: '#BC5831',
        },
      },
    },
  },
  plugins: [],
}

