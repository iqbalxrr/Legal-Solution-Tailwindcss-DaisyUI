
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          title: ['EB Garamond', 'serif'], // For titles or headings
          display: ['Poppins', 'sans-serif'], // For main text
        },
        backgroundImage: {
          'hero-img': "url('/images/banner.png')",
        },
      },
    },
    plugins: [],
  }