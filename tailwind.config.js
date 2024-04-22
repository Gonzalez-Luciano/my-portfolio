/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        FadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        SlideUp: {
          "0%": { opacity: 1, transform: "translateY(0)" },
          "100%": { opacity: 0, transform: "translateY(-100%)" },
        },
        TextAppear: {
          "0%": { opacity: 0, transform: "scale(0.6)" },
          "50%": { opacity: 1, transform: "scale(1.03)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        ObjectAppear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        ObjectBounce: {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        FadeInLeft: "FadeInLeft 2s ease 0s 1 normal forwards",
        SlideUp: "SlideUp 1.5s ease 0s 1 normal forwards",
        ObjectAppear: "ObjectAppear 1s ease 1s 1 normal forwards ",
        ObjectBounce: 'ObjectBounce 1s infinite',
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        darkBlue: "#0B1431",
        oceanBlue: "#0A246E",
        OrangeMy: "#D56928",
      },
    },
  },
  plugins: [],
};
