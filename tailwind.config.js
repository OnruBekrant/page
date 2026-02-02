/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // 1. Bunu ekliyoruz (shadcn renk teması için şart)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate") // 2. EN KRİTİK KISIM: Animasyon paketi buraya eklenmeli
  ],
}