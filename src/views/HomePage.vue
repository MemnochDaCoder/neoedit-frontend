<template>
  <div class="home-page">
    <hero-component></hero-component>
    <recent-files-component></recent-files-component>
    <dashboard-metrics v-if="showDashboard"></dashboard-metrics>
  </div>
</template>
<script>
import HeroComponent from "@/components/HeroComponent.vue";
import RecentFilesComponent from "@/components/RecentFilesComponent.vue";
import DashboardMetrics from "@/components/DashboardMetrics.vue";
export default {
  name: "HomePage",
  components: {
    HeroComponent,
    RecentFilesComponent,
    DashboardMetrics,
  },
  data() {
    return {
      showDashboard: true,
    };
  },
};
</script>
