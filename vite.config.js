import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [injectHTML(), FullReload(["./partials/*.html"])],

  build: {
    outDir: "dist",
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: "./index.html",
      },

      output: {
        entryFileNames: "js/main.js",
        chunkFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || "";

          if (name.endsWith(".css")) {
            return "css/main.css";
          }

          if (/\.(png|jpg|jpeg|svg|gif|webp)$/i.test(name)) {
            return "img/[name][extname]";
          }

          if (/\.(woff|woff2|ttf|otf)$/i.test(name)) {
            return "fonts/[name][extname]";
          }

          return "assets/[name][extname]";
        },
      },
    },
  },
});
