import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black:    "#0A0A0A",
          "black-2": "#111111",
          "black-3": "#1A1A1A",
          "black-4": "#222222",
          white:    "#FFFFFF",
          "white-2": "#F5F5F5",
          "white-3": "#E8E8E8",
          gray:     "#888888",
          "gray-light": "#BBBBBB",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease-out forwards",
        "fade-in":   "fadeIn 0.5s ease-out forwards",
        "line-grow": "lineGrow 1s ease-out forwards",
      },
      keyframes: {
        fadeUp:   { "0%": { opacity: "0", transform: "translateY(32px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:   { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        lineGrow: { "0%": { transform: "scaleX(0)" }, "100%": { transform: "scaleX(1)" } },
      },
    },
  },
  plugins: [],
};
export default config;
