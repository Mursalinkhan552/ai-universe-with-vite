/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#002eff",

          "secondary": "#00b34c",

          "accent": "#b88b00",

          "neutral": "#1b2e1d",

          "base-100": "#fcfcff",

          "info": "#009cb8",

          "success": "#1eb600",

          "warning": "#c88d00",

          "error": "#ff5f7f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

