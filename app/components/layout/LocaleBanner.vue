<template>
  <div v-if="suggestion" class="locale-banner">
    <div class="container locale-banner-inner">
      <p class="locale-banner-copy">
        {{ suggestion.message }}
      </p>

      <div class="locale-banner-actions">
        <button type="button" class="locale-banner-primary" @click="applySuggestedLocale">
          {{ suggestion.action }}
        </button>
        <div
          class="locale-banner-close"
          role="button"
          tabindex="0"
          :aria-label="suggestion.close"
          @click="dismissLocaleSuggestion"
          @keydown.enter.prevent="dismissLocaleSuggestion"
          @keydown.space.prevent="dismissLocaleSuggestion"
        >
          ×
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { siteMessages } from '~/composables/useSiteLocale'

const { suggestedLocale, dismissLocaleSuggestion, setLocale } = useSiteLocale()

const suggestion = computed(() => {
  if (!suggestedLocale.value) {
    return null
  }

  return siteMessages[suggestedLocale.value].localeSuggestion
})

function applySuggestedLocale() {
  if (!suggestedLocale.value) {
    return
  }

  setLocale(suggestedLocale.value)
}
</script>

<style scoped>
.locale-banner {
  position: relative;
  color: var(--text-main);
  border-bottom: 1px solid rgba(6, 182, 212, 0.14);
  background: gray;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.locale-banner-inner {
  min-height: var(--banner-row-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.locale-banner-copy {
  font-size: 13px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--text-main);
}

.locale-banner-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: none;
}

.locale-banner-primary,
.locale-banner-close {
  border: 0;
  cursor: pointer;
  font: inherit;
  transition:
    background 0.2s,
    color 0.2s,
    opacity 0.2s;
}

.locale-banner-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 8px;
  background: #f1ece6;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.18),
    0 0 18px rgba(255, 255, 255, 0.12);
}

.locale-banner-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
  min-height: 24px;
  background: transparent;
  color: var(--text-main);
  font-size: 24px;
  line-height: 1;

  padding-bottom: 5px;
}

.locale-banner-primary:hover {
  opacity: 0.92;
}

.locale-banner-close:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .locale-banner-inner {
    display: flex;
    align-items: center;
    justify-self: center;

    padding: 12px 6px;
  }

  .locale-banner-close {
    font-size: 20px;
    padding-bottom: 2px;
  }
}
</style>
