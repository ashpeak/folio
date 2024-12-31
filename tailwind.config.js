/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FDFDFC",
          DEFAULT: "#FDFDFC",
          dark: "#111110"
        },
        secondary: {
          light: "#F1F0EF",
          dark: "#222221"
        },
        text: {
          light: "#21201C",
          dark: "#EEEEEC"
        },
        text2: {
          light: "#82827C",
          dark: "#7C7B74"
        },
        border: {
          light: "#e2e1de",
          dark: "#31312e"
        },
      },
    },
  },
  plugins: [],
}

