<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'secondary' | 'ghost';

  const {
    variant = 'primary',
    class: className,
    children,
    ...rest
  } = $props<
    {
      variant?: Variant;
      class?: string;
      children?: any;
    } & HTMLButtonAttributes
  >();

  const base =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition';

 const variants: any = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ghost: 'bg-transparent hover:bg-gray-100'
  };
</script>

<button 
  {...rest} 
  class={`${base} ${variants[variant]} ${className ?? ''}`}
>
  {@render children?.()}
</button>
