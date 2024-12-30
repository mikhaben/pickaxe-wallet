<script lang="ts" setup="">
definePage({
  meta: {
    hideHeader: true,
    hideFooter: true
  }
})
const devMode = ref(false)
const use12Words = ref(false)
const passphrase = ref(false)
const setPassword = ref(false)
</script>

<template>
  <div class="py-1">

    <page-header title="Advanced setup" back/>

    <div class="flex flex-col gap-2 mb-3">
      <p-checkbox v-model="devMode" label="Enable dev-mode" toggle />
      <span class="flex items-center">
        <p-checkbox v-model="use12Words" label="12 words seed phrase" toggle />
        <span class="text-gray-500 ml-2">(new wallet)</span>
      </span>
      <p-checkbox v-model="passphrase" label="Additional passphrase" toggle />
      <p-checkbox v-model="setPassword" label="Set password except PIN" toggle />
    </div>

    <div class="flex gap-2">
      <p-btn>create</p-btn>
      <p-btn>import</p-btn>
    </div>

  </div>
</template>
