import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJSON from './locales/en.json';
import daJSON from './locales/da.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupFromPathIndex: 0, // Detect 'en' in /en/blog
      caches: ['localStorage'],
    },
    resources: {
      en: { translation: enJSON },
      da: { translation: daJSON }
    }
  });
