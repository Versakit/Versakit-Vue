import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { registerComponents } from './registerComponents'

// 导入组件库样式（如果有）
import '@versakit/vue/style'

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
  },
}

// 设置全局装饰器或插件
setup((app) => {
  // 注册所有组件
  registerComponents(app)
})

export default preview
