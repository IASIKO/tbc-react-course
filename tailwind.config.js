/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "var(--blue)",
        indigo: "var(--indigo)",
        purple: "var(--purple)",
        pink: "var(--pink)",
        red: "var(--red)",
        lightred: "var(--lightred)",
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
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      boxShadow: {
        'shadow-bottom': '0px 10px 27px -21px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        fall: "fall 2s ease",
        down: "down 2s ease",
        "fade-in-up": "fade-in-up 0.6s ease-in-out",
      },
      keyframes: {
        fall: {
          "0%": { transform: " translate3d(0,40px,0)" },
          "50%": { transform: "translate3d(0,0,0)" },
        },
        down: {
          "0%": { transform: " translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,40px,0)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
