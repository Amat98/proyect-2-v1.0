/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'bg-1': "url('/images/bg-1.jpg')"
      // }
    },
    fontFamily: {
      "lato": ["lato", "sans-serif"]
    }
  },
  plugins: [],
}

