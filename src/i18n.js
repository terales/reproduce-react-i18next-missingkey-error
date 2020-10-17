import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import languageEn from './i18n/en.json'
import languageEs from './i18n/es.json'
import languagePl from './i18n/pl.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEn,
      es: languageEs,
      pl: languagePl
    },
    lng: 'es',
    fallbackLng: 'en',
    debug: true,
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  })

console.log(i18n.languages)

export default i18n
