<script lang="ts" setup="">
const router = useRouter()
</script>

<template>
  <div class="flex justify-between gap-2 px-3 pt-3 pb-1">
    <profile @click="router.push('/landing')"/>
    <p-btn secondary small @click="router.push('/settings')">
      <icon-pixel-menu/>
    </p-btn>
  </div>
</template>
