import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: Home,
    },
  ],
});

export default router;
