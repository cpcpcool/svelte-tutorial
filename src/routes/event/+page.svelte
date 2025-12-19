<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  let count = $state(0);
  let selectObj = $state();

  function handleClick() {
    count++;
  }
</script>

<h1 class="text-xl font-semibold mb-4">Event 예제 (DOM vs Component)</h1>
<ul class="list-disc list-inside mb-4">
  <li>{"on:click → DOM 전용"}</li>
  <li>{"<Button on:click> ❌"}</li>
  <li>{"<Button onclick> ✅ (props)"}</li>
</ul>

<!-- DOM 이벤트 -->
<!-- 
  Using `on:click` to listen to the click event is deprecated. Use the event attribute `onclick` instead.
  https://svelte.dev/e/event_directive_deprecated  
  어차피 deprecated 되므로 svelte 5 runes mode 에서는 혼용 금지되고 onclick사용이 권장됨.
-->
<button
  class="px-4 py-2 bg-green-600 text-white rounded mr-2 hover:bg-green-600/80"
  onclick={handleClick}
>
  {`DOM (<button>) on:click`}
</button>

<Button
  class="px-4 py-2 bg-green-600 text-white rounded mr-2"
  onclick={handleClick}
>
  {`(<Button>) onclick`}
</Button>

<p class="mt-4">count: {count}</p>