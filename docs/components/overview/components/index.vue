<template>
  <div class="component-overview">
    <h1 class="overview-title">组件总览</h1>
    <p class="overview-description">
      Versakit 提供了一系列功能丰富、易于使用的组件，用于构建现代化的用户界面。
    </p>

    <!-- 组件统计卡片 -->
    <div class="stats-container">
      <div class="stats-card total-stats">
        <div class="stats-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
        <div class="stats-content">
          <div class="stats-value">{{ componentsData.length }}</div>
          <div class="stats-label">总组件数</div>
        </div>
      </div>
      <div
        class="stats-card"
        v-for="(count, category) in componentsByCategory"
        :key="category"
      >
        <div
          class="stats-icon"
          :style="{ backgroundColor: getCategoryColor(category) }"
        >
          <span>{{ category[0].toUpperCase() }}</span>
        </div>
        <div class="stats-content">
          <div class="stats-value">{{ count }}</div>
          <div class="stats-label">
            {{ categoryLabels[category] || category }}
          </div>
        </div>
      </div>
    </div>

    <!-- 组件类别过滤器 -->
    <div class="filter-container">
      <button
        class="filter-button"
        :class="{ active: activeFilter === 'all' }"
        @click="activeFilter = 'all'"
      >
        全部
      </button>
      <button
        v-for="category in Object.keys(componentsByCategory)"
        :key="category"
        class="filter-button"
        :class="{ active: activeFilter === category }"
        @click="activeFilter = category"
      >
        {{ categoryLabels[category] || category }}
      </button>
    </div>

    <div class="component-grid">
      <a
        v-for="component in filteredComponents"
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
        <div class="component-tag">{{ getComponentCategory(component) }}</div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

// 组件分类
const categoryLabels = {
  form: '表单组件',
  feedback: '反馈组件',
  data: '数据展示',
  navigation: '导航组件',
  layout: '布局组件',
  other: '其他组件',
}

// 当前激活的过滤器
const activeFilter = ref('all')

const componentsData = [
  {
    name: 'Accordion',
    path: '/Versakit-Vue/components/accordion/',
    description: '用于显示手风琴的组件，通常以手风琴形式呈现。',
    letter: 'A',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'layout',
  },
  {
    name: 'InputTag',
    path: '/Versakit-Vue/components/inputtag/',
    description: '用于输入标签的组件，通常以标签形式呈现。',
    letter: 'I',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'form',
  },
  {
    name: 'Carousel',
    path: '/Versakit-Vue/components/carousel/',
    description: '用于显示轮播图的组件，通常以轮播图形式呈现。',
    letter: 'C',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'navigation',
  },
  {
    name: 'Dropdown',
    path: '/Versakit-Vue/components/dropdown/',
    description: '用于下拉菜单的组件，通常以下拉菜单形式呈现。',
    letter: 'D',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'navigation',
  },
  {
    name: 'Swap 调换',
    path: '/Versakit-Vue/components/swap/',
    description: '用于在两种状态间切换内容显示的交互式组件。',
    letter: 'S',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'layout',
  },
  {
    name: 'Alert',
    path: '/Versakit-Vue/components/alert/',
    description: '用于显示重要信息或操作结果的通知组件。',
    letter: 'A',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'feedback',
  },
  {
    name: 'RangeCalendar',
    path: '/Versakit-Vue/components/rangecalendar/',
    description: '用于选择日期范围的组件，通常以日历形式呈现。',
    letter: 'R',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'data',
  },
  {
    name: 'Splitter',
    path: '/Versakit-Vue/components/splitter/',
    description: '用于分割容器区域的组件，通常以分割线形式呈现。',
    letter: 'S',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'layout',
  },
  {
    name: 'Timeline',
    path: '/Versakit-Vue/components/timeline/',
    description: '用于显示时间轴的组件，通常以时间轴形式呈现。',
    letter: 'T',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'layout',
  },
  {
    name: 'Avatar',
    path: '/Versakit-Vue/components/avatar/',
    description:
      '表示用户或对象身份的图形化标识，通常显示为圆形或方形的图片、图标或字母组合。',
    letter: 'A',
    color: 'rgba(241, 196, 15, 0.2)',
    category: 'data',
  },
  {
    name: 'Breadcrumb',
    path: '/Versakit-Vue/components/breadcrumb/',
    description:
      '面包屑导航用于显示当前页面在网站层级结构中的位置，并提供返回各级的导航能力。',
    letter: 'B',
    color: 'rgba(231, 76, 60, 0.2)',
    category: 'navigation',
  },
  {
    name: 'Button',
    path: '/Versakit-Vue/components/button/',
    description: '用于触发用户操作的交互元素，通常以按钮形式呈现。',
    letter: 'B',
    color: 'rgba(231, 76, 60, 0.2)',
    category: 'form',
  },
  {
    name: 'Badge',
    path: '/Versakit-Vue/components/badge/',
    description:
      '用于显示状态标记或通知计数的小型视觉指示器，通常以圆形或椭圆形徽章形式出现。',
    letter: 'B',
    color: 'rgba(231, 76, 60, 0.2)',
    category: 'data',
  },
  {
    name: 'Card',
    path: '/Versakit-Vue/components/card/',
    description: '用于显示内容和信息的容器组件，通常以卡片形式呈现。',
    letter: 'C',
    color: 'rgba(231, 76, 60, 0.2)',
    category: 'layout',
  },
  {
    name: 'Calendar',
    path: '/Versakit-Vue/components/calendar/',
    description: '用于显示日历的组件，通常以日历形式呈现。',
    letter: 'C',
    color: 'rgba(231, 76, 60, 0.2)',
    category: 'data',
  },
  {
    name: 'Chip',
    path: '/Versakit-Vue/components/chip/',
    description:
      '用于显示状态标记或通知计数的小型视觉指示器，通常以圆形或椭圆形徽章形式出现。',
    letter: 'C',
    color: 'rgba(231, 76, 60, 0.2)',
    category: 'data',
  },
  {
    name: 'Divider',
    path: '/Versakit-Vue/components/divider/',
    description: '用于分隔内容区域的视觉元素，通常以线条或空白区域形式呈现。',
    letter: 'D',
    color: 'rgba(41, 128, 185, 0.2)',
    category: 'layout',
  },
  {
    name: 'Modal',
    path: '/Versakit-Vue/components/modal/',
    description:
      '模态框，用于在当前页面层级之上展示重要信息、请求用户确认或执行关键操作。',
    letter: 'M',
    color: 'rgba(41, 128, 185, 0.2)',
    category: 'feedback',
  },
  {
    name: 'Kbd',
    path: '/Versakit-Vue/components/kbd/',
    description:
      '用于标识用户需要通过键盘输入的内容（如快捷键、命令行输入等）。',
    letter: 'K',
    color: 'rgba(243, 156, 18, 0.2)',
    category: 'other',
  },
  {
    name: 'Paginator',
    path: '/Versakit-Vue/components/paginator/',
    description: '用于分页的组件，通常以分页器形式呈现。',
    letter: 'P',
    color: 'rgba(243, 156, 18, 0.2)',
    category: 'navigation',
  },
  {
    name: 'Panel',
    path: '/Versakit-Vue/components/panel/',
    description: '用于显示内容和信息的容器组件，通常以面板形式呈现。',
    letter: 'P',
    color: 'rgba(243, 156, 18, 0.2)',
    category: 'layout',
  },
  {
    name: 'Progress',
    path: '/Versakit-Vue/components/progress/',
    description:
      '用于展示操作的当前进度、状态和完成程度，帮助用户了解长时间任务的执行情况。',
    letter: 'P',
    color: 'rgba(243, 156, 18, 0.2)',
    category: 'feedback',
  },
  {
    name: 'Drawer',
    path: '/Versakit-Vue/components/drawer/',
    description:
      '常见的移动端和桌面端交互组件，通常以侧边滑出或底部弹出的形式呈现。',
    letter: 'D',
    color: 'rgba(243, 156, 18, 0.2)',
    category: 'feedback',
  },
  {
    name: 'InputOtp',
    path: '/Versakit-Vue/components/inputopt/',
    description: '专为输入短序列密码（如 PIN 码、验证码）设计的交互组件。',
    letter: 'I',
    color: 'rgba(142, 68, 173, 0.2)',
    category: 'form',
  },
  {
    name: 'Popover',
    path: '/Versakit-Vue/components/popover/',
    description:
      '轻量级的浮动层组件，用于在触发元素附近显示额外信息或操作选项。',
    letter: 'P',
    color: 'rgba(229, 83, 83, 0.2)',
    category: 'feedback',
  },
  {
    name: 'Segmented',
    path: '/Versakit-Vue/components/segmented/',
    description: '水平排列的选项卡控件，用于在多个互斥选项之间进行快速切换。',
    letter: 'S',
    color: 'rgba(155, 89, 182, 0.2)',
    category: 'navigation',
  },
  {
    name: 'Slider',
    path: '/Versakit-Vue/components/slider/',
    description: '允许用户通过拖动滑块在指定范围内选择连续或离散值的交互控件。',
    letter: 'S',
    color: 'rgba(46, 204, 113, 0.2)',
    category: 'form',
  },
  {
    name: 'Switch',
    path: '/Versakit-Vue/components/switch/',
    description:
      '二元状态选择器，用于在两种状态间快速切换（如 "开 / 关"、"启用 / 禁用"）。',
    letter: 'S',
    color: 'rgba(52, 152, 219, 0.2)',
    category: 'form',
  },
  {
    name: 'Textarea',
    path: '/Versakit-Vue/components/textarea/',
    description: '用于输入多行文本的交互组件，通常以文本框形式呈现。',
    letter: 'T',
    color: 'rgba(39, 174, 96, 0.2)',
    category: 'form',
  },
  {
    name: 'Tabs',
    path: '/Versakit-Vue/components/tabs/',
    description: '常见的界面模式，用于在有限空间内组织和切换多个内容面板。',
    letter: 'T',
    color: 'rgba(39, 174, 96, 0.2)',
    category: 'navigation',
  },
  {
    name: 'Tooltip',
    path: '/Versakit-Vue/components/tooltip/',
    description:
      '轻量级信息提示组件，当用户悬停、聚焦或点击元素时，会在其附近显示简短说明文本。',
    letter: 'T',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'feedback',
  },
  {
    name: 'Select',
    path: '/Versakit-Vue/components/select/',
    description: '用于从预定义选项列表中选择单个或多个条目的交互控件。',
    letter: 'S',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'Checkbox',
    path: '/Versakit-Vue/components/checkbox/',
    description: '用于从多个选项中选择零个或多个条目的交互控件。',
    letter: 'C',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'Rate',
    path: '/Versakit-Vue/components/rate/',
    description: '用于显示评分或评价的交互组件，通常以星星或心形等形式呈现。',
    letter: 'R',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'Input',
    path: '/Versakit-Vue/components/input/',
    description: '用于输入单行或多行文本的交互组件，通常以文本框形式呈现。',
    letter: 'I',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'DatePicker',
    path: '/Versakit-Vue/components/datepicker/',
    description: '用于选择日期的交互组件，通常以日历形式呈现。',
    letter: 'D',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'DateTimePicker',
    path: '/Versakit-Vue/components/datetimepicker/',
    description: '用于选择日期和时间的交互组件，通常以日历形式呈现。',
    letter: 'D',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'TimePicker',
    path: '/Versakit-Vue/components/timepicker/',
    description: '用于选择时间的交互组件，通常以时间选择器形式呈现。',
    letter: 'T',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'TimeSelect',
    path: '/Versakit-Vue/components/timeselect/',
    description: '用于选择时间的交互组件，通常以时间选择器形式呈现。',
    letter: 'T',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'form',
  },
  {
    name: 'Skeleton',
    path: '/Versakit-Vue/components/skeleton/',
    description: '用于显示骨架屏的组件，通常以骨架屏形式呈现。',
    letter: 'S',
    color: 'rgba(25, 113, 194, 0.2)',
    category: 'feedback',
  },
]

// 按类别统计组件数量
const componentsByCategory = computed(() => {
  const result = {}
  componentsData.forEach((component) => {
    const category = component.category || 'other'
    if (!result[category]) {
      result[category] = 0
    }
    result[category]++
  })
  return result
})

// 获取组件分类
const getComponentCategory = (component) => {
  return categoryLabels[component.category] || '其他组件'
}

// 获取分类颜色
const getCategoryColor = (category) => {
  const colors = {
    form: 'rgba(52, 152, 219, 0.2)',
    feedback: 'rgba(231, 76, 60, 0.2)',
    data: 'rgba(46, 204, 113, 0.2)',
    navigation: 'rgba(241, 196, 15, 0.2)',
    layout: 'rgba(155, 89, 182, 0.2)',
    other: 'rgba(149, 165, 166, 0.2)',
  }
  return colors[category] || 'rgba(149, 165, 166, 0.2)'
}

// 按字母顺序排序的组件
const sortedComponents = computed(() => {
  return [...componentsData].sort((a, b) => a.name.localeCompare(b.name))
})

// 根据当前过滤器筛选组件
const filteredComponents = computed(() => {
  if (activeFilter.value === 'all') {
    return sortedComponents.value
  }
  return sortedComponents.value.filter(
    (component) => component.category === activeFilter.value,
  )
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
  margin-bottom: 32px;
  max-width: 700px;
  line-height: 1.6;
}

/* 统计卡片样式 */
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.stats-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--vk-card-bg, #fff);
  box-shadow: 0 2px 8px var(--vk-shadow-color, rgba(0, 0, 0, 0.05));
  border: 1px solid var(--vk-border-color, rgba(0, 0, 0, 0.05));
  transition: all 0.2s ease;
}

.stats-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--vk-shadow-hover, rgba(0, 0, 0, 0.1));
}

.total-stats {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
}

.total-stats .stats-label,
.total-stats .stats-value {
  color: white;
}

.stats-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--vk-icon-text, rgba(0, 0, 0, 0.75));
  font-weight: 600;
  font-size: 18px;
}

.stats-content {
  display: flex;
  flex-direction: column;
}

.stats-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--vk-text-primary, #222);
  line-height: 1.2;
}

.stats-label {
  font-size: 14px;
  color: var(--vk-text-secondary, #666);
}

/* 过滤器样式 */
.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.filter-button {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  background-color: var(--vk-card-bg, #fff);
  color: var(--vk-text-secondary, #666);
  border: 1px solid var(--vk-border-color, rgba(0, 0, 0, 0.1));
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-button:hover {
  background-color: var(--vk-hover-bg, #f5f5f5);
}

.filter-button.active {
  background-color: var(--vk-primary, #4f46e5);
  color: white;
  border-color: var(--vk-primary, #4f46e5);
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
  position: relative;

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

.component-tag {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  background-color: var(--vk-tag-bg, rgba(79, 70, 229, 0.1));
  color: var(--vk-primary, #4f46e5);
  font-weight: 500;
}

@media (max-width: 768px) {
  .component-overview {
    padding: 20px;
  }

  .stats-container {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
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
  --vk-primary: #4f46e5;
  --vk-hover-bg: #f5f5f5;
  --vk-tag-bg: rgba(79, 70, 229, 0.1);
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
  --vk-hover-bg: #333;
  --vk-tag-bg: rgba(79, 70, 229, 0.2);
}
</style>
