/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-300": "#f6bc7d",
        "accent-400": "#FDBA74",
        "accent-500": "#FB923C",
        "primary-100": "#ECD9F2",
        "primary-200": "#d5b2e0",
        "primary-300": "#a151f1",
        "primary-400": "#782f78",
        "primary-500": "#800080",
        "button-hover": "#c59ced",
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
