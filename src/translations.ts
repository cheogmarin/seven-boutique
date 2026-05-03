import es from "./locales/es.json";
import en from "./locales/en.json";

export type Language = "es" | "en";
export type TranslationData = typeof es;

export const translations = {
  es,
  en,
} as const;
