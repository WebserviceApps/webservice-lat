import 'server-only'

// Definimos el tipo exacto para evitar confusiones
type Locale = 'es' | 'en' | 'pt';

const dictionaries = {
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  // Verificamos si la función existe en el mapa, si no, usamos 'es' por seguridad
  const loadDictionary = dictionaries[locale] || dictionaries['es'];
  return loadDictionary();
}