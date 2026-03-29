<template>
  <section class="container cta-section">
    <div class="container">
      <h2 class="hero-title" style="font-size: 40px; margin-bottom: 24px">
        {{ messages.cta.title }}
      </h2>
      <p class="hero-desc" style="margin: 0 auto 32px; max-width: 500px; font-size: 18px">
        {{ messages.cta.description }}
      </p>

      <a href="https://tingbiji.com/auth" target="_blank" class="cta-button">
        <span>{{ messages.cta.button }}</span>
        <span class="cta-button-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M5 12h14"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              d="m13 5 7 7-7 7"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </span>
      </a>

      <div class="benefits">
        <span v-for="item in messages.cta.benefits" :key="item">{{ item }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { messages } = useSiteLocale()
</script>

<style scoped>
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 8px;
  background: #f1ece6;
  color: black;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.18),
    0 0 18px rgba(255, 255, 255, 0.12);
}

.cta-button-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.cta-button-arrow svg {
  width: 16px;
  height: 16px;
}

.cta-section {
  text-align: center;
  padding: 100px 0;
  background: radial-gradient(circle at top, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
  border-top: none;
}

.benefits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;
  color: var(--text-muted);
  font-size: 14px;
}

.benefits span {
  display: flex;
  align-items: center;
  gap: 8px;
}

.benefits span::before {
  content: '•';
  color: var(--color-cyan);
}
</style>
