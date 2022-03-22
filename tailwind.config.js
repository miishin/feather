module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo-header': "url('../public/photo-header.jpg')",
        'art-header': "url('../public/art-header.jpg')",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
