import type { App, Component } from 'vue'
import VKButton from './components/button/index'

// 基础组件

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
