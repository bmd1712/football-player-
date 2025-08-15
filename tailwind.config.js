/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Rõ ràng chỉ định chiến lược dark mode là 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffc001",
        secondary: "#ff9c01",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
};