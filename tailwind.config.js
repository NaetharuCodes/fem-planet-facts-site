/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
      },
    },
    colors: {
      white: "#ffffff",
      black: "#070724",
      darkGray: "#38384F",
      lightGray: "#838391",
      lightBlue: "#419ebb",
      yellow: "#ead249",
      purple: "#6f2ed6",
      darkOrange: "#d14c32",
      red: "#d83a34",
      lightOrange: "#cd5120",
      green: "#1ec2a4",
      darkBlue: "#2d68f0",
    },
  },
  plugins: [],
};
