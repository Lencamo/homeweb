<template>
  <header>
    <div class="container nav-container">
      <div class="logo">
        <img :alt="messages.header.logoAlt" src="/favicon.svg" class="logo-icon" />
        <span>lencamo</span>
      </div>

      <div class="nav-actions">
        <div class="nav-links">
          <a v-for="item in messages.header.nav" :key="item.href" :href="item.href">
            {{ item.label }}
          </a>
        </div>

        <div class="locale-switcher" role="group" :aria-label="messages.common.language">
          <div
            v-for="item in localeOptions"
            :key="item.value"
            :class="['locale-option', { 'is-active': item.value === locale }]"
            role="button"
            tabindex="0"
            :aria-pressed="item.value === locale"
            @click="setLocale(item.value)"
            @keydown.enter.prevent="setLocale(item.value)"
            @keydown.space.prevent="setLocale(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, localeOptions, messages, setLocale } = useSiteLocale()
</script>

<style scoped>
header {
  border-bottom: 1px solid var(--panel-border);
  background: transparent;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--topbar-row-height);
  gap: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 18px;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  color: var(--text-muted);
  font-size: 14px;
}

.nav-links a:hover {
  color: var(--text-main);
}

.locale-switcher {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 1px;
  border-radius: 999px;
  border: 1px solid var(--panel-border);
  background: rgba(255, 255, 255, 0.02);
}

.locale-option {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  user-select: none;
}

.locale-option.is-active {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-main);
}

.logo-icon {
  width: 18px;
  height: 18px;
  display: block;
  flex: none;
}

@media (max-width: 768px) {
  .nav-container,
  .nav-actions {
    flex-direction: column;
  }

  .nav-actions {
    width: 100%;
    align-items: stretch;
  }

  .nav-links {
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
  }

  .locale-switcher {
    align-self: center;
  }
}
</style>
