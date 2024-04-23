/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        gatoroboto: {
          50: '#ffffff',
          100: '#ff4800',
        }
      }
    },
  },
  plugins: []
}

