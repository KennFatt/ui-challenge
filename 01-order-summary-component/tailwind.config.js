module.exports = {
  mode: "jit",
  purge: ["./src/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          pale: "hsl(225, 100%, 94%)",
          bright: "hsl(245, 75%, 52%)",
        },
        neutral: {
          pale: "hsl(225, 100%, 98%)",
          desaturated: "hsl(224, 23%, 55%)",
          dark: "hsl(223, 47%, 23%)",
        },
      },
      fontFamily: {
        primary: "Red Hat Display",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
