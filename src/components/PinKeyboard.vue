<script lang="ts" setup>
import IconEye from '~icons/pixelarticons/eye'
import IconEyeClosed from '~icons/pixelarticons/eye-closed'

defineProps<{
  title?: string
}>()
const PIN_LENGTH = 6
const input = ref('')
const activeIdx = computed(() => input.value.length + 1)
const revealInput = ref(false)

function setValue(value: string) {
  if (value.length > PIN_LENGTH) return

  input.value = value
}
</script>

<template>
  <div>
    <div class="flex flex-col">
      <div class="flex justify-between mb-3">
        <h2 class="text-3xl font-pixel">{{ title ?? 'Enter your PIN' }}</h2>
        <p-btn small secondary>
          <icon-pixel-close />
        </p-btn>
      </div>
      <slot />
    </div>

    <div class="flex justify-between gap-1 mb-2 select-none">
      <div
        v-for="i in PIN_LENGTH"
        :key="i"
        :class="{
          'border-b-green-500': i === activeIdx,
          'text-white': i < activeIdx
        }"
        class="p-2 border-2 border-gray-800 font-pixel text-4xl relative"
      >
        <span class="opacity-0">*</span>
        <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          {{ activeIdx > i ? (revealInput ? input[i - 1] : '*') : '&nbsp;' }}
        </div>
      </div>
    </div>

    <p-num-keyboard @input="setValue" :max-length="PIN_LENGTH" class="mb-2">
      <button
        @click="revealInput = !revealInput"
        class="w-full h-full hover:bg-gray-800 active:text-green-500 flex items-center justify-center"
      >
        <component :is="revealInput ? IconEye : IconEyeClosed" class="text-2xl" />
      </button>
    </p-num-keyboard>

    <div class="flex gap-2 justify-end">
      <p-btn class="flex-gro"> Continue </p-btn>
    </div>
  </div>
</template>
