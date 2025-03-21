<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import '../global.css';

  // Stories data
  const stories = [
    { title: "seed", desc: "a whisper blooms in silence" },
    { title: "echo", desc: "one drop stirs the abyss" },
    { title: "arc", desc: "thought bends toward the unseen" },
  ];

  // Team data
  const team = [
    { name: "lyra", role: "weaver of whispers" },
    { name: "kai", role: "shaper of echoes" },
    { name: "sol", role: "tracer of arcs" },
  ];

  // Ripple effect for mouse events
  function startRipple(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const diameter = Math.max(target.clientWidth, target.clientHeight);
    const radius = diameter / 2;
    const ripple = document.createElement('div');
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - target.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - target.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 1000);
  }

  // Focus handler
  function handleFocus(event: FocusEvent) {
    const target = event.currentTarget as HTMLElement;
    target.classList.add('focused');
    setTimeout(() => target.classList.remove('focused'), 1200);
  }

  // Button ripple effect
  function createRipple(event: MouseEvent) {
    const button = event.currentTarget as HTMLButtonElement;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const ripple = document.createElement('span');
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  }

  // Section visibility logic with state preservation
  let sections: HTMLElement[] = [];
  let visibleSectionIndex = 0;
  let rippleLine: HTMLElement | null = null;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting) {
            visibleSectionIndex = index;
            sections.forEach((section, i) => {
              section.style.opacity = i === index ? '1' : '0';
              section.style.pointerEvents = i === index ? 'auto' : 'none';
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // Ripple line animation with explicit null check
    if (rippleLine) {
      const updateRipple = () => {
        if (!rippleLine) return; // Guard against null after initial check
        const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        rippleLine.style.transform = `scaleX(${1 + scroll * 2}) translateY(${scroll * 100}vh)`;
        rippleLine.style.opacity = `${0.2 - scroll * 0.1}`;
      };
      window.addEventListener('scroll', updateRipple);
      rippleLine.addEventListener('mousemove', (e: MouseEvent) => {
        if (!rippleLine) return; // Guard against null in event listener
        const offset = (e.clientX / window.innerWidth - 0.5) * 20;
        rippleLine.style.transform = `scaleX(1.5) translateX(${offset}vw) translateY(${window.scrollY / window.innerHeight * 100}vh)`;
      });
      return () => {
        window.removeEventListener('scroll', updateRipple);
        if (rippleLine) {
          rippleLine.removeEventListener('mousemove', updateRipple);
        }
        sections.forEach((section) => observer.unobserve(section));
      };
    }

    // Prevent zoom on mobile
    document.querySelector('meta[name="viewport"]')?.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
    );
  });
</script>

<main>
  <!-- Intro -->
  <div class="intro" bind:this={sections[0]} in:fade={{ duration: 1200, delay: visibleSectionIndex === 0 ? 0 : 0 }}>
    <h1 in:fly={{ y: -30, duration: 1000 }}>small pond</h1>
    <p in:fly={{ y: 30, duration: 1000, delay: 200 }}>
      a ripple in the void where dreams converge
    </p>
  </div>

  <!-- Stories -->
  <div class="stories" bind:this={sections[1]} in:fade={{ duration: 1200, delay: visibleSectionIndex === 1 ? 0 : 0 }}>
    <h2 in:fly={{ x: -30, duration: 1000 }}>traces</h2>
    <div class="grid">
      {#each stories as story}
        <div
          role="button"
          tabindex="0"
          on:mouseenter={startRipple}
          on:focus={handleFocus}
          in:fade={{ duration: 800, delay: stories.indexOf(story) * 300 }}
        >
          <h3>{story.title}</h3>
          <p>{story.desc}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- About with Team -->
  <div class="about" bind:this={sections[2]} in:fade={{ duration: 1200, delay: visibleSectionIndex === 2 ? 0 : 0 }}>
    <h2 in:fly={{ x: -30, duration: 1000 }}>essence</h2>
    <p in:fly={{ x: 30, duration: 1000, delay: 200 }}>
      a silent expanse—ideas drift, connect, ignite
    </p>
    <div class="team" in:fade={{ duration: 800, delay: 400 }}>
      <h3>our currents</h3>
      <div class="team-grid">
        {#each team as member}
          <div
            role="button"
            tabindex="0"
            on:mouseenter={startRipple}
            on:focus={handleFocus}
          >
            <span class="name">{member.name}</span>
            <span class="role">{member.role}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Contact -->
  <div class="contact" bind:this={sections[3]} in:fade={{ duration: 1200, delay: visibleSectionIndex === 3 ? 0 : 0 }}>
    <h2 in:fly={{ x: -30, duration: 1000 }}>reach</h2>
    <form>
      <input type="text" placeholder="your echo" in:fade={{ duration: 800 }} />
      <input type="email" placeholder="your signal" in:fade={{ duration: 800, delay: 100 }} />
      <textarea placeholder="your ripple" in:fade={{ duration: 800, delay: 200 }}></textarea>
      <button type="submit" on:click|preventDefault={createRipple}>
        cast it out
      </button>
    </form>
    <p class="connect" in:fade={{ duration: 800, delay: 300 }}>
      or whisper to: <a href="mailto:drift@smallpond.space">drift@smallpond.space</a>
    </p>
  </div>

  <!-- Morphing Ripple Line -->
  <div class="ripple-line" bind:this={rippleLine}></div>
</main>

<style>
  main {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }

  .intro, .stories, .about, .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    min-height: 100vh;
    padding: clamp(2rem, 8vh, 6rem) clamp(1rem, 5vw, 2rem);
    opacity: 1;
    transition: opacity 0.5s ease;
    box-sizing: border-box;
  }

  h1, h2 {
    color: #66f0e8;
  }

  .grid, .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(14rem, 20vw, 18rem), 1fr));
    gap: clamp(1.5rem, 3vw, 2.5rem);
    width: 90%;
    max-width: 100rem;
    margin: 0 auto;
  }

  .grid div, .team-grid div {
    position: relative;
    padding: clamp(1rem, 2vw, 1.5rem);
    background: rgba(102, 240, 232, 0.05);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  .grid div:hover,
  .grid div:focus,
  .team-grid div:hover,
  .team-grid div:focus {
    transform: translateY(-0.5rem);
    background: rgba(102, 240, 232, 0.1);
  }

  .team {
    margin-top: clamp(2rem, 4vw, 3rem);
  }

  .team h3 {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 300;
    color: #66f0e8;
    margin-bottom: clamp(1rem, 2vw, 1.5rem);
  }

  .team-grid .name {
    display: block;
    font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    color: #f0f0f5;
  }

  .team-grid .role {
    display: block;
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    color: rgba(102, 240, 232, 0.7);
    font-style: italic;
  }

  :global(.focused) {
    box-shadow: 0 0 0 2px #66f0e8;
  }

  :global(.ripple) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(102, 240, 232, 0.4) 0%, transparent 70%);
    transform: translate(-50%, -50%) scale(0);
    animation: ripple 1s forwards;
  }

  @keyframes ripple {
    to {
      transform: translate(-50%, -50%) scale(2.5);
      opacity: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 2vw, 1.5rem);
    width: 90%;
    max-width: 50rem;
    margin: 0 auto clamp(2rem, 5vw, 3rem);
  }

  input, textarea {
    padding: clamp(0.8rem, 1.5vw, 1rem);
    border: none;
    border-bottom: 1px solid #66f0e8;
    background: transparent;
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    color: #f0f0f5;
    outline: none;
    transition: border-color 0.3s;
    width: 100%;
  }

  input:focus, textarea:focus {
    border-color: #99f7f2;
  }

  textarea {
    resize: vertical;
    min-height: 10rem;
  }

  button {
    padding: clamp(0.8rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2rem);
    border: none;
    background: transparent;
    border: 1px solid #66f0e8;
    color: #66f0e8;
    font-size: clamp(1.4rem, 2vw, 1.6rem);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: color 0.3s, border-color 0.3s;
  }

  button:hover {
    color: #99f7f2;
    border-color: #99f7f2;
  }

  :global(button .ripple) {
    position: absolute;
    border-radius: 50%;
    background: rgba(102, 240, 232, 0.5);
    transform: scale(0);
    animation: ripple 0.8s linear;
  }

  .connect {
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    opacity: 0.8;
  }

  .connect a {
    color: #66f0e8;
    text-decoration: none;
    transition: color 0.3s;
  }

  .connect a:hover {
    color: #99f7f2;
  }

  .ripple-line {
    position: absolute;
    top: 0;
    left: -25%;
    width: 150%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #66f0e8 50%, transparent);
    opacity: 0.2;
    z-index: -1;
    transform: scaleX(1);
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
</style>