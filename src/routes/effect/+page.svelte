<script lang="ts">
  let count = $state(0);

  $effect(() => {
    console.log('count changed:', count);
    if(count !== 0) alert(`count가 ${count}로 변경되었습니다!`);
  });
</script>

<h1 class="text-xl font-semibold mb-4">Effect 예제 ($effect)</h1>
<ul class="list-disc list-inside mb-4">
  <li>반응형 선언문</li>
  <li>의존성 자동 추적</li>
</ul>
<p>count: {count}</p>
<button
  class="px-4 py-2 bg-green-600 text-white rounded"
  onclick={() => count++}
>
  증가
</button>