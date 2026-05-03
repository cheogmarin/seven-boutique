import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { translations, Language } from "../translations";

export type TranslationData = typeof translations.es;

interface I18nContextValue {
  lang: Language;
  t: TranslationData;
  changeLanguage: (lang: Language) => void;
}

const supportedLanguages: Language[] = ["es", "en"];
const storageKey = "seven-boutique-lang";

export function getBrowserLanguage(): Language {
  if (typeof navigator === "undefined") return "es";
  const raw = navigator.language || (navigator.languages && navigator.languages[0]) || "es";
  const code = raw.slice(0, 2).toLowerCase();
  return supportedLanguages.includes(code as Language) ? (code as Language) : "es";
}

export function getUrlLanguage(search: string): Language | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(search);
  const langParam = params.get("lang");
  return langParam && supportedLanguages.includes(langParam as Language)
    ? (langParam as Language)
    : null;
}

export function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "es";
  const urlLang = getUrlLanguage(window.location.search);
  if (urlLang) return urlLang;

  const stored = window.localStorage.getItem(storageKey) as Language | null;
  if (stored && supportedLanguages.includes(stored)) return stored;

  return getBrowserLanguage();
}

export const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLanguage);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(storageKey, lang);
  }, [lang]);

  const value = useMemo(
    () => ({ lang, t, changeLanguage: setLang }),
    [lang, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
