<script setup lang="ts">
import { featuredComponents } from '../constants'
</script>

<template>
  <section class="components-preview">
    <div class="components-container">
      <h2 class="section-title">组件概览</h2>
      <p class="section-subtitle">提供丰富的通用组件，满足绝大多数业务需求</p>

      <div class="components-grid">
        <a
          v-for="component in featuredComponents"
          :key="component.name"
          :href="component.path"
          class="component-card"
        >
          <div class="component-header">
            <h3 class="component-name">{{ component.name }}</h3>
            <span class="component-arrow">→</span>
          </div>
          <p class="component-description">{{ component.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.components-preview {
  padding: 80px 24px;
  background: #ffffff;
}

.dark .components-preview {
  background: #0a0a0a;
}

.components-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #000000;
}

.dark .section-title {
  color: #ffffff;
}

.section-subtitle {
  font-size: 1.125rem;
  text-align: center;
  color: #666666;
  margin-bottom: 64px;
}

.dark .section-subtitle {
  color: rgba(255, 255, 255, 0.6);
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}

.component-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  background: #f9f9f9;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.dark .component-card {
  background: #1a1a1a;
  border-color: rgba(255, 255, 255, 0.05);
}

.component-card:hover {
  transform: translateY(-5px);
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.1);
}

.dark .component-card:hover {
  background: #262626;
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.component-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.component-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
  transition: color 0.3s ease;
}

.dark .component-name {
  color: #ffffff;
}

.component-arrow {
  font-size: 1.25rem;
  color: #666666;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.component-card:hover .component-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #000000;
}

.dark .component-card:hover .component-arrow {
  color: #ffffff;
}

.component-description {
  font-size: 0.875rem;
  color: #666666;
  line-height: 1.5;
}

.dark .component-description {
  color: rgba(255, 255, 255, 0.6);
}
</style>
