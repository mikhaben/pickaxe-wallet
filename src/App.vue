<script setup lang="ts">
const route = useRoute()
const hideNav = computed(() => route.meta.hideNavigation)
</script>

<template>
  <div class="flex flex-col bg-gray-900 text-white font-mono text-sm h-full">

    <nav-header v-if="!hideNav"/>

    <div
      :class="{ 'py-2': !hideNav, 'py-3': hideNav }"
      class="px-3 flex-1 overflow-auto"
    >
      <router-view />
    </div>

    <nav-footer v-if="!hideNav"/>

  </div>
</template>
