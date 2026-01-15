/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8933A",
      },
      keyframes: {
        "slide-down-bounce": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "60%": { transform: "translateY(10%)", opacity: "1" },
          "80%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slide-down-bounce": "slide-down-bounce 0.6s ease-out forwards",
        "slide-up": "slide-up 0.4s ease-in forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.3s ease-out forwards",
        "spin-slow": "spin 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
