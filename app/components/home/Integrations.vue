<template>
  <section id="integrations" class="container text-center integrations-section">
    <div class="integrations" style="opacity: 1; gap: 40px; max-width: 800px; margin: 0 auto">
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo github" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.88 1.5 2.32 1.07 2.89.82.09-.65.35-1.07.63-1.32-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.69-4.58 4.93.36.31.68.92.68 1.84v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
            />
          </svg>
        </span>
        GitHub
      </div>
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo vercel" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4 21 20H3L12 4Z" />
          </svg>
        </span>
        Vercel
      </div>
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo docker" aria-hidden="true">
          <svg viewBox="0 0 32 24">
            <g fill="currentColor">
              <rect x="3" y="9" width="4" height="4" rx="1" />
              <rect x="8" y="9" width="4" height="4" rx="1" />
              <rect x="13" y="9" width="4" height="4" rx="1" />
              <rect x="18" y="9" width="4" height="4" rx="1" />
              <rect x="8" y="4" width="4" height="4" rx="1" />
              <rect x="13" y="4" width="4" height="4" rx="1" />
              <rect x="18" y="4" width="4" height="4" rx="1" />
              <path
                d="M4 15h17.2c-.6 3.5-3.6 6.3-7.3 6.3H10c-2.8 0-5.1-2.7-6-6.3Z"
              />
              <path
                d="M22.4 15.2c.5-1.4 1.7-2.3 3.2-2.5.7 1.6.5 3.4-.7 4.8-.9 1.1-2.2 1.7-3.6 1.8"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </g>
          </svg>
        </span>
        Docker
      </div>
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo cloudflare" aria-hidden="true">
          <svg viewBox="0 0 32 20">
            <path
              fill="#f38020"
              d="M9.4 17.5h16.1c3.1 0 5.5-2.1 5.5-4.8 0-2.4-1.9-4.4-4.6-4.8A7.24 7.24 0 0 0 19.4 2c-3.4 0-6.3 2.3-7.1 5.4-3.7.2-6.8 2.6-7.4 5.9-.3 2.2 1.5 4.2 4.5 4.2Z"
            />
            <path
              fill="#faae40"
              d="M13.1 17.5h11.7c1.7 0 3-1.1 3-2.5 0-1.1-.8-2.1-2-2.4-.4-1.6-2-2.8-3.9-2.8-1.5 0-2.9.8-3.5 2-2.2.1-4.1 1.5-4.6 3.4-.2 1.2.7 2.3 2.3 2.3Z"
            />
          </svg>
        </span>
        Cloudflare
      </div>
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo typescript" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <rect width="24" height="24" rx="4" fill="#3178c6" />
            <text
              x="5.2"
              y="16.5"
              fill="#ffffff"
              font-family="Arial, sans-serif"
              font-size="9.5"
              font-weight="700"
            >
              TS
            </text>
          </svg>
        </span>
        TypeScript
      </div>
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo vue" aria-hidden="true">
          <svg viewBox="0 0 24 20">
            <path fill="#41b883" d="M14.2 0 12 3.7 9.8 0H0l12 20L24 0Z" />
            <path fill="#35495e" d="M9.8 0 12 3.7 14.2 0H18L12 10 6 0Z" />
          </svg>
        </span>
        Vue
      </div>
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo nestjs" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path fill="#e0234e" d="M12 2 4 6.5v11L12 22l8-4.5v-11L12 2Z" />
            <path
              fill="#ffffff"
              d="M8.1 17.1V7.3h1.9l5.8 7.2V7.3h1.9v9.8h-1.8L10 10v7.1H8.1Z"
            />
          </svg>
        </span>
        NestJS
      </div>
      <div
        class="panel integration-card"
        style="padding: 16px 32px; display: flex; align-items: center; gap: 12px; font-weight: bold"
      >
        <span class="integration-logo nuxt" aria-hidden="true">
          <svg viewBox="0 0 28 24">
            <path fill="#00dc82" d="M14 3.5 25.6 23H2.4L14 3.5Z" />
            <path fill="#108775" d="M14 9.3 22.3 23h-4.9L14 17.4 10.6 23H5.7L14 9.3Z" />
            <path fill="#6dffe0" d="M2.4 23 8.5 12.8l3.2 5.3L8.8 23H2.4Z" />
          </svg>
        </span>
        Nuxt
      </div>
    </div>
  </section>
</template>

<style scoped>
.integrations-section {
  padding-top: 50px;
  padding-bottom: 50px;
}

.integrations {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
}

.integration-card {
  justify-content: center;
}

.integration-logo {
  --logo-width: 22px;
  --logo-height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex: none;
  line-height: 0;
}

.integration-logo svg {
  display: block;
  width: var(--logo-width);
  height: var(--logo-height);
}

.integration-logo.github,
.integration-logo.vercel {
  color: var(--text-main);
}

.integration-logo.github,
.integration-logo.typescript,
.integration-logo.nestjs {
  --logo-width: 21px;
  --logo-height: 21px;
}

.integration-logo.vercel {
  --logo-width: 18px;
  --logo-height: 18px;
}

.integration-logo.docker {
  --logo-width: 24px;
  --logo-height: 18px;
  color: #2496ed;
}

.integration-logo.cloudflare {
  --logo-width: 24px;
  --logo-height: 15px;
}

.integration-logo.vue {
  --logo-width: 22px;
  --logo-height: 18px;
}

.integration-logo.nuxt {
  --logo-width: 24px;
  --logo-height: 20px;
}
</style>
