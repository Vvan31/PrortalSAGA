/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
 /*  darkMode: "class", */
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#404041",
      dark: "#6F7271",
      "blue": "#0A0F29",
      primary: "#621132", // Pantone 7420 ROJO CLARO
      "red" : "#13322B", // Pantone 7421 Rojo obscuro
      yellow: "#B38E5D", //Pantone 456 AMARILLO 
      "body-color": "#D4C19C", // Pantone 468 amarillo claro
      "primaryGreen": "#13322B", // Pantone 627 verde obscuro
      "green": "#285C4D" // Pantone 626 verde claro

   /*  "primary": "#621132",
      "secondary": "#13322B",
      "accent": "#9D2449",
      "neutral": "#B38E5D",
      "base-100": "#B38E5D", 
      "info": "#4E232E",
      "success": "#285C4D", 
      "warning": "#fbbd23",
      "error": "#9D2449", */
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
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
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '4rem',
      '6xl': '5rem',
      
    },
    fontFamily:{
      fontFamily: {
        'montserrat': ['Montserrat']
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#621132",
          "secondary": "#13322B",
          "accent": "#9D2449",
          "neutral": "#B38E5D",
          "base-100": "#B38E5D", 
          "info": "#4E232E",
          "success": "#285C4D", 
          "warning": "#fbbd23",
          "error": "#9D2449",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
