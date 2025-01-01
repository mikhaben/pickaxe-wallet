<script lang="ts" setup>
import iconProfile from '~icons/pixelarticons/briefcase-account'

definePage({
  meta: {
    hideNavigation: true
  }
})

const items = [
  [{title: 'Appearance', icon: '', link: '/settings/appearance'}],
  [
    {title: 'Backup', icon: '', link: '/settings/backups'},
    {title: 'Security', icon: '', link: '/settings/security'},
    {title: 'Notifications', icon: '', link: '/settings/notifications'},
  ],
];
</script>

<template>
  <div class=""></div>
</template>
