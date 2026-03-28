<template>
  <section class="container hero-centered">
    <div class="tag blue hero-tag mb-6">
      v2.0 Now Available
    </div>
    <h1 class="hero-title">
      Build faster with <br />
      <span class="text-cyan">modern dev tools</span>
    </h1>
    <p class="hero-desc">
      A complete toolkit for modern developers. Ship production-ready code faster with intelligent
      autocomplete, real-time collaboration, and seamless integrations.
    </p>

    <div class="install-box">
      <span class="prompt">$</span>
      <span>{{ installCommand }}</span>
      <button type="button" class="copy-btn" @click="copyInstallCommand">Copy</button>
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
const installCommand = 'npm install @lencamo/cli'

async function copyInstallCommand() {
  try {
    await navigator.clipboard.writeText(installCommand)
  } catch {
    // Ignore clipboard failures and keep the original button feedback.
  }

  window.alert('Copied to clipboard!')
}
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
  background: #0d0d0d;
  border: 1px solid var(--panel-border);
  padding: 16px 24px;
  border-radius: 8px;
  font-family: var(--font-mono);
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  color: var(--text-main);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.install-box .prompt {
  color: var(--color-pink);
}

.install-box .copy-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid transparent;
  color: var(--text-muted);
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}

.install-box .copy-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text-main);
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
