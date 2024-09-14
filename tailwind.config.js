/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-pink": "#E36D7E",
        "c-pink-50": "#E36D7E80",
        "c-pink-80": "#E36D7ECC",
        "c-blue-80": "#6361CFCC",
        "c-blue": "#6361CF",
      }
    },
  },
  plugins: [require("rippleui")],
};
