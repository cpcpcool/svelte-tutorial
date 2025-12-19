<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import { counterStore } from './store';
</script>

<h1 class="text-xl font-semibold mb-4">Store 예제 (공유 상태)</h1>
<ul class="list-disc list-inside mb-4">
  <li>store는 컴포넌트 외부 공유 상태</li>
  <li>$state를 대체하는 개념 ❌</li>
  <li>역할이 다름</li>
</ul>

<p>store value: {$counterStore}</p>

<button
  class="px-4 py-2 bg-purple-600 text-white rounded"
  on:click={() => counterStore.update(v => v + 1)}
>
  증가
</button>