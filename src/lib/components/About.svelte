<script lang="ts">
    const aboutContent = {
      title: 'About Small Pond',
      story: `Small Pond was founded with a simple yet powerful idea: to create a space where ideas can grow, connections can flourish, and individuals can thrive. Inspired by the concept of a small pond nurturing life, our club aims to provide resources, mentorship, and community support to help turn dreams into reality.`,
      mission: `Our mission is to empower individuals to explore their creativity, collaborate with like-minded peers, and make meaningful contributions to their communities.`,
      values: [
        'Creativity',
        'Collaboration',
        'Growth',
        'Inclusivity',
        'Impact',
      ],
    };
  </script>
  
  <section class="relative flex flex-col items-center justify-center w-full h-full min-h-screen bg-gradient-to-br from-black via-gray-800 to-black animate-gradient-y text-white px-8">
    <!-- Section Title -->
    <h2 class="text-4xl font-bold text-center mb-8">{aboutContent.title}</h2>
  
    <!-- About Story -->
    <p class="text-lg text-gray-300 text-center max-w-screen-md mb-6">{aboutContent.story}</p>
  
    <!-- Mission Statement -->
    <h3 class="text-2xl font-bold text-center mb-4">Our Mission</h3>
    <p class="text-lg text-gray-300 text-center max-w-screen-md mb-6">{aboutContent.mission}</p>
  
    <!-- Values List -->
    <h3 class="text-2xl font-bold text-center mb-4">Our Values</h3>
    <ul class="flex flex-wrap justify-center gap-4 max-w-screen-md">
      {#each aboutContent.values as value}
        <li class="bg-gray-900 rounded-lg px-4 py-2 text-gray-300">{value}</li>
      {/each}
    </ul>
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
  
  /* Values list styling */
  ul li {
    transition: transform 0.3s ease-out;
  }
  
  ul li:hover {
    transform: scale(1.05);
  }
  </style>
  