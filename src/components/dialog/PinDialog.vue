<script lang="ts" setup>
import IconEye from '~icons/pixelarticons/eye'
import IconEyeClosed from '~icons/pixelarticons/eye-closed'

const props = defineProps<{
  title?: string
  clickOutside?: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void,
  (e: 'entered', pin: string): void
}>()
const PIN_LENGTH = 6
const input = ref('')
const activeIdx = computed(() => input.value.length + 1)
const revealInput = ref(false)

onMounted(() => window.addEventListener('keydown', handleKeyPress))

onUnmounted(() => window.removeEventListener('keydown', handleKeyPress))

function handleKeyPress(event: KeyboardEvent): void {
  switch (event.key) {
    case "Enter":
      if (input.value.length === PIN_LENGTH) {
        emit('entered', input.value)
      }
      break;
    case "Escape":
      close()
      break;
  }
}

function setValue(value: string) {
  if (value.length > PIN_LENGTH) return
  input.value = value
}

function close(fromOutside = false) {
  if (fromOutside && !props.clickOutside)
    return
  emit('close')
}
</script>

<template>
  <dialog-container :title="title ?? 'Enter your PIN'" @close="close">

    <slot name="message" />

    <div class="flex justify-around gap-1 mb-2 select-none">
      <div
        v-for="i in PIN_LENGTH"
        :key="i"
        :class="{
            'border-b-green-500': i === activeIdx,
            'text-white': i < activeIdx
          }"
        class="p-2 border-2 border-gray-800 font-pixel text-4xl relative"
      >
        <span class="opacity-0 text-5xl">*</span>
        <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
          {{ activeIdx > i ? (revealInput ? input[i - 1] : '*') : '&nbsp;' }}
        </div>
      </div>
    </div>

    <p-num-keyboard @input="setValue" :max-length="PIN_LENGTH" class="mb-2">
      <button
        @click="revealInput = !revealInput"
        class="w-full h-full hover:bg-gray-800 active:text-green-500 flex items-center justify-center outline-none"
      >
        <component :is="revealInput ? IconEye : IconEyeClosed" class="text-2xl" />
      </button>
    </p-num-keyboard>

    <div class="flex gap-2 justify-end">
      <slot name="actions" />
      <p-btn
        @click="emit('entered', input)"
        :disabled="input.length != PIN_LENGTH"
      >Continue</p-btn>
    </div>

  </dialog-container>
</template>
