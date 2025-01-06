import '@/styles/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import createI18nPlugin from '@/plugins/i18n.ts'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(createI18nPlugin())
  .mount('#app')
