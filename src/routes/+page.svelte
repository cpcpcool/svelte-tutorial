<script lang="ts">
  import Button from '$lib/components/Button.svelte';
</script>
<h1>svelte 5 (runes mode) + TypeScript + Tailwindcss</h1>
<div class="space-y-4">
  <h1 class="text-2xl font-bold">Get Started</h1>
  <h2 class="text-xl font-semibold">반응성 수단별 예제</h2>  
  
  <div class="flex gap-2">
    <a href="/state" class="w-24"><Button class="w-full">/state</Button></a>
    <a href="/derived" class="w-24"><Button class="w-full">/derived</Button></a>
    <a href="/event" class="w-24"><Button class="w-full">/event</Button></a>
    <a href="/props" class="w-24"><Button class="w-full">/props</Button></a>
    <a href="/store" class="w-24"><Button class="w-full">/store</Button></a>
  </div>
</div>
