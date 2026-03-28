<template>
  <HomeHeader />
  <HomeHeroSection />
  <HomeFeaturesSection />
  <HomePreviewSection />
  <HomeIntegrationsSection />
  <HomeCtaSection />
  <HomeFooter />
</template>

<script setup lang="ts">
useHead({
  title: 'lencamo | Modern Developer Tools',
  htmlAttrs: {
    lang: 'zh-CN',
  },
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
  ],
})
</script>

<style src="../assets/css/home-page.css"></style>
