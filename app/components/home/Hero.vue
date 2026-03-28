<template>
  <section class="container hero-centered">
    <img
      src="https://avatars.githubusercontent.com/u/78485535?v=4"
      alt="lencamo avatar"
      class="avatar-image"
    />

    <h1 class="hero-title">
      Hi， I'm lencamo<br />
      <span class="text-cyan">Developer & Creator</span>
    </h1>
    <p class="hero-desc">
      I’m not someone defined by discipline, but an unproductive day leaves me uneasy. I’m not
      inherently optimistic, yet I remain quietly hopeful about tomorrow.
    </p>

    <div class="tag green hero-tag">
      <span class="hero-tag-dot" aria-hidden="true">
        <span class="hero-tag-dot-ping"></span>
        <span class="hero-tag-dot-core"></span>
      </span>
      <span>Available for new opportunities</span>
    </div>
  </section>
</template>

<style scoped>
.avatar-image {
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  margin-bottom: 20px;
}

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

.tag.green {
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-green);
  border-color: rgba(16, 185, 129, 0.2);
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 999px;
  padding: 4px 16px;
}

.hero-tag-dot {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  flex: none;
}

.hero-tag-dot-ping {
  position: absolute;
  inset: -1px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.42);
  animation: hero-tag-ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
  transform-origin: center;
}

.hero-tag-dot-core {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--color-green);
  box-shadow:
    0 0 0 1px rgba(16, 185, 129, 0.24),
    0 0 10px rgba(16, 185, 129, 0.26);
}

@keyframes hero-tag-ping {
  0% {
    opacity: 0.75;
    transform: scale(1);
  }

  75%,
  100% {
    opacity: 0;
    transform: scale(1.9);
  }
}

.hero-centered {
  text-align: center;
  padding: 100px 0 80px;
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

@media (max-width: 992px) {
  .hero-centered .hero-title {
    font-size: 40px;
  }
}
</style>
