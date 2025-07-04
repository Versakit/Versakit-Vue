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
    name: 'Alert',
    path: '/Versakit-Vue/components/alert/',
    description: '用于显示重要信息或操作结果的通知组件。',
    letter: 'A',
    color: 'rgba(241, 196, 15, 0.2)',
  },
  {
    name: 'Avatar',
    path: '/Versakit-Vue/components/avatar/',
    description:
      '表示用户或对象身份的图形化标识，通常显示为圆形或方形的图片、图标或字母组合。',
    letter: 'A',
    color: 'rgba(241, 196, 15, 0.2)',
  },
  {
    name: 'Button',
    path: '/Versakit-Vue/components/button/',
    description: '用于触发用户操作的交互元素，通常以按钮形式呈现。',
    letter: 'B',
    color: 'rgba(231, 76, 60, 0.2)',
  },

  {
    name: 'Badge',
    path: '/Versakit-Vue/components/badge/',
    description:
      '用于显示状态标记或通知计数的小型视觉指示器，通常以圆形或椭圆形徽章形式出现。',
    letter: 'B',
    color: 'rgba(231, 76, 60, 0.2)',
  },
  {
    name: 'Card',
    path: '/Versakit-Vue/components/card/',
    description: '用于显示内容和信息的容器组件，通常以卡片形式呈现。',
    letter: 'C',
    color: 'rgba(231, 76, 60, 0.2)',
  },
  {
    name: 'Calendar',
    path: '/Versakit-Vue/components/calendar/',
    description: '用于显示日历的组件，通常以日历形式呈现。',
    letter: 'C',
    color: 'rgba(231, 76, 60, 0.2)',
  },
  {
    name: 'Chip',
    path: '/Versakit-Vue/components/chip/',
    description:
      '用于显示状态标记或通知计数的小型视觉指示器，通常以圆形或椭圆形徽章形式出现。',
    letter: 'C',
    color: 'rgba(231, 76, 60, 0.2)',
  },
  {
    name: 'Divider',
    path: '/Versakit-Vue/components/divider/',
    description: '用于分隔内容区域的视觉元素，通常以线条或空白区域形式呈现。',
    letter: 'D',
    color: 'rgba(41, 128, 185, 0.2)',
  },
  {
    name: 'Modal',
    path: '/Versakit-Vue/components/modal/',
    description:
      '模态框，用于在当前页面层级之上展示重要信息、请求用户确认或执行关键操作。',
    letter: 'M',
    color: 'rgba(41, 128, 185, 0.2)',
  },
  {
    name: 'Kbd',
    path: '/Versakit-Vue/components/kbd/',
    description:
      '用于标识用户需要通过键盘输入的内容（如快捷键、命令行输入等）。',
    letter: 'K',
    color: 'rgba(243, 156, 18, 0.2)',
  },
  {
    name: 'Drawer',
    path: '/Versakit-Vue/components/drawer/',
    description:
      '常见的移动端和桌面端交互组件，通常以侧边滑出或底部弹出的形式呈现。',
    letter: 'D',
    color: 'rgba(243, 156, 18, 0.2)',
  },
  {
    name: 'InputOtp',
    path: '/Versakit-Vue/components/inputopt/',
    description: '专为输入短序列密码（如 PIN 码、验证码）设计的交互组件。',
    letter: 'I',
    color: 'rgba(142, 68, 173, 0.2)',
  },
  {
    name: 'Popover',
    path: '/Versakit-Vue/components/popover/',
    description:
      '轻量级的浮动层组件，用于在触发元素附近显示额外信息或操作选项。',
    letter: 'P',
    color: 'rgba(229, 83, 83, 0.2)',
  },
  {
    name: 'Segmented',
    path: '/Versakit-Vue/components/segmented/',
    description: '水平排列的选项卡控件，用于在多个互斥选项之间进行快速切换。',
    letter: 'S',
    color: 'rgba(155, 89, 182, 0.2)',
  },
  {
    name: 'Slider',
    path: '/Versakit-Vue/components/slider/',
    description: '允许用户通过拖动滑块在指定范围内选择连续或离散值的交互控件。',
    letter: 'S',
    color: 'rgba(46, 204, 113, 0.2)',
  },
  {
    name: 'Switch',
    path: '/Versakit-Vue/components/switch/',
    description:
      '二元状态选择器，用于在两种状态间快速切换（如 "开 / 关"、"启用 / 禁用"）。',
    letter: 'S',
    color: 'rgba(52, 152, 219, 0.2)',
  },
  {
    name: 'Textarea',
    path: '/Versakit-Vue/components/textarea/',
    description: '用于输入多行文本的交互组件，通常以文本框形式呈现。',
    letter: 'T',
    color: 'rgba(39, 174, 96, 0.2)',
  },
  {
    name: 'Tabs',
    path: '/Versakit-Vue/components/tabs/',
    description: '常见的界面模式，用于在有限空间内组织和切换多个内容面板。',
    letter: 'T',
    color: 'rgba(39, 174, 96, 0.2)',
  },
  {
    name: 'Tooltip',
    path: '/Versakit-Vue/components/tooltip/',
    description:
      '轻量级信息提示组件，当用户悬停、聚焦或点击元素时，会在其附近显示简短说明文本。',
    letter: 'T',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'Select',
    path: '/Versakit-Vue/components/select/',
    description: '用于从预定义选项列表中选择单个或多个条目的交互控件。',
    letter: 'S',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'Checkbox',
    path: '/Versakit-Vue/components/checkbox/',
    description: '用于从多个选项中选择零个或多个条目的交互控件。',
    letter: 'C',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'Rate',
    path: '/Versakit-Vue/components/rate/',
    description: '用于显示评分或评价的交互组件，通常以星星或心形等形式呈现。',
    letter: 'R',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'Input',
    path: '/Versakit-Vue/components/input/',
    description: '用于输入单行或多行文本的交互组件，通常以文本框形式呈现。',
    letter: 'I',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'DatePicker',
    path: '/Versakit-Vue/components/datepicker/',
    description: '用于选择日期的交互组件，通常以日历形式呈现。',
    letter: 'D',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'DateTimePicker',
    path: '/Versakit-Vue/components/datetimepicker/',
    description: '用于选择日期和时间的交互组件，通常以日历形式呈现。',
    letter: 'D',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'TimePicker',
    path: '/Versakit-Vue/components/timepicker/',
    description: '用于选择时间的交互组件，通常以时间选择器形式呈现。',
    letter: 'T',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'TimeSelect',
    path: '/Versakit-Vue/components/timeselect/',
    description: '用于选择时间的交互组件，通常以时间选择器形式呈现。',
    letter: 'T',
    color: 'rgba(25, 113, 194, 0.2)',
  },
  {
    name: 'Skeleton',
    path: '/Versakit-Vue/components/skeleton/',
    description: '用于显示骨架屏的组件，通常以骨架屏形式呈现。',
    letter: 'S',
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
  color: var(--vk-text-primary, #222);
}

.overview-description {
  font-size: 16px;
  color: var(--vk-text-secondary, #666);
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
  background-color: var(--vk-card-bg, #fff);
  box-shadow: 0 4px 12px var(--vk-shadow-color, rgba(0, 0, 0, 0.05));
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  height: 100%;
  border: 1px solid var(--vk-border-color, rgba(0, 0, 0, 0.05));

  .dark & {
    background-color: var(--vk-card-bg, #2a2a2a);
    border-color: var(--vk-border-color, rgba(255, 255, 255, 0.08));
  }
}

.component-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px var(--vk-shadow-hover, rgba(0, 0, 0, 0.1));
  border-color: var(--vk-border-hover, rgba(0, 0, 0, 0.1));
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
  color: var(--vk-icon-text, rgba(0, 0, 0, 0.75));

  .dark & {
    color: var(--vk-icon-text, rgba(255, 255, 255, 0.85));
  }
}

.component-name {
  font-size: 20px;
  font-weight: 600;
  color: var(--vk-text-primary, #333);
  margin: 0;

  .dark & {
    color: var(--vk-text-primary, #e0e0e0);
  }
}

.component-desc {
  font-size: 15px;
  color: var(--vk-text-secondary, #666);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1;

  .dark & {
    color: var(--vk-text-secondary, #a0a0a0);
  }
}

@media (max-width: 768px) {
  .component-overview {
    padding: 20px;
  }

  .component-grid {
    grid-template-columns: 1fr;
  }
}

:root {
  --vk-text-primary: #222;
  --vk-text-secondary: #666;
  --vk-card-bg: #fff;
  --vk-shadow-color: rgba(0, 0, 0, 0.05);
  --vk-shadow-hover: rgba(0, 0, 0, 0.1);
  --vk-border-color: rgba(0, 0, 0, 0.05);
  --vk-border-hover: rgba(0, 0, 0, 0.1);
  --vk-icon-text: rgba(0, 0, 0, 0.75);
}

.dark {
  --vk-text-primary: #e0e0e0;
  --vk-text-secondary: #a0a0a0;
  --vk-card-bg: #2a2a2a;
  --vk-shadow-color: rgba(0, 0, 0, 0.2);
  --vk-shadow-hover: rgba(0, 0, 0, 0.3);
  --vk-border-color: rgba(255, 255, 255, 0.08);
  --vk-border-hover: rgba(255, 255, 255, 0.15);
  --vk-icon-text: rgba(255, 255, 255, 0.85);
}
</style>
