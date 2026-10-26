<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { site } from "../data/site";

const open = ref(false);
const toggle = ref<HTMLButtonElement>();
const active = ref("home");
let observer: IntersectionObserver | undefined;
let media: MediaQueryList | undefined;
const resetMenu = () => {
  open.value = false;
};
function closeMenu(event: KeyboardEvent) {
  if (event.key === "Escape" && open.value) {
    open.value = false;
    toggle.value?.focus();
  }
}
async function navigate(id: string) {
  open.value = false;
  active.value = id;
  await nextTick();
  document.getElementById(id)?.focus({ preventScroll: true });
}
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) active.value = entry.target.id;
    },
    { rootMargin: "-15% 0px -65% 0px" },
  );
  site.navigation.forEach(({ id }) => {
    const element = document.getElementById(id);
    if (element) observer?.observe(element);
  });
  media = window.matchMedia("(min-width: 1081px)");
  media.addEventListener("change", resetMenu);
  document.addEventListener("keydown", closeMenu);
});
onBeforeUnmount(() => {
  observer?.disconnect();
  media?.removeEventListener("change", resetMenu);
  document.removeEventListener("keydown", closeMenu);
});
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="header-inner container">
      <a
        href="#home"
        class="brand"
        aria-label="CPS-HCPS Research home"
        @click="navigate('home')"
      >
        <img src="/favicon.svg" width="38" height="38" alt="" />
        <span>CPS-HCPS <strong>Research</strong></span>
      </a>
      <button
        ref="toggle"
        class="menu-toggle"
        type="button"
        :aria-expanded="open"
        aria-controls="primary-navigation"
        @click="open = !open"
      >
        {{ open ? "Close" : "Menu" }}
        <span aria-hidden="true">{{ open ? "−" : "+" }}</span>
      </button>
      <nav
        id="primary-navigation"
        aria-label="Main navigation"
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
        <a class="nav-github" :href="site.github"
          >GitHub <span aria-hidden="true">↗</span></a
        >
      </nav>
    </div>
  </header>
</template>
