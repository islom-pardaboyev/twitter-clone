/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#D8D8D8",
          10: '#828282',
          20: "#EFF3F4"
        },
        blue: {
          DEFAULT: "#1DA1F2"
        }
      },
    },
  },
  plugins: [],
};
