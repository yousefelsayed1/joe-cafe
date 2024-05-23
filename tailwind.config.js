module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "500px",
        // => @media (min-width: 576px) { ... }
      },
      fontFamily: {
        primary: "Merienda, cursiverif",
      },
      colors: {
        primary: "#222",
        secondary: "#ffffff",
        tertiary: "#be9c79",
        blackOut: "#111",
      },
      backgroundImage: {
        coffeeCover: "url('/src/assets/images/home-bg.png')",
      },
      dropShadow: {
        md: "0 5px 10px rgba(0, 0, 0, 0.8)",
        xl: [
          "0 10px 15px rgba(0, 0, 0, 0.8)",
          "0 10px 15px rgba(0, 0, 0, 0.8)",
        ],
      },
    },
  },
  plugins: [],
};
