const dictionaries = {
  ko: () => import('@/locales/ko.json').then((module) => module.default),
  en: () => import('@/locales/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => {
  return dictionaries[locale]();
};
