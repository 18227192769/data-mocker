import { createApp } from "vue";
import antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import App from "./App.vue";

import 'ant-design-vue/dist/antd.css';

createApp(App).use(antd).use(createPinia()).mount("#app");
