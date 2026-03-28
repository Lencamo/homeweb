<template>
  <footer style="border-top: none; padding-top: 0">
    <div class="container" style="border-top: 1px solid var(--panel-border); padding-top: 48px">
      <div class="logo mb-4" style="text-align: center">
        <img :alt="messages.footer.logoAlt" src="/favicon.svg" class="logo-icon" />
        <span>lencamo</span>
      </div>
      <div class="footer-links">
        <a v-for="item in messages.footer.links" :key="item.label" :href="item.href">
          {{ item.label }}
        </a>
      </div>
      <p>{{ messages.footer.copyright }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { messages } = useSiteLocale()
</script>

<style scoped>
footer {
  padding: 48px 0;
  border-top: 1px solid var(--panel-border);
  text-align: center;
  color: var(--text-muted);
  font-size: 14px;
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 16px;
}

.logo-icon {
  width: 18px;
  height: 18px;
  display: block;
  flex: none;
}
</style>
