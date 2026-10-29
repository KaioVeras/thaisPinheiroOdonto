import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Preserva a compatibilidade de navegadores usada antes da migração para Vite 8.
  build: {
    target: ["chrome107", "edge107", "firefox104", "safari16"],
  },
});
