<template>
  <header :class="{ 'is-mobile-open': isMobileMenuOpen }">
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

      <div
        class="mobile-nav-toggle"
        role="button"
        tabindex="0"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
        @keydown.enter.prevent="toggleMobileMenu"
        @keydown.space.prevent="toggleMobileMenu"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
          <path d="M4 12h16" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
          <path d="M4 17h16" stroke="currentColor" stroke-linecap="round" stroke-width="2" />
        </svg>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="mobile-menu">
      <a
        v-for="item in mobileNavItems"
        :key="`mobile-${item.href}`"
        :href="item.href"
        class="mobile-menu-row"
        @click="closeMobileMenu"
      >
        {{ item.label }}
      </a>

      <div class="mobile-menu-row mobile-menu-locale">
        <div class="locale-switcher" role="group" :aria-label="messages.common.language">
          <div
            v-for="item in localeOptions"
            :key="`mobile-locale-${item.value}`"
            :class="['locale-option', { 'is-active': item.value === locale }]"
            role="button"
            tabindex="0"
            :aria-pressed="item.value === locale"
            @click="setLocaleAndClose(item.value)"
            @keydown.enter.prevent="setLocaleAndClose(item.value)"
            @keydown.space.prevent="setLocaleAndClose(item.value)"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const { locale, localeOptions, messages, setLocale } = useSiteLocale()

const isMobileMenuOpen = ref(false)

const mobileNavOrder = ['#cli', '#tingnote', '#templates'] as const

const mobileNavItems = computed(() =>
  mobileNavOrder
    .map((href) => messages.value.header.nav.find((item) => item.href === href))
    .filter((item): item is (typeof messages.value.header.nav)[number] => Boolean(item))
)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function setLocaleAndClose(value: 'zh' | 'en') {
  setLocale(value)
  closeMobileMenu()
}
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

.mobile-nav-toggle,
.mobile-menu {
  display: none;
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
  .nav-container {
    min-height: 64px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .nav-actions {
    display: none;
  }

  .mobile-nav-toggle {
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--text-main);
    cursor: pointer;
  }

  .mobile-nav-toggle svg {
    width: 24px;
    height: 24px;
    display: block;
  }

  .mobile-menu {
    display: block;
    padding: 0px 16px;
  }

  .mobile-menu-row {
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--panel-border);
    color: var(--text-main);
    font-size: 14px;
    font-weight: 600;
  }

  .mobile-menu-locale {
    padding: 12px 0;
  }

  .mobile-menu-locale .locale-switcher {
    align-self: flex-start;
  }
}
</style>
