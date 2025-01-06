<script lang="ts" setup>
definePage({ meta: { hideNavigation: true } })

const darkMode = ref(true)
const retroMode = ref(false)

const accentColors = [ 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500' ]
const active = ref(accentColors[0])
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Appearance" back />

    <div class="flex flex-col">
      <div class="flex flex-col mb-5">
        <p class="mb-1">Choose accent color:</p>
        <p class="mb-2 text-gray-500">It will be used for buttons, links, and other interactive elements.</p>
        <div class="flex gap-2">
          <div
            v-for="i in accentColors"
            :key="i"
            :class="{ 'border-white pointer-events-none': i === active }"
            @click="active = i"
            class="p-1 border-2 border-gray-800 cursor-pointer mb-1"
          >
            <div class="w-3 h-3" :class="i" />
          </div>
        </div>
      </div>
      <p-checkbox v-model="darkMode" label="Dark mode" toggle class="mb-5" />
      <div class="flex flex-col">
        <p-checkbox v-model="retroMode" label="Retro style" toggle class="mb-1" />
        <p class="text-gray-500 pl-11">Lets add even more old school vibes to your experience.</p>
      </div>
    </div>

  </div>
</template>
