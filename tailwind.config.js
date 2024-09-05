/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-pink": "#E36D7E",
        "c-pink-50": "#E36D7E80",
        "c-blue": "#6361CFCC",
      }
    },
  },
  plugins: [require("rippleui")],
};
