<script lang="ts" setup>
import IdGenerator from '@/utils/IdGenerator.ts'

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()
const props = defineProps<{
  modelValue: boolean
  label?: string
  toggle?: boolean
  checkMark?: boolean
}>()
const id = `checkbox-${IdGenerator.numeric(10)}`
const checked = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="flex items-center">
    <div class="border-2 border-gray-700 w-max p-1 relative">
      <div
        class="w-3 h-3 relative flex items-center justify-center"
        :class="{
          'bg-green-500': !checkMark && checked,
          'bg-gray-700': !checkMark && !checked,
          'bg-gray-900 text-green-500 border-green-500': checkMark && checked,
          'opacity-0': checkMark && !checked,
          'mr-3': toggle && !checked,
          'ml-3': toggle && checked
        }"
      >
        <icon-pixel-check v-if="checkMark" class="absolute text-xl"/>
      </div>
      <input
        v-model="checked"
        type="checkbox"
        :id="id"
        class="absolute top-0 right-0 bottom-0 left-0 outline-none opacity-0 cursor-pointer"
      />
    </div>
    <label v-if="label" :for="id" class="ml-2 cursor-pointer">{{ label }}</label>
  </div>
</template>
