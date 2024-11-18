/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       custom: '#ec4899'
      },
      fontFamily: {
        signature: ["Great Vibes"], // Define your custom font family here
      },
    },
  },
  plugins: [],
};
