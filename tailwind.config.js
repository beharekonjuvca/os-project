module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C9EEF7",
        secondary: "#DEEDC6",
        grey: "#e7efe8",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
