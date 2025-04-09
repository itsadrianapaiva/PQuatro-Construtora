export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx.mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-dmSans)",
      secondary: "var(--font-barlow)",
    },
    extend: {
      colors: {
        primary: "#121315",
        secondary: "#666666",
        blue: "#002238",
        orange: "#ffa41b",
        accent: "#00784c",
        border: "#d7d7d7",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg2.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
