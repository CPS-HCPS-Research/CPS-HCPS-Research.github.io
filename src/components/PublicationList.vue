<script setup lang="ts">
import { publications, site } from "../data/site";
</script>
<template>
  <div v-if="!publications.length" class="publication-empty">
    <span class="publication-symbol" aria-hidden="true">↳</span>
    <div>
      <h3>{{ site.publications.emptyTitle }}</h3>
      <p>{{ site.publications.emptyDescription }}</p>
    </div>
  </div>
  <ol v-else class="publication-list">
    <li v-for="publication in publications" :key="publication.id">
      <h3>
        <a :href="publication.href">{{ publication.title }}</a>
      </h3>
      <p>{{ publication.authors.join(", ") }}</p>
      <p>{{ publication.venue }} · {{ publication.year }}</p>
      <a v-if="publication.artifactUrl" :href="publication.artifactUrl"
        >Research artifact <span aria-hidden="true">↗</span></a
      >
    </li>
  </ol>
</template>
