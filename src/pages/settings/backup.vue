<script lang="ts" setup>
definePage({meta: {hideNavigation: true}})

const profiles = ['Profile 1', 'Profile 2', 'Profile 3']
const selected = ref<string[]>([])
const cloudStorage = ref(false)
const localStorage = ref(false)
const manualBackup = ref(false)

function select(item: string) {
  if (selected.value.includes(item)) {
    selected.value = selected.value.filter(i => i !== item)
  } else {
    selected.value.push(item)
  }
}
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Backup" back />

    <div class="flex flex-col">
      <p class="mb-5">Backup your data to keep it safe and secure.</p>
      <div class="mb-5 flex flex-col gap-2">
        <p>Choose destination</p>
        <div class="flex flex-col">
          <p-checkbox v-model="cloudStorage" label="Cloud storage" toggle />
          <p class="ml-11 text-gray-500">Backup your data to your <p-link>device's cloud storage</p-link>.</p>
        </div>
        <div class="flex flex-col">
          <p-checkbox v-model="localStorage" label="Local storage" toggle />
          <p class="ml-11 text-gray-500">Backup your data to your device's local storage as file.</p>
        </div>
        <div class="flex flex-col">
          <p-checkbox v-model="manualBackup" label="Manual backup" toggle />
          <p class="ml-11 text-gray-500">Backup your data manually</p>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <p>Choose profiles to backup</p>
        <ul class="border-2 border-gray-800">
          <li v-for="(item, idx) in profiles" :key="idx" class="flex">
            <button
              @click="select(item)"
              :class="{'border-b-2 border-gray-800': idx !== profiles.length - 1}"
              class="w-full flex items-center justify-between p-1 hover:bg-gray-800 active:bg-green-500"
            >
            <span class="flex items-center gap-3">
              <span class="text-xl font-pixel">{{ item }}</span>
            </span>
              <icon-pixel-check v-if="selected.includes(item)" class="text-base text-green-500"/>
            </button>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
