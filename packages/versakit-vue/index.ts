import type { App, Component } from 'vue'
import { VKPinInput } from './components/PinInput'

// 引入样式
import './style/index.css'

const components: Component[] = [VKPinInput]

export { VKPinInput }

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
