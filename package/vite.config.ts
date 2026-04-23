import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "../../fonts",
  server: {
    port: 5173,
  },
  build: {
    outDir: "demo-dist",
    rollupOptions: {
      input: "demo.html",
    },
  },
});
