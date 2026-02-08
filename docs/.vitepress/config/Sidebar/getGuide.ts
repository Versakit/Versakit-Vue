import type { DefaultTheme } from 'vitepress'

export const getGuideSidebar = (): DefaultTheme.Sidebar => {
  return [
    {
      text: '入门指南',
      collapsed: false,
      items: [
        { text: '介绍', link: '/guide/getting-started/introduction' },
        { text: '安装', link: '/guide/getting-started/installation' },
        { text: '快速开始', link: '/guide/getting-started/quickstart' },
      ],
    },
    {
      text: '定制指南',
      collapsed: false,
      items: [{ text: '暗黑模式', link: '/guide/customization/dark-mode' }],
    },
    {
      text: '开发指南',
      collapsed: false,
      items: [
        { text: 'CI/CD 自动化测试', link: '/guide/development/ci-cd' },
        { text: '测试质量保证', link: '/guide/development/testing-quality' },
      ],
    },
    {
      text: '无障碍访问',
      collapsed: false,
      items: [{ text: '无障碍指南', link: '/guide/accessibility/' }],
    },
    {
      text: '其他',
      collapsed: false,
      items: [{ text: '更新日志', link: '/guide/log/' }],
    },
  ]
}
