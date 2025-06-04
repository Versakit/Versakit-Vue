import type { App, Component } from 'vue'

// 基础组件

// 样式
import './style/index.css'

const components: Component[] = []

const Versakit = {
  /**
   * 安装方法
   * @param app - Vue 应用实例
   * @param options - 可选的配置项
   * @param options.theme - 主题配置项
   * @param options.theme.preset - 预设主题
   */
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
