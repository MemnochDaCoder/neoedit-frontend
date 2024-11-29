<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Data from backend:</p>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchData } from "@/services/api";

export default defineComponent({
  name: "DashboardComponent", // Updated to multi-word name
  setup() {
    const loading = ref(true);
    const data = ref(null);

    onMounted(async () => {
      loading.value = true;
      data.value = await fetchData("http://localhost:8000/");
      loading.value = false;
    });

    return {
      loading,
      data,
    };
  },
});
</script>
