export default {
 content: ["./index.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: {
          300: "#d1d5db",
          400: "#9ca3af",
        },
        "neon-green": "#0FFF50",
        "neon-blue": "#00D9FF",
        "neon-yellow": "#FFFF00",
        "dark-bg": "#0a0e27",
        "dark-card": "#1a1f3a",
        "accent-purple": "#6B21A8",
      },
      backgroundImage: {
        "gradient-gaming":
          "linear-gradient(135deg, #0FFF50 0%, #00D9FF 50%, #6B21A8 100%)",
        "gradient-dark": "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        slideInDown: "slideInDown 0.6s ease-out both",
        slideInUp: "slideInUp 0.6s ease-out both",
        fadeIn: "fadeIn 0.6s ease-out both",
        scaleIn: "scaleIn 0.5s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(15, 255, 80, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(15, 255, 80, 0.8)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 10px rgba(0, 217, 255, 0.5)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.8)",
          },
        },
        slideInDown: {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
}