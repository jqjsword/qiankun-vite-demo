import { createApp } from "vue";
import App from "./App.vue";
import { registerMicroApps, start } from "qiankun";
import router from "@/router/index";

registerMicroApps([
  // {
  //   name: "app-seed",
  //   entry: "//localhost:8081",
  //   container: "#micro-wrapper",
  //   activeRule: "/app-seed/",
  // },
  {
    name: "app-vite",
    entry: "//localhost:3001",
    container: "#micro-wrapper",
    activeRule: "/app-vite/",
  },
]);
start();

createApp(App).use(router).mount("#app");
