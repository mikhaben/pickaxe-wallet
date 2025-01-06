<script lang="ts" setup>
definePage({ meta: { hideNavigation: true } })

const { t, locale } = useI18n()

const items = computed(() => [
  { name: t('localeEn'), code: 'en' },
  { name: t('localeEs'), code: 'es' },
  { name: t('localeFr'), code: 'fr' },
  { name: t('localeRu'), code: 'ru' },
]);
</script>

<template>
  <div class="flex flex-col">

    <page-header title="Language" back />

    <div class="flex flex-col">
      <ul class="mb-3 border-2 border-gray-800">
        <li v-for="(item, idx) in items" :key="item.code">
          <button
            @click="locale = item.code"
            :class="{ 'border-b-2 border-gray-800': idx !== items.length - 1 }"
            class="w-full flex items-center justify-between p-1 hover:bg-gray-800 active:bg-green-500"
          >
            <span class="flex items-center gap-3">
              <span class="text-xl font-pixel">{{ item.name }}</span>
            </span>
            <icon-pixel-check v-if="locale === item.code" class="text-base text-green-500"/>
          </button>
        </li>
      </ul>
    </div>

  </div>
</template>
