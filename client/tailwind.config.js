/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-300": "#f6bc7d",
        "accent-400": "#FDBA74",
        "primary-300": "#d5b2e0",
        "primary-400": "#a151f1",
        "primary-500": "#800080",
      },
      backgroundImage: (theme) => ({
        "home-desktop": "url('./assets/homeGraphic.png')",
      }),
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};