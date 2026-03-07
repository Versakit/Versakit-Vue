<script setup lang="ts">
import { features } from '../constants'

const getIconPath = (icon: string) => {
  switch (icon) {
    case 'headless':
      return ['M12 2L2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5M2 12l10 5 10-5']
    case 'typescript':
      return ['M16 18l6-6-6-6', 'M8 6l-6 6 6 6']
    case 'customize':
      return [
        'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
        'M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24',
      ]
    case 'accessibility':
      return [
        'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z',
        'M2 12h20',
        'M12 2a15 15 0 0 1 0 30 15 15 0 0 1 0-30',
      ]
    default:
      return []
  }
}
</script>

<template>
  <section class="features">
    <div class="features-container">
      <h2 class="section-title">核心特性</h2>
      <div class="features-grid">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="feature-card"
        >
          <div class="feature-icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feature-icon"
            >
              <path
                v-for="(d, index) in getIconPath(feature.icon)"
                :key="index"
                :d="d"
              />
            </svg>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  padding: 80px 24px;
  background: #f9f9f9;
}

.dark .features {
  background: #0f0f0f;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 64px;
  color: #000000;
}

.dark .section-title {
  color: #ffffff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.feature-card {
  background: #ffffff;
  padding: 32px;
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.dark .feature-card {
  background: #1a1a1a;
  border-color: rgba(255, 255, 255, 0.05);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.dark .feature-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.feature-icon-wrapper {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  margin-bottom: 24px;
  color: #000000;
}

.dark .feature-icon-wrapper {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}

.feature-icon {
  width: 24px;
  height: 24px;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #000000;
}

.dark .feature-title {
  color: #ffffff;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #666666;
}

.dark .feature-description {
  color: rgba(255, 255, 255, 0.6);
}
</style>
