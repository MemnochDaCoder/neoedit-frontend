<template>
  <div class="recent-files">
    <h2>Recent Files</h2>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="(file, index) in recentFiles"
        :key="index"
      >
        {{ file.name }}
        <button @click="openFile(file)" class="btn btn-primary float-right">
          Open
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecentFilesComponent",
  data() {
    return {
      // Dummy data for demonstration, replace with your actual file data
      recentFiles: [
        { name: "Document.txt", path: "/path/to/document.txt" },
        { name: "Report.pdf", path: "/path/to/report.pdf" },
        { name: "Image.jpg", path: "/path/to/image.jpg" },
      ],
    };
  },
  methods: {
    openFile(file) {
      // Placeholder for file opening logic
      alert(`Opening ${file.name}`);
      // You might want to replace this with actual logic to handle file opening
    },
  },
};
</script>

<style scoped>
.recent-files h2 {
  margin-bottom: 20px;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
