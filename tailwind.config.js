/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundColor: {
        background: {
          DEFAULT: "#f5f5f5", // Default background color
          light: "#e2e2e2",
          dark: "#f9f0fe",
        },
      },
      colors: {
        brand: {
          DEFAULT: "#a177b4", // Primary brand color
          dark: "#7d4e8e", // Darker shade for active states
        },
        text: {
          DEFAULT: "#333333", // Default text color
          light: "#7e7e7e", // Light text color for dark backgrounds
        },
      },
    },
    plugins: [],
  },
};
