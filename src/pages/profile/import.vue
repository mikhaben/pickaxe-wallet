<script lang="ts" setup>
definePage({
  meta: {
    hideNavigation: true
  }
})

const input = ref('')
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Import profile" back />
    <p class="mb-5">Write your seed phrase, private key here to import your profile.</p>

    <p-textarea v-model="input" grow class="mb-5" placeholder="Seed phrase, private key" />

    <div class="flex justify-end">
      <p-btn :disabled="!input">Import</p-btn>
    </div>

  </div>
</template>
