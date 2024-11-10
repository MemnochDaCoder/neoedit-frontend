<template>
  <div class="hero bg-primary text-white text-center py-5">
    <div class="container">
      <div class="header-container">
        <img src="@/assets/NeoEdit.png" alt="NeoEdit Logo" class="logo" />
      </div>
      <p class="lead">
        Your efficient and powerful text editor for every coding project.
      </p>
      <button class="btn btn-light mt-4">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: center;
}

.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

.logo {
  width: 500;
  height: auto;
}
</style>
