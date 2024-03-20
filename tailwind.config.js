/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: "#737a8e",
      },
    },
  },
  plugins: [],
};
