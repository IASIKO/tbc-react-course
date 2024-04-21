import "server-only";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  nl: () =>
    import("../../dictionaries/ka.json").then((module) => module.default),
};

export const getDictionary = async (locale) =>
  dictionaries[locale.substring(0, 2)]();
