<template>
  <HomeHero />
  <HomeIntegrations />
  <HomeToolcli />
  <HomePreview />
  <HomeCta />
  <HomeFeatures />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'lencamo | Modern Developer Tools'
})
</script>
