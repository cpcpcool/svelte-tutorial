<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'ghost' = 'primary';
  export let disabled = false;

  const base =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition';

  const variants = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ghost: 'bg-transparent hover:bg-gray-100'
  };
</script>

<button
  class="{base} {variants[variant]}"
  disabled={disabled}
>
  <slot />
</button>
