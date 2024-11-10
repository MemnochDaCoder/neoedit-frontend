<template>
  <div class="tutorial-landing-page">
    <h1>Tutorial Overview</h1>
    <p>
      Welcome to the NeoEdit tutorial section. Here, you can find guides and
      examples to help you master the application.
    </p>
    <ul>
      <li>
        <router-link to="/tutorial/advanced-find">
          Advanced Find Tutorial
        </router-link>
      </li>
      <!-- Add more tutorial links as needed -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "TutorialLandingPage",
};
</script>

<style scoped>
.tutorial-landing-page h1 {
  color: #333;
}

.tutorial-landing-page ul {
  list-style-type: none;
}
</style>
