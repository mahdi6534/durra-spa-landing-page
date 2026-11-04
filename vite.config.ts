import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * vite-plugin-singlefile forces `assetsInlineLimit = () => true`, which
 * base64-embeds every image into index.html (~2 MB total). On mobile that
 * made FCP/LCP ≈ 10 s (the document itself is the bottleneck on Slow 4G).
 * Runs after the singlefile config hook and re-enables a sane threshold so
 * photos ship as separate cacheable files next to the HTML — same as the
 * public/ assets already do.
 */
function limitAssetInline(): Plugin {
  return {
    name: "limit-asset-inline",
    enforce: "post",
    config() {
      return {
        build: {
          assetsInlineLimit: 10240,
        },
      };
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), limitAssetInline()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
