<template>
  <div id="app">
    <QuickAccessToolbar />
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import QuickAccessToolbar from "@/components/QuickAccessToolbar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    QuickAccessToolbar,
    FooterComponent,
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: "Source Sans Pro", Arial, sans-serif;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
