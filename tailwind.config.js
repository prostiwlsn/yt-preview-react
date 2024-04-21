/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        gatoroboto: {
          50: '#fcffcc',
          100: '#0a2e44'
        }
      }
    },
  },
  plugins: []
}

