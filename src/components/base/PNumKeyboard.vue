<script lang="ts" setup="">
const props = defineProps<{
  maxLength?: number
}>()
const emit = defineEmits<{
  (e: 'input', val: string): void
}>()
const btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const input = ref('')

watch(input, (val) => {
  emit('input', val)
})

onMounted(() => window.addEventListener('keydown', handleKeyPress))

onUnmounted(() => window.removeEventListener('keydown', handleKeyPress))

function handleKeyPress(event: KeyboardEvent): void {
  // Ensure that the key pressed is a number or a backspace
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    removeVal();
  } if (key === "Enter") {
    return;
  } else {
    const num = parseInt(key, 10);
    if (!isNaN(num) && btns.includes(num)) {
      addValue(num);
    }
  }
}

function addValue(val: number) {
  if (props.maxLength && input.value.length >= props.maxLength)
    return
  input.value += val
}

function removeVal() {
  input.value = input.value.slice(0, -1)
}
</script>

<template>
  <div class="grid grid-cols-3 font-pixel text-3xl">
    <button
      v-for="b in btns"
      :key="b"
      @click="addValue(b)"
      class="p-2 hover:bg-gray-800 active:text-green-500 select-none outline-none"
      :class="{'col-start-2': b === 0}"
    >{{ b }}</button>
    <div class="col-start-1 row-start-4 select-none">
      <slot />
    </div>
    <button
      @click="removeVal"
      :class="{'pointer-events-none text-gray-500': input.length === 0}"
      class="p-2 hover:bg-gray-800 active:text-green-500 flex items-center justify-center col-start-3 row-start-4 select-none outline-none"
    >
      <icon-pixel-arrow-bar-left />
    </button>
  </div>
</template>
