<script lang="ts">
  import Button from '$lib/components/Button.svelte';
import './layout.css';
  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <!-- Header -->
  <header class="h-14 border-b flex items-center px-6">
    <span class="font-semibold">Svelte Basic Tutorial</span>
    <span class="mx-4">|</span>
    <a href="/"><Button variant='secondary'>Home</Button></a>
  </header>

  <!-- Main -->
  <main class="flex-1 p-6 bg-gray-50">
    {@render children()}
  </main>

  <!-- Footer -->
  <footer class="h-12 border-t flex items-center justify-center text-sm text-gray-500">
    © 2025
  </footer>
</div>
