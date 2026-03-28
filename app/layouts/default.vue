<template>
  <div>
    <div class="layout-topbar">
      <LayoutLocaleBanner />
      <LayoutHeader />
    </div>
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped>
.layout-topbar {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(5, 5, 5, 0.82);
  backdrop-filter: blur(16px);
}
</style>
