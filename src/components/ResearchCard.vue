<script setup lang="ts">
import type { ResearchArea } from "../data/site";
defineProps<{ area: ResearchArea; index: number }>();
</script>
<template>
  <article class="research-card" :id="`area-${area.id}`">
    <div class="card-number">
      <span>{{ String(index + 1).padStart(2, "0") }}</span
      ><span class="card-glyph" aria-hidden="true">{{
        ["◈", "◎", "⊢", "⌘", "⇄", "◇"][index]
      }}</span>
    </div>
    <h3>
      <a v-if="area.href" :href="area.href">{{ area.title }}</a
      ><template v-else>{{ area.title }}</template>
    </h3>
    <p>{{ area.description }}</p>
    <ul class="keywords" aria-label="Research topics">
      <li v-for="word in area.keywords" :key="word">{{ word }}</li>
    </ul>
  </article>
</template>
