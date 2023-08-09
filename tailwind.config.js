/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-2': "url('/images/bg-2.jpg')"
      }
    },
    fontFamily: {
      "lato": ["lato", "sans-serif"]
    }
  },
  plugins: [],
}

