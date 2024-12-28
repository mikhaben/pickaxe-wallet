<script lang="ts" setup>
const showLoader = ref(true)
</script>

<template>
  <div class="p-3">

    <div class="font-pixel text-2xl mb-2">Are u ready to send transaction?</div>
    <div class="mb-4">
      Please check the details below <p-link>link</p-link> and some txt here
    </div>

    <p-loader v-if="showLoader" class="mb-4" />

    <div class="flex gap-2 justify-end">
      <p-btn secondary>
        <icon-pixel-arrow-left />
      </p-btn>

      <p-btn @click="showLoader = !showLoader">
        Click me
      </p-btn>

      <p-btn small secondary>
        <icon-pixel-copy />
      </p-btn>

      <p-btn small>
        Click me small
      </p-btn>
    </div>
  </div>
</template>
