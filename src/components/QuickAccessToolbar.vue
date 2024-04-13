<template>
  <div class="quick-access-toolbar bg-light border-bottom py-2">
    <div class="container d-flex justify-content-between align-items-center">
      <button class="btn btn-primary" @click="newFile">New File</button>
      <button class="btn btn-secondary" @click="openRecent">Open Recent</button>
      <button class="btn btn-info" @click="openSettings">Settings</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuickAccessToolbar",
  methods: {
    newFile() {
      // Logic to handle creating a new file
      console.log("Create a new file");
    },
    openRecent() {
      // Logic to handle opening recent files
      console.log("Open recent files");
    },
    openSettings() {
      // Logic to handle opening settings
      console.log("Open settings");
    },
  },
};
</script>

<style scoped>
.quick-access-toolbar {
  background-color: #f8f9fa;
  /* Light background for the toolbar */
}
</style>
