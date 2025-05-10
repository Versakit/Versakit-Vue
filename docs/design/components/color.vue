<template>
  <div class="color-display">
    <!-- 基础色 -->
    <section class="color-section">
      <h3>基础色</h3>
      <div class="color-grid">
        <div class="color-item">
          <div class="color-block" style="background: var(--vk-white)"></div>
          <div class="color-info">
            <span>White</span>
            <code>var(--vk-white)</code>
          </div>
        </div>
        <div class="color-item">
          <div class="color-block" style="background: var(--vk-black)"></div>
          <div class="color-info">
            <span>Black</span>
            <code>var(--vk-black)</code>
          </div>
        </div>
      </div>
    </section>

    <!-- 主题色板 -->
    <section class="color-section">
      <h3>主题色板</h3>
      <div
        class="color-series"
        v-for="series in colorSeries"
        :key="series.name"
      >
        <h4>{{ series.title }}</h4>
        <div class="color-grid">
          <div v-for="shade in shades" :key="shade" class="color-item">
            <div
              class="color-block"
              :style="`background: var(--vk-${series.name}-${shade})`"
            ></div>
            <div class="color-info">
              <span>{{ shade }}</span>
              <code>var(--vk-{{ series.name }}-{{ shade }})</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const colorSeries = [
  { name: 'primary', title: '主色' },
  { name: 'success', title: '成功色' },
  { name: 'error', title: '错误色' },
  { name: 'warn', title: '警告色' },
  { name: 'info', title: '信息色' },
  { name: 'neutral', title: '中性色' },
]
</script>

<style scoped>
.color-display {
  width: 100%;
}

.color-section {
  margin-bottom: 2rem;
}

.color-series {
  margin-bottom: 2rem;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.color-item {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vk-neutral-200);
  border-radius: 4px;
  overflow: hidden;
}

.color-block {
  height: 80px;
  width: 100%;
}

.color-info {
  padding: 0.5rem;
  background: white;
}

.color-info span {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.color-info code {
  font-size: 0.875rem;
  color: var(--vk-neutral-600);
}
</style>
