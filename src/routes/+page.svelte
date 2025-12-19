<script lang="ts">
  import Button from '$lib/components/Button.svelte';
</script>
<h1>svelte 5 (runes mode) + TypeScript + Tailwindcss</h1>
<div class="space-y-4">
  <h1 class="text-2xl font-bold">Get Started</h1>
  <h2 class="text-xl font-semibold">반응성 수단별 예제</h2>  
  
  <div class="flex gap-2">
    <a href="/state"><Button>/state</Button></a>
    <a href="/derived"><Button>/derived</Button></a>
    <a href="/event"><Button>/event</Button></a>
    <a href="/props"><Button>/props</Button></a>
    <a href="/store"><Button>/store</Button></a>
  </div>
</div>
