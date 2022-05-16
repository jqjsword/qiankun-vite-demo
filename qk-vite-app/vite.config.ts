import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
import pluginMicro from "./src/plugins/vite-plugin-micro";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun("app-vite", { useDevMode: true }), pluginMicro()],
  base: "http://localhost:3001",
});
