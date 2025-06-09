/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        background: '#EAE7DC',
        dark: '#0C0908',
        secondary: '#D8C3A5',
        accent: {
          DEFAULT: '#E98074',
          hover: '#E85A4F',
        },
      },
    },
  },
  plugins: [],
}