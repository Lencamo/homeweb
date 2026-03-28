<template>
  <section id="preview" class="container preview-section">
    <div class="preview-content">
      <h2 class="section-title preview-title">{{ messages.preview.title }}</h2>
      <p class="hero-desc preview-desc">{{ messages.preview.description }}</p>
      <ul class="bullet-list">
        <li v-for="item in messages.preview.bullets" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="preview-visual">
      <div class="preview-carousel" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <div class="preview-carousel-viewport" aria-roledescription="carousel">
          <div
            class="preview-carousel-track"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div v-for="slide in slides" :key="slide.src" class="preview-slide">
              <img class="preview-slide-image" :src="slide.src" :alt="slide.alt" loading="lazy" />
            </div>
          </div>
        </div>
        <div class="preview-carousel-footer">
          <p class="preview-carousel-description">{{ activeSlide?.description || '' }}</p>
          <div class="preview-carousel-dots">
            <button
              v-for="(slide, index) in slides"
              :key="slide.src"
              :class="['preview-carousel-dot', { 'is-active': index === activeIndex }]"
              type="button"
              :aria-label="dotLabel(index + 1)"
              @click="goToSlide(index)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import articleImage from '~/assets/image/article.png'
import homeImage from '~/assets/image/home.png'
import mindImage from '~/assets/image/mind.png'
import robotImage from '~/assets/image/robot.png'

const { locale, messages } = useSiteLocale()

const slideImages = [homeImage, robotImage, articleImage, mindImage] as const

const slides = computed(() =>
  slideImages.map((src, index) => ({
    src,
    description: messages.value?.preview.slides[index]?.description,
    alt: messages.value?.preview.slides[index]?.alt
  }))
)

const activeIndex = ref(0)
const activeSlide = computed(() => slides.value[activeIndex.value])

let autoPlayTimer: ReturnType<typeof window.setInterval> | undefined

function goToSlide(index: number) {
  activeIndex.value = (index + slides.value.length) % slides.value.length
}

function nextSlide() {
  goToSlide(activeIndex.value + 1)
}

function dotLabel(index: number) {
  if (locale.value === 'zh') {
    return `${messages.value.common.goToSlide}${index}张`
  }

  return `${messages.value.common.goToSlide} ${index}`
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    window.clearInterval(autoPlayTimer)
    autoPlayTimer = undefined
  }
}

function startAutoPlay() {
  stopAutoPlay()
  autoPlayTimer = window.setInterval(() => {
    nextSlide()
  }, 4000)
}

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.preview-section {
  display: flex;
  align-items: center;
  gap: 64px;
  padding-top: 80px;
  padding-bottom: 80px;

  background: radial-gradient(circle at bottom, rgba(6, 182, 212, 0.08) 0%, transparent 70%);
}

.preview-content {
  flex: 1;
}

.preview-title {
  font-size: 32px;
}

.preview-desc {
  font-size: 18px;
  margin-bottom: 24px;
}

.preview-visual {
  flex: 1.2;
  min-width: 0;
}

.preview-carousel {
  background: #0d0d0d;
  border: 1px solid var(--panel-border);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.preview-carousel-viewport {
  position: relative;
  overflow: hidden;
  height: 355px;
  background: #050505;
}

.preview-carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.45s ease;
}

.preview-slide {
  min-width: 100%;
  height: 100%;
}

.preview-slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.preview-carousel-footer {
  padding: 5px 10px;
  border-top: 1px solid var(--panel-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.preview-carousel-description {
  color: var(--text-muted);
  font-size: 13px;
  line-height: 1.6;
  max-width: 420px;
}

.preview-carousel-dots {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.preview-carousel-dot {
  width: 8px;
  height: 8px;
  border: 0;
  border-radius: 999px;
  padding: 0;
  background: rgba(255, 255, 255, 0.16);
  cursor: pointer;
  transition:
    width 0.2s,
    background 0.2s;
}

.preview-carousel-dot.is-active {
  width: 24px;
  background: var(--color-cyan);
}

.bullet-list {
  list-style: none;
  margin-top: 24px;
}

.bullet-list li {
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
  font-size: 16px;
}

.bullet-list li::before {
  content: '✓';
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-green);
  font-size: 12px;
}

@media (max-width: 992px) {
  .preview-section {
    flex-direction: column;
  }

  .preview-visual {
    width: 100%;
  }

  .preview-carousel-viewport {
    height: 320px;
  }

  .preview-carousel-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .preview-carousel-description {
    max-width: none;
  }
}
</style>
