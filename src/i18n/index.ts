import i18next, { InitOptions } from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './locales/resources'

// Función para obtener el idioma desde la URL
const getLanguageFromURL = () => {
  const urlLang = window.location.pathname.split('/')[1] // Extrae el primer segmento de la URL
  return urlLang || 'en-USA' // Retorna el idioma detectado o 'en-USA' como fallback
}

const getOptions = (options?: InitOptions) => {
  return {
    resources,
    lng: getLanguageFromURL(), // Inicializa con el idioma detectado en la URL
    interpolation: {
      escapeValue: false,
    },
    ...options,
  }
}

export default {
  init: () => {
    i18next.use(initReactI18next).init(getOptions())
  },
  changeLanguage: (lng: string) => {
    i18next.changeLanguage(lng) // Cambia el idioma dinámicamente
  },
  t: i18next.t,
}
