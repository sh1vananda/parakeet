<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let introContainer: HTMLElement | undefined;
  let title: HTMLElement | undefined;
  let subtitle: HTMLElement | undefined;

  onMount(() => {
    if (!introContainer || !title || !subtitle) return;

    const timeline = gsap.timeline();

    // Initial setup
    gsap.set(introContainer, { opacity: 0 });
    gsap.set(title, { opacity: 0, y: -50 });
    gsap.set(subtitle, { opacity: 0, y: 50 });

    // Main animations
    timeline
      .to(introContainer, { opacity: 1, duration: 1 })
      .to(title, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' })
      .to(subtitle, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=1');
  });
</script>

<section
  bind:this={introContainer}
  class="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-br from-black via-gray-800 to-black animate-gradient-x text-white px-8"
>
  <!-- Intro Text -->
  <h1
    bind:this={title}
    class="text-6xl md:text-7xl font-extrabold tracking-wide text-center drop-shadow-lg"
  >
    Welcome to Small Pond
  </h1>

  <p
    bind:this={subtitle}
    class="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-xl"
  >
    Where ideas grow and connections flourish.
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

/* Full-screen section */
section {
  width: calc(100vw); /* Full viewport width without scrollbar issues */
}

/* Gradient animation */
@keyframes gradient-x {
  0%,
  100% {
    background-position: left center;
    background-size: auto;
  }
  50% {
    background-position: right center;
    background-size: auto;
  }
}

.animate-gradient-x {
  animation: gradient-x infinite ease-in-out;
}

/* Hover effect for text */
h1,
p {
  transition: transform .3s ease-out;
}

h1:hover,
p:hover {
  transform: scale(1.02);
}
</style>
