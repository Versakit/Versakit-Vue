import type { App, Component } from 'vue'
import { VKPinInput } from './components/PinInput'
import { VKTabs } from './components/Tabs'
import { VKDialog } from './components/Dialog'

// 引入样式
import './style/index.css'

const components: Component[] = [VKPinInput, VKTabs, VKDialog]

export { VKPinInput, VKTabs, VKDialog }

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
