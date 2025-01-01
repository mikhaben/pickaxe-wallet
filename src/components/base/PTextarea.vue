<script lang="ts" setup>
const props = defineProps<{
  modelValue: string
  placeholder?: string
  grow?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const input = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})
</script>

<template>
  <textarea
    v-model="input"
    :class="{ 'w-full': grow }"
    :placeholder="placeholder"
    class="text-white bg-gray-800 border-2 border-gray-800 hover:border-b-gray-500 focus:border-b-green-500 p-1 leading-6 outline-none"
    rows="5"
  />
</template>
