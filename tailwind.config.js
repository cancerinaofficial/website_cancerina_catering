/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'leaf-green': '#22c55e',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#22c55e",    /* Hijau Daun Segar */
          "secondary": "#15803d",  /* Hijau Hutan (Healthy) */
          "accent": "#facc15",     /* Kuning Sun untuk aksen */
          "neutral": "#1f2937",
          "base-100": "#ffffff",   /* Light Mode */
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
      "dark", // Standar Dark Mode bawaan DaisyUI
    ],
  },
}