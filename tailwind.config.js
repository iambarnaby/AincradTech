module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      teko: ["Teko", "sans-serif"],
    },
    fontSize: {
      size48: "48px",
      size28: "28px",
      size: "21px",
    },
  },
  variants: {
    display: [
      "children",
      "default",
      "children-first",
      "children-last",
      "children-odd",
      "children-even",
      "children-not-first",
      "children-not-last",
      "children-hover",
      "hover",
      "children-focus",
      "focus",
      "children-focus-within",
      "focus-within",
      "children-active",
      "active",
      "children-visited",
      "visited",
      "children-disabled",
      "disabled",
      "responsive",
    ],
  },
  plugins: [require("tailwindcss-children")],
};
