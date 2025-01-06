<script lang="ts" setup>
import { version } from '../../../package.json'

const { t } = useI18n()
definePage({ meta: { hideNavigation: true } })
</script>

<template>
  <div class="flex flex-col">

    <page-header title="About" back />

    <div class="flex flex-col">
      <p class="mb-5"><span class="font-bold text-green-500">pickaxe</span> wallet is all about making your crypto journey easy and enjoyable. With a focus on simple user experience, a lovely design, and <p-link>open-source</p-link> transparency, it’s built to be a wallet you can trust and love to use.</p>
      <div class="flex flex-col mb-5">
        <p>{{ t("appVersion", [ version ]) }}</p>
        <p>{{ t('appLicense', [ "MIT" ]) }}</p>
        <p>{{ t('appAuthor') }} <p-link>mikhaben</p-link></p>
      </div>
      <socials />
    </div>

  </div>
</template>
