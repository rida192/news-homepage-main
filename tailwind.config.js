/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        lg: "786px",
        xl: "1024px",
        "2xl": "1143px",
      },
      colors: {
        SoftOrange: "hsl(35, 77%, 62%)",
        SoftRed: "hsl(5, 85%, 63%)",
        OffWhite: "hsl(36, 100%, 99%)",
        GrayishBlue: "hsl(233, 8%, 79%)",
        DarkGrayishBlue: " hsl(236, 13%, 42%)",
        VeryDarkBlue: "hsl(240, 100%, 5%)",
      },
    },
  },
  plugins: [],
};
