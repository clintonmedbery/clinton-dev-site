import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"]
      },
      colors: {
        "ox-blue": "#0F0F2F",
        "space-cadet": "#2D2E50",
        "non-photo-blue": "#89D2DC"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      gridTemplateColumns: {
        sidebar: "300px auto",
        "sidebar-collapsed": "64px auto"
      }
    }
  },
  plugins: []
};
export default config;
