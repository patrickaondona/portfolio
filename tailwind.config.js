/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundColor: {
        background: {
          DEFAULT: "#f9f0fe", // Default background color
          light: "#212121",
          dark: "#181818",
        },
      },
      colors: {
        brand: {
          DEFAULT: "#a177b4", // Primary brand color
          dark: "#7d4e8e", // Darker shade for active states
          border: "#7e7e7e",
          span: "#e2e2e2",
          blacktext: "#181818",
        },
        text: {
          DEFAULT: "#333333", // Default text color
          light: "#c2c2c2", // Light text color for dark backgrounds
          dark: "#7e7e7e", // Dark text color for dark backgrounds
        },
      },
    },
    plugins: [],
  },
};
