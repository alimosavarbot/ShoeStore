/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-pink": "#E36D7E",
        "c-blue": "#6361CFCC",
      }
    },
  },
  plugins: [require("rippleui")],
};
