/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#ffffff",
      orange: "#ff9f0d",
      "dark-grey": "#484848",
      "light-grey": "#717171",
      light: "#F1F6F5",
      "light-100": "#F7F7F7",
      brown: "#473C33",
      red: "#850000",
    },
    extend: {},
  },
  plugins: [],
};
