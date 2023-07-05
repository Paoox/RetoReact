/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dev-to-Background": "#F4F4F4",
        "dev-to-card-color": "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui")],
};
