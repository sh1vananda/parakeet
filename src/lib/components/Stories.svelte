<script lang="ts">
  const stories = [
    {
      title: 'Project A',
      description: 'A groundbreaking idea turned into reality.',
    },
    {
      title: 'Project B',
      description: 'Collaborative effort that changed lives.',
    },
    {
      title: 'Project C',
      description: 'An innovative solution for modern problems.',
    },
  ];
</script>

<section class="relative flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-black via-gray-800 to-black animate-gradient-y text-white">
  <!-- Section Title -->
  <h2 class="text-4xl font-bold text-center mb-8">Our Notable Successes</h2>

  <!-- Stories Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-screen-lg px-4">
    {#each stories as story}
      <div class="story-card bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <!-- Gray Placeholder Block -->
        <div class="w-full h-40 bg-gray-700"></div>
        <div class="p-4">
          <h3 class="text-lg font-bold mb-2">{story.title}</h3>
          <p class="text-gray-300">{story.description}</p>
        </div>
      </div>
    {/each}
  </div>
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

/* Story card styling */
.story-card {
  transition: transform 0.3s ease-out;
}

.story-card:hover {
  transform: scale(1.05);
}
</style>
