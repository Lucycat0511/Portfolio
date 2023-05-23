/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#F0EBE3",
      secondary: "#E4DCCF",
      tertiary: "#7D9D9C",
      quaternary: "#576F72",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      display: ["Oswald", "sans-serif"],
      body: ["'Open Sans'", "sans-serif"],
    },
    extend: {
      margin: {
        body: "15%",
      },
      padding: {
        body: "15%",
      },
      animation: {
        fadeInUp: " fadeInUp 800ms ease-in 1",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
