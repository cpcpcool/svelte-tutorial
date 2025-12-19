<script lang="ts">
  import Button from '$lib/components/Button.svelte';
</script>
<h1>Welcome to SvelteKit</h1>

<div class="space-y-4">
  <h1 class="text-2xl font-bold">Get Started</h1>
  
  <div class="flex gap-2">
    <a href="/state"><Button>/state</Button></a>
    <a href="/derived"><Button>/derived</Button></a>
    <a href="/event"><Button>/event</Button></a>
    <a href="/props"><Button>/props</Button></a>
    <a href="/store"><Button>/store</Button></a>
  </div>
</div>
