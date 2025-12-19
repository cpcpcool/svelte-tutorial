<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  let count = 0;
</script>

<h1 class="text-xl font-semibold mb-4">State</h1>

<p class="mb-2">count: {count}</p>

<div class="flex gap-2">
  <Button on:click={() => count++}>+</Button>
  <Button on:click={() => count--}>-</Button>
</div>
