module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Roboto Mono"', "monospace"],
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
      },
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0, transform: "translateY(8px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    },
  },
};
