/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#D8D8D8",
          10: '#828282'
        },
      },
    },
  },
  plugins: [],
};
