import type { App, Component } from 'vue'
import { VKPinInput } from './components/PinInput'
import { VKTabs } from './components/Tabs'
import { VKDialog } from './components/Dialog'
import { VKAvatar } from './components/Avatar'
import { VKBadge } from './components/Badge'
import { VKSwitch } from './components/Switch'

// 引入样式
import './style/index.css'

const components: Component[] = [
  VKPinInput,
  VKTabs,
  VKDialog,
  VKAvatar,
  VKBadge,
  VKSwitch,
]

export { VKPinInput, VKTabs, VKDialog, VKAvatar, VKBadge, VKSwitch }

const Versakit = {
  install: (app: App) => {
    for (const c in components) {
      app.component(components[c]?.name || c, components[c])
    }
  },
}

export { Versakit }
