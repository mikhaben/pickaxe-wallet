<script lang="ts" setup>
defineProps<{
  title: string
  back?: boolean
}>()
const router = useRouter()
</script>

<template>
  <div class="grid grid-cols-[min-content_auto_min-content] items-end gap-1 mb-5">
    <div class="min-w-9">
      <p-btn v-if="back" @click="router.back()" small secondary>
        <icon-pixel-arrow-left />
      </p-btn>
    </div>
    <h2 class="text-3xl leading-8 font-pixel justify-self-center">{{ title }}</h2>
    <div class="min-w-9"><slot/></div>
  </div>
</template>
