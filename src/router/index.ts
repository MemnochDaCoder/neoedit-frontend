import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import TutorialView from "../views/TutorialView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: Home,
    },
    {
      path: "/tutorials",
      name: "Tutorials",
      component: TutorialView,
    },
  ],
});

export default router;
