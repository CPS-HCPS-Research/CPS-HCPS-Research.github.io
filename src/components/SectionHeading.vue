<script setup lang="ts">
defineProps<{
  eyebrow: string;
  title: string;
  description?: string;
  headingId?: string;
}>();
</script>
<template>
  <div class="section-heading">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 :id="headingId">{{ title }}</h2>
    <p v-if="description" class="section-description">{{ description }}</p>
  </div>
</template>
