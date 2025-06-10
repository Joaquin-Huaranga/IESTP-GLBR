// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // si usas React/Vite
    "./components/**/*.{js,ts,jsx,tsx}", // opcional
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
