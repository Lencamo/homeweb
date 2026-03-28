<template>
  <section id="integrations" class="container text-center integrations-section">
    <div class="section-header" style="max-width: 600px; margin: 0 auto 48px">
      <h2 class="section-title">Works with your favorite tools</h2>
      <p class="section-subtitle">Seamlessly integrate with the tools you already use and love.</p>
    </div>

    <div class="integrations" style="opacity: 1; gap: 40px; max-width: 800px; margin: 0 auto">
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-main">GH</span>
        GitHub
      </div>
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-orange">GL</span>
        GitLab
      </div>
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-main">▲</span>
        Vercel
      </div>
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-orange">AWS</span>
        AWS
      </div>
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-blue">🐳</span>
        Docker
      </div>
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-pink">#</span>
        Slack
      </div>
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-blue">J</span>
        Jira
      </div>
      <div
        class="panel"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="text-main">L</span>
        Linear
      </div>
    </div>
  </section>
</template>

<style scoped>
.integrations-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.integrations {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
}
</style>
