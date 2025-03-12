/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode using class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0d0d0d",   // Stylish dark background
        darkText: "#f5f5f5", // Light text in dark mode
      },
    },
  },
  plugins: [],
};
