import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 9001, // Gunakan port yang diinginkan
    strictPort: false, // Agar tidak berpindah ke port lain jika 7632 sudah digunakan
    host: true, // Pastikan bisa diakses dari jaringan
  },
  // optimizeDeps: {
  //   include: ["react", "react-dom", "motion-react"], // Pastikan Vite bisa melakukan pre-bundling
  // },
});
