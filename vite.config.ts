import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "rewrite-caviar-route",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/hair/treatment/caviar") {
            req.url = "/hair/treatment/caviar/";
          }
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        hairCaviar: path.resolve(__dirname, "hair/treatment/caviar/index.html"),
      },
    },
  },
});
