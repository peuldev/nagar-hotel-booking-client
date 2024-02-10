/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      color: "#383a4e",
      blue: "#007bff",
      info: "#17a2",
      white: "#fff",
      warning: "#ffc107",
      yellow: "#ffa505",
      border: "#dedede",
      red: "#FF0000",
      primary_color: "#dedede",
    },
    extend: {
      fontFamily: {
        primary: ["'Jost', sans-serif"],
        secondary: ["'Poppins', sans-serif"],
        fraunces: ["'Fraunces', serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
