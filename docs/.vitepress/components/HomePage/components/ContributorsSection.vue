<script setup lang="ts">
import { contributors } from '../constants'
</script>

<template>
  <section class="contributors">
    <div class="contributors-container">
      <h2 class="section-title">贡献者</h2>
      <p class="section-subtitle">感谢所有为 Versakit-Vue 做出贡献的开发者们</p>

      <div class="contributors-grid">
        <a
          v-for="contributor in contributors"
          :key="contributor.name"
          :href="contributor.github"
          target="_blank"
          rel="noopener noreferrer"
          class="contributor-card"
        >
          <img
            :src="contributor.avatar"
            :alt="contributor.name"
            class="contributor-avatar"
          />
          <span class="contributor-name">{{ contributor.name }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contributors {
  padding: 80px 24px;
  background: #ffffff;
  text-align: center;
}

.dark .contributors {
  background: #0a0a0a;
}

.contributors-container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: #000000;
}

.dark .section-title {
  color: #ffffff;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #666666;
  margin-bottom: 48px;
}

.dark .section-subtitle {
  color: rgba(255, 255, 255, 0.6);
}

.contributors-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.contributor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;
  width: 120px;
}

.contributor-card:hover {
  transform: translateY(-5px);
  background: rgba(0, 0, 0, 0.03);
}

.dark .contributor-card:hover {
  background: rgba(255, 255, 255, 0.03);
}

.contributor-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
}

.dark .contributor-avatar {
  border-color: rgba(255, 255, 255, 0.1);
}

.contributor-card:hover .contributor-avatar {
  border-color: #000000;
}

.dark .contributor-card:hover .contributor-avatar {
  border-color: #ffffff;
}

.contributor-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #666666;
  transition: color 0.3s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.dark .contributor-name {
  color: rgba(255, 255, 255, 0.6);
}

.contributor-card:hover .contributor-name {
  color: #000000;
}

.dark .contributor-card:hover .contributor-name {
  color: #ffffff;
}
</style>
