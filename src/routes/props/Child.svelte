<script lang="ts">
  const { title, count } = $props<{
    title: string;
    count: number;
  }>();
</script>

<h2 class="font-medium">{title}</h2>
<p>부모에서 받은 count: {count}</p>
