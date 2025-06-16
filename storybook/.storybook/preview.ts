import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // 设置文档主题（可选）
    docs: {
      theme: {
        brandTitle: 'Versakit UI',
        brandUrl: 'https://versakit.github.io/Versakit/',
      },
    },
    // 设置默认视图模式
    viewMode: 'docs',
    // 添加暗黑模式支持
    darkMode: {
      current: 'light',
      stylePreview: true,
      classTarget: 'html',
      darkClass: 'dark',
      lightClass: 'light',
    },
  },
  // 添加全局装饰器
  decorators: [
    (story) => ({
      components: { story },
      template: '<div class="versakit-theme min-h-screen p-4"><story /></div>',
    }),
  ],
}

// 设置全局装饰器或插件
setup((app) => {
  // 注册所有组件
})

export default preview
