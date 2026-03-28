<template>
  <section id="features" class="container">
    <div class="section-header text-center" style="max-width: 600px; margin: 0 auto 48px">
      <h2 class="section-title" style="font-size: 32px">Everything you need to ship faster</h2>
      <p class="section-subtitle">Features</p>
    </div>

    <div class="grid grid-3">
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-pink)">✧</div>
        <h3 class="mb-2 text-main">AI Autocomplete</h3>
        <p class="text-muted" style="font-size: 14px">
          Context-aware code suggestions powered by machine learning.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-blue)">⚡</div>
        <h3 class="mb-2 text-main">Real-time Collab</h3>
        <p class="text-muted" style="font-size: 14px">
          Code together with your team in real-time, anywhere.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-orange)">⎇</div>
        <h3 class="mb-2 text-main">Git Integration</h3>
        <p class="text-muted" style="font-size: 14px">
          Built-in version control with visual diff and merge tools.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-green)">🚀</div>
        <h3 class="mb-2 text-main">Fast &amp; Lightweight</h3>
        <p class="text-muted" style="font-size: 14px">
          Optimized performance with minimal resource usage.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-cyan)">🧩</div>
        <h3 class="mb-2 text-main">Extensions</h3>
        <p class="text-muted" style="font-size: 14px">
          Thousands of extensions to customize your workflow.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--text-main)">☁️</div>
        <h3 class="mb-2 text-main">Cloud Sync</h3>
        <p class="text-muted" style="font-size: 14px">
          Sync settings and projects across all your devices.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
