/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      colors: {
        primaryCol: "#08605F",
        secondaryCol: "#C8AD55",
      },
      textColor: {
        primary: "#444444",
        secondary: "#f4f5f7",
      },
      fontFamily: {
        Sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
