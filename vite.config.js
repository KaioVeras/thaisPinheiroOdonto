import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Habilita tree-shaking recomendado e remove console/debugger no build
export default defineConfig({
  plugins: [react()],
  esbuild: {
    drop: ["console", "debugger"],
    pure: ["console.info", "console.debug", "console.warn"],
  },
  build: {
    sourcemap: false,
    target: "es2018",
    rollupOptions: {
      treeshake: "recommended",
    },
  },
});
