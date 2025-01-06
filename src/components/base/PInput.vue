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
  <div class="flex items-center">
    <input
      v-model="input"
      :placeholder="placeholder"
      type="text"
      class="text-white bg-gray-800 border-2 border-gray-800 hover:border-b-gray-500 focus:border-b-green-500 p-1 leading-6 outline-none"
      :class="{ 'w-full': grow }"
    >
  </div>
</template>
