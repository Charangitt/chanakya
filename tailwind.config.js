// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        // Define your custom shadow styles here
        'custom': '0 10px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
