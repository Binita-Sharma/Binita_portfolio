/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#fbeae8',
        'bg-card': '#ffffff',
        'accent-red': '#c23b22',
        'accent-blue': '#d8ecf8',
        'accent-yellow': '#fbe29f',
        'accent-green': '#d1efe0',
        'accent-purple': '#e0dafb',
        'text-primary': '#111111',
        'text-secondary': '#444444',
      },
      fontFamily: {
        'main': ['Outfit', 'sans-serif'],
        'handwriting': ['Caveat', 'cursive'],
      },
      borderRadius: {
        'card': '1.5rem',
      },
    },
  },
  plugins: [],
}
