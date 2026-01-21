// Language store for client-side language switching
import type { Language, PresentationData, UILabels } from "../data/presentation";
import { presentations, labels } from "../data/presentation";

const STORAGE_KEY = "presentation-language";
const DEFAULT_LANG: Language = "de";

// Get initial language from localStorage or default
function getInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "de" || stored === "en") return stored;
  return DEFAULT_LANG;
}

// Current language state
let currentLanguage: Language = DEFAULT_LANG;

// Initialize on load
export function initLanguageStore(): Language {
  currentLanguage = getInitialLanguage();
  return currentLanguage;
}

// Get current language
export function getLanguage(): Language {
  return currentLanguage;
}

// Set language and persist
export function setLanguage(lang: Language): void {
  currentLanguage = lang;
  localStorage.setItem(STORAGE_KEY, lang);

  // Dispatch custom event for components to react
  window.dispatchEvent(new CustomEvent("languageChange", { detail: { language: lang } }));
}

// Toggle between languages
export function toggleLanguage(): Language {
  const newLang = currentLanguage === "de" ? "en" : "de";
  setLanguage(newLang);
  return newLang;
}

// Get presentation data for current or specified language
export function getPresentation(lang?: Language): PresentationData {
  return presentations[lang ?? currentLanguage];
}

// Get UI labels for current or specified language
export function getLabels(lang?: Language): UILabels {
  return labels[lang ?? currentLanguage];
}

// Export raw data for components that need both
export { presentations, labels };
