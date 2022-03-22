module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'photo-header': "url('../img/headers/photos.jpeg')",
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}