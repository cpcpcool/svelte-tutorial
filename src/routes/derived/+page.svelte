<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  let count = $state(1);
  
  const doubled = $derived(() => count * 2);
  
</script>
<div class="flex flex-col min-h-[400px]">
    
  <h1 class="text-xl font-semibold mb-4">$derived (파생 상태와 반응형 선언문)</h1>
  <ul class="list-disc list-inside mb-4">
    <li>$state, props 등으로부터 계산된 값</li>
    <li>자동 의존성 추적</li>
  </ul>

  <p>count: {count}</p>
  <p>doubled: {doubled()}</p>

  <Button class="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
  onclick={() => count++}>증가</Button>


</div>