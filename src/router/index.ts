import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import TutorialView from "../views/TutorialView.vue";
import Dashboard from "../views/Dashboard.vue"; // New Dashboard page
import RecentFiles from "../views/RecentFiles.vue"; // New Recent Files page
import store from "@/store"; // Vuex store for managing authentication state

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
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: { requiresAuth: true }, // Requires authentication
    },
    {
      path: "/recent-files",
      name: "RecentFiles",
      component: RecentFiles,
    },
  ],
});

// Add a navigation guard for authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.isAuthenticated) {
    next({ name: "HomePage" }); // Redirect to HomePage if not authenticated
  } else {
    next();
  }
});

export default router;
