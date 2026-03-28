<template>
  <header>
    <div class="container nav-container">
      <div class="logo">
        <img src="/favicon.svg" alt="lencamo logo" class="logo-icon" />
        <span>lencamo</span>
      </div>
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#preview">Code Preview</a>
        <a href="#integrations">Integrations</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid var(--panel-border);
  background: rgba(5, 5, 5, 0.8);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 10;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
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

.logo-icon {
  width: 18px;
  height: 18px;
  display: block;
  flex: none;
}
</style>
