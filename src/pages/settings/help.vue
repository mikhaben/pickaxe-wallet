<script lang="ts" setup>
definePage({ meta: { hideNavigation: true } })
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Report a problem" back />

    <div class="flex flex-col">
      <p class="mb-5">
        If you need help, please describe your issue as clearly as possible. Include details about what happened, and if you can, attach screenshots or a video to help us understand the problem better. This will allow us to assist you more quickly and effectively. Thank you!
        <icon-pixel-heart class="text-pink-500 inline-block" />
      </p>
      <div class="flex flex-col gap-1 mb-5">
        <p>Create github issue <p-link>here</p-link>.</p>
        <p>Write about problem in <p-link>telegram</p-link>.</p>
        <p>Send email to <p-link>example@example.com</p-link>.</p>
      </div>
    </div>

  </div>
</template>
