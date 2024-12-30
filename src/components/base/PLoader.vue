<script lang="ts" setup>
const {items = 10} = defineProps<{ items?: number, progressText?: boolean }>()
const delay = 0.6
const visibleArray = ref(Array(items).fill(false))
const timeouts = ref<number[]>([])
const progress = ref(0)

watch(() => items, () => {
  animate()
}, { immediate: true })

onUnmounted(() => reset())

function reset() {
  timeouts.value.forEach(clearTimeout)
  timeouts.value = []
  visibleArray.value = Array(items).fill(false)
  progress.value = 0
}

function animate() {
  reset()
  for (let i = 0; i < items; i++) {
    const tID = setTimeout(() => {
      visibleArray.value[i] = true
      progress.value = Math.round(((i + 1) / items) * 100)
      if (i === items - 1) {
        const restartID = setTimeout(() => {
          animate()
        }, 500)
        timeouts.value.push(restartID)
      }
    }, i * delay * 1000)
    timeouts.value.push(tID)
  }
}
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="flex items-center border-2 border-gray-700 p-1 gap-1 w-max">
      <div
        v-for="(_, idx) in items"
        :key="idx"
        :class="visibleArray[idx] ? 'opacity-100' : 'opacity-0'"
        class="w-3 h-3 bg-green-500"
      />
    </div>
    <div v-if="progressText" class="font-pixel text-xl max-h-3 leading-3">{{progress}}%</div>
  </div>
</template>
