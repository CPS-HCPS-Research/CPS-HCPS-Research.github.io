<script setup lang="ts">
import SectionHeading from "./SectionHeading.vue";

defineProps<{
  id: string;
  content: {
    eyebrow: string;
    title: string;
    emptyTitle: string;
    emptyDescription: string;
  };
}>();
</script>

<template>
  <section
    :id="id"
    class="section container collection-section"
    tabindex="-1"
    :aria-labelledby="`${id}-heading`"
  >
    <SectionHeading
      :eyebrow="content.eyebrow"
      :title="content.title"
      :heading-id="`${id}-heading`"
    />
    <div class="collection-empty">
      <h3>{{ content.emptyTitle }}</h3>
      <p>{{ content.emptyDescription }}</p>
    </div>
  </section>
</template>
