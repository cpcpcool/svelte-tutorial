<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  let cnt = $state(0);
</script>

  <h1 class="text-xl font-semibold mb-4">$state (상태와 반응성의 출발점)</h1>
  <ul class="list-disc list-inside mb-4">
    <li>let 하나만으로 상태가 반응적으로 동작하는 Svelte의 특징</li>
    <li>React/Solid와 달리 별도의 useState, createSignal 없이 변수 선언만으로 상태 관리가 가능</li>
  </ul>

  <p class="mb-2">count: {cnt}</p>

  <div class="flex gap-2">
    <Button onclick={() => cnt++}>+</Button>
    <Button onclick={() => cnt--}>-</Button>
  </div>
