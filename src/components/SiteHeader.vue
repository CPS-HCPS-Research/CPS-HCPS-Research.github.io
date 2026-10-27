<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { locale, setLocale, site, ui, type Locale } from "../i18n";

const open = ref(false);
const languageOpen = ref(false);
const toggle = ref<HTMLButtonElement>();
const header = ref<HTMLElement>();
const languageSwitch = ref<HTMLDivElement>();
const languageToggle = ref<HTMLButtonElement>();
const languages = [
  { code: "en", htmlLang: "en", label: "English" },
  { code: "zh", htmlLang: "zh-CN", label: "简体中文" },
] as const;
const active = ref("home");
let observer: IntersectionObserver | undefined;
let media: MediaQueryList | undefined;
const resetMenu = () => {
  open.value = false;
  languageOpen.value = false;
};
function closeMenu(event: KeyboardEvent) {
  if (event.key !== "Escape") return;
  if (languageOpen.value) {
    languageOpen.value = false;
    languageToggle.value?.focus();
  } else if (open.value) {
    open.value = false;
    toggle.value?.focus();
  }
}
async function navigate(id: string) {
  resetMenu();
  active.value = id;
  await nextTick();
  document.getElementById(id)?.focus({ preventScroll: true });
}
function toggleNavigation() {
  languageOpen.value = false;
  open.value = !open.value;
}
function toggleLanguage() {
  open.value = false;
  languageOpen.value = !languageOpen.value;
}
async function focusLanguage(index: number) {
  open.value = false;
  languageOpen.value = true;
  await nextTick();
  languageSwitch.value
    ?.querySelectorAll<HTMLButtonElement>(".language-option")[index]
    ?.focus();
}
function moveLanguageFocus(event: KeyboardEvent) {
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const options = [
    ...(languageSwitch.value?.querySelectorAll<HTMLButtonElement>(
      ".language-option",
    ) ?? []),
  ];
  const index = options.indexOf(document.activeElement as HTMLButtonElement);
  const next =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? options.length - 1
        : (index + (event.key === "ArrowDown" ? 1 : -1) + options.length) %
          options.length;
  options[next]?.focus();
}
async function selectLanguage(language: Locale) {
  setLocale(language);
  resetMenu();
  await nextTick();
  languageToggle.value?.focus();
}
function closeLanguageOnBlur(event: FocusEvent) {
  if (!languageSwitch.value?.contains(event.relatedTarget as Node | null))
    languageOpen.value = false;
}
function closeOutside(event: PointerEvent) {
  if (!languageSwitch.value?.contains(event.target as Node))
    languageOpen.value = false;
  if (!header.value?.contains(event.target as Node)) open.value = false;
}
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) active.value = entry.target.id;
    },
    { rootMargin: "-15% 0px -65% 0px" },
  );
  site.value.navigation.forEach(({ id }) => {
    const element = document.getElementById(id);
    if (element) observer?.observe(element);
  });
  media = window.matchMedia("(min-width: 1081px)");
  media.addEventListener("change", resetMenu);
  document.addEventListener("keydown", closeMenu);
  document.addEventListener("pointerdown", closeOutside);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  media?.removeEventListener("change", resetMenu);
  document.removeEventListener("keydown", closeMenu);
  document.removeEventListener("pointerdown", closeOutside);
});
</script>

<template>
  <a class="skip-link" href="#main">{{ ui.skipToContent }}</a>
  <header ref="header" class="site-header">
    <div class="header-inner container">
      <a
        href="#home"
        class="brand"
        :aria-label="ui.homeLabel"
        @click="navigate('home')"
      >
        <img src="/favicon.svg" width="38" height="38" alt="" />
        <span>CPS-HCPS <strong>{{ ui.brandSubtitle }}</strong></span>
      </a>
      <nav
        id="primary-navigation"
        :aria-label="ui.navigation"
        :class="{ 'is-open': open }"
      >
        <a
          v-for="item in site.navigation"
          :key="item.id"
          :href="`#${item.id}`"
          :aria-current="active === item.id ? 'location' : undefined"
          @click="navigate(item.id)"
          >{{ item.label }}</a
        >
      </nav>
      <div class="header-controls">
        <button
          ref="toggle"
          class="menu-toggle"
          type="button"
          :aria-expanded="open"
          aria-controls="primary-navigation"
          @click="toggleNavigation"
        >
          {{ open ? ui.close : ui.menu }}
          <span aria-hidden="true">{{ open ? "−" : "+" }}</span>
        </button>
        <div
          ref="languageSwitch"
          class="language-switch"
          @focusout="closeLanguageOnBlur"
        >
          <button
            ref="languageToggle"
            class="language-toggle"
            type="button"
            aria-label="Language / 语言"
            title="Language / 语言"
            :aria-expanded="languageOpen"
            aria-controls="language-options"
            @click="toggleLanguage"
            @keydown.down.prevent="focusLanguage(0)"
            @keydown.up.prevent="focusLanguage(languages.length - 1)"
          >
            <svg
              class="language-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <ellipse cx="12" cy="12" rx="4" ry="9" />
              <path d="M3 12h18" />
            </svg>
          </button>
          <div
            v-show="languageOpen"
            id="language-options"
            class="language-menu"
            role="group"
            aria-label="Language / 语言"
            @keydown="moveLanguageFocus"
          >
            <button
              v-for="language in languages"
              :key="language.code"
              type="button"
              class="language-option"
              :lang="language.htmlLang"
              :aria-pressed="locale === language.code"
              @click="selectLanguage(language.code)"
            >
              <span>{{ language.label }}</span>
              <svg
                v-if="locale === language.code"
                class="language-check"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                aria-hidden="true"
              >
                <path d="m4 10 4 4 8-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
