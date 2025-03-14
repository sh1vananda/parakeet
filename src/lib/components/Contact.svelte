<script lang="ts">
  const email = 'contact@smallpond.club';
</script>

<section class="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white px-8">
  <!-- Section Title -->
  <h2 class="text-4xl font-bold text-center mb-8">Contact Us</h2>

  <!-- Contact Information -->
  <p class="text-lg text-gray-300 text-center max-w-screen-md mb-4">
    Have questions or want to collaborate? Reach out to us at:
  </p>
  <a
    href="mailto:{email}"
    class="text-xl font-bold text-blue-400 hover:text-blue-500 transition-colors duration-300"
  >
    {email}
  </a>
</section>

<style>

html,
body {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
}

section {
  width: calc(100vw);
}

a:hover {
  text-decoration: underline;
}
</style>
