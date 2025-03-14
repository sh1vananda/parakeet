<script>
  import Intro from '$lib/components/Intro.svelte';
  import Stories from '$lib/components/Stories.svelte';
  import About from '$lib/components/About.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<main class="snap-y snap-mandatory h-screen overflow-y-scroll">
  <section class="snap-start h-screen"><Intro /></section>
  <section class="snap-start h-screen"><Stories /></section>
  <section class="snap-start h-screen"><About /></section>
  <section class="snap-start h-screen"><Contact /></section>
</main>
