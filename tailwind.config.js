/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // black: "#171717",
        // card: "#2c2c2c",
        // desc: "#777a7f",
        // icon: "#999999",
        // white: "#f5f5f5",

        accent: "#77323A",

        dark_bg_p: "#171717",
        dark_bg_s: "#2c2c2c",
        dark_text_p: "#efefef",
        dark_text_s: "#999999",

        light_bg_p: "#f5f5f5",
        light_bg_s: "#e5e5e5",
        light_text_p: "#333333",
        light_text_s: "#777777",
      },
    },
  },
  plugins: [],
};
