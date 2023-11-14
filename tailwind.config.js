/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: "#app",
  theme: {
    /*---Start Addapter to bootstrap breakpoints---*/
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "calc(18px + 1rem)",
        md: "calc(24px + 1rem)",
        lg: "calc(16px + 1rem)",
        xl: "calc(30px + 1rem)",
        "2xl": "calc(40px + 1rem)",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "992px",
        // => @media (min-width: 992px) { ... }
        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
        "2xl": "1400px",
        // => @media (min-width: 1400px) { ... }
      },
    },
    /*---End Addapter to bootstrap breakpoints---*/
    extend: {
      colors: {
        "bcp-orange": "#ff7800",

        "bcp-blue-1": "#007aff",
        "bcp-blue-2": "#002A8D",
        "bcp-blue-3": "#EBF4FF",
        "bcp-blue-4": "#002DA0",

        "bcp-gray-1": "#202E44",
        "bcp-gray-2": "#4D5B70",
        "bcp-gray-3": "#868F9E",
        "bcp-gray-4": "#7F95B1",

        "bcp-green-1": "#6AC90F",
        "bcp-green-2": "#2D5209",
      },
      fontFamily: {        
      },
    },
  },
  plugins: [],
};
