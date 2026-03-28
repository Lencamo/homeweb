<template>
  <footer style="border-top: none; padding-top: 0">
    <div class="container" style="border-top: 1px solid var(--panel-border); padding-top: 48px">
      <div class="logo mb-4" style="text-align: center">
        <span class="text-blue">▲</span>
        lencamo
      </div>
      <div class="footer-links">
        <a href="#">Product</a>
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <p>© 2024 lencamo. All rights reserved.</p>
    </div>
  </footer>
</template>

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
  gap: 24px;
  margin-bottom: 16px;
}
</style>
