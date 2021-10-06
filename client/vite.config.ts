import * as path from "path"
import vue from "@vitejs/plugin-vue"

export default {
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
    target: "es2019",
    rollupOptions: {
      input: {
        main: "src/index.html",
        logo: "src/logo/index.html",
      },
      output: {
        inlineDynamicImports: false,
        ...(process.env.VITE_SSG
          ? {
              footer:
                "if (typeof createApp !== 'undefined')" +
                "module.exports = { createApp }",
            }
          : {}),
      },
      ...(process.env.VITE_SSG ? { treeshake: false } : {}),
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
  plugins: [vue()],
  ssgOptions: { formatting: "minify" },
}
