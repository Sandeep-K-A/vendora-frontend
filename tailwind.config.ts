import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: {
          DEFAULT: "#FAFAF9",
          2: "#F4F3F0",
          3: "#ECEAE4",
        },

        // Text
        ink: {
          DEFAULT: "#111110",
          2: "#6F6D66",
          3: "#A09E98",
        },

        // Primary accent — forest green
        forest: {
          DEFAULT: "#1B4332",
          2: "#2D6A4F",
          light: "#52B788",
          xl: "#B7E4C7",
        },

        // Secondary accent — amber gold
        gold: {
          DEFAULT: "#C77B35",
          light: "#F0A050",
        },

        // Border
        line: {
          DEFAULT: "#E0DDD6",
          2: "#D0CEC7",
        },
        vendora: {
          green: "#22C55E",
        },
      },
      backgroundImage: {
        "product-placeholder":
          "linear-gradient(135deg, #F0EDE6 0%, #E8E4DC 100%)",
        "ai-verdict":
          "linear-gradient(135deg, rgba(82,183,136,0.08), rgba(27,67,50,0.05))",
      },

      fontFamily: {
        head: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      borderColor: {
        DEFAULT: "#E0DDD6",
        subtle: "#E0DDD6",
        strong: "#D0CEC7",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0px) rotate(-1deg)" },
          "50%": { transform: "translateY(-6px) rotate(0.5deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "floatSlow 4s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
