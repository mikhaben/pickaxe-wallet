<script lang="ts" setup>
definePage({
  meta: {
    hideHeader: true,
    hideFooter: true
  }
})

const showPinKeyboard = ref(false)

</script>

<template>
  <div class="flex flex-col py-1">

    <h1 class="mb-2 text-3xl font-pixel">Welcome to <p-link>pickaxe</p-link> wallet</h1>
    <p class="mb-3">Choose one of the following options to get started</p>
    <div class="flex flex-col gap-2 mb-3">
      <p-btn @click="showPinKeyboard = true">
        Create new wallet
      </p-btn>
      <p-btn>
        Import existing wallet
      </p-btn>
      <!--<p-btn secondary class="mt-1">-->
      <!--  Advanced flow-->
      <!--</p-btn>-->
    </div>

    <pin-keyboard
      v-if="showPinKeyboard"
      @entered="(val) => console.log(val)"
      @close="showPinKeyboard = false"
      title="Create new PIN"
      click-outside
    />

  </div>
</template>
