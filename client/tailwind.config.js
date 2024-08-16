/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryGreen': "#10B981",
        'secondaryMintCream': "#FFEDD5",
      },
      fontFamily: {
        'inter': "'Inter', sans-serif"
      }
    },
  },
  plugins: [],
}