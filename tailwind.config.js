/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        3: "3",
        102: "102",
      },
      boxShadow: {
        custom: "0 0 3px rgba(0,0,0,.1)",
        input: "0 3px 3px rgba(0,0,0,.05)",
        poster: "0 30px 30px rgba(0,0,0,.2)",
      },
      opacity: {},
      transitionProperty: {
        fade: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
      backgroundColor: {
        blur: "rgba(0, 0, 0, 0.5)",
        trendingSection: "linear-gradient(0deg,#2c2c2c 0,#1f1f1f 100%)",
      },
      transformOrigin: {
        translate3d: "translate3d(0px, 0px, 0px)",
      },
    },
  },
  plugins: [],
};
