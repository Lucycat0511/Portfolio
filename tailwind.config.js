/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#F0EBE3",
      seconday: "#E4DCCF",
      tertiary: "#7D9D9C",
      quaternary: "#576F72",
      white: "#FFFFFF",
    },
    fontFamily: {
      display: ["Oswald", "sans-serif"],
      body: ["'Open Sans'", "sans-serif"],
    },
    extend: {
      margin: {
        body: "15%",
      },
    },
  },
  plugins: [],
};
