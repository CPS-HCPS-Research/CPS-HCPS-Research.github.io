import { computed, ref, watch } from "vue";
import * as english from "./data/site";
import * as chinese from "./data/site.zh";

export type Locale = "en" | "zh";
export const preferenceKey = "cps-hcps-language";
export const locale = ref<Locale>("en");
const content = computed(() => (locale.value === "zh" ? chinese : english));

export const site = computed(() => content.value.site);
export const ui = computed(() => content.value.ui);
export const diagram = computed(() => content.value.diagram);
export const researchAreas = computed(() => content.value.researchAreas);
export const seminars = computed(() => content.value.seminars);
export const resources = computed(() => content.value.resources);
export { publications } from "./data/site";

export function readPreference(storage?: Pick<Storage, "getItem">): Locale {
  try {
    const saved = (storage ?? window.localStorage).getItem(preferenceKey);
    return saved === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

export function setLocale(language: Locale) {
  locale.value = language;
  try {
    window.localStorage.setItem(preferenceKey, language);
  } catch {
    // The switch remains usable when browser storage is unavailable.
  }
}

// Only called by the browser entry point; server-side content checks stay pure.
export function initializeLocale() {
  locale.value = readPreference();
  watch(
    locale,
    () => {
      document.documentElement.lang = site.value.locale;
      document.title = `${site.value.name} — ${site.value.tagline}`;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", site.value.metaDescription);
      document
        .querySelector('meta[property="og:title"]')
        ?.setAttribute("content", site.value.name);
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute("content", site.value.tagline);
    },
    { immediate: true },
  );
}
