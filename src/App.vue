<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col bg-gray-950 text-white font-mono">

    <header-nav />

    <div>
      <router-view />
    </div>

    <footer-nav/>

  </div>
</template>
