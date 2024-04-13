<template>
  <footer class="footer bg-light text-center text-lg-start">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">NeoEdit</h5>
          <p>
            A powerful, lightweight text editor designed to help you easily
            manage and edit your code.
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">About Us</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Privacy Policy</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Terms of Service</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Follow Us</h5>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Twitter</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Facebook</a>
            </li>
            <li>
              <a href="#!" class="text-dark">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center p-3 bg-dark text-white">
      © 2024 NeoEdit, Inc: All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  margin-top: auto;
  /* Ensures the footer is pushed to the bottom of the page */
}
</style>
