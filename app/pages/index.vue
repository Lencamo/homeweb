<template>
  <HomeHeroSection />
  <HomeFeaturesSection />
  <HomePreviewSection />
  <HomeIntegrationsSection />
  <HomeCtaSection />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default' // Use the default layout which includes the header and footer
})

useHead({
  title: 'lencamo | Modern Developer Tools'
})
</script>
