<script setup lang="ts">
const route = useRoute()

</script>

<template>
  <div class="flex flex-col bg-gray-900 text-white font-mono text-sm h-full">

    <nav-header v-if="!route.meta.hideHeader" />

    <div class="px-3 py-2 flex-1 overflow-auto">
      <router-view />
    </div>

    <nav-footer v-if="!route.meta.hideFooter" />

  </div>
</template>
