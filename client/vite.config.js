import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  extend: {
    animation: {
      "spin-slow": "spin 1.5s linear infinite",
    },
  },
});
