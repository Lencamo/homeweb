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

const { messages } = useSiteLocale()

useHead(() => ({
  title: messages.value.seo.title,
  meta: [
    {
      name: 'description',
      content: messages.value.seo.description
    }
  ]
}))
</script>
