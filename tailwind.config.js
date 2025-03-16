export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmic: {
          100: "#f0e7ff",
          200: "#e1d2ff",
          300: "#c2adff",
          400: "#a389ff",
          500: "#8464ff",
          600: "#6542ff",
          700: "#5033cc",
          800: "#3d2799",
          900: "#0a081a",
        },
        nebula: {
          100: "#e0e1ff",
          200: "#c2c4ff",
          300: "#a3a6ff",
          400: "#8588ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#3f38b5",
          800: "#2f2a88",
          900: "#1f1c5b",
        },
        aurora: {
          100: "#e0fff4",
          200: "#c2ffe9",
          300: "#a3ffde",
          400: "#85ffd3",
          500: "#66ffc8",
          600: "#47ffbd",
          700: "#38cc97",
          800: "#2a9971",
          900: "#1c664a",
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "slide-in": "slideIn 0.5s ease-out",
        "text-gradient": "textGradient 5s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        textGradient: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { 
            boxShadow: "0 0 5px rgba(99, 102, 241, 0.3), 0 0 10px rgba(99, 102, 241, 0.2)",
            filter: "brightness(1)"
          },
          "100%": { 
            boxShadow: "0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)",
            filter: "brightness(1.1)"
          },
        },
      },
      boxShadow: {
        'neon': '0 0 5px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)',
        'neon-strong': '0 0 10px rgba(99, 102, 241, 0.7), 0 0 30px rgba(99, 102, 241, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};