<template>
  <div class="component-overview">
    <h1 class="overview-title">组件总览</h1>
    <p class="overview-description">
      Versakit 提供了一系列功能丰富、易于使用的组件，用于构建现代化的用户界面。
    </p>

    <div class="component-grid">
      <a
        v-for="component in sortedComponents"
        :key="component.name"
        class="component-card"
        :href="component.path"
      >
        <div class="component-header">
          <div
            class="component-icon"
            :style="{ backgroundColor: component.color }"
          >
            {{ component.letter }}
          </div>
          <h3 class="component-name">{{ component.name }}</h3>
        </div>
        <p class="component-desc">{{ component.description }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const componentsData = [
  {
    name: 'Avatar',
    path: '/docs/components/avatar',
    description:
      '表示用户或对象身份的图形化标识，通常显示为圆形或方形的图片、图标或字母组合。',
    letter: 'A',
    color: 'rgba(241, 196, 15, 0.2)',
  },
  {
    name: 'Badge',
    path: '/docs/components/badge',
    description:
      '用于显示状态标记或通知计数的小型视觉指示器，通常以圆形或椭圆形徽章形式出现。',
    letter: 'B',
    color: 'rgba(231, 76, 60, 0.2)',
  },
  {
    name: 'Dialog',
    path: '/docs/components/dialog',
    description:
      '模态窗口，用于在当前页面层级之上展示重要信息、请求用户确认或执行关键操作。',
    letter: 'D',
    color: 'rgba(41, 128, 185, 0.2)',
  },
  {
    name: 'Drawer',
    path: '/docs/components/drawer',
    description:
      '常见的移动端和桌面端交互组件，通常以侧边滑出或底部弹出的形式呈现。',
    letter: 'D',
    color: 'rgba(243, 156, 18, 0.2)',
  },
  {
    name: 'PinInput',
    path: '/docs/components/pininput',
    description: '专为输入短序列密码（如 PIN 码、验证码）设计的交互组件。',
    letter: 'P',
    color: 'rgba(142, 68, 173, 0.2)',
  },
  {
    name: 'Popover',
    path: '/docs/components/popover',
    description:
      '轻量级的浮动层组件，用于在触发元素附近显示额外信息或操作选项。',
    letter: 'P',
    color: 'rgba(229, 83, 83, 0.2)',
  },
  {
    name: 'Segmented',
    path: '/docs/components/segmented',
    description: '水平排列的选项卡控件，用于在多个互斥选项之间进行快速切换。',
    letter: 'S',
    color: 'rgba(155, 89, 182, 0.2)',
  },
  {
    name: 'Slider',
    path: '/docs/components/slider',
    description: '允许用户通过拖动滑块在指定范围内选择连续或离散值的交互控件。',
    letter: 'S',
    color: 'rgba(46, 204, 113, 0.2)',
  },
  {
    name: 'Switch',
    path: '/docs/components/switch',
    description:
      '二元状态选择器，用于在两种状态间快速切换（如 "开 / 关"、"启用 / 禁用"）。',
    letter: 'S',
    color: 'rgba(52, 152, 219, 0.2)',
  },
  {
    name: 'Tabs',
    path: '/docs/components/tabs',
    description: '常见的界面模式，用于在有限空间内组织和切换多个内容面板。',
    letter: 'T',
    color: 'rgba(39, 174, 96, 0.2)',
  },
  {
    name: 'Tooltip',
    path: '/docs/components/tooltip',
    description:
      '轻量级信息提示组件，当用户悬停、聚焦或点击元素时，会在其附近显示简短说明文本。',
    letter: 'T',
    color: 'rgba(25, 113, 194, 0.2)',
  },
]

const sortedComponents = computed(() => {
  return [...componentsData].sort((a, b) => a.name.localeCompare(b.name))
})
</script>

<style scoped>
.component-overview {
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.overview-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #222;
}

.overview-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 48px;
  max-width: 700px;
  line-height: 1.6;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.component-card {
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.component-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
}

.component-header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.component-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 600;
  font-size: 18px;
  margin-right: 16px;
  color: rgba(0, 0, 0, 0.75);
}

.component-name {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.component-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .component-overview {
    padding: 20px;
  }

  .component-grid {
    grid-template-columns: 1fr;
  }
}
</style>
