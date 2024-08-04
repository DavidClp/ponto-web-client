/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-secondary": "#262626",
        "bg-primary": "#1E1E1E",
        primary: "#F28B04",
        "color-text": "#FFFFFF",
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [],
};
