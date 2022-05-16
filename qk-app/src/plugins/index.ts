import { registerMicroApps, start } from "qiankun";

export const vitePluginMicro = (config) => {
  return {
    install() {
      registerMicroApps(]);
      start();
    },
  };
};
