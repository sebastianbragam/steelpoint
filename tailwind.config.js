/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        main: '#1C658C',
        secondaryColor: '#398AB9',
        alternate: '#D8D2CB',
        alternateSecondary: '#EEEEEE',
        cancel: '#cf412e'
      }
    }
  },
  plugins: [],
}

