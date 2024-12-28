<script lang="ts" setup="">

defineProps<{
  variant?: 'secondary'
}>()

</script>

<template>
  <button class="font-pixel text-xl p-1 border-2 hover:bg-gray-900 active:bg-green-500 select-none">
    <slot />
  </button>
</template>
