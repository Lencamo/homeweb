<template>
  <section id="features" class="container features-section">
    <div class="section-header text-center" style="max-width: 600px; margin: 0 auto 48px">
      <h2 class="section-title" style="font-size: 32px">Powerful Templates</h2>
      <p class="section-subtitle">
        Browse my template collection, from open-source starters to premium builds, and get
        running faster with the setup that fits your project.
      </p>
    </div>

    <div class="grid grid-3">
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-pink)">✧</div>
        <h3 class="mb-2 text-main">lencamo-cli</h3>
        <p class="text-muted" style="font-size: 14px">
          Open source CLI tooling for scaffolding, snippets, and everyday workflow support.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-blue)">⚡</div>
        <h3 class="mb-2 text-main">Open Blog Starter</h3>
        <p class="text-muted" style="font-size: 14px">
          An open source starter for content sites, blogs, and personal publishing.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-orange)">⎇</div>
        <h3 class="mb-2 text-main">Docs Starter</h3>
        <p class="text-muted" style="font-size: 14px">
          A free project base for documentation, guides, and developer-facing content.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-green)">🚀</div>
        <h3 class="mb-2 text-main">TingNote</h3>
        <p class="text-muted" style="font-size: 14px">
          A premium writing product focused on notes, knowledge, and structured thinking.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--color-cyan)">🧩</div>
        <h3 class="mb-2 text-main">SaaS Launch Kit</h3>
        <p class="text-muted" style="font-size: 14px">
          A paid project template for shipping polished SaaS landing pages and product sites.
        </p>
      </div>
      <div class="panel">
        <div class="feature-icon" style="color: var(--text-main)">☁️</div>
        <h3 class="mb-2 text-main">Premium Dashboard</h3>
        <p class="text-muted" style="font-size: 14px">
          A production-ready paid admin template with stronger structure and cleaner UI detail.
        </p>
      </div>
    </div>
  </section>
</template>

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
