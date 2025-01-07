/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        heading: ["Roboto", "Helvetica", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#164e63",
          secondary: "#e7e5e4",
          accent: "#fecaca",
          neutral: "#fecdd3",
          "base-100": "#ffffff",
          info: "#99f6e4",
          success: "#4ade80",
          warning: "#facc15",
          error: "#ef4444",

          "background-primary": "#fafaf9",
          "button-primary": "#fb7185",
          "button-secondary": "#e7e5e4",
          "primary-content": "#374151",
          "secondary-content": "#6b7280",
        },
      },
    ],
  },
};
