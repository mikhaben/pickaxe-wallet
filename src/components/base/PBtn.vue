<script lang="ts" setup="">
defineProps<{
  secondary?: boolean
  small?: boolean
  disabled?: boolean
  loading?: boolean
}>()
</script>

<template>
  <button
    class="font-pixel p-1 border-2 hover:bg-gray-800 active:bg-green-500 select-none flex items-center h-max outline-none"
    :class="{
      'border-gray-700 active:border-green-500': secondary,
      'text-base leading-5': small,
      'text-xl leading-6': !small,
      'opacity-50 cursor-not-allowed pointer-events-none': disabled || loading,
    }"
  >
    <p-loader v-if="loading" borderless :items="6" />
    <span v-else>
      <slot />
    </span>
  </button>
</template>
