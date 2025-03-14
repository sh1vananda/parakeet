<script lang="ts">
  import { writable } from 'svelte/store';

  const stories = [
    { id: 1, title: 'Project A' },
    { id: 2, title: 'Project B' },
    { id: 3, title: 'Project C' },
  ];

  // Store to track the current story index
  let currentStoryIndex = writable(0);

  // Function to go to the next story
  const nextStory = () => {
    currentStoryIndex.update((index) => (index + 1) % stories.length);
  };

  // Function to go to the previous story
  const prevStory = () => {
    currentStoryIndex.update((index) => (index - 1 + stories.length) % stories.length);
  };
</script>

<section class="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-black via-gray-800 to-black text-white px-4">
  <!-- Section Title -->
  <h2 class="text-3xl font-bold text-center mb-8">Our Notable Successes</h2>

  <!-- Single Story Card -->
  <div class="relative flex items-center justify-center w-full">
    <!-- Left Arrow -->
    <button
      on:click={prevStory}
      class="absolute left-4 sm:left-8 text-gray-400 hover:text-gray-300 text-4xl"
      aria-label="Previous Story"
    >
      ←
    </button>

    <!-- Placeholder Card -->
    <div class="story-card bg-gray-700 rounded-lg flex items-center justify-center mb-4">
      <p class="text-lg text-gray-300 text-center">
        {#if $currentStoryIndex !== undefined}
          {stories[$currentStoryIndex].title}
        {/if}
      </p>
    </div>

    <!-- Right Arrow -->
    <button
      on:click={nextStory}
      class="absolute right-4 sm:right-8 text-gray-400 hover:text-gray-300 text-4xl"
      aria-label="Next Story"
    >
      →
    </button>
  </div>

  <!-- Description Text -->
  <p class="text-sm text-gray-300 text-center">
    {#if $currentStoryIndex !== undefined}
      {stories[$currentStoryIndex].title} is one of our notable successes.
    {/if}
  </p>
</section>

<style>
/* Reset margins and padding */
html,
body {
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden; /* Prevent horizontal scrollbars */
}

/* Full-width section */
section {
  width: calc(100vw); /* Full viewport width */
}

/* Story card styling */
.story-card {
  width: clamp(24rem, 25vw, 16rem); /* Dynamically adjust width based on screen size */
  height: clamp(18rem, 35vh, 20rem); /* Dynamically adjust height based on screen size */
  transition: transform .3s ease-out;
}

.story-card:hover {
  transform: scale(1.05);
}

/* Arrow button styling */
button {
  background: none;
  border: none;
}

button:hover {
  cursor: pointer;
}
</style>
