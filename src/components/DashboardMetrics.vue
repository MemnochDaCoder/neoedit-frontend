<template>
  <div class="dashboard-metrics">
    <div
      class="card mx-2"
      v-for="metric in metrics"
      :key="metric.title"
      style="width: 18rem"
    >
      <div class="card-body">
        <h5 class="card-title">{{ metric.title }}</h5>
        <p class="card-text">{{ metric.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardMetrics",
  data() {
    return {
      metrics: [
        { title: "Total Projects", value: "42" },
        { title: "Files Opened Today", value: "89" },
        { title: "Active Sessions", value: "5" },
      ],
    };
  },
};
</script>

<style scoped>
.dashboard-metrics {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
