import type { Config } from "tailwindcss";
import colors, { blue } from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "rgb(var(--color-black) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
