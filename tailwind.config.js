// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#14b8a6",  // teal-500
        dark: "#0f172a",
        light: "#f8fafc",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.1)",
        hover: "0 8px 20px rgba(0, 0, 0, 0.12)",
        neon: "0 0 6px #14b8a6, 0 0 12px #14b8a6, 0 0 24px #06b6d4",
      },

      /* ----------------- KEYFRAMES ----------------- */
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "scroll-fade": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        // NEW: dancing / floating / neon
        "text-glow": {
          "0%": { textShadow: "0 0 2px rgba(20,184,166,0.4)" },
          "50%": { textShadow: "0 0 12px rgba(20,184,166,0.9)" },
          "100%": { textShadow: "0 0 2px rgba(20,184,166,0.4)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 0px rgba(20,184,166,0.0)" },
          "50%": { boxShadow: "0 0 18px rgba(20,184,166,0.8)" },
        },
        "float": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        "float-slow": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      /* ----------------- ANIMATIONS ----------------- */
      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-in-down": "fade-in-down 1s ease-out forwards",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "slide-left": "slide-left 0.8s ease-out forwards",
        "slide-right": "slide-right 0.8s ease-out forwards",
        "scroll-fade": "scroll-fade 1s ease-out forwards",

        // NEW
        "text-glow": "text-glow 2.2s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        wiggle: "wiggle 0.8s ease-in-out infinite",
        "spin-slow": "spin 6s linear infinite",
      },

      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
