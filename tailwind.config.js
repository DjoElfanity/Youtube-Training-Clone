import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: "clamp(0.8rem, 0.1vw + 0.78rem, 0.89rem)",
        base: "clamp(1rem, 0.2vw + 0.95rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.35vw + 1.16rem, 1.58rem)",
        xl: "clamp(1.56rem, 0.58vw + 1.42rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 0.9vw + 1.73rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 1.38vw + 2.1rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 2.05vw + 2.54rem, 5rem)",
        "5xl": "clamp(3.81rem, 3vw + 3.07rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 4.33vw + 3.69rem, 8.88rem)",
      },
      colors: {
        secondary: {
          DEFAULT: colors.neutral[200],
          hover: colors.neutral[300],
          border: colors.neutral[400],
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["dark-hover"]: colors.neutral[900],
        },
      },
    },
  },
  plugins: [],
};
