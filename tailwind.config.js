/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#FFFFFF",
          lightPink: "#F9F0FF",
          grayishPurple: "#8C6991",
          darkPurple: "#2F1533",
          brightPurple: "#AD28EB",
        },
        backgroundImage: {
          "desktop-pattern":
            "url(/src/assets/images/background-pattern-desktop.svg)",
          "mobile-pattern":
            "url(/src/assets/images/background-pattern-mobile.svg)",
        },
      },
    },
    plugins: [],
  };