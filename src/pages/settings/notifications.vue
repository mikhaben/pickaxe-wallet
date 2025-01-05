<script lang="ts" setup>
import Socials from '@/components/Socials.vue'

definePage({meta: {hideNavigation: true}})

const email = ref(true)
const pushNotification = ref(true)
const news = ref(false)
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Notifications" back />

    <div class="flex flex-col gap-3 mb-5">
      <p class="">Choose your preferred notification method</p>
      <div class="flex flex-col">
        <p-checkbox v-model="email" label="Email" toggle />
        <p class="pl-11 text-gray-500">Get notifications sent to your email address.</p>
      </div>
      <div class="flex flex-col">
        <p-checkbox v-model="pushNotification" label="Push notifications" toggle />
        <p class="pl-11 text-gray-500">Get real-time notifications on your device.</p>
      </div>
    </div>
    <div class="flex flex-col mb-5">
      <p-checkbox v-model="news" label="News and updates" />
      <p class="pl-8 text-gray-500">Stay informed about patches, updates, and news. (An email address will be required)</p>
    </div>
    <socials />

  </div>
</template>
