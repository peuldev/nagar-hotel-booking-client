/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      color: "#383a4e",
      blue: "#007bff",
      info: "#17a2",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        primary: ["'Jost', sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
