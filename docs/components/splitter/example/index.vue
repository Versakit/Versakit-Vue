<script setup lang="ts">
import { Splitter, SplitterItem } from '@versakit/vue'
import '@versakit/vue/style'
import { ref, computed } from 'vue'

const horizontalSizes = ref<number[]>([])
const verticalSizes = ref<number[]>([])
const isDarkMode = ref(false)

// 监听系统主题变化
if (typeof window !== 'undefined') {
  isDarkMode.value =
    document.documentElement.classList.contains('dark') ||
    window.matchMedia('(prefers-color-scheme: dark)').matches

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      isDarkMode.value = e.matches
    })
}

const customStyle = computed(() => ({
  root: 'border rounded-lg overflow-hidden',
  gutter: isDarkMode.value ? 'bg-blue-600' : 'bg-blue-500',
  gutterHandler: isDarkMode.value ? 'bg-gray-300' : 'bg-white',
}))

const unstyledPt = computed(() => ({
  root: 'splitter-root',
  gutter: 'splitter-gutter',
  gutterHandler: 'splitter-handler',
}))
</script>

<template>
  <div class="examples">
    <!-- 基础用法 -->
    <section class="example-section">
      <h2 class="section-title">基础用法</h2>
      <div class="example-box">
        <Splitter @resize="horizontalSizes = $event">
          <SplitterItem>
            <div class="panel">
              <span>面板 1</span>
              <span v-if="horizontalSizes.length" class="size-label">
                {{ Math.round(horizontalSizes[0]) }}%
              </span>
            </div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">
              <span>面板 2</span>
              <span v-if="horizontalSizes.length" class="size-label">
                {{ Math.round(horizontalSizes[1]) }}%
              </span>
            </div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 垂直布局 -->
    <section class="example-section">
      <h2 class="section-title">垂直布局</h2>
      <div class="example-box">
        <Splitter layout="vertical" @resize="verticalSizes = $event">
          <SplitterItem>
            <div class="panel">
              <span>面板 1</span>
              <span v-if="verticalSizes.length" class="size-label">
                {{ Math.round(verticalSizes[0]) }}%
              </span>
            </div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">
              <span>面板 2</span>
              <span v-if="verticalSizes.length" class="size-label">
                {{ Math.round(verticalSizes[1]) }}%
              </span>
            </div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 多面板 -->
    <section class="example-section">
      <h2 class="section-title">多面板</h2>
      <div class="example-box">
        <Splitter>
          <SplitterItem>
            <div class="panel">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">面板 2</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-third">面板 3</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 嵌套面板 -->
    <section class="example-section">
      <h2 class="section-title">嵌套面板</h2>
      <div class="example-box">
        <Splitter>
          <SplitterItem>
            <div class="panel panel-tall">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <Splitter layout="vertical">
              <SplitterItem>
                <div class="panel">面板 2.1</div>
              </SplitterItem>
              <SplitterItem>
                <div class="panel panel-alt">面板 2.2</div>
              </SplitterItem>
            </Splitter>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 自定义分隔条 -->
    <section class="example-section">
      <h2 class="section-title">自定义分隔条</h2>
      <div class="example-box">
        <Splitter :gutter-size="8">
          <SplitterItem>
            <div class="panel">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">面板 2</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 初始尺寸和最小尺寸 -->
    <section class="example-section">
      <h2 class="section-title">初始尺寸和最小尺寸</h2>
      <div class="example-box">
        <Splitter :initial-sizes="[70, 30]" :min-size="[20, 10]">
          <SplitterItem>
            <div class="panel">
              <div>面板 1</div>
              <div class="panel-note">(初始 70%, 最小 20%)</div>
            </div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">
              <div>面板 2</div>
              <div class="panel-note">(初始 30%, 最小 10%)</div>
            </div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 自定义样式 -->
    <section class="example-section">
      <h2 class="section-title">自定义样式</h2>
      <div class="example-box">
        <Splitter :pt="customStyle">
          <SplitterItem>
            <div class="panel">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-alt">面板 2</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>

    <!-- 无样式模式 -->
    <section class="example-section">
      <h2 class="section-title">无样式模式</h2>
      <div class="example-box">
        <Splitter unstyled :pt="unstyledPt">
          <SplitterItem>
            <div class="panel panel-custom">面板 1</div>
          </SplitterItem>
          <SplitterItem>
            <div class="panel panel-custom-alt">面板 2</div>
          </SplitterItem>
        </Splitter>
      </div>
    </section>
  </div>
</template>

<style scoped>
.examples {
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.example-section {
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid #e5e7eb;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #1f2937;
}

.example-box {
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.panel {
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3f4f6;
  color: #1f2937;
  font-weight: 500;
  border-radius: 4px;
}

.panel-alt {
  background-color: #e5e7eb;
}

.panel-third {
  background-color: #d1d5db;
}

.panel-tall {
  height: 240px;
}

.panel-custom {
  background-color: #f9fafb;
}

.panel-custom-alt {
  background-color: #f3f4f6;
}

.size-label {
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
}

.panel-note {
  font-size: 14px;
  color: #6b7280;
  margin-top: 8px;
  font-weight: normal;
}

/* 暗黑模式 */
:root[class~='dark'] .section-title {
  color: #f9fafb;
}

:root[class~='dark'] .example-box {
  background-color: #1f2937;
  border-color: #374151;
}

:root[class~='dark'] .example-section {
  border-color: #374151;
}

:root[class~='dark'] .panel {
  background-color: #374151;
  color: #f3f4f6;
}

:root[class~='dark'] .panel-alt {
  background-color: #4b5563;
}

:root[class~='dark'] .panel-third {
  background-color: #6b7280;
}

:root[class~='dark'] .panel-custom {
  background-color: #1f2937;
}

:root[class~='dark'] .panel-custom-alt {
  background-color: #374151;
}

:root[class~='dark'] .size-label,
:root[class~='dark'] .panel-note {
  color: #9ca3af;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .examples {
    padding: 16px;
  }

  .example-section {
    margin-bottom: 24px;
    padding-bottom: 24px;
  }

  .example-box {
    padding: 16px;
  }

  .panel {
    height: 120px;
  }

  .panel-tall {
    height: 180px;
  }
}
</style>

<style>
.splitter-root {
  display: flex;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}

.splitter-gutter {
  width: 8px;
  background-color: #f3f4f6;
  cursor: col-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.splitter-gutter:hover {
  background-color: #e5e7eb;
}

.splitter-handler {
  height: 32px;
  width: 4px;
  background-color: #9ca3af;
  border-radius: 2px;
}

:root[class~='dark'] .splitter-root {
  border-color: #374151;
}

:root[class~='dark'] .splitter-gutter {
  background-color: #374151;
}

:root[class~='dark'] .splitter-gutter:hover {
  background-color: #4b5563;
}

:root[class~='dark'] .splitter-handler {
  background-color: #6b7280;
}
</style>
