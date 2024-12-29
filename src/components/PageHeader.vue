<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex justify-between mb-3">
    <h2 class="text-3xl font-pixel">{{ title }}</h2>
    <p-btn small secondary>
      <icon-pixel-close />
    </p-btn>
    <!--<div><slot /></div>-->
  </div>
</template>
