<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import Child from './Child.svelte';

  let count = $state(0);
</script>

<h1 class="text-xl font-semibold mb-4">Props 예제 ($props)</h1>
<ul class="list-disc list-inside mb-4">
  <li>props는 컴포넌트 경계</li>
  <li>{`$props<T>()로 타입 명시 필수`}</li>
</ul>


<Button 
  class="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
  onclick={() => count++}
>
  증가
</Button>

<Child title="Props 자식 컴포넌트" count={count} />
