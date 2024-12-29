<script lang="ts" setup="">
import iconHome from '~icons/pixelarticons/home'
import iconClock from '~icons/pixelarticons/clock'
import iconContact from '~icons/pixelarticons/user'

const route = useRoute()
const router = useRouter()

enum menuRoutes {
  HOME = '/',
  HISTORY = '/history',
  CONTACT = '/contacts',
}

const btns = [
  {
    text: 'Home',
    route: menuRoutes.HOME,
    icon: iconHome,
  },
  {
    text: 'History',
    route: menuRoutes.HISTORY,
    icon: iconClock,
  },
  {
    text: 'Contacts',
    route: menuRoutes.CONTACT,
    icon: iconContact,
  },
]
</script>

<template>
  <div class="flex justify-center px-3 pb-3 pt-1 w-max">
    <button
      v-for="btn in btns"
      :key="btn.text"
      :class="{
        'text-gray-500 border-gray-900': route.path !== btn.route,
        'text-green-500 border-green-500': route.path === btn.route
      }"
      @click="router.push(btn.route)"
      class="flex items-end gap-1 px-2 border-t-2 pt-1"
    >
      <component :is="btn.icon" class="text-xl" />
      <span v-if="route.path === btn.route" class="font-pixel text-xl leading-5">
        {{ btn.text }}
      </span>
    </button>
  </div>
</template>
