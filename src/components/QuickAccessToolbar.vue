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
import CacheService from "@/services/cacheService";

export default {
  name: "QuickAccessToolbar",
  methods: {
    newFile() {
      console.log("Create a new file");
      CacheService.saveToLocalStorage("lastAction", "New File");
    },
    openRecent() {
      console.log("Open recent files");
      CacheService.saveToLocalStorage("lastAction", "Open Recent");
    },
    openSettings() {
      console.log("Open settings");
      CacheService.saveToLocalStorage("lastAction", "Settings");
    },
  },
};
</script>
