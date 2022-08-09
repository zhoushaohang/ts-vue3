import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LogIn",
      component: () => import("../views/LogIn.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      children: [
        {
          path: "/JanKang",
          name: "JanKang",
          component: () => import("../views/JanKang.vue"),
        },
        {
          path: "/NewsGuanli",
          name: "NewsGuanli",
          component: () => import("../views/NewsGuanli.vue"),
        },
        {
          path: "/XinWen",
          name: "XinWen",
          component: () => import("../views/XinWen.vue"),
        },
        {
          path: "/NeiRong",
          name: "NeiRong",
          component: () => import("../views/NeiRong.vue"),
        },
        {
          path: "/GuanLi",
          name: "GuanLi",
          component: () => import("../views/GuanLi.vue"),
        },
      ],
    },
  ],
});

export default router;
