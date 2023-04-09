/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },

    extend: {
      backgroundImage: {
        'sale-banner-bg': "url('/src/Assets/Photos/sale bg.png')",
        'blog-banner': "url('/src/Assets/Photos/blog banner.png')",
      },
      colors: {
        'white': '#ffffff',
        'dark': '#17201D',
        'primary': '#5B9982',
        'primary-toned': '#E7EFEB',
        'red': '#DB2F06',
        'red-toned': '#FAE8E4',
        'gold': '#F6C441',
        'gray': '#8B928F',
        'gray-border': '#F2F2F2',


      }
    },
  },
  plugins: [],
}