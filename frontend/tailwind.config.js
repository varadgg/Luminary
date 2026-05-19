/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": withOpacity("--color-primary"),
        "on-primary": withOpacity("--color-on-primary"),
        "primary-container": withOpacity("--color-primary-container"),
        "on-primary-container": withOpacity("--color-on-primary-container"),
        "primary-fixed": withOpacity("--color-primary-fixed"),
        "primary-fixed-dim": withOpacity("--color-primary-fixed-dim"),
        "on-primary-fixed": withOpacity("--color-on-primary-fixed"),
        "on-primary-fixed-variant": withOpacity("--color-on-primary-fixed-variant"),
        "primary-dim": withOpacity("--color-primary-dim"),
        "inverse-primary": withOpacity("--color-inverse-primary"),
        "secondary": withOpacity("--color-secondary"),
        "on-secondary": withOpacity("--color-on-secondary"),
        "secondary-container": withOpacity("--color-secondary-container"),
        "on-secondary-container": withOpacity("--color-on-secondary-container"),
        "secondary-fixed": withOpacity("--color-secondary-fixed"),
        "secondary-fixed-dim": withOpacity("--color-secondary-fixed-dim"),
        "on-secondary-fixed": withOpacity("--color-on-secondary-fixed"),
        "on-secondary-fixed-variant": withOpacity("--color-on-secondary-fixed-variant"),
        "secondary-dim": withOpacity("--color-secondary-dim"),
        "tertiary": withOpacity("--color-tertiary"),
        "on-tertiary": withOpacity("--color-on-tertiary"),
        "tertiary-container": withOpacity("--color-tertiary-container"),
        "on-tertiary-container": withOpacity("--color-on-tertiary-container"),
        "tertiary-fixed": withOpacity("--color-tertiary-fixed"),
        "tertiary-fixed-dim": withOpacity("--color-tertiary-fixed-dim"),
        "on-tertiary-fixed": withOpacity("--color-on-tertiary-fixed"),
        "on-tertiary-fixed-variant": withOpacity("--color-on-tertiary-fixed-variant"),
        "tertiary-dim": withOpacity("--color-tertiary-dim"),
        "background": withOpacity("--color-background"),
        "on-background": withOpacity("--color-on-background"),
        "surface": withOpacity("--color-surface"),
        "on-surface": withOpacity("--color-on-surface"),
        "surface-dim": withOpacity("--color-surface-dim"),
        "surface-bright": withOpacity("--color-surface-bright"),
        "surface-container-lowest": withOpacity("--color-surface-container-lowest"),
        "surface-container-low": withOpacity("--color-surface-container-low"),
        "surface-container": withOpacity("--color-surface-container"),
        "surface-container-high": withOpacity("--color-surface-container-high"),
        "surface-container-highest": withOpacity("--color-surface-container-highest"),
        "surface-variant": withOpacity("--color-surface-variant"),
        "on-surface-variant": withOpacity("--color-on-surface-variant"),
        "surface-tint": withOpacity("--color-surface-tint"),
        "outline": withOpacity("--color-outline"),
        "outline-variant": withOpacity("--color-outline-variant"),
        "inverse-surface": withOpacity("--color-inverse-surface"),
        "inverse-on-surface": withOpacity("--color-inverse-on-surface"),
        "error": withOpacity("--color-error"),
        "on-error": withOpacity("--color-on-error"),
        "error-container": withOpacity("--color-error-container"),
        "on-error-container": withOpacity("--color-on-error-container"),
        "error-dim": withOpacity("--color-error-dim"),
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      fontFamily: {
        headline: ["var(--font-headline)"],
        body: ["var(--font-body)"],
        label: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
