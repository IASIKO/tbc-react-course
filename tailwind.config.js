/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        indigo: "var(--indigo)",
        purple: "var(--purple)",
        pink: "var(--pink)",
        red: "var(--red)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        green: "var(--green)",
        teal: "var(--teal)",
        cyan: "var(--cyan)",
        white: "var(--white)",
        gray: "var(--gray)",
        "gray-dark": "var(--gray-dark)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        success: "var(--success)",
        info: "var(--info)",
        warning: "var(--warning)",
        danger: "var(--danger)",
        light: "var(--light)",
        dark: "var(--dark)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        mono: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        spectral: ["Spectral", "serif"],
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      backgroundImage: {
        "landing-bgImage": "url('/src/Assets/images/bg_1.jpg')",
        "about-image": "url('/src/Assets/images/about-image.jpg')",
      },
      // animation: {
      //   "spin-slow": "spin 3s linear infinite",
      // },
      keyframes: {
        fall: {
          "0%": { transform: " translate3d(0,40px,0)" },
          "50%": { transform: "translate3d(0,0,0)" },
        },
      },
      animation: {
        fall: "fall 2s ease",
      },
    },
  },
  plugins: [],
};
