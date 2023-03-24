/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg-dark-color": "#0D0D0D",
        "main-text-color": "#EAEAEA",
        "modal-bg-dark-color": "#080808",
        "red-border-color": "#F33F3F",
        "input-bg-color": "#1F1F1F",
        "btn-bg-color": "#F33F3F",
        "btn-hover-bg-color": "#9B3434",
        "gray-text-color": "#9A9A9A",
        "gray-border-color": "#1F1F1F",
        "navbar-bg-color": "#080808",
        "search-input-border-color": "#1F1F1F",
        "search-input-text-color": "#5C5C5C",
        "menu-item-hover-bg-color": "#1F1F1F",
      },
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
