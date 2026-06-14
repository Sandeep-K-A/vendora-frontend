import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A0F1E",
          2: "#111827",
          3: "#1E2640",
          4: "#2D3A5C",
        },
        indigo: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          glow: "rgba(79,70,229,0.35)",
        },
        saffron: {
          DEFAULT: "#F59E0B",
          light: "#FCD34D",
        },
        teal: "#0EA5E9",
        green: "#10B981",
        muted: "#94A3B8",
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          2: "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        head: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        container: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
