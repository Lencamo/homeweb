<template>
  <section class="container hero-centered">
    <div class="tag blue hero-tag mb-6">v2.0 Now Available</div>
    <h1 class="hero-title">
      Build faster with <br />
      <span class="text-cyan">modern dev tools</span>
    </h1>
    <p class="hero-desc">
      A complete toolkit for modern developers. Ship production-ready code faster with intelligent
      autocomplete, real-time collaboration, and seamless integrations.
    </p>

    <div
      :class="['install-box', { 'is-copied': copied }]"
      role="group"
      aria-label="Install command"
    >
      <div class="install-box-content" aria-hidden="true">
        <span class="prompt" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" class="prompt-icon">
            <path
              d="M12 19h8"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="m4 17 6-6-6-6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span class="command-text">{{ installCommand }}</span>
        <span class="status-icon" aria-hidden="true">
          <svg v-if="!copied" viewBox="0 0 24 24" fill="none" class="copy-icon">
            <path
              d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 8h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" class="copy-icon">
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div
        class="install-box-action"
        role="button"
        tabindex="0"
        :aria-label="copied ? 'Copied' : 'Copy command'"
        :title="copied ? 'Copied' : 'Copy command'"
        @click="copyInstallCommand"
        @keydown.enter.prevent="copyInstallCommand"
        @keydown.space.prevent="copyInstallCommand"
      ></div>
    </div>

    <div class="stats-row">
      <div class="stat-item">
        <div class="value text-blue">50K+</div>
        <div class="label">Developers</div>
      </div>
      <div class="stat-item">
        <div class="value text-cyan">1M+</div>
        <div class="label">Downloads</div>
      </div>
      <div class="stat-item">
        <div class="value text-green">99.9%</div>
        <div class="label">Uptime</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const installCommand = 'npm install @lencamo/cli'
const copied = ref(false)

let resetCopiedTimer: ReturnType<typeof setTimeout> | undefined

async function copyInstallCommand() {
  try {
    await navigator.clipboard.writeText(installCommand)
  } catch {
    return
  }

  copied.value = true

  if (resetCopiedTimer) {
    clearTimeout(resetCopiedTimer)
  }

  resetCopiedTimer = window.setTimeout(() => {
    copied.value = false
    resetCopiedTimer = undefined
  }, 2000)
}

onBeforeUnmount(() => {
  if (resetCopiedTimer) {
    clearTimeout(resetCopiedTimer)
  }
})
</script>

<style scoped>
.tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(6, 182, 212, 0.1);
  color: var(--color-cyan);
  font-family: var(--font-mono);
  font-size: 12px;
  border: 1px solid rgba(6, 182, 212, 0.2);
}

.tag.blue {
  background: rgba(59, 130, 246, 0.1);
  color: var(--color-blue);
  border-color: rgba(59, 130, 246, 0.2);
}

.hero-tag {
  border-radius: 999px;
  padding: 4px 16px;
}

.hero-centered {
  text-align: center;
  padding: 100px 0 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-centered .hero-title {
  font-size: 56px;
  max-width: 800px;
  margin: 0 auto 24px;
}

.hero-centered .hero-desc {
  font-size: 20px;
  max-width: 640px;
  margin: 0 auto 40px;
}

.install-box {
  position: relative;
  background: #0d0d0d;
  border: 1px solid var(--panel-border);
  border-radius: 8px;

  font-family: var(--font-mono);
  margin-bottom: 48px;
  color: var(--text-main);
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); */
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    color 0.2s;
}

.install-box.is-copied {
  border-color: var(--color-blue);
  box-shadow:
    0 0 0 1px rgba(59, 130, 246, 0.22),
    0 4px 20px rgba(0, 0, 0, 0.5);
}

.install-box-content {
  position: relative;
  z-index: 1;
  pointer-events: none;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px 20px;
}

.install-box .prompt {
  color: #64748b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.command-text {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  font-size: 17px;
}

.prompt-icon {
  width: 24px;
  height: 24px;
  display: block;
}

.status-icon {
  color: var(--text-muted);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.install-box-action {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: transparent;
  border: 0;
  border-radius: inherit;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.install-box:not(.is-copied):hover {
  border-color: rgba(255, 255, 255, 0.18);
}

.install-box-action:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.12);
}

.install-box.is-copied .status-icon {
  color: var(--color-blue);
}

.copy-icon {
  width: 20px;
  height: 20px;
  display: block;
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 64px;
  padding-top: 32px;
  border-top: 1px solid var(--panel-border);
  width: 100%;
  max-width: 800px;
}

.stat-item .value {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-main);
  font-family: var(--font-mono);
  margin-bottom: 4px;
}

.stat-item .label {
  font-size: 14px;
  color: var(--text-muted);
}

@media (max-width: 992px) {
  .hero-centered .hero-title {
    font-size: 40px;
  }

  .stats-row {
    flex-direction: column;
    gap: 24px;
    align-items: center;
    text-align: center;
  }
}
</style>
