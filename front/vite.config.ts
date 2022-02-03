// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

// import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// // https://vitejs.dev/config/
// export default defineConfig({

// });

export default ({ command }) => {
  if (command === "serve") {
    return {
      plugins: [vue()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 3000,
        hmr: { host: "localhost", port: 3000 },
      },
    };
  }else if (command === "build") {
    return {
      plugins: [vue()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      build: {
        chunkSizeWarningLimit: 2000,
      },
      server: {
        host: "0.0.0.0",
        port: 5500,
      },
      // publicPath:"wp-content/themes/dist/",
      // base:"wp-content/themes/dist/"
    };
  }else {
    return {
      plugins: [vue()],
      resolve: {
        alias: [{ find: "@", replacement: "/src" }],
      },
      server: {
        host: "0.0.0.0",
        port: 5600,
        https: true,
        hmr: { host: "slifer.alvitre.com.br", port: 443 },
      },
      build: {
        chunkSizeWarningLimit: 2000,
        base: "./"
      },
    };
  }
};
