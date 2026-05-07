import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ContadorPage from "../pages/ContadorPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/contador",
      name: "contador",
      component: ContadorPage,
    },
  ],
});

export default router;
