<script lang="ts" setup>
import iconDebug from '~icons/pixelarticons/debug'
import iconHeart from '~icons/pixelarticons/heart'
import iconCloud from '~icons/pixelarticons/cloud-download'
import iconFill from '~icons/pixelarticons/fill-half'
import iconNotification from '~icons/pixelarticons/notification'
import iconShield from '~icons/pixelarticons/shield'
import iconScript from '~icons/pixelarticons/script-text'
import iconAB from '~icons/pixelarticons/ab-testing'

definePage({
  meta: {
    hideNavigation: true
  }
})
const router = useRouter();

const list = [
  [
    { title: 'Appearance', icon: iconFill, link: '/settings/appearance' },
    { title: 'Language', icon: iconAB, link: '/settings/language' }
  ],
  [
    { title: 'Security', icon: iconShield, link: '/settings/security' },
    { title: 'Backup', icon: iconCloud, link: '/settings/backup' },
    { title: 'Notifications', icon: iconNotification, link: '/settings/notifications' },
  ],
  [
    { title: 'About', icon: iconScript, link: '/settings/about' },
    { title: 'Say thank you', icon: iconHeart, link: '/settings/donate' },
    { title: 'Report a problem', icon: iconDebug, link: '/settings/help' },
  ]
];
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Settings" back />

    <div class="flex flex-col">
      <ul v-for="(group, idx) in list" :key="idx" class="mb-3 border-2 border-gray-800">
        <li v-for="(item, idx) in group" :key="item.title">
          <button
            @click="router.push(item.link)"
            :class="{ 'border-b-2 border-gray-800': idx !== group.length - 1 }"
            class="w-full flex items-center justify-between p-1 hover:bg-gray-800 active:bg-green-500"
          >
            <span class="flex items-center gap-3">
              <component :is="item.icon" class="text-base" />
              <span class="text-xl font-pixel">{{ item.title }}</span>
            </span>
            <icon-pixel-chevron-right class="text-base text-gray-500" />
          </button>
        </li>
      </ul>
    </div>

  </div>
</template>
