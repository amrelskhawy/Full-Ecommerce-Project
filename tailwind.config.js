/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#DB4444",
        secondary: "#F5F5F5",
        success: "#00FF66"
      }
    },
  },
  plugins: [],
}

