module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
    colors: {
      launchyOrange: "#F39669",
      white: "#FFFFFF",
      darkBlue: "#211539",
      silver: "#C0C0C0",
      softBlue: "#12156C",
      drakBlueTransparent: "rgba(33,21,57,.7)",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
