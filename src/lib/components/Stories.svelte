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

<section class="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white px-4">
  <!-- Section Title -->
  <h2 class="text-3xl font-bold text-center mb-6">Our Notable Successes</h2>

  <!-- Stories Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-screen-md">
    {#each stories as story}
      <div class="story-card bg-gray-900 rounded-lg shadow-lg overflow-hidden w-[12rem] h-[16rem]">
        <!-- Gray Placeholder Block -->
        <div class="w-full h-[6rem] bg-gray-700"></div>
        <div class="p-2">
          <h3 class="text-base font-bold mb-1">{story.title}</h3>
          <p class="text-sm text-gray-300">{story.description}</p>
        </div>
      </div>
    {/each}
  </div>
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

.story-card {
  transition: transform 0.3s ease-out;
}

.story-card:hover {
  transform: scale(1.05);
}
</style>
