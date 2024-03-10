/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gluten: ["Gluten", "cursive"],
      },
      colors: {
        green: "#194916",
      },
    },
  },
  plugins: [],
};
