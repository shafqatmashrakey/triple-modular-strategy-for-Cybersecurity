<!-- Welcome.svelte -->

<script>
  export let title;
  export let content;
</script>

<div class="welcome">
  <h2>{title}</h2>
  <p>{content}</p>
  
  <!-- Description of the password strength game -->
  <p class="description">The password strength game evaluates the security of your passwords based on length, complexity, and character types. It provides feedback on password strength and offers tips for creating stronger passwords to enhance online security.</p>
</div>

<style>
  /* Styles for the Welcome component */
  .description {
    font-style: italic;
    color: #666;
  }
</style>
