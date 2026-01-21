/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Hack Nerd Font", "Hack", "ui-monospace", "monospace"],
        sans: [
          "Hack Nerd Font Propo",
          "Hack",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        green: "var(--color-green)",
        teal: "var(--color-teal)",
        peach: "var(--color-peach)",
        blue: "var(--color-blue)",
        cyan: "var(--color-cyan)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
