/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#0B3B2E",
          light: "#145743",
          dark: "#06261E",
        },
        cream: {
          DEFAULT: "#F5EBDD",
          dark: "#E7D8C5",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E2C766",
        },
        primary: {
          DEFAULT: "#0B3B2E",
          foreground: "#F5EBDD",
        },
        secondary: {
          DEFAULT: "#F5EBDD",
          foreground: "#0B3B2E",
        },
      },
      boxShadow: {
        elegant: "0 10px 30px rgba(0,0,0,0.18)",
        "elegant-lg": "0 18px 50px rgba(0,0,0,0.22)",
        glow: "0 0 40px rgba(212, 175, 55, 0.35)",
      },
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
}

