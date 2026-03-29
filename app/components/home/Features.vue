<template>
  <section id="templates" class="container features-section">
    <div class="section-header text-center" style="max-width: 600px; margin: 0 auto 48px">
      <h2 class="section-title" style="font-size: 32px">{{ messages.features.title }}</h2>
      <p class="section-subtitle">{{ messages.features.subtitle }}</p>
    </div>

    <div class="grid grid-3">
      <div v-for="(item, index) in featureItems" :key="item.title" class="panel feature-card">
        <NuxtLink
          v-if="item.githubHref"
          :to="item.githubHref"
          :target="item.githubExternal ? '_blank' : undefined"
          :rel="item.githubExternal ? 'noreferrer' : undefined"
          :aria-label="`查看 ${item.title} 的 GitHub 仓库`"
          class="feature-github-link"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.5 2.32 1.07 2.89.82.09-.65.35-1.07.63-1.32-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.69-4.58 4.93.36.31.68.92.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
            />
          </svg>
        </NuxtLink>

        <NuxtLink
          v-if="item.href"
          :to="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noreferrer' : undefined"
          class="feature-body feature-main-link"
        >
          <div class="feature-icon" :style="{ color: iconColors[index] }">{{ item.icon }}</div>
          <h3 class="mb-2 text-main">{{ item.title }}</h3>
          <p class="text-muted" style="font-size: 14px">
            {{ item.description }}
          </p>
        </NuxtLink>

        <div v-else class="feature-body">
          <div class="feature-icon" :style="{ color: iconColors[index] }">{{ item.icon }}</div>
          <h3 class="mb-2 text-main">{{ item.title }}</h3>
          <p class="text-muted" style="font-size: 14px">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type FeatureItem = {
  icon: string
  title: string
  description: string
  href?: string
  githubHref?: string
}

const { messages } = useSiteLocale()

const iconColors = [
  'var(--color-pink)',
  'var(--color-blue)',
  'var(--color-orange)',
  'var(--color-green)',
  'var(--color-cyan)',
  'var(--text-main)'
]

const featureItems = computed(() =>
  (messages.value.features.items as readonly FeatureItem[]).map((item) => ({
    ...item,
    external: item.href ? /^(https?:)?\/\//.test(item.href) : false,
    githubExternal: item.githubHref ? /^(https?:)?\/\//.test(item.githubHref) : false
  }))
)
</script>

<style scoped>
.features-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.feature-card {
  position: relative;
  height: 100%;
  padding: 0;
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
}

.feature-body {
  display: block;
  height: 100%;
  padding: 24px;
}

.feature-main-link {
  color: inherit;
  text-decoration: none;
}

.feature-github-link {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--panel-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.feature-github-link:hover {
  color: var(--text-main);
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.06);
}

.feature-github-link svg {
  width: 16px;
  height: 16px;
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
