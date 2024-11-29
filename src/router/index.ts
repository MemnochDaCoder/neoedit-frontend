import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage.vue";
import AdvancedFind from "@/components/AdvancedFind.vue";
import DashboardComponent from "@/components/DashboardComponent.vue";
import DashboardMetrics from "@/components/DashboardMetrics.vue";
import Footer from "@/components/FooterComponent.vue";
import Hero from "@/components/HeroComponent.vue";
import QuickAccessToolbar from "@/components/QuickAccessToolbar.vue";
import RecentFiles from "@/components/RecentFilesComponent.vue";
import store from "@/store";

// Define the shape of the Vuex store state
interface RootState {
  isAuthenticated: boolean; // Add the relevant properties here
}

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
      name: "AdvancedFind",
      component: AdvancedFind,
    },
    {
      path: "/dashboard-component",
      name: "DashboardView",
      component: DashboardComponent,
      meta: { requiresAuth: true },
    },
    {
      path: "/recent-files",
      name: "RecentFiles",
      component: RecentFiles,
    },
    {
      path: "/quick-access",
      name: "QuickAccessToolbar",
      component: QuickAccessToolbar,
    },
    {
      path: "/dashboard-metrics",
      name: "DashboardMetrics",
      component: DashboardMetrics,
    },
    {
      path: "/footer",
      name: "Footer",
      component: Footer,
    },
    {
      path: "/hero",
      name: "HeroComponent",
      component: Hero,
    },
  ],
});

// Add a navigation guard for authentication
router.beforeEach((to, from, next) => {
  const state = store.state as RootState; // Explicitly cast `store.state` to `RootState`
  if (to.meta.requiresAuth && !state.isAuthenticated) {
    next({ name: "HomePage" }); // Redirect to HomePage if not authenticated
  } else {
    next();
  }
});

export default router;
