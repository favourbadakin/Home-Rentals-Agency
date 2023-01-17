/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#18191F",
      secondary: "#1B1C1E",
      tertiary: "#F4511E",
    },

    extend: {
      backgroundImage: {
        "hero-image":
          "linear-gradient(200.44deg, rgba(0, 0, 0, 0.0001) 16.41%, rgba(0, 0, 0, 0.51) 77.16%), url('/src/assets/images/header.png')",
      },
    },
  },
  plugins: [],
};
