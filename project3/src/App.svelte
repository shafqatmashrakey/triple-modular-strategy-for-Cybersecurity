<!-- App.svelte -->

<script>
  import Welcome from './Welcome.svelte';

  // Define the slides variable here
  const slides = [
    { title: 'Welcome to Password Strength Game', content: 'A fun way to test your password strength!' }
    // Add other slides
  ];
</script>

<div id="app">
  {#each slides as slide}
    <Welcome title={slide.title} content={slide.content} />
  {/each}

  <!-- Button to navigate to form.html -->
  <a href="./form.html">
    <button>Contact Page</button>
  </a>
</div>

<style>
  @import "/style.css";
  @import "/global.css";
</style>
