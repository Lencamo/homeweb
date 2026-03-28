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
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon-96x96.png',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
  ],
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#050505',
    },
  ],
})
</script>

<style src="../assets/css/home-page.css"></style>
