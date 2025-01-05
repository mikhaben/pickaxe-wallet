<script lang="ts" setup>
definePage({meta: {hideNavigation: true}})

const lockOptions = [
  {label: 'Never', value: 0},
  {label: '1 minute', value: 1},
  {label: '5 minutes', value: 5},
  {label: '10 minutes', value: 10},
]

const usePassword = ref(false)
const isProtectMode = ref(false)
const selectedLockOption = ref(0)
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Security" back />

    <div class="flex flex-col gap-2 mb-5">
      <p-checkbox v-model="usePassword" label="Use password instead of PIN" toggle />
      <p-btn secondary class="mb-2">Change your PIN</p-btn>
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex flex-col">
        <p-checkbox v-model="isProtectMode" label="Enable enhanced security" toggle />
        <p class="ml-11 text-gray-500">Enhanced security requires your PIN/password for transactions or accessing sensitive profile data.</p>
      </div>
      <div class="flex flex-col gap-1">
        <p>App lock timeout</p>
        <p class="text-gray-500">Automatically lock the app after inactivity.</p>
        <div class="flex gap-1">
          <p-btn
            v-for="i in lockOptions"
            :key="i.value"
            @click="selectedLockOption = i.value"
            secondary
            small
          >
            <span class="flex gap-1">
              <icon-pixel-check v-if="selectedLockOption === i.value" class="text-green-500" />
              {{i.label}}
            </span>
          </p-btn>
        </div>
      </div>
    </div>

  </div>
</template>
