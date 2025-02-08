/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bpp-color-100": '#F3DCFF',
      "bpp-color-200": '#A87FC4',
      "bpp-color-300": '#662D91',
    }
  },
  plugins: [],
}