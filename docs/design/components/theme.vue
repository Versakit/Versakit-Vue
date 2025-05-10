<template>
  <div class="theme-generator">
    <h2>主题生成器</h2>

    <div class="theme-container">
      <!-- 左侧颜色编辑区域 -->
      <div class="theme-editor">
        <div
          v-for="(colors, type) in themeData"
          :key="type"
          class="theme-section"
        >
          <h3 class="type-header">{{ type }}</h3>
          <div class="color-grid">
            <div
              v-for="(value, shade) in colors"
              :key="shade"
              class="color-card"
            >
              <div
                class="color-preview"
                :style="{ backgroundColor: value }"
              ></div>
              <div class="color-controls">
                <div class="shade-label">{{ shade }}</div>
                <div class="inputs-row">
                  <input
                    type="color"
                    v-model="themeData[type][shade]"
                    @input="(event) => updateColor(type, shade, event)"
                    class="color-picker"
                  />
                  <input
                    type="text"
                    v-model="themeData[type][shade]"
                    class="color-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧预览和操作区域 -->
      <div class="theme-preview-panel">
        <div class="actions">
          <button class="action-button export" @click="exportTheme">
            <span class="icon">↓</span>
            导出主题
          </button>
          <input
            type="file"
            @change="importTheme"
            accept=".json,.ts"
            style="display: none"
            ref="fileInput"
          />
        </div>

        <div class="theme-name-container">
          <label for="themeName">主题名称:</label>
          <input
            id="themeName"
            v-model="themeName"
            type="text"
            class="theme-name-input"
            placeholder="输入主题名称"
          />
        </div>

        <div class="preview-container">
          <h3>预览代码</h3>
          <pre class="preview">{{ generatedCode }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 主题名称
const themeName = ref('Element')

// 初始主题数据 - 基于 var.css 颜色系统
const themeData = ref({
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6',
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#581c87',
    950: '#2e1065',
  },
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },
  info: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
})

// 生成预览代码
const generatedCode = computed(() => {
  return `// 预设主题包
export const ${themeName.value} = {
  theme: ${JSON.stringify(themeData.value, null, 2)}
}`
})

// 更新颜色
const updateColor = (type: string, shade: any, event: any) => {
  const input = event.target as HTMLInputElement
  themeData.value[type][shade] = input.value
}

// 导出主题配置
const exportTheme = () => {
  const blob = new Blob([generatedCode.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${themeName.value.toLowerCase()}-theme.ts`
  a.click()
  URL.revokeObjectURL(url)
}

const fileInput = ref<HTMLInputElement | null>(null)

// 导入主题
const importTheme = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string

        // 尝试解析 TS 主题文件
        if (file.name.endsWith('.ts')) {
          // 解析导出的主题对象
          const themeMatch = content.match(
            /export\s+(?:const|let|var)\s+(\w+)\s*=\s*({[\s\S]*})/,
          )
          if (themeMatch) {
            const [, name, themeObj] = themeMatch
            // 提取 theme 对象
            const themeContent = themeObj.match(
              /theme:\s*({[\s\S]*?})[,\s]*\}/,
            )?.[1]
            if (themeContent) {
              themeName.value = name
              // 处理单引号和注释
              const cleanContent = themeContent
                .replace(/\/\*[\s\S]*?\*\//g, '') // 移除块注释
                .replace(/\/\/.*/g, '') // 移除行注释
                .replace(/'/g, '"') // 单引号转双引号
                .replace(/,(\s*[}\]])/g, '$1') // 移除尾随逗号
              themeData.value = JSON.parse(cleanContent)
              return
            }
          }
        }

        // 尝试解析 JSON 格式
        const jsonMatch = content.match(/theme:\s*({[\s\S]*?})/)
        if (jsonMatch) {
          themeData.value = JSON.parse(jsonMatch[1])
          return
        }

        // 尝试直接解析为 JSON
        const parsed = JSON.parse(content)
        if (parsed.theme) {
          themeData.value = parsed.theme
        } else {
          themeData.value = parsed
        }
      } catch (error) {
        console.error('Theme import error:', error)
        alert('主题文件格式错误，请检查文件内容')
      }
    }
    reader.readAsText(file)
  }
}
</script>

<style scoped>
.theme-generator {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.theme-container {
  display: flex;
  flex-direction: row;
  gap: 30px;
  min-height: calc(100vh - 120px); /* 确保有足够的滚动空间 */
}

@media (max-width: 920px) {
  .theme-container {
    flex-direction: column;
  }

  .theme-preview-panel {
    position: relative !important;
    top: 0 !important;
  }
}

.theme-editor {
  flex: 3;
  min-width: 0; /* 防止溢出 */
}

.theme-preview-panel {
  flex: 2;
  position: sticky;
  top: 20px;
  height: fit-content;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.theme-section {
  margin-bottom: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.type-header {
  margin-top: 0;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  text-transform: capitalize;
  color: #333;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
}

.color-card {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.color-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.color-preview {
  height: 60px;
  width: 100%;
  transition: opacity 0.2s;
}

.color-preview:hover {
  opacity: 0.9;
}

.color-controls {
  padding: 10px;
}

.shade-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.inputs-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.color-picker {
  width: 40px;
  height: 30px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
}

.color-input {
  flex: 1;
  padding: 5px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: monospace;
}

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.action-button {
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
}

.export {
  background: #409eff;
  color: white;
}

.export:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.import {
  background: white;
  color: #333;
  border: 1px solid #ddd;
}

.import:hover {
  background: #f5f5f5;
  transform: translateY(-1px);
}

.icon {
  font-size: 14px;
}

.preview-container {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s;
}

.preview-container:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.preview {
  margin: 0;
  padding: 15px;
  background: #f5f5f5;
  border-radius: 4px;
  overflow: auto;
  max-height: 400px;
  font-family: monospace;
  font-size: 13px;
}

.theme-name-container {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.theme-name-input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.2s ease;
}

.theme-name-input:hover {
  border-color: #a3d0ff;
}

.theme-name-input:focus {
  border-color: #409eff;
  outline: none;
  box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.2);
}
</style>
