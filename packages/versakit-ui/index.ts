import type { App, Component } from 'vue'

// 基础组件
import { VKButton } from './components/button'

// 样式
import './style/index.css'

const components: Component[] = [VKButton]

export { VKButton }

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
