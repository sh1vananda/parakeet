<script lang="ts">
  const email = 'contact@smallpond.club';
</script>

<section class="relative flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-black via-gray-800 to-black animate-gradient-y text-white px-8">
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
/* Gradient animation */
@keyframes gradient-y {
  0%, 100% {
    background-position: top center;
    background-size: auto;
  }
  50% {
    background-position: bottom center;
    background-size: auto;
  }
}

.animate-gradient-y {
  animation: gradient-y 6s ease infinite;
}

/* Hover effect for email */
a:hover {
  text-decoration: underline;
}
</style>
