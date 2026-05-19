import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta JM Copy — base "papel" + tintas CMYK vibrantes
        paper: "#f7f0e1",
        "paper-deep": "#ece0c5",
        ink: "#181016",
        magenta: { DEFAULT: "#e014b5", deep: "#a30c84" },
        cyan: { DEFAULT: "#33b6e0", deep: "#1d7c9c" },
        sun: { DEFAULT: "#f4ea0c", deep: "#c9c000" },
        grape: { DEFAULT: "#4614ab", deep: "#290a6b" },
        blush: "#f2bfc5",
        wine: "#d94663",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sticker: "6px 6px 0 0 rgba(24,16,22,0.9)",
        "sticker-sm": "4px 4px 0 0 rgba(24,16,22,0.9)",
        soft: "0 24px 60px -24px rgba(24,16,22,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(var(--rot,0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--rot,0deg))" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "100%": { transform: "scale(1.9)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration,32s) linear infinite",
        float: "float var(--float-duration,7s) ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
