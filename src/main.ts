import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import axios from "axios";
const app = createApp(App);
const pinia = createPinia();
app.use(createPinia());
app.use(router);
app.use(Antd);
app.use(pinia);
app.config.globalProperties.axios = axios;
app.mount("#app");
