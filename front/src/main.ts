import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/styles/tail.css";
// import slifer from "./modules/slifer/index";

// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import checkView from "vue-check-view";
createApp(App).use(router).mount("#app");
