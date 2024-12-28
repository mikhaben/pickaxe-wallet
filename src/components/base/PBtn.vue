<script lang="ts" setup="">

defineProps<{
  secondary?: boolean
  small?: boolean
}>()

</script>

<template>
  <button
    class="font-pixel p-1 border-2 hover:bg-gray-900 active:bg-green-500 select-none flex items-center gap-2 h-max"
    :class="{
      'border-gray-900 active:border-green-500': secondary,
      'text-base leading-5': small,
      'text-xl leading-6': !small
    }"
  >
    <slot />
  </button>
</template>
