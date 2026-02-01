/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.6) translate(20%, 20%)", opacity: "0" },
          "60%": { transform: "scale(1.05) translate(0, 0)", opacity: "1" },
          "80%": { transform: "scale(0.98) translate(0, 0)" },
          "100%": { transform: "scale(1) translate(0, 0)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        "shutter-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "text-reveal": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "float": "float 3s ease-in-out infinite",
        "shutter-blink": "shutter-blink 2s ease-in-out infinite",
        "text-reveal": "text-reveal 0.4s ease-out forwards",
        "text-reveal-delay": "text-reveal 0.4s ease-out 0.2s forwards",
      },
    },
  },
  plugins: [],
}

