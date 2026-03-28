<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale } = useSiteLocale()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value === 'zh' ? 'zh-CN' : 'en'
  }
}))
</script>
