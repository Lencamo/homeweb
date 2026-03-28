<template>
  <section class="cta-section">
    <div class="container">
      <h2 class="hero-title" style="font-size: 40px; margin-bottom: 24px">
        Ready to build faster?
      </h2>
      <p class="hero-desc" style="margin: 0 auto 32px; max-width: 500px; font-size: 18px">
        Join thousands of developers who ship better code with lencamo. Start free, no credit card
        required.
      </p>

      <a
        href="#"
        class="btn btn-primary"
        style="padding: 16px 32px; font-size: 18px; border-radius: 8px"
      >
        Start free
      </a>

      <div class="benefits">
        <span>Free forever plan</span>
        <span>No credit card</span>
        <span>Cancel anytime</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--color-blue);
  color: #fff;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  background: #2563eb;
  opacity: 1;
}

.cta-section {
  text-align: center;
  padding: 100px 0;
  background: radial-gradient(circle at top, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
  border-top: 1px solid var(--panel-border);
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
