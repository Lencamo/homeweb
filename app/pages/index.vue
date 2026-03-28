<template>
  <HomeHero />
  <HomeFeatures />
  <HomePreview />
  <HomeIntegrations />
  <HomeCta />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'lencamo | Modern Developer Tools',
})
</script>
