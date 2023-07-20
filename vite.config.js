import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import ViteImages from "vite-plugin-vue-images";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    ViteImages({
      dirs: ["src/assets/images"],
    }),
    viteCompression(),
  ],
  server: {
    proxy: {
      // "/api":{
      //    target: "https://api.geoiplookup.net", 
      //   changeOrigin: true,
      //   secure: false,
      //   ws: true,
      // },
      "/dapi": {
        // target: "http://192.168.0.105:3006/", 
        target: "https://leads.impulse.ky/",
        // target: "https://api.geoiplookup.net", 
        changeOrigin: true,
        secure: false,
        ws: true,
      },

    }
  },
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue", ".css"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
        output:{
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id.toString().split('node_modules/')[1].split('/')[0].toString();
                }
            }
        }
    }
}
});
