import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import "./assets/reset.css";
import "./assets/base.css";
import "./assets/utilityClasses.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
