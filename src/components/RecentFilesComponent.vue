<script>
import CacheService from "@/services/cacheservice";

export default {
  name: "RecentFilesComponent",
  data() {
    return {
      recentFiles: CacheService.getFromLocalStorage("recentFiles") || [],
    };
  },
  methods: {
    openFile(file) {
      alert(`Opening ${file.name}`);
    },
    addRecentFile(file) {
      this.recentFiles.push(file);
      CacheService.saveToLocalStorage("recentFiles", this.recentFiles);
    },
    removeRecentFile(fileName) {
      this.recentFiles = this.recentFiles.filter(
        (file) => file.name !== fileName
      );
      CacheService.saveToLocalStorage("recentFiles", this.recentFiles);
    },
  },
};
</script>
