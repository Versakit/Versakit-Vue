import type { Feature, ComponentItem } from './types'

export const features: Feature[] = [
  {
    title: '无头设计',
    description:
      '逻辑与样式完全解耦，提供 100% 样式控制权，支持完全自定义或使用默认样式',
    icon: 'headless',
  },
  {
    title: 'TypeScript 支持',
    description: '完整的 TypeScript 类型定义，提供更好的开发体验和类型安全',
    icon: 'typescript',
  },
  {
    title: '高度可定制',
    description:
      '基于 Tailwind CSS 和 tailwind-variants，支持主题定制和样式传递（PT）',
    icon: 'customize',
  },
  {
    title: '无障碍访问',
    description:
      '遵循 WCAG 2.1 标准，支持键盘导航和屏幕阅读器，确保所有用户都能使用',
    icon: 'accessibility',
  },
]

export const featuredComponents: ComponentItem[] = [
  {
    name: 'Button',
    description: '按钮组件',
    path: '/Versakit-Vue/components/button/',
  },
  {
    name: 'Input',
    description: '输入框组件',
    path: '/Versakit-Vue/components/input/',
  },
  {
    name: 'Card',
    description: '卡片组件',
    path: '/Versakit-Vue/components/card/',
  },
  {
    name: 'Modal',
    description: '模态框组件',
    path: '/Versakit-Vue/components/modal/',
  },
  {
    name: 'Dropdown',
    description: '下拉菜单组件',
    path: '/Versakit-Vue/components/dropdown/',
  },
  {
    name: 'Tabs',
    description: '标签页组件',
    path: '/Versakit-Vue/components/tabs/',
  },
  {
    name: 'Progress',
    description: '进度条组件',
    path: '/Versakit-Vue/components/progress/',
  },
  {
    name: 'Alert',
    description: '警告提示组件',
    path: '/Versakit-Vue/components/alert/',
  },
]
