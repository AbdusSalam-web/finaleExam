/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Poppins : ["Poppins", "serif"]
    },
    container:{
      center: true,
      padding:{
        lg: "219px"
      }
    },
    extend: {},
  },
  plugins: [],
}