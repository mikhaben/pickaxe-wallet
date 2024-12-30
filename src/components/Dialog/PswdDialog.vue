<script lang="ts" setup>
const props = defineProps<{
  title?: string
  clickOutside?: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void,
  (e: 'entered', pswd: string): void
}>()

const input = ref('')

function close(fromOutside = false) {
  if (fromOutside && !props.clickOutside)
    return
  emit('close')
}
</script>

<template>
  <dialog-container :title="title ?? 'Enter your Password'" @close="close">

    <slot name="message" />

    <p-input v-model="input" class="mb-3" placeholder="Strong password" />

    <div class="flex gap-2 justify-end">
      <slot name="actions" />
      <p-btn
        :disabled="!input.length"
        @click="emit('entered', input)"
      >Continue</p-btn>
    </div>

  </dialog-container>
</template>
