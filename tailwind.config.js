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
      shadow: {
        project: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
      hover: {
        rise: "transform: translateY(0.5rem)",
      },
    },
  },
  plugins: [],
};
