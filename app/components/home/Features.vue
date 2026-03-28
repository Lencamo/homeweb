<template>
  <section id="templates" class="container features-section">
    <div class="section-header text-center" style="max-width: 600px; margin: 0 auto 48px">
      <h2 class="section-title" style="font-size: 32px">{{ messages.features.title }}</h2>
      <p class="section-subtitle">{{ messages.features.subtitle }}</p>
    </div>

    <div class="grid grid-3">
      <div v-for="(item, index) in messages.features.items" :key="item.title" class="panel">
        <div class="feature-icon" :style="{ color: iconColors[index] }">{{ item.icon }}</div>
        <h3 class="mb-2 text-main">{{ item.title }}</h3>
        <p class="text-muted" style="font-size: 14px">
          {{ item.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { messages } = useSiteLocale()

const iconColors = [
  'var(--color-pink)',
  'var(--color-blue)',
  'var(--color-orange)',
  'var(--color-green)',
  'var(--color-cyan)',
  'var(--text-main)'
]
</script>

<style scoped>
.features-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.feature-icon {
  font-size: 24px;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--panel-border);
  border-radius: 12px;
  color: var(--color-cyan);
}
</style>
