import en from '@/locales/en.json';
import es from '@/locales/es.json';
import fr from '@/locales/fr.json';
import { createI18n } from 'vue-i18n'

export const DEFAULT_LOCALE = 'en';

const createI18nPlugin = () => createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { en, es, fr },
});

export default createI18nPlugin;
