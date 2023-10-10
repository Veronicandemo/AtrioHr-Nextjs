/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#343C48',
        'white-pure': '#FFFFFF',
        'white-light': '#F1F2F7',
      },
    },
  },
  plugins: [],
}
