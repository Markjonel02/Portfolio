// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/assets": {
        target: "https://portfolio-assests-bay.vercel.app/",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
