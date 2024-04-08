/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "var(--app-theme-on-primary)",
      },
      "on-secondary": {
        DEFAULT: "var(--app-theme-on-secondary)",
      },
      disabled: {
        DEFAULT: "color-mix(in srgb, var(--app-theme-on-primary-variant), transparent 40%)"
      },
      error: "var(--app-theme-error)",
    },
    borderColor: {
      primary: {
        DEFAULT: "var(--app-theme-primary)",
      },
      secondary: {
        DEFAULT: "var(--app-theme-secondary)",
      },
    },
    backgroundColor: {
      DEFAULT: "var(--app-theme-background)",
      variant: {
        DEFAULT: "var(--app-theme-background-variant)",
      },
      primary: {
        DEFAULT: "var(--app-theme-primary)"
      },
      "primary-variant": {
        DEFAULT: "var(--app-theme-primary-variant)"
      },
      "secondary": {
        DEFAULT: "var(--app-theme-secondary)"
      },      
    },
    outline: {
      secondary: {
        DEFAULT: "var(--app-theme-secondary)",
      },
    },
    // in v3 from spacing inherit padding, margin, width, height, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding
    spacing: {
      0: "0rem",
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      32: "2rem",
      40: "2.5rem",
      48: "3rem",
      56: "3.5rem",
      80: "5rem",
      128: "8rem",
      256: "16rem",
      256: "16rem"
    },
    extend: {
      "fontFamily": {
        DEFAULT: ["Trebuchet MS", "Helvetica", "sans-serif"],
      },
    },
  },
  corePlugins: {
    fontSize: false,
    fontWeight: false,
    lineHeight: false,
    letterSpacing: false,
    textTransform: false,
    backgroundOpacity: false,
    textOpacity: false,
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".typo-medium": {
          fontSize: `1.25rem`,
          lineHeight: "150%",
        },
      });
    }),
  ],
}

