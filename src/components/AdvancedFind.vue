<template>
  <div class="advanced-find">
    <h1>Advanced Find</h1>
    <ul>
      <li>
        <p>
          Click <button @click="openFileWithData">here</button> to open a file
          with test data.
        </p>
      </li>
      <li>
        <p>Click <button @click="executeFind('John')">Find</button>.</p>
        <p>Results:</p>
        <pre>{{ results }}</pre>
      </li>
    </ul>
    <button @click="clearCache">Clear Cache</button>
  </div>
</template>

<script>
import CacheService from "@/services/cacheservice";

export default {
  name: "AdvancedFind",
  data() {
    return {
      results: CacheService.getFromLocalStorage("findResults") || [],
    };
  },
  methods: {
    openFileWithData() {
      console.log("Simulated file opening with test data.");
    },
    executeFind(searchTerm) {
      console.log(`Finding: ${searchTerm}`);
      const result = `Results for ${searchTerm}`;
      this.results = [result, ...this.results.slice(0, 9)]; // Limit to 10 results
      CacheService.saveToLocalStorage("findResults", this.results);
    },
    clearCache() {
      CacheService.clearLocalStorage();
      this.results = [];
    },
  },
};
</script>
