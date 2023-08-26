/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "975px",
    },
    extend: {
      screens: {
        xs: "350px",
      },
      fontFamily: {
        system:
          " -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      },
      backgroundImage: {
        icons: "url(images/bg-icons.png)",
      },
      animation: {
        "loading-story": "loading-story 3500ms ease-in-out alternate infinite",
      },
      keyframes: {
        "loading-story": {
          "10%": {
            "stroke-dasharray": "5",
          },
          "100%": {
            "stroke-dasharray": "10",
            transform: "rotate(250deg)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
