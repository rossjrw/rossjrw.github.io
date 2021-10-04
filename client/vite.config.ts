import * as path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  root: "./src/",
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
  publicDir: "./assets/",
  resolve: {
    extensions: [".ts", ".js", ".vue", ".mjs"],
    alias: { "@": path.resolve(__dirname, "src") },
  },
  build: {
    rollupOptions: {
      input: {
        main: "src/index.html",
        logo: "src/logo/index.html",
      },
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [vue()],
})
