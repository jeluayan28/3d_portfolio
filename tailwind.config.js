/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette: black #000000, hot pink #FF4191, magenta #E90074, yellow #FFF078.
        // "soft" / "mist" / "surface" are near-black pink tints used for borders and cards.
        canvas: "#000000",
        surface: "#120A0F",
        accent: "#FFF078",
        pink: { DEFAULT: "#FF4191", light: "#FFF078", deep: "#E90074", soft: "#34121F", mist: "#160A10" },
        forest: { DEFAULT: "#FFF078", deep: "#FFFFFF" }, // "forest" is the yellow accent text colour
        ink: { DEFAULT: "#FFF4F8", muted: "#B9A9B1" },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,.25), 0 16px 36px -16px rgba(0,0,0,.55)",
        lift: "0 2px 4px rgba(0,0,0,.3), 0 24px 48px -16px rgba(255,65,145,.4)",
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};
